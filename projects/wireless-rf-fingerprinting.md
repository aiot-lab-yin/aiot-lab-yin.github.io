---
layout: page
title: Wireless RF Fingerprinting and Device Identification
description: "Identification and authentication of wireless devices using radiometric fingerprinting."
permalink: /projects/wireless-rf-fingerprinting/
project_id: wireless-rf-fingerprinting
---

# Wireless RF Fingerprinting and Device Identification

> Treating the wireless signals of everyday devices as a new kind of biometric for secure, seamless human–robot interaction.

![Project key image](/assets/img/projects/wireless-rf-fingerprinting-overview.png)
<!-- Optional: update or remove this line if you don't have an image yet. -->

---

## Table of Contents

1. [Overview](#1-overview)
2. [Background and Motivation](#2-background-and-motivation)
3. [Research Goals](#3-research-goals)
4. [Technical Approach](#4-technical-approach)
   - [System Architecture](#41-system-architecture)
   - [Core Methods](#42-core-methods)
   - [Implementation](#43-implementation)
5. [Experimental Setup](#5-experimental-setup)
6. [Results and Discussion](#6-results-and-discussion)
7. [Publications and Outputs](#7-publications-and-outputs)
8. [Team](#8-team)
9. [Supporting Projects](#9-supporting-projects)

---

## 1. Overview

This project explores how **radiometric fingerprints** of wireless devices can be used as a new kind of **biometric signal** for identifying and authenticating people in the physical world.

Instead of relying only on passwords, cards, or cameras, we use the subtle, device-specific distortions that appear in the **physical-layer waveforms** transmitted by smartphones, wearables, and IoT devices. By combining these fingerprints with deep learning and edge computing, we aim to:

- Continuously and unobtrusively recognize **who is present** in a space based on the devices they carry.
- Enable **robots and smart environments** to cooperate with humans in a secure and personalized way.
- Provide an additional layer of **privacy-aware authentication**, without requiring the user to present a face or touch a sensor.

Our long-term vision is a platform where robots and cyber-physical systems can safely interact with people using their everyday wireless devices as a secure, ambient identity signal.

---

## 2. Background and Motivation

Wireless devices are now tightly coupled to individuals: most people carry a smartphone, smartwatch, earphones, and other connected devices throughout the day. At the same time, these devices emit rich RF signals (Wi-Fi, BLE, etc.) that already pervade our environments.

Conventional authentication approaches (passwords, ID cards, face recognition) have several limitations:

- They are **intrusive** or interrupt user behavior.
- They often rely on **single-modal sensors** with line-of-sight constraints.
- They raise **privacy concerns**, especially for camera-based systems.
- They are not well integrated into **robotic systems** that need continuous, low-latency identity information.

Prior work on RF fingerprinting has shown that it is possible to distinguish devices based on hardware imperfections, but:

- Many methods are evaluated only in **controlled lab conditions**.
- **Long-term stability**, **mobility**, and **open-set recognition** (rejecting unknown devices) remain challenging.
- System-level integration with **robots, edge AI hardware, and multi-modal sensing** has rarely been explored.

Our key motivation is to bridge this gap by:

- Treating RF fingerprints as a **first-class biometric signal**, tightly coupled to humans.
- Designing a full **end-to-end system** that spans signal processing, deep learning, edge deployment, and robotic interaction.
- Understanding how robust RF-based identity can be in **realistic, dynamic environments**.

---

## 3. Research Goals

We structure this project around the following goals:

1. **RF Fingerprint Modeling for Everyday Devices**  
   Develop methods to extract and model stable radiometric fingerprints from commodity wireless devices (smartphones, wearables, IoT nodes) across time, environment, and usage conditions.

2. **Open-set and Long-term Identification**  
   Design models and decision strategies that can reliably:
   - Identify known devices,
   - Reject unknown devices,
   - And maintain performance over **weeks to months**.

3. **Edge/Robot-side Deployment and Heterogeneous Computing**  
   Build a practical architecture that distributes computation across **CPU + GPU + NPU**, enabling real-time inference on robots and edge nodes.

4. **Privacy-aware Human–Robot Interaction**  
   Demonstrate how RF fingerprints can be used in **human–robot collaboration scenarios** (e.g., personalized services, access control) while respecting privacy and avoiding unnecessary sensing.

---

## 4. Technical Approach

### 4.1 System Architecture

At a high level, our system consists of:

- **RF Sensing Layer**  
  - SDR-based receivers and embedded RF front-ends that capture physical-layer waveforms (IQ samples) from Wi-Fi, BLE, and other protocols.
  - Time-synchronized receivers to support multi-antenna and multi-point observations.

- **Signal Processing and Feature Layer**  
  - Preprocessing modules for synchronization, channel estimation, and interference rejection.
  - Normalization to separate **device-specific hardware signatures** from channel effects as much as possible.

- **Deep Fingerprint Embedding Layer**  
  - Neural encoders (CNNs and Transformer-based models) that map short RF segments to a compact **device embedding**.
  - Auxiliary heads for classification, open-set detection, and domain adaptation.

- **Application Layer**  
  - Device identity services exposed to robots and smart environments via APIs.
  - Downstream applications such as authenticated teleoperation, personalized robot behavior, and access management.

![System architecture](/assets/img/projects/wireless-rf-fingerprinting-architecture.png)
<!-- Optional: replace with your actual block diagram. -->

### 4.2 Core Methods

Some of the key technical components include:

- **Radiometric Fingerprint Extraction**  
  - Using preamble-based segments (e.g., Wi-Fi training fields, BLE advertising packets) to obtain device-specific patterns.
  - Applying channel equalization and denoising to reduce environment-induced variability.

- **Deep Representation Learning**  
  - Supervised classification models for known devices using CNN/Transformer architectures on IQ sequences or derived features.
  - **Autoencoder and VAE-based models** for unknown-device detection, using reconstruction error and representation consistency as signals.
  - **Open-set recognition** strategies combining thresholding, calibration, and ensemble scoring.

- **Temporal and Session Robustness**  
  - Training on multi-session data collected over days to months, with diverse positions, orientations, and interference.
  - Domain adaptation and contrastive learning techniques to improve invariance to channel and environment changes.

- **Heterogeneous Edge Computing**  
  - Partitioning models and pipelines across **CPU (control + preprocessing)**, **GPU (training and heavy inference)**, and **NPU (low-power inference on robots and embedded devices)**.
  - Profiling latency and power to design deployable models for real-time human–robot interaction.

### 4.3 Implementation

Our prototype implementations include:

- **Hardware**  
  - Software Defined Radios (e.g., USRP series) for flexible waveform capture.
  - Embedded platforms and robots equipped with Wi-Fi/BLE receivers and NPUs.
  - Testbeds in lab and semi-public spaces where people move with their personal devices.

- **Software**  
  - RF front-end and data collection implemented with **GNU Radio** and custom SDR scripts.
  - Model training and evaluation using **PyTorch** and related ML tooling.
  - Containerized deployments using **Docker** to ensure reproducible experiments and portable edge images.

- **Integration**  
  - Identity services exposed via APIs that can be called from robotic middleware.
  - Logging and monitoring infrastructure for long-term deployments and field trials.

---

## 5. Experimental Setup

We design experiments to evaluate both **algorithmic performance** and **system behavior in realistic settings**:

- **Environment**  
  - Lab environments with controlled layouts and interference.
  - Office and corridor-like spaces for mobility and multi-path.
  - Robot-equipped spaces where the robot acts as a mobile RF sensor.

- **Data Collection**  
  - Measurements from tens of personal devices (smartphones, wearables, IoT nodes), each recorded over multiple days and sessions.
  - Collection of both stationary and mobile traces, with varying distances, orientations, and obstacles.
  - Logging of metadata such as timestamp, location, protocol, and device role (owner / non-owner).

- **Dataset Split**  
  - Training / validation / test splits that ensure **session disjointness** (train and test data come from different days / sessions).
  - Open-set splits where a subset of devices is **held out** and only appears at test time to evaluate unknown-device detection.

- **Baselines**  
  - Classical RF fingerprinting methods (e.g., handcrafted features + SVM).
  - Pure ID-based approaches without RF fingerprinting (e.g., MAC address only, where applicable).
  - Conventional biometric or access-control baselines where appropriate in scenario comparisons.

We plan to release anonymized versions of selected datasets and benchmarks as the project matures.

![Experiment setup](/assets/img/projects/wireless-rf-fingerprinting-setup.jpg)
<!-- Optional: replace with actual photos or diagrams. -->

---

## 6. Results and Discussion

We are continuously updating this section as new results become available. Current findings include:

- **High Device-level Identification Accuracy**  
  - Deep fingerprint embeddings can distinguish devices with high accuracy under moderate mobility and interference conditions.

- **Open-set and Unknown-device Rejection**  
  - Autoencoder-based models and thresholding strategies achieve promising **AUC/EER** performance for unknown-device detection, even when test sessions are collected weeks after training.

- **Robustness to Environment Changes**  
  - With appropriate preprocessing and training strategies, the model maintains useful performance across different rooms and layouts, though extreme channel changes remain challenging.

- **System-level Insights**  
  - Edge deployment on heterogeneous CPU+GPU+NPU platforms demonstrates that **real-time identification** is feasible for human–robot interaction scenarios, with acceptable latency and power budgets.

As the project progresses, we will add detailed quantitative tables, ablation studies, and visualizations of embedding spaces and decision boundaries.

Example placeholder:

- *Figure 1.* Example embedding visualization for multiple devices.  
  ![Result example](/assets/img/projects/wireless-rf-fingerprinting-result.png)

---

## 7. Publications and Outputs

Publications and outputs related to this project will be listed here.  
If you manage publications in `_data/publications.yml` and tag them with this project's `project_id`, they can be automatically included:

{% raw %}{% include project-publications.html project_id=page.project_id %}{% endraw %}

Additional outputs (software, datasets, demos) will appear as they become available:

- **Software / Dataset (planned)**  
  - GitHub repository for data collection and model training code.  
  - Public benchmark dataset for RF fingerprinting and open-set device identification.

---

## 8. Team

This project is led by the **AIoT Lab** at Keio University Shonan Fujisawa Campus (SFC), in collaboration with partner laboratories.

> For a full list of members, see the [Members](/members/) page.

---

## 9. Supporting Projects

If you manage supporting funds in `_data/funds.yml` and link them via `projects: [project-id]`, you can automatically list them here:

{% raw %}{% include project-funds.html project_id=page.project_id %}{% endraw %}

> This project is supported in part by internal funds and external grants related to wireless communications, edge AI, and human–robot interaction.