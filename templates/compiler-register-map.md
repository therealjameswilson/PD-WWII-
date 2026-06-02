# Compiler Register Map

Use this map to decide which register to open, what each register proves, and where the row should hand off next. Counts are generated from the current committed CSVs.

## Fast Path

1. Start with `compiler-readiness-scorecard.csv` to choose the next candidate or pull batch.
2. Use `archive-request-send-queue.csv` or `archive-request-send-queue.md` to send the next NARA/FDR request or run the internal desk gate.
3. Open the linked pull/request/citation/duplicate/QA row named in the scorecard or send queue.
4. After source copies arrive, update `source-copy-receipt-qa-register.csv` and `source-note-citation-register.csv`.
5. Record the editorial ruling in `selection-decision-register.csv`.
6. Draft final headnote or annotation language from `frus-annotation-drafting-register.csv` and place the document through `frus-document-assembly-register.csv`.

## Registers

| ID | Register | Rows | Columns | Primary IDs | Use When | Hands Off To |
| --- | --- | ---: | ---: | --- | --- | --- |
| REG-001 | [Compiler readiness scorecard](compiler-readiness-scorecard.csv) | 50 | 47 | Scorecard ID; Candidate ID | Start every work session here to decide what to pull, prove, or draft next. | Open the listed pull sheet, duplicate gate, citation row, receipt-QA row, annotation row, or request-send queue. |
| REG-002 | [Archive request send queue](archive-request-send-queue.csv) | 12 | 39 | Queue ID; Send Rank; Request ID | Choose which NARA/FDR request batch to send next and copy the subject/body language into the current repository request channel. | Repository request channel, archive request email templates, receipt-QA register, citation register, and readiness scorecard. |
| REG-003 | [Immediate compiler docket](immediate-compiler-docket.csv) | 8 | 13 | Docket ID | Plan first-pull work blocks and proof gates for the week. | Archive request send queue, archive request register, pull sheets, and readiness scorecard. |
| REG-004 | [Chronology seed register](chronology-seed-register.csv) | 50 | 21 | Chronology ID; Candidate ID | Draft or re-sort the first working FRUS chronology by date and editorial role. | Document assembly register, selection decision register, citation register, and readiness scorecard. |
| REG-005 | [50-document source-copy packet register](seeded-source-copy-packet-register.csv) | 50 | 18 | Packet ID; Candidate ID | Create one packet per candidate before requesting or receiving source copies. | Archive request register, receipt-QA register, selection decision register. |
| REG-006 | [Seeded archive request register](seeded-archive-request-register.csv) | 12 | 18 | Request ID | Prepare copy-ready NARA or FDR Library source-copy requests by pull batch. | Archive request send queue, archive-trip pull plan, request email templates, receipt-QA register. |
| REG-007 | [Archive trip pull plan](archive-trip-pull-plan.csv) | 12 | 33 | Pull Plan ID; Request ID | Execute repository work blocks and reproduction requests. | Archive request send queue, source-copy receipt-QA register, and source-note/citation register. |
| REG-008 | [Source-copy receipt/QA register](source-copy-receipt-qa-register.csv) | 50 | 42 | QA ID; Candidate ID | Review source copies after archive images or PDFs arrive. | Selection decision register, source-note/citation register, annotation drafting register, readiness scorecard. |
| REG-009 | [Duplicate gate register](duplicate-gate-register.csv) | 50 | 26 | Duplicate ID; Candidate ID | Prove a candidate is not already published in public FRUS before promotion. | Selection decision register, citation register, readiness scorecard. |
| REG-010 | [Selection decision register](selection-decision-register.csv) | 50 | 30 | Decision ID; Candidate ID | Record promote, hold, boundary, duplicate, or exclude decisions. | Document assembly register, annotation drafting register, final manuscript numbering. |
| REG-011 | [Source-note/citation register](source-note-citation-register.csv) | 50 | 28 | Citation ID; Candidate ID | Convert provisional catalog/purport notes into FRUS-ready source notes. | Annotation drafting register, selection decision register, final manuscript source notes. |
| REG-012 | [Authority-control register](authority-control-register.csv) | 40 | 21 | Authority ID | Normalize names, offices, organizations, aliases, and title-date evidence before annotations or persons list work. | Annotation drafting register, persons page, index/persons list. |
| REG-013 | [FRUS document assembly register](frus-document-assembly-register.csv) | 50 | 41 | Assembly ID; Working Document Slot; Candidate ID | Build the manuscript spine before final numbering. | Annotation drafting register, readiness scorecard, final manuscript outline. |
| REG-014 | [Episode evidence crosswalk](episode-evidence-crosswalk.csv) | 12 | 35 | Episode ID | Group candidates into policy, implementation, reaction, public-line, and boundary episodes. | Annotation drafting register, document assembly register, readiness scorecard. |
| REG-015 | [FRUS annotation drafting register](frus-annotation-drafting-register.csv) | 50 | 46 | Annotation ID; Candidate ID | Draft headnotes and annotations after receipt QA exposes all remaining blockers. | Final annotation/headnote prose, selection decision update, final manuscript source notes. |
| REG-016 | [Blank source-copy packet template](source-copy-packet-template.csv) | 1 | 31 | Packet ID | Create a new manually filled packet for an added candidate outside the seeded 50. | Seeded packet register pattern, selection decision register, source-note/citation register. |
| REG-017 | [Blank archive request batch template](archive-request-batch-template.csv) | 1 | 18 | Request ID | Create a new archive/reproduction request batch outside the seeded 12 pulls. | Archive request send queue, archive-trip pull plan, and request email templates. |

