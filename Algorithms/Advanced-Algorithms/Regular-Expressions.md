# Regular Expressions

Created: 2018-04-16 22:50:32 +0500

Modified: 2018-12-23 22:47:32 +0500

---

A regular expression is a method for specifying a set of strings. Our topic for this lecture is the famous grep algorithm that determines whether a given text contains any substring from the set. We examine an efficient implementation that makes use of our digraph reachability implementation from Week 1.



Applications

1.  Pattern matching in Genomic data

2.  Syntax highlighting

3.  Scan for virus signatures

4.  Process natural language

5.  Specify a programming language

6.  Access information in digital libraries

7.  Search genome using PROSITE patterns

8.  Filter text (spam, NetNanny, Carnivore, malware)

9.  Validate data-entry fields (dates, email, URL, credit card)



Parse text files
-   Compile a java program
-   Crawl and index the Web
-   Read in data stored in ad hoc input file format
-   Create Java documentation from Javadoc comments



![Regular expressions regular expression is a notation to specify a set of strings. operation concatenation or closure order 3 4 2 example RE AABAAB AA BAAB AB*A possibly infinite matches AABAAB BAAB ABBBBBBBBA ](media/Regular-Expressions-image1.png){width="6.40625in" height="4.947916666666667in"}

![Regular expression shortcuts Additional operations are often added for convenience. operation wildcard character class at least 1 exactly k example RE .U.U.U. [A-Za-z] * matches CUMULUS JUGULUM word Capi tali zed ABCDE ABCBCDE 08540-1321 19072-5541 does SU TUMI can 111 166 ](media/Regular-Expressions-image2.png){width="6.40625in" height="4.947916666666667in"}

![Regular expression examples RE notation is surprisingly expressive. regular expression (substring search) (U. S. Social Security numbers) [a-z] [a-zl I com) (simplified email addresses) [$_A-Za-z] [$_A-Za-zO-9] * (Java identifiers) matches RASPBERRY CRISPBREAD 166-11-4433 wayne@pri nceton.edu rs@pri nceton.edu i dent3 PatternMatcher does n SUB SUBS 11-5! spam@ i dc ](media/Regular-Expressions-image3.png){width="6.40625in" height="4.947916666666667in"}



# RE and NFAs

![Duality between RES and DFAs RE. Concise way to describe a set of strings. DFA. Machine to recognize whether a given string is in a giv Kleene's theorem. • For any DFA, there exists a RE that describes the same se • For any RE, there exists a DFA that recognizes the same RE number of I's is a multiple of 3 DFA 1 2 ](media/Regular-Expressions-image4.png){width="6.40625in" height="4.947916666666667in"}

