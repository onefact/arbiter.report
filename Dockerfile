# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the Next.js application port (if needed)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
