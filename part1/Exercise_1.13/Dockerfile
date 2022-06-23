FROM node:alpine
COPY . /usr/src/webserver
WORKDIR /usr/src/webserver
RUN npm ci
CMD ["npm", "start"]