import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Taher Merchant",
  initials: "TM",
  url: "https://www.tahermerchant.xyz",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/new+delhi",
  description:
    "DTU '28 | Research Intern @ UNSW Sydney, LAU, CMU, AIISC | Prev. MIT CSAIL | Deep Learning and Knowledge Graph Researcher",
  summary:
    "I am an undergraduate student at Delhi Technological University working at the intersection of Mechanistic Interpretability and Retrieval over structured knowledge. I am currently advised by Prof. [Piotr Koniusz](https://www.koniusz.com/) at UNSW Sydney, Prof. [Seifedine Kadry](https://scholar.google.com/citations?user=EAVEmg0AAAAJ&hl=en&oi=ao) at the VAIL Lab, Lebanese American University, Prof. [Min Xu](https://xulabs.github.io/min-xu/) at CMU, and Prof. [Amit Sheth](https://amit.aiisc.ai/) at the AI Institute of South Carolina. Before this I spent a year at MIT CSAIL with Prof. [Manolis Kellis](https://www.csail.mit.edu/person/manolis-kellis), building MantisAI. I also build ML systems at [Shipd](https://shipd.ai/) and previously at [Avittam](https://avittam.com/), and co-head [AIMS-DTU](https://www.linkedin.com/company/aims-dtu). My primary research interest is in understanding the internal mechanisms of foundation models and in building deterministic, LLM-free retrieval systems over knowledge graphs.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Python",
    "C",
    "PyTorch",
    "TensorFlow",
    "Keras",
    "HuggingFace",
    "OpenCV",
    "Knowledge Graphs",
    "GraphRAG",
    "LangChain",
    "Streamlit",
    "NumPy",
    "Pandas",
    "Next.js",
    "Supabase",
    "Google Cloud Platform",
    "ROS",
    "Raspberry Pi",
    "Linux",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "tahermerchant25@gmail.com",
    tel: "+91 7982148341",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/TaherMerchant25",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/taher-merchant-726757278/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/TaherMerchant-Resume.pdf",
        icon: Icons.resume,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://github.com/TaherMerchant25",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://github.com/TaherMerchant25",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:tahermerchant25@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "UNSW Sydney",
      href: "https://www.unsw.edu.au/",
      badges: [],
      location: "Remote",
      title: "Research Intern",
      logoUrl: "/unsw.png",
      start: "2026",
      end: "Present",
      description:
        "Working under Prof. Piotr Koniusz on mechanistic interpretability of Vision-Language Models (VLMs), focusing on how multimodal models internally represent and process spatial information. Investigating spatial grounding circuits in VLMs to identify how visual and linguistic representations interact during spatial reasoning and grounding tasks, and exploring the internal representations of Multimodal Large Language Models (MLLMs) with the broader goal of improving multimodal reasoning and interpretability.",
    },
    {
      company: "Lebanese American University",
      href: "https://www.lau.edu.lb/",
      badges: ["VAIL Lab"],
      location: "Remote",
      title: "Research Intern",
      logoUrl: "/lau.png",
      start: "2026",
      end: "Present",
      description:
        "Working under Prof. Seifedine Kadry at the VAIL Lab on agentic reasoning and agent failure memory. Developed PRAXIS, a training-free inference-time scaling framework using theory-grounded cognitive lenses, parallel ReAct trajectories, behavioral diversity filtering, and verifier-based trajectory selection. Also developed FAILGROUND, a failure-aware knowledge graph framework that constructs structured failure memories from agent execution traces and characterizes when they can be safely replayed based on context-invariance.",
    },
    {
      company: "AI Institute of South Carolina",
      href: "https://aiisc.ai/",
      badges: ["IRT Group"],
      location: "Remote",
      title: "Research Intern",
      logoUrl: "/aiisc.png",
      start: "June 2026",
      end: "Present",
      description:
        "Working under Prof. Amit Sheth and Mr. Bharath Chand on Pharma Drug Repurposing using Knowledge Graphs. Designing GraphRAG architectures for multi-hop reasoning over biomedical knowledge graphs to support drug repurposing and drug-target inference. Investigating literature-driven knowledge graph enrichment and context-aware retrieval strategies for downstream biomedical reasoning, drug-target interaction prediction, and pathway analysis.",
    },
    {
      company: "Carnegie Mellon University",
      href: "https://www.cmu.edu/",
      badges: [],
      location: "Pittsburgh, PA",
      title: "Research Intern",
      logoUrl: "/cmu.png",
      start: "June 2026",
      end: "Present",
      description:
        "Working with Prof. Min Xu and Mr. Xianling Ji on mechanistic interpretability for foundation models, analysing internal representations, feature activations, and decision-making mechanisms in MedSAM and SAM. Investigating interpretability methods including sparse autoencoders, activation patching, probing, and circuit analysis to understand model behaviour, failure modes, and generalization across tasks and domains.",
    },
    {
      company: "Shipd",
      href: "https://shipd.ai/",
      badges: ["Freelance"],
      location: "Remote",
      title: "Machine Learning Engineer",
      logoUrl: "/shipd.png",
      start: "March 2026",
      end: "Present",
      description:
        "Building and evaluating machine learning systems and high-quality datasets for code and reasoning models.",
    },
    {
      company: "Massachusetts Institute of Technology",
      href: "https://www.csail.mit.edu/",
      badges: ["CSAIL"],
      location: "Hybrid",
      title: "Lead Developer",
      logoUrl: "/mit.jpg",
      start: "May 2025",
      end: "July 2026",
      description:
        "Working under Prof. Manolis Kellis at the Kellis Lab on MantisAI. Developed a GitHub PR-to-Mantis ingestion pipeline that semantically indexed 60+ pull requests and technical documents into Mantis' cognitive cartography, enabling dependency-aware retrieval and feature tracking. Designed the Mantis Canvas Widget for freehand visual annotation, embedding-space mapping, and semantic linking with MantisGPT for agentic reasoning workflows, and built a Content Management System for collaborative knowledge and documentation workflows. Contributed 10+ open-source pull requests spanning semantic retrieval, knowledge graph integration, and AI-assisted research infrastructure.",
    },
    {
      company: "Avittam",
      href: "https://avittam.com/",
      badges: ["Stealth Startup"],
      location: "New Delhi, India",
      title: "Founding Engineer",
      logoUrl: "/avittam.png",
      start: "February 2026",
      end: "May 2026",
      description:
        "Architected the end-to-end system and database schema across 10+ Supabase tables and shipped the full-stack mentor-mentee platform with Next.js, REST APIs, Razorpay, and Stream Chat, hosted across GCP and Render serving 100+ users. Built AI-assisted mentorship pipelines for session management, transcript processing, and automated study insight generation, plus 5+ Cron-based data pipelines cutting sync latency by 60% and an inbuilt video meet platform for real-time sessions.",
    },
  ],
  education: [
    {
      school: "Delhi Technological University",
      href: "https://www.dtu.ac.in",
      degree: "B.Tech in Engineering Physics",
      logoUrl: "/dtu.png",
      start: "2024",
      end: "2028",
      description:
        "Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Data Structures and Algorithms, Linear Algebra, Probability and Statistics, Computational Physics.",
    },
  ],
  projects: [
    {
      title: "DRESS (Diffusion-based Recommender & Enhanced Styling System)",
      href: "https://github.com/TaherMerchant25/Fashion-Recommendation-System-with-Virtual-Try-ON",
      dates: "May 2025",
      active: true,
      description:
        "A GAT recommender using BLIP-2 with MiniLM embeddings and triplet/contrastive losses, achieving high-precision retrieval on 11k+ fashion items with FAISS-based similarity search. Also led development of a Diffusion-based Virtual Try-On/Off system with DensePose alignment and GAN-powered garment removal, achieving 90%+ SSIM realism.",
      technologies: [
        "Python",
        "PyTorch",
        "Diffusion Models",
        "GANs",
        "BLIP-2",
        "FAISS",
        "Graph Attention Networks",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/TaherMerchant25/Fashion-Recommendation-System-with-Virtual-Try-ON",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dress.png",
      video: "",
    },
    {
      title: "QuixBugs AutoFix",
      href: "https://github.com/TaherMerchant25/LLM-Based-Automated-Code-Repair-Agent",
      dates: "2025",
      active: true,
      description:
        "A multi-agent LLM system that automatically detects, repairs, and validates buggy Python programs from the QuixBugs dataset using Gemini 1.5. Implemented a modular pipeline with bug analysis, code repair, and validation agents alongside a fast single-agent alternative, achieving a 97.56% fix rate across 40+ programs using AST-based similarity metrics and test-driven evaluation.",
      technologies: [
        "Python",
        "Gemini 1.5",
        "Multi-Agent Systems",
        "LLMs",
        "AST Analysis",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/TaherMerchant25/LLM-Based-Automated-Code-Repair-Agent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/quixbugs.png",
      video: "",
    },
    {
      title: "Crowd Counting and Localization",
      href: "https://github.com/TaherMerchant25/Crowd-Counting-Model-Analysis",
      dates: "2025",
      active: true,
      description:
        "A comparative deep learning pipeline for real-time crowd counting and localization on drone footage, benchmarking CCTrans (ViT), CrowdDiff (diffusion), DMCount++, Multi-Scale Attention Networks, CSRNet, SENet, and YOLOv8 on a custom dataset. DMCount++ with self-attention was the strongest arm at MAE 25.00 / RMSE 35.21, with individual localization via DBSCAN clustering and applications in public safety, urban monitoring, and disaster response.",
      technologies: [
        "Python",
        "PyTorch",
        "Computer Vision",
        "Vision Transformers",
        "Diffusion Models",
        "YOLOv8",
        "DBSCAN",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/TaherMerchant25/Crowd-Counting-Model-Analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/crowdcounting.png",
      video: "",
    },
    {
      title: "DrugGraphRAG",
      href: "https://github.com/TaherMerchant25/DrugGraphRAG",
      dates: "2026",
      active: true,
      description:
        "A GraphRAG system for drug repurposing over a Hetionet-shaped biomedical knowledge graph, where the graph structure itself carries the answer. Links drug and disease mentions to nodes, then combines ego-subgraph local retrieval with typed meta-path enumeration (e.g. Imatinib -[binds]-> PDGFRA -[associated with]-> systemic sclerosis) and DWPC-lite path ranking to propose and mechanistically explain repurposing hypotheses. Runs fully offline and deterministically with a TF-IDF embedder, with an OpenAI-compatible endpoint and a PathRAG upgrade dropping in cleanly.",
      technologies: [
        "Python",
        "GraphRAG",
        "Knowledge Graphs",
        "NetworkX",
        "Hetionet",
        "Meta-path Retrieval",
        "Biomedical NLP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/TaherMerchant25/DrugGraphRAG",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/druggraphrag.png",
      video: "",
    },
    {
      title: "Multi-Asset Regime-Aware Quantitative Trading System",
      href: "https://github.com/ghostiee-11/ALPHAVANTAGE_JAiNWIN",
      dates: "April 2025",
      active: true,
      description:
        "Robust backtesting pipelines with SOTA feature engineering and statistical validation (Sharpe/Sortino ratios) using the Untrade SDK. Implemented a deep learning pipeline integrating 6+ technical indicators (RSI, MACD, Bollinger Bands) and 3 regime-switching algorithms, improving the Sharpe Ratio by 0.7.",
      technologies: [
        "Python",
        "Deep Learning",
        "Time Series",
        "Quantitative Finance",
        "VectorBT",
        "Pandas",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ghostiee-11/ALPHAVANTAGE_JAiNWIN",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/quant.png",
      video: "",
    },
  ],
  publications: [
    {
      title:
        "PRAXIS: Principled Reasoning via Agentic eXploration at Inference-time Scale",
      dates: "2026",
      location: "Under Review, EMNLP 2026 LUHME Workshop",
      description:
        "A training-free inference-time scaling framework that generates N trajectories under N distinct cognitive lenses, each grounded in a documented agent failure mode or in linguistic pragmatic theory (Grice's Maxims, Speech Act Theory). Achieves Oracle@16 of 0.993 on 150 real ABCD conversations with log-linear scaling, outperforming temperature sampling by 12-17 pp (exact McNemar p=0.0013), and identifies a false-consensus failure mode where random sampling degrades by 16.6 pp at N=16 while PRAXIS stays stable.",
      image: "",
      links: [],
    },
    {
      title:
        "When Is It Safe to Replay a Constructed Failure Knowledge Base? Context-Invariance as the Deciding Property",
      dates: "2026",
      location: "Under Review, EMNLP 2026 AKBC Workshop",
      description:
        "FAILGROUND, a deterministic pipeline that mines each detected agent failure into a typed Failure-Provenance Triple inside a failure-aware knowledge graph, with no LLM-as-judge and no external KG calls. Establishes context-invariance as the property deciding when replay is safe: literal replay ties strong baselines on InterCode-SQL and BIRD-SQL and ports across models unharmed, but is misinformation on context-dependent ALFWorld, where aggressive injection is monotonically harmful (0.460 to 0.347).",
      image: "",
      links: [],
    },
    {
      title:
        "Zero Shot Trajectory Aware Retrieval on Semi Structured Knowledge Base via TARM-MCTS",
      dates: "2026",
      location: "Under Review, AAAI 2027",
      description:
        "An LLM-free MCTS retriever replacing the LLM scorer with a cross-encoder compiled to OpenVINO IR, enabling deterministic CPU/NPU deployment at ~500ms latency with zero API calls at inference.",
      image: "",
      links: [],
    },
    {
      title:
        "WeamRAG: Path Flexible Beam Search for Hierarchical Knowledge Graph Retrieval",
      dates: "2026",
      location: "Under Review, EMNLP 2026",
      description:
        "A path-flexible hierarchical KG RAG framework combining Wu-Palmer-guided multi-seed beam search, a binary-lifting LCA index, and BM25 chunk fallback; achieves Tok-F1 of 0.421 (leading all graph-structured baselines) and a 94% pairwise LLM-judge win rate on MuSiQue (500 two-hop questions) at 0.95s retrieval over a 54,678-entity graph.",
      image: "",
      links: [],
    },
  ],
  hackathons: [
    {
      title: "Top-10 National Rank - Google GenAI Exchange Hackathon",
      dates: "November 2025",
      location: "Leela Palace, Bangalore",
      description:
        "Designed an AI misinformation-detection system with Team Authenticoders, ranking Top 10 among 4,457+ submissions nationwide.",
      image: "/google.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Grand Finalist - Smart India Hackathon 2025",
      dates: "November 2025",
      location: "India",
      description:
        "Selected as a Grand Finalist at the Smart India Hackathon 2025, India's largest nationwide innovation and problem-solving hackathon.",
      image: "/sih.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Ranked 1st - Best Project Implementation and Management, IRC'25",
      dates: "January 2025",
      location: "BITS Pilani, Goa",
      description:
        "Won 1st place with Team Inferno DTU by leading development of an Arrow and Traffic Cone Detection Model using CNNs integrated with ROS for autonomous navigation at the International Rover Challenge.",
      image: "/bits.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
  volunteering: [
    {
      title: "AIMS-DTU",
      dates: "January 2025 - Present",
      location: "New Delhi, India",
      description:
        "Co-Head of the Artificial Intelligence and Machine Learning Society at DTU since September 2025, after joining as a member in January 2025. Leads research reading groups, technical workshops, and flagship events such as brAInwave.",
      image: "/aims.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Team Inferno DTU",
      dates: "2024 - Present",
      location: "New Delhi, India",
      description:
        "Member of DTU's Mars rover team, working on perception and autonomous navigation. Led the Arrow and Traffic Cone Detection Model using CNNs integrated with ROS, which won Best Project Implementation and Management at the International Rover Challenge 2025.",
      image: "/inferno.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Fresources.tech",
      dates: "2024 - Present",
      location: "New Delhi, India",
      description:
        "Part of Fresources, a student-run nonprofit at DTU that is a one-stop platform for academic material - notes, books, assignments, and previous year papers - serving college students across DTU and IPU-affiliated colleges.",
      image: "/fresources.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
