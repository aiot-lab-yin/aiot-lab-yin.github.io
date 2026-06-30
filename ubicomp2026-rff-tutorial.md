# Building Reproducible Wi-Fi RF Fingerprinting Pipelines: Signal Collection, Datasets, and Evaluation

**UbiComp/ISWC 2026 Tutorial**  
**Shanghai, China**  
**Workshop and tutorial days:** October 11-12, 2026  
**Format:** Half-day hands-on tutorial  
**Primary case study:** SMoRFFI, a same-model 2.4 GHz Wi-Fi RF fingerprinting dataset

<p align="center">
  <a href="#software-setup"><strong>Setup</strong></a> | 
  <a href="#hands-on-labs"><strong>Hands-on Labs</strong></a> | 
  <a href="#dataset-case-study"><strong>Dataset</strong></a> | 
  <a href="#schedule"><strong>Schedule</strong></a> | 
  <a href="#resources"><strong>Resources</strong></a>
</p>

## Quick Facts

| Item | Information |
| --- | --- |
| Topic | Wi-Fi RF fingerprinting for IoT device identification |
| Tutorial style | Short lectures, guided notebooks, hardware walkthrough, debugging, and discussion |
| Target participants | Students, researchers, and practitioners in ubiquitous sensing, IoT systems, wireless sensing, edge intelligence, and physical-layer security |
| Hands-on requirement | Laptop and web browser |
| Local execution | Python 3.10 or later, Jupyter, NumPy, pandas, scikit-learn, matplotlib |
| SDR experience | No prior SDR experience is required for the hands-on labs |
| Main data source | SMoRFFI Wi-Fi RFF records and extracted RF features |
| Expected outputs | Loaded dataset, feature visualizations, baseline model, accuracy report, confusion matrix, and reproducibility checklist |

## Overview

This tutorial teaches a reproducible Wi-Fi radio frequency fingerprinting (RFF) workflow for IoT device identification. Participants follow the complete path from Wi-Fi signal acquisition concepts to dataset inspection, RF feature construction, baseline identification, error analysis, and reproducible reporting.

The hands-on part uses prepared Wi-Fi RFF records, extracted RF features, executable notebooks, and reference outputs. Participants can complete the labs with a laptop. The instructors will demonstrate the acquisition workflow with SDR hardware and GNU Radio, while the executable labs use prepared data to keep the session stable.

The tutorial is built around the SMoRFFI dataset and framework. SMoRFFI was collected from 123 same-model commercial IEEE 802.11g IoT devices and contains 35.42 million raw I/Q preamble samples with 1.85 million extracted RF features. The accompanying framework covers data collection, feature extraction, and benchmark evaluation.

## Why This Tutorial Matters

RF fingerprinting uses transmitter-dependent hardware imperfections in radio signals for device identification. This physical-layer signal provides a useful complement to software-level identifiers such as MAC addresses, which can be changed, randomized, or reused.

Reproducible RFF experiments require several pieces of practical knowledge:

* Wi-Fi packet structure and preamble records;
* SDR-based collection and synchronization;
* signal preprocessing and feature construction;
* dataset organization and label checking;
* train-test split design and leakage control;
* baseline reproduction, debugging, and reporting.

Same-model device identification is a demanding learning setting. Devices share the same vendor and model, so easy model-level differences are removed. Participants need to examine feature behavior, confusion patterns, sample budgets, and evaluation choices.

## Learning Outcomes

By the end of the tutorial, participants will be able to:

* explain the Wi-Fi RFF acquisition process, including packet transmission, preamble capture, and record generation;
* load Wi-Fi preamble and RF feature records into a reproducible notebook workflow;
* inspect device labels, sample counts, feature fields, and basic data quality checks;
* compute or interpret selected RF features, including CFO, phase error, magnitude error, I/Q gain imbalance, and fractal dimension;
* visualize feature distributions and device-level separability;
* train a baseline device-identification model and report accuracy, recall, F1-score, and confusion patterns;
* compare intermediate outputs with reference results;
* identify common reproducibility risks, including feature-format mismatch, label leakage, split leakage, inconsistent random seeds, and unreported preprocessing choices;
* adapt the workflow to a new wireless sensing or physical-layer identification dataset.

## End-to-End Pipeline

<p align="center">
  <img src="/assets/img/ubicomp2026-rff-tutorial/rff-pipeline.png" alt="End-to-end Wi-Fi RFF pipeline" style="max-width: 88%;">
</p>

The tutorial follows four pipeline stages.

