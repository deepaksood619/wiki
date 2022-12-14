# Substring Search Intro

Created: 2018-04-05 23:23:40 +0500

Modified: 2018-12-23 22:45:49 +0500

---

**Substring Search.**In this lecture we consider algorithms for searching for a substring in a piece of text. We begin with a brute-force algorithm, whose running time is quadratic in the worst case. Next, we consider the ingenious Knuth--Morris--Pratt algorithm whose running time is guaranteed to be linear in the worst case. Then, we introduce the Boyer--Moore algorithm, whose running time is sublinear on typical inputs. Finally, we consider the Rabin--Karp fingerprint algorithm, which uses hashing in a clever way to solve the substring search and related problems.



**Goal -** Find pattern of length M in a text of length N

**Applications**
-   Find and Replace
-   Computer Forensics (Find key on disks)
-   Identify patterns indicative of spam
-   Screen scaping : Extract relevant data from web page



![](media/Substring-Search-Intro-image1.png){width="6.40625in" height="4.947916666666667in"}

![](media/Substring-Search-Intro-image2.png){width="6.40625in" height="4.947916666666667in"}

![Substring search cost summary Cost of searching for an M-character pattern in an N-characte operation count algorithm brute force Knuth-Morris-Pratt Boyer-Moore version guarantee backup correct in input? full DFA (Algorithm 5.6) mismatch transitions only full algorithm mismatched char heuristic only (Algorithm 5.7) Monte Carlo MN MN typical 1.1 N 1.1 N 1.1 N yes no no yes yes yes yes yes yes yes ](media/Substring-Search-Intro-image3.png){width="6.40625in" height="4.947916666666667in"}



![Which of the following are properties of the Monte Carlo version of the Rabin-Karp algorithm for substring search? Select the best answer. Always returns correct answer. Always runs in linear time. Correct The Monte Carlo version always runs in linear time but can return the wrong answer; the Las Vegas version always returns the correct answer but takes time proportional to M N in the worst case. Both A and B. Neither A nor B. ](media/Substring-Search-Intro-image4.png){width="6.020833333333333in" height="1.6458333333333333in"}




