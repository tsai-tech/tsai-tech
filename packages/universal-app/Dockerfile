FROM node:10.14.2-alpine

COPY . .

RUN npm install
RUN npm run build:ssr

CMD node dist/universal-app.js
