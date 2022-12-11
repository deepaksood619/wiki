# Behavioral - Iterator

Created: 2018-04-05 00:15:55 +0500

Modified: 2018-08-20 15:55:00 +0500

---

![Problem How would you iterate over elements from a collection? A first (inept) attempt (imitating C code): >>> my collection 'b', 'c'] >>> for i in range (len(my collection) ) : print my _ collection [i] , But what if my collection does not support indexir >>> my collection = >>> for i in range ( len (my _ collection) ) : print my collection [i], # What will happen here? Should we have to care about this when all we want is it ](media/Behavioral---Iterator-image1.png){width="6.40625in" height="4.854166666666667in"}

![Description What we want: Standard interface for collections that we can iterat (we call these iterab/es), Iteration state (e.g., the position counter) should bc the container and should be encapsulated. Use an which keeps track of an iteration and knows what t is. What to implement: The iterator has a next( ) method that returns the ne collection. When all items have been returned it raises a ](media/Behavioral---Iterator-image2.png){width="6.40625in" height="4.854166666666667in"}

![Example class Mylterable(object) : init (self, items) : def ' items List of items. self . items = items iter (self) : def return My Iterator ( self ) class My Iterator( object) : init ( self, my iterable): def self. my iterable = my iterable self . _ position def next (self) : if self ._position >= len(self. my iterable. items) raise Stoplteration( ) = self. my iterable. items [self ._position] value self . _ position += 1 ](media/Behavioral---Iterator-image3.png){width="6.40625in" height="4.854166666666667in"}

![Example (Il) Lets perform the iteration manually using this interface: iterable = Mylterable( iterator = iter( iterable) # or use iterable. iter ( ) try : while True: i t em = iterator. next( ) print item except Stoplteration: pass print " Iteration done. " ..or just use the Python for-loop: for item in iterable: print item print " Iteration done. " ](media/Behavioral---Iterator-image4.png){width="6.40625in" height="4.854166666666667in"}

![Summary Whenever you use a for-loop in Python you use the Iterator Pattern! Implement the iterable interface in your containers. Accept an iterable (or iterator) in your consumers. The iterator has a single responsibility, while the ite have to keep track of the iteration (which isn't its is semantically different for i Note that iter iterators (duck typing fail!). Normally one uses generator functions with yield writing iterator classes. ](media/Behavioral---Iterator-image5.png){width="6.40625in" height="4.854166666666667in"}





