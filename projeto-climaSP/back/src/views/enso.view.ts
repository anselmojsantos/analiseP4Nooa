import type { MediaMensalRow } from "../models/enso.model.js";

export function presentLatestMediaMensal(row: MediaMensalRow): MediaMensalRow {
	return {
		observation_date: row.observation_date,
		nino12: row.nino12,
		nino3: row.nino3,
		nino34: row.nino34,
		nino4: row.nino4,
	};
}
