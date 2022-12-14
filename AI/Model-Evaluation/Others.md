# Others

Created: 2021-06-14 19:23:38 +0500

Modified: 2021-08-26 23:07:03 +0500

---

**K-S Model Evaluation**

Kolmogorov-Smirnov



K-S or Kolmogorov-Smirnov chart measures performance of classification models. More accurately, K-S is a measure of the degree of separation between the positive and negative distributions.



<https://www.saedsayad.com/model_evaluation_c.htm>



**Out Of Time Validation**

<https://towardsdatascience.com/why-isnt-out-of-time-validation-more-ubiquitous-7397098c4ab6>



**Evaluating Supervised Learning**

![• If you have a set of training data that includes the value you're trying to predict you don't have to guess if the resulting model is good or not, • If you have enough training data, you can split it into two parts: a training set and a test set. • You then train the model using only the training set • And then measure (using r-squared or some other metric) the model's accuracy by asking it to predict values for the test set, and compare that to the known, true values. Car Sales Data Training set • training set • test set ](media/Others-image1.jpeg)

**K-fold Cross Validation**

![• One way to further protect against overfitting is K-fold cross validation • Sounds complicated. But it's a simple idea: • Split your data into K randomly-assigned segments • Reserve one segment as your test data • Train on the remaining segments and measure performance against the test set • Repeat, using each segment as the test data and the remaining data for training • Take the average of the resulting accuracy scores ](media/Others-image2.jpg)




