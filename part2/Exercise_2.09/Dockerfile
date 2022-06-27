FROM node:alpine
COPY . /usr/src/job
WORKDIR /usr/src/job
RUN npm ci
CMD ["npm", "run","init"]