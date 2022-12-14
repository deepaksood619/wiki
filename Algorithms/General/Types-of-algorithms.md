# Types of algorithms

Created: 2017-09-07 17:14:15 +0500

Modified: 2021-09-14 22:52:18 +0500

---

1.  Simple recursive algorithms

    a.  solves the base care directly

    b.  recurs with a simpler subproblem

2.  Backtracking algorithms

    a.  Based on a depth-first recursive search

    b.  ex- graph colouring (To color a map with no more than four colors)

<https://www.freecodecamp.org/news/solve-coding-interview-backtracking-problem

3.  Divide and conquer algorithms

    a.  divide the problems into smaller subproblems of the same type, and solve these subproblems recursively

    b.  combine the solutions to the subproblems into a solution to the original problem

    c.  ex- quicksort, mergesort

4.  Dynamic programming algorithms

    a.  remembers past results and use it to find new results

    b.  Optimal substructure

    c.  Overlapping subproblems

5.  Greedy algorithms

    a.  optimization problem is one in which you want to find, not just a solution, but the best solution. (take the best you can get right now, without regard for future consequences)

    b.  ex- counting money

6.  Branch and bound algorithms

    a.  generally used for optimization problems

    b.  as the algorithm progresses, a tree of subproblems is formed

    c.  The original problem is considered the "root problem"

    d.  A method is used to construct an upper and lower bound for a given problem

    e.  At each node, apply the bounding methods

        i.  If the bounds match, it is deemed a feasible solution to that particular subproblem

        ii. If bounds do not match, partition the problem represented by that node, and make the two subproblems into children nodes

    f.  Continue, using the best known feasible solution to trim sections of the tree, until all nodes have been solved or trimmed.

    g.  ex - Travelling salesman problem

7.  Brute force algorithms

    a.  simply tries all possibilities until a satisfactory solution is found

    b.  To improve brute force algorithms following can be used -

        i.  Heuristic - A "rule of thumb" that helps you decide which possibilities to look at first.

        ii. Optimization - A way to eliminate certain possibilities without fully exploring them

8.  Randomized algorithms

    a.  ex - Quicksort, uses a random number to choose a pivot





