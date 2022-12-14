# Comparable Interface

Created: 2018-02-01 16:19:54 +0500

Modified: 2018-02-14 20:22:31 +0500

---

![Implementing the Comparable interface Date data type. Simplified version of java.util . Date. public class Date impl ements Comparabl private final int month, public Date(int m, int d, month = m day year day, year; int Y) only compare dates to other dates public int compareTo(Date that) if (this. year if (this. year if (this.month if (this.month if (this. day if (this. day return 0; > > > that. year ) that. year ) that . month) that . month) that. day ) that. day ) return -1; return return -1; return return -1; return ](media/Comparable-Interface-image1.png)



Goal - Sort any type of data

Que - How can sort() know how to compare data of type Double, String, and java.io.File without any information about the type of an item's key?

Sol - **Callback = reference to executable code**
-   Client passes array of objects to sort() function.
-   The sort() function calls back object's compareTo() method as needed.



