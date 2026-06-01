const data = window.VOLUME_DATA || {};
const meta = data.meta || { chapters: [] };
const chapters = meta.chapters || [];
const leads = assignLeadNumbers(data.leads || []);
const publicReferences = data.publicReferences || [];
const gaps = data.gaps || [];
const sourcePools = data.sourcePools || [];
const ledger = data.ledger || [];
const boundaryRecords = data.boundaryRecords || [];
const documentIntake = data.documentIntake || [];
const stateCableLeads = data.stateCableLeads || [];
const candidateDocuments = data.candidateDocuments || [];
const compilerDocket = data.compilerDocket || [];
const selectionRules = data.selectionRules || [];
const coverageMatrix = data.coverageMatrix || [];
const closureTasks = data.closureTasks || [];
const evidencePackets = data.evidencePackets || [];
const chronologyRows = buildChronologyRows(candidateDocuments);
const duplicateRows = buildDuplicateRows(chronologyRows);

const state = {
  leads: {
    query: "",
    lane: "",
    repository: "",
    sourceType: "",
    priority: ""
  },
  gaps: {
    query: "",
    lane: "",
    priority: "",
    status: ""
  },
  sourcePools: {
    query: "",
    lane: "",
    repository: "",
    priority: ""
  },
  documentIntake: {
    query: "",
    lane: "",
    repository: "",
    status: ""
  },
  candidateDocuments: {
    query: "",
    lane: "",
    repository: "",
    priority: "",
    status: ""
  },
  chronology: {
    query: "",
    lane: "",
    role: "",
    sourceCopyStatus: ""
  },
  duplicates: {
    query: "",
    lane: "",
    risk: "",
    ruling: ""
  },
  closure: {
    query: "",
    lane: "",
    repository: "",
    status: ""
  },
  evidencePackets: {
    query: "",
    lane: "",
    status: ""
  },
  stateCables: {
    query: "",
    lane: "",
    recordGroup: "",
    status: ""
  },
  public: {
    query: "",
    lane: "",
    repository: ""
  },
  boundary: {
    query: "",
    lane: "",
    repository: ""
  }
};

const nodes = {
  totalLeads: document.querySelector("#total-leads"),
  intakeCount: document.querySelector("#intake-count"),
  naraCount: document.querySelector("#nara-count"),
  fdrCount: document.querySelector("#fdr-count"),
  poolCount: document.querySelector("#pool-count"),
  gapCount: document.querySelector("#gap-count"),
  workbenchRoot: document.querySelector("#workbench-root"),
  docketRoot: document.querySelector("#docket-root"),
  docketSummary: document.querySelector("#docket-summary"),
  exportDocket: document.querySelector("#export-docket"),
  laneGrid: document.querySelector("#lane-grid"),
  leadsRoot: document.querySelector("#leads-root"),
  leadSummary: document.querySelector("#lead-summary"),
  leadSearch: document.querySelector("#lead-search"),
  leadLaneFilter: document.querySelector("#lead-lane-filter"),
  leadRepositoryFilter: document.querySelector("#lead-repository-filter"),
  leadTypeFilter: document.querySelector("#lead-type-filter"),
  leadPriorityFilter: document.querySelector("#lead-priority-filter"),
  clearLeadFilters: document.querySelector("#clear-lead-filters"),
  exportLeads: document.querySelector("#export-leads"),
  gapRoot: document.querySelector("#gap-root"),
  gapSummary: document.querySelector("#gap-summary"),
  gapSearch: document.querySelector("#gap-search"),
  gapLaneFilter: document.querySelector("#gap-lane-filter"),
  gapPriorityFilter: document.querySelector("#gap-priority-filter"),
  gapStatusFilter: document.querySelector("#gap-status-filter"),
  clearGapFilters: document.querySelector("#clear-gap-filters"),
  exportGaps: document.querySelector("#export-gaps"),
  sourcePoolRoot: document.querySelector("#source-pool-root"),
  sourcePoolSummary: document.querySelector("#source-pool-summary"),
  sourcePoolSearch: document.querySelector("#source-pool-search"),
  sourcePoolLaneFilter: document.querySelector("#source-pool-lane-filter"),
  sourcePoolRepositoryFilter: document.querySelector("#source-pool-repository-filter"),
  sourcePoolPriorityFilter: document.querySelector("#source-pool-priority-filter"),
  clearSourcePoolFilters: document.querySelector("#clear-source-pool-filters"),
  exportSourcePools: document.querySelector("#export-source-pools"),
  documentRoot: document.querySelector("#document-root"),
  documentSummary: document.querySelector("#document-summary"),
  documentSearch: document.querySelector("#document-search"),
  documentLaneFilter: document.querySelector("#document-lane-filter"),
  documentRepositoryFilter: document.querySelector("#document-repository-filter"),
  documentStatusFilter: document.querySelector("#document-status-filter"),
  clearDocumentFilters: document.querySelector("#clear-document-filters"),
  exportDocuments: document.querySelector("#export-documents"),
  candidateRoot: document.querySelector("#candidate-root"),
  candidateSummary: document.querySelector("#candidate-summary"),
  candidateSearch: document.querySelector("#candidate-search"),
  candidateLaneFilter: document.querySelector("#candidate-lane-filter"),
  candidateRepositoryFilter: document.querySelector("#candidate-repository-filter"),
  candidatePriorityFilter: document.querySelector("#candidate-priority-filter"),
  candidateStatusFilter: document.querySelector("#candidate-status-filter"),
  clearCandidateFilters: document.querySelector("#clear-candidate-filters"),
  exportCandidates: document.querySelector("#export-candidates"),
  chronologyRoot: document.querySelector("#chronology-root"),
  chronologySummary: document.querySelector("#chronology-summary"),
  chronologySearch: document.querySelector("#chronology-search"),
  chronologyLaneFilter: document.querySelector("#chronology-lane-filter"),
  chronologyRoleFilter: document.querySelector("#chronology-role-filter"),
  chronologyStatusFilter: document.querySelector("#chronology-status-filter"),
  clearChronologyFilters: document.querySelector("#clear-chronology-filters"),
  exportChronology: document.querySelector("#export-chronology"),
  duplicateRoot: document.querySelector("#duplicate-root"),
  duplicateSummary: document.querySelector("#duplicate-summary"),
  duplicateSearch: document.querySelector("#duplicate-search"),
  duplicateLaneFilter: document.querySelector("#duplicate-lane-filter"),
  duplicateRiskFilter: document.querySelector("#duplicate-risk-filter"),
  duplicateRulingFilter: document.querySelector("#duplicate-ruling-filter"),
  clearDuplicateFilters: document.querySelector("#clear-duplicate-filters"),
  exportDuplicates: document.querySelector("#export-duplicates"),
  rulesRoot: document.querySelector("#rules-root"),
  rulesSummary: document.querySelector("#rules-summary"),
  exportRules: document.querySelector("#export-rules"),
  coverageRoot: document.querySelector("#coverage-root"),
  coverageSummary: document.querySelector("#coverage-summary"),
  exportCoverage: document.querySelector("#export-coverage"),
  closureRoot: document.querySelector("#closure-root"),
  closureSummary: document.querySelector("#closure-summary"),
  closureSearch: document.querySelector("#closure-search"),
  closureLaneFilter: document.querySelector("#closure-lane-filter"),
  closureRepositoryFilter: document.querySelector("#closure-repository-filter"),
  closureStatusFilter: document.querySelector("#closure-status-filter"),
  clearClosureFilters: document.querySelector("#clear-closure-filters"),
  exportClosure: document.querySelector("#export-closure"),
  packetRoot: document.querySelector("#packet-root"),
  packetSummary: document.querySelector("#packet-summary"),
  packetSearch: document.querySelector("#packet-search"),
  packetLaneFilter: document.querySelector("#packet-lane-filter"),
  packetStatusFilter: document.querySelector("#packet-status-filter"),
  clearPacketFilters: document.querySelector("#clear-packet-filters"),
  exportPackets: document.querySelector("#export-packets"),
  cableRoot: document.querySelector("#cable-root"),
  cableSummary: document.querySelector("#cable-summary"),
  cableSearch: document.querySelector("#cable-search"),
  cableLaneFilter: document.querySelector("#cable-lane-filter"),
  cableRecordGroupFilter: document.querySelector("#cable-record-group-filter"),
  cableStatusFilter: document.querySelector("#cable-status-filter"),
  clearCableFilters: document.querySelector("#clear-cable-filters"),
  exportCables: document.querySelector("#export-cables"),
  ledgerRoot: document.querySelector("#ledger-root"),
  ledgerSummary: document.querySelector("#ledger-summary"),
  publicRoot: document.querySelector("#public-root"),
  publicSummary: document.querySelector("#public-summary"),
  publicSearch: document.querySelector("#public-search"),
  publicLaneFilter: document.querySelector("#public-lane-filter"),
  publicRepositoryFilter: document.querySelector("#public-repository-filter"),
  clearPublicFilters: document.querySelector("#clear-public-filters"),
  exportPublic: document.querySelector("#export-public"),
  boundaryRoot: document.querySelector("#boundary-root"),
  boundarySummary: document.querySelector("#boundary-summary"),
  boundarySearch: document.querySelector("#boundary-search"),
  boundaryLaneFilter: document.querySelector("#boundary-lane-filter"),
  boundaryRepositoryFilter: document.querySelector("#boundary-repository-filter"),
  clearBoundaryFilters: document.querySelector("#clear-boundary-filters")
};

function assignLeadNumbers(items) {
  const counts = new Map();
  return [...items]
    .sort(byLaneThenDate)
    .map((item) => {
      const key = item.lane || "Volume-wide";
      const count = (counts.get(key) || 0) + 1;
      counts.set(key, count);
      const chapter = chapters.find((entry) => entry.name === key);
      return {
        ...item,
        compilerNumber: `PD3-${chapter?.number || 0}.${String(count).padStart(3, "0")}`
      };
    });
}

function byLaneThenDate(a, b) {
  return (
    chapterNumber(a.lane) - chapterNumber(b.lane) ||
    (a.sortDate || "").localeCompare(b.sortDate || "") ||
    (a.title || "").localeCompare(b.title || "")
  );
}

function chapterNumber(lane) {
  return chapters.find((chapter) => chapter.name === lane)?.number || 99;
}

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function addOptions(select, values, label) {
  select.replaceChildren(new Option(label, ""), ...values.map((value) => new Option(value, value)));
}

function plural(count, singular, pluralValue = `${singular}s`) {
  return `${count} ${count === 1 ? singular : pluralValue}`;
}

