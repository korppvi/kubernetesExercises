FROM node:alpine
COPY . /usr/src/pingpong
WORKDIR /usr/src/pingpong
RUN npm ci
RUN npm run init
CMD ["npm", "start"]