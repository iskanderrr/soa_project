# Step 1: Use Node.js as a builder
FROM node:16 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./fe/package*.json ./

# Install dependencies
RUN npm i --legacy-peer-deps

# Copy the source code
COPY ./fe .

# Build the React app
RUN npm run build

# Step 2: Use Nginx to serve the app
FROM nginx:alpine

# Copy the build output to Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
