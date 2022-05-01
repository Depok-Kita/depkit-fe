# Install dependencies only when needed
FROM node:16-alpine

# set port
ENV PORT 3000

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# copy package.json
COPY package*.json yarn.lock ./
# Install dependencies
RUN yarn install --frozen-lockfile

# Copying source files
COPY . /app

# Building app
RUN npm run build
EXPOSE 3000

CMD "npm" "run" "dev"

