import { pool } from "../config/pool.js";

type NumericValue = number | string | null;

export interface MediaMensalRow {
	observation_date: string;
	nino12: NumericValue;
	nino3: NumericValue;
	nino34: NumericValue;
	nino4: NumericValue;
}

export async function findLatestMediaMensal(): Promise<MediaMensalRow | null> {
	const { rows } = await pool.query<MediaMensalRow>(`
		SELECT
			observation_date::date::text AS observation_date,
			nino12,
			nino3,
			nino34,
			nino4
		FROM df_media_mensal
		ORDER BY observation_date DESC
		LIMIT 1
	`);

	return rows[0] ?? null;
}
