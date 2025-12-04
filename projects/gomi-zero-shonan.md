---
layout: page
title: Gomi Zero Shonan: Digital Platform for Fine-grained Waste Management
description: "A digital platform that uses fine-grained waste emission data to support regional waste management, collection, and reduction."
permalink: /projects/gomi-zero-shonan/
---

# Gomi Zero Shonan: Digital Platform for Fine-grained Waste Management

> A city-scale edge-AI and IoT platform that senses fine-grained household waste emissions from garbage truck videos to accelerate data-driven municipal waste reduction.

![Project key image](/assets/img/projects/gomi-zero-shonan-overview.png)
<!-- Optional: replace with a real overview figure, or remove this line if not available. -->

---

## 1. Overview

Gomi Zero Shonan (ごみゼロ湘南 in Japanese) is a research project led by Keio University and Reitaku University since FY2022.  
The project aims to build a **digital platform for regional waste management, collection, and reduction** based on **fine-grained waste emission data**.

Key ideas:

- Use **waste collection videos** from garbage trucks to sense **per-bag, per-location waste emissions** in near real time.
- Equip dozens of garbage trucks in the Shonan area (Kanagawa Prefecture) with **small GPU edge computers** and convert them into **IoT sensing nodes**.
- Continuously stream **time–space indexed waste data** (location, time, number of bags, truck ID, etc.) to a central platform.
- Combine waste emission data with **regional, social, and environmental datasets** to support **data-driven environmental administration** and **waste reduction policies**.

As of FY2022, a total of **14 garbage trucks** in Kamakura, Fujisawa, and Yokosuka have been upgraded and are in regular operation.

---

## 2. Background and Motivation

Municipal solid waste, especially **combustible household waste**, contributes significantly to:

- **CO₂ emissions** from incineration and garbage truck operations.
- **Landfill pressure** due to incineration residues, with the remaining lifespan of final disposal sites averaging around 21 years in Japan.

In Japan, existing waste statistics are typically:

- Aggregated at the **national or municipal** level (e.g., annual tonnage).
- Based on **per-truck** measurements at incineration plants.

Limitations:

- No **fine-grained data** at the level of **collection points** or **routes**.
- Municipalities cannot easily analyze waste emissions by **neighborhood**, **household composition**, or **local events**.
- Residents cannot reflect on their own waste emissions relative to similar households.

At the same time:

- **Per-capita daily waste emission** has stopped decreasing and even shows an increasing tendency since around 2020.
- **Per-capita processing cost** continues to rise.
- Municipalities face challenges such as **limited final disposal sites**, **labor shortages**, and **decarbonization demands**.

This project addresses these issues by turning garbage trucks into **mobile sensing platforms** that continuously generate **fine-grained, geo-temporal waste emission data**.

---

## 3. Research Goals

1. **Fine-grained Waste Sensing**
   - Sense waste emissions at the level of **individual garbage bags** and **small regions** (e.g., collection points, neighborhoods) using video-based edge AI.

2. **City-scale IoT and Data Platform**
   - Deploy an IoT and network infrastructure that collects data from **dozens of garbage trucks**, aggregates it, and supports large-scale analysis.

3. **Visualization and Analytics for Policy and Operations**
   - Provide **interactive visualizations** and **analytics tools** for municipal officials, collection companies, and residents to support:
     - Waste reduction policies,
     - Route optimization,
     - Behavior change and public engagement.

4. **Scalable Real-time Edge AI**
   - Develop **real-time edge AI techniques** (scheduling, frame selection, model optimization) that can run accurate deep models on **resource-limited in-vehicle devices**.

---

## 4. Technical Approach

### 4.1 System Architecture

![System architecture](/assets/img/projects/gomi-zero-shonan-architecture.png)
<!-- Optional: draw a block diagram with sensing, network, and visualization components. -->

The Gomi Zero Shonan platform consists of three main layers:

- **Sensing Layer (On-Truck Edge AI)**
  - Uses the **rear-view camera** of garbage trucks to capture waste collection videos.
  - Runs deep learning models on **embedded GPU edge computers** to:
    - Detect garbage bags,
    - Track their motion,
    - Decide whether each bag has been loaded into the truck.
  - Combines detection results with **GPS location** and **timestamp** to generate **fine-grained waste emission records**.

- **Network Layer**
  - Transmits sensing results via **cellular networks** using the **MQTT protocol** to a central broker.
  - Each truck sends messages every **1 second**, including:
    - Time,
    - GPS coordinates,
    - Speed,
    - Bag counts,
    - Truck identifier.

- **Visualization and Analytics Layer**
  - Stores and visualizes waste emission data.
  - Supports **real-time monitoring**, **historical playback**, and **route-based visualization**.
  - Enables integration with **external datasets** (e.g., demographics, events, weather) for advanced analytics.

### 4.2 Core Methods

- **Deep Learning-based Bag Detection and Tracking**
  - Uses **object detection** models to detect garbage bags (currently focusing on counting, with waste type classification under development).
  - Tracks bags across frames and determines when they are **loaded into the truck**.
  - Current prototypes achieve **50–60% counting accuracy**, with a target of **90%+** through:
    - State-of-the-art detection and tracking algorithms,
    - Improved training datasets,
    - Better exploitation of temporal information.

