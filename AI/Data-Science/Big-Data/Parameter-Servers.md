# Parameter Servers

Created: 2019-04-21 13:04:38 +0500

Modified: 2021-09-28 22:28:30 +0500

---

**Parameter Servers and Stale Synchronous Parallel Model**



**ML Systems**

![Scalable Machine Learning Algorithms Abstractions Scalable Systems ](media/Big-Data_Parameter-Servers-image1.jpeg)

![Land Systems Dataflow Systems 00000 NälVe Bayes, Rocchio PIG, Graph Systems Graph Algorithms, Graphical Models Vertex-Programs Sh [N ](media/Big-Data_Parameter-Servers-image2.png)

![ML Land: Systems Dataflow Systems Graph Systems o_o_o_o_o Simple case: Parameters of the ML system are stored in a distributed hash table that is accessible thru the network Param Servers used in Google, Yahoo Academic work by Smola, Xing Sh [N ](media/Big-Data_Parameter-Servers-image3.png)



**Parameter Server**
-   A machine learning framework
-   Distributes a model over multiple machines
-   Offers two operations:
    -   Pull: query parts of the model
    -   Push: update parts of the model
-   Machine learning update equation

W~i~ <- W~i~ + Δ
-   (Stochastic) gradient descent
-   Collapsed Gibbs sampling for topic modeling
-   Aggregate push updates via addition (+)



![Spark with Parameter Server Spar Spa rk Worker S C)river Spark Worker Spa Worker Spa r k Worker Pa rarneter Server Spar V Glint Pararneter Server Para rneter Server Spark Driver Para Server Pararneter Server Pa ra roeter ](media/Big-Data_Parameter-Servers-image4.png)

![Parameter Server (PS) Training state stored in PS shards, as updates PS Shard Client ps Shard Client PS Shard Cliff ](media/Big-Data_Parameter-Servers-image5.png)

![Parameter Servers Are Flexib 10 10 PetuumLDA v2 Li htLDA) •---PetuumLDA (VI) Peacock (LOA) Petuum (MF) d/ etuu (CNN) Microsoft Li & Smol (LDA) COTS* (CNN) L DA - CNN -l DNN - *GPI-J c spark (M Adam (CNN) 8 Gra ahooLDA LDA)  phLab Goo le (CNN) O--- Google PLDA (LOA) ](media/Big-Data_Parameter-Servers-image6.png)

![Parameter Server (PS) Worker Machines Model parameters are stored on PS machines and ](media/Big-Data_Parameter-Servers-image7.png)

![Parameter Server (PS) Worker Machines Extensions: push/pull interface to send/receive mc ](media/Big-Data_Parameter-Servers-image8.png)

![Data parallel learning with Parameter Server .1 Parameter Server Jil ](media/Big-Data_Parameter-Servers-image9.png)

![Data parallel learning with I Parameter Server .1 Parameter Server I.Different parts of the model on different 2.Workers retrieve the part needed as nee ](media/Big-Data_Parameter-Servers-image10.png)

![1. 2. Abstraction used for Key-Value API for workers: get(key) -5 value i add(key, e ta i' ](media/Big-Data_Parameter-Servers-image11.png)

![Iteration in Map-Reduce Initial Model w(0) Training Data Map Learned Reduce Model ](media/Big-Data_Parameter-Servers-image12.png)

![Cost of Iteration in Map-Red Model Training Data k' Read 2 Map Learned Reduce Model Repeatedly load same dz ](media/Big-Data_Parameter-Servers-image13.png)

![Cost of Iteration in Map-Red Initial Model Map Learned Reduce Model Redundantly save output between stages ](media/Big-Data_Parameter-Servers-image14.png)



**Parameter Servers**

**Stale Synchronous Parallel Model**

![Parameter Server (PS) Worker Machines Model parameters are stored on PS machines and ](media/Big-Data_Parameter-Servers-image15.png)

![Iterative ML Algorithms c2, Y2 Data Vfn(w) Worker Model Parametc ](media/Big-Data_Parameter-Servers-image16.png)

![Data Model Programming Abstraction Map-Reduce vs. Independent Records Map & Reduce Parat Key (Distr ](media/Big-Data_Parameter-Servers-image17.png)

![The Problem: Networks Are Server Worker Machines Machines ](media/Big-Data_Parameter-Servers-image18.png)

![Solution 1: Cache Synchroni Data Data Server Data Data Ill Data ](media/Big-Data_Parameter-Servers-image19.png)

![Parameter Cache Synchroniz Sparse Changes to Model Data Data Server Data Data Ill Data ](media/Big-Data_Parameter-Servers-image20.png)

![Parameter Cache Synchroniz Data Data Server Data Data Ill Data ](media/Big-Data_Parameter-Servers-image21.png)

![Solution 2: Asynchronous Machine 1 Machine 2 Machine 3 Compute Waste Iteration Communicate Iteration Iteration Waste ](media/Big-Data_Parameter-Servers-image22.png)

![Asynchronous Execution Parameter Server (Logical) uuwwnuw Machine Machine 2 Iterat ti Itera I ration Iteration ](media/Big-Data_Parameter-Servers-image23.png)



**Asynchronous Execution**
-   Async lacks theoretical guarantee as distributed environment can have arbitrary delays from networks & stragglers



![RECAP f is loss function, x is parameters 1. 2. 3. Take a gradient step: x' = xt--- gt If you've restricted the parameters to a subspace X (e.g., must be positive, find the closest thing in X to x': xt+l= argminx dist(x---x' ) But.... you might be using a Ustale" g (from steps ago) Igorithm 1 Delayed Stochastic Gradient Desce Input: Feasible space X C IV, annealing sche Initialization: set c = 0 and compute c for t = T + 1 to T + T do Obtain ft and incur loss ft(ct) Compute gt Vft@t) ggt=v. ](media/Big-Data_Parameter-Servers-image24.png)

![Data Model Programming Abstraction Map-Reduce vs. Independent Records Map & Reduce Para Key (Distr ](media/Big-Data_Parameter-Servers-image25.png)

![Parameter Server Stale synchronous parallel (SSP): Global clock time t Parameters workers "get" can be out of but can't be older than t-T Tcontrols 'Staleness" aka stale synchronous parallel (SSP) ](media/Big-Data_Parameter-Servers-image26.png)

![Stale Synchronous Parallel (S Staleness bound s = 3 worker 1 worker 2 worker 3 worker 4 worker 2 bloc worker 1 reac update: visible incompli to worke visible L.....................J worker Interoolate between BSP and Asvnc and subsume ](media/Big-Data_Parameter-Servers-image27.png)

![Seconds O 8 8 8 8 ](media/Big-Data_Parameter-Servers-image28.png)

![Log-Likelihood ](media/Big-Data_Parameter-Servers-image29.png)



<https://medium.com/coinmonks/parameter-server-for-distributed-machine-learning-fd79d99f84c3>





























