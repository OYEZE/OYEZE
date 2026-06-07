import { createRouteHandler } from "uploadthing/next";

const getHandlers = async () => {
  if (!process.env.UPLOADTHING_TOKEN) {
    return {
      GET: () => new Response("Upload disabled", { status: 200 }),
      POST: () => new Response("Upload disabled", { status: 200 }),
    };
  }
  const { ourFileRouter } = await import("./core");
  return createRouteHandler({ router: ourFileRouter });
};

export async function GET(req: Request) {
  const handlers = await getHandlers();
  return handlers.GET(req);
}
