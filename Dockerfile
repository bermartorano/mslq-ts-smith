FROM node:16.14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src src
COPY .eslintignore .
COPY .eslintrc.json .
COPY Trybesmith.sql .
COPY tsconfig.json .
COPY recreateDatabase.ts .