# Select Node/Alpine image from registry
FROM node:18.13.0-alpine
# Set the container working directory
WORKDIR /usr/app/backend
# Copy from local to container
COPY package.json yarn.* ./
# Recursively setting user:group as owners for the target files
RUN chown -R node:node /usr/app
# Set cache dir through env
ENV CACHE_DIR /usr/app/backend/.cache/
# Install npm dependencies
RUN yarn
# Copy from local to container
COPY . ./
# Switch the user inside the Container from root to node (security best practice)
USER node
# Expose port 3333
EXPOSE 3333
# Start app
ENTRYPOINT ["node", "ace", "serve", "--watch"]
