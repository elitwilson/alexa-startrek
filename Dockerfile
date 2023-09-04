# ---- Base AWS Lambda Node Image ----
FROM public.ecr.aws/lambda/nodejs:14 as base

# Set working directory
WORKDIR /var/task

# Install yarn
RUN npm install -g yarn

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --production

# ---- Build ----
FROM base as build
COPY . .
RUN yarn tsc

# ---- Production AWS Lambda ----
FROM base as production

# Copy only production node_modules
COPY --from=build /var/task/node_modules ./node_modules

# Copy compiled TypeScript code
COPY --from=build /var/task/dist ./dist

# Command can be overridden by providing a different command via the AWS Lambda console.
CMD ["dist/index.handler"]
