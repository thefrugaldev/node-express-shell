import express from 'express';
import dotenv from 'dotenv';

const app = express();
const isDevelopment = app.get('env') === 'development';

dotenv.config();

if (!isDevelopment) {
  console.log(
    '😨 🚧 😨 🚧 😨 🚧 😨 🚧  Working in production environment, proceed with caution'
  );
}

export default app;
