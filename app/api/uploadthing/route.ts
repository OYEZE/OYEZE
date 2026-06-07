import { createRouteHandler } from "uploadthing/next";

const createHandlers = async () => {
  if (!process.env.UPLOADTHING_TOKEN) {
    return {
      GET: () => new Response("Upload disabled", { status: 200 }),
      POST: () => new Response("Upload disabled", { status: 200 }),
    };
  }
  const { ourFileRouter } = await import("./core");
  return createRouteHandler({ router: ourFileRouter });
};

const handlers = await createHandlers();
export const { GET, POST } = handlers;
