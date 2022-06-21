FROM node:alpine
COPY . /usr/src/generator
WORKDIR /usr/src/generator
RUN npm ci
CMD ["npm", "start"]