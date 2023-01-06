# Internals

---

## Why is NumPy Faster?

1. **Fixed type**

![0 1 /卄44 ](media/Internals-image1.png)

- Faster to read less bytes of memory
- No type checking when iterating through objects

2. **Contiguous Memory**

![image](media/Internals-image2.png)

- Benefits
  - SIMD (Single Instruction Multiple Data) Vector Processing
  - Effective Cache Utilization