## Column-Level Map

### REG-001 - Compiler readiness scorecard

- File: `templates/compiler-readiness-scorecard.csv`
- Rows/columns: `50` rows, `47` columns
- Primary IDs: Scorecard ID; Candidate ID
- Use when: Start every work session here to decide what to pull, prove, or draft next.
- Proves: Queue rank, work-priority score, final-readiness score, tier, open gates, main blocker, and next tasks.
- Depends on: Assembly, selection, citation, duplicate, receipt-QA, annotation, episode, and pull-plan registers.
- Hands off to: Open the listed pull sheet, duplicate gate, citation row, receipt-QA row, annotation row, or request-send queue.
- Owner: Compiler desk triage
- Key columns: Scorecard ID; Candidate ID; Working Document Slot; Chapter Number; Chapter Title; Chapter Slot; Date; Title; Lane; Editorial Role; Priority; Work Priority Score

### REG-002 - Archive request send queue

- File: `templates/archive-request-send-queue.csv`
- Rows/columns: `12` rows, `39` columns
- Primary IDs: Queue ID; Send Rank; Request ID
- Use when: Choose which NARA/FDR request batch to send next and copy the subject/body language into the current repository request channel.
- Proves: Send rank, request channel, candidate tier mix, subject line, request paragraph, attachment rows, next archive action, and post-response register updates.
- Depends on: Readiness scorecard, archive request register, archive-trip pull plan, and receipt-QA register.
- Hands off to: Repository request channel, archive request email templates, receipt-QA register, citation register, and readiness scorecard.
- Owner: Archive request lead
- Key columns: Queue ID; Send Rank; Request ID; Pull Plan ID; Send Channel; Repository; Contact Or Service Path; Work Block; Work Block Title; Request Priority; Queue Priority Score; Request Title

### REG-003 - Immediate compiler docket

