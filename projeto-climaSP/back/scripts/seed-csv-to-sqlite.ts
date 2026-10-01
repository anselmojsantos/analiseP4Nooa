import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

// Uso: npx tsx scripts/seed-csv-to-sqlite.ts [caminho-do-csv]
const csvPath = process.argv[2] ?? path.join(
  __dirname, "..", "..", "..", "docs", "csv", "noaa", "media_movel_34.csv"
);
const dbPath = path.join(__dirname, "..", "cemaden_station.db");
const tableName = path.basename(csvPath, path.extname(csvPath)).replace(/[^a-zA-Z0-9_]/g, "_");

const db = new Database(dbPath);

const lines = fs
  .readFileSync(csvPath, "utf-8")
  .split(/\r?\n/)
  .filter((l) => l.trim() !== "");

if (lines.length === 0) throw new Error("CSV vazio");

const header = lines[0].split(";").map((h) => h.trim());
const rows = lines.slice(1).map((l) => l.split(";").map((c) => c.trim()));

// Nome das colunas: apartir do header, sanitizando caracteres especiais
const sanitize = (s: string) => s.replace(/[^a-zA-Z0-9_]/g, "_");
const cols = header.map((h, i) => sanitize(h) || `column_${i + 1}`);

// Tipo: se TODAS as linhas da coluna forem número -> REAL, senão TEXT
const toNumber = (v: string): number | null => {
  const n = parseFloat(v.replace(",", "."));
  return Number.isNaN(n) ? null : n;
};
const types = cols.map((_, i) =>
  rows.every((r) => toNumber(r[i]) !== null) ? "REAL" : "TEXT"
);

// Cria a tabela automaticamente a partir do CSV
const colDefs = cols.map((c, i) => `"${c}" ${types[i]}`).join(", ");
db.exec(`CREATE TABLE IF NOT EXISTS ${tableName} (${colDefs})`);

const insert = db.prepare(
  `INSERT INTO ${tableName} (${cols.map((c) => `"${c}"`).join(", ")})
   VALUES (${cols.map(() => "?").join(", ")})`
);

db.transaction(() => {
  for (const r of rows) {
    insert.run(...r.map((v, i) => (types[i] === "REAL" ? toNumber(v) : v)));
  }
})();

console.log(`Tabela '${tableName}' criada automaticamente com ${rows.length} linhas.`);
console.log("Colunas:", cols.map((c, i) => `${c} ${types[i]}`).join(", "));
console.log("Banco:", dbPath);