import type { FastifyInstance } from "fastify";
import { listMediaMovel } from "../controllers/mediaMovelController";

export async function mediaMovelRoutes(app: FastifyInstance) {
  app.get("/media-movel-34", listMediaMovel);
}