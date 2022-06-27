FROM node:alpine
COPY . /usr/src/pingpong
WORKDIR /usr/src/pingpong
RUN npm ci
CMD ["npm", "start"]