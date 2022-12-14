# Support Vector Machine (SVM)

Created: 2019-03-23 10:36:13 +0500

Modified: 2021-11-14 21:19:05 +0500

---

A hyperplane is a line that splits the input variable space. In SVM, a hyperplane is selected to best separate the points in the input variable space by their class, either class 0 or class 1.



In two-dimensions, you can visualize this as a line and let's assume that all of our input points can be completely separated by this line.



The SVM learning algorithm finds the coefficients that results in the best separation of the classes by the hyperplane.



The distance between the hyperplane and the closest data points is referred to as the margin. The best or optimal hyperplane that can separate the two classes is the line that has the largest margin.



Only these points are relevant in defining the hyperplane and in the construction of the classifier.



These points are called the support vectors. They support or define the hyperplane.



In practice, an optimization algorithm is used to find the values for the coefficients that maximizes the margin.



SVM might be one of the most powerful out-of-the-box classifiers and worth trying on your dataset.



# Kernel Methods

![Support vector machines are nonlinear models that build maximum marginal boundaries in hyperspace Linear Regression For predicting planets and pea growth 1940s 1800s Neural Networks 1980s 1960s Kernel Methods Support Vector Machines (svtvls) 1990s Perceptron Precursor to neural networks Decision Trees ](media/Support-Vector-Machine-(SVM)-image1.png)



![SVMs maximize the margin between two classes Sroal rx-BC in 10 Lae Class A Class B o 15 10 o Class A o Class B 15 ](media/Support-Vector-Machine-(SVM)-image2.png)



![Kernels transform the input space into a more usable feature space o ao a Class A o Class B Gaussian Kernel 0 00 030 80 e o -10 a Class A o Class B 10 -10 10 ](media/Support-Vector-Machine-(SVM)-image3.png)



![We've seen how SVMs use kernels to map the inputs to a higher dimensional feature space. What thing in neural networks also can map to a higher dimensional vector space? Activation function More layers More neurons per layer Correct Loss function ](media/Support-Vector-Machine-(SVM)-image4.png)



Support Vector Machineswork by drawing a line between the different clusters of data points to group them into classes. Points on one side of the line will be one class and points on the other side belong to another class.



The classifier will try to maximize the distance between the line it draws and the points on either side of it, to increase its confidence in which points belong to which class. When the testing points are plotted, the side of the line they fall on is the class they are put in.

![Maximize Separation Support Vectors ](media/Support-Vector-Machine-(SVM)-image5.jpg)







![Linear Separators • Binary classification can be viewed as the task of separating classes in feature space: wTx+b>O 11T KHARAGPUR wTX+ b = O wTX+ b < O Ax) = sign(wTx + b) NPTEL ONLINE CERTIFICATION COURSES ](media/Support-Vector-Machine-(SVM)-image6.png)

![Linear Separators • Which of the linear separators is optimal? 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/Support-Vector-Machine-(SVM)-image7.png)

![What is a good Decision Boundary? • Many decision boundaries! --- The Perceptron algorithm can be used to find such a boundary • Are all decision boundaries equally good? Class 1 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES o Class 2 5 ](media/Support-Vector-Machine-(SVM)-image8.png)

![Examples of Bad Decision Boundaries Class 1 11T KHARAGPUR Class 2 NPTEL ONLINE CERTIFICATION COURSES Class 2 Class 1 ](media/Support-Vector-Machine-(SVM)-image9.png)

![Finding the Decision Boundary . Let , x } be our data set and let {1,-1} be the class label of x. YFI O yul Class 1 Y 1 For wTXi +1) 21 For yr-I vvTXi + b ---1 so: yt • vvTXl + 1, V 1 Y Q Class 2 PTEL ONLINE ERTIFICATION COURSES 7 ](media/Support-Vector-Machine-(SVM)-image10.png)

![Large-margin Decision Boundary • The decision boundary should be as far away from the data of both classes as possible --- We should maximize the margin, m Class 1 JIT KHA •o.Class 2 N COURSES 2 8 ](media/Support-Vector-Machine-(SVM)-image11.png)

![Finding the Decision Boundary • The decision boundary should classifv all points correctlv Vi • The decision boundary can be found by solving the following constrained optimization problem 12 Minimize ---Il subject to Xi ---I--- b) 1 Vi • This is a constrained optimization problem. Solving it requires to use Lagrange multipliers 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 9 ](media/Support-Vector-Machine-(SVM)-image12.png)

![Finding the Decision Boundary WI 12 Minimize ---Il subject to xz•+b) O for i = 1, ... • The Lagrangian is 1 ---wTw + (1 --- Yi(wTxi + b)) 2 --- a.20 --- Note that I IWI 12 =wTw 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 10 ](media/Support-Vector-Machine-(SVM)-image13.png)

