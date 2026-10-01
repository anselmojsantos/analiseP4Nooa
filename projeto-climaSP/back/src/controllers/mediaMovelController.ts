import type { FastifyReply, FastifyRequest } from "fastify";
import { getUltimosCinco } from "../models/mediaMovelModel";

export async function listMediaMovel(_request: FastifyRequest, reply: FastifyReply) {
  const rows = getUltimosCinco();
  return reply.send({ success: true, data: rows });
}