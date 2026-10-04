import type { FastifyPluginAsync } from "fastify";
import { getLatestMediaMensal } from "../controllers/enso.controller.js";

const ensoRoutes: FastifyPluginAsync = async (app) => {
	app.get("/ultima", getLatestMediaMensal);
};

export default ensoRoutes;
