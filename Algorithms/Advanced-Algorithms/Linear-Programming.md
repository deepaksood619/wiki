# Linear Programming

Created: 2018-04-19 00:00:52 +0500

Modified: 2019-10-10 11:56:31 +0500

---

The quintessential problem-solving model is known as linear programming, and the simplex method for solving it is one of the most widely used algorithms. In this lecture, we given an overview of this central topic in operations research and describe its relationship to algorithms that we have considered.





![Linear programming What is it? Problem-solving model for optimal allocation of s resources, among a number of competing activities that enc( • Shortest paths, maxflow, MST, matching, assignment • Ax = b, 2-person zero-sum games maximize subject to the constraints 13A 35A 23B 15B 20B 480 160 1190 ](media/Linear-Programming-image1.png)

![Applications Agriculture. Diet problem. Computer science. Compiler register allocation, data mining Electrical engineering. VLSI design, optimal clocking. Energy. Blending petroleum products. Economics. Equilibrium theory, two-person zero-sum games Water quality management. Environment. Finance. Portfolio optimization. Logistics. Supply-chain management. Management. Hotel yield management. Marketing. Direct mail advertising. Manufacturing. Production line balancing, cutting stock. Medicine. Radioactive seed placement in cancer treatment. ](media/Linear-Programming-image2.png)



# Brewer's Problem

![Toy LP example: brewer's problem Small brewery produces ale and beer. • Production limited by scarce resources: corn (480 lbs) hops (160 oz) corn, hops, barlc malt (1190 lbs) • Recipes for ale and beer require different proportions of ](media/Linear-Programming-image3.png)

![Toy LP example: brewer's problem Brewer's problem: choose product mix to maximize profits. ale 34 0 19.5 goods are divisible 12 (ok to produce fractional barrels) 7 beer 0 32 20.5 28 7 corn 179 480 405 480 hops 136 128 160 160 34 barre [ am malt 1190 640 1092.5 980 ALE ](media/Linear-Programming-image4.png)

![Brewer's problem: linear programming formulation Linear programming formulation. • Let A be the number of barrels of ale. • Let B be the number of barrels of beer. maximize subject to the constraints ale 13A 35A beer 23B 15B 4B 20B B 480 160 1190 0 profits corn hops malt aeo POUNDS 5 POUNDS CORN 35 MALT ](media/Linear-Programming-image5.png)

![Brewer's problem: feasible region Inequalities define halfplanes; feasible region is a convex pol (26, 14) hops 4A + 4B 160 (0, 32) beer malt 35A + 20B 1190 (12, 28 ](media/Linear-Programming-image6.png)

![Brewer's problem: objective function (0, 32) (12, 28 beer (26, 14) Poo.t> 13A + 23 ](media/Linear-Programming-image7.png)

![Brewer's problem: geometry Optimal solution occurs at an extreme point. intersection of 2 constraine extreme point (0, 32) (12, 28 beer (26, 14) ](media/Linear-Programming-image8.png)

![Standard form linear program Goal. Maximize linear objective function of n nonnegative subject to m linear equations. • Input: real numbers Clij, cj, bi. • Output: real numbers xj. primal problem (P) linear means no x2, xy, arccos(x) maximize subject to the constraints a 11 Xl an Xl ami al 2 X2 a22 x2 am2 X2 cn xn aln xn a2n Xn amn Xn b2 matr maximize subject to the constraints ](media/Linear-Programming-image9.png)

![Converting the brewer's problem to the standard form Original formulation. maximize subject to the constraints Standard form. 35A 23B 15B 4B 20B 480 160 1190 • Add variable Zand equation corresponding to objective f • Add slack variable to convert each inequality to an equal • Now a 6-dimensional problem. maximize z 23B ](media/Linear-Programming-image10.png)

![Geometry Inequalities define halfspaces; feasible region is a convex po A set is convex if for any two points a and b in the set, so is An extreme point of a set is a point in the set that can't be w 1/4 (a + b), where a and b are two distinct points in the set. extreme point ](media/Linear-Programming-image11.png)

![Geometry (continued) Extreme point property. If there exists an optimal solution then there exists one that is an extreme point. • Good news: number of extreme points to consider is fini • Bad news : number of extreme points can be exponentiz local optima are (follows because objec and feasible reg ](media/Linear-Programming-image12.png)



![Which one the following equations is a linear equation? = 12 sin Xl + X2 = 12 + 5X2 + = 12 Correct Yes, this is a linear equation. + 3x1x3 = 12 ](media/Linear-Programming-image13.png)

# 

# Simplex Algorithms

![Simplex algorithm Simplex algorithm. [George Dantzig, 1947] • Developed shortly after WWII in response to logistical prc including Berlin airlift. • Ranked as one of top 10 scientific algorithms of 20th cen Generic algorithm. • Start at some extreme point. never decreasing obj Pivot from one extreme point to an adjacent one. • Repeat until optimal. How to implement? Linear algebra. ](media/Linear-Programming-image14.png)

![• BF S maximize subject to the Simplex algorithm: basis A basis is a subset of m of the n variables. Basic feasible solution (BFS). Set n ---m nonbasic variables to 0, solve for remaining m v, Solve m equations in m unknowns. If unique and feasible BFS. {B, SH,s } (0, 32) extreme point. (12, z 13A 23B 15B -z- Sc 480 beer ](media/Linear-Programming-image15.png)

![Simplex algorithm: initialization maximize subject to the constraints z 35A 23B 15B 20B B Sc z one basic variable per row Initial basic feasible solution. • Start with slack variables as the basis. • Set non-basic variables A and B to 0. 0 480 160 1190 0 no ](media/Linear-Programming-image16.png)

![Simplex algorithm: pivot 1 maximize subject to the constraints z 35A pivot 23B 15B 20B B z Sc substitute B = (1/15) (480 - 5A - sc) and add B into the basis (rewrite 2nd equation, eliminate B in 1st, 3rd, and 4th equations) maximize z (16/3) A - (23/1 5) sc z 0 480 160 1190 0 -736 ](media/Linear-Programming-image17.png)



![Why pivot on row 2 (and not row 3 or 4)? Pivoting on row 2 results in a bigger increase in the objective function than pivoting on either row 3 or 4. Pivoting on either row 3 or row 4 would lead to a basic infeasible solution. Correct Right. We must choose the row in such a way that the resulting basic solution is feasible. It's the first row (among rows 2, 3, and 4) with a positive entry in the pivot column. Could pivot on either row 3 or row 4 since both coefficients are positive. ](media/Linear-Programming-image18.png)



![Simplex algorithm: pivot 1 positive coefficient maximize subject to the constraints z 35A pivot 23B 15B 4B 20B B z Sc 0 480 160 1190 0 Why pivot on column 2 (corresponding to variable B)? Q. • Its objective function coefficient is positive. (each unit increase in B from 0 increases objective value Pivoting on column I (corresponding to A) also OK. ](media/Linear-Programming-image19.png)

![Simplex algorithm: pivot 2 maximize subject to the constraints z (16/3) A (8/3) A (85/3) A pivot (23/15) sc (4/1 5) Sc (4/3) sc sc z substitute A = (3/8) (32 + (4/15) sc - (rewrite 3rd equation, eliminate A in maximize subject z Sc SH ) and add A into the basis 1st, 2nd, and 4th equations) z -736 32 32 550 -800 ](media/Linear-Programming-image20.png)

![Simplex algorithm: optimality When to stop pivoting? Q. A. When no objective function coefficient is positive. Q. Why is resulting solution optimal? A. Any feasible solution satisfies current system of equation In particular: Thus, optimal objective value Z* S 800 since sc, SH 0. • Current BFS has value 800 optimal. maximize subject z Sc z -800 ](media/Linear-Programming-image21.png)



# Implementations

![Simplex tableau Encode standard form LP in a single Java 2D array. maximize subject to the constraints 480 160 1190 5 4 35 15 4 20 z 13A 35A 0 0 23B 15B 20B o o 480 160 1190 -z- m 0 0 ](media/Linear-Programming-image22.png)

![Simplex tableau Simplex algorithm transforms initial 2D array into solution. maximize subject to the constraints z 1/10 -1/10 -25/6 Sc (25/6) sc z o o (3/8) SH (85/8) SH + m o 0 0 1/8 3/8 -85/8 28 12 110 ](media/Linear-Programming-image23.png)

![Simplex algorithm: initial simplex tableaux Construct the initial simplex tableau. m 1 // simplex tabl eaux // M constraints, N vari ables c n public class Simplex private double[] C] a; private int m, n; public m a for Simpl C] A, double[] b, double[] c) = b. length; n = c. length; = new double[m+l] [m+n+l] ; (int i ](media/Linear-Programming-image24.png)

![Simplex algorithm: Bland's rule Find entering column q using Bland's rule: index of first column whose objective function coefficient is positive. private int bland() for (int q if (a[M] [q] > 0) return -1; return q; m entering column q has objective function coef optimal ](media/Linear-Programming-image25.png)

![Simplex algorithm: min-ratio rule Find leaving rowp using min ratio rule. (Bland's rule: if a tie, choose first such row) private int minRatioRu1e(int q) int p for (int i = 0; i < m; i + + ) if (a[i] [q] <= O) continue; else if (p --- else if / [q] < a[p] [ni+n] / a[p] m ](media/Linear-Programming-image26.png)

![Simplex algorithm: pivot on element row p, column q. Pivot m public void pivot(int p, for (int i --- for (int j = if for (int int q) m+n; j + + ) ](media/Linear-Programming-image27.png)

![Simplex algorithm: bare-bones implementation Execute the simplex algorithm. public void solve() while (true) int q int p if (P --- bland(); = -1) break; = minRatioRu1e(q) ; m entering column q (optim leaving row p (unboundec ](media/Linear-Programming-image28.png)



![What is the order of growth of the running time of performing one simplex pivot using the given code as a function of the number of original variables n and the number of inequalities m? Assume m 2 n. m 2 n 2 Correct The bottleneck operation is performing the pivot. Finding the entering column (using Bland's rule) and the leaving row (using the min ratio rule) take only linear time. There are m rows and m + n 2m columns. ](media/Linear-Programming-image29.png)

![Simplex algorithm: running time Remarkable property. In typical practical applications, simpli terminates after at most 2 (m + n) pivots. Pivoting rules. Carefully balance the cost of finding an enter with the number of pivots needed. • No pivot rule is known that is guaranteed to be polynom • Most pivot rules are known to be exponential (or worse) Smoothed Analysis of Algorithms: Why the Simplex Algorithm Usually Takes Polynomial Time ](media/Linear-Programming-image30.png)

![Simplex algorithm: degeneracy Degeneracy. New basis, same extreme point. "stalling" is common in pr. Cycling. Get stuck by cycling through different bases that al to same extreme point. ](media/Linear-Programming-image31.png)

![Simplex algorithm: implementation issues To improve the bare-bones implementation. • Avoid stalling. • Maintain sparsity. • Numerical stability. • Detect infeasibility. • Detect unboundedness. requires artful engineering requires fancy data structures requires advanced math run "phase l" simplex algorithm no leaving row Best practice. Don't implement it yourself! Basic implementations. Available in many programming env Industrial-strength solvers. Routinely solve LPs with millions Modeling languages. Simplify task of modeling problem as L ](media/Linear-Programming-image32.png)

![Brief history 1939. 1947. 1947. 1947. 1948. 1975. 1979. 1984. 1990. Production, planning. [Kantorovich] Simplex algorithm. [Dantzig] Duality. [von Neumann, Dantzig, Gale-Kuhn-Tucker] Equilibrium theory. [Koopmans] Berlin airlift. [Dantzig] Nobel Prize in Economics. [Kantorovich and Koopman Ellipsoid algorithm. [Khachiyan] Projective-scaling algorithm. [Karmarkar] Interior-point methods. [Nesterov-Nemirovskii, Mehor ](media/Linear-Programming-image33.png)



![Which of the following are advantages of an industrial-strength linear programming solver over the one we implemented? Less susceptible to floating-point roundoff error. Much faster at solving large and/or sparse linear programs. Detects infeasibility and unboundedness. All of the above. Correct Unless you are solving a toy linear program, you should use an industrial-strength library. ](media/Linear-Programming-image34.png)

# 

# Reductions

![Reductions to standard form Minimization problem. 2 constraints. Unrestricted variables. nonstandard form minimize subject to: standard form maximize Replace min 13A + 15B with max --- 13A Replace 4A+4B 2 160 with 4A +4B Replace B with B = Bo --- Bl, Bo 0, 13A 35A -13A 15B 15B 20B B > > is 480 160 1190 unrestricted 15B() 15B1 ](media/Linear-Programming-image35.png)

![Modeling Linear "programming" (1 950s term) = reduction to LP (moder • Process of formulating an LP model for a problem. • Solution to LP for a specific problem gives solution to thc Identify variables. Define constraints (inequalities and equations). 2. Define objective function. 3. software usually performs 4. Convert to standard form. this step automatically Examples. . Maxflow. • Shortest paths. ](media/Linear-Programming-image36.png)

![Maxflow problem (revisited) Input. Weighted digraph G, single source s and single sink t. Goal. Find maximum flow from s to t. 2.0 3.0 3.0 1.0 1.0 1.0 2.0 maxflow problem 6 8 o o 1 1 2 2 3 1 2 3 4 3 4 5 1 I 3 0 2 I 4 ](media/Linear-Programming-image37.png)

![Modeling the maxflow problem as a linear program Variables. xvw = flow on edge Constraints. Capacity and flow conservation. Objective function. Net flow into t. maxflow problem 6 8 o o 1 1 2 2 3 1 2 3 4 3 4 5 2.0 3.0 3.0 1.0 1.0 1.0 2.0 0 1 I 3 2 I 4 LP formulation Maximize x 35 + x 45 subject to the constrc osx 45 ](media/Linear-Programming-image38.png)

![Maximum cardinality bipartite matching problem Input. Bipartite graph. Goal. Find a matching of maximum cardinality. set of edges with no vertex appearing twice Interpretation. Mutual preference constraints. • People to jobs. • Students to writing seminars. Alice Adobe, Apple, Google Bob Adobe, Apple, Yahoo Carol Google, IBM, Sun Dave Adobe Alice, Bob, Dave Apple Alice, Bob, Dave Google Alice, Carol, Frank IBM c ](media/Linear-Programming-image39.png)

![Maximum cardinality bipartite matching problem LP formulation. One variable per pair. Interpretation. xo = 1 if person i assigned to job j. XAO + XAI + XA2 + XBO + XBI + XB5 + XC2 + XC3 + XC4 maximize + XDO + XDI + XE3 + XE4 + XE5 + XF2 + XF4 + XF5 at most one job per person + Xm + XA2 XBO + XBI +XB5 subject XC2 + XC3 + XC4 to the XD0 + XDI constraints XE3 + XE4 + XE5 XF2 + XF4 + XF5 all xo at most one person per job XAO + XBO + XD0 Xm + XBI +XDI XA2 + XC2 + XF2 XC3 + XE3 XC4 + XE4 + XF4 XB5 + XE5 + XF5 ](media/Linear-Programming-image40.png)

![Linear programming perspective Q. Got an optimization problem? Ex. Maxflow, bipartite matching, shortest paths [many, r Approach l: Use a specialized algorithm to solve it. • Algorithms 4/e. • Vast literature on algorithms. Approach 2: Use linear programming. • Many problems are easily modeled as LPs. • Commercial solvers can solve those LPs. Might be slower than specialized solution (but you might not care). MST assignment problem scheduling ](media/Linear-Programming-image41.png)

![Universal problem-solving model (in theory) Is there a universal problem-solving model? • Maxflow. • Shortest paths. • Bipartite matching. • Assignment problem. • Multicommodity flow. • Two-person zero-sum games. • Linear programming. • Factoring tractable intractable ? ](media/Linear-Programming-image42.png)



![The assignment problem is to assign n jobs to n machines such that each job is processed on exactly one machine and each machine processes exactly one job so as to minimize the total cost, where Cij 2 0 is the cost of processing jobj on machine i. How can you formulate the assignment problem as a linear program? Same as bipartite matching formulation but change constraint for jobj to c•x• < l. iljlj--- Same as bipartite matching formulation but change constraint for machine i to c x < 1. jij ij --- Same as bipartite matching formulation but change objective function to Correct As with the bipartite matching formulation, all extreme points have integer (0 or 1) coordinates. Thus, we can interpret xo = 1 as assigning job j to machine i. No easy way to formulate as a linear program. ](media/Linear-Programming-image43.png)



**Others**

<https://opensourc.es/blog/simplex>











































