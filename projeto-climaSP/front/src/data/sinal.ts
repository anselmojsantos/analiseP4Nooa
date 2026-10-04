/** Leitura consolidada do sinal ENSO e o rodapé de procedência do painel. */
export interface Leitura {
  rotulo: string;
  data: string;
  valor: string;
}

export const LEITURAS: Leitura[] = [
  { rotulo: "ONI · média de 3 meses", data: "jul/2026", valor: "+1,4 °C" },
  { rotulo: "Niño 3.4 · semana", data: "12/08/2026", valor: "+1,8 °C" },
  { rotulo: "Niño 1 + 2 · semana", data: "19/08/2026", valor: "+3,2 °C" },
];

export const SINAL_ROTULO = "SINAL ENSO";
export const SINAL_BADGE = "EL NIÑO FORTE · ADVISORY";
export const SINAL_SUBTITULO =
  "Última leitura NOAA — consolidada, não é tempo real";
export const SINAL_PROCEDENCIA =
  "Base coletada no banco do projeto: 07/01 a 19/08/2026 (33 semanas). O NOAA atualiza as séries de TSM toda semana; a diagnose mensal sai na 2ª quinta-feira (a próxima: 10/09/2026).";
export const SINAL_COBERTURA =
  "87,9% das semanas coletadas com TSM acima da média climatológica na região Niño 1+2 (0–10°S, 90–80°W).";