# Page Rank

Created: 2019-04-21 13:04:45 +0500

Modified: 2020-12-27 22:23:44 +0500

---

<https://towardsdatascience.com/pagerank-algorithm-fully-explained-dc794184b4af>



**PageRank Algorithm in Big Data**

![](media/Big-Data_Page-Rank-image1.png)



**What is PageRank?**
-   Why is Page Importance Rating important?
    -   New challenges for information retrieval on the World Wide Web
    -   Huge number of web pages: 150 million by 1998, 1000 billion by 2008
    -   Diversity of web pages: different topics, different quality, etc.
-   What is PageRank?
    -   A method for rating the importance of web pages objectively and mechanically using the link structure of the web.
    -   History:
        -   PageRank was developed by Larry Page and Sergey Brin
        -   It was part of a research project about a new kind of search engine. That project started in 1995 and led to a functional prototype in 1998



![PageRank of E denotes by PF Give pages ran s (scores) based on links Links from many pages Links from a high-rank page high ](media/Big-Data_Page-Rank-image2.png)

![PageRank of E denotes by PF Stationary distribution = P ](media/Big-Data_Page-Rank-image3.png)

![Example ](media/Big-Data_Page-Rank-image4.png)

![Example PR(A) = 0,25 40) PR(B) = 0,25 PR(C) = 0,25 ](media/Big-Data_Page-Rank-image5.png)

![Example 0.25€1 0.25*1 0.25*1 PR(i) = xo(i) xt.l(i) ](media/Big-Data_Page-Rank-image6.png)

![Example ](media/Big-Data_Page-Rank-image7.png)

![Example ](media/Big-Data_Page-Rank-image8.png)

![Example 1/2 1 1/3 1 г new PR хо(Ј) +xo(D)• PR(B 4.458 ](media/Big-Data_Page-Rank-image9.png)

![Page Rank L(v) - the number of vertex v outbound li r (v) - the set containing all pages linking to PRC v) ver(u) ](media/Big-Data_Page-Rank-image10.png)

![Stationary Distribution Theorem asserting that if a stochastic graph satisfies two co 1. there is a path from every node to every 2. the greatest common divider of all the cycle then there is a unique stationary probability distrib( ](media/Big-Data_Page-Rank-image11.png)

![Page Rank PR(B) PR(A) = / PR(B) PR(A) PR(D) PR(C) LCC) PR(D) ](media/Big-Data_Page-Rank-image12.png)

![Page Rank PR(pj) I---d PR(p,) L(pj) pjU(Pi) where p„P2 ...,PN are the pages under consider ftp,) is the set of pages that link p vr L(p) is the number of outbound links on page and N is the total number of pages ](media/Big-Data_Page-Rank-image13.png)

![Page Rank At t= O. an initial probability distribution is assumed. usually PR(pj; t) At each time step ) L(PJ) The computation ends: 1. After fixed number of iterations 2. When convergence is assumed / ](media/Big-Data_Page-Rank-image14.png)



![MapReduce for PageRank class Mapper method Map (id n, vertex N) e N. PAYPANK/ IN.ADJACENCYLIST I EMIT (id n, vertex N) U/ for all nodeid m in N. ADJACENCYLIST do EMIT (id m, value p) class Reducer method REDUCE (id m, [PI, p2, M k- null, s 0 for all p in [PI, /P2, ... ] do if ISVERTEX(pb then ](media/Big-Data_Page-Rank-image15.png)

![Problems The entire state of the graph is shuffled iteration We only need to shuffle the new rank cont not the graph structure Further, we have to control the iteration MapReduce ](media/Big-Data_Page-Rank-image16.png)

![Pregel • Originally from Google Open source implementations Apache Giraph, Standard GPS, Jpregel, Hama Batch algorithms on large graphs while any vertex is active or max iterations not reach for each vertex: this loop is run in parallel process messages from neighbors from previous it ](media/Big-Data_Page-Rank-image17.png)

![PageRank in Pregel class PageRankVertex: public Vertex<double, void, double>{ public: virtual void Compute(Messagelterator* msgs) { if (superstep() 1) {v/ double sum = 0; for (; !msgs->Done(); sum += msgs->Value(); *MutableValue() = 0.15 / NumVertices() + 0.85 * if (superstep() < 30) { const int64 n = GetOutEdgelterator().size(); SendMessageToAllNeighbors(GetValue() / n); } else { VoteT0Halt()• ](media/Big-Data_Page-Rank-image18.png)

![Example 0.2 0.2 0.2 0.2 ](media/Big-Data_Page-Rank-image19.png)

![Example 0.2 0.066 0.2 0.2 이2 0.066 0.2 0.066 0.2 ](media/Big-Data_Page-Rank-image20.png)

![Example 0.03 0.1 0.172 0.2 0.34 0.2 0.426 ](media/Big-Data_Page-Rank-image21.png)

![Example 0015 73 0015 001 0.172 0.172 0.34 0.01 0.34 0.01 0.426 ](media/Big-Data_Page-Rank-image22.png)

![Example 0.015 0.03 0015 0.0513 0.172 0.197 0.34 0.69 001 0.03 0.01 001 ](media/Big-Data_Page-Rank-image23.png)

![Example 0.015 0.03 о 015 0.0513 0.0513 0.197 о. 197 0.69 001 0.01 0.01 ](media/Big-Data_Page-Rank-image24.png)

![Example 0.03 о 015 0.0513 о 0513 0,095 о, 197 0.794 0.02 0.01 0.01 ](media/Big-Data_Page-Rank-image25.png)

![Example 0.03 0.0513 0.0. 0.095 0.794 ](media/Big-Data_Page-Rank-image26.png)

**Conclusion**
-   Graph-structured data are increasingly common in data science contexts due to their ubiquity in modeling the communication between entities: people (social networks), computers (Internet communication), cities and countries (transportation networks), or corporations (financial transactions).


























