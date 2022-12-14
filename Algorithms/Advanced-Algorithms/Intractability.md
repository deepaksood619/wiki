# Intractability

Created: 2018-04-19 00:02:30 +0500

Modified: 2019-09-08 11:56:52 +0500

---

Is there a universal problem-solving model to which all problems that we would like to solve reduce and for which we know an efficient algorithm? You may be surprised to learn that we do not know the answer to this question. In this lecture we introduce the complexity classes P, NP, and NP-complete, pose the famous P = NP question, and consider implications in the context of algorithms that we have treated in this course.



![Questions about computation What is a general-purpose computer? Q. Q. Are there limits on the power of digital computers? Q. Are there limits on the power of machines we can build? David Hilbert Kurt Gödel Alan Turing Alonzo Church John vor ](media/Intractability-image1.png)

![A simple model of computation: Tape. • Stores input. DFAs • One arbitrarily long strip, divided into cells. • Finite alphabet of symbols. Tape head. • Points to one cell of tape. • Reads a symbol from active cell. • Moves one cell at a time. o yes tape head O START O no ](media/Intractability-image2.png)

![A universal model of computation: Turing machines Tape. • Stores input, output, and intermediate results. • One arbitrarily long strip, divided into cells. • Finite alphabet of symbols. tape Tape head. • Points to one cell of tape. • Reads a symbol from active cell. Writes a symbol to active cell. • Moves one cell at a time. tape head ](media/Intractability-image3.png)



**Church-Turing Thesis (Computability Thesis)** is a hypothesis about the nature of computable functions. It states that a function on the natural numbers is computable by a human being following an algorithm, ignoring resource limitation, if and only if it is computable by a Turing machine.



![Church-Turing thesis (1936) Turing machines can compute any function that can be physically harnessable process of the natural world. Remark. "Thesis" and not a mathematical theorem because i about the physical world and not subject to proof. but can Use simulation to prove models equivalent. • Android simulator on iPhone. • iPhone simulator on Android. Implications. ](media/Intractability-image4.png)



![Church-Turing thesis: evidence • 8 decades without a counterexample. • Many, many models of computation that turned out to bc model of computation enhanced Turing machines untyped lambda calculus recursive functions unrestricted grammars extended L-systems programming languages random access machines description multiple heads, multiple tapes, 2D tape, no method to define and manipulate ful functions dealing with computation or iterative string replacement rules used parallel string replacement rules that mode Java, C, Perl, Python, PHP, Lisp, Post: registers plus main memory, e.g., TOY, ](media/Intractability-image5.png)

![A question about algorithms Which algorithms are useful in practice? Q. Measure running time as a function of input size N. • Useful in practice ("efficient") = polynomial time for all in von Neumann (1953) Nash (1955) Gödel (1956) Cobham (1964) Edmonds (1965) Ex l. Sorting N items takes N log N compares using mergesor Ex 2. Finding best TSP tour on N points takes N! steps using ](media/Intractability-image6.png)

