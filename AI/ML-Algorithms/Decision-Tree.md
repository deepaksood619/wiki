# Decision Tree

Created: 2019-04-21 13:03:15 +0500

Modified: 2022-08-06 22:36:24 +0500

---

**Decision Tree for Big Data Analytics**



Hi, decision Trees are an important type of algorithm for predictive modeling machine learning.



The representation of the decision treemodel is a binary tree. Each node represents a single input variable (x) and a split point on that variable (assuming the variable is numeric).



The leaf nodes of the tree contain an output variable (y) which is used to make a prediction.



Predictions are made by walking the splits of the tree until arriving at a leaf node and output the class value at that leaf node.



Trees are fast to learn and very fast for making predictions. They are also often accurate for a broad range of problems and do not require any special preparation for your data.



Decision trees have a high variance and canyield more accurate predictions when used in an ensemble.



**Explain the Decision Tree algorithm**

Machine learning makes use of decision trees to predict the direction of the input using a tree-like structure. They are generally binary trees with a single question node followed by two sub-nodes according to the question. Once it reaches the leaf nodes, we can make an accurate prediction of the input.

![animal tree Has feathers? Hawk rue Can fly? rue False Penguin alse Has finns? rue Dolphin False Bear ](media/Decision-Tree-image1.png)



**Preface**
-   In this lecture, we will discuss Decision Trees for Big Data Analytics and also discuss a case study of medical application using a Decision Tree in Spark ML

![outlook sunny overcast h umidi ty high no yes norrnal yes windy fal se yes true no ](media/Decision-Tree-image2.jpg)

**Decision Trees**

![Predict if Sachin will play cric Training examples: 9 yes Consider the following data set our task is to predict if Sachin is going to play cricket on a given day. We have observed Sachin over a number days and recorded various things that might influence his decision to play cricket so we looked at what kind of weather it is. Is it sunny or is it raining humidity is it high as normal is it windy So this is our training set and these are the examples that we are going Day DI D4 DIO Dil D12 D13 D14 Out 00k Sunny Sunny Overcast Rain Rain Rain Overcast Sunny Sunny Rain Sunny Overcast Overcast Rain Hul Hig Hig Hig Hig NOI NOI NOI Hig NOI NOI NOI Hig NOI Hig ](media/Decision-Tree-image3.png)

![](media/Decision-Tree-image4.png)

![Predict if Sachin will play cric • Hard to guess • Try to understand when Sachin plays • Divide & conquer: Split into subsets Are they pure ? (all yes of all no) • If yes: stop • If not: repeat Training examples: 9 yes / 5 Day DI D2 DA DIO Dil D12 D13 Outlook Sunny Sunny Overcast Rain Rain Rain Overcast Sunny Sunny Rain Sunny Overcast Overcast Humidity High High High High Normal Normal Normal High Normal Normal Normal High Normal ](media/Decision-Tree-image5.png)

![Sunny Day Outlook Humid DI Sunny D2 Sunny D8 Sunny High High Day 07 Wind Weak Strong Weak 9 yes / 5 no Outlook Overcast Outlook Humid Wind Overcast High Overcast Normal Strong Overcast High Strong Overcast Normal Weak 4 yes / O no pure subset Day ou 04 Ra 05 Ra ](media/Decision-Tree-image6.png)

![Day 07 Sunny Humidity 9 yes / 5 no Outlook Overcast Outlook Humid Overcast High Overcast Normal Overcast High Overcast Normal 4 yes / O no pure subset Wind Weak Strong Strong Weak Day ](media/Decision-Tree-image7.png)

![Day 07 Sunny Humidity 9 yes / 5 no O 100 k Overcast Outlook Humid Overcast High Overcast Normal Overcast High Overcast Normal 4 yes / O no pure subset Wind Weak Strong Strong Weak Day DIO Ra Ra ](media/Decision-Tree-image8.png)

![9 yes/ 5 no Outlook Overcast Day 07 DI 2 Outlook Overcast Overcast Overcast Overc ast Humid HI gh Normal High Normal Wind Weak Strong Strong Sunny Humidity ](media/Decision-Tree-image9.png)

![Outlook Overca t Su ny Humi ](media/Decision-Tree-image10.png)

![0/3 O 100 k 4/0 Overcast yes 2/3 Sunny Humidity 2/0 ](media/Decision-Tree-image11.png)



