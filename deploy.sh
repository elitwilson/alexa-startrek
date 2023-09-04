#!/bin/bash

# Stop on any error
set -e

# Variables
IMAGE_NAME="alexa-startrek"
REGION="us-east-2"
ACCOUNT_ID="852117226269"
FUNCTION_NAME="alexa-startrek"

# Step 1: Transpile TypeScript to JavaScript
echo "Transpiling TypeScript..."
yarn tsc

# Step 2: Build the Docker image
echo "Building Docker image..."
docker buildx create --use
docker buildx build --platform linux/amd64 -t $IMAGE_NAME .


# Step 3: Authenticate Docker to ECR
echo "Authenticating Docker client to Amazon ECR..."
aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com

# Step 4: Tag Docker image
echo "Tagging Docker image..."
docker tag $IMAGE_NAME:latest $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$IMAGE_NAME:latest

# Step 5: Push Docker image to ECR
echo "Pushing Docker image to ECR..."
docker push $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$IMAGE_NAME:latest

# Step 6: Update Lambda function
echo "Updating Lambda function..."
aws lambda update-function-code --function-name $FUNCTION_NAME --image-uri $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$IMAGE_NAME:latest

echo "Deployment completed!"
