FROM node:alpine
COPY package.json package-lock.json src ./
RUN npm install
CMD npm start
