# Use Node.js 25 as base
FROM node:25.0.0

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Expose port 5000
EXPOSE 5000

# Set environment variable
ENV PORT=5000

# Start app
CMD ["npm", "run", "dev"]
