---

layout: page
title: UbiComp/ISWC 2026 Tutorial
subtitle: Building Reproducible Wi-Fi RF Fingerprinting Pipelines
permalink: /ubicomp2026-rff-tutorial/
-------------------------------------

## Building Reproducible Wi-Fi RF Fingerprinting Pipelines: Signal Collection, Datasets, and Evaluation

**UbiComp/ISWC 2026 Tutorial**
**Shanghai, China**
**Format: Half-day hands-on tutorial**

This tutorial provides a hands-on introduction to reproducible Wi-Fi radio frequency fingerprinting (RFF) pipelines for IoT device identification. Participants will learn the complete workflow from Wi-Fi signal collection and dataset exploration to RF feature construction, baseline model evaluation, and open-set device interaction.

The tutorial uses SMoRFFI as the main teaching case study. The hands-on sessions will use prepared Wi-Fi RFF records, extracted RF features, executable notebooks, and reference outputs.

## Tutorial Flow

The tutorial is organized around four main stages:

1. **Wireless Signal Acquisition**
   Wi-Fi packet transmission, preamble capture, and record generation using USRP B210, GNU Radio, Wi-Fi access points, and M5Stack devices.

2. **RF Feature Construction**
   Feature extraction and interpretation for Wi-Fi RFF experiments, including selected preamble-based RF features.

3. **Recognition and Decision**
   Baseline device-identification model training, prediction, and result inspection.

4. **Evaluation and Deployment**
   Accuracy analysis, confusion patterns, reproducibility issues, and open-set device interaction.

## Schedule

| Time        | Module                            | Activity                                                                                   |
| ----------- | --------------------------------- | ------------------------------------------------------------------------------------------ |
| 0–15 min    | Task Introduction                 | Define the target task: RFF-based identification for IoT devices.                          |
| 15–40 min   | Signal and Feature Introduction   | Introduce Wi-Fi preamble and RF feature knowledge.                                         |
| 40–60 min   | Data Acquisition Walkthrough      | Present the acquisition pipeline with USRP B210, GNU Radio, Wi-Fi AP, and M5Stack devices. |
| 60–90 min   | Lab 1                             | Load and explore the prepared Wi-Fi RFF dataset subset.                                    |
| 90–110 min  | Coffee Break and Hardware Display | Inspect the acquisition setup and hardware.                                                |
| 110–140 min | Lab 2                             | Construct and visualize selected RF features.                                              |
| 140–170 min | Lab 3                             | Build and evaluate a baseline identification model.                                        |
| 170–185 min | Debug Clinic                      | Check outputs and resolve common setup issues.                                             |
| 185–205 min | Lab 4                             | Demonstrate open-set device identification and unseen-device rejection.                    |
| 205–210 min | Wrap-up                           | Recap the workflow and discuss future use.                                                 |

## Target Audience

This tutorial is suitable for researchers, students, and practitioners interested in ubiquitous sensing, IoT systems, wireless sensing, RF fingerprinting, physical-layer device identification, and reproducible wireless experiments.

## Prerequisites

Participants are expected to have:

* basic Python programming experience;
* basic familiarity with supervised machine learning.

Prior experience with software-defined radios, GNU Radio, IEEE 802.11 signal processing, or RF fingerprinting is optional.

## Materials

The tutorial materials will include:

* lecture slides;
* executable Jupyter notebooks;
* setup instructions;
* reference outputs;
* a prepared Wi-Fi RFF dataset subset;
* signal-acquisition demonstration materials.

Material links will be released before the tutorial.

## Software Setup

Participants may run the hands-on notebooks locally or through a browser-based cloud notebook environment prepared by the organizers.

For local execution, the expected software environment includes:

* Python 3.10 or later;
* JupyterLab or Jupyter Notebook;
* NumPy;
* pandas;
* scikit-learn;
* matplotlib.

Detailed setup instructions will be released before the tutorial.

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

## Updates

Slides, notebooks, setup instructions, and additional attendee information will be posted on this page before the tutorial.
