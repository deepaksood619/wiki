# Internals

Created: 2020-03-22 21:22:08 +0500

Modified: 2020-03-22 21:27:06 +0500

---

**Why is NumPy Faster?**

1.  **Fixed type**

![0 1 /卄44 ](media/Internals-image1.png)


-   Faster to read less bytes of memory
-   No type checking when iterating through objects



2.  **Contiguous Memory**

![Lists w■au■■■ 0000 NumPy ](media/Internals-image2.png)
-   Benefits
    -   SIMD (Single Instruction Multiple Data) Vector Processing
    -   Effective Cache Utilization


