"""Tela 01 — Boas Vindas."""

from __future__ import annotations

import streamlit as st

TITULO = "Boas Vindas"


def boas_vindas() -> None:
    st.title(TITULO)