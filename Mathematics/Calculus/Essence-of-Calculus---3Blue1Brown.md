# Essence of Calculus - 3Blue1Brown

Created: 2018-05-28 16:14:32 +0500

Modified: 2021-03-27 01:05:55 +0500

---

1.  Introduction

2.  The paradox of the derivative

3.  Derivative formulas through geometry

4.  Visualizing the chain rule and product rule

5.  Derivatives of exponentials (What's so special about Euler's number e)

6.  Implicit differentiation, what going on here?

7.  Limits, L'Hopital's rule, and epsilon delta definitions

8.  Integration and the fundamental theorem of calculus

9.  What does area have to do with slope?

10. Higher order derivatives

11. Taylor series

12. The other way to visualize derivatives (What they won't teach you in calculus)



1.  **Introduction**
-   Derivative formulas
-   Product rule, chain rule
-   Implicit differentiation
-   Integral and derivatives are opposite
-   Taylor series



![2 丌 r ](media/Essence-of-Calculus---3Blue1Brown-image1.png){width="5.0in" height="3.3333333333333335in"}



![20 15 10 Area 2rr ](media/Essence-of-Calculus---3Blue1Brown-image2.png){width="5.0in" height="3.125in"}



![Fundamental theorem of calculus Integral" of 10 dc ](media/Essence-of-Calculus---3Blue1Brown-image3.png){width="5.0in" height="3.125in"}



2.  **The paradox of the derivative**

![100 90 80 70 60 50 40 30 20 10 Distance traveled meters) } Change in distance Change in time Time (seconds) 9 10 ](media/Essence-of-Calculus---3Blue1Brown-image4.png){width="5.0in" height="3.125in"}



![100 90 80 70 60 50 40 30 20 10 Distance traveled meters) 0.01 dt dt dt Time (seconds) 9 10 ](media/Essence-of-Calculus---3Blue1Brown-image5.png){width="5.0in" height="3.125in"}



![100 ds 90 dt 80 70 60 50 40 30 20 10 Derivative dt 9 10 ](media/Essence-of-Calculus---3Blue1Brown-image6.png){width="5.0in" height="3.125in"}



![The paradox of the derivative I Chapter 2, Essence of calculus 00 16 Distance 14 12 10 0 12:03/ 18:37 s(t) i.dt? ds (2) dt (2 + dt)3 dt 23 + + 3(2) (dt)2 + (dt)3 dt Time (seconds) ](media/Essence-of-Calculus---3Blue1Brown-image7.png){width="5.0in" height="3.125in"}



