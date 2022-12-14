# MapReduce Examples

Created: 2019-03-08 22:20:46 +0500

Modified: 2020-04-11 15:21:28 +0500

---

![Example: 1 Word Count using map(key, value): // key: document name; value: text of document for each word w in value: emit(w, 1) reduce(key, value // key: a wor , values: result = O an iterator over counts ](../../../media/Technologies-Apache-MapReduce-Examples-image1.png)

![Count Illustrated map(key=url, val=contents): For each word w in contents, emit reduce(key=word, values-unic Sum all "l"s in values list Emit result ord, sum)" ooc- see bob run see spot throw see bob run see 1 1 1 ](../../../media/Technologies-Apache-MapReduce-Examples-image2.png)

![Example 2: Counting words of differen • The map function takes a value and outpu pairs. For instance, if we define a map function string and outputs the length of the word as the word itself as the value then map(steve) would return 5:steve and map(savannah) would return 8:savannah. ](../../../media/Technologies-Apache-MapReduce-Examples-image3.png)

![Example 2: Counting words of differ Before we get to the reduce function, the framework groups all of the values together by map functions output the following key:value p 3 : the 3 : and 3 : you 4 : then 4 : what 4 : when 5 : steve They get grouped 3 : [the, and, you] 4 : [then, what, wh 5 : [Steve, where] ](../../../media/Technologies-Apache-MapReduce-Examples-image4.png)

![Example 2: Counting words of differen Each of these lines would then be passed as to the reduce function, which accepts a key values. • In this instance, we might be trying to figure c words of certain lengths exist, so our reduce just count the number of items in the list ar key with the size of the list, like: ](../../../media/Technologies-Apache-MapReduce-Examples-image5.png)

![Example 2: Counting words of differen The reductions can also be done in parallel, al a huge advantage. We can then look at these and see that there were only two words of let corpus, etc... The most common example of mapreduce is the number of times words occur in a corpus ](../../../media/Technologies-Apache-MapReduce-Examples-image6.png)

![Example 3: Word Length Hisl Abridged Declaration of Independence A Declaration By the Representatives of the United States of America, in General Congre course of human events it becomes necessary for a people to advance from that subord hitherto remained, and to assume among powers of the earth the equal and independer of nature and of nature's god entitle them, a decent respect to the opinions of mankinc declare the causes which impel them to the change. We hold these truths to be self created equal and independent; that from that equal creation they derive rights inhere which are the preservation of life, and liberty, and the pursuit of happiness; that to secur are instituted among men, deriving their just power from the consent of the governed; government shall become destructive of these ends, it is the right of the people to al institute new government, laying it's foundation on such principles and organizing it's them shall seem most likely to effect their safety and happiness. Prudence indeed will die established should not be changed for light and transient causes: and accordingly all e mankind are more disposed to suffer while evils are sufferable, than to right themselves which they are accustomed. But when a long train of abuses and usurpations, begun at pursuing invariably the same object, evinces a design to reduce them to arbitrary powe duty, to throw off such government and to provide new guards for future security. sufferings of the colonies; and such is now the necessity which constrains them to expur government. the history of his present majesty is a history of unremitting injuries and us! ](../../../media/Technologies-Apache-MapReduce-Examples-image7.png)

![Example 3: Word Length Hisl Abridged Declaration oj Declaration Representatives ble on subordination hitherto dent ation"rhich entitle lare causes which - chm • Big Yellow 10+ etters • Me$um Re = 5..9 letters • Sm'll = 2..4 letters Ile er • Ti y Pin ton vemments vern self-evident: instituted diev« ovemr inci les orgamz governments established Ed accordin experience h sufferable. accustomed theme distinguished invariablv their n ](../../../media/Technologies-Apache-MapReduce-Examples-image8.png)

![Example 3: Word Length Hisl Split the document into chunks and process each chunk on a different computer Chunk 1 Abridged Declaration of Ind A Declaration By the Representatives of the United States of Congress Assembled When in the course of human events it becomes necessary for that subordination in which they have hitherto remained, and t the eatth the equal and independent station to which the laws c god entitle them, a decent respect to the opinions of manhnd declare the causes which impel them to the change. We hold these tmt1E to be self-evident; that all men are create. that from that equal creation they derive rights inhetent and the preset-cation of life, and libetty, and the putsuit of happtne ends, govemments are instituted among men, deriving their ju of the govemed; that whenever any fum of government shall ends, it is the right of the people to alter or to abolish it, and laying it's foundation on such principles and organizng it's po them shall seem most likely to effect their safety and happines dictate that governments long established should not be chang causes: and accordingly all experience hath shewn that suffer while evils are sufferable, than to right themselves by al which they are accustomed But when a long train of abuses a: distinguished period, and pursuing invanably the same object, them to aåitrary power, it is their right, it is their duty, to tlu•o to provide new for future security. Such has been the p ](../../../media/Technologies-Apache-MapReduce-Examples-image9.png)

![Example 3: Word Length Hisl Map Task 1 (204 words) Ablidoed Declaration of Inde endence Declaration subordination assume among power t ation "which nature entitle inions a re lare cause chan in den government beco destructive "institute governm• ci les organmng power Ying foundation governments established accordin ly expenence hil sufferable. accustomed distinguished mvariablv •arbi 60 prou themselves abolishing u attons- government suffermgs ](../../../media/Technologies-Apache-MapReduce-Examples-image10.png)

![](../../../media/Technologies-Apache-MapReduce-Examples-image11.png)

![Example 4: Build an Inverted Input: weetl, ("1 love pancakes for breakfast' tweet2, tweet3, ("What shov I eat for breakfast?") tweet4, ("1 love to eat") Desired out "pancakes", breakfast , "love", (twe ](../../../media/Technologies-Apache-MapReduce-Examples-image12.png)

![Example 5: Relational Join Assigned De artmer Employee Name Sue Tony 999999999 777777777 Em SS 999999999 777777777 77777777 Depb Acco Sales Mark Emplyee Assigned Departments Name Sue SSN EmpSSN 999999999 999999999 DepName Accounts ](../../../media/Technologies-Apache-MapReduce-Examples-image13.png)

![Example 5: Relational Join: Before Map Employee Name Sue Tony SSN 999999999 777777777 Assigned Departments Key idea: Lump all the tupl together into one dataset Employee, Sue, 993 Employee, Ton , 77777 Departmgnt, 9999999 Department, 77 77 Department, 77777777 EmpSSN 999999999 777777777 DepName Accounts Sales ](../../../media/Technologies-Apache-MapReduce-Examples-image14.png)

![Example 5: Relational Join: Map Phase Employee, sue, 999999999 Employee, Tony, 777777777 Department, 999999999, Accounts Department, 777777777, Sales Depanment, 777777777, Marketing key key key key key -999999999, -777777777, ---999999999, -777777777, -777777777, value: value: value: value: (Employee, sue, 99999993 (Employee, Tony, 77777777 999999999, A (Department, 777777777, S (Department, 777777777, ](../../../media/Technologies-Apache-MapReduce-Examples-image15.png)

![Example 5: Relational Join: Reduce Pha key=999999999, S 99999999 , (Departme t, 999999999, Accounts key-777777777, valu Sue, 999999999, 9999999 (Employee, o 777777 Department, 7777 77 ales Department, 7777 777, ](../../../media/Technologies-Apache-MapReduce-Examples-image16.png)

![Example 5: Relational Join in MapRedu( Orde orderi I, aaa, d 1 2, aaa, d2 3, bbb, d3 account, d te) Linelt orderid, 1, 10, 1 1, 20, 3 2, 10, 5 2, 50, 100 3, 20, 1 emid, qty Map tagged with relation name Order aaa, dl 2, aaa, d2 3, bbb, d3 Line 1, 10, 1 1, 20, 3 2, 10, 5 -y 6. "Order", (1 2 : "Order", (2,aaa,d2) 3 : "Order", (3,bbb,d3) "Line", (1, 10, 1) 1 "Line", (1, 20, 3) "Line", (2, 10, 5) Reducer for k "Order', ( "Line", (1, "Line", (1, (1, aaa, d ](../../../media/Technologies-Apache-MapReduce-Examples-image17.png)

![](../../../media/Technologies-Apache-MapReduce-Examples-image18.png)

![Example 6: Finding Friends Assume the friends are stored as Person->[List of friends list is then: BCD B->ACDE C->ABDE D->ABCE BCD ](../../../media/Technologies-Apache-MapReduce-Examples-image19.png)

![Example 6: Finding Friends For тар(А -> В С о) : (А В) ВС D (А С) ВС D For map(V 9 5) : (В D) ->ACDE С.- е...Э (Note that А comes before В ](../../../media/Technologies-Apache-MapReduce-Examples-image20.png)

![Example 6: Finding Friends For map(c ABD E) : (A C) ->ABDE (B C) ->ABDE (C D) ->ABDE (C E) ->ABDE For map(D AB C E) : (A D) BCE (B D) ->ABCE And finally for map(E - (B E) BCD (C E) BCD (D E) BCD ](../../../media/Technologies-Apache-MapReduce-Examples-image21.png)

![Example 6: Finding Friends Before we send these key-value pairs to the rt group them by their keys and get: (В D) (А В С Е) (ACD Е) ](../../../media/Technologies-Apache-MapReduce-Examples-image22.png)

![Example 6: Finding Friends Each line will be passed as an argument to a re The reduce function will simply intersect the I and output the same key with the result of the For example, reduce((A B) -> (AO E) (B O) will output (A') : (C D) and means that friends A and B have C and D friends. ](../../../media/Technologies-Apache-MapReduce-Examples-image23.png)

![Example 6: Finding Friends The result after reduction is: Now when D visits B we can quickly look up see that they have thn in common, (A C E). ](../../../media/Technologies-Apache-MapReduce-Examples-image24.png)

## MapReduce: Simplified Data Processing on Large Clusters

<https://ai.google/research/pubs/pub62>
