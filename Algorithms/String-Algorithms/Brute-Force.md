# Brute Force

Created: 2018-12-23 22:45:53 +0500

Modified: 2018-12-23 22:45:59 +0500

---

![Brute-force substring search Check for pattern starting at each text position. 7 B 8 R 9 10 A 1 B B o 1 2 3 4 5 6 2 o 1 o 1 o 4 2 A R B A 3 R B 1 3 3 5 5 10 entries in red are mismatches R B A R B entries in black match the text R A entries in gray a; for reference onl BRA return i when j is M ](media/Brute-Force-image1.png)

![Brute-force substring search: Java implementation Check for pattern starting at each text position. o A 1 2 A 3 4 A A 5 D 6 A 7 B c 8 R 9 A 10 c 4 5 public int int for 3 o 7 5 static int search (String pat, M = pat. length() ; N = txt. length() ; (int i = 0; i int j; for (j --- String txt) ](media/Brute-Force-image2.png)

![Brute-force substring search: worst case Brute-force algorithm can be slow if text and pattern are repc o 1 2 3 4 5 j 4 4 4 4 4 5 o A 1 A A 4 5 6 7 8 10 2 A A A A 3 A A A A A 4 A A A A A 5 A B A A A A 6 A B A A 7 A B A A 8 A B A 9 B B match ](media/Brute-Force-image3.png)

![Backup In many applications, we want to avoid backup in text strear • Treat input as stream of data. • Abstract model: standard input. "ATTACK AT DAWN" substring search machine found Brute-force algorithm needs backup for every mismatch. matched chars A mismatch B backup ](media/Brute-Force-image4.png)

![Brute-force substring search: alternate implementation Same sequence of char compares as previous implementatio • i points to end of sequence of already-matched chars in j stores # of already-matched chars (end of sequence in 7 5 public int int for j O A 3 stati c (i 5 D 6 A BACA A 7 B c 8 9 10 RAC String txt) int i, N = txt. length(); j, M = pat. length(); search(String pat, o; ](media/Brute-Force-image5.png)

![Algorithmic challenges in substring search Brute-force is not always good enough. Theoretical challenge. Linear-time guarantee. Practical challenge. Avoid backup in text stream. fundamen often no I Now is the time for all people to come to the aid of their party. Now is the time for al come to the aid of their party. Now is the time for many good people to come to the aid Now is the time for all good people to come to the aid of their party. Now is the time fi people to come to the aid of their party. Now is the time for all of the good people to their party. Now is the time for all good people to come to the aid of their party. Now each good person to come to the aid of their party. Now is the time for all good people of their party. Now is the time for all good Republicans to come to the aid of their par time for all good people to come to the aid of their party. Now is the time for many or come to the aid of their party. Now is the time for all good people to come to the aid o is the time for all good Democrats to come to the aid of their party. Now is the time fo come to the aid of their party. Now is the time for all good people to come to the aid o is the time for many good people to come to the aid of their party. Now is the time for come to the aid of their party. Now is the time for a lot of good people to come to the party. Now is the time for all of the good people to come to the aid of their party. Now ](media/Brute-Force-image6.png)






