import Database from "better-sqlite3";
import path from "path";

// Cria/abre o arquivo do banco na raiz do projeto back
const dbPath = path.join(__dirname, "..", "..", "cemaden_station.db");
const db = new Database(dbPath);

export function getDb(): Database.Database {
  return db;
}