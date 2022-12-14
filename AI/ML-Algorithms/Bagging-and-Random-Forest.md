# Bagging and Random Forest

Created: 2018-07-03 11:36:53 +0500

Modified: 2021-06-19 15:26:26 +0500

---

Random Forest is one of the most popular machine learning algorithms. It is a type of ensemble machine learning algorithm called Bootstrap Aggregation or bagging.



The bootstrap is a powerful statistical method for estimating a quantity from a data sample, such as a mean. You take lots of samples of your data, calculate the mean, then average all of your mean values to give you a better estimation of the true mean value.



In bagging, the same approach is used, but instead for estimating entire statistical models, most common decision trees are used.



Multiple samples of your training data are taken then models are constructed for each data sample. When you need to make a prediction for new data, each model makes a prediction and the predictions are averaged to give a better estimate of the true output value.



Random forest is a tweak on this approach where decision trees are created so that rather than selecting optimal split points, suboptimal splits are made by introducing randomness.



The models created for each sample of the data are therefore more different than they otherwise would be, but still accurate in their unique and different ways. Combining their predictions results in a better estimate of the true underlying output value.



If you get good results with an algorithm with high variance (like decision trees), you can often get better results by bagging that algorithm.



<https://victorzhou.com/blog/intro-to-random-forests



**What is a Random Forest?**

The Random Forest algorithm uses multiple decision trees with varying subsets of parameters to make a judgment of the input with each decision tree. This relies on the majority rule choosing the most frequent outcome as the correct one. The Random Forest technique bypasses the disadvantage of having a single decision tree with a biased system.

![Random Forest Simplified Random Forest Tree- I Class-A Instance Tree-2 Class-B Majority-Voting Fma -Class Tree-n 0 Class-B ](media/Bagging-and-Random-Forest-image1.png)

# Random Forests



![Random forests, bagging, and boosting are very effective predictors built by combining lots of very simple predictors Linear Regression For predicting planets and pea growth 1940s 1800s Kernel Methods Support Vector Machines (SVMs) Neural Networks 1980s 1960s 1990s Perceptron Precursor to neural networks Decision Trees 2000s Random Forests, Boosted Trees h many the h&est q-*is oeren aftaæd with ](media/Bagging-and-Random-Forest-image2.png)



![Random forest: Strong learner from many weak learners Random Sarve Class A o CBss A vote CBss A o Class ](media/Bagging-and-Random-Forest-image3.png)



![Which of the following is most likely false of random forests when comparing against individual decision trees? Better generalization through bagging/subspacing Has wisdom of the crowd through voting/aggregating Similar bias but lower variance Easier to visually interpret Correct ](media/Bagging-and-Random-Forest-image4.png)