![Gradient with respect to w and b • Setting the gradient of c M.r.t. w and b to zero, we have --- WTW+ (1 --- y, (w TX, + b)) --- Ewkwk + Ea, n: no of examples, m: dimension of the space Qi!JiXi 11T KHARAGPUR ](media/Support-Vector-Machine-(SVM)-image14.png)

![The Dual Problem • If we substitute CXi!JiXi we have CYiYi Xi --- b 9=1 1 CY-iCV9YiYjXi x j + --- 2 2 Since • This is a function of u. onl IIT KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 12 ](media/Support-Vector-Machine-(SVM)-image15.png)

![The Dual Problem The new objective function is in terms of only It is known as the dual problem: if we know w, we know all Ci; if we know all ai, we know w The original problem is known as the primal problem The objective function of the dual problem needs to be maximized (comes out from the KKT theory) The dual problem is therefore: max. W (a) subject to 0, NPTEL ONLINE 1 2 11T KHARAGPUR CERTIFICATION COURSES 13 ](media/Support-Vector-Machine-(SVM)-image16.png)

![The Dual Problem max. W (a) = 1 2 subject to 0, O • This is a quadratic programming (QP) problem --- A global maximum of cti can always be found • w can be recovered by 11T KHARAGPUR Oi!JiXi NPTEL ONLINE CERTIFICATION COURSES 14 ](media/Support-Vector-Machine-(SVM)-image17.png)

![Characteristics of the Solution • Many of the are zero --- w is a linear combination of a small number of data points --- This "sparse" representation can be viewed as data compression as in the construction of knn classifier Xi with non-zero are called support vectors (SV) --- The decision boundary is determined only by the SV --- Let t. (j=l, ..., s) be the indices of the s support vectors. We can writ& w = atjYtjXt --- Note: w need not be formed explicitly 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 15 ](media/Support-Vector-Machine-(SVM)-image18.png)

![A Geometrical Interpretation Class 2 42 = O qt=o.8 bass 1 NPTEL ONLINE IIT KHARAGPUR CERTIFICATION COURSES 16 ](media/Support-Vector-Machine-(SVM)-image19.png)

![Characteristics of the Solution • For testing with a new data z and --- Compute wTz + b = u) + b classify z as class 1 if the sum is positive, and class 2 otherwise --- Note: w need not be formed explicitly NPTEL ONLINE 11T KHARAGPUR CERTIFICATION COURSES 17 ](media/Support-Vector-Machine-(SVM)-image20.png)

![](media/Support-Vector-Machine-(SVM)-image21.png)

![Non-linearly Separable Problems • We allow "error" k. in classification; it is based on the output of the discriminant function w X+b appr ximates the number of misclassified samples Class 2 .7 11T KHARAGPUR w CERTIFICATION COURSE x b-=O 19 ](media/Support-Vector-Machine-(SVM)-image22.png)

![Soft Margin Hyperplane The new conditions become 1 20 are "slack variables" in optimization Note that if there is no error for is an upper bound of the number of errors We want to minimize subject to Xi + b 1 --- Eil, 1 C : tradeoff parameter between error and margin Vi 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 20 ](media/Support-Vector-Machine-(SVM)-image23.png)

![The Optimization Problem With a and p Lagrange multipliers, POSITIVE EOCiYixij O Db NPTEL ONLINE 11T KHARAGPUR CERTIFICATION COURSES 21 ](media/Support-Vector-Machine-(SVM)-image24.png)

![L- With ΙΙΤ The Dual Problem Σ Σαμ ΣΥιαι = Ο NPTEL ONLINE CERTIFICATION COURSES ](media/Support-Vector-Machine-(SVM)-image25.png)

