# Base image
FROM node:18-alpine AS base

# Install curl for healthcheck
RUN apk add --no-cache curl

# Set the working directory
WORKDIR /home/node/app

# Add build arguments for secrets
ARG JWT_SECRET
ARG MONGO_URI=mongodb://root:example@mongodb:27017/qrgen?authSource=admin

# Set environment variables
ENV JWT_SECRET=$JWT_SECRET \
    MONGO_URI=$MONGO_URI \
    NODE_ENV=production \
    PORT=3000 \
    FRONTEND_URL=http://frontend:5000

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Change ownership to the node user
RUN chown -R node:node /home/node/app

# Switch to node user
USER node

# Copy remaining files
COPY --chown=node:node . .

EXPOSE 3000

CMD ["node", "server.js"]