function searchText(item) {
  return [
    item.id,
    item.compilerNumber,
    item.title,
    item.date,
    item.lane,
    item.repository,
    item.sourceType,
    item.priority,
    item.status,
    item.material,
    item.evidence,
    item.problem,
    item.needed,
    item.remediation,
    item.coverage,
    item.nextUse,
    item.nextAction,
    item.action,
    item.phase,
    item.gate,
    item.proof,
    item.dateRange,
    item.recordGroup,
    item.candidateType,
    item.likelyOffices,
    item.selectionTest,
    item.sourceCopyTask,
    item.objective,
    item.proofNeeded,
    item.closureCriteria,
    item.policyEvidence,
    item.implementationEvidence,
    item.reactionEvidence,
    item.sourceCopyGate,
    item.repositories,
    item.nextStep,
    item.disposition,
    item.promoteWhen,
    item.excludeWhen,
    item.missingEvidence,
    item.seedSearches,
    item.boundaryReason,
    item.source,
    item.sourceNote,
    item.series,
    item.naId,
    item.cableUse,
    item.catalogUrl,
    item.searchUrl,
    item.sourceLocator,
    item.candidateValue,
    item.frusCheck,
    item.frusSearchUrl,
    item.documentType,
    item.chronologyId,
    item.episode,
    item.editorialRole,
    item.placement,
    item.sourceCopyStatus,
    item.duplicateTask,
    item.relatedPullSheets?.join(" "),
    item.relatedDocket?.join(" "),
    item.duplicateId,
    item.exactSearchUrl,
    item.broadSearchQuery,
    item.broadSearchUrl,
    item.duplicateRisk,
    item.recommendedRuling,
    item.auditTask,
    item.issueType,
    item.links?.map((link) => `${link.label} ${link.url}`).join(" "),
    item.targetTerms?.join(" "),
    item.matchedTerms?.join(" "),
    item.nextActions?.join(" "),
    item.relatedIds?.join(" "),
    item.sourcePools?.join(" "),
    item.gapIds?.join(" ")
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function matchesQuery(item, query) {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);
  if (!terms.length) return true;
  const haystack = searchText(item);
  return terms.every((term) => haystack.includes(term));
}

function buildChronologyRows(docs) {
  return docs
    .map((item) => {
      const number = candidateNumber(item.id);
      return {
        ...item,
        sortKey: chronologySortKey(item.id, item.date),
        displayDate: item.date,
        episode: chronologyEpisode(number),
        editorialRole: chronologyRole(item, number),
        placement: chronologyPlacement(item, number),
        sourceCopyStatus: chronologySourceCopyStatus(item, number),
        duplicateTask: "Save exact History.state.gov search, broad topical search, checked date, result count, and duplicate ruling.",
        relatedPullSheets: relatedPullSheets(number),
        relatedDocket: relatedDocket(number),
        nextAction: chronologyNextAction(item, number)
      };
    })
    .sort((a, b) => a.sortKey.localeCompare(b.sortKey) || a.id.localeCompare(b.id))
    .map((item, index) => ({
      ...item,
      chronologyId: `CHR-${String(index + 1).padStart(3, "0")}`
    }));
}

function candidateNumber(id) {
  const match = String(id || "").match(/DOC50-(\d+)/);
  return Number(match?.[1] || 0);
}

function chronologySortKey(id, date) {
  const overrides = {
    "DOC50-041": "1942-01-01",
    "DOC50-048": "1942-01-01",
    "DOC50-043": "1942-06-01",
    "DOC50-044": "1942-08-01",
    "DOC50-046": "1942-11-19",
    "DOC50-042": "1942-12-01",
    "DOC50-045": "1942-12-01",
    "DOC50-047": "1943-04-30",
    "DOC50-019": "1943-05-01",
    "DOC50-031": "1943-09-01",
    "DOC50-030": "1943-10-01",
    "DOC50-050": "1943-12-31",
    "DOC50-032": "1944-01-01",
    "DOC50-038": "1944-01-01",
    "DOC50-039": "1944-01-01",
    "DOC50-040": "1944-01-01",
    "DOC50-033": "1944-05-01",
    "DOC50-036": "1944-06-30",
    "DOC50-009": "1944-07-10",
    "DOC50-010": "1944-07-08",
    "DOC50-011": "1944-07-09",
    "DOC50-029": "1944-07-01",
    "DOC50-012": "1944-08-08",
    "DOC50-013": "1944-08-08",
    "DOC50-014": "1944-09-02",
    "DOC50-015": "1944-09-02",
    "DOC50-016": "1944-09-02",
    "DOC50-001": "1944-09-09",
    "DOC50-002": "1944-09-21",
    "DOC50-003": "1944-09-22",
    "DOC50-034": "1944-09-01",
    "DOC50-026": "1944-10-28",
    "DOC50-004": "1944-10-20",
    "DOC50-005": "1944-10-20",
    "DOC50-017": "1944-10-31",
    "DOC50-028": "1944-11-20",
    "DOC50-007": "1944-11-20",
    "DOC50-006": "1944-11-21",
    "DOC50-022": "1944-12-05",
    "DOC50-027": "1944-12-06",
    "DOC50-008": "1944-09-21",
    "DOC50-018": "1944-12-06",
    "DOC50-037": "1945-01-12",
    "DOC50-035": "1945-01-30",
    "DOC50-025": "1945-02-23",
    "DOC50-024": "1945-04-12",
    "DOC50-023": "1945-04-18",
    "DOC50-020": "1945-04-26",
    "DOC50-021": "1945-05-29",
    "DOC50-049": "1945-12-31"
  };
  if (overrides[id]) return overrides[id];
  const year = String(date || "").match(/\b(19\d{2})\b/)?.[1] || "9999";
  return `${year}-12-31`;
}

function chronologyEpisode(number) {
  if (number <= 8) return "CIAA shortwave, films, and hemispheric information service";
  if (number <= 18) return "OWI overseas reporting and field information work";
  if (number === 19) return "Poland weekly propaganda directive boundary test";
  if ((number >= 20 && number <= 28) || number === 35) return "Long-range liberation and postwar information policy";
  if (number >= 29 && number <= 34) return "Allied and interagency directive coordination";
  if (number >= 36 && number <= 40) return "War Department propaganda boundary review";
  if (number >= 41 && number <= 45) return "White House OWI oversight and intelligence surveys";
  if (number >= 46 && number <= 47) return "Rumor-control boundary review";
  if (number >= 48 && number <= 50) return "OIAA radio operations and reaction evidence";
  return "Chronology seed";
}

function chronologyRole(item, number) {
  if (number >= 41 && number <= 45) return "White House control";
  if (number >= 46 && number <= 47) return "Boundary memo";
  if (item.recordGroup === "RG 59") return "State cable / implementation";
  if (item.recordGroup === "RG 208" && /OSS|PWE|Moscow|London|Central|Regional/i.test(item.title)) return "Policy coordination";
  if (item.recordGroup === "RG 208") return "Policy guidance";
  if (item.recordGroup === "RG 165") return "Boundary directive";
  if (item.recordGroup === "RG 229") return "Reception / operations evidence";
  return "Candidate document";
}

function chronologyPlacement(item, number) {
  if (number <= 8 || number >= 48) return "Hemisphere radio/OIAA cluster; pair State cable, post evidence, and OIAA radio reaction before promotion.";
  if (number <= 18) return "OWI overseas cluster; pair Washington guidance with post reporting or foreign-reaction evidence.";
  if (number === 19 || (number >= 36 && number <= 40)) return "Boundary appendix or hold unless State/OWI diplomatic policy significance is proven.";
  if ((number >= 20 && number <= 28) || number === 35) return "Core policy-guidance sequence for liberation, occupation, neutral, and postwar information themes.";
  if (number >= 29 && number <= 34) return "Coordination sequence after core directives; use to explain Allied, OSS, London, and Moscow boundaries.";
  if (number >= 41 && number <= 45) return "White House control cluster; use before or beside agency records when FDR routing or oversight is visible.";
  if (number >= 46 && number <= 47) return "Domestic morale boundary check; promote only if foreign-audience or State policy consequence appears.";
  return "Hold for compiler placement.";
}

function chronologySourceCopyStatus(item, number) {
  if (number >= 36 && number <= 40) return "Boundary ruling needed";
  if (number >= 46 && number <= 47) return "Boundary ruling needed";
  if (number >= 41 && number <= 45) return "Folder/item source copy needed";
  if (/Reports and Issuances|Radio Reaction Reports|Resume of Operations/i.test(item.title)) return "Item selection needed";
  return "Source copy needed";
}

function relatedPullSheets(number) {
  if (number <= 8) return ["PULL-002", "PULL-007"];
  if (number <= 18) return ["PULL-001"];
  if ((number >= 20 && number <= 28) || number === 35) return ["PULL-003"];
  if (number >= 29 && number <= 34) return ["PULL-004"];
  if (number >= 36 && number <= 40) return ["PULL-010"];
  if (number >= 41 && number <= 45) return ["PULL-008"];
  if (number >= 46 && number <= 47) return ["PULL-009"];
  if (number >= 48 && number <= 50) return ["PULL-007"];
  return [];
}

function relatedDocket(number) {
  const universal = ["DKT-001", "DKT-005", "DKT-008"];
  if (number <= 8) return universal.concat(["DKT-003", "DKT-006"]);
  if (number <= 18) return universal.concat(["DKT-002", "DKT-006"]);
  if ((number >= 20 && number <= 35) || number === 19) return universal.concat(["DKT-004"]);
  if (number >= 36 && number <= 40) return universal.concat(["DKT-004"]);
  if (number >= 41 && number <= 45) return universal.concat(["DKT-007"]);
  if (number >= 46 && number <= 47) return universal;
  if (number >= 48 && number <= 50) return universal.concat(["DKT-003", "DKT-006"]);
  return universal;
}

function chronologyNextAction(item, number) {
  if (item.recordGroup === "RG 59") return "Request the underlying Central Decimal File source copy, then record author/post, recipient, enclosures, routing, and exact FRUS duplicate proof.";
  if (item.recordGroup === "RG 208") return "Pull directive source copy, extract issuing office and target themes, then pair with implementation or reaction evidence before promotion.";
  if (item.recordGroup === "RG 165") return "Apply the boundary rule: promote only if the record shows State/OWI coordination, diplomatic controversy, or public-diplomacy policy beyond tactical warfare.";
  if (item.recordGroup === "RG 229") return "Itemize the file unit and pair radio operation or reaction evidence with RG 59/RG 84 State documentation.";
  if (/President's Secretary's File/i.test(item.recordGroup)) return "Pull folder-level source copies and identify FDR action, White House routing, or relation to State/OWI decisions.";
  if (/Philleo Nash/i.test(item.recordGroup)) return "Review the source copy for foreign-audience, overseas information, State policy, or White House public-line control before any promotion.";
  return "Complete source-copy packet, duplicate check, boundary ruling, and selection rationale before final numbering.";
}

function buildDuplicateRows(rows) {
  return rows.map((item, index) => ({
    ...item,
    duplicateId: `DUP-${String(index + 1).padStart(3, "0")}`,
    exactSearchUrl: item.frusSearchUrl,
    broadSearchQuery: broadSearchQuery(item),
    broadSearchUrl: `https://history.state.gov/search?q=${encodeURIComponent(broadSearchQuery(item))}`,
    duplicateRisk: duplicateRisk(item),
    recommendedRuling: duplicateRuling(item),
    auditTask:
      "Save exact-search URL, exact result count, broad-search URL, broad result count, checked date, and final duplicate ruling before promotion."
  }));
}

function broadSearchQuery(item) {
  const agency = item.recordGroup === "RG 59" ? "OWI State" : item.recordGroup === "RG 229" ? "Inter-American Affairs radio" : item.recordGroup === "RG 208" ? "Office of War Information directive" : item.recordGroup === "RG 165" ? "Office of War Information propaganda directive" : "Office of War Information";
  const dateToken = String(item.displayDate || item.date || "").match(/\b(19\d{2})\b/)?.[1] || "1944";
  const titleTerms = String(item.title || "")
    .replace(/[^\w\s-]/g, " ")
    .split(/\s+/)
    .filter((term) => term.length > 3 && !/^(office|information|directive|report|reports|file|files|from|with|and|the|for|war)$/i.test(term))
    .slice(0, 7)
    .join(" ");
  return [titleTerms, agency, dateToken].filter(Boolean).join(" ");
}

function duplicateRisk(item) {
  if (/Boundary/i.test(item.sourceCopyStatus)) return "Boundary duplicate risk";
  if (item.priority === "Critical") return "High duplicate risk";
  if (item.priority === "High") return "Medium duplicate risk";
  if (item.recordGroup === "RG 59" || item.recordGroup === "RG 208") return "Medium duplicate risk";
  return "Low duplicate risk";
}

function duplicateRuling(item) {
  if (/Boundary/i.test(item.sourceCopyStatus)) return "Hold until boundary and duplicate checks clear";
  if (/Item selection/i.test(item.sourceCopyStatus)) return "Hold until item-level duplicate check";
  return "Unchecked - proof required before promotion";
}

function setStats() {
  nodes.totalLeads.textContent = leads.length.toString();
  nodes.intakeCount.textContent = documentIntake.length.toString();
  nodes.naraCount.textContent = leads.filter((lead) => lead.repository === "NARA").length.toString();
  nodes.fdrCount.textContent = leads.filter((lead) => lead.repository === "FDR Library").length.toString();
  nodes.poolCount.textContent = sourcePools.length.toString();
  nodes.gapCount.textContent = gaps.length.toString();
}

function renderWorkbench() {
  const naraPools = sourcePools.filter((pool) => pool.repository === "NARA");
  const fdrPools = sourcePools.filter((pool) => pool.repository === "FDR Library");
  const unfixedGaps = gaps.filter((gap) => !gap.status.startsWith("Fixed"));
  const boundaryCount = boundaryRecords.length;
  const officialStatus = meta.status || "Unknown";

  nodes.workbenchRoot.replaceChildren(
    metricCard("Official status", officialStatus, "History.state.gov lists this volume as being researched."),
    metricCard("Intake rows", documentIntake.length, "Document-level candidate rows now route the archival harvest."),
    metricCard("Candidate docs", candidateDocuments.length, "Potential documents not found in public FRUS exact-title or file-number checks."),
    metricCard("Chronology seeds", chronologyRows.length, "First-pass FRUS ordering scaffold with proof gates and next actions."),
    metricCard("Duplicate gates", duplicateRows.length, "Exact and broad History.state.gov searches required before promotion."),
    metricCard("Docket moves", compilerDocket.length, "Immediate pull and proof-gate actions for the compiler's first archive cycle."),
    metricCard("Evidence packets", evidencePackets.length, "Policy, implementation, reaction, and source-copy gates now fix the gap structure."),
    metricCard("State cable leads", stateCableLeads.length, "RG 59 controls and RG 84 post-file targets for State telegrams, despatches, and instructions."),
    metricCard("Closure tasks", closureTasks.length, "Proof tasks that convert packeted gaps into source-copy work."),
    metricCard("Source pools", naraPools.length + fdrPools.length, "NARA and FDR Library lanes for first-pass harvesting."),
    metricCard("Unfixed gaps", unfixedGaps.length, `${plural(boundaryCount, "boundary row")} keep the harvest honest.`)
  );
}

function metricCard(label, value, detail) {
  const card = document.createElement("article");
  card.className = "metric-card";
  const strong = document.createElement("strong");
  strong.textContent = value.toString();
  const span = document.createElement("span");
  span.textContent = label;
  const paragraph = document.createElement("p");
  paragraph.textContent = detail;
  card.append(strong, span, paragraph);
  return card;
}

function renderCompilerDocket() {
  const priorityOrder = new Map([
    ["Critical", 1],
    ["High", 2],
    ["Medium", 3],
    ["Low", 4]
  ]);
  const visible = [...compilerDocket].sort(
    (a, b) =>
      (priorityOrder.get(a.priority) || 99) - (priorityOrder.get(b.priority) || 99) ||
      a.id.localeCompare(b.id)
  );
  nodes.docketSummary.textContent = `${plural(visible.length, "docket move")} ready for the first archive cycle.`;
  nodes.docketRoot.replaceChildren(...visible.map(docketCard));
  if (!visible.length) nodes.docketRoot.innerHTML = '<p class="empty">No compiler docket rows were generated.</p>';
}

function docketCard(item) {
  const card = document.createElement("article");
  card.className = `record-card priority-${item.priority.toLowerCase()}`;

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "record-id";
  metaRow.append(textSpan(item.id), textSpan(item.priority), textSpan(item.phase), textSpan(item.gate));
  const title = document.createElement("h4");
  title.textContent = item.title;
  titleBlock.append(metaRow, title);

  const chips = document.createElement("div");
  chips.className = "chips";
  chips.append(chip(item.lane), priorityChip(item.priority), chip(item.repository));
  header.append(titleBlock, chips);

  const objective = document.createElement("p");
  objective.textContent = item.objective;
  const action = document.createElement("p");
  action.className = "source-note";
  action.textContent = `Do next: ${item.action}`;
  const proof = document.createElement("p");
  proof.className = "source-note";
  proof.textContent = `Proof gate: ${item.proof}`;

  const actions = document.createElement("div");
  actions.className = "record-actions";
  for (const link of item.links || []) actions.append(linkButton(link.label, link.url));
  if (item.action) actions.append(copyButton(item.action, "Copy action"));
  if (item.sourceNote) actions.append(copyButton(item.sourceNote));

  card.append(header, objective, action, proof, actions, sourceNoteDetails(item));
  if (item.relatedIds?.length) card.append(termChips(item.relatedIds));
  return card;
}

function renderLanes() {
  nodes.laneGrid.replaceChildren(
    ...chapters.map((chapter) => {
      const laneLeads = leads.filter((lead) => lead.lane === chapter.name);
      const laneGaps = gaps.filter((gap) => gap.lane === chapter.name);
      const card = document.createElement("a");
      card.className = "chapter-card";
      card.href = "#leads";
      card.dataset.lane = chapter.name;

      const number = document.createElement("p");
      number.className = "chapter-number";
      number.textContent = `Lane ${chapter.number} / ${chapter.dates}`;
      const title = document.createElement("h3");
      title.textContent = chapter.name;
      const count = document.createElement("p");
      count.className = "chapter-count";
      count.textContent = `${plural(laneLeads.length, "lead")} / ${plural(laneGaps.length, "gap")}`;
      const description = document.createElement("p");
      description.textContent = chapter.description;
      const action = document.createElement("span");
      action.className = "chapter-action";
      action.textContent = "Filter source leads";

      card.append(number, title, count, description, action);
      card.addEventListener("click", () => {
        state.leads.lane = chapter.name;
        nodes.leadLaneFilter.value = chapter.name;
        renderLeads();
      });
      return card;
    })
  );
}

function filteredLeads() {
  return leads.filter((lead) => {
    if (!matchesQuery(lead, state.leads.query)) return false;
    if (state.leads.lane && lead.lane !== state.leads.lane) return false;
    if (state.leads.repository && lead.repository !== state.leads.repository) return false;
    if (state.leads.sourceType && lead.sourceType !== state.leads.sourceType) return false;
    if (state.leads.priority && lead.priority !== state.leads.priority) return false;
    return true;
  });
}

function renderLeads() {
  const visible = filteredLeads().sort(byLaneThenDate);
  nodes.leadSummary.textContent = `${plural(visible.length, "lead")} visible from ${leads.length} candidate source leads.`;

  if (!visible.length) {
    nodes.leadsRoot.innerHTML = '<p class="empty">No source leads match the current filters.</p>';
    return;
  }

  const grouped = groupBy(visible, (lead) => lead.lane || "Volume-wide");
  const sections = chapters
    .filter((chapter) => grouped.has(chapter.name))
    .map((chapter) => leadLaneSection(chapter.name, grouped.get(chapter.name)));
  nodes.leadsRoot.replaceChildren(...sections);
}

function leadLaneSection(lane, items) {
  const section = document.createElement("section");
  section.className = "chapter-section";
  section.id = `lane-${slug(lane)}`;

  const heading = document.createElement("div");
  heading.className = "chapter-title-row";
  const title = document.createElement("h3");
  title.textContent = lane;
  const count = document.createElement("span");
  count.textContent = `${plural(items.length, "lead")} / ${plural(uniqueSorted(items.map((item) => item.repository)).length, "repository", "repositories")}`;
  heading.append(title, count);
  section.append(heading, ...items.map(leadCard));
  return section;
}

function leadCard(lead) {
  const card = document.createElement("article");
  card.className = `record-card priority-${lead.priority.toLowerCase()}`;

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "record-id";
  metaRow.append(textSpan(lead.compilerNumber), textSpan(lead.date), textSpan(lead.repository), textSpan(lead.sourceType));
  const title = document.createElement("h4");
  title.textContent = lead.title;
  titleBlock.append(metaRow, title);

  const chips = document.createElement("div");
  chips.className = "chips";
  chips.append(priorityChip(lead.priority), chip(lead.status), chip(lead.lane));
  header.append(titleBlock, chips);

  const material = document.createElement("p");
  material.textContent = lead.material;

  const actions = document.createElement("div");
  actions.className = "record-actions";
  if (lead.naraUrl) actions.append(linkButton("NARA", lead.naraUrl));
  if (lead.fdrUrl) actions.append(linkButton("FDR Library", lead.fdrUrl));
  if (lead.catalogUrl) actions.append(linkButton(lead.catalogUrl.includes("fdrlibrary") ? "FDR / FRANKLIN" : "Catalog", lead.catalogUrl));
  if (lead.sourceNote) actions.append(copyButton(lead.sourceNote));

  card.append(header, material, actions);
  card.append(sourceNoteDetails(lead));
  if (lead.nextAction) {
    const next = document.createElement("p");
    next.className = "source-note";
    next.textContent = lead.nextAction;
    card.append(next);
  }
  if (lead.targetTerms?.length) card.append(termChips(lead.targetTerms));
  return card;
}

function filteredGaps() {
  return gaps.filter((gap) => {
    if (!matchesQuery(gap, state.gaps.query)) return false;
    if (state.gaps.lane && gap.lane !== state.gaps.lane) return false;
    if (state.gaps.priority && gap.priority !== state.gaps.priority) return false;
    if (state.gaps.status && gap.status !== state.gaps.status) return false;
    return true;
  });
}

function renderGapTracker() {
  const priorityOrder = new Map([
    ["Critical", 1],
    ["High", 2],
    ["Medium", 3],
    ["Low", 4]
  ]);
  const visible = filteredGaps().sort(
    (a, b) =>
      (priorityOrder.get(a.priority) || 99) - (priorityOrder.get(b.priority) || 99) ||
      a.lane.localeCompare(b.lane) ||
      a.title.localeCompare(b.title)
  );
  nodes.gapSummary.textContent = `${plural(visible.length, "gap")} visible from ${gaps.length} compiler gap items.`;
  nodes.gapRoot.replaceChildren(...visible.map(gapCard));
  if (!visible.length) nodes.gapRoot.innerHTML = '<p class="empty">No gap-tracker items match the current filters.</p>';
}

function gapCard(gap) {
  const card = document.createElement("article");
  card.className = `gap-card priority-${gap.priority.toLowerCase()}`;

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "file-meta";
  metaRow.append(textSpan(gap.priority), textSpan(gap.status), textSpan(gap.lane));
  const title = document.createElement("h3");
  title.textContent = gap.title;
  titleBlock.append(metaRow, title);
  header.append(titleBlock);

  const evidence = document.createElement("p");
  evidence.className = "gap-evidence";
  evidence.textContent = gap.evidence;
  const problem = document.createElement("p");
  problem.textContent = gap.problem;
  const needed = document.createElement("p");
  needed.className = "source-note";
  needed.textContent = gap.needed;
  const remediation = document.createElement("p");
  remediation.className = "source-note";
  remediation.textContent = gap.remediation ? `Remediation: ${gap.remediation}` : "";

  const actions = document.createElement("ol");
  actions.className = "action-list";
  for (const action of gap.nextActions || []) {
    const item = document.createElement("li");
    item.textContent = action;
    actions.append(item);
  }

  card.append(header, evidence, problem, needed);
  if (gap.remediation) card.append(remediation);
  card.append(actions);
  if (gap.targetTerms?.length) card.append(termChips(gap.targetTerms));
  if (gap.sourcePools?.length) {
    const pools = document.createElement("p");
    pools.className = "source-note";
    pools.textContent = `Source pools: ${gap.sourcePools.join("; ")}`;
    card.append(pools);
  }
  return card;
}

function filteredSourcePools() {
  return sourcePools.filter((pool) => {
    if (!matchesQuery(pool, state.sourcePools.query)) return false;
    if (state.sourcePools.lane && pool.lane !== state.sourcePools.lane) return false;
    if (state.sourcePools.repository && pool.repository !== state.sourcePools.repository) return false;
    if (state.sourcePools.priority && pool.priority !== state.sourcePools.priority) return false;
    return true;
  });
}

function renderSourcePools() {
  const priorityOrder = new Map([
    ["Active", 1],
    ["Next", 2],
    ["Missing", 3],
    ["Later", 4]
  ]);
  const visible = filteredSourcePools().sort(
    (a, b) =>
      (priorityOrder.get(a.priority) || 99) - (priorityOrder.get(b.priority) || 99) ||
      a.repository.localeCompare(b.repository) ||
      a.title.localeCompare(b.title)
  );
  nodes.sourcePoolSummary.textContent = `${plural(visible.length, "source pool")} visible from ${sourcePools.length} harvest lanes.`;
  nodes.sourcePoolRoot.replaceChildren(...visible.map(sourcePoolCard));
  if (!visible.length) nodes.sourcePoolRoot.innerHTML = '<p class="empty">No source pools match the current filters.</p>';
}

function sourcePoolCard(pool) {
  const card = document.createElement("article");
  card.className = `file-card priority-${pool.priority.toLowerCase()}`;

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "file-meta";
  metaRow.append(textSpan(pool.priority), textSpan(pool.repository), textSpan(pool.lane));
  const title = document.createElement("h3");
  title.textContent = pool.title;
  titleBlock.append(metaRow, title);
  header.append(titleBlock);

  const coverage = document.createElement("p");
  coverage.textContent = pool.coverage;
  const nextUse = document.createElement("p");
  nextUse.className = "source-note";
  nextUse.textContent = pool.nextUse;
  const actions = document.createElement("div");
  actions.className = "file-actions";
  if (pool.url) actions.append(linkButton("Open source", pool.url));

  card.append(header, priorityChip(pool.priority), coverage, nextUse, actions);
  return card;
}

function filteredDocumentIntake() {
  return documentIntake.filter((item) => {
    if (!matchesQuery(item, state.documentIntake.query)) return false;
    if (state.documentIntake.lane && item.lane !== state.documentIntake.lane) return false;
    if (state.documentIntake.repository && item.repository !== state.documentIntake.repository) return false;
    if (state.documentIntake.status && item.status !== state.documentIntake.status) return false;
    return true;
  });
}

function renderDocumentIntake() {
  const visible = filteredDocumentIntake().sort(
    (a, b) =>
      chapterNumber(a.lane) - chapterNumber(b.lane) ||
      (a.dateRange || "").localeCompare(b.dateRange || "") ||
      a.title.localeCompare(b.title)
  );
  nodes.documentSummary.textContent = `${plural(visible.length, "row")} visible from ${documentIntake.length} document-intake rows.`;
  nodes.documentRoot.replaceChildren(...visible.map(documentCard));
  if (!visible.length) nodes.documentRoot.innerHTML = '<p class="empty">No document-intake rows match the current filters.</p>';
}

function documentCard(item) {
  const card = document.createElement("article");
  card.className = "record-card intake-card";

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "record-id";
  metaRow.append(textSpan(item.id), textSpan(item.dateRange), textSpan(item.repository), textSpan(item.status));
  const title = document.createElement("h4");
  title.textContent = item.title;
  titleBlock.append(metaRow, title);

  const chips = document.createElement("div");
  chips.className = "chips";
  chips.append(chip(item.lane), chip(item.candidateType), priorityChip(item.status));
  header.append(titleBlock, chips);

  const offices = document.createElement("p");
  offices.textContent = item.likelyOffices;
  const selection = document.createElement("p");
  selection.className = "source-note";
  selection.textContent = `Selection test: ${item.selectionTest}`;
  const task = document.createElement("p");
  task.className = "source-note";
  task.textContent = `Source-copy task: ${item.sourceCopyTask}`;

  const actions = document.createElement("div");
  actions.className = "record-actions";
  if (item.url) actions.append(linkButton("Open source", item.url));
  if (item.sourceNote) actions.append(copyButton(item.sourceNote));

  card.append(header, offices, selection, task, actions, sourceNoteDetails(item));
  if (item.gapIds?.length) card.append(termChips(item.gapIds));
  return card;
}

function filteredCandidateDocuments() {
  return candidateDocuments.filter((item) => {
    if (!matchesQuery(item, state.candidateDocuments.query)) return false;
    if (state.candidateDocuments.lane && item.lane !== state.candidateDocuments.lane) return false;
    if (state.candidateDocuments.repository && item.repository !== state.candidateDocuments.repository) return false;
    if (state.candidateDocuments.priority && item.priority !== state.candidateDocuments.priority) return false;
    if (state.candidateDocuments.status && item.status !== state.candidateDocuments.status) return false;
    return true;
  });
}

function renderCandidateDocuments() {
  const priorityOrder = new Map([
    ["Critical", 1],
    ["High", 2],
    ["Medium", 3],
    ["Low", 4]
  ]);
  const visible = filteredCandidateDocuments().sort(
    (a, b) =>
      (priorityOrder.get(a.priority) || 99) - (priorityOrder.get(b.priority) || 99) ||
      chapterNumber(a.lane) - chapterNumber(b.lane) ||
      a.id.localeCompare(b.id)
  );
  nodes.candidateSummary.textContent = `${plural(visible.length, "candidate")} visible from ${candidateDocuments.length} potential documents not found in public FRUS exact-title/file-number checks.`;
  nodes.candidateRoot.replaceChildren(...visible.map(candidateDocumentCard));
  if (!visible.length) nodes.candidateRoot.innerHTML = '<p class="empty">No candidate documents match the current filters.</p>';
}

function candidateDocumentCard(item) {
  const card = document.createElement("article");
  card.className = `record-card priority-${item.priority.toLowerCase()}`;

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "record-id";
  metaRow.append(textSpan(item.id), textSpan(item.date), textSpan(item.recordGroup), textSpan(item.status));
  const title = document.createElement("h4");
  title.textContent = item.title;
  titleBlock.append(metaRow, title);
  const chips = document.createElement("div");
  chips.className = "chips";
  chips.append(chip(item.lane), priorityChip(item.priority), chip(item.documentType));
  header.append(titleBlock, chips);

  const locator = document.createElement("p");
  locator.className = "source-note";
  locator.textContent = `Locator: ${item.sourceLocator}`;
  const value = document.createElement("p");
  value.textContent = item.candidateValue;
  const check = document.createElement("p");
  check.className = "source-note";
  check.textContent = `FRUS check: ${item.frusCheck}`;

  const actions = document.createElement("div");
  actions.className = "record-actions";
  if (item.catalogUrl) actions.append(linkButton("Catalog", item.catalogUrl));
  if (item.frusSearchUrl) actions.append(linkButton("FRUS check", item.frusSearchUrl));
  if (item.sourceNote) actions.append(copyButton(item.sourceNote));

  card.append(header, locator, value, check, actions, sourceNoteDetails(item));
  return card;
}

function filteredChronologyRows() {
  return chronologyRows.filter((item) => {
    if (!matchesQuery(item, state.chronology.query)) return false;
    if (state.chronology.lane && item.lane !== state.chronology.lane) return false;
    if (state.chronology.role && item.editorialRole !== state.chronology.role) return false;
    if (state.chronology.sourceCopyStatus && item.sourceCopyStatus !== state.chronology.sourceCopyStatus) return false;
    return true;
  });
}

function renderChronologyRows() {
  const visible = filteredChronologyRows().sort(
    (a, b) => a.sortKey.localeCompare(b.sortKey) || a.chronologyId.localeCompare(b.chronologyId)
  );
  nodes.chronologySummary.textContent = `${plural(visible.length, "row")} visible from ${chronologyRows.length} chronology seeds.`;
  nodes.chronologyRoot.replaceChildren(...visible.map(chronologyCard));
  if (!visible.length) nodes.chronologyRoot.innerHTML = '<p class="empty">No chronology seed rows match the current filters.</p>';
}

function chronologyCard(item) {
  const card = document.createElement("article");
  card.className = `record-card priority-${item.priority.toLowerCase()}`;

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "record-id";
  metaRow.append(textSpan(item.chronologyId), textSpan(item.displayDate), textSpan(item.id), textSpan(item.sourceCopyStatus));
  const title = document.createElement("h4");
  title.textContent = item.title;
  titleBlock.append(metaRow, title);

  const chips = document.createElement("div");
  chips.className = "chips";
  chips.append(chip(item.lane), priorityChip(item.priority), chip(item.editorialRole));
  header.append(titleBlock, chips);

  const episode = document.createElement("p");
  episode.textContent = item.episode;
  const placement = document.createElement("p");
  placement.className = "source-note";
  placement.textContent = `Placement: ${item.placement}`;
  const action = document.createElement("p");
  action.className = "source-note";
  action.textContent = `Next action: ${item.nextAction}`;
  const duplicate = document.createElement("p");
  duplicate.className = "source-note";
  duplicate.textContent = `Duplicate gate: ${item.duplicateTask}`;

  const actions = document.createElement("div");
  actions.className = "record-actions";
  if (item.catalogUrl) actions.append(linkButton("Catalog", item.catalogUrl));
  if (item.frusSearchUrl) actions.append(linkButton("FRUS check", item.frusSearchUrl));
  if (item.sourceNote) actions.append(copyButton(item.sourceNote));

  card.append(header, episode, placement, action, duplicate, actions, sourceNoteDetails(item));
  card.append(termChips(item.relatedPullSheets.concat(item.relatedDocket)));
  return card;
}

function chronologyColumns() {
  return [
    { label: "Chronology ID", value: (item) => item.chronologyId },
    { label: "Candidate ID", value: (item) => item.id },
    { label: "Sort Key", value: (item) => item.sortKey },
    { label: "Display Date", value: (item) => item.displayDate },
    { label: "Lane", value: (item) => item.lane },
    { label: "Episode", value: (item) => item.episode },
    { label: "Editorial Role", value: (item) => item.editorialRole },
    { label: "Priority", value: (item) => item.priority },
    { label: "Proof Status", value: (item) => item.sourceCopyStatus },
    { label: "Repository", value: (item) => item.repository },
    { label: "Record Group", value: (item) => item.recordGroup },
    { label: "Source Locator", value: (item) => item.sourceLocator },
    { label: "Title", value: (item) => item.title },
    { label: "Placement Note", value: (item) => item.placement },
    { label: "Next Action", value: (item) => item.nextAction },
    { label: "Duplicate Task", value: (item) => item.duplicateTask },
    { label: "Related Pull Sheets", value: (item) => item.relatedPullSheets.join("; ") },
    { label: "Related Docket", value: (item) => item.relatedDocket.join("; ") },
    { label: "Catalog URL", value: (item) => item.catalogUrl },
    { label: "FRUS Search URL", value: (item) => item.frusSearchUrl },
    { label: "Source Note", value: (item) => item.sourceNote }
  ];
}

function filteredDuplicateRows() {
  return duplicateRows.filter((item) => {
    if (!matchesQuery(item, state.duplicates.query)) return false;
    if (state.duplicates.lane && item.lane !== state.duplicates.lane) return false;
    if (state.duplicates.risk && item.duplicateRisk !== state.duplicates.risk) return false;
    if (state.duplicates.ruling && item.recommendedRuling !== state.duplicates.ruling) return false;
    return true;
  });
}

function renderDuplicateRows() {
  const visible = filteredDuplicateRows().sort(
    (a, b) =>
      duplicateRiskRank(a.duplicateRisk) - duplicateRiskRank(b.duplicateRisk) ||
      a.sortKey.localeCompare(b.sortKey) ||
      a.duplicateId.localeCompare(b.duplicateId)
  );
  nodes.duplicateSummary.textContent = `${plural(visible.length, "row")} visible from ${duplicateRows.length} duplicate gates.`;
  nodes.duplicateRoot.replaceChildren(...visible.map(duplicateCard));
  if (!visible.length) nodes.duplicateRoot.innerHTML = '<p class="empty">No duplicate-gate rows match the current filters.</p>';
}

function duplicateRiskRank(value) {
  if (/High/i.test(value)) return 1;
  if (/Medium/i.test(value)) return 2;
  if (/Boundary/i.test(value)) return 3;
  return 4;
}

function duplicateCard(item) {
  const card = document.createElement("article");
  card.className = `record-card priority-${item.priority.toLowerCase()}`;

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "record-id";
  metaRow.append(textSpan(item.duplicateId), textSpan(item.id), textSpan(item.chronologyId), textSpan(item.duplicateRisk));
  const title = document.createElement("h4");
  title.textContent = item.title;
  titleBlock.append(metaRow, title);

  const chips = document.createElement("div");
  chips.className = "chips";
  chips.append(chip(item.lane), priorityChip(item.priority), chip(item.recommendedRuling));
  header.append(titleBlock, chips);

  const exact = document.createElement("p");
  exact.className = "source-note";
  exact.textContent = `Exact search: ${item.exactSearchUrl}`;
  const broad = document.createElement("p");
  broad.className = "source-note";
  broad.textContent = `Broad search: ${item.broadSearchQuery}`;
  const task = document.createElement("p");
  task.textContent = item.auditTask;

  const actions = document.createElement("div");
  actions.className = "record-actions";
  if (item.exactSearchUrl) actions.append(linkButton("Exact search", item.exactSearchUrl));
  if (item.broadSearchUrl) actions.append(linkButton("Broad search", item.broadSearchUrl));
  if (item.sourceNote) actions.append(copyButton(item.sourceNote));

  card.append(header, task, exact, broad, actions, sourceNoteDetails(item));
  card.append(termChips(item.relatedPullSheets.concat(item.relatedDocket)));
  return card;
}

function duplicateColumns() {
  return [
    { label: "Duplicate ID", value: (item) => item.duplicateId },
    { label: "Candidate ID", value: (item) => item.id },
    { label: "Chronology ID", value: (item) => item.chronologyId },
    { label: "Priority", value: (item) => item.priority },
    { label: "Duplicate Risk", value: (item) => item.duplicateRisk },
    { label: "Recommended Ruling", value: (item) => item.recommendedRuling },
    { label: "Lane", value: (item) => item.lane },
    { label: "Date", value: (item) => item.displayDate },
    { label: "Title", value: (item) => item.title },
    { label: "Repository", value: (item) => item.repository },
    { label: "Record Group", value: (item) => item.recordGroup },
    { label: "Source Locator", value: (item) => item.sourceLocator },
    { label: "Exact Search URL", value: (item) => item.exactSearchUrl },
    { label: "Exact Result Count", value: () => "" },
    { label: "Broad Search Query", value: (item) => item.broadSearchQuery },
    { label: "Broad Search URL", value: (item) => item.broadSearchUrl },
    { label: "Broad Result Count", value: () => "" },
    { label: "Checked Date", value: () => "" },
    { label: "Duplicate Status", value: () => "Unchecked" },
    { label: "Final Ruling", value: () => "" },
    { label: "Compiler Notes", value: () => "" },
    { label: "Audit Task", value: (item) => item.auditTask },
    { label: "Related Pull Sheets", value: (item) => item.relatedPullSheets.join("; ") },
    { label: "Related Docket", value: (item) => item.relatedDocket.join("; ") },
    { label: "Catalog URL", value: (item) => item.catalogUrl },
    { label: "Source Note", value: (item) => item.sourceNote }
  ];
}

function renderSelectionRules() {
  nodes.rulesSummary.textContent = `${plural(selectionRules.length, "rule")} define promotion, boundary, and exclusion tests for candidate documents.`;
  nodes.rulesRoot.replaceChildren(...selectionRules.map(ruleCard));
  if (!selectionRules.length) nodes.rulesRoot.innerHTML = '<p class="empty">No selection rules were generated.</p>';
}

function ruleCard(rule) {
  const card = document.createElement("article");
  card.className = "file-card rule-card";

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "file-meta";
  metaRow.append(textSpan(rule.id), textSpan(rule.disposition), textSpan(rule.scope));
  const title = document.createElement("h3");
  title.textContent = rule.title;
  titleBlock.append(metaRow, title);
  header.append(titleBlock, priorityChip(rule.disposition));

  const ruleText = document.createElement("p");
  ruleText.textContent = rule.rule;
  const promote = document.createElement("p");
  promote.className = "source-note";
  promote.textContent = `Promote when: ${rule.promoteWhen}`;
  const exclude = document.createElement("p");
  exclude.className = "source-note";
  exclude.textContent = `Hold or exclude when: ${rule.excludeWhen}`;

  card.append(header, ruleText, promote, exclude);
  if (rule.gapIds?.length) card.append(termChips(rule.gapIds));
  return card;
}

function renderCoverageMatrix() {
  nodes.coverageSummary.textContent = `${plural(coverageMatrix.length, "coverage row")} track theater, audience, and repository balance.`;
  nodes.coverageRoot.replaceChildren(...coverageMatrix.map(coverageCard));
  if (!coverageMatrix.length) nodes.coverageRoot.innerHTML = '<p class="empty">No coverage rows were generated.</p>';
}

function coverageCard(item) {
  const card = document.createElement("article");
  card.className = `file-card priority-${item.priority.toLowerCase()}`;

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "file-meta";
  metaRow.append(textSpan(item.priority), textSpan(item.theater), textSpan(item.audience));
  const title = document.createElement("h3");
  title.textContent = item.title;
  titleBlock.append(metaRow, title);
  header.append(titleBlock, priorityChip(item.priority));

  const repositories = document.createElement("p");
  repositories.textContent = `Repositories: ${item.repositories}`;
  const missing = document.createElement("p");
  missing.className = "source-note";
  missing.textContent = `Missing evidence: ${item.missingEvidence}`;
  const seeds = document.createElement("p");
  seeds.className = "source-note";
  seeds.textContent = `Seed searches: ${item.seedSearches}`;

  card.append(header, repositories, missing, seeds);
  if (item.gapIds?.length) card.append(termChips(item.gapIds));
  return card;
}

function filteredClosureTasks() {
  return closureTasks.filter((task) => {
    if (!matchesQuery(task, state.closure.query)) return false;
    if (state.closure.lane && task.lane !== state.closure.lane) return false;
    if (state.closure.repository && task.repository !== state.closure.repository) return false;
    if (state.closure.status && task.status !== state.closure.status) return false;
    return true;
  });
}

function renderClosureTasks() {
  const priorityOrder = new Map([
    ["Critical", 1],
    ["High", 2],
    ["Medium", 3],
    ["Boundary", 4]
  ]);
  const visible = filteredClosureTasks().sort(
    (a, b) =>
      (priorityOrder.get(a.priority) || 99) - (priorityOrder.get(b.priority) || 99) ||
      chapterNumber(a.lane) - chapterNumber(b.lane) ||
      a.id.localeCompare(b.id)
  );
  nodes.closureSummary.textContent = `${plural(visible.length, "task")} visible from ${closureTasks.length} gap-closure tasks.`;
  nodes.closureRoot.replaceChildren(...visible.map(closureCard));
  if (!visible.length) nodes.closureRoot.innerHTML = '<p class="empty">No gap-closure tasks match the current filters.</p>';
}

function closureCard(task) {
  const card = document.createElement("article");
  card.className = `record-card priority-${task.priority.toLowerCase()}`;

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "record-id";
  metaRow.append(textSpan(task.id), textSpan(task.priority), textSpan(task.status), textSpan(task.repository));
  const title = document.createElement("h4");
  title.textContent = task.title;
  titleBlock.append(metaRow, title);
  const chips = document.createElement("div");
  chips.className = "chips";
  chips.append(chip(task.lane), priorityChip(task.priority), chip(task.status));
  header.append(titleBlock, chips);

  const objective = document.createElement("p");
  objective.textContent = task.objective;
  const proof = document.createElement("p");
  proof.className = "source-note";
  proof.textContent = `Proof needed: ${task.proofNeeded}`;
  const criteria = document.createElement("p");
  criteria.className = "source-note";
  criteria.textContent = `Closure criteria: ${task.closureCriteria}`;
  const next = document.createElement("p");
  next.className = "source-note";
  next.textContent = `Next step: ${task.nextStep}`;

  const actions = document.createElement("div");
  actions.className = "record-actions";
  if (task.queryUrl) actions.append(linkButton("Open search", task.queryUrl));
  if (task.sourceNote) actions.append(copyButton(task.sourceNote));

  card.append(header, objective, proof, criteria, next, actions, sourceNoteDetails(task));
  if (task.gapIds?.length) card.append(termChips(task.gapIds));
  return card;
}

function filteredEvidencePackets() {
  return evidencePackets.filter((packet) => {
    if (!matchesQuery(packet, state.evidencePackets.query)) return false;
    if (state.evidencePackets.lane && packet.lane !== state.evidencePackets.lane) return false;
    if (state.evidencePackets.status && packet.status !== state.evidencePackets.status) return false;
    return true;
  });
}

function renderEvidencePackets() {
  const priorityOrder = new Map([
    ["Critical", 1],
    ["High", 2],
    ["Medium", 3],
    ["Boundary", 4]
  ]);
  const visible = filteredEvidencePackets().sort(
    (a, b) =>
      (priorityOrder.get(a.priority) || 99) - (priorityOrder.get(b.priority) || 99) ||
      chapterNumber(a.lane) - chapterNumber(b.lane) ||
      a.id.localeCompare(b.id)
  );
  nodes.packetSummary.textContent = `${plural(visible.length, "packet")} visible from ${evidencePackets.length} gap-fix evidence packets.`;
  nodes.packetRoot.replaceChildren(...visible.map(evidencePacketCard));
  if (!visible.length) nodes.packetRoot.innerHTML = '<p class="empty">No evidence packets match the current filters.</p>';
}

function evidencePacketCard(packet) {
  const card = document.createElement("article");
  card.className = `record-card priority-${packet.priority.toLowerCase()}`;

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "record-id";
  metaRow.append(textSpan(packet.id), textSpan(packet.dateRange), textSpan(packet.priority), textSpan(packet.status));
  const title = document.createElement("h4");
  title.textContent = packet.title;
  titleBlock.append(metaRow, title);
  const chips = document.createElement("div");
  chips.className = "chips";
  chips.append(chip(packet.lane), priorityChip(packet.priority), chip(packet.status));
  header.append(titleBlock, chips);

  const policy = document.createElement("p");
  policy.className = "source-note";
  policy.textContent = `Policy evidence: ${packet.policyEvidence}`;
  const implementation = document.createElement("p");
  implementation.className = "source-note";
  implementation.textContent = `Implementation evidence: ${packet.implementationEvidence}`;
  const reaction = document.createElement("p");
  reaction.className = "source-note";
  reaction.textContent = `Reaction evidence: ${packet.reactionEvidence}`;
  const sourceGate = document.createElement("p");
  sourceGate.className = "source-note";
  sourceGate.textContent = `Source-copy gate: ${packet.sourceCopyGate}`;
  const repositories = document.createElement("p");
  repositories.textContent = `Repositories: ${packet.repositories}`;
  const nextAction = document.createElement("p");
  nextAction.className = "source-note";
  nextAction.textContent = `Next action: ${packet.nextAction}`;

  const actions = document.createElement("div");
  actions.className = "record-actions";
  for (const link of packet.links || []) actions.append(linkButton(link.label, link.url));
  if (packet.sourceNote) actions.append(copyButton(packet.sourceNote));

  card.append(header, repositories, policy, implementation, reaction, sourceGate, nextAction, actions, sourceNoteDetails(packet));
  if (packet.gapIds?.length) card.append(termChips(packet.gapIds));
  return card;
}

function filteredStateCableLeads() {
  return stateCableLeads.filter((lead) => {
    if (!matchesQuery(lead, state.stateCables.query)) return false;
    if (state.stateCables.lane && lead.lane !== state.stateCables.lane) return false;
    if (state.stateCables.recordGroup && lead.recordGroup !== state.stateCables.recordGroup) return false;
    if (state.stateCables.status && lead.status !== state.stateCables.status) return false;
    return true;
  });
}

function renderStateCableLeads() {
  const priorityOrder = new Map([
    ["Critical", 1],
    ["High", 2],
    ["Medium", 3]
  ]);
  const visible = filteredStateCableLeads().sort(
    (a, b) =>
      (priorityOrder.get(a.priority) || 99) - (priorityOrder.get(b.priority) || 99) ||
      a.recordGroup.localeCompare(b.recordGroup) ||
      chapterNumber(a.lane) - chapterNumber(b.lane) ||
      a.id.localeCompare(b.id)
  );
  const rg59 = visible.filter((lead) => lead.recordGroup === "RG 59").length;
  const rg84 = visible.filter((lead) => lead.recordGroup === "RG 84").length;
  nodes.cableSummary.textContent = `${plural(visible.length, "lead")} visible from ${stateCableLeads.length} State cable leads: ${plural(rg59, "RG 59 row")} and ${plural(rg84, "RG 84 row")}.`;
  nodes.cableRoot.replaceChildren(...visible.map(stateCableCard));
  if (!visible.length) nodes.cableRoot.innerHTML = '<p class="empty">No State cable leads match the current filters.</p>';
}

function stateCableCard(lead) {
  const card = document.createElement("article");
  card.className = `record-card priority-${lead.priority.toLowerCase()}`;

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "record-id";
  metaRow.append(textSpan(lead.id), textSpan(lead.recordGroup), textSpan(lead.dateRange), textSpan(lead.status));
  const title = document.createElement("h4");
  title.textContent = lead.title;
  titleBlock.append(metaRow, title);
  const chips = document.createElement("div");
  chips.className = "chips";
  chips.append(chip(lead.lane), priorityChip(lead.priority), chip(lead.status));
  header.append(titleBlock, chips);

  const series = document.createElement("p");
  series.className = "source-note";
  series.textContent = `Series/control: ${lead.series || "Series pending."}${lead.naId ? ` | NAID ${lead.naId}` : ""}`;
  const material = document.createElement("p");
  material.textContent = lead.material;
  const use = document.createElement("p");
  use.className = "source-note";
  use.textContent = `Cable use: ${lead.cableUse}`;
  const next = document.createElement("p");
  next.className = "source-note";
  next.textContent = `Next action: ${lead.nextAction}`;

  const actions = document.createElement("div");
  actions.className = "record-actions";
  if (lead.catalogUrl) actions.append(linkButton("Catalog", lead.catalogUrl));
  if (lead.searchUrl) actions.append(linkButton("Search", lead.searchUrl));
  for (const link of lead.links || []) actions.append(linkButton(link.label, link.url));
  if (lead.sourceNote) actions.append(copyButton(lead.sourceNote));

  card.append(header, series, material, use, next, actions, sourceNoteDetails(lead));
  if (lead.targetTerms?.length) card.append(termChips(lead.targetTerms));
  if (lead.gapIds?.length) card.append(termChips(lead.gapIds));
  return card;
}

function renderLedger() {
  const naraRows = ledger.filter((row) => row.repository === "NARA").length;
  const fdrRows = ledger.filter((row) => row.repository === "FDR Library").length;
  nodes.ledgerSummary.textContent = `${plural(ledger.length, "anchor")} in the source-copy ledger: ${plural(naraRows, "NARA row")} and ${plural(fdrRows, "FDR row")}.`;
  nodes.ledgerRoot.replaceChildren(...ledger.map(ledgerCard));
  if (!ledger.length) nodes.ledgerRoot.innerHTML = '<p class="empty">No source-copy ledger rows were generated.</p>';
}

function ledgerCard(item) {
  const card = document.createElement("article");
  card.className = "record-card ledger-card";

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "record-id";
  metaRow.append(textSpan(item.issueType), textSpan(item.repository), textSpan(item.priority), textSpan(item.status));
  const title = document.createElement("h4");
  title.textContent = item.title;
  titleBlock.append(metaRow, title);
  header.append(titleBlock, priorityChip(item.priority));

  const action = document.createElement("p");
  action.textContent = item.action;

  const actions = document.createElement("div");
  actions.className = "record-actions";
  if (item.url) actions.append(linkButton("Open source", item.url));
  if (item.sourceNote) actions.append(copyButton(item.sourceNote));

  card.append(header, action, actions, sourceNoteDetails(item));
  return card;
}

function filteredPublicReferences() {
  return publicReferences.filter((item) => {
    if (!matchesQuery(item, state.public.query)) return false;
    if (state.public.lane && item.lane !== state.public.lane) return false;
    if (state.public.repository && item.repository !== state.public.repository) return false;
    return true;
  });
}

function renderPublicReferences() {
  const visible = filteredPublicReferences().sort((a, b) => a.sortDate.localeCompare(b.sortDate) || a.title.localeCompare(b.title));
  nodes.publicSummary.textContent = `${plural(visible.length, "reference")} visible from ${publicReferences.length} public-line references.`;
  nodes.publicRoot.replaceChildren(...visible.map(publicCard));
  if (!visible.length) nodes.publicRoot.innerHTML = '<p class="empty">No public-line references match the current filters.</p>';
}

function publicCard(item) {
  const card = document.createElement("article");
  card.className = "file-card";

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "file-meta";
  metaRow.append(textSpan(item.date), textSpan(item.documentType), textSpan(item.repository));
  const title = document.createElement("h3");
  title.textContent = item.title;
  titleBlock.append(metaRow, title);
  header.append(titleBlock);

  const chips = document.createElement("div");
  chips.className = "chips";
  for (const term of (item.matchedTerms || []).slice(0, 6)) chips.append(chip(term));

  const actions = document.createElement("div");
  actions.className = "file-actions";
  if (item.url) actions.append(linkButton("Open reference", item.url));
  if (item.sourceNote) actions.append(copyButton(item.sourceNote));

  card.append(header, chips, sourceNoteDetails(item), actions);
  return card;
}

function filteredBoundaryRecords() {
  return boundaryRecords.filter((record) => {
    if (!matchesQuery(record, state.boundary.query)) return false;
    if (state.boundary.lane && record.lane !== state.boundary.lane) return false;
    if (state.boundary.repository && record.repository !== state.boundary.repository) return false;
    return true;
  });
}

function renderBoundaryRecords() {
  const visible = filteredBoundaryRecords().sort((a, b) => a.sortDate.localeCompare(b.sortDate) || a.title.localeCompare(b.title));
  nodes.boundarySummary.textContent = `${plural(visible.length, "row")} visible from ${boundaryRecords.length} boundary rows.`;
  nodes.boundaryRoot.replaceChildren(...visible.map(boundaryCard));
  if (!visible.length) nodes.boundaryRoot.innerHTML = '<p class="empty">No boundary rows match the current filters.</p>';
}

function boundaryCard(record) {
  const card = document.createElement("article");
  card.className = "record-card boundary-card";

  const header = document.createElement("header");
  const titleBlock = document.createElement("div");
  const metaRow = document.createElement("div");
  metaRow.className = "record-id";
  metaRow.append(textSpan(record.date), textSpan(record.repository), textSpan(record.status), textSpan(record.lane));
  const title = document.createElement("h4");
  title.textContent = record.title;
  titleBlock.append(metaRow, title);
  header.append(titleBlock, chip(record.status, "boundary"));

  const reason = document.createElement("p");
  reason.textContent = record.boundaryReason;

  const actions = document.createElement("div");
  actions.className = "record-actions";
  if (record.url) actions.append(linkButton("Open source", record.url));
  if (record.sourceNote) actions.append(copyButton(record.sourceNote));

  card.append(header, reason, actions, sourceNoteDetails(record));
  if (record.targetTerms?.length) card.append(termChips(record.targetTerms));
  return card;
}

function chip(label, mode = "") {
  const span = document.createElement("span");
  span.className = `chip ${mode}`.trim();
  span.textContent = label || "Unspecified";
  return span;
}

function priorityChip(value) {
  const label = value || "Unspecified";
  const mode = /critical|missing/i.test(label)
    ? "warn"
    : /high|core|active/i.test(label)
      ? "good"
      : /boundary/i.test(label)
        ? "boundary"
        : "";
  return chip(label, mode);
}

function termChips(terms) {
  const wrap = document.createElement("div");
  wrap.className = "chips";
  for (const term of terms.slice(0, 8)) wrap.append(chip(term));
  return wrap;
}

function textSpan(value) {
  const span = document.createElement("span");
  span.textContent = value || "";
  return span;
}

function linkButton(label, href) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = label;
  return link;
}