![The Optimization Problem The dual of this new constrained optimization problem is max. vv(a) = 1 CYiCYjYiYjXi x j 2 • subject to C O' CYiYi = O C + since g and a are positive. New constrainsderive from w is recovered as w = atjytjXt This is very similar to the optimization problem in the linear separable case, except that there is an upper bound C on now Once again, a QP solver can be used to find 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 23 ](media/Support-Vector-Machine-(SVM)-image26.png)

![• The algorithm try to keep null, maximising the margin • The algorithm does not minimise the number of error. Instead, it minimises the sum of distances fron the hyperplane • When C increases the number of errors tend to lower. At the limit of C tending to infinite, the solution tend to that given by the hard margin formulation, with O errors 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 24 ](media/Support-Vector-Machine-(SVM)-image27.png)

![Soft margin is more robust Varl Varl Var 2 Soft Margin SVM 11T KHARAGPUR CERTIFICATION COURSES var2 Hard Margin SVM 25 ](media/Support-Vector-Machine-(SVM)-image28.png)

![• • • Extension to Non-linear Decision Boundary So far, we have only considered large-margin classifier with a linear decision boundary How to generalize it to become nonlinear? Key idea: transform Xi to a higher dimensional space to "make life easier" --- Input space: the space the point Xi are located --- Feature space: the space of (P(x.) after transformation Why transform? --- Linear operation in the feature space is equivalent to non-linear operation in input space --- Classification can become easier with a proper transformation. In the XOR problem, for example, adding a new feature of make the problem linearly separable 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 26 ](media/Support-Vector-Machine-(SVM)-image29.png)

![11T KHARAGPUR XOR Is not lintrly separable Is linearly separable NPTEL ONLINE CERTIFICATION COURSES 27 ](media/Support-Vector-Machine-(SVM)-image30.png)

![sp ce (a) 11T KHARAGPUR Find a feature space fea *ace (c) NPTEL ONLINE CERTIFICATION COURSES 28 ](media/Support-Vector-Machine-(SVM)-image31.png)

![Transforming the Data Input space cp(Ä) 97.) cp(Ä) Feature space Note: feature space is of higher dimension than the input space in practice • • Computation in the feature space can be costly because it is high dimensional --- The feature space is typically infinite-dimensional! The kernel trick comes to rescue 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 29 ](media/Support-Vector-Machine-(SVM)-image32.png)

![Transforming the Data Input space cp(Ä) 97.) cp(Ä) Feature space Note: feature space is of higher dimension than the input space in practice • Computation in the feature space can be costly because it is high dimensional --- The feature space is typically infinite-dimensional! • The kernel trick comes to rescue 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 30 ](media/Support-Vector-Machine-(SVM)-image33.png)

