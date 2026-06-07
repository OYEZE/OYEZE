import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

const handlers = process.env.UPLOADTHING_TOKEN
  ? createRouteHandler({ router: ourFileRouter })
  : {
      GET: () => new Response("Upload disabled", { status: 200 }),
      POST: () => new Response("Upload disabled", { status: 200 }),
    };

export const { GET, POST } = handlers;
