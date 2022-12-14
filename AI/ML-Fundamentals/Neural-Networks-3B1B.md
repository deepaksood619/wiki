# Neural Networks 3B1B

Created: 2018-07-04 02:08:15 +0500

Modified: 2021-04-03 20:47:25 +0500

---

Mnemonic - Input, times Weight, add a Bias, Activate



# What is neural network
-   Convolutional neural network - Good for image recognition
-   Long short term memory network - Good for speech recognition
-   Multilayer perceptron (Plain vanila neural network)



Sigmoid squisification function

![Sigmoid ](media/Neural-Networks-3B1B-image1.png)



Sigmoid function squishes the numbers into a range between 0 and 1.

Very negative inputs end up close to 0

Very positive inputs end up close to 1

And others steadily increase around input 0



!["bias" 784 Sigmoid How positive is this? Only activate meaningfully when weighted sum > 10 ](media/Neural-Networks-3B1B-image2.png)


-   Weights
-   Bias

![784 weights 16 10 biases 13,002 Finding the right Learning -+ weights and biases ](media/Neural-Networks-3B1B-image3.png)



![冖 1 一 Sigmoid (),0 ao 十 0 一 - 01 十 : · 十 冖 一 n an Wk.() k 一 1 一 1 0 、 u ~ 1 1 冖 0 一 'Wk 7U1 n WO n 冖 0) 冖 0 一 冖 0 一 冖 0 一 Bias ](media/Neural-Networks-3B1B-image4.png)



ReLU - Rectified Linear Unit used instead of Sigmoid because it's easier to train.

Sigmoid is a slow learner

ReLU (a) = max(0,a)

<https://machinelearningmastery.com/rectified-linear-activation-function-for-deep-learning-neural-networks



![Rectified linear unit 2 ReLU(a) --- max(0, a) ---3 -2 -1 1 -1 Same 2 as Inactive 1 f(a) 3 a 4 ](media/Neural-Networks-3B1B-image5.png)



# Gradient Descent
-   Cost of a training example (Add all the squares of the differences between output - correct output)
-   Cost is large when the output is far from the correct values and vice-versa
-   For finding the local minima we can find slope of the function



![784 What's the cost of this difference? 00 01 02 06 07 08 09 Utter trash ](media/Neural-Networks-3B1B-image6.png)



![○ ○ ○ ○ ○ ○ ○ 0 1 ○ ○ ○ ○ ○ 784 ](media/Neural-Networks-3B1B-image7.png)



![W dw O Single input min ](media/Neural-Networks-3B1B-image8.png)



![(w) dw c@) Single input min ](media/Neural-Networks-3B1B-image9.png)



![Sometimes infeasible W dw min ](media/Neural-Networks-3B1B-image10.png)


-   Multivariable Calculus - The Gradient of a function gives you the direction of steepest ascent. Basically, which direction should you step to increase the function most quickly



![space ra ient , t e irection of stee est increase hich direction de reases most qu• ly? ](media/Neural-Networks-3B1B-image11.png)



![Ⅱ (IA)DA ](media/Neural-Networks-3B1B-image12.png)



# Backpropagation

![○ ○ 0 ○ ○ ○ ○ ○ ○ ○ 0 1 2 4 5 6 8 9 0 1 2 3 4 5 6 8 9 0 · 8 784 0 0 ](media/Neural-Networks-3B1B-image13.png)



![Increase Increase in proportion to ai Change at in proportion to tv; ](media/Neural-Networks-3B1B-image14.png)



![○ ○ 0 ○ ○ ○ ○ ○ ○ ○ 0 1 2 4 5 6 8 9 0 1 2 3 4 5 6 8 9 , 0 · 8 784 0 0 0 ](media/Neural-Networks-3B1B-image15.png)



![Increase b Increase in proportion to a Change at in proportion Propagate backwards o.. 10 0.2 t 2 i 'i O o. 0.2 0.1 $3 14 $6 7 8 9 ](media/Neural-Networks-3B1B-image16.png)



![Average over all training data 7 互 一 0 · 08 十 0 · 02 一 0 · 02 十 0 · 11 一 0 · 05 一 0 · 14 一 0 · 08 0 一 0 · 11 十 0 · 11 十 0 · 07 十 0 · 02 十 0 · 09 十 0 · 05 十 0 · 12 一 0 · 07 一 0 · 04 一 0 · 01 十 0 · 02 十 0 · 13 一 0 · 15 一 0 · 06 W13 00 丄 十 0 · 13 十 0 · 08 一 0 · 06 一 0 · 09 一 0 · 02 十 0 · 04 十 0 · 04 0 ](media/Neural-Networks-3B1B-image17.png)



Randomly subdivide the data into mini batches and compute each step with respect to a mini batch (for faster training)

Stochastic Gradient Descent



![5%nnananuoz 3 nneaanßann aeo aaaaønou Compute gradient descent step (using backprop) eønann•nns ](media/Neural-Networks-3B1B-image18.png)



# Backpropogation Calculus

![Cost Co ( (a (L) Desired output O O ](media/Neural-Networks-3B1B-image19.png)



![Desired output (L) Cost Co ( .48 ](media/Neural-Networks-3B1B-image20.png)



![POIISO(I 冖 一 冖 : 冖 '1) 十 冖 T---7)D(q) 冖 1---7) 冖 T)DC 冖 q)ze (q)q 冖 1---7) (q)me OD ](media/Neural-Networks-3B1B-image21.png)



![0 POIISOQ 冖 一 0 • I D 冖 El) 9 · 十 冖 T---7)D(q) D OD 冖 1---7) 8V D D 冖 7)DC (JDC 冖 q)DC 冖 7)ze (q)tn 、 e 冖 q)DQ (q)q 冖 1---7) 冖 q)ZC D OD e ](media/Neural-Networks-3B1B-image22.png)



