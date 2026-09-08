// Conceptual System Architecture Pipeline & Diagnostic Telemetry Data

export const pipelineStages = [
  {
    step: "01",
    name: "Sensors & Cameras",
    category: "Physical Edge",
    description: "Fixed, PTZ, ANPR, thermal, and biometric cameras continuously capture visual surveillance frames across municipal transit chokepoints and boundaries.",
    tech: "Optical / Thermal / Low-Light Sensors",
    status: "ACTIVE • 26 HARDWARE NODES"
  },
  {
    step: "02",
    name: "Transmission Network",
    category: "Connectivity",
    description: "Industrial gigabit PoE access switches, distribution chassis, and fiber-optic backbones aggregate and transport encrypted video payloads.",
    tech: "PoE+ / 10GbE Fiber Ring / Wireless PTP",
    status: "ACTIVE • LOW-LATENCY ROUTING"
  },
  {
    step: "03",
    name: "Recording & Storage",
    category: "Retention Tier",
    description: "Enterprise Network Video Recorders and SAN/NAS storage arrays archive incoming multi-channel streams with RAID redundancy.",
    tech: "RAID 6 / SAS SAN Storage / Hot-Spare Arrays",
    status: "ACTIVE • STATUTORY RETENTION"
  },
  {
    step: "04",
    name: "VMS Management Platform",
    category: "Core Software",
    description: "Centralized Video Management System coordinates live ingestion, device discovery, recording schedules, and multi-display output feeds.",
    tech: "Unified VMS Cluster / API Gateway",
    status: "ONLINE • SYNCHRONIZED"
  },
  {
    step: "05",
    name: "AI Video Intelligence",
    category: "Neural Compute",
    description: "Deep learning models execute concurrent inference on video frames to detect faces, identify vehicles, recognize people, and classify targets.",
    tech: "Edge AI Encoders / Server GPU Clusters",
    status: "ACTIVE • 28 ALGORITHMIC MODELS"
  },
  {
    step: "06",
    name: "Rule & Zone Correlation",
    category: "Analytical Logic",
    description: "Geographic polygonal zones, directional vectors, and dwell timers evaluate whether detected objects trigger line-crossing or intrusion alerts.",
    tech: "Virtual Tripwire / Polygon Zone Engine",
    status: "ACTIVE • REAL-TIME EVALUATION"
  },
  {
    step: "07",
    name: "Control Room Workstations",
    category: "Human Operator",
    description: "Command and control operators monitor interactive video walls, receive prioritized acoustic/visual alarm alerts, and inspect targets.",
    tech: "Multi-Screen Console / Dispatch Workstations",
    status: "READY • 24/7 OPERATION"
  },
  {
    step: "08",
    name: "Automated Incident Dispatch",
    category: "Operational Action",
    description: "Integrated escalation workflows automatically dispatch patrol officers, bookmark evidentiary clips, and generate incident audit logs.",
    tech: "CAD Integration / SMS & Radio Dispatch",
    status: "ENABLED • AUDIT TRAIL LOGGED"
  }
];

