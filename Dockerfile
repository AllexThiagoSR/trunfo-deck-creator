FROM node:16.18.0
WORKDIR /app
COPY ./src /app/src
COPY ./public /app/public
COPY ./package*.json .
RUN npm install
ENTRYPOINT ["npm"]
CMD ["start"]
