# TopTal

Created: 2017-11-19 17:57:20 +0500

Modified: 2020-01-17 19:39:00 +0500

---

Algorithm and Coding Round (Online - Codility)



![Task 1 Task 2 Task 3 6 Bob the Adventurer is one step away from solving the mystery of an ancient Mayan tomb. He just approched the secret chamber where the secret Mayan scriptures are locked in a chest. There are N ancient statues in the room. After long thought, Bob figured out that in order to open the treasure chest he needs to stand in the middle of the room and hit every statue with a laser ray at the same time. Bob is a highly experienced adventurer, so setting multiple laser rays at the same time is not a problem for him. Moreover, every ray that he creates is perfectly straight and never changes direction at all. The middle of the room, where Bob is standing, has coordinates (0, 0). Every statue is located at some point with coordinates (x, y). Each statue is made of pure glass, so that if any ray hits it, it does not stop, but goes through the statue and continues beyond in the same, unchanged direction. Bob wonders how he can hit every ancient statue in the room using the fewest rays possible. Assume that the following declarations are given: class Point2D { public int x; public int y; Write a function class Solution { public int solution (Point2D[] A); that, given an array of points A, representing the locations of the statues, returns the minimal number of rays that Bob must set in order to hit every statue in the room. Enr ovnrnnlo rliuon nn nrrnu A ](media/TopTal-image1.png){width="5.0in" height="5.895833333333333in"}



![Task 1 For example, given an array A Task 2 ALO]. x All]. x 1 Task 3 AL 2]. x 2 AL 3]. x 2 your function should return 4. 2 4 2 ( statue ( statue ( statue ( statue ( statue 0) 1) 2) 3) 4) As is shown in the image, it is possible to create four rays in such a way that: • the first will hit statue 0; • the second will hit statues 1 and 2; • the third will hit statue 3; • the fourth will hit statue 4. ](media/TopTal-image2.png){width="5.0in" height="5.864583333333333in"}



![Task 1 Task 2 Task 3 As is shown in the image, it is possible to create four rays in such a way that: • the first will hit statue 0; • the second will hit statues 1 and 2; • the third will hit statue 3; • the fourth will hit statue 4. Assume that: N is an integer within the range [1 .. 100,000]; • the coordinates of each point in array A are integers within the range [-1 • the elements of A are all distinct; Array A does not contain point (0,0). Complexity: • expected worst-case time complexity is O(N); • expected worst-case space complexity is O(N*log(N)), beyond input storage (not counting the storage required for input arguments). Elements of input arrays can be modified. Copyright 2009-2017 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited. Custom test cases 0/10 ](media/TopTal-image3.png){width="5.0in" height="6.104166666666667in"}



![Task 1 Task 2 Task 3 6 A non-empty zero-indexed array A consisting of N integers is given. This array contains a decimal representation of a number V, i.e. element A[K] contains the K-th least significant digit of the decimal representation of V. For example, array A such that: ALO] All] represents the number V = 153. Write a function: class Solution { public int solution( int [ ] A); that, given an array A consisting of N integers specifying a decimal representation of a number V, returns the sum of the digits in the decimal representation of the number 17*V. For example, given array A such that: ALO] All] the function should return 9, because: • array A represents the number 1 53, • 153 = 2601, • the sum of the digits in the decimal representation of 2601 is 2+6+0+1=9. Assume that: N is an integer within the range [1 .. 1,000,000]; • each element of array A is an integer within the range [0..9]. Custom test cases 0/10 ](media/TopTal-image4.png){width="5.0in" height="6.177083333333333in"}



![Task 1 Task 2 Task 3 represents the number V = 153. Write a function: class Solution { public int solution( int [ ] A); that, given an array A consisting of N integers specifying a decimal representation of a number V, returns the sum of the digits in the decimal representation of the number 17*V. For example, given array A such that: ALO] All] the function should return 9, because: • array A represents the number 1 53, • 153 = 2601, • the sum of the digits in the decimal representation of 2601 is 2+6+0+1=9. Assume that: N is an integer within the range [1 .. 1,000,000]; • each element of array A is an integer within the range [0..9]. Complexity: • expected worst-case time complexity is O(N); • expected worst-case space complexity is 0(1), beyond input storage (not counting the storage required for input arguments). Elements of input arrays can be modified. Copyright 2009-2017 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited. Custom test cases 0/10 ](media/TopTal-image5.png){width="5.0in" height="6.0625in"}



![Task 1 Task 2 Task 3 There are N giraffes in your zoo. The zoo is famous for the distinct heights of its giraffes. This means that there are no two giraffes of equal height in the zoo. The giraffes live in displays located along the main path. Every giraffe has its own display. For aesthetic reasons, you want the giraffes to be arranged in ascending order of height. Reordering all the giraffes at once, however, would cause the animals a lot of stress, so you want to split the displays into as many smaller groups as possible and reorder all the groups separately. A group should contain one or more consecutive displays. After reordering all the groups, the giraffes should be arranged in ascending order of height. Write a function: class Solution { public int solution( int [ ] A); that, given a zero-indexed array A containing N integers, where All] denotes the height of the giraffe in the I-th display, returns the maximum number of groups that can be reordered independently in order to sort all the giraffes in ascending order of height. For example, given A = [1, 5, 4, 9, 8, 7, 12, 13, 14], the function should return 6. Displays can be split into six groups: [1], [5, 4], [9, 8, 7], [1 2], [13] and [14]. Then, after reordering each group, the whole sequence of giraffes will be sorted into ascending order. Note that group [1 2, 13, 14] was already ordered correctly, so it could be split into three groups, each containing one giraffe. Given A = [4, 3, 2, 6, 1], the function should return 1. Displays cannot be split into smaller groups; the giraffes have to be sorted all at once. Assume that: ](media/TopTal-image6.png){width="5.0in" height="5.833333333333333in"}



![Task 1 Task 2 Task 3 Write a function: class Solution { public int solution( int [ ] A); that, given a zero-indexed array A containing N integers, where All] denotes the height of the giraffe in the I-th display, returns the maximum number of groups that can be reordered independently in order to sort all the giraffes in ascending order of height. For example, given A = [1, 5, 4, 9, 8, 7, 12, 13, 14], the function should return 6. Displays can be split into six groups: [1], [5, 4], [9, 8, 7], [12], [13] and [14]. Then, after reordering each group, the whole sequence of giraffes will be sorted into ascending order. Note that group [1 2, 13, 14] was already ordered correctly, so it could be split into three groups, each containing one giraffe. Given A = [4, 3, 2, 6, 1], the function should return 1. Displays cannot be split into smaller groups; the giraffes have to be sorted all at once. Assume that: N is an integer within the range [1 .. 100,000]; • each element of array A is an integer within the range • the elements of A are all distinct. Complexity: • expected worst-case time complexity is O(N*log(N)); • expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments). Elements of input arrays can be modified. Copyright 2009-2017 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited. Custom test cases 0/10 ](media/TopTal-image7.png){width="5.0in" height="6.125in"}







