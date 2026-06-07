import { type FileRouter } from "uploadthing/next";

const hasToken = !!process.env.UPLOADTHING_TOKEN;

export const ourFileRouter = hasToken ? (() => {
  const { createUploadthing } = require("uploadthing/next");
  const f = createUploadthing();
  return {
    imageUploader: f({ image: { maxFileSize: "4MB" } })
      .middleware(() => ({}))
      .onUploadComplete(() => {}),
  } satisfies FileRouter;
})() : {} as FileRouter;
