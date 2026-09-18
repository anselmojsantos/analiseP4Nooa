# Entidade `cemaden_station`

Tabela de **estações de monitoramento** do CEMADEN (Centro Nacional de Monitoramento e Alertas de Desastres Naturais) disponível no PostgreSQL do projeto.

- Total de registros: **710**
- Colunas: **23**

## Atributos

| Coluna | Tipo | Significado |
|---|---|---|
| `id_estacao` | int | Identificador interno da estação (chave da aplicação). |
| `station_code` | string | Código público da estação no CEMADEN (ex.: `355030899A`). |
| `ibge_code` | int | Código IBGE do município onde a estação está instalada (ex.: `3550308` = São Paulo/SP). |
| `name` | string | Nome da estação / local de instalação (ex.: "Jardim Eledy"). |
| `city` | string | Município da estação (ex.: "SÃO PAULO"). |
| `state` | string | UF da estação (ex.: "SP"). |
| `latitude` | float | Latitude geográfica (WGS84). |
| `longitude` | float | Longitude geográfica (WGS84). |
| `altitude` | float | Altitude da estação em metros (0.0 quando não informada). |
| `network_id` | int | Identificador da rede de monitoramento (11 = CEMADEN). |
| `network_acronym` | string | Sigla da rede (ex.: "CEMADEN"). |
| `station_type_id` | int | Tipo da estação (id). |
| `station_type_description` | string | Tipo da estação: **Pluviométrica** (chuva) ou **Hidrológica** (nível de rio). |
| `cota_alerta` | float | **Só hidrológica.** Nível do rio (m) que dispara alerta. 697 registros com NaN (não se aplica a pluviométricas). |
| `cota_atencao` | float | **Só hidrológica.** Nível do rio (m) que indica atenção. 697 NaN. |
| `cota_transbordamento` | float | **Só hidrológica.** Nível do rio (m) em que transborda. 697 NaN. |
| `installation_date` | datetime | Data de instalação da estação. |
| `registration_date` | datetime | Data de cadastro/registro no sistema. |
| `last_transmission` | datetime | Última transmissão da estação (ativo/inativo). |
| `inactive_since` | datetime | Desde quando a estação está inativa (NaN = ainda ativa). |
| `raw_payload` | jsonb | Payload bruto enviado pela fonte (metadados originais do CEMADEN). |
| `collected_at` | datetime | Quando os dados foram coletados no banco. |
| `updated_at` | datetime | Última atualização do registro no banco. |

## Observações

- **NaN ficam concentrados** em `cota_alerta`, `cota_atencao` e `cota_transbordamento` (697 de 710): cotas só existem para as **13 estações hidrológicas**.
- Filtro de estações da capital São Paulo: `df[df["ibge_code"] == 3550308]` (79 estações).