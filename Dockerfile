FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci
CMD ["npm", "run", "dev"]
EXPOSE 5000
