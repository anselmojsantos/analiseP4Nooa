"""Carrega o Design System 00 na página do Streamlit.

Os .css vivem em arquivos para editar sem tocar em Python. Aqui só se injeta.

Atenção ao mecanismo: `st.html` sanitiza com DOMPurify, que remove <style>.
A folha inteira seria descartada em silêncio. `st.markdown` com
`unsafe_allow_html` é o que preserva o CSS.
"""

from __future__ import annotations

from pathlib import Path

import streamlit as st

STYLES_DIR = Path(__file__).resolve().parent / "styles"

# A ordem importa: tokens declara as custom properties, os demais as consomem.
STYLESHEETS = ("tokens.css", "layout.css", "streamlit.css")

_FONTS_LINK = (
    '<link rel="preconnect" href="https://fonts.googleapis.com">'
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
    '<link href="https://fonts.googleapis.com/css2'
    "?family=Geist+Mono:wght@100..900&family=Inter:wght@100..900&display=swap"
    '" rel="stylesheet">'
)


def _read(name: str) -> str:
    return (STYLES_DIR / name).read_text(encoding="utf-8")


def apply_theme() -> None:
    """Injeta as fontes e as folhas de estilo do Design System.

    Sem cache de propósito: editar um .css deve aparecer no próximo rerun.
    """
    css = "\n".join(_read(name) for name in STYLESHEETS)
    st.markdown(
        f"{_FONTS_LINK}<style>{css}</style>",
        unsafe_allow_html=True,
    )