**ID3 Algorithm**
-   In decision tree learning, ID3 (Iterative Dichotomiser 3) is an algorithm invented by Ross Quinlan used to generate a decision tree from a dataset. ID3 is the precursor to the C4.5 algorithm, and is typically used in the machine learning and natural language processing domains
-   Split (node, {examples}):

    1.  A <- the best attribute for splitting the {examples}

    2.  Decision attribute for this node <- A

    3.  For each value of A, create new child node

    4.  Split training {examples} to child nodes

    5.  For each child node/subset:

        i.  if subset is pure: STOP

        ii. else: Split (child_node, {subset})
-   Ross Quinlan (ID3: 1986), (C4.5: 1993)
-   Breimanetal (CaRT: 1984) from statistics



![Which attribute to split on ? Sunny 2 yes/ 3 no 9 yes / 5 no Outlook Overcast Rain 4 yes/ Ono 3 yes/ 2 no 9 yes Weak 6 yes/ 2 no • Want to measure purity" the split es/No after the split More certain ab 4 yes no)» completely certain (10 • pure set ( • impure (3 yes/3 no)+ completely uncertain (5 ](media/Decision-Tree-image12.png)

![Entropy Entropy: H(S)= - P(+) log2 P(+)- PG) log2 P(-) bits • S ... subset of training examples of positive/negative examples I Interpretation: assume item X belongs to S How many bits need to tell if X pos• / 3 no): Jl Impure (3 yes o. 3 33 3 - ---log2 H(S) - --10g2 ----1 bits 6 6 / Ono): C Pure set ( 4 yes .8 0.7 0.6 0.5 0.4 ](media/Decision-Tree-image13.png)

![Information Gain Want many items in pure sets Expected drop in entropy after split: Gain(S,A) = H(S) ¯ VEVa/ues(A) Mu uall formation -between attribute A and class labels of S Gain (S, Wind) S H(Sv) v/ possible values of A set of examples {X} subset where XA = -ålogz 14 - H(S) ](media/Decision-Tree-image14.png)

<https://towardsdatascience.com/entropy-and-information-gain-in-decision-trees-c7db67a3a293>



**Decision Trees for Regression**

**How to grow a decision tree**
-   The tree is built greedily from top to bottom
-   Each split is selected to maximize information gain (IG)

![IZLI IG = Impurity(Z)- ---Impurity(ZL) +---Impurity(ZR) Error before split Error after split ](media/Decision-Tree-image15.jpg)


-   Given a training set: Z= {(X1, Y1),...., (Xn, Yn)}

yi-real values
-   Goal is to find f(x) (a tree) such that

![min (f (Xi) --- Yi)2 i=l ](media/Decision-Tree-image16.jpg)
-   How to grow a decision tree for regression?



![How to find the best split • A tree is built from top to bottom. And at each step, you should find the best split in the internal node. You get a test dataset Z. And here is a splitting criteria xk less than t or xk is greater or equal than a threshold t. The problem is how to find k, the number of feature and the threshold t. And also you need to find a ](media/Decision-Tree-image17.png)

![What happens without a spli What happens without a split? Without a split, the best you can do predict or Without split: is to predict one number, 'a'. It makes sense to select such a number 'a' to minimize the squared error. It is very easy to prove that such variable a equals an average of all Yi. Thus you need to calculate the average value of all the targets. Here ä (a-hat)denotes the average value. a = min ieZ Z - number of elements 1 Impurity(Z) = --- ](media/Decision-Tree-image18.png)

![Find the best split (Xk < t) • What happens if you make some split by a condition xk < t? For some part of training objects ZL, you have x_k < t. For other part ZR holds xk t. • The error consists of two parts for ZL and ZR respectively. So here we need to find simultaneously k, t, aL and aR. • We can calculate the optimal aL and aR exactly the same way as we did for the case without a split. We can easily prove that the optimal aL min k, t, aL,aR i€Zl, Values in leaves 1 ieZ1, IZ I - number of elemel IZR I - number of eleme ](media/Decision-Tree-image19.png)

![Find the best split • After this step we only need to find optimal k and t. We have formulas for impurity, for objects which get to the left branch of our splitting condition and to the right. Then you can find the best splitting criteria which maximizes the 1 Impurity(ZL) = --- 1 Impurity(ZR) = --- Maximize the information g IG = Impurity(Z)- ---Impurit: ](media/Decision-Tree-image20.png)



