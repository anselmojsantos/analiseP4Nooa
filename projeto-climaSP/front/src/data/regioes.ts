/**
 * Regiões Niño do Pacífico equatorial e o diagnóstico ENSO do estudo.
 *
 * A linha `guia` é a região 1+2: maior anomalia e vínculo mais forte com o
 * clima de São Paulo. No design ela aparece invertida sobre azul-marinho.
 */
export interface RegiaoNino {
  regiao: string;
  localizacao: string;
  semanasQuentes: string;
  anomalia: string;
  guia?: boolean;
}

export const REGIOES_NINO: RegiaoNino[] = [
  {
    regiao: "★ Niño 1+2",
    localizacao: "0–10°S · 90–80°W · Costa do Peru",
    semanasQuentes: "87,9 %",
    anomalia: "+3,2 °C",
    guia: true,
  },
  {
    regiao: "Niño 3",
    localizacao: "5°N–5°S · 150–90°W · Pacífico Leste",
    semanasQuentes: "57,6 %",
    anomalia: "+2,5 °C",
  },
  {
    regiao: "Niño 3.4",
    localizacao: "5°N–5°S · 170–120°W · Centro-Leste",
    semanasQuentes: "57,6 %",
    anomalia: "+1,8 °C",
  },
  {
    regiao: "Niño 4",
    localizacao: "5°N–5°S · 160°E–150°W · Centro-Oeste",
    semanasQuentes: "63,6 %",
    anomalia: "+0,0 °C",
  },
];

export const NOTA_REGIOES =
  "* % das 33 semanas coletadas (07/01 a 19/08/2026) em que a TSM ficou acima da média climatológica. Última coleta: 19/08/2026 (anomalia °C vs normal). ★ Niño 1+2 = região-guia do estudo: maior anomalia e o vínculo mais forte com o clima de SP. Dados: noaa_enso_weekly.";

export const LEGENDA_REGIOES =
  "Regiões Niño 1+2 · 3 · 3.4 · 4 — anomalia média das 33 semanas coletadas (07/01 a 19/08/2026).";

/** Caminho do preenchimento de imagem que o design usa no painel do Pacífico. */
export const ARTE_REGIOES = "/assets/fig2_regioes_pacifico.png";