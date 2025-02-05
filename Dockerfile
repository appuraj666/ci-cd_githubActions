# Use an official Node.js image as the build environment
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all project files
COPY . .

# Build the React app
RUN npm run build

# Use an official Nginx image to serve the build
FROM nginx:latest

# Copy build files to Nginx's default public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx runs on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