**Stopping rule**
-   The node depth is equal to the maxDepth training parameter
-   No split candidate leads to an information gain greater than mininfoGain
-   No split candidate produces child nodes which have at least minInstancesPerNode training instances (|ZL|, |ZR| < minInstancesPerNode) each



**Summary: Decision Trees**
-   **Automatically handling interactions of features**

The benefits of decision tree is that this algorithm can automatically handle interactions or features because it can combine several different features in a single decision tree. It can build complex functions involving multiple splitting criteria
-   **Computational scalability**

The second property is a computational scalability. There exists effect of algorithms for building decision trees for the verfy large data sets with many features
-   **Predictive power**

Single decision tree actually is not a very good predictor. The prediction power of a single tree is typically not so good
-   **Interpretability**

You can visualize the decision tree and analyze this splitting criteria in nodes, the values in leaves, and so one. Sometimes it might be helpful



**Building a tree using MapReduce**

**PLANET (Parallel Learner for Assembling Numerous Ensemble Trees)**
-   A sequence of MapReduce jobs that build a decision tree



**Attribute Instance Matrix**

![ratntng xamp es Day m D3 DIO D12 Outlook Sunny Sunny Overcast Rain Rain Rain Overcast Sunny Sunny Rain Sunny Overcast Temp Hot Hot Hot Mild cool cool Cool Mild Cool Mild Mild Mild Humidity High High High High Normal Normal Normal High Normal Normal Normal High Wind Weak Strong Weak Weak Weak Strong Strong Weak Weak Weak Strong Strong Tennis? No No Yes Yes Yes No Yes No Yes Yes Yes Yes ](media/Decision-Tree-image21.png)


-   Binary Classification Problem
-   K-class problem


-   Classification problem is a part of Supervised learning algorithm



![Decision Trees Decision tree to represent learned target functions --- Each internal node tests an attribute --- Each branch corresponds to attribute value --- Each leaf node assigns a classification Can be represented by logical formulas sunny Humidity Outlook overcast s ](media/Decision-Tree-image22.png)

