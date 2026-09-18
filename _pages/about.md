---
permalink: /
title: "About"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I work on deep learning for medical image analysis, mostly on the problem of getting reliable segmentation and decision support out of imaging data that's expensive to annotate. I'm currently a Lecturer and Research Supervisor at Independent University, Bangladesh (IUB), and I graduated in 2025 from the Erasmus Mundus Joint Master's in Medical Imaging and Applications (MAIA), studying across the University of Girona, University of Cassino, and University of Bourgogne.

Most of my work sits at the intersection of active learning, uncertainty estimation, and clinical planning — teaching a model where to spend its limited annotation budget, and giving clinicians something they can actually act on. Lately that's extended into self-supervised pretraining and parameter-efficient fine-tuning for foundation models, since so much of medical imaging work runs into the same wall: not enough labeled data.

---

## Updates
- **August 2026** — Submitted "Brain Metastases Segmentation for BraTS 2026 Task 1" to the BraTS-METS challenge (MICCAI 2026).
- **May 2026** — Presented a digital poster at the ISMRM Annual Meeting in Cape Town on uncertainty-guided access route segmentation for TAVI.
- **January 2026** — Started as Lecturer (Dept. of Electrical & Electronic Engineering) and Research Supervisor (Biomedical Instrumentation and Signal Processing Lab Wing, CCDS) at Independent University, Bangladesh.
- **September 2025** — Published ["Uncertainty-Guided Active Learning for Access Route Segmentation and Planning in Transcatheter Aortic Valve Implantation"](/publications/uncertainty-guided-active-learning-tavi/) in the *Journal of Imaging* (MDPI).
- **July 2025** — Wrapped up a research assistantship in the Department of Radiology at the Medical University of Innsbruck.
- **June 2025** — Defended my Master's thesis and graduated from the MAIA program.
- **March 2025** — Ranked 5th internationally in the Fetal Ultrasound Grand Challenge (FUGC) at ISBI 2025.

More detail on all of the above is on the [Publications](/publications/), [Projects](/projects/), and [Certifications](/certifications/) pages.

---

## Master's Thesis
**Uncertainty-Guided Active Learning Based Aortic Structure Segmentation for Optimized TAVI Access Route Planning**
*Medical University of Innsbruck, Austria — June 2025*

Transcatheter Aortic Valve Implantation (TAVI) requires accurate preoperative planning of the vascular access route, but manually annotating the thin, convoluted iliac arteries in 3D is slow and labor-intensive. My thesis developed an active learning pipeline guided by probabilistic uncertainty to segment aortic structures from CMR with minimal manual annotation, feeding directly into an automated downstream workflow for diameter quantification via skeletonization and graph-based centerline extraction. Trained over five active learning iterations, the pipeline reached a final Dice score of 0.912 with a diameter-quantification MAPE of 4.92%. A modality ablation study also showed post-contrast CMR substantially outperforming pre-contrast data, pointing to data quality as the most critical factor for robust performance.

[Download the full thesis (PDF)](/files/Mahdi_Master_Thesis.pdf){: .btn} [View the thesis poster](/posters/tavi-thesis-poster/){: .btn}

---

## Research Focus
- **Segmentation & active learning** — annotation-efficient 3D segmentation, uncertainty-guided sample selection, aortic/cardiovascular and brain tissue segmentation.
- **Self-supervised & parameter-efficient learning** — pretraining under limited labels (VoCo, masked autoencoders), curvature-aware and rank-stabilized LoRA for vision-language models.
- **Multimodal & explainable AI** — fusing CT/CMR/imaging-derived features for outcome prediction, with SHAP-based interpretability and survival analysis.
- **Broader medical imaging** — cervical and colorectal segmentation, histopathology classification, radiomics and biomarker analysis for early disease detection.

---

## Background
- **Lecturer & Research Supervisor**, Independent University, Bangladesh (IUB) — *January 2026–present*. Teaching undergraduate EEE courses, supervising student research toward publication, and leading the Biomedical Instrumentation and Signal Processing Lab Wing at CCDS.
- **Research Assistant**, Department of Radiology, Medical University of Innsbruck, Austria — *February–July 2025*. Built an annotation-efficient 3D segmentation and vessel-diameter pipeline for TAVI access-route planning, and a multimodal CT/CMR pipeline for post-procedural mortality prediction.
- **Erasmus Mundus MAIA Master's**, University of Girona / University of Cassino / University of Bourgogne — *September 2023–September 2025*.
- **Lecturer**, Department of Computer Science & Engineering, Metropolitan University, Bangladesh — *August 2022–June 2023*. Taught core CS/EEE courses and introduced ML concepts to sophomore students.
- **Undergraduate Research Assistant**, Islamic University of Technology (IUT), Bangladesh — *April 2021–April 2022*. Built a sensor-based gait anomaly detection pipeline using CNNs.

I'm also currently Coordinator for IT & Web Design at the Erasmus Mundus Association Bangladesh, where I maintain the [EMA-BD website](https://www.emabd.org/).

---

For a full list of publications and projects, see [Publications](/publications/) and [Projects](/projects/), or check my [GitHub](https://github.com/mahdiislam79). Feel free to [get in touch](/contact/) — I'm always happy to talk about segmentation, active learning, or anything at the intersection of ML and clinical imaging.
