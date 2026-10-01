---
layout: page
title: "Building Reproducible Wi-Fi RF Fingerprinting Pipelines"
permalink: /ubicomp2026-rff-tutorial/
---

<style>
/* Scoped teaching-page styles for the existing Beautiful Jekyll site. */
.header-section {display:none;}
main.container-md {max-width:1700px;}
.page-content-wrapper {flex:0 0 100%;max-width:100%;margin-left:0!important;margin-top:24px!important;padding-top:0!important;}
body:has(#rff-tutorial) {background:#f6f7f9;}
#rff-tutorial {--ink:#192b3b;--muted:#586b79;--line:#dce4e8;--teal:#087e83;--pale:#edf6f5;--paper:#fff;color:var(--ink);font:16px/1.65 -apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;max-width:1600px;margin:0 auto;padding:20px 24px 64px;text-align:left;}
#rff-tutorial * {box-sizing:border-box;}
#rff-tutorial a {color:#076e79;text-decoration:underline;text-underline-offset:3px;}
#rff-tutorial a:hover {color:#034c56;}
#rff-tutorial a:focus-visible,#rff-tutorial button:focus-visible,#rff-tutorial summary:focus-visible,#rff-tutorial [tabindex]:focus-visible {outline:3px solid #e7a53c;outline-offset:4px;}
#rff-tutorial p {font-size:1rem;line-height:1.65;margin:0 0 14px;}
#rff-tutorial h1,#rff-tutorial h2,#rff-tutorial h3,#rff-tutorial h4 {color:var(--ink);font-family:inherit;font-weight:650;letter-spacing:-.025em;line-height:1.25;}
#rff-tutorial h1 {font-size:clamp(2rem,3.7vw,3.15rem);margin:16px 0 8px;max-width:1000px;}
#rff-tutorial h2 {font-size:1.7rem;margin:0;}
#rff-tutorial h3 {font-size:1.16rem;margin:20px 0 10px;}
#rff-tutorial h4 {font-size:1.08rem;margin:0 0 9px;}
#rff-tutorial ul,#rff-tutorial ol {padding-left:23px;margin:12px 0 18px;}
#rff-tutorial li {font-size:1rem;line-height:1.65;margin:5px 0;}
#rff-tutorial .eyebrow {font-size:.71rem;font-weight:750;letter-spacing:.13em;color:var(--teal);line-height:1.5;margin:0 0 7px;text-transform:uppercase;}
#rff-tutorial .tutorial-hero {padding:32px 0 34px;border-bottom:1px solid var(--line);margin-bottom:30px;}
#rff-tutorial .hero-subtitle {font-size:1.35rem;color:var(--muted);margin:0 0 20px;}
#rff-tutorial .hero-description {max-width:760px;font-size:1.05rem;}
#rff-tutorial .hero-meta {display:flex;flex-wrap:wrap;gap:6px 22px;font-size:.83rem;color:var(--muted);margin:18px 0 22px;}
#rff-tutorial .hero-actions,#rff-tutorial .resource-links {display:flex;flex-wrap:wrap;gap:10px;}
#rff-tutorial .hero-footnote {font-size:.8rem;color:var(--muted);margin:17px 0 0;}
#rff-tutorial .button {display:inline-flex;align-items:center;justify-content:center;gap:18px;text-decoration:none;border:1px solid #c7d6dc;border-radius:7px;padding:11px 16px;font-size:.85rem;font-weight:650;line-height:1.4;transition:background .15s;}
#rff-tutorial .button.primary {background:var(--teal);color:white;border-color:var(--teal);}
#rff-tutorial .button.primary:hover {background:#05636a;}
#rff-tutorial .button.secondary {background:#fff;color:var(--ink);}
#rff-tutorial .button.secondary:hover {background:var(--pale);}
#rff-tutorial .tutorial-layout {display:grid;grid-template-columns:220px minmax(0,1fr);gap:35px;align-items:start;}
#rff-tutorial .course-nav {position:sticky;top:92px;max-height:calc(100vh - 112px);overflow-y:auto;padding:14px 0;}
#rff-tutorial .nav-label {font-size:.68rem;letter-spacing:.13em;font-weight:750;color:var(--muted);padding:0 10px;}
#rff-tutorial .course-nav nav {display:grid;gap:5px;}
#rff-tutorial .course-nav nav a {display:flex;gap:10px;align-items:baseline;padding:11px 10px;border-radius:6px;text-decoration:none;font-size:.85rem;color:var(--muted);line-height:1.4;border-left:3px solid transparent;}
#rff-tutorial .course-nav nav a span {color:#84939b;font-size:.73rem;font-weight:650;}
#rff-tutorial .course-nav nav a:hover {background:#ebeff1;color:var(--ink);}
#rff-tutorial .course-nav nav a[aria-current] {background:#e6f0ef;color:#07676c;border-left-color:var(--teal);font-weight:700;}
#rff-tutorial .nav-utilities {display:grid;gap:7px;border-bottom:1px solid var(--line);margin-bottom:18px;padding:0 13px 16px;}
#rff-tutorial .nav-utilities a {font-size:.79rem;text-decoration:none;color:var(--muted);}
#rff-tutorial .nav-hint {font-size:.76rem;color:var(--muted);padding:0 13px;max-width:200px;}
#rff-tutorial .course-content {min-width:0;}
#rff-tutorial .start-note {border-left:3px solid var(--teal);padding:5px 0 5px 18px;margin:8px 0 22px;}
#rff-tutorial .start-note p {font-size:.9rem;margin:5px 0 0;color:var(--muted);}
#rff-tutorial .lesson {background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:28px;margin:28px 0 36px;scroll-margin-top:100px;box-shadow:0 3px 14px #192b3b03;}
#rff-tutorial .lesson-heading {display:flex;gap:16px;align-items:center;margin-bottom:24px;}
#rff-tutorial .chapter-number {display:grid;place-items:center;flex:0 0 46px;height:46px;border-radius:8px;background:var(--pale);color:var(--teal);font-size:1.05rem;font-weight:750;}
#rff-tutorial .lesson-grid {display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:25px;align-items:start;}
#rff-tutorial .lesson-intro p,#rff-tutorial .lesson-intro li {font-size:.92rem;line-height:1.65;}
#rff-tutorial .lesson-intro .lead {font-size:1.08rem;line-height:1.5;font-weight:550;margin:0 0 18px;}
#rff-tutorial .takeaway {border-left:3px solid #68a9a3;background:#f0f7f6;padding:14px 15px;margin:20px 0;}
#rff-tutorial .takeaway strong {font-size:.82rem;color:#1c6265;}
#rff-tutorial .takeaway p {font-size:.85rem;margin:4px 0 0;}
#rff-tutorial .slide-note,#rff-tutorial .source-note {font-size:.78rem;color:var(--muted);line-height:1.6;}
#rff-tutorial .slide-caption {margin:0;min-height:3.2em;padding:10px 12px;border-top:1px solid var(--line);background:#fafbfc;font-size:.82rem;line-height:1.6;color:var(--ink);}
#rff-tutorial .slide-caption:empty {display:none;}
#rff-tutorial .slide-viewer {border:1px solid var(--line);border-radius:8px;overflow:hidden;min-width:0;background:#fff;}
#rff-tutorial .slide-topline {display:flex;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--line);font-size:.65rem;color:var(--muted);align-items:center;}
#rff-tutorial .slide-topline span {font-weight:700;letter-spacing:.08em;}
#rff-tutorial .slide-topline a {font-size:.7rem;}
#rff-tutorial .slide-image-link {display:block;cursor:zoom-in;}
#rff-tutorial .slide-image {display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:contain;border:0;margin:0;}
#rff-tutorial figure.lesson-figure {margin:24px 0 0;}
#rff-tutorial figure.lesson-figure img {display:block;width:100%;height:auto;border:1px solid var(--line);border-radius:7px;}
#rff-tutorial figure.lesson-figure figcaption {font-size:.78rem;color:var(--muted);line-height:1.6;margin-top:9px;}
#rff-tutorial .slide-controls {display:flex;align-items:center;gap:7px;padding:10px;border-top:1px solid var(--line);background:#fafbfc;}
#rff-tutorial button {font:inherit;cursor:pointer;border:1px solid #cbd8df;background:white;border-radius:5px;color:var(--ink);padding:7px 11px;line-height:1.2;font-size:.8rem;}
#rff-tutorial button:hover {background:var(--pale);}
#rff-tutorial button:disabled {opacity:.38;cursor:default;}
#rff-tutorial [hidden] {display:none!important;}
#rff-tutorial .slide-counter {flex:1;font-size:.73rem;color:var(--muted);text-align:center;}
#rff-tutorial .activity-title {font-size:1.25rem;margin:30px 0 0;padding-top:25px;border-top:1px solid var(--line);}
#rff-tutorial .step {display:grid;grid-template-columns:32px minmax(0,1fr);gap:15px;padding:24px 0;border-bottom:1px solid #e8edef;}
#rff-tutorial .step-number {border-radius:50%;background:var(--pale);color:var(--teal);font-size:.85rem;font-weight:700;display:grid;place-items:center;width:30px;height:30px;}
#rff-tutorial .step p {font-size:.94rem;}
#rff-tutorial .step .check {color:#215d5e;background:#f0f7f6;padding:10px 13px;border-radius:5px;font-size:.85rem;margin:14px 0 0;}
#rff-tutorial .info {border:1px solid var(--line);background:#fff;border-radius:7px;margin:12px 0;scroll-margin-top:110px;}
#rff-tutorial .info summary {cursor:pointer;padding:14px 16px;font-size:.89rem;font-weight:600;color:var(--ink);}
#rff-tutorial .info summary::marker {color:var(--teal);}
#rff-tutorial .info-body {padding:0 18px 16px;}
#rff-tutorial .info-body p,#rff-tutorial .info-body li {font-size:.89rem;}
#rff-tutorial .info-body>:last-child {margin-bottom:0;}
#rff-tutorial .table-scroll {max-width:100%;overflow-x:auto;margin:20px 0;}
#rff-tutorial table {width:100%;display:table;border-collapse:collapse;margin:0;font-size:.84rem;line-height:1.55;table-layout:auto;}
#rff-tutorial th,#rff-tutorial td {padding:10px 12px;vertical-align:top;border:1px solid #e1e7eb;word-break:normal;}
#rff-tutorial th {background:#f1f5f6;text-align:left;font-weight:650;}
#rff-tutorial td:first-child,#rff-tutorial th:first-child {min-width:100px;width:auto;}
#rff-tutorial tbody tr:nth-child(even) {background:#fafcfc;}
#rff-tutorial pre {white-space:pre;overflow:auto;background:#142938;color:#dbe9ed;padding:18px;border-radius:6px;line-height:1.6;font-size:.79rem;max-width:100%;margin:14px 0;}
#rff-tutorial code {font-family:ui-monospace,SFMono-Regular,Consolas,monospace;background:#eef2f4;color:#214656;padding:2px 4px;border-radius:3px;}
#rff-tutorial pre code {background:none;color:inherit;padding:0;}
#rff-tutorial .code-block {position:relative;margin:16px 0;}
#rff-tutorial .code-block pre {padding-top:44px;}
#rff-tutorial .copy-button {position:absolute;top:8px;right:8px;font-size:.7rem;background:#263f4f;color:#eef8fb;border-color:#58717f;}
#rff-tutorial .reference-results {display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:7px;margin:16px 0;overflow:hidden;}
#rff-tutorial .reference-results>div {padding:17px 20px;background:#f8fafb;}
#rff-tutorial .reference-results>div+div {border-left:1px solid var(--line);background:var(--pale);}
#rff-tutorial .reference-results span {font-size:.8rem;color:var(--muted);}
#rff-tutorial .reference-results strong {display:block;font-size:2rem;line-height:1.3;color:var(--ink);margin-top:8px;}
#rff-tutorial .reference-results strong span {font-size:1rem;margin-left:3px;}
#rff-tutorial .next-lesson {display:flex;justify-content:space-between;gap:15px;margin-top:25px;border-top:1px solid var(--line);padding-top:18px;font-size:.88rem;font-weight:600;text-decoration:none;}
#rff-tutorial .support {padding:10px 0 0;scroll-margin-top:100px;}
#rff-tutorial .support h2 {margin-bottom:20px;}
#rff-tutorial .release-note {font-size:.82rem;color:var(--muted);background:#f5f7f8;padding:12px;border-radius:6px;margin-top:16px;}
#rff-tutorial .back-top {display:inline-block;margin-top:20px;font-size:.85rem;}
#rff-tutorial .sr-only {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}
#rff-tutorial .skip-link {position:absolute;left:-10000px;}
#rff-tutorial .skip-link:focus {left:20px;top:20px;background:white;padding:12px;z-index:9999;}
#rff-tutorial .slide-dialog {width:min(98vw,1000px);max-width:98vw;max-height:96vh;padding:0;background:#fff;border:1px solid #aac0ca;border-radius:8px;}
#rff-tutorial .slide-dialog::backdrop {background:#0d1f2edb;}
#rff-tutorial .dialog-toolbar {display:flex;gap:8px;align-items:center;padding:10px 12px;border-bottom:1px solid var(--line);}
#rff-tutorial .dialog-caption {flex:1;font-size:.8rem;}
#rff-tutorial .slide-dialog img {display:block;width:100%;height:calc(94vh - 70px);object-fit:contain;background:white;}
@media(min-width:1200px) {#rff-tutorial .lesson-intro .resource-links {flex-direction:column;align-items:flex-start;}}
@media(max-width:1199px) {#rff-tutorial .slide-caption {min-height:4.8em;}}
@media(max-width:1050px) {#rff-tutorial .tutorial-layout {grid-template-columns:180px minmax(0,1fr);gap:20px;}#rff-tutorial .lesson-grid {grid-template-columns:1fr;}#rff-tutorial .slide-viewer {max-width:550px;width:100%;margin:auto;}#rff-tutorial .lesson {padding:22px;}}
@media(max-width:760px) {#rff-tutorial {padding:8px 14px 40px;}#rff-tutorial .tutorial-hero {padding-top:22px;}#rff-tutorial h1 {font-size:2rem;}#rff-tutorial .hero-subtitle {font-size:1.08rem;}#rff-tutorial .hero-meta {display:grid;gap:5px;}#rff-tutorial .tutorial-layout {display:block;}#rff-tutorial .course-nav {position:static;max-height:none;padding:0 0 20px;}#rff-tutorial .course-nav nav {grid-template-columns:1fr 1fr;gap:4px;}#rff-tutorial .course-nav nav a {font-size:.78rem;padding:10px 7px;}#rff-tutorial .nav-utilities {display:flex;flex-wrap:wrap;gap:14px;padding:14px 7px;margin-bottom:10px;}#rff-tutorial .nav-hint {display:none;}#rff-tutorial .lesson {padding:18px 14px;margin-top:24px;}#rff-tutorial .lesson-heading {gap:11px;}#rff-tutorial h2 {font-size:1.35rem;}#rff-tutorial .chapter-number {flex-basis:36px;height:36px;font-size:.9rem;}#rff-tutorial .eyebrow {font-size:.62rem;}#rff-tutorial .step {gap:10px;grid-template-columns:27px minmax(0,1fr);}#rff-tutorial .step-number {width:25px;height:25px;}#rff-tutorial .reference-results>div {padding:12px;}#rff-tutorial .reference-results span {font-size:.72rem;}#rff-tutorial .dialog-caption {font-size:.7rem;}#rff-tutorial .dialog-toolbar {gap:5px;padding:8px;}#rff-tutorial button {padding:8px;}#rff-tutorial .slide-topline {padding:9px;}#rff-tutorial .lesson-intro .lead {font-size:1rem;}}
@media(prefers-reduced-motion:reduce) {#rff-tutorial * {transition:none!important;scroll-behavior:auto!important;}}
@media print {#rff-tutorial .course-nav,#rff-tutorial .slide-controls,#rff-tutorial .hero-actions,#rff-tutorial .next-lesson,#rff-tutorial .copy-button {display:none!important;}#rff-tutorial {padding:0;font-size:11pt;}#rff-tutorial .tutorial-layout {display:block;}#rff-tutorial .lesson {break-inside:auto;border:0;padding:15px 0;}#rff-tutorial .lesson-grid {grid-template-columns:1fr 1fr;}#rff-tutorial .slide-viewer {break-inside:avoid;}#rff-tutorial .info-body {display:block;}#rff-tutorial .tutorial-hero {padding-top:0;}#rff-tutorial h1 {font-size:24pt;}}

</style>
<div id="rff-tutorial">
<a class="skip-link" href="#background">Skip to the tutorial</a>
<header class="tutorial-hero" id="tutorial-top"><p class="eyebrow">AIoT LABORATORY / UBICOMP &amp; ISWC 2026</p><h1>Building Reproducible<br>Wi-Fi RF Fingerprinting Pipelines</h1><p class="hero-subtitle">Signal Collection, Datasets, and Evaluation</p><p class="hero-description">Follow the lecture, work through three labs, and build a Wi-Fi device-identification pipeline with SMoRFFI.</p><div class="hero-meta"><span>Shanghai, China</span><span>Workshop &amp; tutorial days: 11-12 October 2026</span><span>Half-day hands-on tutorial</span></div><div class="hero-actions"><a class="button primary" href="#background">Start the tutorial <span>→</span></a><a class="button secondary" href="#materials">Tutorial materials</a></div><p class="hero-footnote">123 same-model IoT devices · Prepared Wi-Fi records · Laptop-based labs</p></header>
<div class="tutorial-layout"><aside class="course-nav" aria-label="Tutorial navigation"><div class="nav-utilities"><a href="#overview">Overview</a><a href="#schedule">Schedule</a><a href="#materials">Materials</a><a href="#resources">Tutorial information</a></div><p class="nav-label">FOLLOW THE SESSION</p><nav><a href="#background"><span>01</span>Background & task</a><a href="#signal-features"><span>02</span>Signal & features</a><a href="#acquisition"><span>03</span>Acquisition walkthrough</a><a href="#lab-1"><span>04</span>Lab 1 · Explore data</a><a href="#lab-2"><span>05</span>Lab 2 · RF features</a><a href="#lab-3"><span>06</span>Lab 3 · Baseline</a><a href="#summary"><span>07</span>Summary & discussion</a></nav></aside><div class="course-content">
<section class="support" id="overview"><p class="eyebrow">OVERVIEW</p><h2>What this tutorial covers</h2>
<p>This tutorial teaches a reproducible Wi-Fi radio frequency fingerprinting (RFF) workflow for IoT device identification. Participants follow the complete path from Wi-Fi signal acquisition concepts to dataset inspection, RF feature construction, baseline identification, error analysis, and reproducible reporting.</p>
<p>The hands-on part uses prepared Wi-Fi RFF records, extracted RF features, executable notebooks, and reference outputs. Participants can complete the labs with a laptop. The instructors will demonstrate the acquisition workflow with SDR hardware and GNU Radio, while the executable labs use prepared data to keep the session stable.</p>
<p>The tutorial is built around the SMoRFFI dataset and framework. SMoRFFI was collected from 123 same-model commercial IEEE 802.11g IoT devices and contains 35.42 million raw I/Q preamble samples with 1.85 million extracted RF features. The accompanying framework covers data collection, feature extraction, and benchmark evaluation.</p>
<h3>Why this tutorial matters</h3>
<p>RF fingerprinting uses transmitter-dependent hardware imperfections in radio signals for device identification. This physical-layer signal provides a useful complement to software-level identifiers such as MAC addresses, which can be changed, randomized, or reused.</p>
<p>Reproducible RFF experiments require several pieces of practical knowledge:</p>
<ul><li>Wi-Fi packet structure and preamble records;</li><li>SDR-based collection and synchronization;</li><li>signal preprocessing and feature construction;</li><li>dataset organization and label checking;</li><li>train-test split design and leakage control;</li><li>baseline reproduction, debugging, and reporting.</li></ul>
<p>Same-model device identification is a demanding learning setting. Devices share the same vendor and model, so easy model-level differences are removed. Participants need to examine feature behavior, confusion patterns, sample budgets, and evaluation choices.</p>
<h3>End-to-end pipeline</h3>
<p>The tutorial follows four pipeline stages.</p>
<figure class="lesson-figure"><img src="/assets/ubicomp2026-rff-tutorial/rff-pipeline.webp" alt="Four pipeline stages: wireless signal acquisition, feature construction, recognition and decision, evaluation and deployment" width="1600" height="161" loading="lazy"><figcaption>The four stages of the workflow followed in this tutorial.</figcaption></figure>
<div class="table-scroll"><table><thead><tr><th>Stage</th><th>Main Question</th><th>Tutorial Output</th></tr></thead><tbody>
<tr><td>1. Wireless signal acquisition</td><td>How are Wi-Fi preamble records captured from transmitters?</td><td>Acquisition workflow steps and hardware walkthrough notes</td></tr>
<tr><td>2. RF feature construction</td><td>Which features describe transmitter-dependent signal behavior?</td><td>Feature table, visualization, and quality checks</td></tr>
<tr><td>3. Recognition and decision</td><td>How does a baseline model identify devices from RF features?</td><td>Trained classifier, prediction table, and metrics</td></tr>
<tr><td>4. Evaluation and deployment</td><td>How should an RFF experiment be checked?</td><td>Accuracy, recall, F1-score, confusion matrix, and reproducibility checklist</td></tr>
</tbody></table></div>
</section>
<div class="start-note"><strong>Keep this page and your notebook open.</strong><p>Each section follows the lecture slides. Use the arrows to turn pages, or open the chapter PDF. Run the notebook during Labs 1-3 and compare the outputs with the examples.</p></div><section class="support" id="schedule"><p class="eyebrow">SESSION INFORMATION</p><h2>Information and schedule</h2><div class="table-scroll"><table><thead><tr><th>Item</th><th>Information</th></tr></thead><tbody><tr><td>Topic</td><td>Wi-Fi RF fingerprinting for IoT device identification</td></tr><tr><td>Tutorial style</td><td>Short lectures, guided notebooks, hardware walkthrough, debugging, and discussion</td></tr><tr><td>Target participants</td><td>Students, researchers, and practitioners in ubiquitous sensing, IoT systems, wireless sensing, edge intelligence, and physical-layer security</td></tr><tr><td>Hands-on requirement</td><td>Laptop and web browser (Github and Kaggle)</td></tr><tr><td>SDR experience</td><td>No prior SDR experience is required for the hands-on labs</td></tr><tr><td>Main data source</td><td>SMoRFFI Wi-Fi RFF records and extracted RF features</td></tr><tr><td>Expected outputs</td><td>Dataset overview and field list, feature visualizations, baseline model, accuracy report, confusion matrix, and reproducibility checklist</td></tr><tr><td>Local execution (optional)</td><td>Python 3.10 or later, Jupyter, NumPy, pandas, scikit-learn, matplotlib</td></tr></tbody></table></div><h3>Session schedule</h3><div class="table-scroll"><table><thead><tr><th>Time</th><th>Module</th><th>Activity</th><th>Output</th></tr></thead><tbody><tr><td>15 min</td><td>Task Introduction</td><td>Define RF fingerprinting for IoT device identification and introduce the reproducibility problem.</td><td>Task definition and pipeline map</td></tr><tr><td>25 min</td><td>Signal and Feature Introduction</td><td>Introduce Wi-Fi preamble records and the RF features used in the labs.</td><td>Feature reference sheet</td></tr><tr><td>20 min</td><td>Data Acquisition Pipeline Walkthrough</td><td>Present the USRP B210, GNU Radio, Wi-Fi AP, and M5Stack collection workflow.</td><td>Acquisition workflow notes</td></tr><tr><td>30 min</td><td>Lab 1: Load and Explore the Dataset</td><td>Compare the two dataset views, inspect labels, count records, and identify feature fields.</td><td>Understanding of the two dataset views and their fields</td></tr><tr><td>20 min</td><td>Coffee Break and Hardware Display</td><td>Inspect the USRP B210, M5Stack transmitter, and acquisition setup materials.</td><td>Hardware Q&amp;A</td></tr><tr><td>30 min</td><td>Lab 2: Construct and Visualize RF Features</td><td>Compute or inspect selected RF features and visualize distributions across devices.</td><td>Feature plots</td></tr><tr><td>30 min</td><td>Lab 3: Build and Evaluate the Baseline</td><td>Train the baseline classifier, generate predictions, and inspect accuracy and confusion patterns.</td><td>Metrics and confusion matrix</td></tr><tr><td>20 min</td><td>Debug and Output Checking</td><td>Compare notebook outputs with reference outputs and resolve setup issues.</td><td>Passed checkpoints</td></tr><tr><td>20 min</td><td>Wrap-up and Open Discussion</td><td>Discuss workflow adaptation, dataset scope, reproducible reporting, and open research problems.</td><td>Reproducibility checklist</td></tr></tbody></table></div></section>
<section class="support" id="materials"><p class="eyebrow">COURSE MATERIALS</p><h2>Materials &amp; practical information</h2><details class="info" id="materials-links" open><summary>Materials and links</summary><div class="info-body"><div class="resource-links"><a class="button secondary" href="/assets/ubicomp2026-rff-tutorial/tutorial-slides.pdf" target="_blank" rel="noopener">Full slides · PDF<span class="sr-only"> (opens in a new tab)</span></a><a class="button secondary" href="/assets/ubicomp2026-rff-tutorial/tutorial-paper.pdf" target="_blank" rel="noopener">Tutorial paper · PDF<span class="sr-only"> (opens in a new tab)</span></a><a class="button secondary" href="https://github.com/aiot-lab-yin/Dockerized-wifi-iq-preamble-capture" target="_blank" rel="noopener">Data Acquisition System<span class="sr-only"> (opens in a new tab)</span></a><a class="button secondary" href="https://www.kaggle.com/datasets/yinchen1986/rffi-123-m5stack-iq-wifi-802-11g-2-4g" target="_blank" rel="noopener">Raw I/Q dataset<span class="sr-only"> (opens in a new tab)</span></a><a class="button secondary" href="https://www.kaggle.com/datasets/yinchen1986/rffi-kf-feature-iq-wifi-802-11g-2-4g-123-m5stack" target="_blank" rel="noopener">Feature dataset<span class="sr-only"> (opens in a new tab)</span></a><a class="button secondary" href="https://www.kaggle.com/code/zeweiguo/rff-data-calculate" target="_blank" rel="noopener">Feature & baseline notebook<span class="sr-only"> (opens in a new tab)</span></a></div><p>Chapter PDFs are available inside each teaching section. Slides are supplied as PDF; the editable PowerPoint source can be added when available.</p><p class="release-note">The dataset and notebook links above are the resources shown in the slides.</p><ul><li>Official UbiComp/ISWC 2026 Workshops and Tutorials page: <a href="https://www.ubicomp.org/ubicomp-iswc-2026/workshops-and-tutorials-2026/">https://www.ubicomp.org/ubicomp-iswc-2026/workshops-and-tutorials-2026/</a></li><li>Current tutorial page: <a href="https://www.aiotlabs.org/ubicomp2026-rff-tutorial/">https://www.aiotlabs.org/ubicomp2026-rff-tutorial/</a></li><li>Data Acquisition System: <a href="https://github.com/aiot-lab-yin/Dockerized-wifi-iq-preamble-capture">Dockerized-wifi-iq-preamble-capture</a></li><li>SMoRFFI article DOI: <a href="https://doi.org/10.1016/j.comnet.2026.112309">10.1016/j.comnet.2026.112309</a></li></ul></div></details></section>
<span id="hands-on-labs" class="anchor-alias"></span>
<section class="lesson" id="background"><div class="lesson-heading"><span class="chapter-number">01</span><div><p class="eyebrow">GUIDED SESSION · 15 min · SLIDES 3-8</p><h2>Background and Task Introduction</h2></div></div><div class="lesson-grid"><div class="slide-viewer" data-first="3" data-last="8" data-base="/assets/ubicomp2026-rff-tutorial" tabindex="0" role="group" aria-label="Background and Task Introduction slide viewer">
    <div class="slide-topline"><span>LECTURE SLIDES</span><a href="/assets/ubicomp2026-rff-tutorial/background.pdf" target="_blank" rel="noopener">Open chapter PDF ↗</a></div>
    <a class="slide-image-link" href="/assets/ubicomp2026-rff-tutorial/slide-03.webp" target="_blank" rel="noopener" aria-label="Enlarge slide 3"><img class="slide-image" src="/assets/ubicomp2026-rff-tutorial/slide-03.webp" alt="Background and Task Introduction, original slide 3" width="1400" height="788" loading="lazy"></a>
    <p class="slide-caption" aria-live="polite"></p>
    <div class="slide-controls"><button class="previous-slide" type="button" hidden aria-label="Previous slide">←</button><span class="slide-counter" aria-live="polite">Slide 3 of 41</span><button class="next-slide" type="button" hidden aria-label="Next slide">→</button><button class="expand-slide" type="button" hidden>Enlarge</button></div>
    <noscript><p>Open the chapter PDF to read all slides in this section.</p></noscript>
    <div class="slide-notes" hidden>
    <p data-slide="3">Cryptography is effective at its own job. IoT authentication remains challenging. RFF provides a complementary layer for the device.</p>
    <p data-slide="4">The distinguishing information comes from manufacturing: thermal noise, random vibration, and component tolerances leave every transmitter slightly different.</p>
    <p data-slide="5">Three formulations appear here. The labs use identification: one device label per record, chosen from a fixed set of 123 devices.</p>
    <p data-slide="6">Four boxes: extract identity, extract features, bind them, store them. The three labs fill in parts of this diagram.</p>
    <p data-slide="7">Four stages, one recurring failure each. The public acquisition repository, the shared notebook, and the fixed data split are the tutorial's response.</p>
    <p data-slide="8">Six objectives. The last one asks you to move this workflow onto a dataset of your own.</p>
    </div></div><div class="lesson-intro"><p class="lead">Identify a Wi-Fi transmitter from the RF features in its recorded signal.</p>
<h3>Our task today</h3><p>The slides introduce verification, identification, and device-type classification. Our hands-on task is <strong>device identification</strong>: the model predicts a device label from prepared Wi-Fi records.</p>
<p>Follow the same experiment from beginning to end: inspect the data, calculate RF features, and run a Random Forest baseline.</p>
<p class="slide-note">Slides 3-8 introduce the motivation, applications, pipeline, and learning objectives.</p></div></div><details class="info"><summary>Learning objectives</summary><div class="info-body"><p>By the end of the tutorial, participants will be able to:</p>
<ul><li>explain the Wi-Fi RFF acquisition process, including packet transmission, preamble capture, and record generation;</li><li>load Wi-Fi preamble and RF feature records into a reproducible notebook workflow;</li><li>inspect device labels, sample counts, feature fields, and basic data quality checks;</li><li>compute or interpret selected RF features, including CFO, phase error, magnitude error, I/Q gain imbalance, and fractal dimension;</li><li>visualize feature distributions and device-level separability;</li><li>train a baseline device-identification model and report accuracy, recall, F1-score, and confusion patterns;</li><li>compare intermediate outputs with reference results;</li><li>adapt the workflow to a new wireless sensing or physical-layer identification dataset.</li></ul></div></details><a class="next-lesson" href="#signal-features">Next: Signal and Feature Introduction <span>→</span></a></section><section class="lesson" id="signal-features"><div class="lesson-heading"><span class="chapter-number">02</span><div><p class="eyebrow">GUIDED SESSION · 25 min · SLIDES 10-20</p><h2>Signal and Feature Introduction</h2></div></div><div class="lesson-grid"><div class="slide-viewer" data-first="10" data-last="20" data-base="/assets/ubicomp2026-rff-tutorial" tabindex="0" role="group" aria-label="Signal and Feature Introduction slide viewer">
    <div class="slide-topline"><span>LECTURE SLIDES</span><a href="/assets/ubicomp2026-rff-tutorial/signal-features.pdf" target="_blank" rel="noopener">Open chapter PDF ↗</a></div>
    <a class="slide-image-link" href="/assets/ubicomp2026-rff-tutorial/slide-10.webp" target="_blank" rel="noopener" aria-label="Enlarge slide 10"><img class="slide-image" src="/assets/ubicomp2026-rff-tutorial/slide-10.webp" alt="Signal and Feature Introduction, original slide 10" width="1400" height="788" loading="lazy"></a>
    <p class="slide-caption" aria-live="polite"></p>
    <div class="slide-controls"><button class="previous-slide" type="button" hidden aria-label="Previous slide">←</button><span class="slide-counter" aria-live="polite">Slide 10 of 41</span><button class="next-slide" type="button" hidden aria-label="Next slide">→</button><button class="expand-slide" type="button" hidden>Enlarge</button></div>
    <noscript><p>Open the chapter PDF to read all slides in this section.</p></noscript>
    <div class="slide-notes" hidden>
    <p data-slide="10">The full 802.11g preamble. The short training sequence has ten symbols of 16 samples each. The long training sequence follows.</p>
    <p data-slide="11">The dataset keeps 128 samples, taken from S3 to S10. The file name starts with the device MAC address. That address becomes the label.</p>
    <p data-slide="12">This is the feature extraction workflow. The next seven slides take the features one at a time.</p>
    <p data-slide="13">Two sources of CFO are listed. Oscillator mismatch belongs to the device. The Doppler shift comes from movement.</p>
    <p data-slide="14">Coarse CFO comes from the STS, and fine CFO comes from the LTS. The total CFO combines the two estimates.</p>
    <p data-slide="15">Channel equalization comes first. The features that follow use the equalized LTS.</p>
    <p data-slide="16">Phase error is measured against the reference LTS. Four sources are listed, starting with residual CFO.</p>
    <p data-slide="17">Magnitude error is a magnitude difference from the reference LTS. Power-amplifier characteristics are listed first.</p>
    <p data-slide="18">This feature is the energy imbalance between the I and Q components. The ideal value is 1.</p>
    <p data-slide="19">Fractal dimension quantifies the complexity of the I/Q distribution. The SMoRFFI paper is cited as the source.</p>
    <p data-slide="20">Five features are paired with five signal properties. The labs compute all five and compare their contribution.</p>
    </div></div><div class="lesson-intro"><p class="lead">Connect the preamble in a Wi-Fi record to the features used in the labs.</p>
<h3>Read the diagrams in order</h3><p>Start with the Wi-Fi preamble on slide 10. Locate the short training sequence (STS) and long training sequence (LTS). Then follow the extraction diagram on slide 12.</p>
<p>Slides 13-19 introduce CFO, phase error, magnitude error, I/Q imbalance, and fractal dimension. For each feature, connect its meaning to the example plot.</p>
<div class="takeaway"><strong>Before the lab</strong><p>Recognize the feature names and the signal stages that produce them. Lab 2 will connect these explanations to the notebook output.</p></div></div></div><div class="table-scroll"><table><thead><tr><th>Feature</th><th>Meaning in this tutorial</th><th>Slide</th></tr></thead><tbody>
<tr><td>CFO</td><td>The observed frequency offset; the workflow includes coarse and fine estimates.</td><td>13</td></tr>
<tr><td>Phase error</td><td>Residual phase difference between measured and reference signals.</td><td>16</td></tr>
<tr><td>Magnitude error</td><td>Difference between measured and reference signal magnitudes; called amplitude error in the slides.</td><td>17</td></tr>
<tr><td>I/Q imbalance</td><td>Gain and phase mismatches between the I and Q paths; the dataset includes I/Q gain-imbalance features.</td><td>18</td></tr>
<tr><td>Fractal dimension</td><td>A descriptor of the geometric complexity of the I/Q trajectory.</td><td>19</td></tr>
</tbody></table></div><p class="source-note">Feature explanations follow slides 13-19. Calculation details are provided in the linked notebook and SMoRFFI publication.</p><a class="next-lesson" href="#acquisition">Next: Data Acquisition Pipeline Walkthrough <span>→</span></a></section><section class="lesson" id="acquisition"><div class="lesson-heading"><span class="chapter-number">03</span><div><p class="eyebrow">GUIDED SESSION · 20 min · SLIDES 22</p><h2>Data Acquisition Pipeline Walkthrough</h2></div></div><div class="lesson-grid"><div class="slide-viewer" data-first="22" data-last="22" data-base="/assets/ubicomp2026-rff-tutorial" tabindex="0" role="group" aria-label="Data Acquisition Pipeline Walkthrough slide viewer">
    <div class="slide-topline"><span>LECTURE SLIDES</span><a href="/assets/ubicomp2026-rff-tutorial/acquisition.pdf" target="_blank" rel="noopener">Open chapter PDF ↗</a></div>
    <a class="slide-image-link" href="/assets/ubicomp2026-rff-tutorial/slide-22.webp" target="_blank" rel="noopener" aria-label="Enlarge slide 22"><img class="slide-image" src="/assets/ubicomp2026-rff-tutorial/slide-22.webp" alt="Data Acquisition Pipeline Walkthrough, original slide 22" width="1400" height="788" loading="lazy"></a>
    <p class="slide-caption" aria-live="polite"></p>
    <div class="slide-controls"><button class="previous-slide" type="button" hidden aria-label="Previous slide">←</button><span class="slide-counter" aria-live="polite">Slide 22 of 41</span><button class="next-slide" type="button" hidden aria-label="Next slide">→</button><button class="expand-slide" type="button" hidden>Enlarge</button></div>
    <noscript><p>Open the chapter PDF to read all slides in this section.</p></noscript>
    <div class="slide-notes" hidden>
    <p data-slide="22">Four roles: transmitter, receiver, access point, and computer. The five steps in this section describe one collection run.</p>
    </div></div><div class="lesson-intro"><p class="lead">Follow one signal from the M5Stack transmitter to a saved record.</p>
<h3>Follow the numbered setup steps</h3><ol><li>Set the Wi-Fi channel.</li><li>The M5Stack communicates with the access point.</li><li>The USRP B210 samples the received signal.</li><li>The computer collects the records.</li><li>The processing workflow calculates RF features.</li></ol>
<p>The instructor demonstrates this setup. You will use prepared records in the three labs.</p>
<a class="button secondary" href="https://github.com/aiot-lab-yin/Dockerized-wifi-iq-preamble-capture" target="_blank" rel="noopener">View data acquisition system<span class="sr-only"> (opens in a new tab)</span></a>
<p class="slide-note">Hardware: M5Stack Core2, USRP B210, Huawei WS7100 V2 access point, and Minisforum NPB7 computer.</p></div></div><a class="next-lesson" href="#lab-1">Next: Lab 1: Load and Explore the Dataset <span>→</span></a></section><section class="lesson" id="lab-1"><div class="lesson-heading"><span class="chapter-number">04</span><div><p class="eyebrow">HANDS-ON LAB · 30 min · SLIDES 24-25</p><h2>Lab 1: Load and Explore the Dataset</h2></div></div><div class="lesson-grid"><div class="slide-viewer" data-first="24" data-last="25" data-base="/assets/ubicomp2026-rff-tutorial" tabindex="0" role="group" aria-label="Lab 1: Load and Explore the Dataset slide viewer">
    <div class="slide-topline"><span>LECTURE SLIDES</span><a href="/assets/ubicomp2026-rff-tutorial/lab-1.pdf" target="_blank" rel="noopener">Open chapter PDF ↗</a></div>
    <a class="slide-image-link" href="/assets/ubicomp2026-rff-tutorial/slide-24.webp" target="_blank" rel="noopener" aria-label="Enlarge slide 24"><img class="slide-image" src="/assets/ubicomp2026-rff-tutorial/slide-24.webp" alt="Lab 1: Load and Explore the Dataset, original slide 24" width="1400" height="788" loading="lazy"></a>
    <p class="slide-caption" aria-live="polite"></p>
    <div class="slide-controls"><button class="previous-slide" type="button" hidden aria-label="Previous slide">←</button><span class="slide-counter" aria-live="polite">Slide 24 of 41</span><button class="next-slide" type="button" hidden aria-label="Next slide">→</button><button class="expand-slide" type="button" hidden>Enlarge</button></div>
    <noscript><p>Open the chapter PDF to read all slides in this section.</p></noscript>
    <div class="slide-notes" hidden>
    <p data-slide="24">Dataset 1 holds the raw preamble and I/Q data. The slide gives the repository name and its direct URL.</p>
    <p data-slide="25">Dataset 2 adds the extracted RF features to the same I/Q data. The slide gives its repository name and URL.</p>
    </div></div><div class="lesson-intro"><p class="lead">Recognize the two dataset views and the fields the labs will use.</p>
<h3>Two dataset views</h3><p><strong>Raw I/Q:</strong> preamble samples and device information.</p><p><strong>Feature data:</strong> signal-related fields and calculated RF features. Use slide 25 to locate the columns discussed by the instructor.</p>
<div class="resource-links"><a class="button secondary" href="https://www.kaggle.com/datasets/yinchen1986/rffi-123-m5stack-iq-wifi-802-11g-2-4g" target="_blank" rel="noopener">Open raw I/Q dataset<span class="sr-only"> (opens in a new tab)</span></a><a class="button secondary" href="https://www.kaggle.com/datasets/yinchen1986/rffi-kf-feature-iq-wifi-802-11g-2-4g-123-m5stack" target="_blank" rel="noopener">Open feature dataset<span class="sr-only"> (opens in a new tab)</span></a></div>
<div class="takeaway"><strong>Finish with</strong><p>The two dataset views and the names of the device label, sample, and feature columns.</p></div></div></div><h3 class="activity-title">Follow along</h3><div class="step"><div class="step-number">1</div><div><h4>Open the two dataset pages</h4><p>Open the two dataset links above. Each dataset holds 123 files, one file per device, and each file holds 1000 records. The raw I/Q dataset keeps the device label, the MAC address, and the preamble samples. The feature dataset keeps the same records with the calculated RF features added.</p><p>Slide 24 shows the raw I/Q page and slide 25 shows the feature page. Kaggle offers a download button on both pages. The notebook used in the labs, <strong>RFF_Data_Calculate</strong>, already has both datasets attached, so no download is needed here.</p><p class="check"><strong>Check:</strong> You can say which dataset holds the raw samples and which one holds the calculated features.</p></div></div><div class="step"><div class="step-number">2</div><div><h4>Read the columns in the preview table</h4><p>Each dataset page shows a preview table of one file. Slide 25 lists the columns the instructor will use.</p><p>Every file of the raw I/Q dataset holds 3 columns and every file of the feature dataset holds 23. The figure shown on each page, 369 for the raw I/Q dataset and 2829 for the feature dataset, counts the columns of all 123 files.</p><p>Find the device label column, the MAC column, the sample column, and the feature columns the labs will use. A sample column holds an array of numbers written as text inside one cell.</p><p class="check"><strong>Check:</strong> You can name the device label column, the sample column, and two feature columns.</p></div></div><details class="info" id="dataset-case-study"><summary>Dataset settings and scope</summary><div class="info-body"><p>The tutorial uses SMoRFFI as its main case study.</p>
<div class="table-scroll"><table><thead><tr><th>Property</th><th>SMoRFFI Setting</th></tr></thead><tbody><tr><td>Signal type</td><td>2.4 GHz Wi-Fi, IEEE 802.11g</td></tr><tr><td>Device scale</td><td>123 same-model commercial IoT devices</td></tr><tr><td>Transmitter platform</td><td>M5Stack Core2</td></tr><tr><td>Receiver</td><td>USRP B210</td></tr><tr><td>AP</td><td>Huawei WS7100 V2</td></tr><tr><td>Capture software</td><td>GNU Radio with modified IEEE 802.11 a/g/p receiver components</td></tr><tr><td>Collection size</td><td>1000 frames per transmitter</td></tr><tr><td>Raw data</td><td>35.42 million raw I/Q preamble samples</td></tr><tr><td>Feature data</td><td>1.85 million extracted RF features</td></tr><tr><td>Sampling rate</td><td>20 MS/s</td></tr><tr><td>Channel and bandwidth</td><td>Wi-Fi Channel 6, 20 MHz bandwidth</td></tr><tr><td>Environment</td><td>Controlled indoor office, static short-distance setup</td></tr><tr><td>Baseline</td><td>Random Forest classifier</td></tr><tr><td>Reported baseline accuracy</td><td>88.6 percent with Kalman filtering in 5-fold evaluation</td></tr></tbody></table></div>
<h4>Data Files</h4>
<p>SMoRFFI provides two dataset views.</p>
<div class="table-scroll"><table><thead><tr><th>Dataset View</th><th>Contents</th><th>Tutorial Use</th></tr></thead><tbody><tr><td>Raw I/Q dataset</td><td>Device label, MAC address, and preamble samples</td><td>Signal inspection and acquisition-to-record mapping</td></tr><tr><td>Feature dataset</td><td>Device labels, MAC addresses, preamble fields, LTS samples, CFO features, phase error, magnitude error, I/Q gain imbalance, and fractal dimension</td><td>Feature visualization, baseline training, and evaluation</td></tr></tbody></table></div>
<h4>Feature Groups</h4>
<p>The feature notebook focuses on features that are commonly used in physical-layer identification:</p>
<ul><li><strong>Frequency-related features:</strong> coarse CFO, fine CFO, and combined CFO;</li><li><strong>Constellation-related features:</strong> phase error and magnitude error;</li><li><strong>I/Q impairment features:</strong> I/Q gain imbalance;</li><li><strong>Shape and complexity features:</strong> fractal dimension of processed long training sequences.</li></ul>
<p>The SMoRFFI baseline analysis reports that frequency-related features contribute strongly to Random Forest identification, with CFO, coarse CFO, and fine CFO ranked as the top three features by importance.</p>
<h4>Dataset Scope</h4>
<p>SMoRFFI is designed for controlled benchmarking of device-feature-based RF fingerprinting in an indoor, static, short-distance, high-SNR setting. Results from this dataset should be reported with that scope. Cross-environment deployment, long-term temporal robustness, and mobile-channel robustness require additional evaluation data.</p></div></details><a class="next-lesson" href="#lab-2">Next: Lab 2: Construct and Visualize RF Features <span>→</span></a></section><section class="lesson" id="lab-2"><div class="lesson-heading"><span class="chapter-number">05</span><div><p class="eyebrow">HANDS-ON LAB · 30 min · SLIDES 27-30</p><h2>Lab 2: Construct and Visualize RF Features</h2></div></div><div class="lesson-grid"><div class="slide-viewer" data-first="27" data-last="30" data-base="/assets/ubicomp2026-rff-tutorial" tabindex="0" role="group" aria-label="Lab 2: Construct and Visualize RF Features slide viewer">
    <div class="slide-topline"><span>LECTURE SLIDES</span><a href="/assets/ubicomp2026-rff-tutorial/lab-2.pdf" target="_blank" rel="noopener">Open chapter PDF ↗</a></div>
    <a class="slide-image-link" href="/assets/ubicomp2026-rff-tutorial/slide-27.webp" target="_blank" rel="noopener" aria-label="Enlarge slide 27"><img class="slide-image" src="/assets/ubicomp2026-rff-tutorial/slide-27.webp" alt="Lab 2: Construct and Visualize RF Features, original slide 27" width="1400" height="788" loading="lazy"></a>
    <p class="slide-caption" aria-live="polite"></p>
    <div class="slide-controls"><button class="previous-slide" type="button" hidden aria-label="Previous slide">←</button><span class="slide-counter" aria-live="polite">Slide 27 of 41</span><button class="next-slide" type="button" hidden aria-label="Next slide">→</button><button class="expand-slide" type="button" hidden>Enlarge</button></div>
    <noscript><p>Open the chapter PDF to read all slides in this section.</p></noscript>
    <div class="slide-notes" hidden>
    <p data-slide="27">This is the notebook entry, with the datasets preloaded. Three tasks are listed on the right.</p>
    <p data-slide="28">This cell calculates the RF features from the preamble. The marker shows where to click to run it.</p>
    <p data-slide="29">Two panels: the feature visualization before and after Kalman filtering. Both use the same device selection.</p>
    <p data-slide="30">Kalman filtering combines a state prediction with a noisy observation. The result is a smoother estimate of the signal.</p>
    </div></div><div class="lesson-intro"><p class="lead">Calculate RF features, apply Kalman filtering, and inspect the t-SNE plots.</p>
<h3>Use the notebook shown in the slides</h3><p>Open <strong>RFF_Data_Calculate</strong>. Slide 27 shows the notebook entry and attached datasets. Slide 28 shows the cells to run. Slide 29 provides the visual reference.</p>
<a class="button primary" href="https://www.kaggle.com/code/zeweiguo/rff-data-calculate" target="_blank" rel="noopener">Open RFF_Data_Calculate<span class="sr-only"> (opens in a new tab)</span></a>
<div class="takeaway"><strong>Run in sequence</strong><p>Feature calculation → Kalman filtering → t-SNE visualization.</p></div><p class="slide-note">The original slide screenshots show the controls used by the instructors. Their placement may differ in your notebook interface.</p></div></div><h3 class="activity-title">Follow along</h3><div class="step"><div class="step-number">1</div><div><h4>Open the editable notebook</h4><p>Use the notebook link above. Create an editable copy using the copy/edit control. Keep the datasets attached and use the same notebook session for the following steps.</p><p class="check"><strong>Check:</strong> The first code cell is available to run.</p></div></div><div class="step"><div class="step-number">2</div><div><h4>Calculate features from the preamble</h4><p>Find the feature-calculation section shown on slides 27-28. Run the imports and helper definitions first, then the calculation cell. Wait for each cell to finish before continuing.</p><p>Read the input and output paths in the cell. Note where the calculated feature records are stored.</p><p class="check"><strong>Check:</strong> The calculation finishes without an error, and the output contains calculated feature values.</p></div></div><div class="step"><div class="step-number">3</div><div><h4>Run Kalman filtering</h4><p>Continue to the <strong>Kalman Filtering</strong> section shown on slide 30. Read which feature columns it processes, then run the cell. Keep the unfiltered output available for comparison.</p><p class="check"><strong>Check:</strong> Both the unfiltered and filtered feature data are available to the visualization step.</p></div></div><div class="step"><div class="step-number">4</div><div><h4>Run t-SNE and compare the plots</h4><p>Run the t-SNE visualization section. Compare the plots for the same device selection before and after filtering, using slide 29 as the reference.</p><p>Observe clusters, overlap, and spread. Exact point locations can vary with the selected records and t-SNE settings. Use Lab 3 to check the corresponding identification results.</p><p class="check"><strong>Check:</strong> You can display both plots and describe one visible difference.</p></div></div><details class="info"><summary>If a later cell fails</summary><div class="info-body"><p>First check that the preceding cell completed. For missing variables, run the earlier definition cells. For missing files, compare the output path from feature calculation with the input path used by filtering or visualization. Keep the device selection consistent between the plots.</p></div></details><a class="next-lesson" href="#lab-3">Next: Lab 3: Build and Evaluate the Baseline <span>→</span></a></section><section class="lesson" id="lab-3"><div class="lesson-heading"><span class="chapter-number">06</span><div><p class="eyebrow">HANDS-ON LAB · 30 min · SLIDES 32-36</p><h2>Lab 3: Build and Evaluate the Baseline</h2></div></div><div class="lesson-grid"><div class="slide-viewer" data-first="32" data-last="36" data-base="/assets/ubicomp2026-rff-tutorial" tabindex="0" role="group" aria-label="Lab 3: Build and Evaluate the Baseline slide viewer">
    <div class="slide-topline"><span>LECTURE SLIDES</span><a href="/assets/ubicomp2026-rff-tutorial/lab-3.pdf" target="_blank" rel="noopener">Open chapter PDF ↗</a></div>
    <a class="slide-image-link" href="/assets/ubicomp2026-rff-tutorial/slide-32.webp" target="_blank" rel="noopener" aria-label="Enlarge slide 32"><img class="slide-image" src="/assets/ubicomp2026-rff-tutorial/slide-32.webp" alt="Lab 3: Build and Evaluate the Baseline, original slide 32" width="1400" height="788" loading="lazy"></a>
    <p class="slide-caption" aria-live="polite"></p>
    <div class="slide-controls"><button class="previous-slide" type="button" hidden aria-label="Previous slide">←</button><span class="slide-counter" aria-live="polite">Slide 32 of 41</span><button class="next-slide" type="button" hidden aria-label="Next slide">→</button><button class="expand-slide" type="button" hidden>Enlarge</button></div>
    <noscript><p>Open the chapter PDF to read all slides in this section.</p></noscript>
    <div class="slide-notes" hidden>
    <p data-slide="32">Each tree sees a random subset of the data and the features. The final class comes from a majority vote.</p>
    <p data-slide="33">The same device produces different feature values in different sessions. This plot shows the size of that shift.</p>
    <p data-slide="34">Feature importance comes from the trained model. It ranks the features by contribution.</p>
    <p data-slide="35">Read the matrix by row. Each row is one true device. The off-diagonal entries are the mistakes.</p>
    <p data-slide="36">This compares accuracy across feature groups. It answers which features are worth computing.</p>
    </div></div><div class="lesson-intro"><p class="lead">Run the baseline and read the results produced by the experiment.</p>
<h3>From features to device predictions</h3><p>Continue to the <strong>Random Forest</strong> section of the notebook. Read the result table, feature-importance output, and confusion matrix alongside slides 32-36.</p>
<a class="button primary" href="https://www.kaggle.com/code/zeweiguo/rff-data-calculate" target="_blank" rel="noopener">Continue in the notebook<span class="sr-only"> (opens in a new tab)</span></a>
<div class="takeaway"><strong>Finish with</strong><p>Your accuracy result, the most important features, and an explanation of at least one pattern in the confusion matrix.</p></div></div></div><h3 class="activity-title">Follow along</h3><div class="step"><div class="step-number">1</div><div><h4>Run Random Forest</h4><p>Continue to the <strong>Random Forest</strong> cell shown on slide 32. Identify the selected feature columns, device labels, and evaluation setting in the code. Run the cell after the feature-processing cells have finished.</p><p class="check"><strong>Check:</strong> The cell produces predictions and an accuracy result.</p></div></div><div class="step"><div class="step-number">2</div><div><h4>Read the accuracy results</h4><p>Compare the unfiltered and filtered results. The slide screenshots report the following reference values.</p><div class="reference-results"><div><span>Without Kalman filtering</span><strong>82.0<span>%</span></strong></div><div><span>With Kalman filtering</span><strong>88.6<span>%</span></strong></div></div><p class="source-note">Reference: slide 32. These are the reported slide results. A different device subset, split, preprocessing configuration, or software version can produce different results.</p><p class="check"><strong>Check:</strong> You have recorded your data selection, evaluation setting, and accuracy.</p></div></div><div class="step"><div class="step-number">3</div><div><h4>Inspect feature behavior and importance</h4><p>Read the feature traces on slide 33 and the importance table on slide 34. Locate CFO, coarse CFO, and fine CFO in the table. Compare the notebook output with this ranking.</p><p class="check"><strong>Check:</strong> You can identify the highest-ranked features in your result.</p></div></div><div class="step"><div class="step-number">4</div><div><h4>Read the confusion matrix</h4><p>Use slide 35 as a guide: the vertical axis is the true device label and the horizontal axis is the predicted label. Diagonal entries correspond to correct predictions. Off-diagonal entries show confused device pairs.</p><p>Inspect the displayed matrix and select a visible off-diagonal entry. Identify the true and predicted device labels.</p><p class="check"><strong>Check:</strong> You can explain one correct prediction pattern and one device confusion.</p></div></div><div class="step"><div class="step-number">5</div><div><h4>Compare feature groups</h4><p>Read slide 36 from left to right. Use slide 34 to map <em>f</em><sub>1</sub> through <em>f</em><sub>15</sub> to feature names. Compare the accuracy bars as more features are included, and compare the filtered and unfiltered cases.</p><p class="check"><strong>Check:</strong> You can relate a feature-group result to the features used in that experiment.</p></div></div><a class="next-lesson" href="#summary">Next: Summary and Open Discussion <span>→</span></a></section><section class="lesson" id="summary"><div class="lesson-heading"><span class="chapter-number">07</span><div><p class="eyebrow">GUIDED SESSION · 20 min · SLIDES 38-41</p><h2>Summary and Open Discussion</h2></div></div><div class="lesson-grid"><div class="slide-viewer" data-first="38" data-last="41" data-base="/assets/ubicomp2026-rff-tutorial" tabindex="0" role="group" aria-label="Summary and Open Discussion slide viewer">
    <div class="slide-topline"><span>LECTURE SLIDES</span><a href="/assets/ubicomp2026-rff-tutorial/summary.pdf" target="_blank" rel="noopener">Open chapter PDF ↗</a></div>
    <a class="slide-image-link" href="/assets/ubicomp2026-rff-tutorial/slide-38.webp" target="_blank" rel="noopener" aria-label="Enlarge slide 38"><img class="slide-image" src="/assets/ubicomp2026-rff-tutorial/slide-38.webp" alt="Summary and Open Discussion, original slide 38" width="1400" height="788" loading="lazy"></a>
    <p class="slide-caption" aria-live="polite"></p>
    <div class="slide-controls"><button class="previous-slide" type="button" hidden aria-label="Previous slide">←</button><span class="slide-counter" aria-live="polite">Slide 38 of 41</span><button class="next-slide" type="button" hidden aria-label="Next slide">→</button><button class="expand-slide" type="button" hidden>Enlarge</button></div>
    <noscript><p>Open the chapter PDF to read all slides in this section.</p></noscript>
    <div class="slide-notes" hidden>
    <p data-slide="38">Four axes of change: time, channel, environment, and receiver. Device aging is the example listed for time.</p>
    <p data-slide="39">Two problems appear here. The first is more devices. The second is devices the model has never seen. The four items below address the second one.</p>
    <p data-slide="40">The first two attacks act on the signal. The last two act on the model.</p>
    <p data-slide="41">Closing slide. The discussion questions for this section draw on slides 38-40.</p>
    </div></div><div class="lesson-intro"><p class="lead">Review the experiment you have completed.</p>
<ol><li>Loaded Wi-Fi records and identified their fields.</li><li>Calculated and visualized RF features.</li><li>Trained a baseline and inspected its results.</li></ol>
<h3>Discuss the results</h3><p>Which features contributed most? Which devices were confused? What would you check before using the workflow in another environment?</p>
<p>Slides 38-40 introduce feature robustness, device scale, reproducibility, and attacks. Use these topics for the closing discussion.</p></div></div><details class="info" id="reproducibility-checklist"><summary>Reproducibility checklist</summary><div class="info-body"><p>Use this checklist when running or adapting the notebooks.</p>
<div class="table-scroll"><table><thead><tr><th>Item</th><th>What to Record</th></tr></thead><tbody><tr><td>Data version</td><td>Dataset name, download date, subset name, and file count</td></tr><tr><td>Device labels</td><td>Number of devices, label field, and sample count per device</td></tr><tr><td>Feature set</td><td>Included features and any filtering or smoothing</td></tr><tr><td>Split design</td><td>Train-test split, cross-validation setting, random seed, and device/sample grouping</td></tr><tr><td>Model</td><td>Algorithm, hyperparameters, software versions</td></tr><tr><td>Metrics</td><td>Accuracy, recall, F1-score, confusion matrix, and per-device results when available</td></tr><tr><td>Reference check</td><td>Matching checkpoint outputs or documented differences</td></tr><tr><td>Scope</td><td>Environment, channel setting, hardware setting, and limitations</td></tr></tbody></table></div></div></details></section>
<section class="support" id="resources"><p class="eyebrow">COURSE INFORMATION</p><h2>Tutorial information</h2><details class="info" id="responsible-use"><summary>Responsible use</summary><div class="info-body"><p>The tutorial uses controlled laboratory device data. The tutorial dataset does not include human-subject data, personal identity information, user behavior logs, or application-layer communication content. Device labels correspond to laboratory-owned IoT devices.</p>
<p>During the tutorial, no personal wireless devices will be recorded. Any hardware interaction uses organizer-provided equipment.</p>
<p>Responsible RFF research requires controlled data collection, compliance with local radio regulations, careful handling of identity-sensitive deployments, and clear separation between laboratory benchmarks and real-world tracking scenarios.</p></div></details><details class="info" id="organizers"><summary>Organizers, contact, and citation</summary><div class="info-body"><ul><li>Jinxiao Zhu, Tokyo Denki University, Japan</li><li>Zhen Jia, Reitaku University, Japan</li><li>Wenhao Huang, Keio University, Japan</li><li>Zewei Guo, Future University Hakodate, Japan</li><li>Yin Chen, Reitaku University, Japan</li></ul><h3 id="contact">Contact</h3><p>For questions about the tutorial, please contact:</p>
<p><strong>Zhen Jia</strong> Reitaku University, Japan <a href="mailto:jiazhen0628@outlook.com">jiazhen0628@outlook.com</a></p><h3 id="citation">Citation</h3><p>If you use the dataset or reproduce the benchmark, please cite the SMoRFFI article:</p>
<p>Zewei Guo, Zhen Jia, Jinxiao Zhu, Wenhao Huang, and Yin Chen. 2026. <strong>SMoRFFI: A large-scale same-model 2.4 GHz Wi-Fi dataset and reproducible framework for RF fingerprinting.</strong> <em>Computer Networks</em>, 282, 112309. DOI: <a href="https://doi.org/10.1016/j.comnet.2026.112309">10.1016/j.comnet.2026.112309</a>.</p><p>Tutorial paper: Zhen Jia, Jinxiao Zhu, Wenhao Huang, Zewei Guo, and Yin Chen. 2026. <em>Tutorial: Building Reproducible Wi-Fi RF Fingerprinting Pipelines: Signal Collection, Datasets, and Evaluation.</em> UbiComp Companion ’26. <a href="https://doi.org/10.1145/3798063.3836754">doi:10.1145/3798063.3836754</a>.</p></div></details></section><section class="support" id="acknowledgment"><p class="eyebrow">ACKNOWLEDGMENT</p><h2>Acknowledgment</h2><p>This work was partly supported by JST Moonshot R&amp;D Grant Number JPMJMS2215, JSPS KAKENHI Grant Number JP24K07482, and the Research Promotion Program for Security Technology (Grant Number JPJ004596) of Acquisition, Technology &amp; Logistics Agency in JAPAN.</p><a class="back-top" href="#tutorial-top">Back to the top ↑</a></section>
</div></div>
<dialog class="slide-dialog" aria-label="Enlarged lecture slide"><div class="dialog-toolbar"><span class="dialog-caption"></span><button class="dialog-prev" type="button" aria-label="Previous slide">←</button><button class="dialog-next" type="button" aria-label="Next slide">→</button><button class="dialog-close" type="button">Close ×</button></div><img alt="Enlarged lecture slide"></dialog>
<div class="sr-only" id="rff-status" role="status"></div>
</div>
<script>
(function () {
  'use strict';
  const root = document.getElementById('rff-tutorial');
  if (!root) return;
  const dialog = root.querySelector('.slide-dialog');
  const states = new Map();
  let activeViewer = null;
  let returnFocus = null;
  function paint(viewer) {
    const state = states.get(viewer);
    const src = viewer.dataset.base + '/slide-' + String(state.page).padStart(2, '0') + '.webp';
    viewer.querySelector('.slide-image').src = src;
    viewer.querySelector('.slide-image').alt = viewer.getAttribute('aria-label') + ', original slide ' + state.page;
    const anchor = viewer.querySelector('.slide-image-link');
    anchor.href = src;
    anchor.setAttribute('aria-label', 'Enlarge slide ' + state.page);
    viewer.querySelector('.slide-counter').textContent = 'Slide ' + state.page + ' of 41';
    viewer.querySelector('.previous-slide').disabled = state.page === state.first;
    viewer.querySelector('.next-slide').disabled = state.page === state.last;
    const captionBox = viewer.querySelector('.slide-caption');
    if (captionBox) {
      const notes = viewer.querySelector('.slide-notes');
      const hit = notes && notes.querySelector('p[data-slide="' + state.page + '"]');
      captionBox.textContent = hit ? hit.textContent : '';
    }
    if (activeViewer === viewer && dialog.open) {
      dialog.querySelector('img').src = src;
      dialog.querySelector('img').alt = viewer.querySelector('.slide-image').alt;
      dialog.querySelector('.dialog-caption').textContent = 'Slide ' + state.page + ' of 41';
      dialog.querySelector('.dialog-prev').disabled = state.page === state.first;
      dialog.querySelector('.dialog-next').disabled = state.page === state.last;
    }
  }
  function move(viewer, amount) {
    const s = states.get(viewer);
    s.page = Math.max(s.first, Math.min(s.last, s.page + amount));
    paint(viewer);
  }
  function enlarge(viewer) {
    if (typeof dialog.showModal !== 'function') {
      window.open(viewer.querySelector('.slide-image-link').href, '_blank', 'noopener');
      return;
    }
    activeViewer = viewer;
    returnFocus = document.activeElement;
    dialog.showModal();
    paint(viewer);
    dialog.querySelector('.dialog-close').focus();
  }
  root.querySelectorAll('.slide-viewer').forEach(viewer => {
    const first = Number(viewer.dataset.first), last = Number(viewer.dataset.last);
    states.set(viewer, { first, last, page: first });
    viewer.querySelectorAll('button').forEach(b => b.hidden = false);
    viewer.querySelector('.previous-slide').addEventListener('click', () => move(viewer, -1));
    viewer.querySelector('.next-slide').addEventListener('click', () => move(viewer, 1));
    viewer.querySelector('.expand-slide').addEventListener('click', () => enlarge(viewer));
    viewer.querySelector('.slide-image-link').addEventListener('click', e => {
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      e.preventDefault(); enlarge(viewer);
    });
    viewer.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault(); move(viewer, e.key === 'ArrowRight' ? 1 : -1);
      }
    });
    paint(viewer);
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.dialog-prev').addEventListener('click', () => move(activeViewer, -1));
  dialog.querySelector('.dialog-next').addEventListener('click', () => move(activeViewer, 1));
  dialog.addEventListener('keydown', e => {
    if (activeViewer && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
      e.preventDefault(); move(activeViewer, e.key === 'ArrowRight' ? 1 : -1);
    }
  });
  dialog.addEventListener('close', () => { activeViewer = null; if (returnFocus) returnFocus.focus(); });
  dialog.addEventListener('click', e => {
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
  });
  root.querySelectorAll('.copy-button').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', async () => {
      const code = button.parentElement.querySelector('code');
      try {
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = 'Copied';
        setTimeout(() => button.textContent = 'Copy code', 1600);
      } catch (_) {
        const selection = window.getSelection();
        const range = document.createRange(); range.selectNodeContents(code);
        selection.removeAllRanges(); selection.addRange(range);
        root.querySelector('#rff-status').textContent = 'Code selected. Use your keyboard copy command.';
        button.textContent = 'Code selected';
      }
    });
  });
  function revealHash() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
    const target = document.getElementById(id);
    if (!target || !root.contains(target)) return;
    let p = target;
    while (p && p !== root) { if (p.tagName === 'DETAILS') p.open = true; p = p.parentElement; }
    requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  }
  window.addEventListener('hashchange', revealHash);
  root.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', () => {
    if (a.hash === location.hash) revealHash();
  }));
  if (location.hash) revealHash();
  const navLinks = [...root.querySelectorAll('.course-nav nav a')];
  const sections = [...root.querySelectorAll('.lesson')];
  let scheduled = false;
  function updateNav() {
    let current = sections[0];
    sections.forEach(s => { if (s.getBoundingClientRect().top < window.innerHeight * .4) current = s; });
    navLinks.forEach(a => {
      if (a.hash === '#' + current.id) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateNav); } }, { passive: true });
  updateNav();
})();

</script>