![Pattern matching implementation: Overview is the same as for KMP. • No backup in text input stream. • Linear-time guarantee. basic plan (first attem Underlying abstraction. Deterministic finite state automata ( Basic plan. [apply Kleene's theorem] • Build DFA from RE. • Simulate DFA with text as input. accep text DFA for pattern patter match ](media/Regular-Expressions-image5.png){width="6.40625in" height="4.947916666666667in"}

![Pattern matching implementation: Overview is similar to KMP. • No backup in text input stream. basic plan Quadratic-time guarantee (linear-time typical). Underlying abstraction. Nondeterministic finite state Basic plan. [apply Kleene's theorem] • Build NFA from RE. • Simulate NFA with text as input. accep text NFA for pattern patter match ](media/Regular-Expressions-image6.png){width="6.40625in" height="4.947916666666667in"}

![Nondeterministic finite-state automata Regular-expression-matching NFA. • RE enclosed in parentheses. • One state per RE character (start = 0, accept = M). • Red E-transition (change state, but don't scan text). • Black match transition (change state and scan to next to • Accept if any sequence of transitions ends in accept stau after scanning all text characters Nondeterminism. • One view: machine can guess the proper sequence of st • Another view: sequence is a proof that the machine acce 2 3 4 5 6 7 8 ](media/Regular-Expressions-image7.png){width="6.40625in" height="4.947916666666667in"}

![Nondeterministic finite-state automata Q. A. Is AAA ABD matched by NFA? Yes, because some sequence of legal transitions ends in match transition: scan to next input character and change state 2 3 4 5 €-transition: change state with no match 6 7 D accept state re and all text charact pattern fot 8 ](media/Regular-Expressions-image8.png){width="6.40625in" height="4.947916666666667in"}

![Nondeterministic finite-state automata Q. A. Is AAA ABD matched by NFA? Yes, because some sequence of legal transitions ends in [ even though some sequences end in wrong state or sté 012323 wrong guess if input is A A A ABD no way out of state 7 2 3 4 5 6 no way out of state 4 7 8 ](media/Regular-Expressions-image9.png){width="6.40625in" height="4.947916666666667in"}

![Nondeterministic finite-state automata Q. A. Is AAA C matched by NFA? No, because no sequence of legal transitions ends in stal [ but need to argue about all possible sequences ] c 2 2 3 4 5 6 7 of state 4 8 ](media/Regular-Expressions-image10.png){width="6.40625in" height="4.947916666666667in"}

![Nondeterminism Q. How to determine whether a string is matched by an autc DFA. Deterministic easy because exactly one applicable NFA. Nondeterministic can be several applicable transiti need to select the right one! Q. How to simulate NFA? A. Systematically consider all possible transition sequences. 2 3 4 5 6 7 8 ](media/Regular-Expressions-image11.png){width="6.40625in" height="4.947916666666667in"}



# NFA Simulation

![NFA representation State names. Integers from 0 to M. number of symbols in RE Match-transitions. Keep regular expression in array re[]. Store in a digraph G. t-transitions. 0---1, 1---2, 1---6, 2---3, 3---2, 3---4, 5---8, ---9, 8 10---11 2 3 4 5 6 7 8 ](media/Regular-Expressions-image12.png){width="6.40625in" height="4.947916666666667in"}

![NFA simulation Q. How to efficiently simulate an NFA? A. Maintain set of all possible states that NFA could be in after reading in the first i text characters. eoo« all states reachable after reading i symbols possible transitions on reading (i+l symbol c possible null transitions before reading next symbol all st after ret One step in simulating an NFA ](media/Regular-Expressions-image13.png){width="6.40625in" height="4.947916666666667in"}

![NFA simulation demo Goal. Check whether input matches pattern. 2 input E-transitions 3 A 4 B 5 D 6 7 match tn 8 ](media/Regular-Expressions-image14.png){width="6.40625in" height="4.947916666666667in"}

![NFA simulation demo When no more input characters: • Accept if any state reachable is an accept state. • Reject otherwise. 2 input 3 4 5 6 7 8 ](media/Regular-Expressions-image15.png){width="6.40625in" height="4.947916666666667in"}

![Digraph reachability Digraph reachability. Find all vertices reachable from a giver or set of vertices. recall Section 4.2 public class Di rectedDFS Di rectedDFS (Di graph Di rectedDFS (Di graph boolean marked (int v) G, G, int s) Iterabl e<lnteger> s) find find vel ](media/Regular-Expressions-image16.png){width="6.40625in" height="4.947916666666667in"}

![NFA simulation: public class NFA Java implementation private char [ ] re; private Digraph G; private int M; // match transitions // epsilon transition digraph // number of states public NFA(String regexp) = regexp.length(); M re = regexp. toCharArray() ; G = buildEpsi10nTransitionDigraph(); public boolean / * see next public Digraph recogni zes(String txt) slide * / bui dEpsi lonTransi ti onDi graph ( ) ](media/Regular-Expressions-image17.png){width="6.40625in" height="4.947916666666667in"}

![NFA simulation: Java implementation public boolean recognizes (String txt) Bag<lnteger> pc = new ; Di rectedDFS dfs = new Di rectedDFS(G, for (int v = 0; v < G.V(); v++) if (dfs . marked (v)) pc. add (v) ; for (int i = 0; i < txt. length(); i ++) Bag<lnteger> match = new ; for (int v : pc) if (v M) continue; if ( (re [v] ---= txt. charAt(i)) Il re [v] --- match. add (V+I) ; dfs = new Di rectedDFS(G, match) ; = new Bag<lnteger>() ; pc for (int v = 0; v < G.V(); v++) s s s s ](media/Regular-Expressions-image18.png){width="6.40625in" height="4.947916666666667in"}

![NFA simulation: analysis Proposition. Determining whether an N-character text is recc NFA corresponding to an M-character pattern takes time prol Nin the worst case. Pf. For each of the N text characters, we iterate through a se size no more than M and run DFS on the graph of E-transitior [The NFA construction we will consider ensures the number ( 2 3 4 5 6 7 8 ](media/Regular-Expressions-image19.png){width="6.40625in" height="4.947916666666667in"}



![What is the order of growth of the worst-case running time of our algorithm for determining whether an n-character text is recognized by the NFA corresponding to an m- character pattern? n m Correct For each character in the text, we need to perform a graph reachability computation on a digraph with M vertices and at most 3M edges. NEXT UP: ](media/Regular-Expressions-image20.png){width="5.84375in" height="1.4479166666666667in"}



# NFA Construction

![Building an NFA corresponding to an RE States. Include a state for each symbol in the RE, plus an acc ](media/Regular-Expressions-image21.png){width="6.40625in" height="4.947916666666667in"}

![Building an NFA corresponding to an RE Add match-transition edge from state corres Concatenation. to characters in the alphabet to next state. Alphabet. A B C D Metacharacters. ( ) 2 3 4 5 6 7 8 ](media/Regular-Expressions-image22.png){width="6.40625in" height="4.947916666666667in"}

![Building an NFA corresponding to an RE Add €-transition edge from parentheses to nex Parentheses. 2 3 4 5 6 7 8 ](media/Regular-Expressions-image23.png){width="6.40625in" height="4.947916666666667in"}

![Building an NFA corresponding to an RE Closure. Add three E-transition edges for each * operator. single-character closure closure expression ](media/Regular-Expressions-image24.png){width="6.40625in" height="4.947916666666667in"}

![Building an NFA corresponding to an RE Or. Add two t-transition edges for each I operator. or expression ](media/Regular-Expressions-image25.png){width="6.40625in" height="4.947916666666667in"}

![NFA construction: implementation Goal. Write a program to build the t-transition digraph. Challenges. Remember left parentheses to implement closur remember I to implement or. Solution. Maintain a stack. • ( symbol: push ( onto stack. I symbol: push I onto stack. • ) symbol: pop corresponding ( and any intervening l; add E-transition edges for closure/or. 2 3 4 5 6 7 8 ](media/Regular-Expressions-image26.png){width="6.40625in" height="4.947916666666667in"}

![NFA construction demo ](media/Regular-Expressions-image27.png){width="6.40625in" height="4.947916666666667in"}

![NFA construction demo ](media/Regular-Expressions-image28.png){width="6.40625in" height="4.947916666666667in"}

![NFA construction: Java implementation private Digraph buildEpsi10nTransitionDigraph() { Digraph G = new Digraph(M+1) ; Stack<lnteger> ops = new Stack<lnteger>() ; for (int i = 0; i < M; i ++) { int Ip if (re[i] --- - _IC_II - else if (re[i] int or = ops.pop(); if (re[or] --- Ip = ops.pop(); G.addEdgeQp, or+l) ; G.addEdge(or, i); else Ip = or; if (i < M-1 && re[i+l] --- G.addEdge(1p, i+l) ; G.addEdge(i+1, Ip) ; 'l') ops. push(i); lefl clo (ne ](media/Regular-Expressions-image29.png){width="6.40625in" height="4.947916666666667in"}

![NFA construction: analysis Proposition. Building the NFA corresponding to an M-characl time and space proportional to M. Pf. For each of the M characters in the RE, we add at most th t-transitions and execute at most two stack operations. 2 3 4 5 6 7 8 ](media/Regular-Expressions-image30.png){width="6.40625in" height="4.947916666666667in"}



# Regular Expression Applications

![Generalized regular expression print Grep. Take a RE as a command-line argument and print the from standard input having some substring that is matched public class GREP public static void main(String[] args) String re --- + args [0] + NFA nfa = new NFA(re) ; while (Stdln. hasNextLi ne()) String line = Stdln. readLine() ; if (nfa. recognizes(line)) StdOut. pri ntl i ne) ; ](media/Regular-Expressions-image31.png){width="6.40625in" height="4.947916666666667in"}

![Industrial-strength grep implementation To complete the implementation: • Add multiway or. Handle metacharacters. Support character classes. • Add capturing capabilities. Extend the closure operator. • Error checking and recovery. • Greedy vs. reluctant matching. Regular Expressions Cookbook Mas'erinA• Regular Express CYREUY' Ex. Which substring(s) should be matched by the RE ](media/Regular-Expressions-image32.png){width="6.40625in" height="4.947916666666667in"}

![Regular expressions in other languages Broadly applicable programmer's tool. • Originated in Unix in the 1970s. • Many languages support extended regular expressions. • Built into grep, awk, emacs, Perl, PHP, Python, JavaScript, print all lines containing NEWLINE % grep 'NEWLINE' occurs in any file with a . java ext % egrep 'A[qwertyui * $ ' words. txt I egrep typewri tten PERL. Practical Extraction and Report Language. replace all occ % perl -p -i -e 'slfromltolg i nput. txt ](media/Regular-Expressions-image33.png){width="6.40625in" height="4.947916666666667in"}

![Regular expressions in Java Validity checking. Does the input match the re? Java string library. Use input.matches(re) for basic RE matchl public class Validate public static void main(String[] args) String regexp = args ; String input = args[l] ; StdOut . pri ntl nput . matches (re)) ; % java Validate true " [$_A-Za-z] [$_A-Za-zO-9] i dent123 ](media/Regular-Expressions-image34.png){width="6.40625in" height="4.947916666666667in"}

![](media/Regular-Expressions-image35.png){width="6.40625in" height="4.947916666666667in"}

![Harvesting information RE pattern matching is implemented in Java's java. util . rego java. util . regexp.Matcher classes. import java. util . regex.Pattern; import java. util . regex.Matcher; public class Harvester public static void main(String[] args) String regexp = args[0] ; In in = new In(args[l]); String input = in. readA11 ; = Pattern. compile(r Pattern pattern Matcher matcher = pattern. matcher(i nput) ; while (matcher. fi nd()) ](media/Regular-Expressions-image36.png){width="6.40625in" height="4.947916666666667in"}

![Algorithmic complexity attacks Warning. Typical implementations do guarantee perfortx not j ava j ava j ava j ava j ava j ava Val i date Validate Val i date Validate Val i date Validate " (a I aa) *b" " (a I aa) *b" " (a I aa) *b" " (a I aa) *b" " (a I aa) *b" " (a I aa) *b" Unix grep, Java, Perl aaaaaaaaaaaaaaaaaaaaaaaaaaaaaac aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac 1 SpamAssassin regular expression. % java RE " spammer@x ](media/Regular-Expressions-image37.png){width="6.40625in" height="4.947916666666667in"}

![Not-so-regular expressions Back-references. •  1 notation matches subexpression that was matched eal • Supported by typical RE implementations. // beriberi couscous Some non-regular languages. • Strings of the form w w for some string w: beriberi. • Bitstrings with an equal number of Os and Is: 01110100. ](media/Regular-Expressions-image38.png){width="6.40625in" height="4.947916666666667in"}

![Context Abstract machines, languages, and nondeterminism. • Basis of the theory of computation. • Intensively studied since the 1930s. • Basis of programming languages. Compiler. • KMP A program that translates a program to machine ( DFA. RE --- NFA. Java language Java byte code. pattern KMP string grep RE ](media/Regular-Expressions-image39.png){width="6.40625in" height="4.947916666666667in"}

![Summary of pattern-matching algorithms Programmer. • Implement substring search via DFA simulation. • Implement RE pattern matching via NFA simulation. Theoretician. • RE is a compact description of a set of strings. • NFA is an abstract machine equivalent in power to RE. • DFAs, NFAs, and RES have limitations. Practical application of core computer science principle You. Example of essential paradigm in computer science. ](media/Regular-Expressions-image40.png){width="6.40625in" height="4.947916666666667in"}



![What is the order of growth of the worst-case running time of the Java function call input.matches(re) as a function of the length n of the input text and the length m of the regular expression pattern? 2 mn exponential in N Correct While our implementation has a worst-case running time of m n, typically commercial implementations use backtracking and can take exponential time on pathological inputs. Consider yourself warned. ](media/Regular-Expressions-image41.png){width="5.895833333333333in" height="1.5625in"}









































