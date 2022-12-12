# Structural - Decorator

Created: 2018-04-05 00:17:55 +0500

Modified: 2021-08-29 13:15:15 +0500

---

In[object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming), the**decorator pattern**is a[design pattern](https://en.wikipedia.org/wiki/Design_pattern_(computer_science))that allows behavior to be added to an individual[object](https://en.wikipedia.org/wiki/Object_(computer_science)), either statically or dynamically, without affecting the behavior of other objects from the same[class](https://en.wikipedia.org/wiki/Class_(computer_science)).The decorator pattern is often useful for adhering to the[Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle), as it allows functionality to be divided between classes with unique areas of concern.The decorator pattern is structurally nearly identical to the[chain of responsibility pattern](https://en.wikipedia.org/wiki/Chain_of_responsibility_pattern), the difference being that in a chain of responsibility, exactly one of the classes handles the request, while for the decorator, all classes handle the request.
**Starbuzz Coffee**

![class Beverage (object) : # imagine some attributes like temperature, def self) : return " beverage " def get _ cost (self) : return O .00 class Coffee( Beverage) : def self) : " coffee " return def : return 3.00 class Tee (Beverage) : def self) : return " tee " def get _ cost (self) : return 2.50 amount left, . ](media/Structural---Decorator-image1.jpg){width="5.0in" height="3.78125in"}
**Adding Ingredients: First Try**

![class Beverage (object) : init (self, with milk, with sugar): def self. with milk = with milk self .with_sugar = with _ sugar def self) : description = str( self . _ get _ default description( ) ) if self. with milk: description += if self. with _ sugar: description return description with milk" with _ sugar " def _get : return "beverage " # same for get _ cost... class Coffee( Beverage) : def _get_default description( self) : return "normal coffee " # and so on. ](media/Structural---Decorator-image2.jpg){width="5.0in" height="3.9166666666666665in"}-   But what if we want more ingredients? Open-closed principle?
**Adding Ingredients: Second Try**

![class CoffeeWithMiIk(Coffee) : def : return ( super ( CoffeeWithMi1k, with milk" ) def get _ cost (self): self ) . ) return super (CoffeeWithMiIk, self) . get _ cost ( ) + 0.30 class CoffeeWithMi1kAndSugar(CoffeeWithMi1k) : # And so on, what a mess! ](media/Structural---Decorator-image3.jpg){width="5.0in" height="1.9479166666666667in"}
What we want:
-   Adding a new ingredient like soy milk should not modify the original beverage classes
-   Adding new ingredients should be simple and work automatically across all beverages
**Solution: Decorator Pattern**

![class BeverageDecorator(Beverage) : def init (self, beverage) : init self). super ( BeverageDecorator , _o self. beverage = beverage class Milk (BeverageDecorator) : def self) : return self . beverage . ) + def get _ cost (self) : return self . beverage + 0.30 coffee_with_milk = Milk(Coffee()) with milk " ](media/Structural---Decorator-image4.jpg){width="5.0in" height="2.1979166666666665in"}
-   Composition solves the problem
-   Note: Do not confuse this with Python function decorators

