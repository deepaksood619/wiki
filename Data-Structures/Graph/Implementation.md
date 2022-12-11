# Implementation

Created: 2018-04-04 15:28:54 +0500

Modified: 2018-04-04 15:28:58 +0500

---

**Python**

Use dictionary to represent a graph in Python

graph = { "a" : ["c"],
"b" : ["c", "e"],

"c" : ["a", "b", "d", "e"],
"d" : ["c"],
"e" : ["c", "b"],
"f" : []

}


