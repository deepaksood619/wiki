# Neural network and deep learning

Created: 2021-03-26 23:31:55 +0500

Modified: 2021-04-03 20:20:34 +0500

---

# Logistic Regression as a Neural Network

**Logistic Regression - Binary Classification**

![1 (cat) vs 0 (non cat) = 12289 ---3 Blue Gr 231 42 22 23 83 2 34 44 187 92 34 76 232 12 93 22 22 2 30 192 12 34 4 ](media/DL-Specialization_Neural-network-and-deep-learning-image1.png)



And so we're going to use nx=12288to represent the dimension of the input features x.And sometimes for brevity, I will also just use lowercase nto represent the dimension of this input feature vector.



**Notation**

![っ 1 3 ( 5 こ 【 イ メ メ : ・ コ 3 一 ! か イ ](media/DL-Specialization_Neural-network-and-deep-learning-image2.png)



![Logistic Regression It ](media/DL-Specialization_Neural-network-and-deep-learning-image3.png)

What are the parameters of Logistic Regression

W, an n~x~ dimensional vector, and b, a real number.



**Logistic Regression cost function**

![Ⅱ 0 冖 wTX 十 b) 、 where 0 冖 z 一 Ⅱ Loss 冖 error) function. Given 一 冖 x 冖 l) 冖 l) 一 冖 x 冖 m 一 冖 m 一 一 一 、 wan 冖 9(i) 1+e¯Z 1 2 ](media/DL-Specialization_Neural-network-and-deep-learning-image4.png)

What is the difference between the cost function and the loss function for logistic regression?

The loss function computes the error for a single training example; the cost function is the average of the loss functions of the entire training set.



**Gradient Descent**

![Recap: = o(wTx + b), a(z) = 1+e---Z ¯ Y log(l Want to find w, b that minimize J(w, b) ](media/DL-Specialization_Neural-network-and-deep-learning-image5.png)



A Convex function only have 1 local optima



![。 osß 3 In ](media/DL-Specialization_Neural-network-and-deep-learning-image6.png)

**Intuition about derivatives**

![一 0000 ク 00 ・ 0 一 00 00 0 00 ・ 0 00 ) 一 い ( 6 ) 。 99 い 33 一 。 。 ん い 6 0 5 ′ 一 0 0 ・ 5 3 ド い 6 ↑ ← 日 (D)J / 00 ・ 0 0 一 区 き 《 9 朝 ](media/DL-Specialization_Neural-network-and-deep-learning-image7.png)

On a straight line, the function's derivative **doesn't change**



![Intuition about derivatives f (a) a2 0,001 6.001 Q Z Z•ool c; a 20- ](media/DL-Specialization_Neural-network-and-deep-learning-image8.png)



![More derivative examples T ](media/DL-Specialization_Neural-network-and-deep-learning-image9.png)

**Computation Graph**

The computations of a neural network are organized in terms of a forward pass or a forward propagation step, in which we compute the output of the neural network, followed by a backward pass or back propagation step, which we use to compute gradients or compute derivatives. The computation graph explains why it is organized this way.



![u b 。 ](media/DL-Specialization_Neural-network-and-deep-learning-image10.png)

One step of **backward** propagation on a computation graph yields derivative of final output variable.



**Derivatives with a computation graph**

![Computing derivatives 11 u=bc 11 33 = 3v -32 Andrew Ng ](media/DL-Specialization_Neural-network-and-deep-learning-image11.png)



What does the coding convention dvar represent?

The derivative of a final output variable with respect to various intermediate quantities.



![11 V u=bc 33 J = 3v ----0 Cool u..)06 And ](media/DL-Specialization_Neural-network-and-deep-learning-image12.png)



**Logistic Regression Gradient Descent**

**Recap**

![イ ド メ ヾ z 日 wTX 十 b ](media/DL-Specialization_Neural-network-and-deep-learning-image13.png)



**Logistic regression derivatives**

