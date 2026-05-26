# FRUS Public Diplomacy, World War II Assist

GitHub Pages research assistant for *Foreign Relations of the United States,
1917-1972, Volume III, Public Diplomacy, World War II*.

The official History.state.gov volume page currently lists the volume as
**Being Researched**, so this site presents a candidate source-lead workbench
rather than a published FRUS document chronology.

## Features

- candidate source chronology with lane, repository, source-type, priority, and text search filters
- CSV export for source leads, gap tracker, source pools, public-line references, and persons
- source-note copy buttons for compiler-ready provenance snippets
- NARA and FDR Library source-pool queue
- gap tracker for unresolved compiler work
- source-copy ledger for official, NARA, and FDR Library anchors
- public-line reference layer for FDR speeches, schedules, and war-aims checks
- boundary controls for domestic morale, OSS, War Refugee Board, and non-information OCIAA material
- persons page with scope/source filters and provisional authority-status notes

## Current Data

The committed data currently contains:

- `16` candidate source leads
- `18` NARA/FDR source pools
- `7` source-copy ledger anchors
- `6` public-line references
- `15` compiler gap-tracker items
- `4` boundary-control rows
- `18` persons-list candidates

## Research Lanes

1. Prewar Information Policy, 1939-1941
2. Creating War Information, 1941-1942
3. OWI Overseas and VOA, 1942-1945
4. Hemisphere and Cultural Exchange, 1940-1945
5. Peace Aims and Handoff, 1943-1945

## Source Anchors

- Official volume: <https://history.state.gov/historicaldocuments/frus1917-72PubDipv03>
- Status of the FRUS series: <https://history.state.gov/historicaldocuments/status-of-the-series>
- NARA RG 208, Office of War Information: <https://www.archives.gov/research/guide-fed-records/groups/208.html>
- NARA RG 44, Office of Government Reports: <https://www.archives.gov/research/guide-fed-records/groups/044.html>
- NARA RG 229, Office of Inter-American Affairs: <https://www.archives.gov/research/guide-fed-records/groups/229.html>
- NARA RG 216, Office of Censorship: <https://www.archives.gov/research/guide-fed-records/groups/216.html>
- NARA OSS/COI reference pages: <https://www.archives.gov/research/military/ww2/oss/series.html>
- FDR Library Digital Collections: <https://www.fdrlibrary.org/digital-collections>
- FDR Library Collections List: <https://www.fdrlibrary.org/collections-list>
- FDR Day by Day: <https://www.fdrlibrary.org/timeline>

## Local Preview

Run:

```bash
python3 -m http.server 4177
```

Then visit <http://127.0.0.1:4177/>.