- File: `templates/immediate-compiler-docket.csv`
- Rows/columns: `8` rows, `13` columns
- Primary IDs: Docket ID
- Use when: Plan first-pull work blocks and proof gates for the week.
- Proves: First actions, proof requirements, related IDs, links, and docket source notes.
- Depends on: Candidate register, packet register, pull sheets, and gap analysis.
- Hands off to: Archive request send queue, archive request register, pull sheets, and readiness scorecard.
- Owner: Compiler desk triage
- Key columns: Docket ID; Priority; Phase; Gate; Lane; Repository; Title; Objective; Action; Proof Gate; Links; Related IDs

### REG-004 - Chronology seed register

- File: `templates/chronology-seed-register.csv`
- Rows/columns: `50` rows, `21` columns
- Primary IDs: Chronology ID; Candidate ID
- Use when: Draft or re-sort the first working FRUS chronology by date and editorial role.
- Proves: Date order, lane, role, priority, proof status, related pull sheets, docket gates, and source anchors.
- Depends on: 50-document candidate list and public FRUS duplicate checks.
- Hands off to: Document assembly register, selection decision register, citation register, and readiness scorecard.
- Owner: Chronology editor
- Key columns: Chronology ID; Candidate ID; Sort Key; Display Date; Lane; Episode; Editorial Role; Priority; Proof Status; Repository; Record Group; Source Locator

### REG-005 - 50-document source-copy packet register

- File: `templates/seeded-source-copy-packet-register.csv`
- Rows/columns: `50` rows, `18` columns
- Primary IDs: Packet ID; Candidate ID
- Use when: Create one packet per candidate before requesting or receiving source copies.
- Proves: Disposition, priority, lane, locator, catalog URL, duplicate status, boundary ruling, and next packet action.
- Depends on: Candidate list, catalog records, and pull-sheet assignments.
- Hands off to: Archive request register, receipt-QA register, selection decision register.
- Owner: Source-copy packet editor
- Key columns: Packet ID; Candidate ID; Disposition; Priority; Lane; Date; Title; Repository; Record Group; Source Locator; Catalog URL; FRUS Search URL

### REG-006 - Seeded archive request register

- File: `templates/seeded-archive-request-register.csv`
- Rows/columns: `12` rows, `18` columns
- Primary IDs: Request ID
- Use when: Prepare copy-ready NARA or FDR Library source-copy requests by pull batch.
- Proves: Request text, pull list, candidate IDs, deliverable, links, source note, and follow-up fields.
- Depends on: Pull sheets and source-copy packet register.
- Hands off to: Archive request send queue, archive-trip pull plan, request email templates, receipt-QA register.
- Owner: Archive request lead
- Key columns: Request ID; Priority; Request Status; Lane; Repository; Title; Objective; Candidate IDs; Request Text; Pull List; Deliverable; Links

### REG-007 - Archive trip pull plan

- File: `templates/archive-trip-pull-plan.csv`
- Rows/columns: `12` rows, `33` columns
- Primary IDs: Pull Plan ID; Request ID
- Use when: Execute repository work blocks and reproduction requests.
- Proves: Facility path, capture checklist, citation fields, episode evidence need, access check, copy format, folder name, and exit criteria.
- Depends on: Archive request register, pull sheets, assembly and episode registers.
- Hands off to: Archive request send queue, source-copy receipt-QA register, and source-note/citation register.
- Owner: Archive trip/reproduction lead
- Key columns: Pull Plan ID; Request ID; Work Block; Work Block Title; Priority; Repository; Facility Or Service Path; Request Title; Request Status; Candidate IDs; Candidate Count; Related Episode IDs

### REG-008 - Source-copy receipt/QA register

- File: `templates/source-copy-receipt-qa-register.csv`
- Rows/columns: `50` rows, `42` columns
- Primary IDs: QA ID; Candidate ID
- Use when: Review source copies after archive images or PDFs arrive.
- Proves: Receipt status, file location, page order, image completeness, reverse sides, enclosures, routing marks, OCR/transcript status, citation gaps, authority checks, duplicate proof, and promotion readiness.
- Depends on: Archive-trip pull plan, packet register, citation register, duplicate register, authority register.
- Hands off to: Selection decision register, source-note/citation register, annotation drafting register, readiness scorecard.
- Owner: Source-copy QA editor
- Key columns: QA ID; Candidate ID; Packet ID; Assembly ID; Working Document Slot; Chronology ID; Decision ID; Citation ID; Episode IDs; Evidence Role; Source Pull Plan IDs; Request IDs

