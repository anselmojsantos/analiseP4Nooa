import { getDb } from "../db";

export interface MediaMovelRow {
  Temporada: string;
  RONI_3_4: number;
  Fase: string;
}

export function getMediaMovel34(): MediaMovelRow[] {
  return getDb().prepare("SELECT * FROM media_movel_34").all() as MediaMovelRow[];
}

export function getUltimosCinco(): MediaMovelRow[] {
  return getDb()
    .prepare(
      `SELECT "Temporada", "RONI_3_4", "Fase"
       FROM (SELECT rowid, * FROM media_movel_34 ORDER BY rowid DESC LIMIT 5)
       ORDER BY rowid ASC`
    )
    .all() as MediaMovelRow[];
}