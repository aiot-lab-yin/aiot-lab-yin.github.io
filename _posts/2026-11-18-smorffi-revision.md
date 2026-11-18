---
layout: post
title: "Author-Revised SMoRFFI Manuscript and Feature Dataset Released (v2)"
date: 2026-11-18
categories: [Publications, News]
tags: [RF Fingerprinting, WiFi, Dataset, IoT, Benchmark]
permalink: /publications/news/smorffi-revision/
---

We have released a revised version of the SMoRFFI dataset with the revised manuscript. The feature extraction code distributed with the original release contained errors in the computation of several RF features. We corrected the code, regenerated the dataset, reran the Random Forest benchmark, and updated every equation, table, and figure that depends on these features.

The revised manuscript is available as [revised manuscript](/assets/docs/Smorffi-revised-2026-11.pdf).

## What Changed

- **Fractal dimension.** The two previous columns are replaced by a single column (`frac_dimension`) computed on the raw 288-sample time-domain preamble. This reduces the feature count from 15 to 14.
- **Phase and magnitude errors.** Both are computed on the equalized LTS without subtracting the ideal symbol first.
- **Channel estimate formula.** The expression for the channel estimate used in sub-carrier equalization was corrected in the manuscript. The computed values are unchanged.

The regenerated dataset contains 122,511 frames and 22 columns.

## Effect on the Benchmark

| Setting                  | Published article | Author revision |
| ------------------------ | ----------------- | --------------- |
| Without Kalman filtering | 82.0%             | **88.65%**      |
| With Kalman filtering    | 88.6%             | **94.54%**      |

The revised numbers were produced with a Random Forest classifier of 128 trees and a single 80/20 train-test split (`random_state=42`). 

## Dataset Status

The corrected dataset and accompanying code are available at the same links as in the original release. You can also find these links in the [revised manuscript](/assets/docs/Smorffi-revised-2026-11.pdf).

## Citation

The version of record remains the Computer Networks article:

Guo, Z., Jia, Z., Zhu, J., Huang, W., & Chen, Y. (2026).  
*SMoRFFI: A large-scale same-model 2.4 GHz Wi-Fi dataset and reproducible framework for RF fingerprinting.*  
Computer Networks, 112309. DOI: 10.1016/j.comnet.2026.112309

If you use the corrected dataset, please cite this article and state that the revised dataset version (v2, November 2026) was used.
