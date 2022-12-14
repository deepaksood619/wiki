# Optimization

Created: 2018-07-02 02:31:48 +0500

Modified: 2021-06-19 14:47:58 +0500

---

**Learn how to**
-   Quantify model performance using loss function
-   Use loss functions as the basis for an algorithm called gradient
-   Optimize gradient descent to be as efficient as possible
-   Use performance metrics to make business decisions

# 

# Defining ML Models

![ML models are mathematical functions with parameters and hyper-parameters Parameters Changed during model training ML Model Hyper-parameters Set before training ](media/Optimization-image1.png)



![Linear models have two types of parameters: bias and weight Bias Output Term Input Weight Model Parameters ](media/Optimization-image2.png)



![Classification explained graphically ](media/Optimization-image3.png)



![How do we predict a baby's health before they are born? Which of these could be a feature in our model? A. Mother's Age B. Birth Time C. Baby Weight Which could be a label? ](media/Optimization-image4.png)



![Exploring the data visually Baby Weight vs Mother's Age Mother's age ](media/Optimization-image5.png)



![Exploring the data visually Baby Weight vs Mother's Age Mother's age ](media/Optimization-image6.png)



![Equation for a linear model tying mother's age and baby weight Baby Weight vs Mother's Age slope of the is 3ven by is the feature (e.g. mother's age) is the weight for x, 6.83 6 .49 Line: Line: Line: . e3x .01x 7 • 14 Mother's age ](media/Optimization-image7.png)



![Can't we just solve the equation using all the data? Baby Weight vs Mother's Age Mother's age ](media/Optimization-image8.png)



![Searching in C) Parameter 2 ](media/Optimization-image9.png)



# Loss Functions

![Composing a loss function by calculating errors Error = actual (true) - predicted value Compute the errors: +0.70 +1.10 +0.65 -1.29 -1.15 +1.10 +3.09 -2.10 Each error rx-Bkes HOG) a/ the errors added Mother's age ](media/Optimization-image10.png)



![One loss function metric is Root Mean Squared Error (RMSE) 49 +0.70 1.21 +1.10 +0 • 65 -1.29 1.32 -1.15 1.21 +1.10 9.55 +3.09 4.41 -2.10 I, Get the errors for the training examples 2, Compute the squares of the error values 1.44 3. Compute the mean of the squared error values 2.51 4. Take a square root of the 1.58 1 -x (Yi - Yi)2 predicted value labeled value ](media/Optimization-image11.png)



![Lower RMSE indicates a better performing model Baby We•ght vs 'Parameters Mother's age RMSE=.145 Mother's age RMSE=.149 Deed a way fo Ord the best vaues Roc webhf ard bias ](media/Optimization-image12.png)



![Problem: RMSE doesn't work as well for classification 10 RVSE. Target-O O RMSE. O Unear Approntnatvon 06 04 06 Redjct•on ](media/Optimization-image13.png)



![Introducing Cross Entropy Loss 10 8 6 2 1 x XEntropy. Target---I O XEntropy. Target---O O Bad classifications are penalized appropriately. 02 1 04 x IOCJ(/Ji) + (l 06 08 "i) X log(l ](media/Optimization-image14.png)



![Computing Cross Entropy Loss Positive term Negative term !Ji) X log(l + --- 10 I ¯ . 2 ](media/Optimization-image15.png)



![Computing Cross Entropy Loss Positive term Negative term .V r...............................-k.............................-.n r.................................................................-.z.................................................................n 1 x .1Jl) X 101/(1 x 1 ](media/Optimization-image16.png)



![From Loss Functions to Gradient Descent Vcmer•s age RMSE=1.98 Positive term Mother's RMSE=3.21 Negative term X log(üi) + (1 --- !Ji) X log(l --- //i) o .7 8 ](media/Optimization-image17.png)

# 

# Gradient Descent

![Loss functions lead to loss surfaces 10 Bias Term ](media/Optimization-image18.png)



![Which direction should I head? How large or small a step? ](media/Optimization-image19.png)



![A simple algorithm to find the minimum while loss is > Epsilon: direction = computeDirection() for i in range(self.params): self. params[i] self. params[i] // direction[iJ + stepSize loss = computeLoss() F.psilon = tinv Constant ](media/Optimization-image20.png)



![Search for a minima by descending the gradient Bias Term ](media/Optimization-image21.png)



![Small step sizes can take a very long time to converge starting point small learning rate takes forever loss value of weight w ](media/Optimization-image22.png)



![loss Large step sizes may never converge to the true minimum I.eau•€ the starting point alt ogether 1. Go Right: (h ershoots value of weight w ](media/Optimization-image23.png)



![A correct and constant step size can prove difficult to find loss we'll get there! value of weight Step size or "learnino rate" is a per- paranjeter Ilicli is set before trainino O Overshot! ()ne size does not fit all 1110(lels ](media/Optimization-image24.png)



![The Loss Function slope provides direction and step size in our search Slope is Negative Direction: Go Right! Magnitude is (-5) Step Size: Big loss v lue of weight w value of w Loss Function Remember, our goal is to find the minimum loss which is where the Loss Function slope O Loss Function Slope (Derivative) ](media/Optimization-image25.png)



![The Loss Function slope provides direction and step size in our search Direction Go I-eel. H±niiude 5 loss (lu•t value of weig t w value of w Loss Function Loss Function Slope (Derivative) ](media/Optimization-image26.png)



![The Loss Function slope provides direction and step size in our search Slope is Qosifive Direction Go I-eel. Heiude is 2 step Srnal loss dtrt dloss c value of eight w value of w Loss Function Loss Function Slope (Derivative) ](media/Optimization-image27.png)



![Are we done yet? Bias Term while loss is > Epsilon: derivative = computeDerivative() for i in range(self.params): self. params[iJ - self. params[i] // derivative[i] = computeLoss() loss ](media/Optimization-image28.png)



![A typical loss curve Big drops in loss rnetric€ carlv on (big steps) o Many €nraller €tcp€ as "e get closer to a In initna Time ](media/Optimization-image29.png)



![Loss Loss ](media/Optimization-image30.png)



![Adding a scaling hyperpararneter while loss is > Epsilon: = computeDerivative() derivative for i in range(self.params): self. params[i) - self. params[i] // loss - learning _ rate // * derivative[i] = computeLoss() ](media/Optimization-image31.png)



![Problem: My model changes every time I retrain it Loss Surface with a global minimum Loss Surface with more than one minima ](media/Optimization-image32.png)



![Problem: Model training is still too slow Done. Check Loss • Calculate Derivative Training Loop Take a Step Number of data points Number of model parameters ](media/Optimization-image33.png)



![Done. Calculate Derivative Training Loop Check Loss Take a Step Number of data points Number of model parameters Frequency ](media/Optimization-image34.png)



![O Calculating the derivative on fewer data points Trainino on the full dataset eu•ry €tep i€ 000 ,Mini-batching reduces co«t hile presenino qualit> . Cost Typical values for batch size: 10 - 1000 examples. ](media/Optimization-image35.png)



![Checking loss with reduced frequency while loss is > Epsilon: = computeDerivative() derivative for i in range(self.params): self. params[i] self. params[i] // - learning_rate // * derivative[i] if readyToUpdateLoss(): updateLoss() loss = Popular implementations for readyToUpdateLoss ( • Time-based (e.g., every hour) • Step-based (e.g., every 1000 steps) ](media/Optimization-image36.png)



![Changing our model's parameters Checking to see when we've made the right changes ](media/Optimization-image37.png)





# TensorFlow Playground

![Let's talk about the Weightl column. Note how the magnitude of the weights increased as the learning rate increase. Why do you think that is? Learning Rate .00001 .001 10 Weightl .42 .65 1.0 12.0 Loss Over Time The model with a larger learning rate look bigger steps Correct The model with a larger learning rate look smaller steps The model with a smaller learning rate look bigger steps ](media/Optimization-image38.png)



[**https://goo.gl/EEuEGp**](https://goo.gl/EEuEGp)

[**https://goo.gl/3pmeKj**](https://goo.gl/3pmeKj)

[**https://goo.gl/ou9iMB**](https://goo.gl/ou9iMB)



# Performance Metrics

![E Inappropriate Minima o An inappropriate O Parameter 2 Don't reflect the relationqlip een féatures and label Von •t generalize ell ](media/Optimization-image39.png)



![1000 parking spaces 990 of them are taken 10 are available An ML model that always reported that a space was occupied would be right 99/100 times. ](media/Optimization-image40.png)



![In Search of a Perfect Loss Function Parameterl ](media/Optimization-image41.png)



![Performance metrics allow us to measure what matters • Loss Functions During training Harder to understand Indirectly connected to business goals Performance Metrics • After training Easier to understand Directly connected to business goals ](media/Optimization-image42.png)










































