(() => {
  const embeddedPullSheets = [
    {
      id: "PULL-001",
      priority: "Critical",
      status: "First pull",
      lane: "OWI Overseas and VOA",
      repository: "NARA",
      title: "RG 59 OWI 103.9166 purport-card source-copy batch",
      objective:
        "Turn the strongest State/OWI purport cards into source-copy requests for the underlying Central Decimal File documents.",
      requestText:
        "Request RG 59 Central Decimal Files source copies for 1944 files 103.9166/7-844, 103.9166/7-944, 103.9166/7-1044, 103.9166/8-844, 103.9166/9-244, 103.9166/10-3144, and 103.9166/12-644, identified through Purport Lists and Cards, NAID 88176221, M973 roll 607 images 0500, 0550, 0600, 0700, and 0750.",
      pullList:
        "DOC50-009 through DOC50-018; especially Balkan affairs, Allied propaganda for Italy, Central Directive from OWI, Iceland Outpost, Manchester Information Center, Las Palmas broadcasts, and New Zealand informational activities.",
      deliverable:
        "One source-copy packet per file number with date, author/post, recipient, full text, enclosures, and FRUS-worthiness note.",
      links: [
        { label: "NARA purport file unit", url: "https://catalog.archives.gov/id/88176221" },
        { label: "Central Decimal Files", url: "https://catalog.archives.gov/id/302021" }
      ],
      sourceNote:
        "First pull sheet generated from RG 59 Purport Lists and Cards, NAID 88176221, and candidate documents DOC50-009 through DOC50-018."
    },
    {
      id: "PULL-002",
      priority: "Critical",
      status: "First pull",
      lane: "Hemisphere and Cultural Exchange",
      repository: "NARA",
      title: "RG 59 CIAA/OIAA 103.9161 purport-card source-copy batch",
      objective:
        "Extract the highest-value State/CIAA radio, motion picture, and information-service cables for Latin America.",
      requestText:
        "Request RG 59 Central Decimal Files source copies for 1944 files 103.9161/9-944, 103.9161/9-2144, 103.9161/9-2244, 103.9161/10-2044, 103.9161/11-2044, 103.9161/11-2144, and 103.9161/12-644, identified through Purport Lists and Cards, NAID 88176221, M973 roll 607 images 0095, 0100, 0110, 0120, and 0125.",
      pullList:
        "DOC50-001 through DOC50-008; prioritize Spanish-language shortwave service, WNBI reception, motion-picture questionnaire, program numbers, English shortwave schedule, Hemisphere information service, and Rockefeller-Picado message.",
      deliverable:
        "A Latin America source-copy packet with file numbers, posts, CIAA office routing, audience/reception evidence, and cross-links to RG 229.",
      links: [
        { label: "NARA purport file unit", url: "https://catalog.archives.gov/id/88176221" },
        { label: "103.9161 search", url: "https://catalog.archives.gov/search?q=103.9161&recordGroupNumber=59" }
      ],
      sourceNote:
        "First pull sheet generated from RG 59 Purport Lists and Cards, NAID 88176221, and candidate documents DOC50-001 through DOC50-008."
    },
    {
      id: "PULL-003",
      priority: "Critical",
      status: "First pull",
      lane: "Peace Aims and Handoff",
      repository: "NARA",
      title: "RG 208 long-range policy directive batch",
      objective:
        "Recover the directive texts that define U.S. public-diplomacy themes for Germany, France, Austria, Poland, Czechoslovakia, Switzerland, and Thailand.",
      requestText:
        "Request RG 208 Record Set of Policy Directives source copies for NAIDs 4732380, 4732379, 4732381, 4732378, 4732367, 4732395, 4732375, 4732402, 4732392, and 4732400.",
      pullList:
        "DOC50-020 through DOC50-028 and DOC50-035; place Germany 1944/1945, France, Austria, Poland, Czechoslovakia, Switzerland, Netherlands, and Thailand directives in one comparison packet.",
      deliverable:
        "Directive transcript packet with issue date, target country, themes, approving office, successor/handoff implications, and FRUS duplicate check.",
      links: [
        { label: "Record Set of Policy Directives", url: "https://catalog.archives.gov/id/648565" },
        { label: "Germany directive", url: "https://catalog.archives.gov/id/4732380" }
      ],
      sourceNote:
        "First pull sheet generated from RG 208 Record Set of Policy Directives and candidate documents DOC50-020 through DOC50-028 and DOC50-035."
    },
    {
      id: "PULL-004",
      priority: "High",
      status: "First pull",
      lane: "OWI Overseas and VOA",
      repository: "NARA",
      title: "RG 208 special guidances, London/Moscow cables, OWI-OSS, and PWE crosswalk",
      objective:
        "Build the interagency and Allied boundary packet so the volume can include policy coordination without drifting into intelligence or military propaganda.",
      requestText:
        "Request RG 208 Record Set of Policy Directives source copies for NAIDs 4732414, 4732413, 4732416, 4732424, 4732319, and 4732351.",
      pullList:
        "DOC50-029 through DOC50-034; include London policy directives, Moscow cables on directives, OWI-OSS Relations, Political Warfare Executive Central Directives, Central Directives May-June 1944, and Regional Directives September 1944.",
      deliverable:
        "Coordination packet tagging each document as Promote, Boundary, or Supporting Context under the selection rules.",
      links: [
        { label: "London directives", url: "https://catalog.archives.gov/id/4732414" },
        { label: "Moscow cables", url: "https://catalog.archives.gov/id/4732413" },
        { label: "OWI-OSS Relations", url: "https://catalog.archives.gov/id/4732416" }
      ],
      sourceNote:
        "First pull sheet generated from RG 208 special guidance/directive file units and candidate documents DOC50-029 through DOC50-034."
    },
    {
      id: "PULL-005",
      priority: "High",
      status: "Post-file pull",
      lane: "OWI Overseas and VOA",
      repository: "NARA",
      title: "RG 84 London post-file crosscheck",
      objective:
        "Pair OWI London and British public-information policy with embassy reporting and State-post cable traffic.",
      requestText:
        "Search RG 84 U.S. Embassy Great Britain Classified General Records, NAID 1667864, 1942-1945 folders for OWI, Office of War Information, USIS, BBC, Ministry of Information, radio, propaganda, films, press, and United Nations.",
      pullList:
        "Use with DOC50-012, DOC50-013, DOC50-029, and DOC50-032; collect embassy reaction, clearance, or host-government evidence for the same dates.",
      deliverable:
        "London crosswalk tying RG 208 directives, RG 59 purport cards, and RG 84 post reporting by date and subject.",
      links: [{ label: "London RG 84 series", url: "https://catalog.archives.gov/id/1667864" }],
      sourceNote:
        "Post-file pull sheet generated from RG 84 London State cable lead and the 50-document candidate register."
    },
    {
      id: "PULL-006",
      priority: "High",
      status: "Post-file pull",
      lane: "OWI Overseas and VOA",
      repository: "NARA",
      title: "Neutral Europe post-file sweep",
      objective:
        "Collect post reaction and implementation evidence from Lisbon, Madrid, Stockholm, and Bern.",
      requestText:
        "Search RG 84 post files for Portugal NAIDs 1801218 and 1766818, Spain NAID 1728932, Sweden NAID 1871966, and Switzerland NAID 1884125, using OWI, USIS, radio, press, propaganda, films, censorship, and information terms for 1942-1945.",
      pullList:
        "Pair results with DOC50-011, DOC50-015, DOC50-017, DOC50-027, DOC50-038, and DOC50-039.",
      deliverable:
        "Neutral Europe reaction matrix with one policy directive, one post implementation record, and one reception/host-government note per country if available.",
      links: [
        { label: "Portugal", url: "https://catalog.archives.gov/id/1801218" },
        { label: "Spain", url: "https://catalog.archives.gov/id/1728932" },
        { label: "Sweden", url: "https://catalog.archives.gov/id/1871966" },
        { label: "Switzerland", url: "https://catalog.archives.gov/id/1884125" }
      ],
      sourceNote:
        "Post-file pull sheet generated from RG 84 neutral Europe State cable leads."
    },
    {
      id: "PULL-007",
      priority: "High",
      status: "Post-file pull",
      lane: "Hemisphere and Cultural Exchange",
      repository: "NARA",
      title: "Latin America post files plus RG 229 radio reaction",
      objective:
        "Pair State/CIAA cable candidates with embassy implementation and listener-response records.",
      requestText:
        "Search RG 84 Mexico NAID 1677124, Brazil NAIDs 1518696 and 1518701, Argentina NAID 1565938, Chile NAIDs 1613201 and 1613203, and Cuba NAID 1609355 for OIAA, OCIAA, CIAA, OWI, information, radio, WNBI, films, press, shortwave, and propaganda. Pull RG 229 Radio Reaction Reports NAID 782735 in parallel.",
      pullList:
        "Use with DOC50-001 through DOC50-008 and DOC50-048 through DOC50-050.",
      deliverable:
        "Latin America evidence packet with State cable, post report, OIAA radio/reaction record, and selection rationale for each promoted document.",
      links: [
        { label: "Mexico post files", url: "https://catalog.archives.gov/id/1677124" },
        { label: "Brazil post files", url: "https://catalog.archives.gov/id/1518696" },
        { label: "Radio Reaction Reports", url: "https://catalog.archives.gov/id/782735" }
      ],
      sourceNote:
        "Post-file pull sheet generated from RG 59 103.9161 cards, RG 84 Latin America post leads, and RG 229 radio candidates."
    },
    {
      id: "PULL-008",
      priority: "High",
      status: "White House pull",
      lane: "Creating War Information",
      repository: "FDR Library / NARA Catalog",
      title: "FDR Library OWI White House decision packet",
      objective:
        "Find the White House-side documents behind OWI creation, oversight, controversy, and intelligence/research reporting.",
      requestText:
        "Pull FDR Library President's Secretary's File records shown in NARA Catalog as NAIDs 16620603, 16609748, 16620611, 16620616, and 16620625, plus adjacent Survey of Intelligence months if the file structure warrants.",
      pullList:
        "DOC50-041 through DOC50-045; extract author, recipient, routing, FDR action, and relation to State/OWI decisions.",
      deliverable:
        "White House decision packet with source-copy images, folder title, date span, and promote/hold recommendation for each document.",
      links: [
        { label: "OWI subject file", url: "https://catalog.archives.gov/id/16620603" },
        { label: "OWI confidential file", url: "https://catalog.archives.gov/id/16609748" }
      ],
      sourceNote:
        "White House pull sheet generated from FDR Library President's Secretary's File candidates."
    },
    {
      id: "PULL-009",
      priority: "Medium",
      status: "Boundary pull",
      lane: "Prewar Information Policy",
      repository: "FDR Library / NARA Catalog",
      title: "Philleo Nash and Leo Rosten rumor-control boundary review",
      objective:
        "Decide whether rumor-control records are foreign-policy evidence or domestic morale context.",
      requestText:
        "Review digitized NARA Catalog source copies for NAIDs 509549657 and 509549751. Extract only passages that tie rumor-control guidance to foreign audiences, overseas information, State policy, or White House public-line control.",
      pullList: "DOC50-046 and DOC50-047.",
      deliverable:
        "Boundary memo deciding Promote, Supporting Context, or Exclude, with exact quoted passages if promoted.",
      links: [
        { label: "Rosten memo", url: "https://catalog.archives.gov/id/509549657" },
        { label: "Rosten/Walsh letter", url: "https://catalog.archives.gov/id/509549751" }
      ],
      sourceNote:
        "Boundary pull sheet generated from Philleo Nash Papers OWI rumor-control records."
    },
    {
      id: "PULL-010",
      priority: "Medium",
      status: "Boundary pull",
      lane: "OWI Overseas and VOA",
      repository: "NARA",
      title: "RG 165 weekly propaganda directive boundary batch",
      objective:
        "Test whether War Department-held OWI propaganda directives belong in this diplomatic volume or only support military boundary notes.",
      requestText:
        "Request or review NARA RG 165 NAIDs 2149194, 2149191, 2149198, 2149195, and 2149196. Include only directives that show State, OWI, diplomatic, or foreign public-diplomacy policy significance beyond tactical psychological warfare.",
      pullList: "DOC50-036 through DOC50-040.",
      deliverable:
        "Boundary table with directive, target country/region, origin, State/OWI connection, and disposition.",
      links: [
        { label: "Germany directive", url: "https://catalog.archives.gov/id/2149194" },
        { label: "Iberia directive", url: "https://catalog.archives.gov/id/2149195" }
      ],
      sourceNote:
        "Boundary pull sheet generated from RG 165 weekly propaganda directive candidates."
    },
    {
      id: "PULL-011",
      priority: "Critical",
      status: "Quality gate",
      lane: "Peace Aims and Handoff",
      repository: "History.state.gov",
      title: "FRUS duplicate and citation gate for all 50 candidates",
      objective:
        "Prevent duplicate publication and preserve the audit trail for every promoted candidate.",
      requestText:
        "For each DOC50 row, save the History.state.gov exact-title or exact-file-number search result, then rerun a broader search on key author/post/topic terms before promotion. Record search URL, date checked, result count, and decision.",
      pullList:
        "All DOC50 rows, especially high-priority RG 59 file-number candidates and RG 208 policy directives.",
      deliverable:
        "A duplicate-check ledger with exact search, broad search, source-copy status, and promote/hold/exclude result.",
      links: [{ label: "History search", url: "https://history.state.gov/search" }],
      sourceNote:
        "Quality-gate pull sheet generated from the 50-document candidate register and public FRUS exact-match checks."
    },
    {
      id: "PULL-012",
      priority: "Critical",
      status: "Quality gate",
      lane: "Creating War Information",
      repository: "Cross-repository",
      title: "Source-copy packet template for promoted documents",
      objective:
        "Standardize what the compiler needs before any candidate can become a retro FRUS document.",
      requestText:
        "For each promoted candidate, prepare a packet with repository, record group/collection, series, folder or file number, NAID or box/file locator, document date, author, recipient, classification, full text or image link, enclosures, FRUS duplicate check, selection rationale, boundary ruling, and cross-references to policy, implementation, and reaction evidence.",
      pullList:
        "Apply to every promoted DOC50, State Cable, Evidence Packet, and Document Intake row.",
      deliverable:
        "Compiler-ready packet for each promoted document; no row advances without source-copy proof and duplicate-check evidence.",
      links: [
        { label: "Official volume", url: "https://history.state.gov/historicaldocuments/frus1917-72PubDipv03" },
        { label: "Status page", url: "https://history.state.gov/historicaldocuments/status-of-the-series" }
      ],
      sourceNote:
        "Quality-gate pull sheet generated to make the candidate register usable for FRUS source-copy selection."
    }
  ];

  const pullSheets =
    window.VOLUME_DATA?.compilerPullSheets?.length ? window.VOLUME_DATA.compilerPullSheets : embeddedPullSheets;
  const state = { query: "", lane: "", repository: "", status: "" };

  function initPullSheets() {
    const nodes = {
      root: document.querySelector("#pull-root"),
      summary: document.querySelector("#pull-summary"),
      search: document.querySelector("#pull-search"),
      lane: document.querySelector("#pull-lane-filter"),
      repository: document.querySelector("#pull-repository-filter"),
      status: document.querySelector("#pull-status-filter"),
      clear: document.querySelector("#clear-pull-filters"),
      export: document.querySelector("#export-pulls"),
      workbench: document.querySelector("#workbench-root")
    };
    if (!nodes.root || !nodes.summary) return;

    populateFilters(nodes);
    addEvents(nodes);
    render(nodes);
    addWorkbenchMetric(nodes.workbench);
  }

  function searchText(sheet) {
    return [
      sheet.id,
      sheet.priority,
      sheet.status,
      sheet.lane,
      sheet.repository,
      sheet.title,
      sheet.objective,
      sheet.requestText,
      sheet.pullList,
      sheet.deliverable,
      sheet.sourceNote,
      (sheet.links || []).map((link) => `${link.label} ${link.url}`).join(" ")
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
  }

  function filtered() {
    const terms = state.query
      .toLowerCase()
      .split(/\s+/)
      .map((term) => term.trim())
      .filter(Boolean);
    return pullSheets.filter((sheet) => {
      if (state.lane && sheet.lane !== state.lane) return false;
      if (state.repository && sheet.repository !== state.repository) return false;
      if (state.status && sheet.status !== state.status) return false;
      const haystack = searchText(sheet);
      return terms.every((term) => haystack.includes(term));
    });
  }

  function render(nodes) {
    const priorityOrder = new Map([
      ["Critical", 1],
      ["High", 2],
      ["Medium", 3]
    ]);
    const visible = filtered().sort(
      (a, b) =>
        (priorityOrder.get(a.priority) || 99) - (priorityOrder.get(b.priority) || 99) ||
        a.lane.localeCompare(b.lane) ||
        a.id.localeCompare(b.id)
    );
    nodes.summary.textContent = `${plural(visible.length, "pull sheet")} visible from ${pullSheets.length} compiler pull sheets.`;
    nodes.root.replaceChildren(...visible.map(card));
    if (!visible.length) nodes.root.innerHTML = '<p class="empty">No compiler pull sheets match the current filters.</p>';
  }

  function card(sheet) {
    const article = document.createElement("article");
    article.className = `record-card priority-${sheet.priority.toLowerCase()}`;

    const header = document.createElement("header");
    const titleBlock = document.createElement("div");
    const meta = document.createElement("div");
    meta.className = "record-id";
    meta.append(textSpan(sheet.id), textSpan(sheet.priority), textSpan(sheet.status), textSpan(sheet.repository));
    const title = document.createElement("h4");
    title.textContent = sheet.title;
    titleBlock.append(meta, title);
    const chips = document.createElement("div");
    chips.className = "chips";
    chips.append(chip(sheet.lane), priorityChip(sheet.priority), chip(sheet.status));
    header.append(titleBlock, chips);

    const objective = paragraph(sheet.objective);
    const pullList = paragraph(`Pull list: ${sheet.pullList}`, "source-note");
    const deliverable = paragraph(`Deliverable: ${sheet.deliverable}`, "source-note");
    const request = document.createElement("details");
    const requestSummary = document.createElement("summary");
    requestSummary.textContent = "Request text";
    request.append(requestSummary, paragraph(sheet.requestText, "source-note"));

    const actions = document.createElement("div");
    actions.className = "record-actions";
    for (const link of sheet.links || []) actions.append(linkButton(link.label, link.url));
    actions.append(copyButton(sheet.requestText, "Copy request"));
    actions.append(copyButton(sheet.sourceNote, "Copy note"));

    const sourceDetails = document.createElement("details");
    sourceDetails.className = "source-details";
    const sourceSummary = document.createElement("summary");
    sourceSummary.textContent = "Source note";
    sourceDetails.append(sourceSummary, paragraph(sheet.sourceNote));

    article.append(header, objective, pullList, deliverable, request, actions, sourceDetails);
    return article;
  }

  function populateFilters(nodes) {
    addOptions(nodes.lane, uniqueSorted(pullSheets.map((sheet) => sheet.lane)), "All lanes");
    addOptions(nodes.repository, uniqueSorted(pullSheets.map((sheet) => sheet.repository)), "All repositories");
    addOptions(nodes.status, uniqueSorted(pullSheets.map((sheet) => sheet.status)), "All statuses");
  }

  function addEvents(nodes) {
    nodes.search?.addEventListener("input", (event) => {
      state.query = event.target.value;
      render(nodes);
    });
    nodes.lane?.addEventListener("change", (event) => {
      state.lane = event.target.value;
      render(nodes);
    });
    nodes.repository?.addEventListener("change", (event) => {
      state.repository = event.target.value;
      render(nodes);
    });
    nodes.status?.addEventListener("change", (event) => {
      state.status = event.target.value;
      render(nodes);
    });
    nodes.clear?.addEventListener("click", () => {
      state.query = "";
      state.lane = "";
      state.repository = "";
      state.status = "";
      nodes.search.value = "";
      nodes.lane.value = "";
      nodes.repository.value = "";
      nodes.status.value = "";
      render(nodes);
    });
    nodes.export?.addEventListener("click", () => {
      downloadCsv(
        "frus-pd-wwii-compiler-pull-sheets.csv",
        toCsv(filtered(), [
          ["ID", (sheet) => sheet.id],
          ["Priority", (sheet) => sheet.priority],
          ["Status", (sheet) => sheet.status],
          ["Lane", (sheet) => sheet.lane],
          ["Repository", (sheet) => sheet.repository],
          ["Title", (sheet) => sheet.title],
          ["Objective", (sheet) => sheet.objective],
          ["Request Text", (sheet) => sheet.requestText],
          ["Pull List", (sheet) => sheet.pullList],
          ["Deliverable", (sheet) => sheet.deliverable],
          ["Links", (sheet) => (sheet.links || []).map((link) => `${link.label}: ${link.url}`).join("; ")],
          ["Source Note", (sheet) => sheet.sourceNote]
        ])
      );
    });
  }

  function addWorkbenchMetric(root) {
    if (!root || root.textContent.includes("Pull sheets")) return;
    const metric = document.createElement("article");
    metric.className = "metric-card";
    metric.dataset.pullSheetMetric = "true";
    const value = document.createElement("strong");
    value.textContent = pullSheets.length.toString();
    const label = document.createElement("span");
    label.textContent = "Pull sheets";
    const detail = document.createElement("p");
    detail.textContent = "Copyable archival request batches and source-copy gates for first-week compiler work.";
    metric.append(value, label, detail);
    root.append(metric);
  }

  function addOptions(select, values, label) {
    if (!select) return;
    select.innerHTML = "";
    const all = document.createElement("option");
    all.value = "";
    all.textContent = label;
    select.append(all);
    for (const value of values) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.append(option);
    }
  }

  function uniqueSorted(values) {
    return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
  }

  function chip(value) {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = value;
    return span;
  }

  function priorityChip(value) {
    const span = chip(value);
    span.classList.add(`priority-${value.toLowerCase()}`);
    return span;
  }

  function textSpan(value) {
    const span = document.createElement("span");
    span.textContent = value;
    return span;
  }

  function paragraph(value, className) {
    const p = document.createElement("p");
    if (className) p.className = className;
    p.textContent = value || "";
    return p;
  }

  function linkButton(label, href) {
    const link = document.createElement("a");
    link.className = "small-link";
    link.href = href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = label;
    return link;
  }

  function copyButton(value, label) {
    const button = document.createElement("button");
    button.className = "copy-note";
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(value || "");
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = label;
      }, 1200);
    });
    return button;
  }

  function plural(count, singular) {
    return `${count} ${singular}${count === 1 ? "" : "s"}`;
  }

  function toCsv(rows, columns) {
    const escape = (value) => {
      const text = `${value ?? ""}`;
      if (/[",\n]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
      return text;
    };
    return [columns.map(([label]) => escape(label)).join(",")]
      .concat(rows.map((row) => columns.map(([, getter]) => escape(getter(row))).join(",")))
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPullSheets);
  } else {
    initPullSheets();
  }
})();