![The Kernel Trick • • Recall the SVM optimization problem max. w (a) 1 2 subject to C 2 2 0' O-i!Ji --- The data points only appear as inner product As long as we can calculate the inner product in the feature space, we do not need the mapping explicitly Many common geometric operations (angles, distances) can be expressed by inner products Define the kernel function K by K (xz•, x j) d) (xz•) 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/Support-Vector-Machine-(SVM)-image34.png)

![An Example for (P(.) and K(.,.) Suppose (P(.) is given as follows = (I, v/ä:r2, :r?, :r3, x./Ox1X2) An inner product in the feature space is 2 = (I + a:1'Y1 X2Y2) • So, if we ae net Kernel T nctl as TOIIOWS, mere IS no neea to carry out m.) explicitly 2 (1 + ml Yl + X2Y2) This use of kernel function to avoid carrying out (P(.) explicitly is known as the kernel trick 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/Support-Vector-Machine-(SVM)-image35.png)

![Kernels • Given a mapping: a kernel is represented as the inner product Pi (x)Pi (Y) A kernel must satisfy the Mercer's condition: Vg(x) such that g (x)dx 2 0 K(x,y)g(x)g(y)dxdy 2 0 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES ](media/Support-Vector-Machine-(SVM)-image36.png)

![Modification Due to Kernel Function • Change all inner products to kernel functions • For training, max. w (a) Original With kernel function 11T KHARAGPUR subject to C 0, max. W (a) = 1 2 1 2 subject to C' 2 0, NPTEL ONLINE CERTIFICATION COURSES 34 ](media/Support-Vector-Machine-(SVM)-image37.png)

![Modification Due to Kernel Function • For testing, new data z is classified as class 1 if f 20, and as class 2 if Original f With kernel function 11T KHARAGPUR xtJ = z -E b = atjytJXtjZ-å--- b NPTEL ONLINE CERTIFICATION COURSES atjytJK(Xtj, z) ---I--- b 35 ](media/Support-Vector-Machine-(SVM)-image38.png)

![More on Kernel Functions • Since the training of SVM only requires the value of K(x., x.), there is no restriction of the form of x. and x. --- Xi can be a sequence or a tree, instead of a feature vector • x.) is just a similarity measure comparing Xi and x S : the set of support vectors • For a test object z, the discriminant function essentially is a weighted sum of the similarity between z and a pre-selected set of objects (the support vectors) 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 36 ](media/Support-Vector-Machine-(SVM)-image39.png)

![Example • Suppose we have 5 ID data points --- x =2, x =4, x =5, x =6, with 1, 2, 6 as class 1 and 4, 5 as class 2 Yl=l, Y2=1, yr-I, yr-I, ys=l 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 37 ](media/Support-Vector-Machine-(SVM)-image40.png)

![Example class 1 1 2 class 2 4 5 class 1 6 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 38 ](media/Support-Vector-Machine-(SVM)-image41.png)

![Example • We use the polynomial kernel of degree 2 --- K(x,y) = (xy+1)2 5 --- C is set to 100 max. 1 2 5 subject to 100 > > O, = O • We first find u. (i=l 5) by 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 39 ](media/Support-Vector-Machine-(SVM)-image42.png)

![Example By using a QP solver, we get - (11=0, (12=2.5, =7.333, (15=4.833 --- Note that the constraints are indeed satisfied --- The support vectors are {x2=2 x =5 x The discriminant function is .f(z) 2 = 0.6667 z All three give 11T KHARAGPUR --- 5.333 z + b NPTEL ONLINE CERTIFICATION COURSES 2 0.6667z 5.333z + 9 40 ](media/Support-Vector-Machine-(SVM)-image43.png)

![Example Value of discriminant function class 1 lass 1 1 2 class 2 4 6 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 41 ](media/Support-Vector-Machine-(SVM)-image44.png)

![Kernel Functions • In practical use of SVM, the user specifies the kernel function; the transformation 9(.) is not explicitly stated • Given a kernel function K(x., x.), the transformation (P(.) is given by its eigenfunctions '(a koncept in functional analysis) --- Eigenfunctions can be difficult to construct explicitly --- This is why people only specify the kernel function without worrying about the exact transformation • Another view: kernel function, being an inner product, is really a similarity measure between the objects 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 42 ](media/Support-Vector-Machine-(SVM)-image45.png)

![A kernel is associated to a transformation - Given a kernel, in principle it should be recovered the transformation in the feature space that originates it. K(x,y) = (xy+1)2= x2y2+2xY+1 It corresponds the transformation KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 2 x 1 43 ](media/Support-Vector-Machine-(SVM)-image46.png)

![Examples of Kernel Functions • Polynomial kernel up to degree d • Polynomal kernel up to degree d (xTy + Radial basis function kernel with width G K (x, y) = --- y 112/ (202)) --- The feature space is infinite-dimensional Sigmoid with parameter K and 0 = tanhfxTy + O) K(x, y) --- It does not satisfy the Mercer con ition on all K and 0 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 44 ](media/Support-Vector-Machine-(SVM)-image47.png)

![11T KHARAGPUR Nonlinear rbf kernel i) NPTEL ONLINE CERTIFICATION COURSES ](media/Support-Vector-Machine-(SVM)-image48.png)

![11T KHARAGPUR Ploynomial kernel NPTEL ONLINE CERTIFICATION COURSES 46 ](media/Support-Vector-Machine-(SVM)-image49.png)

![11T KHARAGPUR Gaussian RBF kernel NPTEL ONLINE CERTIFICATION COURSES 47 ](media/Support-Vector-Machine-(SVM)-image50.png)

![• Choosing the Kernel Function Probably the most tricky part of using SVM. The kernel function is important because it creates the kernel matrix, which summarizes all the data Many principles have been proposed (diffusion kernel, Fisher kernel, string kernel, There is even research to estimate the kernel matrix from available information In practice, a low degree polynomial kernel or RBF kernel with a reasonable width is a good initial try Note that SVM with RBF kernel is closely related to RBF neural networks, with the centers of the radial basis functions automatically chosen for SVM 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 48 ](media/Support-Vector-Machine-(SVM)-image51.png)

![](media/Support-Vector-Machine-(SVM)-image52.png)

![Summary: Steps for Classification • Prepare the pattern matrix • Select the kernel function to use • Select the parameter of the kernel function and the value of C --- You can use the values suggested by the SVM software, or you can set apart a validation set to determine the values of the parameter • Execute the training algorithm and obtain the a. • Unseen data can be classified using the u. and the support vectors 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 50 ](media/Support-Vector-Machine-(SVM)-image53.png)

![Strengths and Weaknesses of SVM • Strengths --- Training is relatively easy • No local optimal, unlike in neural networks --- It scales relatively well to high dimensional data --- Tradeoff between classifier complexity and error can be controlled explicitly --- Non-traditional data like strings and trees can be used as input to SVM, instead of feature vectors • Weaknesses --- Need to choose a "good" kernel function. 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 51 ](media/Support-Vector-Machine-(SVM)-image54.png)

![Conclusion • SVM is a useful alternative to neural networks • Two key concepts of SVM: maximize the margin and the kernel trick • Many SVM implementations like libSVM are available on the web for you to try on your data set! 11T KHARAGPUR NPTEL ONLINE CERTIFICATION COURSES 52 ](media/Support-Vector-Machine-(SVM)-image55.png)























































