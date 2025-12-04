---
layout: page
title: Research Projects
description: "Our ongoing and past research projects"
hide-title: true
---

Welcome to the overview of our research projects.  
Each project has its own page with a detailed description, publications, and supporting funds.

---

### [Gomi Zero Shonan: Digital Platform for Fine-grained Waste Management](/projects/gomi-zero-shonan/)

A research project that builds a digital platform for regional waste management, collection, and reduction using **fine-grained waste emission data**.
{% include project-demo.html project_id="gomi-zero-shonan" %}
{% assign gzs = site.pages | where: "project_id", "gomi-zero-shonan" | first %}
- **Keywords:** {% if gzs and gzs.keywords %}{{ gzs.keywords | join: ', ' }}{% endif %}   
- **Project page:** [Gomi Zero Shonan](/projects/gomi-zero-shonan/)
- **Period:** 2018–Present

---

### [Wireless RF Fingerprinting and Device Identification](/projects/wireless-rf-fingerprinting/)

A research project on physical-layer identification and authentication of wireless devices using **radiometric fingerprints** and **machine learning**, with a focus on building large-scale datasets of everyday personal devices and robust, privacy-aware authentication in realistic wireless environments.
{% include project-demo.html project_id="wireless-rf-fingerprinting" %}

{% assign wrf = site.pages | where: "project_id", "wireless-rf-fingerprinting" | first %}
- **Keywords:** {% if wrf and wrf.keywords %}{{ wrf.keywords | join: ', ' }}{% endif %}  
- **Project page:** [Wireless RF Fingerprinting and Device Identification](/projects/wireless-rf-fingerprinting/)
- **Period:** 2018–Present

<!-- --- -->

<!-- 
---
### Other Ongoing Projects

We are currently organizing additional project pages based on our core research themes, including:

- **Wireless RF Fingerprinting and Device Identification**  
  (See dedicated project entry above.)

- **Cybernetic Avatars and Remote Presence**  
  Human–avatar interaction, security, and privacy for remote work and telepresence scenarios.

- **Edge-centric IoT and Urban Sensing**  
  Intelligent sensing platforms on public vehicles and infrastructure for city-scale data collection and analysis.

Dedicated pages for these projects will be added as they are consolidated. -->

---

## Past Projects

We have also conducted a variety of past projects in areas such as:

- Automotive sensing platforms for smart cities  
- Opportunistic urban sensing using public vehicles  
- Throughput and capacity analysis of mobile ad hoc networks (MANETs)

Some of these are now integrated into or extended by the current projects above.
For a publication-oriented view of our work, please see the [Publications](/publications/) page.