# Crash Course Statistics

Created: 2018-08-04 14:23:55 +0500

Modified: 2022-05-03 19:42:27 +0500

---

[Statistics](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr)



1.  **Z-scores and percentiles**

    a.  Z-scores - Amount of standard deviation above or below the mean

    b.  Z-scores in general allow us to compare things that are not on the same scale, as long as they're normally distributed.

    c.  Percentiles - Tell you what percentage of the population has a score or value that's lower than yours.



2.  **Confidence intervals**

    a.  Confidence intervals - An estimated range of values that seem reasonable based on what we've observed. It's center is still the sample mean, but we've got some room on either side for our uncertainity.

    b.  T-distribution - A continuous probability distribution that's unimodal; it's useful to represent sampling distributions

    c.  Margin of Error - Just like a confidence interval, reflects the uncertainity that surrounds sample estimates of parameters like the mean or a proportion



3.  **How p-value help us test hypothesis**

    a.  Statistical inference

    b.  Null Hypothesis Significance Testing (NHST)

A form of the Reduction Ad Absurdum argument which tries to discredit an idea by assuming the idea is true, and then showing that if you make that assumption, something contradictory happens.

Ex- we use this to prove that there is no largest positive integer

3.  **p-values (how rare your data is)**

If your p-value were 0.10 you could say that your sample is in the top 10% most extreme samples we'd expect to see based on the distribution of sample means.



<https://www.freecodecamp.org/news/what-is-statistical-significance-p-value-defined-and-how-to-calculate-it/>



4.  **p-value problems**

    a.  Alternative Distribution

    b.  Alternative Hypothesis

    c.  Failing to reject the null hypothesis doen't mean that there isn't an effect or relationship, it just means we didn't get enought evidence to say there definitely is one.



5.  **Playing with power - p-value part 3**

    a.  Type 1 Error -
        -   rejecting the null, even if it's true. It can therefore only happen if the null is true
        -   Essentially false positives: we think we've detected an effect, but there isn't one

    b.  Type 2 Error -
        -   False negatives: There was an effect, but we didn't see it.



6.  **You know i am all about that Bayes**
    -   **Bayesian statistics is about updating beliefs and can be used to test hypotheses.**
    -   **Bayes' Factor - Represents the amount of information that we've learned about our hypotheses from the data**
    -   **Bayesian hypothesis testing provides a structured way to quantify a logical process that we do everyday day, incorporating new events into the way we see the world**



7.  **Bayes in science and everyday life**

![م لا) ١٧١ POSTERIOR لإN)0 ١ PRIOR LIKELIHOOD P X)H) (( م X) هم NORMALIZATION ](media/Crash-Course-Statistics-image1.png){width="5.0in" height="2.75in"}
-   We will take our prior belief and update it with the likelihood of our evidence



8.  **Test Statistics**
    -   **Allow us to quantify how close things are to our expectations or theories**
    -   **Sampling Distribution - The distribution of all possible group means for a certain sample size**
    -   **Z-statistics around 1 or -1 tell us that the sample mean is the typical distance we'd expect a typical sample mean to be from the mean of the null hypothesis**
    -   **We can use Z-tests to do hypothesis tests about means, differences between means, proportions, or even differences between proportions**
    -   **Critical value - A value of our test statistic that marks the limits of our extreme values.**
    -   **But sometimes, a Z-Test won't apply. And when that happens, we can use the T-Distribution and corresponding T-statistic to conduct a hypothesis test**
    -   **Reject H~0~ if the p is too low**



9.  **T-Tests: A matched pair made in heaven**

T-Statistics tells us how many standard errors away from the mean our observed difference is.

![OBSERVED mm - WHAT WE EXPECT IF THE WU IS TEST STATISTIC: AVERAGE VARIATION ](media/Crash-Course-Statistics-image2.png){width="5.0in" height="0.7083333333333334in"}



10. **Degrees of Freedom and Effect Sizes**
    -   **Degrees of freedom is the number of independent pieces of information we have.**

![DISTRIBUTION COMPARISON Z-DISTRIBUTION (STANDARD NORMAL) T-DISTRIBUTION (N CLOSE TO 30) T-DISTRIBUTION (N SMALLER THAN 30) ](media/Crash-Course-Statistics-image3.png){width="5.0in" height="3.03125in"}


-   Effect Size - Tells us how big the effect we observed was, compared to random variation.



27. **Chi-Squared Tests**

