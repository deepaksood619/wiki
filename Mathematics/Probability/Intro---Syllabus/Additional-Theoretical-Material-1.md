# Additional Theoretical Material

Created: 2018-08-12 09:06:44 +0500

Modified: 2018-08-17 20:22:02 +0500

---

![A linear function of two independent continuous random fN+Y(z) = The PDF of ---Y? (for independent X, Y) SY(x/2) ](media/Intro---Syllabus_Additional-Theoretical-Material-1-image1.png){width="12.09375in" height="6.84375in"}





![Simulation. We have available a random number generator that produces samples of a random variable U which is uniform on [0, 1]. Describe a method for generating a sample of a random variable X with known CDF F, for the following cases. (a) When X is a discrete random variable that takes finitely many values. (b) When X is continuous, taking values in some interval, and its CDF is strictly monotonic on that interval. (c) When X is exponential with parameter = 1. ](media/Intro---Syllabus_Additional-Theoretical-Material-1-image2.png){width="12.125in" height="2.3020833333333335in"}



![(a) Suppose for simplicity that X is integer-valued. The intuitive idea is to partition the unit interval into subintervals, with the kth interval having length PX (k). Whenever U falls in the kth interval, we assign the value k to the random variable X. Mathematically, this translates to the following. We assign to X the value k whenever the value u of the random variable U satisfies F(k---l) < u F (k). With this choice, = k) = - 1) < U Fx(k)) = F(k) - - 1), and P (X k) = F (k), so that F is indeed the CDF of the random value X we have generated. (b) In the continuous case, given the value u of U, we assign to X a value that satisfies F@) u. (Such a value exists and is unique because we assumed that F is strictly increasing on the relevant interval.) In terms, of random variables, we have the relation F (X) = U. Since F is continuous and monotonic, we have Therefore, if and only if F (X) F@). where the last equality holds because U is uniform. Thus, X has the desired CDF. (c) The exponential CDF with parameter = 1 takes the form F@) --- for 0. Thus, to generate values of X, we start with the value u of U and assign to X a value that satisfies 1 --- --- u. Solving for x, we find log(l --- u). ](media/Intro---Syllabus_Additional-Theoretical-Material-1-image3.png){width="12.083333333333334in" height="13.03125in"}



![(a) Showing that two random variables are equal entails showing that no what the outcome of the experiment, the two random variables take same values. Therefore, we need to show that for any y* for which py(y O, the resulting values I Y = y* ] and = y* ] of two random variables of interest are the same. Recall the expected value rule: We apply this to a conditional model in which the event Y = y* is kn to have occurred: Now, note that for y y* , P (X = x, Y = y I Y = y* ) = O; in PMF notai if y y*. On the other hand, for y = y* , we have = x, Y = = = = xlY in P MF notation, y* I y* ) = PXIY(x I y*). Using these facts, the double summation in the expected value rule, becc a single summation, and We have therefore verified the desired equality. Note: These results are true for all kinds of random variables (continu mixed, etc.). A general proof would require an appropriate variant of expected value rule, but would be awkward because one would hav consider all possible combinations of cases. In a more advanced treatil ](media/Intro---Syllabus_Additional-Theoretical-Material-1-image4.png){width="12.09375in" height="15.614583333333334in"}

![Multiplying both sides by x, and then summing over all we obtain E[XIY = y] = Ih(Y) z]. Now, if the event Y = y is known to have occurred, then E[X I Y] t the value E[X I Y = y]. In that case, the random variable h(Y) takes value h(y) = z, so that the random variable E[X I h(Y)] takes the v E[X I h(Y) = z]. We have already shown that E[X I Y = y] is the s as E[X I h(Y) = z]. Hence, the random variables E[X I Y] and E[X I h always take the same values, and are therefore equal. ](media/Intro---Syllabus_Additional-Theoretical-Material-1-image5.png){width="12.09375in" height="15.614583333333334in"}







