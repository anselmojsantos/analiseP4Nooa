import { pool } from "./config/pool.js";

try {
  const resultado = await pool.query("SELECT 1 AS conectado");
  console.log("Conexão OK:", resultado.rows[0]?.conectado);
} catch (erro) {
  console.error("Falha na conexão:", erro);
  process.exitCode = 1;
} finally {
  await pool.end();
}
