import Fastify from "fastify";
import { mediaMovelRoutes } from "./routes/mediaMovelRoutes";

const app = Fastify({ logger: true });

app.get("/", async () => {
  return { status: "ok", message: "Servidor Fastify + TypeScript rodando!" };
});

app.register(mediaMovelRoutes);

app.listen({ port: 3000, host: "0.0.0.0" }).then(() => {
  console.log("🚀 Servidor rodando em http://0.0.0.0:3000");
}).catch((err) => {
  console.error("Erro ao iniciar o servidor:", err);
  process.exit(1);
});