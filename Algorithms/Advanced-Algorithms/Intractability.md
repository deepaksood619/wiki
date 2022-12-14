# Intractability

Created: 2018-04-19 00:02:30 +0500

Modified: 2019-09-08 11:56:52 +0500

---

Is there a universal problem-solving model to which all problems that we would like to solve reduce and for which we know an efficient algorithm? You may be surprised to learn that we do not know the answer to this question. In this lecture we introduce the complexity classes P, NP, and NP-complete, pose the famous P = NP question, and consider implications in the context of algorithms that we have treated in this course.

![image](media/Intractability-image1.png)

![image](media/Intractability-image2.png)

![image](media/Intractability-image3.png)

## Church-Turing Thesis (Computability Thesis) is a hypothesis about the nature of computable functions. It states that a function on the natural numbers is computable by a human being following an algorithm, ignoring resource limitation, if and only if it is computable by a Turing machine

![image](media/Intractability-image4.png)

![image](media/Intractability-image5.png)

![image](media/Intractability-image6.png)

![image](media/Intractability-image7.png)

![image](media/Intractability-image8.png)

Intractable - hard to control or deal with (difficult or stubborn)

![image](media/Intractability-image9.png)

# Search Problems

![image](media/Intractability-image10.png)

## ILP - Integer Linear Programming

Aninteger programmingproblem is a[mathematical optimization](https://en.wikipedia.org/wiki/Mathematical_optimization)or[feasibility](https://en.wikipedia.org/wiki/Constraint_satisfaction_problem)program in which some or all of the variables are restricted to be[integers](https://en.wikipedia.org/wiki/Integer). In many settings the term refers tointeger[linear programming](https://en.wikipedia.org/wiki/Linear_programming)(ILP), in which the objective function and the constraints (other than the integer constraints) are[linear](https://en.wikipedia.org/wiki/Linear_function_(calculus)).

Integer programming is[NP-complete](https://en.wikipedia.org/wiki/NP-complete). In particular, the special case of 0-1 integer linear programming, in which unknowns are binary, and only the restrictions must be satisfied, is one of[Karp's 21 NP-complete problems](https://en.wikipedia.org/wiki/Karp%27s_21_NP-complete_problems).

If some decision variables are not discrete the problem is known as amixed-integer programmingproblem.

<https://en.wikipedia.org/wiki/Integer_programming>

<https://www.toptal.com/algorithms/mixed-integer-programming>

![image](media/Intractability-image11.png)

![image](media/Intractability-image12.png)

![image](media/Intractability-image13.png)

![image](media/Intractability-image14.png)

![image](media/Intractability-image15.png)

![image](media/Intractability-image16.png)

![image](media/Intractability-image17.png)

![image](media/Intractability-image18.png)

# P vs NP

NP - Non Deterministic Polynomial Time (The complexity class NPcontains all of the problems inP---it is often incorrectly ascribed to mean "not polynomial time.")

![image](media/Intractability-image19.png)

![image](media/Intractability-image20.png)

![image](media/Intractability-image21.png)

![image](media/Intractability-image22.png)

![image](media/Intractability-image23.png)

![image](media/Intractability-image24.png)

![image](media/Intractability-image25.png)

![image](media/Intractability-image26.png)

# Classifying Problems

![image](media/Intractability-image27.png)

![image](media/Intractability-image28.png)

![image](media/Intractability-image29.png)

![image](media/Intractability-image30.png)

![image](media/Intractability-image31.png)

![image](media/Intractability-image32.png)

![image](media/Intractability-image33.png)

<https://sahandsaba.com/understanding-sat-by-implementing-a-simple-sat-solver-in-python.html>

#

# NP-completeness

![image](media/Intractability-image34.png)

## Cook - Levin Theorem

In[computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory), the**Cook--Levin theorem**, also known as**Cook's theorem**, states that the[Boolean satisfiability problem](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem)is[NP-complete](https://en.wikipedia.org/wiki/NP-completeness). That is, any problem in[NP](https://en.wikipedia.org/wiki/NP_(complexity))can be[reduced](https://en.wikipedia.org/wiki/Reduction_(complexity))in polynomial time by a[deterministic Turing machine](https://en.wikipedia.org/wiki/Deterministic_Turing_machine)to the problem of determining whether a Boolean formula is satisfiable.

An important consequence of this theorem is that if there exists a deterministic polynomial time algorithm for solving Boolean satisfiability, then every[NP](https://en.wikipedia.org/wiki/NP_(complexity))problem can be solved by a deterministic polynomial time algorithm.

![image](media/Intractability-image35.png)

![image](media/Intractability-image36.png)

![image](media/Intractability-image37.png)

![image](media/Intractability-image38.png)

![image](media/Intractability-image39.png)

![image](media/Intractability-image40.png)

# Coping with intractability

![image](media/Intractability-image41.png)

![image](media/Intractability-image42.png)

![image](media/Intractability-image43.png)

![image](media/Intractability-image44.png)

![image](media/Intractability-image45.png)

![image](media/Intractability-image46.png)

![image](media/Intractability-image47.png)

![image](media/Intractability-image48.png)
