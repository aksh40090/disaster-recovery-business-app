FROM node:24-alpine
WORKDIR /app
COPY package.json ./
COPY server.js ./
COPY test.js ./
EXPOSE 4002
CMD ["node", "server.js"]
