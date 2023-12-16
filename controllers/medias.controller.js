// import fsPromise from "fs/promises";
import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
config();

cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export const uploadImageController = async (req, res, next) => {
  const imagePath = req.filePath;
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    // await fsPromise.unlink(imagePath);
    return res.json({
      message: "Upload image successfully",
      result: {
        image: result.secure_url,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
