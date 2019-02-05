FROM node:8

WORKDIR /app

COPY package*.json ./

COPY dist ./dist

RUN npm install

EXPOSE 8080

COPY dist .

CMD [ "npm", "start" ]