export const terminalCommands = {
  scan: {
    command: "system --scan",
    title: "MUNICIPAL SURVEILLANCE INFRASTRUCTURE SCAN",
    tag: "DIAGNOSTIC TELEMETRY",
    lines: [
      { text: "INITIALIZING MUNICIPAL SYSTEM HEALTH AUDIT...", type: "info" },
      { text: "PMC-CCTV-CORE v4.0.0 (x86_64-linux-gnu)", type: "muted" },
      { text: "SCANNING PUNE PARLIAMENTARY CONSTITUENCY SURVEILLANCE ECOSYSTEM...", type: "info" },
      { text: "[01] AI ANALYTIC ENGINES (28/28) ......... [ OK - ALL ACTIVE ]", type: "success" },
      { text: "     -> Detection & Recognition (5) ...... VERIFIED", type: "muted" },
      { text: "     -> Movement & Zones (7) ............. VERIFIED", type: "muted" },
      { text: "     -> Crowd & Counting (4) ............. VERIFIED", type: "muted" },
      { text: "     -> Object Intelligence (4) .......... VERIFIED", type: "muted" },
      { text: "     -> Camera Health Diagnostics (4) .... VERIFIED", type: "muted" },
      { text: "     -> Safety Analytics (2) ............. VERIFIED", type: "muted" },
      { text: "     -> Tracking & Behaviour (2) ......... VERIFIED", type: "muted" },
      { text: "[02] HARDWARE INFRASTRUCTURE (26/26) ..... [ OK - ALL ONLINE ]", type: "success" },
      { text: "     -> Optical & Thermal Cameras (9) .... ONLINE", type: "muted" },
      { text: "     -> Compute & Storage Arrays (5) ..... ONLINE", type: "muted" },
      { text: "     -> Network & Fiber Switching (5) .... ONLINE", type: "muted" },
      { text: "     -> Power & Physical Racks (4) ....... ONLINE", type: "muted" },
      { text: "     -> Software & Cybersecurity (3) ..... ONLINE", type: "muted" },
      { text: "[03] TRANSMISSION BACKBONE ................ [ OK - GIGABIT FIBER ACTIVE ]", type: "success" },
      { text: "[04] STORAGE & RECORDING ARRAY ............ [ OK - RAID ARRAYS SYNCHRONIZED ]", type: "success" },
      { text: "[05] STATUTORY PRIVACY ENFORCEMENT ........ [ ENFORCED - ZERO UNPRIVILEGED ACCESS ]", type: "gold" },
      { text: "SCAN COMPLETE: ALL SYSTEM CAPABILITIES OPERATING AT FULL CAPACITY.", type: "gold" }
    ]
  },
  analytics: {
    command: "analytics --audit",
    title: "28 AI VIDEO ANALYTICS MODEL VERIFICATION",
    tag: "NEURAL INFERENCE AUDIT",
    lines: [
      { text: "RUNNING NEURAL MODEL CONCURRENCY VERIFICATION...", type: "info" },
      { text: "CHECKING PIPELINE LATENCY AND FRAME DECODERS...", type: "info" },
      { text: "#01 Face Detection ........................ EDGE INFERENCE [LATENCY: 8.2ms]", type: "success" },
      { text: "#02 Face Recognition (Authorized) ........ BIOMETRIC MATCH [CONF: 99.4%]", type: "success" },
      { text: "#03 Person Detection ...................... SILHOUETTE NET [LATENCY: 9.1ms]", type: "success" },
      { text: "#04 Vehicle Detection ..................... GEOMETRIC NET [LATENCY: 9.4ms]", type: "success" },
      { text: "#05 Human/Vehicle Classification .......... DUAL-BRANCH AI [CONF: 98.8%]", type: "success" },
      { text: "#06 Line Crossing ......................... TRIPWIRE VECTOR [ACTIVE]", type: "success" },
      { text: "#07 Intrusion Detection ................... POLYGON BUFFER [ACTIVE]", type: "success" },
      { text: "#10 Crowd Detection ....................... CLUSTER SENSOR [OK]", type: "success" },
      { text: "#13 Occupancy Counting .................... DYNAMIC DELTA [OK]", type: "success" },
      { text: "#18 Object Removal Detection .............. RESIDUAL DELTA [ACTIVE]", type: "success" },
      { text: "#24 Perimeter Protection .................. MULTI-LAYER ZONE [OK]", type: "success" },
      { text: "AUDIT PASSED: ALL 28 ALGORITHMS VALIDATED FOR CONTINUOUS OPERATION.", type: "gold" }
    ]
  },
  network: {
    command: "network --topology",
    title: "SURVEILLANCE BACKBONE TOPOLOGY MAPPING",
    tag: "TOPOLOGY TELEMETRY",
    lines: [
      { text: "QUERYING SWITCH MIB REGISTERS & SFP OPTICAL TRANSCEIVERS...", type: "info" },
      { text: "CORE DISTRIBUTION SWITCHES ................ REDUNDANT NEXUS CHASSIS [OK]", type: "success" },
      { text: "DISTRIBUTION RING #01 (CENTRAL PUNE) ...... 10Gbps SINGLE-MODE FIBER [ACTIVE]", type: "success" },
      { text: "DISTRIBUTION RING #02 (EAST PRECINCT) ..... 10Gbps SINGLE-MODE FIBER [ACTIVE]", type: "success" },
      { text: "DISTRIBUTION RING #03 (WEST PERIMETER) .... 10Gbps SINGLE-MODE FIBER [ACTIVE]", type: "success" },
      { text: "FIELD EDGE PoE SWITCHES (802.3bt) ......... 24-PORT GIGABIT INDUSTRIAL [ONLINE]", type: "success" },
      { text: "WIRELESS BACKHAUL EXTENSIONS .............. 5GHz/60GHz HIGH-THROUGHPUT [CONNECTED]", type: "success" },
      { text: "CYBERSECURITY FIREWALL & ACCESS GATEWAY ... IDS/IPS ZERO-TRUST ENFORCED [ACTIVE]", type: "gold" },
      { text: "NETWORK DIAGNOSTIC: DETERMINISTIC LOW-LATENCY TRANSMISSION VERIFIED.", type: "gold" }
    ]
  }
};
