# FRUS Public Diplomacy, World War II Assist

GitHub Pages research assistant for *Foreign Relations of the United States,
1917-1972, Volume III, Public Diplomacy, World War II*.

The official History.state.gov volume page currently lists the volume as
**Being Researched**, so this site presents a candidate source-lead workbench
rather than a published FRUS document chronology.

## Features

- candidate source chronology with lane, repository, source-type, priority, and text search filters
- document-intake ledger with selection tests, source-copy tasks, and gap IDs
- 50-document candidate register for potential additions not found in public FRUS exact-title or file-number checks
- chronology seed register that orders the 50 candidates by date with editorial role, proof status, related pull sheets, docket gates, and next action
- duplicate-gate register for exact and broad History.state.gov searches, result counts, checked dates, duplicate status, and final rulings
- compiler pull sheets with copyable archival request text, related candidate IDs, expected deliverables, and source-copy gates
- immediate compiler docket with first-pull actions, proof gates, related IDs, direct links, and CSV export
- print-friendly compiler guide with a week-one pull plan, packet checklist, request blocks, and promotion rules
- reusable source-copy packet and archive-request templates for compiler fieldwork
- static immediate-docket CSV for spreadsheet import or archive-trip planning
- static chronology-seed CSV for drafting the first working FRUS sequence
- static duplicate-gate CSV for preserving the FRUS duplicate audit trail
- seeded 50-document packet register and 12-pull archive request register for spreadsheet import
- State cable search workbench for RG 59 central files and RG 84 Foreign Service post files
- CSV export for source leads, document intake, 50-document candidates, compiler pull sheets, State cable leads, selection rules, coverage matrix, evidence packets, gap tracker, source pools, public-line references, and persons
- source-note copy buttons for compiler-ready provenance snippets
- NARA and FDR Library source-pool queue
- gap-closure task queue with proof requirements, closure criteria, direct searches, and CSV export
- evidence packets that bind each gap to policy, implementation, reaction, and source-copy proof
- fixed gap register with proof gates for remaining archival harvest work
- selection and boundary rules for promoting, holding, or excluding candidate documents
- theater and audience coverage matrix for geographic balance
- source-copy ledger for official, NARA, and FDR Library anchors
- public-line reference layer for FDR speeches, schedules, and war-aims checks
- boundary controls for domestic morale, OSS, War Refugee Board, and non-information OCIAA material
- persons page with scope/source filters and provisional authority-status notes

## Current Data

The committed data currently contains:

- `16` candidate source leads
- `18` document-intake rows
- `50` candidate documents not found in public FRUS exact-title/file-number checks
- `50` chronology seed rows for first-pass FRUS ordering
- `50` duplicate-gate rows for exact and broad FRUS search proof
- `12` compiler pull sheets
- `8` immediate compiler docket moves
- `17` State cable leads
- `12` selection and boundary rules
- `10` theater/audience coverage rows
- `18` gap-closure tasks
- `15` evidence packets
- `18` NARA/FDR source pools
- `7` source-copy ledger anchors
- `6` public-line references
- `15` compiler gap-tracker items marked as fixed and packeted
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
- NARA RG 59, Department of State: <https://www.archives.gov/research/guide-fed-records/groups/059.html>
- NARA RG 59 Central Decimal Files guide: <https://www.archives.gov/research/foreign-policy/state-dept/rg-59-central-files/1910-1963>
- NARA RG 59 Central Decimal Files catalog record: <https://catalog.archives.gov/id/302021>
- NARA RG 59 Purport Lists and Cards catalog record: <https://catalog.archives.gov/id/580701>
- NARA RG 84, Foreign Service Posts: <https://www.archives.gov/research/guide-fed-records/groups/084.html>
- NARA RG 84 Foreign Service post files guide: <https://www.archives.gov/research/foreign-policy/state-dept/rg-84>
- NARA RG 84 reference paper: <https://www.archives.gov/files/research/foreign-policy/state-dept/finding-aids/rg-84-reference-paper.pdf>
- NARA RG 208, Office of War Information: <https://www.archives.gov/research/guide-fed-records/groups/208.html>
- NARA RG 44, Office of Government Reports: <https://www.archives.gov/research/guide-fed-records/groups/044.html>
- NARA RG 229, Office of Inter-American Affairs: <https://www.archives.gov/research/guide-fed-records/groups/229.html>
- NARA RG 216, Office of Censorship: <https://www.archives.gov/research/guide-fed-records/groups/216.html>
- NARA RG 107, War Department: <https://www.archives.gov/research/guide-fed-records/groups/107.html>
- NARA RG 165, War Department General and Special Staffs: <https://www.archives.gov/research/guide-fed-records/groups/165.html>
- NARA RG 287, Government Publications: <https://www.archives.gov/research/guide-fed-records/groups/287.html>
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
