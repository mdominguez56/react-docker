FROM node:19-alpine3.15
WORKDIR /app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]