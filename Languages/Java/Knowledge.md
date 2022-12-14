# Knowledge

Created: 2018-07-18 19:38:31 +0500

Modified: 2018-07-18 19:45:25 +0500

---
-   Parent class can hold child class reference but not vice-versa

Person person = new Docter("deepak", 1, "medicine");



// Docter docter = new Person("deepak", 1);

This cannot be done

error: incompatible types: Person cannot be converted to Docter
-   Parent class cannot be typecasted to Child class

Person person = new Person("pooja", 2);

Docter docter = (Docter) person;

// java.lang.ClassCastException: Person cannot be cast to Docter
-   
