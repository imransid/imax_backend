import { NotFoundException } from "@nestjs/common";
import {
  createWriteStream,
  mkdirSync,
  stat,
  readdir,
  existsSync,
  rmdirSync,
  unlinkSync,
} from "fs";
import { join } from "path";
import { finished } from "stream/promises";

export const uploadFileStream = async (readStream, uploadDir, filename) => {
  const fileName = filename;
  const filePath = join(uploadDir, fileName);
  mkdirSync(uploadDir, { recursive: true });
  const inStream = readStream();
  const outStream = createWriteStream(filePath);
  inStream.pipe(outStream);
  await finished(outStream)
    .then(() => {
      console.log("file uploaded");
    })
    .catch((err) => {
      console.log(err.message);
      throw new NotFoundException(err.message);
    });
  return filePath;
};

export const deleteFileAndDirectory = (filePath, uploadDir, uploadRoot) => {
  if (existsSync(filePath)) {
    stat(filePath, (error, stat) => {
      if (error) throw new Error("File do not exist");
      if (stat.isFile()) {
        // Delete file
        unlinkSync(filePath);
        if (existsSync(uploadDir)) {
          readdir(uploadDir, function (err, files) {
            if (err) {
              throw new Error(`Dir ${uploadDir} not exist`);
            } else {
              if (!files.length) {
                rmdirSync(uploadDir);
              }
            }
          });
        }
        if (existsSync(uploadRoot)) {
          readdir(uploadRoot, function (err, files) {
            if (err) {
              throw new Error(`Dir ${uploadRoot} not exist`);
            } else {
              if (!files.length) {
                rmdirSync(uploadRoot);
              }
            }
          });
        }
      }
    });
  }
};
