---
layout: page
title: "UbiComp/ISWC 2026 Tutorial"
permalink: /ubicomp2026-rff-tutorial/
---

## Building Reproducible Wi-Fi RF Fingerprinting Pipelines: Signal Collection, Datasets, and Evaluation

**UbiComp/ISWC 2026 Tutorial**
**Shanghai, China**
**Format:** Half-day hands-on tutorial

### Quick Facts

| Item                 | Information                                                                            |
| -------------------- | -------------------------------------------------------------------------------------- |
| Topic                | Wi-Fi RF fingerprinting for IoT device identification                                  |
| Format               | Short lectures, guided notebooks, hardware walkthrough, debugging, and open discussion |
| Main case study      | SMoRFFI Wi-Fi RFF dataset                                                              |
| Participant hardware | Laptop only                                                                            |
| Prior SDR experience | Not required                                                                           |
| Materials            | Slides, notebooks, dataset subset, setup guide, and reference outputs                  |

## Overview

This tutorial introduces a reproducible Wi-Fi radio frequency fingerprinting (RFF) workflow for IoT device identification. Participants will learn the complete process from Wi-Fi signal collection and dataset exploration to RF feature construction, baseline model evaluation, debugging, and workflow adaptation.

The tutorial uses prepared Wi-Fi RFF records, extracted RF features, executable notebooks, and reference outputs. The goal is to help participants understand both the technical workflow and the evaluation practice required for reproducible RFF experiments.

## What Participants Will Do

During the tutorial, participants will:

* inspect Wi-Fi RFF records and device labels;
* construct and visualize selected RF features;
* train and evaluate a baseline identification model;
* analyze accuracy, confusion patterns, and reproducibility issues;
* compare intermediate outputs with reference results;
* discuss workflow adaptation and open challenges in reproducible RFF research.

## Tutorial Flow

The tutorial follows an end-to-end RFF pipeline.

<p align="center">
  <img src="/assets/img/ubicomp2026-rff-tutorial/rff-pipeline.png" alt="End-to-end Wi-Fi RFF pipeline" style="max-width: 85%;">
</p>

The main stages are:

1. **Wireless Signal Acquisition**
   Wi-Fi packet transmission, preamble capture, and record generation.

2. **RF Feature Construction**
   Extraction and interpretation of selected preamble-based RF features.

3. **Recognition and Decision**
   Baseline device-identification model training and prediction.

4. **Evaluation and Deployment**
   Accuracy analysis, confusion patterns, reproducibility checks, workflow adaptation, and open discussion.

## Schedule

| Time        | Module                                            | Activity                                                                                                                                                                            |
| ----------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0–15 min    | Task Introduction                                 | Define the target task: RFF-based identification for IoT devices.                                                                                                                   |
| 15–40 min   | Signal and Feature Introduction                   | Introduce the Wi-Fi preamble and RF feature knowledge needed for the lab.                                                                                                           |
| 40–60 min   | Data Acquisition Pipeline Walkthrough             | Present a data acquisition pipeline with USRP B210, GNU Radio, and M5Stack, then explain the data-collection process of the released Wi-Fi records.                                 |
| 60–90 min   | Lab 1: Load and Explore the Dataset               | Load the prepared Wi-Fi RFF dataset subset, explore device labels and preamble records, and identify RF feature fields.                                                             |
| 90–110 min  | Coffee Break and Hardware Display                 | Inspect the USRP B210, M5Stack transmitter, and acquisition setup materials.                                                                                                        |
| 110–140 min | Lab 2: Construct and Visualize RF Features        | Compute selected RF features and visualize feature distributions.                                                                                                                   |
| 140–170 min | Lab 3: Build and Evaluate the Baseline            | Build and run a device-identification baseline using prepared notebooks. Train a baseline classifier, generate identification outputs, and inspect accuracy and confusion patterns. |
| 170–190 min | Debug and Output Checking                         | Compare intermediate results with instructor-provided reference outputs. Resolve setup and implementation issues.                                                                   |
| 190–210 min | Wrap-up, Workflow Adaptation, and Open Discussion | Recap the hands-on workflow, discuss adaptation to participants’ own datasets, and identify open challenges in reproducible RFF research.                                           |

## Hardware Demonstration

The instructors will demonstrate a Wi-Fi RFF data-acquisition workflow using USRP B210, GNU Radio, Wi-Fi access points, M5Stack transmitters, and PC-based data collection.

<p align="center">
  <img src="/assets/img/ubicomp2026-rff-tutorial/acquisition-workflow.png" alt="Wi-Fi RFF signal acquisition workflow" style="max-width: 85%;">
</p>

The hands-on labs will use prepared data, so participants do not need to bring SDR hardware.

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

## Responsible Use

The tutorial uses controlled laboratory device data. No personal wireless devices will be recorded during the session. The tutorial will also discuss responsible use of RFF, including local radio regulations, controlled data collection, and privacy-aware deployment.

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
