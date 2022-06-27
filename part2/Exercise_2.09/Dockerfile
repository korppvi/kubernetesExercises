FROM node:alpine
COPY . /usr/src
WORKDIR /usr/src/jobs
RUN npm ci
CMD ["npm", "run","init"]