---
layout: project
title: "Gomi Zero Shonan: Digital Platform for Fine-grained Waste Management"
description: "A digital platform that uses fine-grained waste emission data to support regional waste management, collection, and reduction."
permalink: /projects/gomi-zero-shonan/
project_id: gomi-zero-shonan
image: /assets/img/projects/gomi-zero-shonan-overview.png
videos:
  - title: "Bag detection demo"
    url: "https://www.youtube.com/embed/UKOxn13rtKI?si=OPdvYKRy9ibg4WYF"
  - title: "Data visualization demo"
    url: "https://www.youtube.com/embed/0BvZaEKFHcg?si=h3Ao6DnNPD2J1XtB"
keywords:
  - smart city
  - urban sensing
  - waste management
  - automotive sensing
  - edge AI
---

<!-- # Gomi Zero Shonan: Digital Platform for Fine-grained Waste Management -->

> A city-scale edge-AI and IoT platform that senses fine-grained household waste emissions from garbage truck videos to accelerate data-driven municipal waste reduction.

![Project key image](/assets/img/projects/gomi-zero-shonan-overview.png){: style="max-width: 100%; height: auto;"}
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

![System architecture](/assets/img/projects/gomi-zero-shonan-architecture.png){: style="max-width: 100%; height: auto;"}
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
    - **Many trucks** 
    - **Multiple municipalities** sharing the same platform.
  - Future work includes designing APIs that allow selective, cross-municipality queries over accumulated waste data while respecting privacy and access control.

### 4.3 Implementation

- **On-truck Edge Device**
  - Embedded GPU computer: EdgePlant T1 with **NVIDIA Jetson TX2**, running Ubuntu 18.04, JetPack 32.7.2, CUDA 10.2, and cuDNN 8.0.
  - Uses the existing **rear camera** of the garbage truck via a video capture module.
  - Equipped with:
    - **GNSS module** ,
    - **4G communication module** 

- **Deployment and Power**
  - Edge devices are installed behind the passenger seat to avoid interfering with daily operations.
  - Power is supplied from the truck’s engine, with ignition-linked control and a controlled shutdown sequence to protect the system and data.

- **Server-side Components**
  - MQTT broker and data storage servers are hosted at Keio University Shonan Fujisawa Campus.
  - Visualization and analysis applications connect to the broker to receive, store, and process data in real time.

---

## 5. Experiments and Results

### 5.1 Bag Detection Video

We deployed the edge-AI system on real garbage trucks in the Shonan area and recorded rear-camera videos during regular collection operations.  
The detection model runs on the in-vehicle GPU and draws bounding boxes around garbage bags in real time, while tracking their movement until they are loaded into the truck.  
The videos confirm that the system can robustly detect bags under various conditions.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UKOxn13rtKI?si=OPdvYKRy9ibg4WYF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



### 5.2 Data Visualization

From the detection and tracking results, we generate fine-grained waste-emission records with timestamps and GPS coordinates.  
These data are visualized on a city map, where each point or segment of a route is associated with the number of collected bags.  
The visualization allows municipal officials to quickly identify areas with unusually high or low waste emissions and to explore temporal patterns over days, weeks, or months.
<iframe width="560" height="315" src="https://www.youtube.com/embed/0BvZaEKFHcg?si=h3Ao6DnNPD2J1XtB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 6. Publications and Outputs

{% include project-publications.html project_id=page.project_id %}

---

## 7. Team

This project is jointly conducted by the following laboratories:

- [Nakazawa and Okoshi Laboratory, Keio University Shonan Fujisawa Campus](https://www.jn.sfc.keio.ac.jp/)
- [AIoT Lab, Reitaku University](https://www.aiotlabs.org/)

---

## 8. Supporting Projects

{% include project-funds.html project_id=page.project_id %}
