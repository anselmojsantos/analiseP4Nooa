import path from "path";
import Database from "better-sqlite3";

const dbPath = path.join(__dirname, "..", "cemaden_station.db");
const db = new Database(dbPath);

export function getDb(): Database.Database {
  return db;
}