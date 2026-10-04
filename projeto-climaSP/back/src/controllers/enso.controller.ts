import type { FastifyReply, FastifyRequest } from "fastify";
import { findLatestMediaMensal } from "../models/enso.model.js";
import { presentLatestMediaMensal } from "../views/enso.view.js";

export async function getLatestMediaMensal(
	request: FastifyRequest,
	reply: FastifyReply,
) {
	try {
		const row = await findLatestMediaMensal();

		if (!row) {
			return reply.code(404).send({ message: "Nenhum registro encontrado." });
		}

		return reply.send(presentLatestMediaMensal(row));
	} catch (error) {
		request.log.error({ error }, "Falha ao consultar df_media_mensal");
		return reply.code(500).send({ message: "Falha ao buscar o registro mais recente." });
	}
}
