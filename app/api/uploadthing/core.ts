import { createUploadthing } from "uploadthing/next";
import { type FileRouter } from "uploadthing/next";

const f = process.env.UPLOADTHING_TOKEN ? createUploadthing() : null;

export const ourFileRouter = f ? {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(() => ({}))
    .onUploadComplete(() => {}),
} satisfies FileRouter : {} as FileRouter;