![Exponential growth Exponential growth dwarfs technological change. • Suppose you have a giant parallel computing device... • With as many processors as electrons in the universe... • And each processor has power of today's supercomputer • And each processor works for the life of the universe... quantity electrons in universe supercomputer instructions per second age of universe in seconds t value 1 079 1013 1017 estimated ](media/Intractability-image7.png)

![Questions about problems Q. Which problems can we solve in practice? A. Those with poly-time algorithms. Q. Which problems have poly-time algorithms? A. Not so easy to know. Focus of today's lecture. result input ](media/Intractability-image8.png)



Intractable - hard to control or deal with (difficult or stubborn)



![Bird's-eye view Def. A problem is intractable if it can't be solved in polynom Desiderata. Prove that a problem is intractable. Two problems that provably require exponential time. • Given a constant-size program, does it halt in at most 10 • Given N-by-N checkers board position, can the first playe .1 designed rhe perfect computer ](media/Intractability-image9.png)



# Search Problems

![Four fundamental problems LSOLVE. Given a system of linear equations, find a solution. OXO + IXI + IX2 OXO + 3Xl + 15X2 36 LP. Given a system of linear inequalities, find a solution. 48xo + 16x1 + 119x2 5X0 -F 4X1 -F 35X2 15xo + 4X1 + 20X2 s 88 13 23 Given a system of linear inequalities, find a 0-1 x solution. ](media/Intractability-image10.png)



**ILP - Integer Linear Programming**

Aninteger programmingproblem is a[mathematical optimization](https://en.wikipedia.org/wiki/Mathematical_optimization)or[feasibility](https://en.wikipedia.org/wiki/Constraint_satisfaction_problem)program in which some or all of the variables are restricted to be[integers](https://en.wikipedia.org/wiki/Integer). In many settings the term refers tointeger[linear programming](https://en.wikipedia.org/wiki/Linear_programming)(ILP), in which the objective function and the constraints (other than the integer constraints) are[linear](https://en.wikipedia.org/wiki/Linear_function_(calculus)).



Integer programming is[NP-complete](https://en.wikipedia.org/wiki/NP-complete). In particular, the special case of 0-1 integer linear programming, in which unknowns are binary, and only the restrictions must be satisfied, is one of[Karp's 21 NP-complete problems](https://en.wikipedia.org/wiki/Karp%27s_21_NP-complete_problems).



If some decision variables are not discrete the problem is known as amixed-integer programmingproblem.



<https://en.wikipedia.org/wiki/Integer_programming>

<https://www.toptal.com/algorithms/mixed-integer-programming>



![Four fundamental problems LSOLVE. Given a system of linear equations, find a solution. LP. Given a system of linear inequalities, find a solution. ILP. Given a system of linear inequalities, find a 0-1 solution. SAT. Given a system of boolean equations, find a binary solu Q. Which of these problems have poly-time algorithms? • LSOLVE. Yes. Gaussian elimination solves N-by-N system • LP. Yes. Ellipsoid algorithm is poly-time. but was open p • ILP, SAT. No poly-time algorithm known or believed to ex but ](media/Intractability-image11.png)

![Search problems Search problem. Given an instance I of a problem, find a sol Requirement. Must be able to efficiently check that S is a sol poly-time in size of instance I ](media/Intractability-image12.png)

![Search problems Search problem. Given an instance I of a problem, find a sol Requirement. Must be able to efficiently check that S is a sol --- 36 LSOLVE. Given a system of linear equations, find a solution. 4X1 + IX2 2X2 + 15X2 4 2 x 2 2 2 instance I solution S ](media/Intractability-image13.png)

![Search problems Search problem. Given an instance I of a problem, find a sol Requirement. Must be able to efficiently check that S is a sol LP. Given a system of linear inequalities, find a solution. 88 48xo 15xo x 0 + 16Xl + 4Xl + 119X2 + 35X2 + 20X2 x 2 2 13 23 0 xo 1 1 instance I solution S ](media/Intractability-image14.png)

![Search problems Search problem. Given an instance I of a problem, find a sol Requirement. Must be able to efficiently check that S is a sol ILP. Given a system of linear inequalities, find a binary soluti x X x instance I 1 1 2 xo 0 1 1 solution S ](media/Intractability-image15.png)

![Search problems Search problem. Given an instance I of a problem, find a sol Requirement. Must be able to efficiently check that S is a sol SAT. Given a system of boolean equations, find a boolean so (x'l or x'2) and (xo or x2) (xo or Xl) and (Xl or x'2) (xo or x2) and (x'o) instance I = true = false = true xo = false = false x2 = true solution S ](media/Intractability-image16.png)

![Search problems Search problem. Given an instance I of a problem, find a sol Requirement. Must be able to efficiently check that S is a sol FACTOR. Given an n-bit integer x, find a nontrivial factor. input size = number of bits 147573952589676412927 instance I 193707721 solution S ](media/Intractability-image17.png)



![Which one of the following problems is not known to be a search problem? FACTOR: given an integer x, find a nontrivial factor (i.e., neither I or x). LP: given a system of n variables and m linear inequalities, find a solution. TSP: given an edge-weighted graph, find the shortest simple cycle that visits every vertex exactly once. Correct TSP is not known to be a search problem because there is no easy way (i.e., no known polynomial-time algorithm) to check whether a proposed cycle is the best one possible. The following version of TSP is a search problem: given an edge-weighted graph and a real number T, find a simple cycle that visits every vertex exactly once and has length at most T. HAMILTON-CYCLE: given an undirected graph, find a simple cycle that visits every vertex exactly once. ](media/Intractability-image18.png)



# P vs NP

NP - Non Deterministic Polynomial Time (The complexity class NPcontains all of the problems inP---it is often incorrectly ascribed to mean "not polynomial time.")

![Note: classic d Def. NP is the class of all search problems. + 4Xl - 2X2 NP to yes-n instance I problem LSOLVE ILP SAT description Find a vector x that satisfies Ax = b Find a vector x that satisfies Ax s b poly-time algorithm Gaussian elimination ellipsoid Oxo Oxo 48xo 5xo 15xo xo x + IXI + 3Xl + 16X1 + 119X2 + 35X2 + 20X2 2 x 2 Find a binary vector x 777 that satisfies Ax sb Find a boolean vector x 777 that satisfies = b (x'l or x'2) and (xo or (xo or Xl) and (Xl orx'2) (xo or x2) and (x'o) ](media/Intractability-image19.png)

![p Def. P is the class of search problems solvable in poly-time. problem LSOLVE SORT (a) STCONN description Find a vector x that satisfies Ax b Find a vector x that satisfies Ax S b Find a permutation that puts array a in order Find a path in a poly-time algorithm Gaussian elimination (Edmonds 1 967) ellipsoid (Khachiyan 1 979) mergesort (von Neumann 1 945) depth-first search Oxo Oxo 48xo 5xo 15xo xo Not instance I + IXI + 4Xl - 2X2 + 3Xl + 16Xl + 119X2 4XI + 35X2 + 20X2 2.3851 9.1220 ](media/Intractability-image20.png)

![Nondeterminism Nondeterministic machine can guess the desired solution. Ex. int [ ] a = new int [N] ; • Java: initializes entries to 0. • Nondeterministic machine: initializes entries to the solut ILP. Given a system of linear inequalities, guess a 0-1 solutic 2 x XO + Ex. Turing machine. 1 1 2 xo 0 1 1 ](media/Intractability-image21.png)

![Extended Church-Turing thesis P = search problems solvable in poly-time in the natural wo Evidence supporting thesis. True for all physical computers. Natural computers? No successful attempts (yet). Ex. Computing Steiner trees with soap bubbles STEINER: Find set of lines of minimal length ](media/Intractability-image22.png)

![Automating creativity Q. Ex. Ex. Ex. Ex. Being creative vs. appreciating creativity? Mozart composes a piece of music; our neurons Wiles proves a deep theorem; a colleague referees it. Boeing designs an efficient airfoil; a simulator verifies it. Einstein proposes a theory; an experimentalist validates ](media/Intractability-image23.png)

![The central question P. Class of search problems solvable in poly-time. NP. Class of all search problems. [Can you always avoid brute-force searching an Does P = NP? Two worlds. ](media/Intractability-image24.png)

![The central question P. Class of search problems solvable in poly-time. NP. Class of all search problems. Does P = NP? [Can you always avoid brute-force searching an Millennium prize. $1 million for resolution of P = NP probler Clay Mathematics Institute Dedicated to increasing and disseminating mathematical k ' PRO---AUS c "NSA 'VAT' I Millennium Problems In order to celebrate mathematics in the new millennium, The Clay Mathematics Institute of Cambridge, Massachusetts (CMI) has named seven Prize Problems. The Scientific Advisory Board of CMI selected these problems, focusing on important classic questions that have resisted solution over the years. The Board Of Directors Of CMI designated a $7 million prize fund for the solution to these problems, with $1 million allocated to each. During the ](media/Intractability-image25.png)



![Which of the following would imply that P # JVP? Proving that there is no polynomial-time algorithm for FACTOR (factoring an integer). Proving that there is no polynomial-time algorithm for ILP (integer linear programming). Proving that there is no polynomial-time algorithm for SAT (satisfiability). Any of the above. Correct All of the given problems are in XP. So, if any one of them is not in P, we must have P # XP. ](media/Intractability-image26.png)



# Classifying Problems

![A key problem: satisfiability SAT. Given a system of boolean equations, find a solution. --- true or x'2 or x3 = true Xh or x'2 or x'3 = true x'l or x'2 or x4 = true Key applications. • Automatic verification systems for software. • Electronic design automation (EDA) for hardware. ](media/Intractability-image27.png)

![Exhaustive search How to solve an instance of SAT with n variables? A. Exhaustive search: try all 2n truth assignments. Q. Can we do anything substantially more clever? Conjecture. No poly-time algorithm for SAT. "intractable" only +00k you 65298 seconds , ](media/Intractability-image28.png)

![Classifying problems Q. Which search problems are in P? A. No easy answers (we don't even know whether P = Cook reduction Problem X poly-time reduces to problem YifXcan be solved • Polynomial number of standard computational steps. • Polynomial number of calls to Y. instance I (of X) Algorithm for Y Algorithm for X solutior ](media/Intractability-image29.png)

![SAT poly-time reduces to ILP SAT. Given a system of boolean equations, find a solution. x'l or X2 or x3 = true or x'2 or x3 = true can to reduce any SAT prot Xh or x'2 or x'3 = true x'l or x'2 or x4 = true ILP. Given a system of linear inequalities, find a 0-1 solution. 1 (1 --- X 1) + X2 + X3 ](media/Intractability-image30.png)

![More poly-time reductions from boolean satisfiability 3-COLOR EXACT COVER SUBSET-SUM SAT IMD-SET o VERTEX COVER CLIQUE HAM-CY( TSP ](media/Intractability-image31.png)

![Still more reductions from SAT Aerospace engineering. Optimal mesh partitioning for finite elem Biology. Phylogeny reconstruction. Chemical engineering. Heat exchanger network synthesis. Chemistry. Protein folding. Civil engineering. Equilibrium of urban traffic flow. Economics. Computation of arbitrage in financial markets with fri Electrical engineering. VLSI layout. Environmental engineering. Optimal placement of contaminant se Minimum risk portfolio of given return. Financial engineering. Game theory. Nash equilibrium that maximizes social welfare. Mathematics. Given integer al compute cos(a10) x cos(aß) x • , ..., an, Mechanical engineering. Structure of turbulence in sheared flows. Medicine. Reconstructing 3d shape from biplane angiocardiogran- Operations research. Traveling salesperson problem. Phvsics. Partition function of 3d Isina model. ](media/Intractability-image32.png)



![If problem X polynomial-time reduces to problem Y, which of the following statements can we infer? If X can be solved in polynomial time, then Y can be solved in polynomial time. • If X cannot be solved in polynomial time, then Y cannot be solved in polynomial time. Correct The polynomial-time reduction implies that if Y can be solved in polynomial time, then so can X. The converse of this statement is option B. X can be solved in polynomial time if and on/yif Y can be solved in polynomial time. None of the above. ](media/Intractability-image33.png)

<https://sahandsaba.com/understanding-sat-by-implementing-a-simple-sat-solver-in-python.html>

# 

# NP-completeness

![NP-completeness Def. An NP problem is NP-complete if every problem in NP pc reduce to it. Proposition. [Cook 1971, Levin 1973] SAT is NP-complete. Extremely brief proof sketch: • Convert non-deterministic TM notation to SAT notation. • If you can solve SAT, you can solve any problem in NP. ](media/Intractability-image34.png)



**Cook - Levin Theorem**

In[computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory), the**Cook--Levin theorem**, also known as**Cook's theorem**, states that the[Boolean satisfiability problem](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem)is[NP-complete](https://en.wikipedia.org/wiki/NP-completeness). That is, any problem in[NP](https://en.wikipedia.org/wiki/NP_(complexity))can be[reduced](https://en.wikipedia.org/wiki/Reduction_(complexity))in polynomial time by a[deterministic Turing machine](https://en.wikipedia.org/wiki/Deterministic_Turing_machine)to the problem of determining whether a Boolean formula is satisfiable.

An important consequence of this theorem is that if there exists a deterministic polynomial time algorithm for solving Boolean satisfiability, then every[NP](https://en.wikipedia.org/wiki/NP_(complexity))problem can be solved by a deterministic polynomial time algorithm.



![Implications of Cook-Levin theorem 3 coi-ow duces to re 3-COLOR EXACT COVER SUBSET-SUM SAT IMD-SET ILP R COVER CLIQUE St '82 HAM- TSP ](media/Intractability-image35.png)

![Implications of Karp + Cook-Levin SAT 3 COvOW duces to re o duces to re 3-COLOR EXACT COV SUBSET-SU ND-SET VERTEX COVER CLIQUE HAM- TSP. ](media/Intractability-image36.png)

![Implications of NP-Completeness Implication. [SAT captures difficulty of whole class NP] • Poly-time algorithm for SAT iff P = NP. No poly-time algorithm for some NP problem none fc Remark. Can replace SAT with any of Karp's problems. Proving a problem NP-complete guides scientific inquiry. • 1926: • 1944: • 19xx: • 2000: Ising introduces simple model for phase transitiot Onsager finds closed form solution to 2D version Feynman and other top minds seek 3D solution. 3D-ISING proved NP-complete. a holy grail o ](media/Intractability-image37.png)

![Two worlds (more detail) Overwhelming consensus (still). NPC Why we believe P * NP. p * NR We admire Wiles' proof of Fermat's last theorem, the scientific theorie ](media/Intractability-image38.png)

![Summary P. Class of search problems solvable in poly-time. NP. Class of all search problems, some of which seem wicke NP-complete. Hardest problems in NR Intractable. Problem with no poly-time algorithm. Many fundamental problems are NP-complete. • SAT, ILP, HAMILTON-PATH • 3D-ISING Use theory a guide: • A poly-time algorithm for an NP-complete problem woulc breakthrough (a proof that P = NP). ](media/Intractability-image39.png)



![Suppose that problem X is MP-complete; problem Y is in MP; and X poly-time reduces to Y. Which one or more of the following statements can we infer? FACTOR polynomial-time reduces to Y. Y is solvable in polynomial time if and only if P = XP. Y is MP-complete. All of the above. Correct This implies that Y is JVP-compIete. Thus, all problems in J'VP polynomial-time reduce to Y, including FACTOR. Moreover, any AFP-complete problem is solvable in polynomial time if and only if P = MP. ](media/Intractability-image40.png)



# Coping with intractability

![Exploiting intractability Modern cryptography. • Ex. Send your credit card to Amazon. • Ex. Digitally sign an e-document. • Enables freedom of privacy, speech, press, political assoc RSA cryptosystem. • To use: multiply two n-bit integers. [poly-time] • To break: factor a 2 n-bit integer. [unlikely poly-time] Multiply = EASY 23 x 67 1,541 ](media/Intractability-image41.png)

![Exploiting intractability Challenge. Factor this number. 740375634795617128280467960974295731425931888892312890849 326389727650340282662768919964196251178439958943305021275 701189680982867331732731089309005525051168770632990723963 86710086096962537934650563796359 RSA-704 ($30,000 prize if you can factor) Can't do it? Create a company based on the difficulty of fact r Q PRIME H s PQ ED f MOD cp-f)CQ-f) AN MoDN M • co M0DN RSA alccrithm ](media/Intractability-image42.png)

![Exploiting intractability FACTOR. Given an n-bit integer x, find a nontrivial factor. What is complexity of FACTOR? Q. A. In NP, but not known (or believed) to be in P or NP-complc Q. What if P = NP? A. Poly-time algorithm for factoring; modern e-conomy colla Can factor an n-bit integer in ste Proposition. [Shor 1994] on a "quantum computer." ](media/Intractability-image43.png)

![Coping with intractability Relax one of desired features. • Solve arbitrary instances of the problem. • Solve the problem to optimality. • Solve the problem in poly-time. Special cases may be tractable. • Ex: Linear time algorithm for 2-SAT. at most two variables • Ex: Linear time algorithm for Horn-SAT. at most one un-ne ](media/Intractability-image44.png)

![Coping with intractability Relax one of desired features. • Solve arbitrary instances of the problem. • Solve the problem to optimality. • Solve the problem in poly-time. Develop a heuristic, and hope it produces a good solution. • No guarantees on quality of solution. • Ex. TSP assignment heuristics. • Ex. Metropolis algorithm, simulating annealing, genetic Approximation algorithm. Find solution of provably good qt ](media/Intractability-image45.png)

![Coping with intractability Relax one of desired features. • Solve arbitrary instances of the problem. • Solve the problem to optimality. • Solve the problem in poly-time. Complexity theory deals with worst case behavior. • Instance(s) you want to solve may be "easy." • Chaff solves real-world SAT instances with 10K variablc Chaff: Engineering an Efficient SAT Solver Matthew W. Moskewicz Department of EECS UC Berkeley moskewcz@alumni.princeton.edu Conor F. Madigan Department of EECS MIT cmadigan@mit.edu Ying Zhao, Lintao Zhang, Sharad Malik Department of Electrical Engineering Princeton University {yingzhao, lintaoz, ](media/Intractability-image46.png)

![Hamilton path Goal. Find a simple path that visits every vertex exactly onc ](media/Intractability-image47.png)

![Hamilton path: Java implementation = G.V()) public class HamiltonPath private bool ean[] marked; private int count -o; // vertices on current // number of Hamiltonia public HamiltonPath(Graph G) marked = new boolean [G.V()] ; for (int v = 0; v < dfs(G, v, 1); private void dfs(Graph G, int v, count++ ; int depth) length of cu (depth of re marked [v] = true; found one if (depth for (int w . G. ad v ](media/Intractability-image48.png)
















































