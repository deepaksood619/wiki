# Logic

Created: 2018-09-27 08:57:59 +0500

Modified: 2018-12-04 23:37:57 +0500

---

# Conceptions of logic
-   Logic as a way to evaluate reasoning
-   Logic as a way of looking at language in general



**Concpets of Logic**
-   Informal logic
-   Formal logic
-   Symbolic logic
-   Mathematical logic



**Types of Logic**
-   Syllogistic logic
-   Propositional logic
-   Predicate logic
-   Modal logic
-   Informal reasoning and dialectic
-   Mathematical logic
-   Philosophical logic
-   Computational logic
-   Non-classical logic



Symbolic Logic
-   Constants - symbols with fixed meaning
-   Variables - symbols with no fixed meaning
    -   for variables: x, y, z
    -   for statements: p and q



# Statements
-   have a subject and predicate
-   composed of atleast one symbol



Subject

A subject is a term that a predicate says something about.
-   part of sentence frame
-   topic of a sentence
-   main argument of verb



Predicate (denoted by capital alphabets)

A predicate is a term that says something about a subject.
-   part of sentence frame
-   comments on subject
-   verb and all non-subject arguments



![x sees y Jill sees the movie. Sjm ](media/Logic-image1.png){width="4.760416666666667in" height="4.75in"}

Predicate comes first



![L L h English is a language. Jill saw the movie. The house is large. The house is red. predicate constants ](media/Logic-image2.png){width="4.760416666666667in" height="2.125in"}



![L •m L h English is a language. Jill saw the movie. The house is large. The house is red. individual constants ](media/Logic-image3.png){width="4.760416666666667in" height="2.09375in"}



**Valency**

This is the number of terms that predicate says something about.

Lx,Rx - 1 slots (x), Valency - 1

Sxy - 2 slots (x, y), Valency - 2

Gxyz - 3 slots (x, y, z), Valency - 3



![1. Socrates is a gadfly. 2. George went on vacation. 3. The fuzzy dog took the bone from my hand. 4. Well, somebody said something to someone! 5. Those women are such good people. ](media/Logic-image4.png){width="4.760416666666667in" height="2.96875in"}



![1. socrates isGadfly 2. george Vacationed -> 3. dog Took bone from-hand Vg Tdbh Sxyz 4. x said y to-z 5. women areGood -> ](media/Logic-image5.png){width="4.760416666666667in" height="2.90625in"}



# Quantifiers & Bound Variables
-   quantity: how many?
-   examples from language include singular (1) & plural (1 or more)
-   three logical quantifiers
    -   all
    -   some (at least 1)
    -   none



!["All" as quantifier - variable x x is a person - variable x with quantifier x (x)Px for any x, x is a person = for any x, x saw y for any x, for any y, x saw y (x)Sxy = (x)(y)Sxy ](media/Logic-image6.png){width="4.760416666666667in" height="3.4895833333333335in"}



![Universal quantifier - the symbol V (all) for all x, x is a person = (Vx)Px Of thern are people." for all x, Jill saw x "Jill saw all of them." --- (Vx)Sjx ](media/Logic-image7.png){width="4.760416666666667in" height="2.8854166666666665in"}



![Existential quantifier - the symbol 3 (at least one) for some x, x is a person = (ax)Px for some x, Jill saw x "Jill saw something" for all x, Jill saw x "Jill saw everything" (Vx)Sjx ](media/Logic-image8.png){width="4.760416666666667in" height="3.28125in"}



![Negative - the symbol statements or (not) John saw the movie. My house is red. John didn't see the movie. My house isn't red. ](media/Logic-image9.png){width="4.760416666666667in" height="3.4583333333333335in"}



![Negative - the symbol Sjm -Sjm predicates or -t (not) John saw the movie John didn't see the movie. My house isn't red -Sxy, -Sxy, etc ](media/Logic-image10.png){width="4.760416666666667in" height="3.2291666666666665in"}



![At least one thing is a turtle. ( ax)Tx ax)Tx No one thing is a turtle. Everything is a turtle. (V x)Tx e V x)Tx Not every thing is a turtle. ](media/Logic-image11.png){width="4.760416666666667in" height="3.21875in"}



!["some fish" "all fish" "no fish" "not all fish" Vx Fx 3x)Fx -Vx)Fx ](media/Logic-image12.png){width="4.760416666666667in" height="1.8333333333333333in"}



