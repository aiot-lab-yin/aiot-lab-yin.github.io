---
title: "Paper Accepted in Computer Networks: SMoRFFI Dataset and RF Fingerprinting Framework"
date: 2026-04-09
categories: [Publications, News]
tags: [RF Fingerprinting, WiFi, Dataset, IoT, Computer Networks]
---
We are pleased to announce that our paper, **"SMoRFFI: A Large-Scale Same-Model 2.4 GHz Wi-Fi Dataset and Reproducible Framework for RF Fingerprinting"**, has been officially published in *Computer Networks (2026)*.

## Overview

Radio frequency (RF) fingerprinting has emerged as a promising approach for device identification by exploiting hardware imperfections at the physical layer. However, **identifying same-model devices remains an open and challenging problem**, as such devices exhibit highly similar RF characteristics.

To address this challenge, we present **SMoRFFI**, a large-scale dataset and a fully reproducible experimental framework specifically designed for **same-model RF fingerprinting**.

## What We Provide

- A **large-scale same-model dataset**:
  - 123 commercial IEEE 802.11g devices
  - 35.42 million raw I/Q samples from Wi-Fi preambles
  - 1.85 million extracted RF features 

- A **rich feature representation**:
  - Frequency-related features (CFO, coarse/fine CFO)
  - Constellation-based features (phase error, magnitude error)
  - Hardware-related features (I/Q imbalance, fractal dimension

- A **fully reproducible pipeline**:
  - Data collection (USRP + GNU Radio)
  - Feature extraction
  - Benchmark evaluation

## Key Insights

- Same-model RF fingerprinting is significantly more difficult than heterogeneous-device scenarios due to **minimal hardware variation**
- Frequency-related features (e.g., CFO) are the most discriminative for device identification
- Even with a lightweight model, our baseline achieves **88.6% accuracy**, highlighting both:
  - the **difficulty of the dataset**, and  
  - the **potential for more advanced models**  

## Why This Work Matters

Unlike existing datasets, SMoRFFI:

- Focuses on the **worst-case scenario** (same-model devices)
- Provides both **raw I/Q data and pre-extracted RF features**
- Ensures **full reproducibility with open-source tools**

This makes it a strong benchmark for:

- RF-based authentication
- Open-set / unknown device detection
- Machine learning and deep learning on RF signals

## Resources

- 📄 [Journal Article](https://www.sciencedirect.com/science/article/pii/S138912862600321X)
- 🔗 [DOI](https://doi.org/10.1016/j.comnet.2026.112309)
- 📘 [arXiv Preprint](https://arxiv.org/abs/2511.07770)
- 📊 [Dataset (Kaggle)](https://www.kaggle.com/datasets/yinchen1986/rffi-123-m5stack-iq-wifi-802-11g-2-4g)
- 💻 [Code (GitHub)](https://github.com/aiot-lab-yin/Dockerized-wifi-iq-preamble-capture)

## Citation

Guo, Z., Jia, Z., Zhu, J., Huang, W., & Chen, Y. (2026).  
*SMoRFFI: A large-scale same-model 2.4 GHz Wi-Fi dataset and reproducible framework for RF fingerprinting.*  
Computer Networks, 112309.

---

We hope this work provides a solid foundation for future research in RF fingerprinting and secure wireless device identification.