![Ow(L) OCO D Co Oz(L) 冖 | 1 一 Oa(L) OCO (L---l) · 48 Co 冖 一 L | 1) 十 · 6 2 0 ](media/Neural-Networks-3B1B-image23.png)



![aco (L---l) Ow(L) Oz(L) Otv(L) Oa(L) (9z(L) aco a y) Average of all training examples aw(L) 1 n aw(L) z(L) a 1.00 Derivative of full cost function ](media/Neural-Networks-3B1B-image24.png)



![Backpropagation calculus I Appendix to deep learning chapter 3 ôô(TT (L) 11 oa(L) aco Ob(L) az(L) z(L) 000 y) 1.00 ](media/Neural-Networks-3B1B-image25.png)



![00 · I 冖 El) 冖 1---7) 冖 q)DC ()DC (7)DC 冖 一 ze 冖 1 DQ | 冖 一 De 冖 q)q 冖 1---7) (q)ZQ 冖 一 冖 q) 冖 q) OD ](media/Neural-Networks-3B1B-image26.png)



![冖 | 1 一 冖 L | 1 一 (L---l) b 冖 L) 冖 L | 2 一 b(L---1) 冖 L | 2 一 032 (L---l) D 卜 | + 一 Oa(L-1) Dz(L) OCO Oz(L) 冖 一 | 1) 十 b 冖 一 Da(L) L00 OCO ](media/Neural-Networks-3B1B-image27.png)



![0.83 (L-I) 0.81 n L---I VI Desired output ](media/Neural-Networks-3B1B-image28.png)



![冖 卜 | 1 一 0.40 0 · 81 冖 一 · 1 冖 一 (L) (L---l) 0 · 83 冖 L) (L---l) n L | 1 ](media/Neural-Networks-3B1B-image29.png)



![OCO 冖 卜 | 1 一 0.40 0 · 81 冖 一 · 1 冖 一 Da 冖 卜一 D Co 0 · 83 n L | 1 (L) 冖 | 1 一 ](media/Neural-Networks-3B1B-image30.png)



![" D(a ٦ O. 0=1 0(٦١ l' C صص ل 0"(١) 7. D (1) لك ) (بـ ( ?u+1---1 c. DQ ](media/Neural-Networks-3B1B-image31.png)



[Neural Networks from Scratch in Python](https://www.youtube.com/playlist?list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3)



![](media/Neural-Networks-3B1B-image32.jpg)
