A**chi-squared test**, also written as***χ*^2^test**, is any[statistical hypothesis test](https://en.wikipedia.org/wiki/Statistical_hypothesis_testing)where the[sampling distribution](https://en.wikipedia.org/wiki/Sampling_distribution)of the test statistic is a[chi-squared distribution](https://en.wikipedia.org/wiki/Chi-squared_distribution)when the[null hypothesis](https://en.wikipedia.org/wiki/Null_hypothesis)is true. Without other qualification, 'chi-squared test' often is used as short for[*Pearson's*chi-squared test](https://en.wikipedia.org/wiki/Pearson%27s_chi-squared_test). The chi-squared test is used to determine whether there is a significant difference between the expected frequencies and the observed frequencies in one or more categories.



Tests of Independence - Look to see whether being a member of one category is independent of the other

Test of Homogeneity - Looking at whether it's likely that different samples come from the same population

![7VAdX3-Œ sgo sgo 7VAdX3- ](media/Crash-Course-Statistics-image4.png){width="5.0in" height="0.8333333333333334in"}



28. **P-Hacking**
    -   **P-Hacking - Manipulating data or analyses to artificially get significant P-values**
    -   **P-Hacking - When analyses are being chosen based on what makes the P-value significant, not what's the best analysis plan**
    -   **Bonferroni Correction**



30. **The Replication Crisis**
    -   **Replication**
    -   **Reproducible analysis**



31. **Regression**
    -   **General Linear Model (GLM)**
        -   **Data = Model + Error**
        -   **Model (Y = MX + B)**
        -   **Error (A deviation from our model)**
        -   **Inferences**
        -   **Types of GLM**
            -   **Regression model (Continuous variable)**
                -   **One reason we are concerned with outliers in regression is that values that are really far away from the rest of our data can have undue influence on the regression line**
                -   **The sum of all squared distances of each point to the line**
                -   **Residuals**
                -   **F-Test - Helps us quantify how well we think our data fit a distribution, like the null distribution**

![DIISWIS-Y ](media/Crash-Course-Statistics-image5.png){width="5.0in" height="0.8333333333333334in"}
-   Sum of Squares for Regression (SSR)
-   Sum of Squares for Error (SSE)

![TOTAL SUMS SQUARES 0 000 o SUMS SQUARES REGRESSION o o O 0 0 80 8 ssr= SSR + SSE DATA = MODEL + ERROR SUMS SQUARES FOR ERROR OBO SSR F-STATISTIC•. SSE ](media/Crash-Course-Statistics-image6.png){width="5.0in" height="2.4479166666666665in"}
-   Degrees of Freedom - represents the amount of independent information we have



32. **ANOVA (Analysis of Variance)**

Allows us to compare three or more groups for statistical significance



Omnibus Test - A test that contains many items or groups (Ex - F-Test)



![ANOVA TABLE MODEL RESIDUAL 3.0288 MS MODEL MS ERROR 0.000829 240 SUMS OF SQUARES 832.3 5995.8 (Xi-P)2 MEAN SQUARE 75.667 24.983 ](media/Crash-Course-Statistics-image7.png){width="5.0in" height="3.0in"}



33. **ANOVA Part 2: Dealing with Intersectional Groups**
    -   **Factorial ANOVA - A factorial ANOVA does almost exactly what a regular ANOVA does: it takes the overall variation - or sums of squares - and portions it out into different categories.**
    -   **Example - Does car color and manufacture effect the overall price.**
    -   **Sums of squares total**

![SUMS OF SQUARES TOTAL MEAN OVERALL PRICE ](media/Crash-Course-Statistics-image8.png){width="5.0in" height="2.71875in"}



![PRICE = BASELINE+ x MANUFACTURE + x COLOR + ERROR DATA = MODEL + ERROR ](media/Crash-Course-Statistics-image9.png){width="5.0in" height="1.3333333333333333in"}



![F-STATISTIC VARIABLE VARIABLE ERROR ERROR VARIABLE l',ts ERROR ](media/Crash-Course-Statistics-image10.png){width="5.0in" height="3.03125in"}

SS - Sum of Squares

MS - Mean squares
-   ANOVA Table

![ANOVA TABLE VARIABLE COLOR MANUFACTURER ERROR 4 3 92 49396875 1330110663 MS 12349219 391952170 14457725 0.8542 27.1102 0.4947 1.186 x 10-12 ](media/Crash-Course-Statistics-image11.png){width="5.0in" height="2.15625in"}



But just like with our T-Tests, we know that a significant F-Test only means that the result is statistically significant. It doesn't always mean it's practically significant to you.



![CALCULATING ETA SQUARED 272 = EFFECT TOTAL ERROR 2555364047 ](media/Crash-Course-Statistics-image12.png){width="5.0in" height="2.0729166666666665in"}


-   ETA squared tells you the proportion of total variation tha's accounted for by your specific variable
-   Interaction
-   Two-way ANOVA

![iou[ 311-108 NV) 183dX3 N33Md38 NOIDVH3lNl 311108 1i3dX3xX3d=S9Nl1Vi+d ) 311108 X3ه3ن! 31LL08+XlNId( « ](media/Crash-Course-Statistics-image13.png){width="5.0in" height="0.6666666666666666in"}



![SUMS OF SQUARES BETWEEN GROUPS oo (DO O EXPERTISE --- o EXPERT - FANCY BOTTLE o EXPERT - PLAIN BOTTLE o NOVICE - FANCY BOTTLE o NOVICE - PLAIN BOTTLE BOTTLE:EXPERT = BETWEEN --- BOTTLE ](media/Crash-Course-Statistics-image14.png){width="5.0in" height="3.1145833333333335in"}



SSG - Sum of Squares between Groups

SSG tell us how much variation can be explained by coming from one of the four possible combination of olive oil expertise and bottle type

![INTERACTION PLOT PLAIN FANCY ](media/Crash-Course-Statistics-image15.png){width="5.0in" height="3.6145833333333335in"}



![INTERACTION PLOT PLAIN • EXPERT • NOVICE FANCY ](media/Crash-Course-Statistics-image16.png){width="5.0in" height="3.1979166666666665in"}



![ANOVA ΤΑΒΙΕ VARlABlE EXPERTISE ΒΟΤΤΙΕ ΤΥΡΕ EXPERTISE : ΒΟΤΤΙΕ ΤΥΡΕ ERROR 1.338 2.1622 7.9999 0.251743 0.145567 0.005979 76 477.6 774.2 2864.3 27211.4 477.6 774.2 2864.3 358.04 ](media/Crash-Course-Statistics-image17.png){width="5.0in" height="2.6458333333333335in"}


-   Main Effects

![INTERACTION PLOT • GENE Y • NO GENE Y MED NO MED ](media/Crash-Course-Statistics-image18.png){width="5.0in" height="3.28125in"}



34. **Fitting models is like Tetris**
    -   **ANCOVA - Analysis of Covariance**
    -   **Repeated measures ANOVA**
    -   **ANOVA - Allow us to analyze the effect of variables with two or more groups on continuos variables**
    -   **Regressions - Allow us to analyze two continuous variables**
    -   **General Linear Model - Explain the data we observe by building a model to predict that data, and then keeping track of how close the prediction is.**
    -   **We can combine ANOVA and regression to give us more flexible ANCOVA**
    -   **Example - we want to calculate the amount of anaesthesia needed for red heads and non red heads. We have two categorical variables (red and non-red) and a continuous variable i.e. weight. Because weight plays a important role in the amount of anaesthesia used.**
    -   **Covariates - Continuous variables that are used to explain our outcome variable.**
    -   **Repeated measures ANOVA - Asks whether there's a significant difference between two or more groups or conditions**



35. **War**
    -   **Bayesian search theory**
    -   **For finding the number of tanks based on number of observations**
        -   **Max = M + (M/N) + 1**
        -   **M is max serial number observed**
        -   **N is number of observations**



41. **When predictions fail**
-   Logistic Curve

![carrying capacity; exponential versus logistic population growth](media/Crash-Course-Statistics-image19.jpg){width="5.0in" height="2.9895833333333335in"}

carrying capacity; exponential versus logistic population growth



In an ideal environment (one that has no limiting factors) populations grow at an exponential rate. The growth curve of these populations is smooth and becomes increasingly steep over time (left). However, for all populations, exponential growth is curtailed by factors such as limitations in food, competition for other resources, or disease. As competition increases and resources become increasingly scarce, populations reach the carrying capacity (K) of their environment, causing their growth rate to slow nearly to zero. This produces an S-shaped curve of population growth known as the logistic curve (right).


-   Inflection Point

A point on a curve at which the curve changes from being concave (concave downward) to convex (concave upward), or vice versa.



















