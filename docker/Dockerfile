# Use the official Node.js image.
FROM node:22-slim

# Create a directory for the app and set it as the working directory.
WORKDIR /app

# Copy package.json and package-lock.json (if you are using it).
COPY package*.json ./

# Install app dependencies (Next.js, React, etc.)
RUN npm install

# Copy all the app files to the container.
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 to the host.
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "start"]