| Stage | Main Question | Tutorial Output |
| --- | --- | --- |
| 1. Wireless signal acquisition | How are Wi-Fi preamble records captured from transmitters? | Acquisition workflow diagram and hardware walkthrough notes |
| 2. RF feature construction | Which features describe transmitter-dependent signal behavior? | Feature table, visualization, and quality checks |
| 3. Recognition and decision | How does a baseline model identify devices from RF features? | Trained classifier, prediction table, and metrics |
| 4. Evaluation and reporting | How should an RFF experiment be checked and reported? | Accuracy, recall, F1-score, confusion matrix, and reproducibility checklist |

## Hands-on Labs

The labs are designed for a half-day tutorial and can also be used as a student practice sequence before the conference.

### Lab 0: Environment Check

**Goal:** confirm that the notebook environment can run the tutorial materials.

Participants will:

* open the cloud notebook or local Jupyter environment;
* import NumPy, pandas, scikit-learn, and matplotlib;
* load a small sample file;
* verify the expected directory structure;
* compare the first checkpoint output with the provided reference output.

**Expected output:** a working notebook environment and a passed setup check.

### Lab 1: Dataset Orientation

**Goal:** understand the structure of the Wi-Fi RFF records.

Participants will:

* load the prepared dataset subset;
* inspect device labels and MAC address fields;
* count samples per device;
* identify raw preamble fields and RF feature fields;
* check missing values, duplicated records, and unexpected label counts.

**Expected output:** a dataset summary table with device counts, sample counts, and feature names.

### Lab 2: Preamble and Feature Inspection

**Goal:** connect Wi-Fi preamble structure with RF feature construction.

Participants will:

* inspect preamble-related I/Q records;
* review the IEEE 802.11g short training sequence, guard interval, and long training sequence at the level needed for this lab;
* examine coarse CFO, fine CFO, combined CFO, phase error, magnitude error, I/Q gain imbalance, and fractal dimension fields;
* plot selected feature distributions across devices;
* discuss which features show clear separation and which features overlap.

**Expected output:** feature plots and a short interpretation of separability.

### Lab 3: Baseline Device Identification

**Goal:** reproduce a baseline RF fingerprinting experiment.

Participants will:

* split the dataset according to the tutorial notebook;
* train a Random Forest baseline;
* report accuracy, recall, and F1-score;
* generate a confusion matrix;
* compare their result with reference output from the tutorial package.

**Expected output:** trained baseline, metric table, and confusion matrix.

### Lab 4: Debugging and Reproducibility Audit

**Goal:** learn how to diagnose RFF experiments.

Participants will:

* check data loading errors and feature-format mismatches;
* examine label leakage and split leakage risks;
* fix inconsistent random seeds and environment differences;
* compare intermediate outputs with instructor-provided checkpoints;
* prepare a concise reproducibility report.

**Expected output:** a completed checklist that records data version, feature set, split design, model settings, metrics, and known limitations.

### Optional Lab 5: Acquisition Workflow Extension

**Goal:** understand how the prepared records were collected and how the workflow can be extended.

Participants will:

* review the USRP B210 and GNU Radio capture workflow;
* inspect the Dockerized acquisition repository structure;
* map each acquisition step to the dataset fields used in the notebooks;
* discuss how to collect a new controlled dataset.

**Expected output:** a collection plan outline for a new RFF experiment.

## Dataset Case Study

The tutorial uses SMoRFFI as its main case study.

| Property | SMoRFFI Setting |
| --- | --- |
| Signal type | 2.4 GHz Wi-Fi, IEEE 802.11g |
| Device scale | 123 same-model commercial IoT devices |
| Transmitter platform | M5Stack Core2 |
| Receiver | USRP B210 |
| AP | Huawei WS7100 V2 |
| Capture software | GNU Radio with modified IEEE 802.11 a/g/p receiver components |
| Collection size | 1000 frames per transmitter |
| Raw data | 35.42 million raw I/Q preamble samples |
| Feature data | 1.85 million extracted RF features |
| Sampling rate | 20 MS/s |
| Channel and bandwidth | Wi-Fi Channel 6, 20 MHz bandwidth |
| Environment | Controlled indoor office, static short-distance setup |
| Baseline | Random Forest classifier |
| Reported baseline accuracy | 88.6 percent with Kalman filtering in 5-fold evaluation |

### Data Files

SMoRFFI provides two dataset views.

