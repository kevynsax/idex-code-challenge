FROM node:12.16.2 as build

WORKDIR /app

COPY . .
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

CMD ["npm", "start"]