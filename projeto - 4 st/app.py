"""ClimaSP — Plataforma de dados El Niño, São Paulo Capital.

Entrypoint do Streamlit: aplica o Design System, monta a sidebar e delega
a execução para a página selecionada.
"""

import streamlit as st

from climasp.controllers.navegacao import MENU
from climasp.views import sidebar
from climasp.views.theme import apply_theme

st.set_page_config(
    page_title="ClimaSP",
    page_icon=":material/public:",
    layout="wide",
    initial_sidebar_state="expanded",
)
apply_theme()

sidebar.marca()
sidebar.fontes()

st.navigation(MENU).run()