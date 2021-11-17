import cloudinary from 'cloudinary';

if (!process.env.CLOUDINARY_NAME) {
  new Error('We not Have Konfigureshion for Cloudinory');
};

// @ts-ignore
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;