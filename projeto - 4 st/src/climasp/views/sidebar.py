"""Blocos da sidebar — marca no topo, fontes no rodapé.

A View só devolve marcação; a ordem de exibição é controlada por CSS,
porque o Streamlit não garante a posição dos blocos laterais.
"""

from __future__ import annotations

import streamlit as st

MARCA = "ClimaSP"
SUBTITULO = "PLATAFORMA DE DADOS  •  CAPITAL"
FONTES = "INMET • NOAA • ANA • CEMADEN"


def marca() -> None:
    st.sidebar.html(
        f"""
        <div class="ds-sidebar__brand">
          <div class="ds-sidebar__logo">{MARCA}</div>
          <div class="ds-sidebar__subtitle">{SUBTITULO}</div>
        </div>
        """
    )


def fontes() -> None:
    st.sidebar.html(f'<div class="ds-sidebar__sources">{FONTES}</div>')