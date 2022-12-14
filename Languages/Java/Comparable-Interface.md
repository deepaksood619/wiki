# Comparable Interface

Created: 2018-02-01 16:19:54 +0500

Modified: 2018-02-14 20:22:31 +0500

---

![image](media/Comparable-Interface-image1.png)

Goal - Sort any type of data

Que - How can sort() know how to compare data of type Double, String, and java.io.File without any information about the type of an item's key?

Sol - **Callback = reference to executable code**
-   Client passes array of objects to sort() function.
-   The sort() function calls back object's compareTo() method as needed.