### REG-009 - Duplicate gate register

- File: `templates/duplicate-gate-register.csv`
- Rows/columns: `50` rows, `26` columns
- Primary IDs: Duplicate ID; Candidate ID
- Use when: Prove a candidate is not already published in public FRUS before promotion.
- Proves: Exact search URL/count, broad search URL/count, checked date, duplicate status, final ruling, and audit task.
- Depends on: History.state.gov searches and candidate source locators.
- Hands off to: Selection decision register, citation register, readiness scorecard.
- Owner: Duplicate-proof editor
- Key columns: Duplicate ID; Candidate ID; Chronology ID; Priority; Duplicate Risk; Recommended Ruling; Lane; Date; Title; Repository; Record Group; Source Locator

### REG-010 - Selection decision register

- File: `templates/selection-decision-register.csv`
- Rows/columns: `50` rows, `30` columns
- Primary IDs: Decision ID; Candidate ID
- Use when: Record promote, hold, boundary, duplicate, or exclude decisions.
- Proves: Decision status, promotion recommendation, source-copy status, duplicate status, boundary ruling, selection rationale, evidence links, final source note, reviewer, and decision date.
- Depends on: Packet, chronology, duplicate, citation, evidence, and receipt-QA registers.
- Hands off to: Document assembly register, annotation drafting register, final manuscript numbering.
- Owner: Selection editor
- Key columns: Decision ID; Candidate ID; Packet ID; Chronology ID; Duplicate ID; Proposed FRUS Number; Decision Status; Promotion Recommendation; Date; Title; Lane; Editorial Role

### REG-011 - Source-note/citation register

- File: `templates/source-note-citation-register.csv`
- Rows/columns: `50` rows, `28` columns
- Primary IDs: Citation ID; Candidate ID
- Use when: Convert provisional catalog/purport notes into FRUS-ready source notes.
- Proves: Repository, record group, locator, catalog URL, base source note, draft FRUS source note, missing citation fields, source-copy status, duplicate status, evidence coverage, checked date, and next citation action.
- Depends on: Source-copy packet, receipt-QA, duplicate, selection, and archive-trip registers.
- Hands off to: Annotation drafting register, selection decision register, final manuscript source notes.
- Owner: Citation editor
- Key columns: Citation ID; Candidate ID; Chronology ID; Decision ID; Proposed FRUS Number; Date; Title; Repository; Record Group Or Collection; Source Locator; Catalog URL; FRUS Search URL

### REG-012 - Authority-control register

- File: `templates/authority-control-register.csv`
- Rows/columns: `40` rows, `21` columns
- Primary IDs: Authority ID
- Use when: Normalize names, offices, organizations, aliases, and title-date evidence before annotations or persons list work.
- Proves: Preferred form, display form, variants, office/role, date span, source anchor, candidate scope, status, boundary note, and compiler use.
- Depends on: Candidate rows, source-copy text, official office histories, and named correspondents.
- Hands off to: Annotation drafting register, persons page, index/persons list.
- Owner: Authority/persons editor
- Key columns: Authority ID; Authority Type; Preferred Form; Display Form; Sort Key; Variant Forms; Office Or Role; Date Span; Date Evidence Status; Source Family; Source Anchor; Scopes

### REG-013 - FRUS document assembly register

