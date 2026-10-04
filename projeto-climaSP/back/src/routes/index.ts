import type { FastifyPluginAsync } from "fastify";
import ensoRoutes from "./enso.routes.js";

const routes: FastifyPluginAsync = async (app) => {
	app.get("/clima", async () => ({
		status: "backend online",
		mensagem: "API ClimaSP disponível.",
	}));
	await app.register(ensoRoutes, { prefix: "/enso" });
};

export default routes;