function copyButton(value) {
  const button = document.createElement("button");
  button.className = "copy-note";
  button.type = "button";
  button.textContent = "Copy note";
  button.addEventListener("click", async () => {
    await navigator.clipboard.writeText(value || "");
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = "Copy note";
    }, 1200);
  });
  return button;
}

function sourceNoteDetails(item) {
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  summary.textContent = "Source note";
  const note = document.createElement("p");
  note.className = "source-note";
  note.textContent = item.sourceNote || "Source note pending.";
  details.append(summary, note);
  return details;
}

function groupBy(items, getter) {
  const groups = new Map();
  for (const item of items) {
    const key = getter(item);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }
  return groups;
}

function slug(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function toCsv(items, columns) {
  const escape = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
  return [columns.map((column) => escape(column.label)).join(",")]
    .concat(items.map((item) => columns.map((column) => escape(column.value(item))).join(",")))
    .join("\n");
}

function downloadCsv(filename, csv) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function populateFilters() {
  addOptions(nodes.leadLaneFilter, chapters.map((chapter) => chapter.name), "All lanes");
  addOptions(nodes.leadRepositoryFilter, uniqueSorted(leads.map((lead) => lead.repository)), "All repositories");
  addOptions(nodes.leadTypeFilter, uniqueSorted(leads.map((lead) => lead.sourceType)), "All source types");
  addOptions(nodes.leadPriorityFilter, uniqueSorted(leads.map((lead) => lead.priority)), "All priorities");
  addOptions(nodes.gapLaneFilter, uniqueSorted(gaps.map((gap) => gap.lane)), "All lanes");
  addOptions(nodes.gapPriorityFilter, uniqueSorted(gaps.map((gap) => gap.priority)), "All priorities");
  addOptions(nodes.gapStatusFilter, uniqueSorted(gaps.map((gap) => gap.status)), "All statuses");
  addOptions(nodes.sourcePoolLaneFilter, uniqueSorted(sourcePools.map((pool) => pool.lane)), "All lanes");
  addOptions(nodes.sourcePoolRepositoryFilter, uniqueSorted(sourcePools.map((pool) => pool.repository)), "All repositories");
  addOptions(nodes.sourcePoolPriorityFilter, uniqueSorted(sourcePools.map((pool) => pool.priority)), "All priorities");
  addOptions(nodes.documentLaneFilter, uniqueSorted(documentIntake.map((item) => item.lane)), "All lanes");
  addOptions(nodes.documentRepositoryFilter, uniqueSorted(documentIntake.map((item) => item.repository)), "All repositories");
  addOptions(nodes.documentStatusFilter, uniqueSorted(documentIntake.map((item) => item.status)), "All statuses");
  addOptions(nodes.candidateLaneFilter, uniqueSorted(candidateDocuments.map((item) => item.lane)), "All lanes");
  addOptions(nodes.candidateRepositoryFilter, uniqueSorted(candidateDocuments.map((item) => item.repository)), "All repositories");
  addOptions(nodes.candidatePriorityFilter, uniqueSorted(candidateDocuments.map((item) => item.priority)), "All priorities");
  addOptions(nodes.candidateStatusFilter, uniqueSorted(candidateDocuments.map((item) => item.status)), "All statuses");
  addOptions(nodes.chronologyLaneFilter, uniqueSorted(chronologyRows.map((item) => item.lane)), "All lanes");
  addOptions(nodes.chronologyRoleFilter, uniqueSorted(chronologyRows.map((item) => item.editorialRole)), "All roles");
  addOptions(nodes.chronologyStatusFilter, uniqueSorted(chronologyRows.map((item) => item.sourceCopyStatus)), "All proof statuses");
  addOptions(nodes.duplicateLaneFilter, uniqueSorted(duplicateRows.map((item) => item.lane)), "All lanes");
  addOptions(nodes.duplicateRiskFilter, uniqueSorted(duplicateRows.map((item) => item.duplicateRisk)), "All risks");
  addOptions(nodes.duplicateRulingFilter, uniqueSorted(duplicateRows.map((item) => item.recommendedRuling)), "All rulings");
  addOptions(nodes.closureLaneFilter, uniqueSorted(closureTasks.map((task) => task.lane)), "All lanes");
  addOptions(nodes.closureRepositoryFilter, uniqueSorted(closureTasks.map((task) => task.repository)), "All repositories");
  addOptions(nodes.closureStatusFilter, uniqueSorted(closureTasks.map((task) => task.status)), "All statuses");
  addOptions(nodes.packetLaneFilter, uniqueSorted(evidencePackets.map((packet) => packet.lane)), "All lanes");
  addOptions(nodes.packetStatusFilter, uniqueSorted(evidencePackets.map((packet) => packet.status)), "All statuses");
  addOptions(nodes.cableLaneFilter, uniqueSorted(stateCableLeads.map((lead) => lead.lane)), "All lanes");
  addOptions(nodes.cableRecordGroupFilter, uniqueSorted(stateCableLeads.map((lead) => lead.recordGroup)), "All record groups");
  addOptions(nodes.cableStatusFilter, uniqueSorted(stateCableLeads.map((lead) => lead.status)), "All statuses");
  addOptions(nodes.publicLaneFilter, uniqueSorted(publicReferences.map((item) => item.lane)), "All lanes");
  addOptions(nodes.publicRepositoryFilter, uniqueSorted(publicReferences.map((item) => item.repository)), "All repositories");
  addOptions(nodes.boundaryLaneFilter, uniqueSorted(boundaryRecords.map((record) => record.lane)), "All lanes");
  addOptions(nodes.boundaryRepositoryFilter, uniqueSorted(boundaryRecords.map((record) => record.repository)), "All repositories");
}

function setupEvents() {
  nodes.leadSearch.addEventListener("input", (event) => {
    state.leads.query = event.target.value;
    renderLeads();
  });
  nodes.leadLaneFilter.addEventListener("change", (event) => {
    state.leads.lane = event.target.value;
    renderLeads();
  });
  nodes.leadRepositoryFilter.addEventListener("change", (event) => {
    state.leads.repository = event.target.value;
    renderLeads();
  });
  nodes.leadTypeFilter.addEventListener("change", (event) => {
    state.leads.sourceType = event.target.value;
    renderLeads();
  });
  nodes.leadPriorityFilter.addEventListener("change", (event) => {
    state.leads.priority = event.target.value;
    renderLeads();
  });
  nodes.clearLeadFilters.addEventListener("click", () => {
    state.leads = { query: "", lane: "", repository: "", sourceType: "", priority: "" };
    nodes.leadSearch.value = "";
    nodes.leadLaneFilter.value = "";
    nodes.leadRepositoryFilter.value = "";
    nodes.leadTypeFilter.value = "";
    nodes.leadPriorityFilter.value = "";
    renderLeads();
  });
  nodes.exportLeads.addEventListener("click", () => {
    downloadCsv(
      "frus-pd-wwii-source-leads.csv",
      toCsv(filteredLeads(), [
        { label: "Compiler ID", value: (lead) => lead.compilerNumber },
        { label: "Date", value: (lead) => lead.date },
        { label: "Lane", value: (lead) => lead.lane },
        { label: "Repository", value: (lead) => lead.repository },
        { label: "Source Type", value: (lead) => lead.sourceType },
        { label: "Priority", value: (lead) => lead.priority },
        { label: "Status", value: (lead) => lead.status },
        { label: "Title", value: (lead) => lead.title },
        { label: "Material", value: (lead) => lead.material },
        { label: "NARA URL", value: (lead) => lead.naraUrl },
        { label: "FDR URL", value: (lead) => lead.fdrUrl },
        { label: "Catalog URL", value: (lead) => lead.catalogUrl },
        { label: "Source Note", value: (lead) => lead.sourceNote },
        { label: "Target Terms", value: (lead) => (lead.targetTerms || []).join("; ") },
        { label: "Next Action", value: (lead) => lead.nextAction }
      ])
    );
  });

  nodes.exportDocket.addEventListener("click", () => {
    downloadCsv(
      "frus-pd-wwii-immediate-compiler-docket.csv",
      toCsv(compilerDocket, [
        { label: "ID", value: (item) => item.id },
        { label: "Priority", value: (item) => item.priority },
        { label: "Phase", value: (item) => item.phase },
        { label: "Gate", value: (item) => item.gate },
        { label: "Lane", value: (item) => item.lane },
        { label: "Repository", value: (item) => item.repository },
        { label: "Title", value: (item) => item.title },
        { label: "Objective", value: (item) => item.objective },
        { label: "Action", value: (item) => item.action },
        { label: "Proof Gate", value: (item) => item.proof },
        { label: "Links", value: (item) => (item.links || []).map((link) => `${link.label}: ${link.url}`).join("; ") },
        { label: "Related IDs", value: (item) => (item.relatedIds || []).join("; ") },
        { label: "Source Note", value: (item) => item.sourceNote }
      ])
    );
  });

  nodes.gapSearch.addEventListener("input", (event) => {
    state.gaps.query = event.target.value;
    renderGapTracker();
  });
  nodes.gapLaneFilter.addEventListener("change", (event) => {
    state.gaps.lane = event.target.value;
    renderGapTracker();
  });
  nodes.gapPriorityFilter.addEventListener("change", (event) => {
    state.gaps.priority = event.target.value;
    renderGapTracker();
  });
  nodes.gapStatusFilter.addEventListener("change", (event) => {
    state.gaps.status = event.target.value;
    renderGapTracker();
  });
  nodes.clearGapFilters.addEventListener("click", () => {
    state.gaps = { query: "", lane: "", priority: "", status: "" };
    nodes.gapSearch.value = "";
    nodes.gapLaneFilter.value = "";
    nodes.gapPriorityFilter.value = "";
    nodes.gapStatusFilter.value = "";
    renderGapTracker();
  });
  nodes.exportGaps.addEventListener("click", () => {
    downloadCsv(
      "frus-pd-wwii-gap-tracker.csv",
      toCsv(filteredGaps(), [
        { label: "Priority", value: (gap) => gap.priority },
        { label: "Status", value: (gap) => gap.status },
        { label: "Lane", value: (gap) => gap.lane },
        { label: "Title", value: (gap) => gap.title },
        { label: "Evidence", value: (gap) => gap.evidence },
        { label: "Problem", value: (gap) => gap.problem },
        { label: "Needed", value: (gap) => gap.needed },
        { label: "Remediation", value: (gap) => gap.remediation },
        { label: "Next Actions", value: (gap) => (gap.nextActions || []).join("; ") },
        { label: "Target Terms", value: (gap) => (gap.targetTerms || []).join("; ") },
        { label: "Source Pools", value: (gap) => (gap.sourcePools || []).join("; ") }
      ])
    );
  });

  nodes.sourcePoolSearch.addEventListener("input", (event) => {
    state.sourcePools.query = event.target.value;
    renderSourcePools();
  });
  nodes.sourcePoolLaneFilter.addEventListener("change", (event) => {
    state.sourcePools.lane = event.target.value;
    renderSourcePools();
  });
  nodes.sourcePoolRepositoryFilter.addEventListener("change", (event) => {
    state.sourcePools.repository = event.target.value;
    renderSourcePools();
  });
  nodes.sourcePoolPriorityFilter.addEventListener("change", (event) => {
    state.sourcePools.priority = event.target.value;
    renderSourcePools();
  });
  nodes.clearSourcePoolFilters.addEventListener("click", () => {
    state.sourcePools = { query: "", lane: "", repository: "", priority: "" };
    nodes.sourcePoolSearch.value = "";
    nodes.sourcePoolLaneFilter.value = "";
    nodes.sourcePoolRepositoryFilter.value = "";
    nodes.sourcePoolPriorityFilter.value = "";
    renderSourcePools();
  });
  nodes.exportSourcePools.addEventListener("click", () => {
    downloadCsv(
      "frus-pd-wwii-source-pools.csv",
      toCsv(filteredSourcePools(), [
        { label: "Priority", value: (pool) => pool.priority },
        { label: "Repository", value: (pool) => pool.repository },
        { label: "Lane", value: (pool) => pool.lane },
        { label: "Title", value: (pool) => pool.title },
        { label: "URL", value: (pool) => pool.url },
        { label: "Coverage", value: (pool) => pool.coverage },
        { label: "Next Use", value: (pool) => pool.nextUse }
      ])
    );
  });

  nodes.documentSearch.addEventListener("input", (event) => {
    state.documentIntake.query = event.target.value;
    renderDocumentIntake();
  });
  nodes.documentLaneFilter.addEventListener("change", (event) => {
    state.documentIntake.lane = event.target.value;
    renderDocumentIntake();
  });
  nodes.documentRepositoryFilter.addEventListener("change", (event) => {
    state.documentIntake.repository = event.target.value;
    renderDocumentIntake();
  });
  nodes.documentStatusFilter.addEventListener("change", (event) => {
    state.documentIntake.status = event.target.value;
    renderDocumentIntake();
  });
  nodes.clearDocumentFilters.addEventListener("click", () => {
    state.documentIntake = { query: "", lane: "", repository: "", status: "" };
    nodes.documentSearch.value = "";
    nodes.documentLaneFilter.value = "";
    nodes.documentRepositoryFilter.value = "";
    nodes.documentStatusFilter.value = "";
    renderDocumentIntake();
  });
  nodes.exportDocuments.addEventListener("click", () => {
    downloadCsv(
      "frus-pd-wwii-document-intake.csv",
      toCsv(filteredDocumentIntake(), [
        { label: "ID", value: (item) => item.id },
        { label: "Date Range", value: (item) => item.dateRange },
        { label: "Lane", value: (item) => item.lane },
        { label: "Repository", value: (item) => item.repository },
        { label: "Record Group", value: (item) => item.recordGroup },
        { label: "Candidate Type", value: (item) => item.candidateType },
        { label: "Status", value: (item) => item.status },
        { label: "Source Pool", value: (item) => item.sourcePoolId },
        { label: "Title", value: (item) => item.title },
        { label: "Likely Offices", value: (item) => item.likelyOffices },
        { label: "Selection Test", value: (item) => item.selectionTest },
        { label: "Source Copy Task", value: (item) => item.sourceCopyTask },
        { label: "Gap IDs", value: (item) => (item.gapIds || []).join("; ") },
        { label: "URL", value: (item) => item.url },
        { label: "Source Note", value: (item) => item.sourceNote }
      ])
    );
  });

  nodes.candidateSearch.addEventListener("input", (event) => {
    state.candidateDocuments.query = event.target.value;
    renderCandidateDocuments();
  });
  nodes.candidateLaneFilter.addEventListener("change", (event) => {
    state.candidateDocuments.lane = event.target.value;
    renderCandidateDocuments();
  });
  nodes.candidateRepositoryFilter.addEventListener("change", (event) => {
    state.candidateDocuments.repository = event.target.value;
    renderCandidateDocuments();
  });
  nodes.candidatePriorityFilter.addEventListener("change", (event) => {
    state.candidateDocuments.priority = event.target.value;
    renderCandidateDocuments();
  });
  nodes.candidateStatusFilter.addEventListener("change", (event) => {
    state.candidateDocuments.status = event.target.value;
    renderCandidateDocuments();
  });
  nodes.clearCandidateFilters.addEventListener("click", () => {
    state.candidateDocuments = { query: "", lane: "", repository: "", priority: "", status: "" };
    nodes.candidateSearch.value = "";
    nodes.candidateLaneFilter.value = "";
    nodes.candidateRepositoryFilter.value = "";
    nodes.candidatePriorityFilter.value = "";
    nodes.candidateStatusFilter.value = "";
    renderCandidateDocuments();
  });
  nodes.exportCandidates.addEventListener("click", () => {
    downloadCsv(
      "frus-pd-wwii-50-candidate-documents.csv",
      toCsv(filteredCandidateDocuments(), [
        { label: "ID", value: (item) => item.id },
        { label: "Priority", value: (item) => item.priority },
        { label: "Status", value: (item) => item.status },
        { label: "Lane", value: (item) => item.lane },
        { label: "Date", value: (item) => item.date },
        { label: "Repository", value: (item) => item.repository },
        { label: "Record Group", value: (item) => item.recordGroup },
        { label: "Source Locator", value: (item) => item.sourceLocator },
        { label: "Document Type", value: (item) => item.documentType },
        { label: "Title", value: (item) => item.title },
        { label: "Candidate Value", value: (item) => item.candidateValue },
        { label: "FRUS Check", value: (item) => item.frusCheck },
        { label: "Catalog URL", value: (item) => item.catalogUrl },
        { label: "FRUS Search URL", value: (item) => item.frusSearchUrl },
        { label: "Source Note", value: (item) => item.sourceNote }
      ])
    );
  });

  nodes.chronologySearch.addEventListener("input", (event) => {
    state.chronology.query = event.target.value;
    renderChronologyRows();
  });
  nodes.chronologyLaneFilter.addEventListener("change", (event) => {
    state.chronology.lane = event.target.value;
    renderChronologyRows();
  });
  nodes.chronologyRoleFilter.addEventListener("change", (event) => {
    state.chronology.role = event.target.value;
    renderChronologyRows();
  });
  nodes.chronologyStatusFilter.addEventListener("change", (event) => {
    state.chronology.sourceCopyStatus = event.target.value;
    renderChronologyRows();
  });
  nodes.clearChronologyFilters.addEventListener("click", () => {
    state.chronology = { query: "", lane: "", role: "", sourceCopyStatus: "" };
    nodes.chronologySearch.value = "";
    nodes.chronologyLaneFilter.value = "";
    nodes.chronologyRoleFilter.value = "";
    nodes.chronologyStatusFilter.value = "";
    renderChronologyRows();
  });
  nodes.exportChronology.addEventListener("click", () => {
    downloadCsv(
      "frus-pd-wwii-chronology-seed-register.csv",
      toCsv(filteredChronologyRows(), chronologyColumns())
    );
  });

  nodes.duplicateSearch.addEventListener("input", (event) => {
    state.duplicates.query = event.target.value;
    renderDuplicateRows();
  });
  nodes.duplicateLaneFilter.addEventListener("change", (event) => {
    state.duplicates.lane = event.target.value;
    renderDuplicateRows();
  });
  nodes.duplicateRiskFilter.addEventListener("change", (event) => {
    state.duplicates.risk = event.target.value;
    renderDuplicateRows();
  });
  nodes.duplicateRulingFilter.addEventListener("change", (event) => {
    state.duplicates.ruling = event.target.value;
    renderDuplicateRows();
  });
  nodes.clearDuplicateFilters.addEventListener("click", () => {
    state.duplicates = { query: "", lane: "", risk: "", ruling: "" };
    nodes.duplicateSearch.value = "";
    nodes.duplicateLaneFilter.value = "";
    nodes.duplicateRiskFilter.value = "";
    nodes.duplicateRulingFilter.value = "";
    renderDuplicateRows();
  });
  nodes.exportDuplicates.addEventListener("click", () => {
    downloadCsv(
      "frus-pd-wwii-duplicate-gate-register.csv",
      toCsv(filteredDuplicateRows(), duplicateColumns())
    );
  });

  nodes.exportRules.addEventListener("click", () => {
    downloadCsv(
      "frus-pd-wwii-selection-rules.csv",
      toCsv(selectionRules, [
        { label: "ID", value: (rule) => rule.id },
        { label: "Scope", value: (rule) => rule.scope },
        { label: "Disposition", value: (rule) => rule.disposition },
        { label: "Title", value: (rule) => rule.title },
        { label: "Rule", value: (rule) => rule.rule },
        { label: "Promote When", value: (rule) => rule.promoteWhen },
        { label: "Hold Or Exclude When", value: (rule) => rule.excludeWhen },
        { label: "Gap IDs", value: (rule) => (rule.gapIds || []).join("; ") }
      ])
    );
  });

  nodes.exportCoverage.addEventListener("click", () => {
    downloadCsv(
      "frus-pd-wwii-coverage-matrix.csv",
      toCsv(coverageMatrix, [
        { label: "Priority", value: (item) => item.priority },
        { label: "Theater", value: (item) => item.theater },
        { label: "Audience", value: (item) => item.audience },
        { label: "Title", value: (item) => item.title },
        { label: "Repositories", value: (item) => item.repositories },
        { label: "Missing Evidence", value: (item) => item.missingEvidence },
        { label: "Seed Searches", value: (item) => item.seedSearches },
        { label: "Gap IDs", value: (item) => (item.gapIds || []).join("; ") }
      ])
    );
  });

  nodes.closureSearch.addEventListener("input", (event) => {
    state.closure.query = event.target.value;
    renderClosureTasks();
  });
  nodes.closureLaneFilter.addEventListener("change", (event) => {
    state.closure.lane = event.target.value;
    renderClosureTasks();
  });
  nodes.closureRepositoryFilter.addEventListener("change", (event) => {
    state.closure.repository = event.target.value;
    renderClosureTasks();
  });
  nodes.closureStatusFilter.addEventListener("change", (event) => {
    state.closure.status = event.target.value;
    renderClosureTasks();
  });
  nodes.clearClosureFilters.addEventListener("click", () => {
    state.closure = { query: "", lane: "", repository: "", status: "" };
    nodes.closureSearch.value = "";
    nodes.closureLaneFilter.value = "";
    nodes.closureRepositoryFilter.value = "";
    nodes.closureStatusFilter.value = "";
    renderClosureTasks();
  });
  nodes.exportClosure.addEventListener("click", () => {
    downloadCsv(
      "frus-pd-wwii-gap-closure-tasks.csv",
      toCsv(filteredClosureTasks(), [
        { label: "ID", value: (task) => task.id },
        { label: "Priority", value: (task) => task.priority },
        { label: "Status", value: (task) => task.status },
        { label: "Lane", value: (task) => task.lane },
        { label: "Repository", value: (task) => task.repository },
        { label: "Title", value: (task) => task.title },
        { label: "Objective", value: (task) => task.objective },
        { label: "Proof Needed", value: (task) => task.proofNeeded },
        { label: "Closure Criteria", value: (task) => task.closureCriteria },
        { label: "Next Step", value: (task) => task.nextStep },
        { label: "Query URL", value: (task) => task.queryUrl },
        { label: "Gap IDs", value: (task) => (task.gapIds || []).join("; ") },
        { label: "Source Note", value: (task) => task.sourceNote }
      ])
    );
  });

  nodes.packetSearch.addEventListener("input", (event) => {
    state.evidencePackets.query = event.target.value;
    renderEvidencePackets();
  });
  nodes.packetLaneFilter.addEventListener("change", (event) => {
    state.evidencePackets.lane = event.target.value;
    renderEvidencePackets();
  });
  nodes.packetStatusFilter.addEventListener("change", (event) => {
    state.evidencePackets.status = event.target.value;
    renderEvidencePackets();
  });
  nodes.clearPacketFilters.addEventListener("click", () => {
    state.evidencePackets = { query: "", lane: "", status: "" };
    nodes.packetSearch.value = "";
    nodes.packetLaneFilter.value = "";
    nodes.packetStatusFilter.value = "";
    renderEvidencePackets();
  });
  nodes.exportPackets.addEventListener("click", () => {
    downloadCsv(
      "frus-pd-wwii-evidence-packets.csv",
      toCsv(filteredEvidencePackets(), [
        { label: "ID", value: (packet) => packet.id },
        { label: "Priority", value: (packet) => packet.priority },
        { label: "Status", value: (packet) => packet.status },
        { label: "Lane", value: (packet) => packet.lane },
        { label: "Date Range", value: (packet) => packet.dateRange },
        { label: "Title", value: (packet) => packet.title },
        { label: "Repositories", value: (packet) => packet.repositories },
        { label: "Policy Evidence", value: (packet) => packet.policyEvidence },
        { label: "Implementation Evidence", value: (packet) => packet.implementationEvidence },
        { label: "Reaction Evidence", value: (packet) => packet.reactionEvidence },
        { label: "Source-Copy Gate", value: (packet) => packet.sourceCopyGate },
        { label: "Next Action", value: (packet) => packet.nextAction },
        { label: "Links", value: (packet) => (packet.links || []).map((link) => `${link.label}: ${link.url}`).join("; ") },
        { label: "Gap IDs", value: (packet) => (packet.gapIds || []).join("; ") },
        { label: "Source Note", value: (packet) => packet.sourceNote }
      ])
    );
  });

  nodes.cableSearch.addEventListener("input", (event) => {
    state.stateCables.query = event.target.value;
    renderStateCableLeads();
  });
  nodes.cableLaneFilter.addEventListener("change", (event) => {
    state.stateCables.lane = event.target.value;
    renderStateCableLeads();
  });
  nodes.cableRecordGroupFilter.addEventListener("change", (event) => {
    state.stateCables.recordGroup = event.target.value;
    renderStateCableLeads();
  });
  nodes.cableStatusFilter.addEventListener("change", (event) => {
    state.stateCables.status = event.target.value;
    renderStateCableLeads();
  });
  nodes.clearCableFilters.addEventListener("click", () => {
    state.stateCables = { query: "", lane: "", recordGroup: "", status: "" };
    nodes.cableSearch.value = "";
    nodes.cableLaneFilter.value = "";
    nodes.cableRecordGroupFilter.value = "";
    nodes.cableStatusFilter.value = "";
    renderStateCableLeads();
  });
  nodes.exportCables.addEventListener("click", () => {
    downloadCsv(
      "frus-pd-wwii-state-cable-leads.csv",
      toCsv(filteredStateCableLeads(), [
        { label: "ID", value: (lead) => lead.id },
        { label: "Priority", value: (lead) => lead.priority },
        { label: "Status", value: (lead) => lead.status },
        { label: "Lane", value: (lead) => lead.lane },
        { label: "Repository", value: (lead) => lead.repository },
        { label: "Record Group", value: (lead) => lead.recordGroup },
        { label: "Date Range", value: (lead) => lead.dateRange },
        { label: "Title", value: (lead) => lead.title },
        { label: "Series", value: (lead) => lead.series },
        { label: "NAID", value: (lead) => lead.naId },
        { label: "Material", value: (lead) => lead.material },
        { label: "Cable Use", value: (lead) => lead.cableUse },
        { label: "Next Action", value: (lead) => lead.nextAction },
        { label: "Catalog URL", value: (lead) => lead.catalogUrl },
        { label: "Search URL", value: (lead) => lead.searchUrl },
        { label: "Links", value: (lead) => (lead.links || []).map((link) => `${link.label}: ${link.url}`).join("; ") },
        { label: "Target Terms", value: (lead) => (lead.targetTerms || []).join("; ") },
        { label: "Gap IDs", value: (lead) => (lead.gapIds || []).join("; ") },
        { label: "Source Note", value: (lead) => lead.sourceNote }
      ])
    );
  });

  nodes.publicSearch.addEventListener("input", (event) => {
    state.public.query = event.target.value;
    renderPublicReferences();
  });
  nodes.publicLaneFilter.addEventListener("change", (event) => {
    state.public.lane = event.target.value;
    renderPublicReferences();
  });
  nodes.publicRepositoryFilter.addEventListener("change", (event) => {
    state.public.repository = event.target.value;
    renderPublicReferences();
  });
  nodes.clearPublicFilters.addEventListener("click", () => {
    state.public = { query: "", lane: "", repository: "" };
    nodes.publicSearch.value = "";
    nodes.publicLaneFilter.value = "";
    nodes.publicRepositoryFilter.value = "";
    renderPublicReferences();
  });
  nodes.exportPublic.addEventListener("click", () => {
    downloadCsv(
      "frus-pd-wwii-public-line.csv",
      toCsv(filteredPublicReferences(), [
        { label: "Date", value: (item) => item.date },
        { label: "Lane", value: (item) => item.lane },
        { label: "Repository", value: (item) => item.repository },
        { label: "Type", value: (item) => item.documentType },
        { label: "Title", value: (item) => item.title },
        { label: "Matched Terms", value: (item) => (item.matchedTerms || []).join("; ") },
        { label: "URL", value: (item) => item.url },
        { label: "Source Note", value: (item) => item.sourceNote }
      ])
    );
  });

  nodes.boundarySearch.addEventListener("input", (event) => {
    state.boundary.query = event.target.value;
    renderBoundaryRecords();
  });
  nodes.boundaryLaneFilter.addEventListener("change", (event) => {
    state.boundary.lane = event.target.value;
    renderBoundaryRecords();
  });
  nodes.boundaryRepositoryFilter.addEventListener("change", (event) => {
    state.boundary.repository = event.target.value;
    renderBoundaryRecords();
  });
  nodes.clearBoundaryFilters.addEventListener("click", () => {
    state.boundary = { query: "", lane: "", repository: "" };
    nodes.boundarySearch.value = "";
    nodes.boundaryLaneFilter.value = "";
    nodes.boundaryRepositoryFilter.value = "";
    renderBoundaryRecords();
  });
}

function init() {
  setStats();
  renderWorkbench();
  renderCompilerDocket();
  renderLanes();
  populateFilters();
  renderLeads();
  renderGapTracker();
  renderSourcePools();
  renderDocumentIntake();
  renderCandidateDocuments();
  renderChronologyRows();
  renderDuplicateRows();
  renderSelectionRules();
  renderCoverageMatrix();
  renderClosureTasks();
  renderEvidencePackets();
  renderStateCableLeads();
  renderLedger();
  renderPublicReferences();
  renderBoundaryRecords();
  setupEvents();
}

init();