![Scope of quantifiers - variables bound by a quantifier is free universal x is bound quantifier on x quantifiers scope of those quantifiers ](media/Logic-image13.png){width="4.760416666666667in" height="3.5625in"}



![IJhy bind variables? - variable as blank space Sjx "John saw --- free variables may fail to represent ordinary language (ax)Sjx ' John saw something" - so use quantifiers on x, y, z in your sentences! Free variables belong in formulas. ](media/Logic-image14.png){width="4.760416666666667in" height="3.4375in"}



![1 . All those things fell down. 2. Jim said nothing. 3. All of them are human. 4. Jim didn't watch TV. 5. Something moved something else. ](media/Logic-image15.png){width="4.760416666666667in" height="3.2291666666666665in"}



![1. all x fell 2. Jim said no x 3. all x are human 4. Jim not watch TV 5. some x moved some y ( Vx)Fx ax)Sjx (Vx)Hx ---Wjt ( ay)Mxy ](media/Logic-image16.png){width="4.760416666666667in" height="2.6354166666666665in"}





# Logical Operators/Connectives
-   **Logical conjuction**
-   join symbols with "and" (. & Λ)
-   conjuction with statements p.q
-   conjunction with variables x.y



![Logical conjunction - conjunction with predicates Bob is a good person. Bob is human AND Bob is good some good person. for some x, x is human AND x is good (ax)Hx • Gx ](media/Logic-image17.png){width="4.760416666666667in" height="3.71875in"}


-   **Logical disjunction**



![Logical disjunction Everything is vanilla or chocolate. V Cx) - V is inclusive "or" vanilla OR chocolate = vanilla, choc, vanilla & choc o is exclusive "or" vanilla XOR chocolate = either vanilla or chocolate ](media/Logic-image18.png){width="4.760416666666667in" height="3.75in"}



![(Vx)(Hx • Sx) Everyone can swim. for all x, x is human and x swims V cx) Something is dirty or cluttered. for some x, x is dirty or x is cluttered Something is either not dirty or not cluttered. ](media/Logic-image19.png){width="4.760416666666667in" height="3.3333333333333335in"}



![Negating junctions not chocolate or vanilla not (chocolate and vanilla) not chocolate and vanilla not (chocolate or vanilla) ](media/Logic-image20.png){width="4.760416666666667in" height="3.3020833333333335in"}



![Translation 1. every good dog 2. Bill saw the movie or went running. 3. not friends and enemies 4. either something ugly or something beautiful ](media/Logic-image21.png){width="4.760416666666667in" height="2.8541666666666665in"}



**Logical Equivalence ( = )**



**Conditional**

![Conditional - il..then... symbol (---+ or D) --- used even in basic sentences "English is a language." for al/ x, if x is English then x is a language (vx)Ex Lx ](media/Logic-image22.png){width="4.760416666666667in" height="3.5in"}



![Everybody swims. for all x, if x is human then x swims (V x) D SX ](media/Logic-image23.png){width="4.760416666666667in" height="2.46875in"}



**Biconditional**

![Biconditional ...if and only if... symbol (H or E) It's water if and only if it's refreshing. If it's water, it's refreshing. If it's refreshing, it's water. (vx) VVX Rx ](media/Logic-image24.png){width="4.760416666666667in" height="3.2708333333333335in"}



![It's edible if and only if it's good food. x is edible x is good & x is food (vx) Ex (Gx • Fx) ](media/Logic-image25.png){width="4.760416666666667in" height="1.5in"}



