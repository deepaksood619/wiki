# Andrew NG

Created: 2017-11-16 14:18:32 +0500

Modified: 2021-07-05 09:50:57 +0500

---

**Model and cost function:**

1.  Model representation - Linear regression using Training set

m - number of training examples

x's - input variables / features

y's - output variable / "target" variable

(x,y) - one training example

![Training Set Learning Algorithm Size of house 8:05 8:10 h Estimated price How do we represent h ? Linear regression with one variable. Univariate linear regression. ](media/Andrew-NG-image1.png)



**2. Cost function**

![N-ae- x Idea: Choose 00, 01 so that ho (r) is close to y for our training examples (x, y) ](media/Andrew-NG-image2.png)



Cost function intuition -

![Cost Function: Goal: minimize J(OO, 01) Hypothesis: he(x) = Parameters: 01 00, 01 J(01) = Simplified = Ola: 90 = o 2 minimize J(OI) & ](media/Andrew-NG-image3.png)



![.J(91) 1.5 10:51 11:09 Cost Function - Intuition I 2 0 2.5 ](media/Andrew-NG-image4.png)



![ho (x) (for fixed 01, this is a function of x) 3 2 1 o 07:03 he(r) 01 = 0.5 (function of the parameter 01) 3 2 J(91) 1 -0.5 0 1 2 3 11:09 0.5 1 1.5 2 2.5 ](media/Andrew-NG-image5.png)



![(for fixed 00, 01, this is a function of x) (function of the parameters 00, ) 300' 100' 1000 Current hypth«is o.öoo .soo o soo 1000 1 soo 0 2000 Siü (feet2) Cost Function - Intuition Il ](media/Andrew-NG-image6.png)

Octave
-   **Singular Value Decomposition (SVD)**

Every nxm matrix can be written as a product of three smaller matrices.

![Columns are "orthonormal" 000 Diagonal matrix (k=rank of M) Rows are "orthonormal" VT ](media/Andrew-NG-image7.jpeg)
-   SVD appreas in lots of places
    -   Statistics (PCA)
    -   Chemical physics
    -   Image processing
    -   Genomics
    -   Robotics
    -   Quantum physics (entanglement)
    -   Data embeddings / vector embeddings



**Gradient Descent for Linear regression with one variable**

![](media/Andrew-NG-image8.png)



![Gradient descent algorithm peat until conver ence (for j = 0 and j = 1) Correct: Simultaneous update Incorrect: tempO 00 --- 0öö7J(00, 01) 01 --- -3 templ 01 templ temp0 00 --- tempo tern | templ ](media/Andrew-NG-image9.png)



Gradient descent intuition

![Gradient descent algorithm repeat until convergence (simultaneously update j = 0 and j = 1) 9, ](media/Andrew-NG-image10.png)



**Derivative term**

![05 〕 37 一 11 【 50 い ( の ン ( 9 ノ い (9 ン の の : の の - 凵 一 の ン ](media/Andrew-NG-image11.png)



**Alpha**

![01 01 001 If a is too sma , gra •ent descent can be slow. If a is too large, gradient descent can overshoot the minimum. It may fail to converge, or even diverge. 01 ](media/Andrew-NG-image12.png)



![Current value of Gradient Descent Intuition o 01 at local optima J (01 0 ](media/Andrew-NG-image13.png)



![Gradient descent can converge to a local minimum, even with the learning rate a fixed. 01 -a J(01) 1 As we approach a local J(0D minimum, gradient descent will automatically take smaller steps. So, no need to decrease a over time. ](media/Andrew-NG-image14.png)



**Gradient Descent for Linear Regression**

![Gradient descent algorithm repeat until conver ence J(00, (for j = 1 and j = 0) 00:58 10:20 Linear Regression Model = 00 + T (e opi ](media/Andrew-NG-image15.png)



![οι:οι 9ι:εο < ](media/Andrew-NG-image16.png)



![Gradient descent algorithm repeat until convergence 1 00 00 04:15 10:20 update 00 and 01 simultaneously ](media/Andrew-NG-image17.png)

Gradient descent is a convex function (Global minimum)

Also called (Batch gradient descent) becauses look at all training sample.

![09:04 Which of the following are true statements? Select all that apply. To make gradient descent converge, we must slowly decrease a over time. Correct Response Gradient descent is guaranteed to find the global minimum for any function J(BO , 91 ). Correct Response Gradient descent can converge even if a is kept fixed. (But a cannot be too large, or else it may fai to converge.) Correct Response For the specific choice of cost function J(BO , 91) used in linear regression, there are no local optima (other than the global optimum). Correct Response Continue 10:20 ](media/Andrew-NG-image18.png)



Linear Algebra Review

Matrix - Rectangular array of numbers.

Dimension of matrix : number of rows * number of columns

![Matrix: Rectangular array of numbers: q 01 2 77 3 Dimension of matrix: number of rows x number of columns Matrices and Vectors ](media/Andrew-NG-image19.png)

Vector - is a matrix with one column (n*1 matrix)

Uppercase for matrices

Lower case for others variables, vectors, etc.

![Vector: An n x 1 matrix. 178 Yi = ith element e 460 Matrices and Vectors I-indexed vs O-indexed: To-I ](media/Andrew-NG-image20.png)

Addition and Scalar Multiplication

Scalar multiplication is 3* matrix (n*matrix).

Scalar division is ⅓ * matrix

Matrix Vector Multiplication

![Details: m x n matrix (m rows, n columns) X a; n x I matrix m-dimensional (n-dimensional vector vector) To get !Ji, multiply A's ith row with elements of vector and add them up. 02:36 , 13:39 ](media/Andrew-NG-image21.png)



Calculating hypothesis using matrix-vector multiplication in octave its easy

![House sizes: 2104 1534 852 ho(x) = 4 0.25 ](media/Andrew-NG-image22.png)

Matrix - Matrix multiplication

![Details: m n matrix (m rows, n columns) Matrix Matrix Multiplication x (n rows, o columns) m xo matrix 0 ](media/Andrew-NG-image23.png)

If we have 3 hypothesis with 4 houses then,

![House sizes: '2104 1416 1534 851 Matrix 1 2104 1 1416 1 1534 1 852 09:43 11:09 Have 3 competing hypotheses: 0.25 2. ho(x) OO O. 3. ho(x) = -40 0.25 Matrix .1 150 0.4 486 410 314 342 344 353 173 '285 92 416 64 91 Matrix Matrix Multiplication ](media/Andrew-NG-image24.png)

Multiplication Properties
-   Multiplication is not commutative ( A*B not equal to B*A)
-   Multiplication is Associative ( a*(b*c) = (a*b)*c)
-   Identity matrix (A.I = I.A = A)

Matrix Inverse and Transpose

Matrix Inverse:
-   0 does not have an inverse.
-   3 inverse is 3-1
-   Matrix inverse ( A * A-1 = Identity)
-   Matrix that don't have an inverse are singular or degenerate matrix
-   Ex- 0 matrix doesn't have inverse.

Matrix Transpose:

![Matrix Transpose Example: Let A be an m x n matrix, and let B AT. Then B is an n x m matrix, and ji• 09:44 11:13 Inverse and Transpose ](media/Andrew-NG-image25.png)

























