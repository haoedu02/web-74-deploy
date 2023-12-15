import { Router } from "express";
import { accessTokenValidator } from "../middlewares/users.middleware.js";
import { uploadImageController } from "../controllers/medias.controller.js";
import { upload } from "../utils/upload.js";
const mediaRoute = Router();

mediaRoute.post(
  "/upload-image",
  accessTokenValidator,
  upload.single("avatar"),
  uploadImageController
);

export default mediaRoute;