![Representation in ecisi( < Example of representing rule in DT's: if outlook = sunny AND humidity = normal OR if outlook = overcast OR if outlook = rain AND wind = weak ](media/Decision-Tree-image23.png)

![Applications of Decision Tree Instances describable by a fixed set of attributes and their values Target function is discrete valued 2-valued N-valued But can approximate continuous functions Disjunctive hypothesis space Possibly noisy training data Errors, missing values Examples: Equipment or medical diagnosis Credit risk analysis ](media/Decision-Tree-image24.png)

![3 Decision Trees Given dis Of trainir Draw axi: Lines to s Instances ](media/Decision-Tree-image25.png)

![3 Decision Tree Structurc Draw axi: Lines to s Instances ](media/Decision-Tree-image26.png)

![Decision Tree Structure Decision leaf * Alterna De 30 ](media/Decision-Tree-image27.png)

![Decision Tree Constructi( • Find the best structure • Given a training data set ](media/Decision-Tree-image28.png)

![Top-Down Construction Start with empty tree Main loop: 1. Split the "best" decision attribute (A) for next node 2. Assign A as decision attribute for node 3. For each value of A, create new descendant of node 4. Sort training examples to leaf nodes 5. If training examples perfectly classified, STOP, Else iterate over new leaf nodes Grow tree just deep enough for perfect classification If possible (or can approximate at chosen depth) ](media/Decision-Tree-image29.png)

![Best attribute to split? 3 ](media/Decision-Tree-image30.png)

![Best attribute to split? 3 ](media/Decision-Tree-image31.png)

![Best attribute to split? 3 ](media/Decision-Tree-image32.png)

![Which split to make nex Pure box node Mixed box/nod 3 Alread No fur ](media/Decision-Tree-image33.png)

![sp It to ma e nex Alrea y pure leaf N fu ther need to split ](media/Decision-Tree-image34.png)

![Principle of Decision Tree Constructior Finally we want to form pure leaves --- Correct classification Greedy approach to reach correct classification 1. 2. 3. 4. Initially treat the entire data set as a single box For each box choose the spilt that reduces its impl terms of class labels) by the maximum amount Split the box having highest reduction in impurity Continue to Step 2 ](media/Decision-Tree-image35.png)

![Choosing Best Attribute? Consider 64 examples, 29 and 35- Which one is better? 29 , 35- Al 25 , 5 Which is better? 29 , 35 A t 4 , 30- 15 , 19- 1 29 , 29 , 2 2 ](media/Decision-Tree-image36.png)

![Entropy A measure for uncertainty purity information content Information theory: optimal length code assigns (--- logp) bits to mes: probability p Sis a sample of training examples --- p + is the proportion of positive examples in S --- p _ is the proportion of negative examples in S Entropy of S: average optimal number of bits to encode information certainty/uncertainty about S ](media/Decision-Tree-image37.png)

![Entropy Entropy can also be viewed as measuring - purity of S, - uncertainty in S, - information in S, ... E.g.: values of entropy for P+=l, P+=O, P+=.5 Easy generalization to more than binary' values - Sum over pi pi) , i=l,n i is + or--- for binary ](media/Decision-Tree-image38.png)

when p+ = 1 and p- = 0 or p+ = 0 and p- = 1, i.e. pure classes then the entropy is lowest i.e. 0

When p+ = 0.5 and p- = 0.5, i.e. even split between classes, then entropy is highest

![Which one is better? 29 , 35- Al Choosing Best Attribute? Consider 64 examples (29+,35-) and compute entropies: 15 , 19- 0.65 25 , 5 Which is better? 29 , 0.70 1 22 742 29 , 35 0.98 29 , 0.937 2 2 t ](media/Decision-Tree-image39.png)

![Information Gain • Gain(S,A): reduction in entropy after cho Isvl = Entropy(S) --- Entrol 15 , 15 Gain(S, A) 29 , 35 Al t 0.65 25 , 5 V Gain: 0.395 22 4 , 30- ve Values( A ) 29 , 35 A2 t 0.98 Gain: 0.00 ](media/Decision-Tree-image40.png)

![Gain function Gain is measure of how much can Reduce uncertainty Value lies between O, 1 What is significance of gain of 0? • example where have 50/50 split of +/- both before on attributes values gain of 1? • Example of going from "perfect uncertainty" to perfe splitting example with predictive attribute --- Find "patterns" in TE's relating to attribute values ](media/Decision-Tree-image41.png)

![Day m DIO Dil D12 Outlook Sunny Sunny Overcast Rain Rain Rain Overcast Sunny Sunny Rain Sunny Overcast Trainin Temp Hot Hot Hot Mild Cool cool Cool Mild Cool Mild Mild Mild Exam Humidity High High High High Normal Normal Normal High Normal Normal Normal High les Wind Weak Strong Weak Weak Weak Strong Strong Weak Weak Weak Strong Strong Tennis No No Yes Yes Yes No Yes No Yes Yes Yes Yes ](media/Decision-Tree-image42.png)

![Determine the Root Att 9+ 5--- E=O.940 Humidity High E=O.985 Gain (S, Humidity) --- Low E=O.592 0.151 9+ 5--- E=0.9 Wind Weak E=O.811 Gain (S, Wind) = ](media/Decision-Tree-image43.png)

![Sort the Training Examples DI ... D14 Outlook Over ast s s sunny Gain (S , Humidity) --- .970 ](media/Decision-Tree-image44.png)

![Final Decision Tree for High No Outlook Sunny vercast Humidity Ye s Normal Ye Rain Wind Stron No ](media/Decision-Tree-image45.png)

![Overfitting the Data • Learning a tree that classifies the training data perfectly may not lead to the tree with the best generalization performance. - There may be noise in the training data the tree is fitting - The algorithm might be making decisions based on very little data • A hypothesis h is said to overfit the training data if the is another hypothesis, h', such that h has smaller error than h' on the training data but h has larger error on the test data tha On tr ](media/Decision-Tree-image46.png)

![Overfitting A very To fit j exa mp ](media/Decision-Tree-image47.png)

![When to stop splitting further? A very To fit j exa mp ](media/Decision-Tree-image48.png)

![Avoiding Overfitting • Two basic approaches - Prepruning: Stop growing the tree at some point during construction when it is determined that there is not enough data to make reliable choices. - Postpruning: Grow the full tree and then remove nodes that seem not to have sufficient evidence. (more popular) • Methods for evaluating subtrees to prune: - Cross-validation: Reserve hold-out set to evaluate utility (more popular) - Statistical testing: Test if the observed regularity can be dismissed as likely to be occur by chance Minimum Description Length: Is the additional complexity of the hypothesis smaller than remembering the exceptions ? ](media/Decision-Tree-image49.png)

CHAID Algorithm - Chi-Squared Automatic Interaction Detection



![Extensions of basic algori • Continuous valued attributes • Attributes with many values • TE's with missing data • Attributes with associated costs • Other impurity measures ](media/Decision-Tree-image50.png)

![Continuous Valued Attribut Create a discrete attribute from continuous variables E.g., define critical Temperature = 82.5 Candidate thresholds chosen by gain function can have more than one threshold typically where values change quickly (48+60)/2 Temp 40 48 60 72 (80+90)/2 80 90 ](media/Decision-Tree-image51.png)

![Unknown Attribute Valu • What if some examples are missing values of • Use training example anyway, sort through ti --- if node n tests A, assign most common value of A among othe to node n --- assign most common value of A among other examples with --- assign probability Pi to each possible value v. of A • assign fraction Pi of example to each descendant in t • Classify test instances with missing values in ](media/Decision-Tree-image52.png)

![Cini Index • Another sensible measure of impurity (i and j are classes) Gini --- • After applying attribute A, the resulting Gini inc Gini(A) E PO') ](media/Decision-Tree-image53.png)

![Regression Tree • Similar to classification • Use a set of attributes to predict the value (ir class label) • Instead of computing information gain, of squared errors • Partition the attribute space into a set of recl subsoaces, each with its own oredictor ](media/Decision-Tree-image54.png)

![Rectilinear Division • A regression tree is a piecewise constant function attributes X2st Xl<t 3 4 x 2 2 2 1 1 ](media/Decision-Tree-image55.png)

CART Algorithm - Classification and Regression Tree



**When are Decision Trees useful?**
-   Advantages
    -   Very fast: can handle very large datasets with many attributes
    -   Flexible: serveral attribute types, classification and regression problems, missing values
    -   Interpretability: provide rules and attribute importance
-   Disadvantages
    -   Instability of the trees (high variance)
    -   Not always competitive with other algorithms in terms of accuracy



**Summary**
-   Decision trees are practical for concept learning
-   Basic information measure and gain function for best first search of space of DTs
-   ID3 procedure
    -   Search space is complete
    -   Preference for shorter trees
-   Overfitting is an important issue with various solutions
-   Many variations and extensions possible



**Software**
-   In R: packages tree and rpart
-   C4.5
-   Weka



<https://medium.com/@rishabhjain_22692/decision-trees-it-begins-here-93ff54ef134>



# Decision Trees

![Decision trees build piecewise linear decision boundaries, are easy to train, and are easy for humans to interpret Linear Regression For predicting planets and pea growth 1940s 1800s Neural Networks 1980s 1960s Perceptron Precursor to neural networks Decision Trees ](media/Decision-Tree-image56.png)



Decision tree for titanic dataset for who lived and who died

![Decision Trees Is sex male? samples = 1309 values = [500, 8091 Died Yes Is class < 1.5? samples = 843 values = [1 61, 682) 1000/0 Yes Is age > 17.5? samples = 179 values = [61, 1181 Died 13 Died samples = 11 values = [6, 5] Survived Is class < 2.5? samples = 466 values = [339, 1271 Survived Is age > 17.5? samples = 664 values = [1 00, 5641 Died Yes samples = 168 values = [55, 1131 Died 1% Yes samples = 569 values = [73, 496] Died samples = 95 values = [27, 681 Died 7% ](media/Decision-Tree-image57.png)



![In a decision classification tree, what does each decision or node consist of? Linear classifier of all features Mean squared error minimizer Linear classifier of one feature Correct Euclidean distance minimizer ](media/Decision-Tree-image58.png)



<https://towardsdatascience.com/decision-tree-ba64f977f7c3>



[**Intro to XGBoost Models (decision-tree-based ensemble ML algorithms)**](https://www.youtube.com/watch?v=0ikyjpaUDFQ&ab_channel=CodingTech)

**XGBoost (eXtreme Gradient Boosted trees)**
-   Boosting is an ensemble method
    -   Each tree boosts attributes that led to misclassifications of previous tree
-   It is amazing
    -   Routinely wins Kaggle competitions
    -   Easy to use
    -   Fast
    -   A good choice for an algorithm to start with



**Decision Trees**

![](media/Decision-Tree-image59.jpg)



**Example**

![• You want to build a system to filter out resumes based on historical hiring data • You have a database of some important attributes of job candidates, and you know which ones were hired and which ones weren't • You can train a decision tree on this data, and arrive at a system for predicting whether a candidate will get hired based on it! ](media/Decision-Tree-image60.jpg)



![Totally Fabricated Should-l- This-Person Tree Did an internship? NO Currently employed? No Less than one prior Yes Hire! Yes Hire No Attended a top-tier school? Yes Don't Hire! No Don't Hire! Yes ](media/Decision-Tree-image61.jpeg)



**How Decision Tree works**

![• At each step, find the attribute we can use to partition the data set to minimize the entropy of the data at the next step • Fancy term for this simple algorithm: ID3 • It is a greedy algorithm --- as it goes down the tree, it just picks the decision that reduce entropy the most at that stage. • That might not actually result in an optimal tree. • But it works. ](media/Decision-Tree-image62.jpeg)

**Random Forests**

![• Decision trees are very susceptible to overfitting • To fight this, we can construct several alternate decision trees and let them "vote" on the final classification • Randomly re-sample the input data for each tree (fancy term for this: bootstrap aggregating or bagging) • Randomize a subset of the attributes each step is allowed to choose from ](media/Decision-Tree-image63.jpg)



**Ensemble Learning**

![• Random Forests was an example of ensemble learning • It just means we use multiple models to try and solve the same problem, and let them vote on the results. ](media/Decision-Tree-image64.jpeg)



![• Random Forests uses bagging (bootstrap aggregating) to implement ensemble learning • Many models are built by training on randomly-drawn subsets of the data • Boosting is an alternate technique where each subsequent model in the ensemble boosts attributes that address data mis•classified by the previous model • A bucket of models trains several different models using training data, and picks the one that works best with the test data • Stacking runs multiple models at once on the data, and combines the results together • This is how the Netflix prize was won! ](media/Decision-Tree-image65.jpeg)



**Features of XGBoost**

![• • • Regularized boosting (prevents overfrtting) Can handle missing values automatically Parallel processing Can cross•validate at each iteration • Enables early stopping, finding optimal number of iterations Incremental training Can plug in your own optimization objectives Tree pruning • Generally results in deeper, but optimized, trees ](media/Decision-Tree-image66.jpg)



![XG Boost • Booster • gbtree or gblinear • Objective (ie, multi:softmax, multi:softprob) • Eta (learning rate ---adjusts weights on each step) • Max_depth (depth of the tree) • Min_child_weight • Can control overfitting, but too high will underfit • ...and many others ](media/Decision-Tree-image67.jpeg)



![](media/Decision-Tree-image68.jpeg)



![And follow through.. Folding (Rolling) back a decision tree: If you have a o complete decision tree, with probabilities attached to event branches, and outcomes following from the end of each decision branch, you can roll back the decision tree, by Estimating the expected value of each branch, starting with the right and working towards the left, using the probabilities and payoffs. Compute an expected value for the entire tree, across branches. If there is a time lag across the branches, and/or risk involved in the process, you can incorporate those elements into a decision tree as well in the form of a discount rate that you use discount payoffs at each leg. ](media/Decision-Tree-image69.jpeg)



![3. Decision Tree: An Example Consider a pharmaceutical drug for treating Type 1 diabetes that has gone through preclinical testing and is about to enter phase 1 of the FDA approval process. o a Phase 1 is expected to cost $ 50 million and will involve 100 volunteers to determine safety and dosage; it is expected to last 1 year. There is a 70% chance that the drug will successfully complete the first phase. a In phase 2, the drug will be tested on 250 volunteers for effectiveness in treating diabetes over a two-year period. This phase will cost $ 100 million and the drug will have to show a statistically significant impact on the disease to move on to the next phase. There is only a 30% chance that the drug will prove successful in treating type 1 diabetes but there is a 10% chance that it will be successful in treating both type 1 and type 2 diabetes and a 10% chance that it will succeed only in treating type 2 diabetes. a In phase 3, the testing will expand to 4,000 volunteers to determine the long-term consequences of taking the drug. If the drug is tested on only type 1 or type 2 diabetes patients, this phase will last 4 years and cost $ 250 million; there is an 80% chance of success. If it is tested on both types, the phase will last 4 years and cost $ 300 million; there is a 75% chance of success. If the drug passes through all 3 phases, the costs and annual cash flows are below: Disease treatment Type 1 diabetes only Type 2 diabetes only Type 1 and 2 diabetes Cost of Develo ment $ 500 million $ 500 million $ 600 million Annual Cash Flow $ 300 million for 15 years $ 125 million for 15 years $ 400 million for 15 years ](media/Decision-Tree-image70.jpeg)








































