| Dataset View | Contents | Tutorial Use |
| --- | --- | --- |
| Raw I/Q dataset | MAC address and preamble samples | Signal inspection and acquisition-to-record mapping |
| Feature dataset | Device labels, MAC addresses, preamble fields, LTS samples, CFO features, phase error, magnitude error, I/Q gain imbalance, and fractal dimension | Feature visualization, baseline training, and evaluation |

### Feature Groups

The feature notebook focuses on features that are commonly used in physical-layer identification:

* **Frequency-related features:** coarse CFO, fine CFO, and combined CFO;
* **Constellation-related features:** phase error and magnitude error;
* **I/Q impairment features:** I/Q gain imbalance;
* **Shape and complexity features:** fractal dimension of processed long training sequences.

The SMoRFFI baseline analysis reports that frequency-related features contribute strongly to Random Forest identification, with CFO, coarse CFO, and fine CFO ranked as the top three features by importance.

### Dataset Scope

SMoRFFI is designed for controlled benchmarking of device-feature-based RF fingerprinting in an indoor, static, short-distance, high-SNR setting. Results from this dataset should be reported with that scope. Cross-environment deployment, long-term temporal robustness, and mobile-channel robustness require additional evaluation data.

## Hardware Demonstration

The instructors will demonstrate the acquisition workflow used to create Wi-Fi RFF records.

<p align="center">
  <img src="/assets/img/ubicomp2026-rff-tutorial/acquisition-workflow.png" alt="Wi-Fi RFF signal acquisition workflow" style="max-width: 88%;">
</p>

The demonstration covers:

* Wi-Fi channel configuration;
* packet transmission from M5Stack Core2 devices;
* USRP B210 signal capture;
* GNU Radio preamble extraction;
* CSV record generation;
* feature extraction and benchmark evaluation.

Participants do not need to bring SDR hardware. The hands-on labs use prepared data.

## Schedule

| Time | Module | Activity | Output |
| --- | --- | --- | --- |
| 0-15 min | Task Introduction | Define RF fingerprinting for IoT device identification and introduce the reproducibility problem. | Task definition and pipeline map |
| 15-40 min | Signal and Feature Introduction | Introduce Wi-Fi preamble records and the RF features used in the labs. | Feature reference sheet |
| 40-60 min | Data Acquisition Pipeline Walkthrough | Present the USRP B210, GNU Radio, Wi-Fi AP, and M5Stack collection workflow. | Acquisition workflow notes |
| 60-90 min | Lab 1: Load and Explore the Dataset | Load the prepared dataset subset, inspect labels, count records, and identify feature fields. | Dataset summary table |
| 90-110 min | Coffee Break and Hardware Display | Inspect the USRP B210, M5Stack transmitter, and acquisition setup materials. | Hardware Q&A |
| 110-140 min | Lab 2: Construct and Visualize RF Features | Compute or inspect selected RF features and visualize distributions across devices. | Feature plots |
| 140-170 min | Lab 3: Build and Evaluate the Baseline | Train the baseline classifier, generate predictions, and inspect accuracy and confusion patterns. | Metrics and confusion matrix |
| 170-190 min | Debug and Output Checking | Compare notebook outputs with reference outputs and resolve setup issues. | Passed checkpoints |
| 190-210 min | Wrap-up and Open Discussion | Discuss workflow adaptation, dataset scope, reproducible reporting, and open research problems. | Reproducibility checklist |

## Student Practice Track

For local students who use this page before the conference, the same materials can be studied as a guided practice sequence.

| Practice Unit | Suggested Duration | What to Submit |
| --- | --- | --- |
| Unit 1: Read the task and run setup check | 30-45 min | Screenshot or log of a successful environment check |
| Unit 2: Dataset inspection | 45-60 min | Device count table and feature list |
| Unit 3: Feature visualization | 60-90 min | Two plots and a short interpretation |
| Unit 4: Baseline reproduction | 60-90 min | Metric table and confusion matrix |
| Unit 5: Reproducibility report | 45-60 min | One-page report with data version, split design, model setting, metrics, and limitations |

Suggested student report structure:

1. **Task:** identify same-model Wi-Fi transmitters from RF features.
2. **Data:** record dataset view, number of devices, samples per device, and selected features.
3. **Method:** describe preprocessing, split design, baseline model, and random seed.
4. **Results:** report accuracy, recall, F1-score, and confusion matrix.
5. **Diagnosis:** discuss confusing device pairs and feature-overlap observations.
6. **Reproducibility:** list package versions, data file names, and output checkpoints.
7. **Scope:** state which claims are supported by the controlled dataset setting.

## Software Setup

Participants may use the browser-based notebook environment prepared by the organizers or run the notebooks locally.