![XI WI X2 W 2 b -١ . - ليا ، ؤد د Z = WI Xl ي ي إ (ومايو a z)» (ي٩)44 a) ( ( اه Q& سف - ول: ه-ط4 د : دلم - ل - ه guz - ](media/DL-Specialization_Neural-network-and-deep-learning-image14.png)

What is the simplified formula for the derivative of the losswith respect to z?

a - y



**Gradient Descent on m examples**

Cost- function w,b,which you care about is this average,1/m sum from i equals one through m ofthe loss when you algorithm output a_i on the example y,where a_i is the prediction on the ith training example which is sigma of z_i,which is equal to sigma of w transpose x_i plus b.

![3 ~ " 冖 」 、 3 一 冖 ](media/DL-Specialization_Neural-network-and-deep-learning-image15.png)



![(يا (نى (أحو - م ر ة رس لو لم ، / ر ر يييه لم ماه - م طيب - (اه)ي كوو ما ) لي ( يما ا) لاله (نا () لا (ا اى رسف -/ ٣ /طه ٨ لاما «دا لما لنا ح - ه ادهله - يياه - يوط ٥/2٩٥أه ](media/DL-Specialization_Neural-network-and-deep-learning-image16.png)

In the for loop depicted in the video, why is there only one dw variable (i.e. no i superscripts in the for loop)?

The value of dw in the code is cumulative.



**Derivation of dL/dz**

<https://www.coursera.org/learn/neural-networks-deep-learning/discussions/weeks/2/threads/ysF-gYfISSGBfoGHyLkhYg>

<https://towardsdatascience.com/derivative-of-the-sigmoid-function-536880cf918e>



**Vectorization**

When you're implementing deep learning algorithms,you find that having explicit for loops inyour code makes your algorithm run less efficiency.So, in the deep learning era,we would move to a bigger and bigger datasets,and so being able to implement your algorithms without using explicitfor loops is really important and will help you to scale to much bigger datasets.



So, it turns out that there are a set of techniques called vectorizationtechniques that allow you to get rid of these explicit for-loops in your code.I think in the pre-deep learning era,that's before the rise of deep learning,vectorization was a nice to have,so you could sometimes do it to speed up your code and sometimes not.But in the deep learning era, vectorization,that is getting rid of for loops,has become really important,because we're more and more training on very large datasets,and so you really need your code to be very efficient.



# Python and Vectorization

![What is vectorization? ±zio ](media/DL-Specialization_Neural-network-and-deep-learning-image17.png)

**Z = W^T^X + b**



**Example**
```
import time

a = np.random.rand(1000000)
b = np.random.rand(1000000)

tic = time.time()
c = np.dot(a, b)
toc = time.time()

print(c)
print(f"Vectorized version {1000*(toc-tic)} ms")

c = 0
tic = time.time()
for i in range(1000000):
    c += a[i]*b[i]

toc = time.time()

print(c)
print(f"For loop {1000*(toc-tic)} ms")
```


## Neural network programming guideline

Whenever possible, avoid explicit for-loops

![media](media/DL-Specialization_Neural-network-and-deep-learning-image18.png)

**Vectors and matrix valued functions**

![Say you need to apply the exponential operation on every element of a matrix/vector. VI Iln --- np.zeros( (n, 1)) for i in range (n): u [i] ---math. exp (v ](media/DL-Specialization_Neural-network-and-deep-learning-image19.png)

**Logistic regression derivatives**

![-9for J Ⅱ 0 、 d 1 Z db + Ⅱ dz ~ 1 to 'm ... wTx 冖 ~一 十 b i) 冖 1 | a(i)) 0 db Ⅱ 0 ](media/DL-Specialization_Neural-network-and-deep-learning-image20.png)

**Vectorizing Logistic Regression**

**Forward propagation**

![z 冖 1 一 Ⅱ wTx 冖 1 一 十 b 『 冖 X z 冖 2 一 Ⅱ 芅 Tx 冖 2 一 十 b z 冖 3 一 Ⅱ WT 冖 3 一 十 z 冖 3 一 ](media/DL-Specialization_Neural-network-and-deep-learning-image21.png)

**Size of matrix X - (n~x~ , m)**



**Vectorizing Logistic Regression's Gradient Output**

![Vectorizing Logistic Regression : k ](media/DL-Specialization_Neural-network-and-deep-learning-image22.png)



![Implementing Logistic Reyression (ker . J = O, dwł 0, db 0, dW2 for i 1 to m: J db a(i) [y(i) loga(i) + (1 --- y log(l --- dz(i) dwł += dW2 += db dz(i) J/ m, dwł dwi / m, dW2 dW2 / m db/m ](media/DL-Specialization_Neural-network-and-deep-learning-image23.png)

How do you compute the derivative of *b* in one line of code in Python numpy?

1 / m*(np.sum(dz))



**Broadcasting in Python**

![Calories from Carbs, Proteins, Fats in 100g of different foods: Apples Beef Carb 6. Protein 1.2 Fat 1.8 SRA 0.0 104.0 135.0 Eggs Potatoes 4.4 68.0 52.0 8.0 99.0 0.9 ](media/DL-Specialization_Neural-network-and-deep-learning-image24.png)

Calculate % of calories from carb, protein, fat, without explicit for loop?

cal = A.sum(axis = 0)

percentage = 100*A / (cal.reshape(1, 4))

matrix (3, 4) / matrix (1, 4)



![Broadcasting example (jo 100 t00 100 200 300 00 。 0 1 2 3 4 5 6 1 2 3 4 5 6 100 ( 0 0 200 乀 00 101 104 101 204 101 102 103 104 202 205 102 205 303 306 103 206 ](media/DL-Specialization_Neural-network-and-deep-learning-image25.png)

**Logistic Regression cost function**

![IX) = If Y p(ylx) = 1-9 If y Andrew N ](media/DL-Specialization_Neural-network-and-deep-learning-image26.png)



![乙 9 ) 、 2 ー soldtuexo ミ 110 00 第 ( - 4 ン ](media/DL-Specialization_Neural-network-and-deep-learning-image27.png)



**IID - Identically Independently Distributed**

True or False: Minimizing the loss corresponds with maximizing logp(y|x) - **True**



**Programming Assignment 1**
-   We rarely use the "math" library in deep learning because the inputs of the functions are real numbers. In deep learning we mostly use matrices and vectors. This is why numpy is more useful.
-   sigmoid_grad() to compute the gradient of the sigmoid function with respect to its input x. The formula is:

sigmoid_derivative(x)=σ′(x)=σ(x)(1−σ(x))
-   Another common technique we use in Machine Learning and Deep Learning is to normalize our data. It often leads to a better performance because gradient descent converges faster after normalization. Here, by normalization we mean changing x tox/∥x∥(dividing each row vector of x by its norm).

For example, if

![3 6 llxll - o 2 --- np. linalg. norm(x, axis = 1, keepdims = True) = x_normalized = Ilxll 4 4 56 ](media/DL-Specialization_Neural-network-and-deep-learning-image28.png)



Normalization is a technique often applied as part of data preparation for machine learning. The goal of normalization is to change the values of numeric columns in the dataset to use a common scale, without distorting differences in the ranges of values or losing information. Normalization is also required for some algorithms to model the data correctly.



For example, assume your input dataset contains one column with values ranging from 0 to 1, and another column with values ranging from 10,000 to 100,000. The great difference in thescaleof the numbers could cause problems when you attempt to combine the values as features during modeling.



Normalizationavoids these problems by creating new values that maintain the general distribution and ratios in the source data, while keeping values within a scale applied across all numeric columns used in the model.



**L1 Loss**
-   The loss is used to evaluate the performance of your model. The bigger your loss is, the more different your predictions (ŷy^) are from the true values (yy). In deep learning, you use optimization algorithms like Gradient Descent to train your model and to minimize the cost.
-   L1 loss is defined as:

![LI (j, y) Iy(i) izo ](media/DL-Specialization_Neural-network-and-deep-learning-image29.png)


-   L2 loss is defined as:

![](media/DL-Specialization_Neural-network-and-deep-learning-image30.png)
