|     | ![Discrete Bioinformatics WS : , A Oktober 2010, 2122 Concept: Types of algorithms The exposition is based on the sources. wh.k:.h are all required rearing: 1 _ Corman, Leiserson, Rivest: Chapter 1 and 2 2. Motwani. Raghavan: Chapter t. In this lecture we will diSCLBS ways to Categorize classes Of algorithms. There is no classification. One should regard the task ot categorizing algorithms more as giviro them certain attributes. Atte' discussing how a given algorithm can be labeled (e.g. as a rancÉ)mized, we will discuss different techniques to analyze algorithms. Usually the labels with which we categorized an algorithm are helpful in ctK)0Sing the af+ropriate type Of &naly-SiS, Deterministic vs. Randomized One important exclusive) estinCtiOn Can make is. Whether the algorithm is determ,injStiC Deterministic algorithms produce on a given input the samo results folkywir•.a the same computation steps. Ran, domiled algorittms thrcm coins dwing executiom Hence either the cyder execution or result of rithm might be different for each run on the same input. There are subclasses alwithms. type algorithms Las Vegas A Las algorithm will always produce the same result on a given input. Rarxdomization will only aftect tho cyder the intemal In tho case Of Monte Carlo algorithms. the result may might Change. even be Wrong. a Monte Carlo algorithm produce the result With a certain probability. So of course the question arises: What are randcmized good tar? The computation might change dogonding on coin thrcnvs. Monte Carlo algorithms do not have to produce the result. Why would that be desirable? The answer is tWOBd : • Randomized usually have the effect perturbing the Or the input looks makes bad Cas•gs Very • Randomized algorithms are often very easy to implement. At the same time are in time Often superior to their deterministic counterparts Can you think ot an obvious example? We will to the example later on in more detail. Offline vs. Online Another important (and exclusive) distinction one can make is, whether the algorithm is otmne or Online algorithms are algorithms that do know their input at the It is to them online, Whereas normally algorithms know their input beforehand, What seems like a minor hag on the Of algorithms and on their analygig Online algorithms are usually analyzed by using the concept ot mm-pettiveness, that is the worst case factor they take to the best algorithm with One example tor an online problem is the ski ](media/Types-of-algorithms-image1.png) |
|--|----------------------------------------------------------------------|

![](media/Types-of-algorithms-image2.png)

![Concept: Type-S Of aru:i analyses, by Knut Rein-err, Oktober 2010, 21 •22 • Brute force aöcrithms • and Others... Simple recursive algorithms A algorithm • the base Cases erectly with a Simpler Subprot*em Does some extra work to convert the solution to the simpler subproNem into a soaution the given problem Exa are: • To count the number ot elements in a 'st: --- If the list is empty. Otherwise, --- Step past the first element, the remaining elements in the --- ono to the result To test if a value occurs in a list: --- If the list is empty. retwn false; OthemiSe, --- If the first thing an the list is the true; Otherwise --- Step past the first element. and test mother the value occurs in the remai"rof the list Backtracking algorithms A backtracking is based on a depth-first recursive search, It Tests to it a solution has been and if so. returns it: Otherwise • each choice that be made at this --- Make --- If the returns a solution. return it • It no choices remain, return failure For exam* color a with no more than tour colors; --- It all countries have been colored (n > number ot countries) return success; otherwise, --- For each color cot tour colors, It country n is not to a has c Color country n coor c recursivlv color country • If return Return tailure (it loop exits) ](media/Types-of-algorithms-image3.png)

![Concept. Type-S O' aru:i analyses, by Rein-err, Oktober 2010, 21 •22 Divide-and-conquer algorithms A algorithm Consists Of two parts. Divide the problem into smaller subgroblems ot the same ard solve these subprouems recursively the SOIutiOOS to the Subproblems into a Solution to the problem Traditionany. an algorithm is only called divide-and-conquer it n contains two or more recursive calls. TWO " s : --- Partition the array into two parts, quiCkScYt each Of parts --- No additional work is required to combine the tm sorted snrls --- Cut the array in half. ar,d mttgesort each halt --- the two Sorted arrays into a Sorted array metging than Dynamic programming algorithms A dynamic programming algorithm remembers past results and uses them to tind new Dynamic pro- gramming is generally usgd o*imization problems in Which: Multi* solutions exist, need to find the best one optirna,' substructure and overlapping • Optimal substructure; Optimal mntains optimal solutions to • Overlaming subproblems: Solutions to subproblems can be Stored and in a lashio•n This differs trom where subprobkms generally need not There are many examples in bioinformatics. For example: Compute an optimal pair-wise --- Optimal substructure: the alignment ot two prefixes contains solutions tor the optimal alignments of smaller prefixes --- subproblems; solution hr the optimal alignment prefixes can be constructed using the Stored solutions 01 the alignn*nt 01 three subprob:emg (in the linear gap model) Compute a Viterbi path in an HMM --- Optimal the Viterbi path an in a state Of an Shorter Viterbi paths fo•r smaller pans of the input and other HMM states, --- Owar1ag3ing Subprot*emg: The Were path an input prefix ending a state Of an HMM can be constructed using the stored solutions ot Viterbi paths 'or a shorter input preta and all States Greedy algorithms ](media/Types-of-algorithms-image4.png)

![Concept: Type-S Of aru:i analyses, by Knut Rein-err, Oktober 2010, 21 •22 A greedy algorithm sometimes works well tor optimization groblems. A greedy algorithm works in phases. At each You take the best you can get right now. without regard tor future consequerces You that by Choosing a optimum at each Step. you w" end up at a global optimum This strategy actually otten works quite well and 'or some class ot problems always yields an optimal solution. 00 yOu kncm a Simple graph which is Solved greedily to optimality? Another example would be the to•llowing. pau want to count out a certain amount of money. using the fewest POSSEe bills and coins A greedy algorithm do this be take the largest PSSible bill or coin that does not overshoot. For To make $6.39. you can choose: • a$5 bill • a $1 bill. to make $6 • A IOC to $6.35 lour Iccoins. to make $6.39 FM US the greedy algmithm always gives the other Systems not (imagine a currency with units of 1.7. and 10 and try tho algorithm tor 15 units). Branch-and-bound algorithms Branch•and-bound algorithms are generally used optirwzatio•n problems. AS the algorithm progresses. a tree ot subproblems is formed. The original problem is the roof A memd is used to construct an upper and bound a given problem. At each bounding methods, • If the match. it is deemed a feasibø solution to that particular • It do match, partition the represented by that and make the two subproNems into Cmtinue, using me best known feasiNe solution to trim sections ot tree, until a' nodes have solved or An ot a branch-and-bound algorithms the tor the salesman (TSP). A salesman hag to Viet each o! n Cities (at least) once each, and Wants to minimize total travelled_ Consider the root problem to be the problem ot finding the shortest route through a set ot cities visiting each City • Split the ncy3e into tm child problems: --- Shortest route Visiting City --- Shortest route mt visiting city A first SubWViding similarly as the tree grows Brute force algorithms ](media/Types-of-algorithms-image5.png)

![anaÖ'SiS, by Knut Rein-err, Oktober 20 O, 21 •22 A brute Orce algorithm simply tries all possiililies until a satisfactory solution is found. Such an algorithm can • Optimizing: Find the be-St SO•kJtiOrL This require finding Solutions. if a value the best Solution is known. it may stop when any best solution is toured (Example: Finding the best path tor a 'ravelling salesman) • Satisficiro: Stop as scon as a solution is tcund that is wad enough (Exam*: Finding a traveling sales• man path that is within Of Conclusion I presented to Wu many categories with which you can classily or label al.orihms. Such a classification gives you a undeßtanding an works an hcm analyze it What algorithms do you kncm? area what labels would they get? In the we wil about hcyø to dif&rent kind Of algorithms with techniques, Concept: Run time analysis The exposition is based on the to'lOwing Sources, are all required rearing; l. LeiserSOn, Rive-st; to alw-ithms, Chapter 18 In this the basic notations run time analyses and then rÉscribe the different 01 WO'St•eaSO time. case run time amortized run and the analysis Ot co mpe Lets Start by recalling the 01 the Landau symbols (O. geo.:nandge lim lim In the loll•twing We list commonly descr%ing Classes Of Mind that We the more common sign instead ot the (more correct) E sign, We Say function f: • if = • grows it O(logn) • f(n) tor a k N. • if = • grows quadratic/y, - We say at function r: ](media/Types-of-algorithms-image6.png)

![C-oncept_• by Knut Oktober 2010, 21 • grcy•spo'ynomiayy. it t(n) --- a k e N. • grCmS if € N. • subexpooenr/aNy. it --- < c E k. • grcY"S exponentially, if for a < C E k Atter that reminder lets introduce the different run time definitions area explain them using an example. worst Case analysis: We aSSwne the input and execution Ot the the worst Case _ The latter is o' murse only applicable 'or non-deterministic algorithms. best case analysis: We assume for both, the and the execution Of the the best Case. The latter is of only applicable 'or non-deterministic algorithms. average Case analysis: We average all POSSiNe the run time Ot Our (detetminiStiC) algorithm. • expected run time analysis: Our algorithm runs depending on the value of some random variables tor which we their distributions, Hence we try to estimate the expected run time of the • amortized analysis: an algorithm (usualty an operation on a data structure) needs a long time run. changes the data structure such that subsequent are not costly. A worst case run time analysis would be i--,apæopriate, An amortized analysis averages over a series of (not over the ir,put). comp2titivenesS analysis; For online algorithms we need a conæpt of run time analySiS_ The main concept is to compare the run limo an algorithm needs in the Caso (i.e. forall possible inputs) knowing the with the ot an optimal offline (which the input), The (deterministic) qu&sort algorithm for sorting an array a fixed as its pint element, lets say w.l.o,g. the one, arranges all smaller elements on the lett the all larger ones on the right and on the two halts. worst case analysis: In the case, the lett the right) halt are always empty, Hence the worst case run time the solubon to the recurrence t(n) (n --- O. Obviously best Cas•g analysis: In the best case. the left and the right half differ in by at most one. Hence the best case run time is the solution to the t(n) (n --- l) O. Obviously t n), average case analysis: We average possible inputs the time Of the deterrinistic The result is that on average quicksort needs comparisons, The the input the bad cage run time Of are Worrygome_ (like many other algcyithms) can be made ccywiderably nure robust randMnizing the algorithm. In randomized qudssc•rt We Ch:30Se the element using the Value 01 a uniformly diströuted (1. expected run time analysis: randomized qui*sorl can be shown to run in expected time high probability We &SCugg SLRh an in detail (and a similar one using SkipliStS later in the lecture). Example: randomized quicksort ](media/Types-of-algorithms-image7.png)

![anaÖ'SiS, by Knut Rein-err, Oktober 20 O, 21 •22 Ouicksort is a perfect example to demonstrate the pcm•er ot randomization. First we create a randomized version Of Called by not Choosing the first as pix.t element but a random element Of the sublist we have to sort in each recursive can. RandOs is a Las-Vegas style randomized. divide-and- By doing so. we created an algorithm whose mncome on random choices. cr 'kit differently. on the values Of Some variable-S. Hence have to analyse its time Or more particularly the expected numer Of Comparisons in an execution Of RandQS Lets do that. Let the Of rank i the Set S which we want Sort we define the random variable X, to assume the value i' Sly, area Sill are compared in an execution 01 RandOS The variable is C otherwise. So otwiously the run tin* Of RandQS is X The sum ot random variables is itselt a random variable. In the analysis Of the run time we are henoe interested in E(Xd). Let p. be the probability that Su and SD are in an execution of RandOS. Then: we have to Concentrate on the large is, TO analyze this We Viet.' the execution Of a tree in Which each is labeled With a distinct elemenst y E S. The elements in let' subtree are then all to y, the elements in the right subtree are > than y. Obseue that the root of the is compared to elements an the tree, but there is no mmparison an Of loft subtree With an Of the right subtree. and SO) are it one is an ancestor ot the other. An in---order traversal 01 the tree the elements 01 S in sorted For analysis wc on tho Older traversal, This traversal goes and left-to-right and yields a 't ot the of we make two key observations; l. a comparison between Sm and Sm it and only it or earlier in 't than any element ot rank between SO and SO), 2. Any Of the elements is equally likely in the 01 the probability ot either SO or SO, being the first one is exactly From these observabons that pa using value in our Ctynputation 01 E(X) yields: - 2.n,Hn. (1.10) wt*re Hr, is the n --- th harmonic given that Hn e(l) it that "*Cted run time 01 Randos is 0(nJogn). ](media/Types-of-algorithms-image8.png)

![C-oncept_• by Knut Oktober 2010, 21 Comparing this to the wo«st case bme ot the deterministic Ouicksort which is O(n2) how pmvedul a coin throw Can As a second concept in run time analysis we ha•.e a look at amortized analysis. Otten (no matter whether tor ranchmized Or algorithms) the worst Case is not because the wr%t Case cannot happen otten, No matter what the input is. If this is the Case, then the run time averaged Over a Series Of n opetatiCHIS equal to n times the worst Case time. the averaged nun tin* will Often be much t*tter It is important to note that this is different torm the amrage run time analysis. There one averages over the Of inputs. SO it could Still that an alprithm, with a input runs very Slowly Here. we average over all possible excutions ot the algorithms 'or any given input. To make this &stinction dear. this type Of analysis is called amortized analysis. Concept: Amortized analysis Imagine tor example a stack. We have the tollcming operations on the st" • pop the top element Of the Stack and returns it • Push1S,x1 pushod elementx on the stack. • Multi Pop (S,kl returns at most the k elements from the stack (itcans Pop k times). Obviously tho operations Pop and Push have Worst case time 0<1). the Multi Pop Can be linear in the stack size. So if we assume that at n objects are on the stack a multiFnp can have WC"St COSt 01 0(n). Hence in the case a series Of n Stack operations is bounded by We Hill now use this to illustrate different techn..es to find a more realistic arnwtized bound for n operations. The three methods to the analysis which are: The aggregate m The accounting method • The m ethod The aggregate method Here we sho•.•.• that hr an n, a sequence ot n operations takes mrst-case time in total. tor this case, the average COSI, COSt ig Note that this method Charge-g the game amortiz•d to each operation in the of operations, even if this sequence contains different ot operations. The Other tm methods Can assign amortized COStS each type 01 operation. We argue as follows, In any sequence n operations on an initial"' empty Sta* each object can be popped at most each time it ig pushed. Therefore, the number Of Pop Can be a nonempty Stack (includiro cans within Multi Pop), is at most the number ot Push operations, which is a' most n, any value Of any sequence Of n Push, Pop, Multi? op operations takes a Of O(n) time. Hence the amortized mst ot any operation is The accounting method In the accounting method assign differing Charge-S to different operations, With some operations Char* more cr less than they actually mst. The amount we charge an operation is called its amortized cost. ](media/Types-of-algorithms-image9.png)

![anaÖ'SiS, by Knut Rein-err, Oktober 20 O, 21 •22 When an operation's amortized cost exceeds its actual cost. the difference is assigned to specific objects in the data Structure as Credit C.edit Can then be used to pay later 'Or operations whose amorbzed is less than their actual cost. One Choose the amorbzed COStS Carefully If the analysis with amortized to Show that in the worst case the average cost per coeraticn is small. then the total amortized cost ot a sequence ot operations must be an up*r bound the actual the Sequence this must hold Sequences Of opetatiCHIS, the total Credit must be nonnegative at all time-S. Let us return to our stack example. The actual are • Pop(S) 1. • Pushls,x' t. • Multi Pop (S,k) nn(k.s). where sis thesizeotthestack. Let us BSSiw1 the following COStS_ • Pop(S) O. • push15,x' 2, Note that the amortized costs 01 an operations is Oil) and hence tho amortized cost of n operations is an). Note also that the actual Mul •o i Fop is variable whereas the cost is using the same argument as in the aWregate method it is easy to see that our account is aways charged starting with an empty stack. Each push operation pays 2 One tor its cost and one the cost of the Off st". either thtOi_Oh a normal Pop or through a i Pop operation. Please note that this can assign individual, different amortized costs to each operation, The potential method Instead 01 representing prepaid work as credit Stored With specific objects in the data Structure. the potential method represents the prepaid work as •potential energy" Simply •potential- that Can be to pay operations, The potent-al is associated With the data Structure as a Whole rather than With specific Objects Within the data structure. as We start with an initial data structure on n are performed. For each i = 1 2, let be the actual COSt Of operation and O the data Stn_xture that results alter apptying the '-th operation, A maps each data Structure Di to a real nurnber which is the potential associated with the data structure O, , The amortized cost ot the '-th operation with resg*ct to the potential tunctio•n is that is, the amortized COSt is the actual COSt plus the increase in potential due to its op•ntim_ the total amortized cost ot the n operations is; cb(D,_,)) If We Can define a potential function so that then total amorti&d COSt is an upper on the total actual cost. In practice we do not know hmv many operations might be performed and therefore ](media/Types-of-algorithms-image10.png)



![Concept: Amortized analysis, by Knut Reinert, 18. Oktober 2010, 21:22 1011 guarantee the > for all i. It is often convenient to define = O and then show that all other potentials are non negative. Lets illustrate the method using our stack example. We define the potential function on the stack as the number of elements it contains. Hence the empty stack Do has = O. Since the number of objects on the stack is never negative we have > O for all stacks Di resulting after the i-th operation. Let us now compute the amortized costs of the various stack operations. If the i-th operation on a stack containing s objects is a Push operation, then the potential difference is (1.11) Hence the amortized cost is: If the i-th operation on a stack containing s objects is a MultiPop (S, k) then k' = min(k,s) objects are popped off the stack. The actual cost of the operation is k' and the potential difference is: (1.12) Hence the amortized cost is: A similar result is obtained for Pop. This shows that the amortized cost of each operation is 0(1) and hence the total amortized cost of a sequence of n operations is O(n). ](media/Types-of-algorithms-image11.jpg)











