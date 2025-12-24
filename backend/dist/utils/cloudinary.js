import { v2 as cloudinary } from 'cloudinary';
import streamifier from "streamifier";
import { ENV } from "../config/index.js";
cloudinary.config({
    cloud_name: ENV.CLOUND_NAME,
    api_key: ENV.API_KEY,
    api_secret: ENV.API_SECRET
});
export const uploadToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ folder: "pics" }, (error, result) => {
            if (error)
                reject(error);
            if (!result) {
                return reject(new Error("Upload result is undefined"));
            }
            else
                resolve(result);
        });
        streamifier.createReadStream(fileBuffer).pipe(stream);
    });
};
//# sourceMappingURL=cloudinary.js.map