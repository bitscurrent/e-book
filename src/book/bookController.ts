import { NextFunction, Request, Response } from "express";
import cloudinary from "../config/cloudinary";
import path from "path";
import globalErrorHandler from "../middlewares/globalErrorHandler";
import createHttpError from "http-errors";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  const {} = req.body;

  console.log("Files", req.files);

  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  const CoverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);

  const fileName = files.coverImage[0].filename;

  const filePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    fileName
  );

  const uploadResult = await cloudinary.uploader.upload(filePath, {
    filename_override: __filename,
    folder: "book-covers",
    format: CoverImageMimeType,
  });

  const bookFileName = files.file[0].filename;
  const bookFilePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    bookFileName
  );

  try {
    const bookFileUploadResult = await cloudinary.uploader.upload(
      bookFilePath,
      {
        resource_type: "raw",
        filename_override: bookFileName,
        folder: "book-pdfs",
        format: "pdf",
      }
    );
    console.log("bookUPLOAD", bookFileUploadResult);
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error uploading files:", error);
    // Send an error response back to the client

    return next(createHttpError(500, "Error while uploading the files"));
  }

  res.json({});
};

export { createBook };
