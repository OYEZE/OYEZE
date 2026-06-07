import { createRouteHandler } from "uploadthing/next";

const handlers = process.env.UPLOADTHING_TOKEN
  ? createRouteHandler({ router: require("./core").ourFileRouter })
  : {
      GET: () => new Response("Upload disabled", { status: 200 }),
      POST: () => new Response("Upload disabled", { status: 200 }),
    };

export const { GET, POST } = handlers;
