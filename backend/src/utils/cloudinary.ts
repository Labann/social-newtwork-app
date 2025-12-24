import { v2 as cloudinary, type UploadApiErrorResponse, type UploadApiResponse } from 'cloudinary'
import streamifier from "streamifier";
import {ENV} from "../config/index.js"


cloudinary.config({ 
  cloud_name: ENV.CLOUND_NAME, 
  api_key: ENV.API_KEY, 
  api_secret: ENV.API_SECRET
});



export const uploadToCloudinary = (fileBuffer: Buffer): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "pics" },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) reject(error);
        
        if (!result) {
          return reject(new Error("Upload result is undefined"));
        }
        
        else resolve(result);
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};