For local execution, install:

* Python 3.10 or later;
* JupyterLab or Jupyter Notebook;
* NumPy;
* pandas;
* scikit-learn;
* matplotlib.

Recommended pre-tutorial check:

```bash
python --version
python -c "import numpy, pandas, sklearn, matplotlib; print('tutorial environment OK')"
```

The acquisition demonstration uses Docker and GNU Radio. Docker is needed only for participants who want to reproduce the acquisition workflow after the tutorial.

## Reproducibility Checklist

Use this checklist when running or adapting the notebooks.

| Item | What to Record |
| --- | --- |
| Data version | Dataset name, download date, subset name, and file count |
| Device labels | Number of devices, label field, and sample count per device |
| Feature set | Included features and any filtering or smoothing |
| Split design | Train-test split, cross-validation setting, random seed, and device/sample grouping |
| Model | Algorithm, hyperparameters, software versions |
| Metrics | Accuracy, recall, F1-score, confusion matrix, and per-device results when available |
| Reference check | Matching checkpoint outputs or documented differences |
| Scope | Environment, channel setting, hardware setting, and limitations |

## Common Pitfalls

| Pitfall | Symptom | Check |
| --- | --- | --- |
| Feature-format mismatch | Notebook fails during parsing or model input construction | Verify column names and numeric conversion |
| Label leakage | Very high accuracy with suspicious split design | Split after checking labels and sample grouping |
| Unbalanced subset | Some devices have fewer records | Count samples per device before training |
| Random seed mismatch | Metrics differ across runs | Set and report all random seeds |
| Unsupported claim | Results are presented as deployment-ready | Report the controlled dataset scope |
| Missing checkpoint | Later notebook cells fail silently | Compare intermediate outputs with reference files |

## Responsible Use

The tutorial uses controlled laboratory device data. The tutorial dataset does not include human-subject data, personal identity information, user behavior logs, or application-layer communication content. Device labels correspond to laboratory-owned IoT devices.

During the tutorial, no personal wireless devices will be recorded. Any hardware interaction uses organizer-provided equipment.

Responsible RFF research requires controlled data collection, compliance with local radio regulations, careful handling of identity-sensitive deployments, and clear separation between laboratory benchmarks and real-world tracking scenarios.

## Materials

The tutorial package will include:

* lecture slides;
* executable Jupyter notebooks;
* setup instructions;
* a prepared Wi-Fi RFF dataset subset;
* reference outputs for notebook checkpoints;
* acquisition demonstration materials;
* reproducibility checklist and student report template.

Material links will be posted before the tutorial.

## Resources

* Official UbiComp/ISWC 2026 Workshops and Tutorials page: [https://www.ubicomp.org/ubicomp-iswc-2026/workshops-and-tutorials-2026/](https://www.ubicomp.org/ubicomp-iswc-2026/workshops-and-tutorials-2026/)
* Current tutorial page: [https://www.aiotlabs.org/ubicomp2026-rff-tutorial/](https://www.aiotlabs.org/ubicomp2026-rff-tutorial/)
* Acquisition code: [Dockerized-wifi-iq-preamble-capture](https://github.com/aiot-lab-yin/Dockerized-wifi-iq-preamble-capture)
* SMoRFFI article DOI: [10.1016/j.comnet.2026.112309](https://doi.org/10.1016/j.comnet.2026.112309)
* SMoRFFI dataset subset and notebook package: links will be posted after release validation.

## Organizers

* Jinxiao Zhu, Tokyo Denki University, Japan
* Zhen Jia, Reitaku University, Japan
* Wenhao Huang, Keio University, Japan
* Zewei Guo, Future University Hakodate, Japan
* Yin Chen, Reitaku University, Japan

## Contact

For questions about the tutorial, please contact:

**Zhen Jia**  
Reitaku University, Japan  
[jiazhen0628@outlook.com](mailto:jiazhen0628@outlook.com)

## Citation

If you use the dataset or reproduce the benchmark, please cite the SMoRFFI article:

Zewei Guo, Zhen Jia, Jinxiao Zhu, Wenhao Huang, and Yin Chen. 2026. **SMoRFFI: A large-scale same-model 2.4 GHz Wi-Fi dataset and reproducible framework for RF fingerprinting.** *Computer Networks*, 282, 112309. DOI: [10.1016/j.comnet.2026.112309](https://doi.org/10.1016/j.comnet.2026.112309).

## Updates

Slides, notebooks, setup instructions, reference outputs, and additional attendee information will be posted on this page before the tutorial.
