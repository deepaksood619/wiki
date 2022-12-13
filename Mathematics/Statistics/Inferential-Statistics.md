# Inferential Statistics

Created: 2021-09-15 23:20:49 +0500

Modified: 2021-09-15 23:42:48 +0500

---

Introduction

What is a distribution

The Normal Distribution

The Standard Normal Distribution

Central limit theorem

Standard error

Estimators and estimates
**Inferential Statistics (Drawing Conclusion)**

Itis a fancy name for methods that aid in quantifying properties of the domain or population from a smaller set of obtained observations called a sample
**Distributions**

![Definition In statistics, when we talk about distributions we usually mean probability distributions. Definition (informal): A distribution is a function that shows the possible values for a variable and how often they occur. Definition (Wikipedia): In probability theory and statistics, a probability distribution is a mathematical function that, stated in simple terms, can be thought of as providing the probabilities of occurrence of different possible outcomes in an experiment. Examples: Normal distribution, Student's T distribution, Poisson distribution, Uniform distribution, Binomial distribution Graphical representation It is a common mistake to believe that the distribution is the graph. In fact the distribution is the 'rule' that determines how values are positioned in relation to each other. Very often, we use a graph to visualize the data. Since different distributions have a particular graphical representation, statisticians like to plot them. Examples: Uniform distribution Normal distribution Binomial distribution Student's T distribution ](media/Inferential-Statistics-image1.jpg)
**The Normal Distribution**

![The Normal distribution is also known as Gaussian distribution or the Bell curve. It is one of the most common distributions due to the following reasons: It approximates a wide variety of random variables Distributions of sample means with large enough samples sizes could be approximated to normal All computable statistics are elegant Heavily used in regression analysis Good track record Næ(g, 02) N stands for normal; stands for a distribution; u is the mean; 02 is the variance. Examples: Biology. Most biological measures are normally distributed, such as: height; length of arms, legs, nails; blood pressure; thickness of tree barks, etc. IQ tests Stock market information ](media/Inferential-Statistics-image2.jpg)
![Origin Controlling for the standard deviation Keeping the standard deviation constant, the graph of a normal distribution with: • a smaller mean would look in the same way, but be situated to the left (in gray) • a larger mean would look in the same way, but be situated to the right (in red) c = 140 c = 140 1.1 = 743 = 470 14b - = 960 ](media/Inferential-Statistics-image3.jpg)
![Controlling for the mean 70 = 140 a = 210 Origin = 743 = 743 = 743 Keeping the mean constant, a normal distribution with: a smaller standard deviation would be situated in the same spot, but have a higher peak and thinner tails (in red) a larger standard deviation would be situated in the same spot, but have a lower peak and fatter tails (in gray) ](media/Inferential-Statistics-image4.jpg)
**The Standard Normal Distribution**

![The Standard Normal distribution of the Normal distribution. It has standard deviation of 1. Every Normal distribution can be the standardization formula: is a particular case a mean of 0 and a 'standardized' using Why standardize? Standardization allows us to: compare different normally distributed datasets detect normality detect outliers create confidence intervals test hypotheses perform regression analysis A variable following the Standard Normal distribution is denoted with the letter z. Rationale of the formula for standardization: We want to transform a random variable from 02) to Subtracting the mean from all observations would cause a transformation from 02) to 02), moving the graph to the origin. Subsequently, dividing all observations by the standard deviation would cause a transformation from 02) to ), standardizing the peak and the tails of the graph. ](media/Inferential-Statistics-image5.jpg)
**The Central Limit Theorem**

![The Central Limit Theorem (CLT) is one of the greatest statistical insights. It states that no matter the underlying distribution of the dataset, the sampling distribution of the means would approximate a normal distribution. Moreover, the mean of the sampling distribution would be equal to the mean of the original distribution and the variance would be n times smaller, where n is the size of the samples. The CLT applies whenever we have a sum or an average of many variables (e.g. sum of rolled numbers when rolling dice). The theorem No matter the distribution The distribution of y-1, *72, x3, G, Why is it useful? The CIT allows us to assume normality for many different variables. That is very useful for confidence intervals, hypothesis testing, and regression analysis. In fact, the Normal distribution is so predominantly observed around us due to the fact that following the CLT, many variables converge to Normal. Click here for a CLT simulator. Where can we see it? Since many concepts and events are a sum or an average of different effects, CLT applies and we observe normality all the time. For example, in regression analysis, the dependent variable is explained through the sum of error terms. would tend to N The more samples, the Normal (k The bigger the samples, to Normal (n closer to the closer ](media/Inferential-Statistics-image6.jpg)
**Estimators and Estimates**

![Estimators Broadly, an estimator is a mathematical function that approximates a population parameter depending only on sample information. Examples of estimators and the corresponding parameters: Estimates An estimate is the output that you get from the estimator (when you apply the formula). There are two types of estimates: point estimates and confidence interval Term Mean Variance Correlation Estimator Parameter 2 s 02 p Estimators have two important properties: Bias The expected value of an unbiased estimator is the population parameter. The bias in this case is 0. If the expected value of an estimator is (parameter + b), then the bias is b. Efficiency The rnost effcient estimator is the one with the smallest vanance. estimates. Point estimates A single value. Examples: 5 • 122.67 0.32 Confidence intervals An interval. Examples: (1,5) (12 , 33) ( 221.78, 745.66) (-0.71,0.11) Confidence intervals are much more precise than point estimates. That is why they are preferred when making inferences. ](media/Inferential-Statistics-image7.jpg)
**Confidence Intervals and the Margin of Error**

![Interval start Point estimate Interval end Definition: A confidence interval is an interval within which we are confident (with a certain percentage of confidence) the population parameter will fall. We build the confidence interval around the point estimate. (I-a) is the level of confidence. We are confident that the population parameter will fall in the specified interval. Common alphas are: 0.01, 0.05, 0.1. General formula: - ME.* + ME] , where ME is the margin of error. standard deviation ME = reliabilityfactor* sample size Term (I-a) T Effect on width of Cl s tu,a/2 * ](media/Inferential-Statistics-image8.jpg)

**Student's T Distribution**

![The Student's T distribution is used predominantly for creating confidence intervals and testing hypotheses with normally distributed populations when the sample sizes are small. It is particularly useful when we don't have enough information or it is too costly to obtain it. All else equal, the Student's T distribution has fatter tails than the Normal distribution and a lower peak. This is to reflect the higher level of uncertainty, caused by the small sample size. A random variable following the t-distribution is denoted tu,a , where v are the degrees of freedom. We can obtain the student's T distribution for a variable with a Normally distributed population using the formula: Student's I distrhuticn s/v"7 ](media/Inferential-Statistics-image9.jpg)

**Formulas for Confidence Intervals**

![# populations One One Two Two Two Two Population variance known unknown Known unknown, assumed equal unknown, assumed different Samples dependent independent independent independent Statistic z z Variance S Sdifference s Formula ± za/2 --- s n---1,a/2 ± tn-1,a/2 ¯ 02 02 (f --- Y) ± za/2 nx ny (i --- Y) ± tnx+ny-2,a/2 2 (X --- Y) ± tua/2 nx ny ](media/Inferential-Statistics-image10.jpg)

