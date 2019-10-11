FROM node:alpine
WORKDIR app
COPY package.json package-lock.json ./
COPY src ./src
RUN npm install
CMD npm start
