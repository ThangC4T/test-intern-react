# Step 1: Build the React app
FROM node:16 AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the React app using a simple Node.js server
FROM node:16 AS production

WORKDIR /app

# Install serve package globally
RUN npm install -g serve

# Copy the build output from the previous step
COPY --from=build /app/build ./build

# Expose port 3000 for the application
EXPOSE 3000

# Start the React app using serve
CMD ["serve", "-s", "build", "-l", "3000"]