![Drawing a conclusion --- therefore symbol ( • • • ) Everybody knows something. (Vx)(3y) Hx D Kxy John is somebody. Therefore John knows something. ' Kjy ](media/Logic-image26.png){width="4.760416666666667in" height="3.4583333333333335in"}



![Other logics - logics built for a variety of uses - for example, modal logic it is necessary that p it is possible that p must versus can it isn't necessary that p it isn't possible that p ](media/Logic-image27.png){width="4.760416666666667in" height="3.7395833333333335in"}



![If this sign means (BX • Ty) oxy just be careful. (BX • Ty) D oxy serious y reconsider your outing. (BX • Ty) D oxy turn around NOW! TRAILS ](media/Logic-image28.png){width="4.760416666666667in" height="3.6458333333333335in"}



![Translation 1. Everyone goes somewhere on vacation. 2. Nobody goes everywhere on vacation. 3. It's only exciting if it's dangerous! 4. Jill ate everything that's not chocolate and not vanilla. 5. Steve taught everyone, but not everyone listened to him. ](media/Logic-image29.png){width="4.760416666666667in" height="3.2291666666666665in"}



![Hints 1. all x, some y, x Human & y Place then Vacations x at y 2. not some x, all y, x Human & y Place then Vacations x y 3. all x, x Exciting if-only-if x Dangerous 4. all x, ---(Choc x or Vanilla x) then jill Ate x 5. all x, x human then steve Taught x and x not Listened to steve ](media/Logic-image30.png){width="4.760416666666667in" height="3.4791666666666665in"}



![Answers 1. (нх • Ру) э vxy 2. (нх • Ру) э vxy 4. (Ух) -(Сх V Vx) э Ајх 5. (Ух) нх D (Tsx • -Lxs) ](media/Logic-image31.png){width="4.760416666666667in" height="3.9270833333333335in"}



# The language of sets & probability

![Brief tips for logical translation 1. break the sentence into parts 2. break the translation into stages a. into logical language b. then into symbolic logic c. watch for chances to use variables, quantifiers & operators ](media/Logic-image32.png){width="4.760416666666667in" height="3.375in"}



![Logical set - group of x that belong together - those things that belong together are members of that set SET ice cream MEMBERS eggs cream sugar eggs e ice cream ingredients ](media/Logic-image33.png){width="4.760416666666667in" height="3.78125in"}


-   Intersection
-   Union



![Logical set - group of x that belong together mutton e ice cream ingredients ice cream ingreds n dairy products ice cream ingreds U dairy products ](media/Logic-image34.png){width="4.760416666666667in" height="3.7291666666666665in"}



![Subsets - sets within sets ice cream ingreds C foods - proper subset if elements in A differ from elements in B ice cream ingreds c foods ](media/Logic-image35.png){width="4.760416666666667in" height="3.40625in"}



![](media/Logic-image36.png){width="4.760416666666667in" height="1.28125in"}



**Probability**
-   probability of A or B, P(A U B)
-   probability of A and B, P(A **∩** B)
-   probability of A given B, P(A | B)
-   probability of B given A, P(B | A)



**Other Logics**
-   Inverse
-   Converse
-   Contrapositive

![inverse B converse contrapositive ](media/Logic-image37.png){width="4.760416666666667in" height="3.0520833333333335in"}



**Fallacy**

A logical fallacy allows an argument to persuade even though the conclusion does not follow the premises.
-   Ad Baculum - *I'll hit you unless* you accept that A is C. Therefore A is C

This only supports the conclusion *I'll hit you*, Not that A is C
-   Ad Hominem - *John's an idiot* and he says that A is not C. Therefore A is C

This only supports the conclusion *One idiot doesn't agree.* Not that A is C.
-   Ad Verecundiam - *Experts agree* that A is C. Therefore A is C

This only supports the conclusion *Experts agree.* Not that A is C.
-   Ad Misericordiam - *It will be so tragic* if A isn't C. Therefore A is C

This only supports the conclusion *It's tragic.* Not that A is C.



**Logic**
-   Arguments (premises, conclusion)
-   Validity
-   Truth values
-   Soundness
-   Basic Syllogism
-   Deduction (deductive reasoning)
-   Induction (inductive reasoning)
-   Cogent argument
-   coherence
-   correspondence
-   foundationalism
-   pragmatic
-   consensus
-   deflationary



**References**

[Logic & Language - a short introduction to logic](https://www.youtube.com/playlist?list=PL48654681292CF456)



![11이 ,01100001이1이0]100이1이이011이10( 01이이]이弓『 이10이100이 ,2 11000101100110 001이 11 10이이1 1011101이010] 1 기魯01]11100기『 0이이0] |10이C; .,l이00"! |이0〕]0L10]이00,,- 이01 10이000이1 111010111이111^ INTRO rroLOGIC 100] 0이 0 기 00 It)lO이 ! 0이00 : l〕010010 subJects & predicates iC)이010기 0010010 0이 1이 1001 40이 1 0이000- : ](media/Logic-image38.jpg){width="4.760416666666667in" height="2.6770833333333335in"}






































