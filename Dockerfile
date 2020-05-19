FROM node:12.16.2 as build

WORKDIR /app

COPY . .
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install
RUN npm run-script build

FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]