- **Edge Scheduling for Soft Real-time Processing**
  - High-accuracy detection models are computationally expensive and cannot process all frames (30 fps) in real time on in-vehicle GPUs.
  - The system distinguishes between:
    - **Collection frames** (when workers are loading bags),
    - **Non-collection frames** (e.g., driving between points).
  - Strategy:
    - Process **all collection frames**,
    - Intermittently process non-collection frames,
    - Buffer unprocessed frames and schedule them during less busy periods.
  - A key research challenge is designing algorithms that keep end-to-end latency **within practical bounds** while maintaining high accuracy.

- **Scalable Data Management and APIs**
  - The MQTT-based infrastructure and backend must scale to handle:
    - **Many trucks** (e.g., about 100 in Fujisawa City alone),
    - **Multiple municipalities** sharing the same platform.
  - Future work includes designing APIs that allow selective, cross-municipality queries over accumulated waste data while respecting privacy and access control.

### 4.3 Implementation

- **On-truck Edge Device**
  - Embedded GPU computer: EdgePlant T1 with **NVIDIA Jetson TX2**, running Ubuntu 18.04, JetPack 32.7.2, CUDA 10.2, and cuDNN 8.0.
  - Uses the existing **rear camera** of the garbage truck via a video capture module.
  - Equipped with:
    - **GNSS module** (u-blox NEO-M8U),
    - **4G communication module** (Sierra Wireless EM7430),
    - External SSD for local storage.

- **Deployment and Power**
  - Edge devices are installed behind the passenger seat to avoid interfering with daily operations.
  - Power is supplied from the truck’s engine, with ignition-linked control and a controlled shutdown sequence to protect the system and data.

- **Server-side Components**
  - MQTT broker and data storage servers are hosted at Keio University Shonan Fujisawa Campus.
  - Visualization and analysis applications connect to the broker to receive, store, and process data in real time.

---

## 5. Experimental Setup

- **Deployment Area**
  - Shonan region, Kanagawa Prefecture (Kamakura, Fujisawa, Yokosuka).

- **Number of Trucks**
  - 14 garbage trucks equipped with sensing devices and operating daily in real collection tasks.

- **Data Generation**
  - Each truck sends approximately 160-byte MQTT messages every second:
    - Around 576 KB per truck per hour,
    - Around 2.3 MB per truck for 4 hours of operation per day.
  - For a city like Fujisawa (~440,000 population, ~100 trucks), this corresponds to roughly 230 MB of data per day.

- **Evaluation Aspects**
  - Bag counting accuracy and latency of edge AI processing.
  - Stability and robustness of communication and data collection in real operations.
  - Usability and usefulness of visualization tools for municipal staff and collection companies.

---

## 6. Results and Discussion

Current achievements include:

- **Operational IoT Garbage Trucks**
  - 14 trucks are IoT-enabled and continuously generating fine-grained waste data during regular collection operations.

- **Automated Real-time Data Collection**
  - Compared to previous approaches that relied on offline batch processing of recorded videos, the new system enables automated, real-time data collection via edge AI and MQTT.

- **Visualization Applications**
  - Implemented applications that:
    - Visualize fine-grained waste amounts across the city over arbitrary periods (daily, weekly, monthly),
    - Replay collection routes with time-synchronized waste data, where bars and lines on the map move over time.

- **Insights for Municipal Operations**
  - Visualizations reveal areas with unusually high or low collection amounts and temporal patterns related to holidays, seasonal events, and local festivals.
  - These insights support route optimization (e.g., visiting low-load areas first to reduce fuel consumption) and policy design such as targeted campaigns and behavior-change interventions.

Ongoing and future work includes:

- Improving bag counting accuracy toward 90%+.
- Recognizing waste types (e.g., combustible vs. non-combustible) from bag color and size.
- Detecting hazardous items (e.g., spray cans, batteries) to prevent fires and explosions in trucks.
- Enhancing the scalability of the platform for multiple municipalities and larger numbers of trucks.

---

## 7. Publications and Outputs

- **Gomi Zero Shonan: A Digital Platform for Regional Waste Management, Collection, and Reduction Using Fine-grained Waste Emission Data**  
  IPSJ SIG UBI Technical Report, Vol. 2023-UBI-78 No. 14, May 2023.

> Additional publications, datasets, and software repositories will be listed here as they become available.

---

## 8. Team

- **Principal Investigators:**
  - Jin Nakazawa – Keio University, Faculty of Environment and Information Studies
  - Yin Chen – Reitaku University / Keio University SFC Research Institute

- **Co-authors / Collaborators:**
  - Wenhao Huang – Graduate School of Media and Governance, Keio University
  - Kazuhiro Mikami – Graduate School of Media and Governance, Keio University

(Team information can be updated or linked from the Members page as needed.)

---

## 9. Supporting Projects

- **NICT Advanced Telecommunications and Broadcasting R&D Commissioned Research (ID 22610)**  
  "Gomi Zero Shonan" – Digital platform for regional waste management, collection, and reduction using fine-grained waste emission data.