- File: `templates/frus-document-assembly-register.csv`
- Rows/columns: `50` rows, `41` columns
- Primary IDs: Assembly ID; Working Document Slot; Candidate ID
- Use when: Build the manuscript spine before final numbering.
- Proves: Working FRUS slot, chapter, section, assembly function, proof gates, source locator, source note, headnote task, and next manuscript action.
- Depends on: Chronology, selection, packet, duplicate, citation, authority, and episode registers.
- Hands off to: Annotation drafting register, readiness scorecard, final manuscript outline.
- Owner: Manuscript assembly editor
- Key columns: Assembly ID; Working Document Slot; Final FRUS Number; Chapter Number; Chapter Title; Chapter Slot; Section Heading; Candidate ID; Chronology ID; Decision ID; Packet ID; Duplicate ID

### REG-014 - Episode evidence crosswalk

- File: `templates/episode-evidence-crosswalk.csv`
- Rows/columns: `12` rows, `35` columns
- Primary IDs: Episode ID
- Use when: Group candidates into policy, implementation, reaction, public-line, and boundary episodes.
- Proves: Narrative question, candidate roles, missing evidence, promotion test, draft episode note, next compiler move, and related pull sheets.
- Depends on: Chronology, assembly, selection, citation, duplicate, public-line, and gap registers.
- Hands off to: Annotation drafting register, document assembly register, readiness scorecard.
- Owner: Chapter/episode editor
- Key columns: Episode ID; Working Episode Title; Chapter Number; Chapter Title; Date Range; Narrative Question; Policy Candidate IDs; Implementation Candidate IDs; Reaction Candidate IDs; Public-Line Reference IDs; Boundary Or Context Candidate IDs; All Candidate IDs

### REG-015 - FRUS annotation drafting register

- File: `templates/frus-annotation-drafting-register.csv`
- Rows/columns: `50` rows, `46` columns
- Primary IDs: Annotation ID; Candidate ID
- Use when: Draft headnotes and annotations after receipt QA exposes all remaining blockers.
- Proves: Narrative question, annotation type, context to establish, policy/implementation/reaction links, boundary issue, episode cross-references, authority forms, citation dependency, source-copy QA dependency, duplicate proof dependency, draft stubs, and final-text blockers.
- Depends on: Assembly, citation, receipt-QA, selection, duplicate, authority, and episode registers.
- Hands off to: Final annotation/headnote prose, selection decision update, final manuscript source notes.
- Owner: Annotation editor
- Key columns: Annotation ID; Candidate ID; Assembly ID; Working Document Slot; Proposed FRUS Number; Chapter Number; Chapter Title; Chapter Slot; Section Heading; Date; Title; Lane

### REG-016 - Blank source-copy packet template

- File: `templates/source-copy-packet-template.csv`
- Rows/columns: `1` rows, `31` columns
- Primary IDs: Packet ID
- Use when: Create a new manually filled packet for an added candidate outside the seeded 50.
- Proves: Required packet fields for provenance, duplicate proof, selection rationale, evidence links, and final citation preparation.
- Depends on: New candidate source lead.
- Hands off to: Seeded packet register pattern, selection decision register, source-note/citation register.
- Owner: Source-copy packet editor
- Key columns: packet_id; candidate_id; disposition; priority; lane; date; title; repository; record_group_or_collection; series_or_file_unit; box_file_naid; folder_or_file_number

### REG-017 - Blank archive request batch template

- File: `templates/archive-request-batch-template.csv`
- Rows/columns: `1` rows, `18` columns
- Primary IDs: Request ID
- Use when: Create a new archive/reproduction request batch outside the seeded 12 pulls.
- Proves: Required request fields for repository, objective, candidate IDs, request text, pull list, deliverable, links, and follow-up.
- Depends on: New source-copy packet or pull-sheet need.
- Hands off to: Archive request send queue, archive-trip pull plan, and request email templates.
- Owner: Archive request lead
- Key columns: request_id; repository; record_group_or_collection; series_or_file_unit; naid_or_box_file; date_span; file_numbers_or_folders; search_terms; candidate_ids; pull_sheet_ids; request_text; delivery_format

