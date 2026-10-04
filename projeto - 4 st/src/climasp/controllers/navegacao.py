"""Menu da aplicação — os sete itens da sidebar do Design System.

Sem `icon=`: o componente "Menu Item" do .pen usa um ponto de 8px, desenhado
por CSS. Ícone do Material duplicaria o marcador.

Cada função tem nome próprio porque o Streamlit deriva a URL do callable —
dois `render` colidiriam.
"""

from __future__ import annotations

import streamlit as st

from climasp.controllers.pages import (
    alertas,
    boas_vindas,
    correlacoes,
    mapa_sp,
    predicoes,
    series,
    visao_geral,
)

# Ordem idêntica à sidebar do .pen. "Boas Vindas" abre o app.
MENU = (
    st.Page(boas_vindas.boas_vindas, title="Boas Vindas", default=True),
    st.Page(visao_geral.visao_geral, title="Visão Geral"),
    st.Page(mapa_sp.mapa_sp, title="Mapa de SP"),
    st.Page(series.series, title="Séries temporais"),
    st.Page(correlacoes.correlacoes, title="Correlações"),
    st.Page(predicoes.predicoes, title="Predições"),
    st.Page(alertas.alertas, title="Alertas"),
)