<div align="center">

# Kasukurthi Sriram

### SOC Analyst · Detection Engineering · Defensive Security

Building security systems that detect, analyze, and respond to threats — not just monitor them.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sriram-kasukurthi-600027275)
[![Portfolio](https://img.shields.io/badge/Portfolio-0d0d14?style=for-the-badge&logo=googlechrome&logoColor=00f0ff)](https://sriram21-09.github.io)
[![TryHackMe](https://img.shields.io/badge/TryHackMe-212C42?style=for-the-badge&logo=tryhackme&logoColor=white)](https://tryhackme.com/p/sriram.2109)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sriramkasukurthi2109@gmail.com)

</div>

---

## About

B.Tech Computer Science (Cybersecurity) student at **Parul University**, graduating September 2027.

I build security platforms that go beyond passive monitoring — systems that trap attackers, score threats with ML, and generate actionable intelligence. My work combines **SOC operations**, **detection engineering**, and **secure software engineering** with hands-on experience across 4+ cybersecurity internships.

**Core focus areas:**

- Detection Engineering & Threat Detection
- SOC Operations & Log Analysis
- Network Security & Traffic Analysis
- Incident Response & Alert Triage
- Deception Technologies (Honeypots)
- AI/ML for Threat Scoring
- Secure Software Engineering

---

## 🛡️ Flagship Project

### [PhantomNet](https://github.com/sriram21-09/PhantomNet) — AI-Driven Distributed Honeypot & Threat Detection Platform

> Academic capstone project — active development

A multi-layered honeypot deception framework that deploys intelligent traps across SSH, HTTP, FTP, and SMTP protocols, capturing and analyzing network threats with ML-powered behavioral scoring.

**Architecture:**

```
Internet → SSH / HTTP / FTP / SMTP Honeypots (Docker)
              ↓
         Log Collection & Feature Engineering
              ↓
         ML Threat Scoring (Random Forest + Isolation Forest + SHAP)
              ↓
         PostgreSQL + FastAPI Backend (20+ API endpoints)
              ↓
         React SOC Dashboard (WebSocket streaming, GeoIP mapping)
```

**What's actually built:**

- 4-protocol honeypots with Docker containerization and per-service Dockerfiles
- ML ensemble pipeline with trained models (Random Forest, Isolation Forest), SHAP explainability
- LSTM temporal analysis module for sequential attack pattern detection
- FastAPI backend with TAXII/STIX 2.1 export, MITRE ATT&CK v14 mappings, JWT + RBAC auth
- React dashboard with real-time WebSocket streaming
- CI/CD via GitHub Actions, database migrations, MLflow experiment tracking
- GeoIP attack geolocation using MaxMind GeoLite2

**Stack:** `Python` · `FastAPI` · `React` · `PostgreSQL` · `Docker` · `Scikit-Learn` · `TensorFlow` · `SHAP` · `MLflow` · `Scapy` · `ELK Stack`

**Status:** Development / MVP — actively iterated through 21+ weekly sprints

---

## 🔍 Major Project

### [Asterion](https://github.com/sriram21-09/Asterion) — Telecom Localization & Investigation Platform

> Built for E-Rakshak 2026 hackathon · MIT License

An open-source investigation support platform demonstrating scientific multilateration, Kalman tracking, confidence estimation, and evidence-based telecom localization for law enforcement use cases.

**Stack:** `Python` · `FastAPI` · `React`

---

## 📂 Other Projects

**[AI Health Assistant](https://github.com/sriram21-09/AI-Powered-Health-Assistant)** — AI-assisted symptom analysis using Gemini 2.0 Flash with NLP preprocessing, voice input, and offline fallback.
`React` · `TypeScript` · `Gemini AI`

**[Network Packet Analyzer](https://github.com/sriram21-09/PRODIGY_CS_05)** — Packet capture and protocol analysis tool. Built during Prodigy InfoTech internship.
`Shell` · `Linux`

**[Security Assessment Tools](https://github.com/sriram21-09/PRODIGY_CS_04)** — Password strength validation and security assessment scripts.
`Shell` · `Python`

**[Caesar Cipher Tool](https://github.com/sriram21-09/PRODIGY_CS_01)** — Encryption/decryption implementation.
`Python`

---

## 💼 Experience

**Cybersecurity Content & Research Associate** — Vexorion Quantum AI *(Jul 2025 – Present)*
> Cybersecurity research on real-world threats, ransomware campaigns, and SOC detection strategies. Working with Splunk, Wazuh, ELK Stack, Burp Suite, and OSINT frameworks.

**AI Project Intern** — Edunet Foundation (Microsoft, SAP, AICTE TechSaksham) *(Jan – Feb 2025)*
> 4-week AICTE internship developing an AI-Powered Health Assistant with NLP symptom analysis. Evaluated by Microsoft and SAP industry experts.

**Cybersecurity Intern** — Red User Technologies *(2025)*
> Security operations, vulnerability assessment, and defensive security tasks.

**Software Development Intern** — ShadowFox *(2025)*
> Full-stack software development and engineering fundamentals.

**Development Intern** — TechnoHacks *(2025)*
> Development projects and team collaboration practices.

**Cybersecurity Intern** — Prodigy InfoTech *(2024)*
> Built network packet analyzers, security assessment tools, and applied cybersecurity in practical projects.

**Academic Project Lead** — PhantomNet, Parul University *(2026 – Present)*
> Designing architecture, building backend components, and leading detection workflow development for a distributed honeypot platform.

---

## 🛠️ Technical Skills

### Security & SOC
SOC Operations · Detection Engineering · Threat Detection & Response · Incident Response · Alert Triage · Log Analysis · Threat Hunting · Network Security Monitoring · Vulnerability Assessment · MITRE ATT&CK · OWASP Top 10 · NIST Cybersecurity Framework

### Security Tools
Splunk · ELK Stack · Wazuh · Wireshark · Nmap · Burp Suite · OWASP ZAP · Metasploit · OpenVAS · Netcat · Scapy · TryHackMe

### Network & Infrastructure
Firewalls · IDS/IPS · VPN · TCP/IP Analysis · DNS Security · Traffic Analysis · Identity & Access Management (IAM)

### Programming & Automation
Python · Java · JavaScript · TypeScript · SQL · Bash · PowerShell

### Backend & Data
FastAPI · REST APIs · PostgreSQL · SQLite · MySQL · SQLAlchemy · WebSockets

### Frontend
React · Tailwind CSS · Vite · HTML/CSS/JS

### DevOps & Infrastructure
Docker · Docker Compose · Git · GitHub Actions · CI/CD · Linux · Shell Scripting

### AI / ML
Scikit-Learn · TensorFlow · SHAP · MLflow · Pandas · NumPy · Ensemble Methods

---

## 🎓 Certifications

- **Cybersecurity Foundation** — Palo Alto Networks Academy
- **SC-900: Microsoft Security, Compliance, and Identity Fundamentals** — Microsoft
- **CCNA Certified** — Cisco Networking Academy
- **Cybersecurity Analyst Job Simulation** — Tata Group
- **TryHackMe** — Ongoing practice in offensive & defensive security

---

## 📚 Currently Learning

- Splunk (Advanced SIEM)
- Microsoft Sentinel
- Threat Hunting
- Cloud Security
- Secure Software Architecture

---

## GitHub

<div align="center">

<a href="https://github.com/sriram21-09">
  <img height="170" src="https://github-readme-stats-sigma-five.vercel.app/api?username=sriram21-09&show_icons=true&theme=github_dark&hide_border=true&bg_color=00000000&title_color=58a6ff&text_color=8b949e&icon_color=3fb950&ring_color=58a6ff" />
</a>
&nbsp;&nbsp;
<a href="https://github.com/sriram21-09">
  <img height="170" src="https://github-readme-streak-stats.herokuapp.com/?user=sriram21-09&theme=dark&hide_border=true&background=00000000&ring=58a6ff&fire=3fb950&currStreakLabel=58a6ff&sideNums=8b949e&sideLabels=8b949e&dates=484f58" />
</a>

</div>

---

<div align="center">

*Building systems where security is the architecture, not the afterthought.*

**[Portfolio](https://sriram21-09.github.io)** · **[LinkedIn](https://linkedin.com/in/sriram-kasukurthi-600027275)** · **[sriramkasukurthi2109@gmail.com](mailto:sriramkasukurthi2109@gmail.com)**

</div>
