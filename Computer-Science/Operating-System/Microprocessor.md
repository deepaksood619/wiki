# Microprocessor

Created: 2018-12-08 19:27:10 +0500

Modified: 2021-06-06 16:49:19 +0500

---

**Course - NPTEL - IIT-Guwahati, by Dr. John Jose**



# Multilevel Machine Architecture

![Level 5 Level 4 Level 3 Level 2 Level 1 Level O Problem-oriented language level Translation (compiler) Assembly language level Translation (assembler) Operating system machine level Partial interpretation (operating system) Instruction set architecture level Interpretation (microprogram) or direct execution Microarchitecture level Hardware Digital logic level Figure 1-2. A six-level computer. The support method for each level is indicat- ed below it (along with the name of the supporting program). ](media/Microprocessor-image1.png){width="4.5in" height="4.09375in"}



# Data Path

![MAR control registers To main memory C bus ALU control MOR üBR cpp TOS opc ALU Shifter Control signals Enable onto B bus Write C bus to register B bus Shifter control Figure 4-1. The data path of the example microarchitecture used in this chapter. ](media/Microprocessor-image2.png){width="3.9375in" height="5.6875in"}



# Data Path Timing

![Shifter output stable Cycle 1 starts here Registers loaded instantaneously from C bus and memory on rising edge of clock Clock cycle 1 Clock cycle 2 Ay  Az ALU and shifter Propagation from shifter to registers New MPC used to MIR with next microinstruction here MPC available here Set up signals to drive data path Drive H and B bus Figure 4-3. Timing diagram of one data path cycle. ](media/Microprocessor-image3.png){width="5.895833333333333in" height="3.5416666666666665in"}



# Microinstructions

![Bits 9 NEXT ADDRESS Addr M c JAM 3 A PM M N A Z 8 1 8 N ALU N N N P c S 9 p L c S P C PM M D R A R T E 3 A Mem B bus registers o = MDR 2 = MBR 3 = MBRU 4 T B C bus 5=LV 6 = CPP 7 = TOS 8 = OPC 9-15 none Figure 4-5. The microinstruction format for the Mic-l. ](media/Microprocessor-image4.png){width="5.5in" height="2.7604166666666665in"}



**Two types of CPU architecture**

1.  RISC Architecture

2.  CISC Architecture



**RISC & CISC Comparison**

![CISC It is prominent on Hardware It has high cycles per second It has transistors used for storing Instructions which are complex LOAD and STORE memory-to-memory is induced in instructions It has multi-clock RISC It is prominent on the Software It has low cycles per second More transistors are used for storing memory LOAD and STORE register-register are independent It has a single - clock ](media/Microprocessor-image5.jpg){width="5.0in" height="1.9375in"}



**ARM - Advanced RISC Machine**



**References**

<https://www.edgefxkits.com/blog/what-is-risc-and-cisc-architecture/>





