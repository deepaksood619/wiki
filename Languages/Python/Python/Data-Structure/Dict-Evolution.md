# Dict Evolution

Created: 2018-05-04 18:53:22 +0500

Modified: 2020-01-07 12:42:48 +0500

---

Python2.7 - Scambled(dict_size = 280)

Python3.5 - Randomized (Key sharing dictionaries, dict_size = 196)

Python3.6 - Ordered (Compact dictionaries, dict_size = 112)



1.  Databases

2.  Association Lists

3.  Separate Chaining

    a.  separate_chaining(2)

    b.  separate_chaining(4)

    c.  separate_chaining(8) (remove collisions, but wasted space due to over allocations for lists to grow)

4.  Open Addressing

Can have catatrophic collision wherever every item hash to same value

5.  Multiple Hashing

6.  Key-Sharing Dict

7.  Compact Dict

    a.  Use a list to store the lookups

    b.  This list can be read in very less cache-line

    c.  Use a dirty bit for lookup in the dictionary



**References**

<https://www.youtube.com/watch?v=p33CVV29OG8>

<https://www.youtube.com/watch?v=npw4s1QTmPg>
