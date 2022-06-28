FROM node:alpine
COPY . /usr/src/webserver
WORKDIR /usr/src/webserver/frontend
RUN npm ci
RUN npm run build
RUN cp -R build ../backend/build
WORKDIR /usr/src/webserver/backend
RUN npm ci
CMD ["npm", "start"]