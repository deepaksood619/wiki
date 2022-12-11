# Behavioral - Strategy

Created: 2018-04-05 00:18:31 +0500

Modified: 2018-08-20 15:55:15 +0500

---

![Duck Simulator class Duck (object) : init (self) : def # for simplicity this example class is stateless def quack (self): print "Quack! " def display (self) : print "Boring looking duck. " def take off (self): print "I'm running fast, flapping with my wings. " def fly to(self, destination) : print "Now flying to " def land( self) : % destination ](media/Behavioral---Strategy-image1.png){width="6.40625in" height="4.854166666666667in"}

![Duck Simulator (Il) class RedheadDuck( Duck) : def display (self) : print "Duck with a read head. " class RubberDuck(Duck) : def quack (self) : print " Squeak! " def display (self) : print " Small yellow rubber duck. " Oh, snap! The RubberDuck has same flying behavior duck, must override all the flying related methods. What if we want to introduce a DecoyDuck as well? ( ](media/Behavioral---Strategy-image2.png){width="6.40625in" height="4.854166666666667in"}

![Solution class FlyingBehavior(object) : def take off (self): print "I'm running fast, flapping with my wings. " def fly to(self, destination) : print "Now flying to % destination def land( self) : print " Slowing down, extending legs, touch down. " class Duck (object) : init (self) : def self. flying behavior = FlyingBehavior ( ) def take off (self): self. flying behavior. take off( ) def fly to(self, destination) : ](media/Behavioral---Strategy-image3.png){width="6.40625in" height="4.854166666666667in"}

![Solution (Il) class NonF1yingBehavior(F1yingBehavior) : def take off (self): print "It's not working def fly to(self, destination) : raise Exception( "I 'm not flying anywhere. " def land( self) : print "That won't be necessary. " class RubberDuck(Duck) : init (self) : def self . flying behavior def quack (self) : print " Squeak! " def display (self) : = NonF1yingBehavior( ) ](media/Behavioral---Strategy-image4.png){width="6.40625in" height="4.854166666666667in"}

![Analysis The strategy in this case is the flying behavior. If a poor duck breaks its wing we do: duck. flying behavior = NonF1yingBeh Flexibility to change the behaviour at runtime! Could have avoided code duplication with inheritan NonF1yingDuck). Could make sense, but is less Relying less on inheritance and more on compositio Strategy Pattern means: Encapsulate the different strategies in different clæ ](media/Behavioral---Strategy-image5.png){width="6.40625in" height="4.854166666666667in"}

![Strategy Pattern with Functions What if our behavior only needs a single method? Stop writing classes! TM Use a function! Standard examples: Sorting with a customized sort key: >>> sorted( [ " 12 " " 2 " ] , key---lambda x: '1', '12'] predicate function: Filtering with a >>> predicate = lambda x: int (x) > 2 " 12 " ] data --- >>> [x for x in data if predicate (x) ] int(x)) ](media/Behavioral---Strategy-image6.png){width="6.40625in" height="4.854166666666667in"}



A strategy is a behavioral design pattern that defines a family of similar algorithms and places each of them in its own class, after which the algorithms can be interchanged right during the execution of the program.



Pros:

- "hot" algorithm replacement on the fly;

- the algorithms' code and data isolation from other classes.

Cons:

- complicates the program due to the additional classes.





**References**

<https://py.checkio.org/blog/design-patterns-part-1/>






