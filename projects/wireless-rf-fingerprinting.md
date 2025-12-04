---
layout: project
title: Wireless RF Fingerprinting and Device Identification
description: "Identification and authentication of wireless devices using radiometric fingerprinting."
permalink: /projects/wireless-rf-fingerprinting/
project_id: wireless-rf-fingerprinting
image: /assets/img/projects/wireless-rf-fingerprinting-overview.png
---

<!-- # Wireless RF Fingerprinting and Device Identification -->

> Treating the wireless signals of everyday devices as a new kind of biometric for secure, seamless human–robot interaction.

![Project key image](/assets/img/projects/wireless-rf-fingerprinting-overview.png){: style="max-width: 100%; height: auto;"}
*Figure 1. Treating the wireless signals of everyday devices as a new kind of biometric for secure, seamless human–robot interaction.*
<!-- Optional: update or remove this line if you don't have an image yet. -->

---

<!-- ## Table of Contents

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

--- -->

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

1. **Large-scale RF Fingerprinting Dataset and Benchmarks**  
   Build and maintain a publicly available dataset of IEEE 802.11g Wi-Fi signals from many **same-model devices**, together with clearly defined benchmark tasks (device classification, cross-session generalization, open-set detection).

2. **Robust RF Fingerprint Modeling for Everyday Devices**  
   Develop methods to extract and model stable radiometric fingerprints from commodity wireless devices (smartphones, wearables, IoT nodes) across time, environment, and usage conditions.

3. **Open-set and Long-term Identification**  
   Design models and decision strategies that can reliably:
   - Identify known devices,
   - Reject unknown devices,
   - And maintain performance across **sessions, days, and environments**.

4. **Edge/Robot-side Deployment and Human–Robot Interaction**  
   Build a practical architecture that distributes computation across **CPU + GPU + NPU**, enabling real-time inference on robots and edge nodes, and explore how RF-based identity can support **privacy-aware human–robot collaboration** (e.g., personalized services, access control) while avoiding unnecessary sensing.

---

## 4. Technical Approach

At a high level, our approach consists of:

- **RF Sensing Layer**  
  - SDR-based receivers and embedded RF front-ends that capture physical-layer waveforms (IQ samples) from Wi-Fi, BLE, and other protocols.
  - Time-synchronized receivers to support multi-antenna and multi-point observations.

- **Signal Processing and Feature Layer**  
  - Preprocessing modules for synchronization, channel estimation, and interference rejection.
  - Normalization to separate **device-specific hardware signatures** from channel effects as much as possible.

- **Fingerprint Modeling Layer**  
  - Machine learning-based models that map short RF segments to compact **device-level feature vectors** that can run on edge hardware (CPU / GPU / NPU).  
  - Model designs and feature representations optimized for low-latency, low-power inference while still supporting tasks such as device classification and open-set / unknown-device detection.

- **Application Layer**  
  - Device identity services exposed to robots and smart environments via APIs.
  - Downstream applications such as authenticated teleoperation, personalized robot behavior, and access management.

<!-- ![System architecture](/assets/img/projects/wireless-rf-fingerprinting-architecture.png)
Optional: replace with your actual block diagram. -->


## 5. Experimental Setup

We design experiments to evaluate both **algorithmic performance** and **system behavior in realistic settings**:

![Experiment setup](/assets/img/projects/wireless-rf-fingerprinting-setup.png){: style="max-width: 100%; height: auto;"}
*Figure 2. Experimental setup for collecting IEEE 802.11g Wi-Fi preamble I/Q data from many same-model M5Stack Core2 devices in a lab environment.*

- **Environment**  
  - Lab environments with controlled layouts and interference.  
  - Office and corridor-like spaces for mobility and multi-path.  

- **Data Collection**  
  - Measurements from many personal and embedded devices (e.g., over one hundred same-model M5Stack Core2 devices), each recorded over multiple days and sessions.  
  - Collection of both stationary and mobile traces, with varying distances, orientations, and obstacles.  
  - Logging of metadata such as timestamp, protocol, device ID, and recording session.

- **Dataset Split and Tasks**  
  - Training / validation / test splits that ensure **session disjointness** (train and test data come from different days / sessions).  
  - Device-wise splits where a subset of devices is **held out** and only appears at test time to evaluate unknown-device detection.  
  - Benchmark tasks for (i) closed-set device classification, (ii) cross-session generalization, and (iii) open-set / unknown-device detection.

- **Baselines**  
  - Classical RF fingerprinting methods (e.g., handcrafted features + SVM).  
  - Deep learning baselines such as CNN-based and Transformer-based models trained on IQ sequences or RF features.  
  - Conventional biometric or access-control baselines where appropriate in scenario comparisons.


<!-- Optional: replace with actual photos or diagrams. -->

---

## 6. Results and Discussion

<!-- We are continuously updating this section as new results become available. Current findings include:
 -->

As the project progresses, we will add detailed quantitative tables, ablation studies, and visualizations of embedding spaces and decision boundaries.

<!-- Example placeholder:

- *Figure 1.* Example embedding visualization for multiple devices.  
  ![Result example](/assets/img/projects/wireless-rf-fingerprinting-result.png) -->

---
## 7. Software / Dataset

![Relationship between software and datasets](/assets/img/projects/wireless-rf-fingerprinting-code-data.png){: style="max-width: 100%; height: auto;"}

*Figure 3. Relationship between the Dockerized data-collection framework, feature-extraction notebook, and the two released datasets.*

The following software and datasets are released as companion resources to our arXiv preprint [1] on large-scale RF fingerprinting of IEEE 802.11g same-model devices.
  - [Dockerized-wifi-iq-preamble-capture](https://github.com/aiot-lab-yin/Dockerized-wifi-iq-preamble-capture) – Dockerized GNU Radio framework for IEEE 802.11g Wi-Fi preamble I/Q data collection.  
  - [RFF_Data_Calculate](https://www.kaggle.com/code/zeweiguo/rff-data-calculate) – Kaggle notebook for RF feature calculation and baseline RF fingerprinting experiments.  
  - [RFFI-IQ_only-wifi-802.11g-2.4G-123-m5stack](https://www.kaggle.com/datasets/yinchen1986/rffi-123-m5stack-iq-wifi-802-11g-2-4g) – Kaggle dataset of raw IEEE 802.11g preamble I/Q samples from 123 same-model M5Stack Core2 devices.  
  - [RFFI-kf_feature-IQ-wifi-802.11g-2.4G-123-m5stack](https://www.kaggle.com/datasets/yinchen1986/rffi-kf-feature-iq-wifi-802-11g-2-4g-123-m5stack) – Kaggle dataset of derived RF features aligned with the same devices and frames.



## 8. Publications

<!-- Publications and outputs related to this project will be listed here.  
If you manage publications in `_data/publications.yml` and tag them with this project's `project_id`, they can be automatically included: -->

{% include project-publications.html project_id=page.project_id %}

---

## 9. Team

This project is led by the [**AIoT Lab**](/home/) at Keio University Shonan Fujisawa Campus (SFC), in collaboration with partner laboratories.

---

## 10. Supporting Projects

<!-- If you manage supporting funds in `_data/funds.yml` and link them via `projects: [project-id]`, you can automatically list them here: -->

{% include project-funds.html project_id=page.project_id %}

<!-- > This project is supported in part by internal funds and external grants related to wireless communications, edge AI, and human–robot interaction. -->