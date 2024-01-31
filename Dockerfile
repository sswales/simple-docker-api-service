FROM node:21

WORKDIR /usr/src/app
COPY . .

RUN npm install -g typescript
RUN npm install
RUN tsc

EXPOSE 3000
CMD ["node", "dist/app.js"]