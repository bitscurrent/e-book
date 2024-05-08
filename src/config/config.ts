import { config as conf } from "dotenv";
conf();

const _config = {
  port: process.env.PORT,
  mongodb_uri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  env: process.env.NODE_ENV,
  cloud_name: process.env.CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_API_KEY,

  api_secret: process.env.CLOUDINARY_API_SECRET,
};

export const config = Object.freeze(_config); //becomes readonly
