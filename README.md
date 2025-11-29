## Purpose
This repository is a simple test project for Express and MongoDB.
Important Notes

## Important Notes
- The repository does not include the node_modules folder or the .env file.
- You can easily recreate these as follows:

1. Environment Variables
An .env file is optional because the default configuration already connects to MongoDB and starts the HTTP server.
If you want to create one, add it to the project root with the following content:
  ```
  # MongoDB connection string for local database (MONGODB)
  MONGO_URI=mongodb://localhost:27017/myDB
  
  # Port number for the Express server (HTTP)
  PORT=3000
  ```

2. Install Dependencies
Run this command in the project root to install all required packages.
It uses package.json and package-lock.json to ensure exact versions:
  ```cmd
  npm install
  ```
