React Frontend CI/CD with GitHub Actions 🚀

This project is a React frontend application with a complete CI/CD pipeline using GitHub Actions, Docker, and Nginx.

🌟 Features

Automated Build & Test on every push to main.

Docker Image Creation and push to Docker Hub.

Automatic Deployment to a remote server.

Nginx Configuration for serving the React app.

🔄 CI/CD Workflow Setup

1️⃣ When Does the Workflow Run?

This workflow is triggered on:

Every push to the main branch.

Every pull request to the main branch.

2️⃣ GitHub Actions Workflow (.github/workflows/deploy.yml)

name: CI/CD Pipeline

on:
push:
branches: - main
pull_request:
branches: - main

jobs:
build:
runs-on: ubuntu-latest
steps: - name: Checkout code
uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install --legacy-peer-deps

      - name: Build React app
        run: npm run build

      - name: Run tests
        run: npm test -- --watchAll=false

✅ For complete deployment steps, refer to .github/workflows/deploy.yml.

🛠️ Deployment Process

GitHub Actions builds and tests the React app.

A Docker image is created and pushed to Docker Hub.

The latest image is pulled on the remote server and deployed using Nginx.

📂 Project Structure

├── .github/workflows/deploy.yml # GitHub Actions Workflow
├── Dockerfile # Docker Configuration
├── nginx.conf # Nginx Configuration
├── src/ # React Source Code
├── public/ # Static Assets
├── package.json # Dependencies & Scripts
├── README.md # Project Documentation

🔑 GitHub Secrets Used

Secret Name

Description

DOCKER_USERNAME

Docker Hub username

DOCKER_PASSWORD

Docker Hub password

SERVER_HOST

Remote server IP

SERVER_USER

SSH username

SSH_PRIVATE_KEY

Private SSH key for deployment

🚀 How to Deploy Manually

To manually deploy the project:

Clone the repository:

git clone https://github.com/your-repo.git && cd your-repo

Build the Docker image:

docker build -t your-image-name .

Run the container:

docker run -d -p 80:80 your-image-name

🎯 Contact

For any issues, open an Issue or reach out!

Happy Coding! 🚀