![16 14 12 10 Distance s(t) ds (2) dt (2 + (103 dt (2)3 Contains dt Time (seconds) ](media/Essence-of-Calculus---3Blue1Brown-image8.png){width="5.0in" height="3.125in"}



![16 14 12 10 Distance Slope 3 12 ds (2) dt ds (2) dt (2)3 (2 + (103 dt Time (seconds ](media/Essence-of-Calculus---3Blue1Brown-image9.png){width="5.0in" height="3.125in"}



![16 14 12 10 Distance s(t) ds (t) dt (t) dt (t)3 dt 3(t)2 Time (seconds) ](media/Essence-of-Calculus---3Blue1Brown-image10.png){width="5.0in" height="3.125in"}



![If dt has a specific size. d(t3) t3 dt dt Messy d(t3) dt 3t2 Simple ](media/Essence-of-Calculus---3Blue1Brown-image11.png){width="5.0in" height="3.125in"}



3.  **Derivative formulas through geometry**
    -   **The Power Rule**

![dm dm d(m3) dm dm d(Œ5) Power rule" d(Œn) dm ](media/Essence-of-Calculus---3Blue1Brown-image12.png){width="5.0in" height="4.145833333333333in"}



![سس la;) لسه ب ](media/Essence-of-Calculus---3Blue1Brown-image13.png){width="5.0in" height="4.833333333333333in"}



![f@) dx { 3x2 dc ](media/Essence-of-Calculus---3Blue1Brown-image14.png){width="5.0in" height="3.125in"}



![f@) dx Area lost Area gained Negative d(l/x) dc ](media/Essence-of-Calculus---3Blue1Brown-image15.png){width="5.0in" height="2.59375in"}



![Area dx a; New area ](media/Essence-of-Calculus---3Blue1Brown-image16.png){width="5.0in" height="2.4791666666666665in"}



![sin (9) d(sin(9)) 2 Adj. Hyp. cos (0) 0 d(siıı(0)) 2 ](media/Essence-of-Calculus---3Blue1Brown-image17.png){width="5.0in" height="2.4791666666666665in"}



4.  **Visualizing the chain rule and product rule**

    1.  **Sum Rule**

![dc dx Sum rule sm(x) cos(x) dx dx ](media/Essence-of-Calculus---3Blue1Brown-image18.png){width="5.0in" height="3.4479166666666665in"}



![XP )g٠- LI!S( ب (p) ١- ن) (0 : Il IS XP 0- - geo = x ممساه ١ 0؟) Il!S ti!S(p -س ( p. era xp)x(soo t: S(p!11 ب IllS ](media/Essence-of-Calculus---3Blue1Brown-image19.png){width="5.0in" height="3.125in"}



![حمسكاه )٧G٠- u!S( ب (p) ١- ن) (0 : Il IS XP 0- - ١ geo = x geo) Il!S 0ي)-/ دo( - ::: >:::::::----7 نننثنننننثنن 6(0ي)) ب ب x(SOD) t. S(p!11 IllS XP ](media/Essence-of-Calculus---3Blue1Brown-image20.png){width="5.0in" height="3.125in"}



2.  **Product Rule**

![sin(x = Area d(x2) -l- x2d(sin sin(Œ + x cos(x da; ](media/Essence-of-Calculus---3Blue1Brown-image21.png){width="5.0in" height="3.125in"}



![0 6p@)q + Ⅱ XP MP XP I XP 0 ](media/Essence-of-Calculus---3Blue1Brown-image22.png){width="5.0in" height="3.125in"}



![2) + x cos x d(Right) d(Left) Left + Right ](media/Essence-of-Calculus---3Blue1Brown-image23.png){width="5.0in" height="2.5in"}



3.  **Function composition / Chain Rule**

![Function composition '2 sin 2) sin(x Derivative? ](media/Essence-of-Calculus---3Blue1Brown-image24.png){width="5.0in" height="4.354166666666667in"}



![1.5 d(x2) clx sin d(sin sin cos x2) 2a; (lx ](media/Essence-of-Calculus---3Blue1Brown-image25.png){width="5.0in" height="3.125in"}



![Chain rule" 2) cos x2) 2x sin(x dc Inner dc Outer d(lnner dg (h(x)) dc d(Outer) ](media/Essence-of-Calculus---3Blue1Brown-image26.png){width="5.0in" height="2.625in"}



5.  **Derivatives of exponentials**

![dt 0.00000001 0.6931472 0.00000001 dt dt dt ](media/Essence-of-Calculus---3Blue1Brown-image27.png){width="5.0in" height="1.7708333333333333in"}



For smaller and smaller choices of dt value 2^0.000001^ -1 / 0.000001 approaches a specific number. Unlike other functions all the values of dt is separate from the value of t itself

![d(2t) dt d(8t) dt 2t (O .6931 8t(2.0794 . • • ) ](media/Essence-of-Calculus---3Blue1Brown-image28.png){width="5.0in" height="4.03125in"}



![d(at) dt (Some constant) a IS there a base where that constant is 1? ](media/Essence-of-Calculus---3Blue1Brown-image29.png){width="5.0in" height="1.5208333333333333in"}



![IP T0000000 · 0 · 0000000 · Ⅰ Ⅰ 0000000 · 0 INP ](media/Essence-of-Calculus---3Blue1Brown-image30.png){width="5.0in" height="1.75in"}



![OdOIS ](media/Essence-of-Calculus---3Blue1Brown-image31.png){width="5.0in" height="3.125in"}



![od01S ](media/Essence-of-Calculus---3Blue1Brown-image32.png){width="5.0in" height="3.125in"}



![](media/Essence-of-Calculus---3Blue1Brown-image33.png){width="5.0in" height="3.2916666666666665in"}



![e to the what equals 2?" 2 In(2) ](media/Essence-of-Calculus---3Blue1Brown-image34.png){width="5.0in" height="0.9270833333333334in"}



![d(2t) dt d(3t) dt d(7t) dt In(2) 2t 0.6931 . In(3) 3 (0.6931 (0.6931 . In(2) 2 7 111(7) (1.9459 . ](media/Essence-of-Calculus---3Blue1Brown-image35.png){width="5.0in" height="3.125in"}



![t 2 loge (2) (0.69315... t log T (2) (0.60551... ) t (0.18545... )t 42 ](media/Essence-of-Calculus---3Blue1Brown-image36.png){width="5.0in" height="0.8958333333333334in"}



We write some contant times t, as e to some constants time t, because rate of change of some thing (like population) is dependent on the size of that thing (i.e. the size of population). Other example, if we put a cup of water in a cool room, the rate at which water cools is proportional to difference in temperature of room and water, or otherwise **the rate at which that difference changes is proportional to itself.** If we invest our money the amount of interest depends on the amount of money invested.



6.  **Implicit differentiation, what going on here?**

![ロ ロ ロ ロ 以 住 QE 田 口 BBAZ ロ ロ ロ ロ 田 % 田 8 田 讐 8 田 % ( 3 。 4 ) 一 Slo e 十 〃 2 2 ェ clx 十 2 ](media/Essence-of-Calculus---3Blue1Brown-image37.png){width="5.0in" height="3.125in"}



![Implicit differentiation ](media/Essence-of-Calculus---3Blue1Brown-image38.png){width="5.0in" height="2.7604166666666665in"}



![After dt seconds... Think 0.01 5m 3m Related rates x(t) dx x(t) + 2y dt dx (3) +2 dt dt (-1) dt 4 ](media/Essence-of-Calculus---3Blue1Brown-image39.png){width="5.0in" height="3.125in"}



![0 ■ ・ ロ ロ ロ ・ ■ ・ ■ ・ ロ ロ ロ ・ ■ ・ ロ ・ ・ ロ ロ ロ ・ ■ ・ ロ XP 6 Ⅱ の ■ ・ ロ ロ ロ ・ ■ ・ ロ ・ ・ ロ ロ ロ み ■ ■ ■ ロ ロ ・ ■ ・ ロ 日 影 ・ ロ ロ ロ ・ ・ ・ ロ ■ ロ ロ ロ ・ ■ ・ ロ 日 ロ ロ ロ ・ ・ ■ ・ ■ Ⅳ 瀘 ・ ロ ロ ロ ・ ・ ・ ロ ミ ロ ロ ロ ・ ・ ・ 田 を 一 口 ロ ロ ・ ロ "p XP Ⅱ ](media/Essence-of-Calculus---3Blue1Brown-image40.png){width="5.0in" height="3.125in"}



![y In(x) dy Slo e d(ln(x)) dc ](media/Essence-of-Calculus---3Blue1Brown-image41.png){width="5.0in" height="3.125in"}



![y In(x) dy SIO e clx d(ln(x)) dc dy ](media/Essence-of-Calculus---3Blue1Brown-image42.png){width="5.0in" height="3.125in"}


-   Multivariate Calculus



7.  **Limits**
    -   **Formal definition of a derivative**

![Formal derivative definition (2) lim clx No 'infinitely small ](media/Essence-of-Calculus---3Blue1Brown-image43.png){width="5.0in" height="3.125in"}



**h = dx**


-   **(ε, 𝛿) definition of a limit (epsilon - delta)**

![20 15 Undefined h 0? ](media/Essence-of-Calculus---3Blue1Brown-image44.png){width="5.0in" height="3.125in"}



![lim f ( ) h is not defined Can't get smaller ](media/Essence-of-Calculus---3Blue1Brown-image45.png){width="5.0in" height="3.125in"}



![](media/Essence-of-Calculus---3Blue1Brown-image46.png){width="5.0in" height="3.125in"}


-   **L'Hôpital's rule**

![sin(T sin(T lim sin(T ı.ooooı 1.5708 ... ı.ooooı ](media/Essence-of-Calculus---3Blue1Brown-image47.png){width="5.0in" height="3.125in"}



![sin(T lim 1 sin T x sin T cos TT)ff dm ](media/Essence-of-Calculus---3Blue1Brown-image48.png){width="5.0in" height="3.125in"}



![sin sin(nx ](media/Essence-of-Calculus---3Blue1Brown-image49.png){width="5.0in" height="3.125in"}



![sin(n lim 2, Ida; dc 1 sin n x ](media/Essence-of-Calculus---3Blue1Brown-image50.png){width="5.0in" height="3.125in"}



![](media/Essence-of-Calculus---3Blue1Brown-image51.png){width="5.0in" height="3.125in"}



![](media/Essence-of-Calculus---3Blue1Brown-image52.png){width="5.0in" height="3.125in"}



![lim dc dg dc dx L Höpital's rule" g(x) f@) sin@ lim Looks like 0/0 ](media/Essence-of-Calculus---3Blue1Brown-image53.png){width="5.0in" height="3.125in"}



8.  **Integration and the fundamental theorem of calculus**

![Derivative 2t "Antiderivative" ](media/Essence-of-Calculus---3Blue1Brown-image54.png){width="5.0in" height="3.125in"}



![25 meters Velocity in second 20 15 10 5 1 t(8 t) 2 3 4 5 6 7 8 ](media/Essence-of-Calculus---3Blue1Brown-image55.png){width="5.0in" height="2.9791666666666665in"}



![25 20 15 10 v(t) dt t(8 t) ](media/Essence-of-Calculus---3Blue1Brown-image56.png){width="5.0in" height="3.125in"}



![25 20 15 10 5 SCT) v(t) dt t(8 t) ](media/Essence-of-Calculus---3Blue1Brown-image57.png){width="5.0in" height="3.125in"}



![y b f (x) dx dc a Fundamental theorem of calculus b ](media/Essence-of-Calculus---3Blue1Brown-image58.png){width="5.0in" height="3.125in"}



![25 20 15 10 v(t) dt ds t(8 --- t) ](media/Essence-of-Calculus---3Blue1Brown-image59.png){width="5.0in" height="3.125in"}



![25 t(8 20 15 10 t) dt 4T2 (0)3 Cancels when T v(t) t(8 --- t) ](media/Essence-of-Calculus---3Blue1Brown-image60.png){width="5.0in" height="3.125in"}



9.  **What does area have to do with slope?**

![What is the average value of f (x)? ](media/Essence-of-Calculus---3Blue1Brown-image61.png){width="5.0in" height="3.125in"}



![Average height? 37/2 sin(x) '27T ](media/Essence-of-Calculus---3Blue1Brown-image62.png){width="5.0in" height="3.125in"}



![](media/Essence-of-Calculus---3Blue1Brown-image63.png){width="5.0in" height="3.125in"}



![Hours of daylight 14 12 10 Summer 8 months 6 4 2 50 100 150 2.7 sin 2nx/365) + 12.4 Winter months Days since March 21 200 250 300 350 ](media/Essence-of-Calculus---3Blue1Brown-image64.png){width="5.0in" height="3.125in"}



Finding the average of a continuous thing.



![Use an integral! 377/2 sin(x) '27T ](media/Essence-of-Calculus---3Blue1Brown-image65.png){width="5.0in" height="3.125in"}



![0 X)tIIS XP (x)111S -IL 0 ](media/Essence-of-Calculus---3Blue1Brown-image66.png){width="5.0in" height="3.125in"}



![n 一 dc dr n/dc 2 丬 Slll X ](media/Essence-of-Calculus---3Blue1Brown-image67.png){width="5.0in" height="3.125in"}



![X)Ills ・ 十 十 一 十 一 十 一 十 一 十 十 十 十 十 十 十 十 十 十 十 十 十 十 十 十 十 十 十 十 十 一 十 一 十 一 十 一 十 ' ](media/Essence-of-Calculus---3Blue1Brown-image68.png){width="5.0in" height="3.125in"}



![Average height Area Width sin@) clx sin a; 27 ](media/Essence-of-Calculus---3Blue1Brown-image69.png){width="5.0in" height="3.125in"}



![--- sin(x) da; cos(x) sin(œ ](media/Essence-of-Calculus---3Blue1Brown-image70.png){width="5.0in" height="3.125in"}



![cos da; sili (x) sin 27r cos (T ](media/Essence-of-Calculus---3Blue1Brown-image71.png){width="5.0in" height="3.125in"}



![sin T O cos(T)) T (o)) cos --- cos sin O cos( Sili ](media/Essence-of-Calculus---3Blue1Brown-image72.png){width="5.0in" height="3.125in"}



![f (T) dm dm ](media/Essence-of-Calculus---3Blue1Brown-image73.png){width="5.0in" height="3.125in"}



10. **Higher order derivatives**

![da: (l(df) (If2 dfl 0.01 0.0001 (Some (Ifi (1/2 ](media/Essence-of-Calculus---3Blue1Brown-image74.png){width="5.0in" height="3.125in"}



![df2 clfl (I(df) , (Some constant) (d:r)2 dfl (IL Interestingly, there is a notion in math called the "exterior derivative" which treats this "d" as having a more independent meaning, though it's less related to the intuitions I've introduced in this series. ](media/Essence-of-Calculus---3Blue1Brown-image75.png){width="5.0in" height="3.125in"}



![s(t) Displacement --- (t) Velocity dt ' ---(t) Acceleration c13s Jerk d 13 ](media/Essence-of-Calculus---3Blue1Brown-image76.png){width="5.0in" height="4.052083333333333in"}



11. **Taylor series**
    -   **Powerful tool for approximating functions**
    -   **Taking non-polynomial functions, and finding polynomials that approximate them near some input. Polynomials are much easier to deal with than other functions**

![cos(o) d(cos) (o) da; (o) (13 ( cos (o) ďX3 d4(cos (o) (1x4 sin (0) 0 cos(0) sin(()) cos(0) (1x4 24 24 1-2-3-4 24 • 24 ](media/Essence-of-Calculus---3Blue1Brown-image77.png){width="5.0in" height="3.125in"}



![CO + Cl T) 1 ---I--- C2 (a; + C (X T) 3 + C 4 (X Pa(x) Plugging in = is very nice. ](media/Essence-of-Calculus---3Blue1Brown-image78.png){width="5.0in" height="3.125in"}



![· 十 ---I 十 | 0 十 I?1tL10uÄ10d IOIÄ?L, | 十 | 0 十 I Ⅱ @)d Ⅱ 冖 0 一 0 IllS ](media/Essence-of-Calculus---3Blue1Brown-image79.png){width="5.0in" height="3.125in"}



![f(a) dr (1x2 CIT3 CIT4 df (x a f(a) 1! dr CIX 2 2! 27F ](media/Essence-of-Calculus---3Blue1Brown-image80.png){width="5.0in" height="3.125in"}



![d/dx d/dx d/dx d/dx d/dx 2! ](media/Essence-of-Calculus---3Blue1Brown-image81.png){width="5.0in" height="3.125in"}



![area 2 (1x2 a f(a) da; area 1 CP f 2 da;2 a; Heigllt (a; Base d2f area (1x2 a) ](media/Essence-of-Calculus---3Blue1Brown-image82.png){width="5.0in" height="3.125in"}



![Taylor series cos(x) 1 2 2! 4 6 6! Infinite sum series Be careful Taylor polynomial ](media/Essence-of-Calculus---3Blue1Brown-image83.png){width="5.0in" height="1.6041666666666667in"}



![Converges" to 27 81 243 ](media/Essence-of-Calculus---3Blue1Brown-image84.png){width="5.0in" height="1.8020833333333333in"}



![e +1 十 1 十 十 - 十 十 十 十 十 十 十 十 · 十 · 2 · 7182818 ](media/Essence-of-Calculus---3Blue1Brown-image85.png){width="5.0in" height="2.8229166666666665in"}



![111@) ---Ş ('E ı) ](media/Essence-of-Calculus---3Blue1Brown-image86.png){width="5.0in" height="3.125in"}



![In(x) (x 1) Diverges" Radius of convergence" ](media/Essence-of-Calculus---3Blue1Brown-image87.png){width="5.0in" height="3.125in"}


-   Lagrange error bounds
-   Convergence tests



12. **What they won't teach you in calculus**
    -   **Derivative is the slope of a graph**
    -   **Integral is a certain area under that graph**
    -   **Multivariable calculus**
    -   **Complex analysis**
    -   **Differential geometry**
    -   **Polymorphic Function**
    -   **Jacobian Determinant**

![](media/Essence-of-Calculus---3Blue1Brown-image88.png){width="5.0in" height="3.125in"}



**References**

[Essence of calculus](https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr)



![Derivative paradox 70 40 10 dt 3 4 5 ds dt 8 9 10 ](media/Essence-of-Calculus---3Blue1Brown-image89.jpg){width="5.0in" height="2.8020833333333335in"}

























































































