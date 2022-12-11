# 3Blue1Brown

Created: 2018-05-26 12:43:19 +0500

Modified: 2018-12-30 18:49:26 +0500

---

1.  Vectors

2.  Linear combinations, span and basis vectors

3.  Linear transformations and matrices

4.  Matrix multiplication as composition

5.  Three dimensional linear transformation

6.  The determinant

7.  Inverse matrices, column space, rank and null space

8.  Non square matrices

9.  Dot product and duality

10. Cross product

11. Cross product in the light of linear transformations

12. Change of basis

13. Eigenvectors and eigenvalues

14. Abstract vector spaces



1.  **Vectors**

    a.  Vector addition (adding two vectors)

    b.  Scalar multiplication (increasing the length of a vector by a given number)

2.  **Linear combinations, span and basis vectors**



![and J are t e "basis vectors" of the xy coordinate system ](media/3Blue1Brown-image1.png){width="5.0in" height="0.9270833333333334in"}

called as i hat and j hat



![of v and is the The span" set of all their linear combinations. Let a and b vary ver„all„real„numbers ](media/3Blue1Brown-image2.png){width="5.0in" height="2.875in"}



**Linearly dependent vectors -** If one vector can be removed without changing the span of the vectors. i.e. one of the vectors can be expressed as a linear combination of the other vector.

!["Linearly dependent" u For some values of a and b ](media/3Blue1Brown-image3.png){width="5.0in" height="2.6770833333333335in"}



!["Linearly independent" u all values of a and b For ](media/3Blue1Brown-image4.png){width="5.0in" height="2.8541666666666665in"}



**Basis -** The **basis** of a vector space is a set of linearly independent vectors that span the full space.



3.  **Linear Transformations and Matrices**

For transformations to be linear, there are two property
-   All lines must remain line and not get curved
-   Origin must remain fixed in place

Grid lines remain parallel and evenly spaced



4.  **Matrix Multiplication as composition**

If you apply a rotation transformation followed by a shear transformation, the combined effect is a composition of both rotation and shear transformation

![Shear Rotation Composition ](media/3Blue1Brown-image5.png){width="5.0in" height="1.3541666666666667in"}



In matrix multiplication, order matters

![ITV 「 ](media/3Blue1Brown-image6.png){width="5.0in" height="0.9583333333333334in"}



But Matrix multiplication is associative i.e. (AB)C = A(BC)



5.  **Three dimensional linear transformations**

6.  **The determinant**

![](media/3Blue1Brown-image7.png){width="5.0in" height="2.3125in"}
-   If one area changes by some factor than every area changes by that factor.
-   The determinant of a transformation is the change in area of a grid after applying linear transformation
-   The factor by which a linear transformation changes any area is called the determinant of that transformation.
-   Negative determinant tells that orientation of space is inverted.
-   In 3 dimensions, determinant tells us how much volume gets scaled.

Volume of the parallelepiped

![det l) ad bc ](media/3Blue1Brown-image8.png){width="5.0in" height="1.6770833333333333in"}



![det a det det ](media/3Blue1Brown-image9.png){width="5.0in" height="3.2916666666666665in"}



![det(M M ) det (Ml) det ( ](media/3Blue1Brown-image10.png){width="5.0in" height="0.6145833333333334in"}



7.  **Inverse matrices, column space, rank and null space**
    -   **Gaussian Elimination**
    -   **Row echelon form**
    -   **Linear system of equations**

![2x+5y+3z 4x+0y+8z 1x+3y+0z ](media/3Blue1Brown-image11.png){width="5.0in" height="1.9375in"}


-   Inverse Transformation

A^-1^ A = [[1 0] [0 1]] Identity Transformation (changes nothing)

Until det(A) not equal to 0, A^-1^ exists


-   Rank - Number of dimensions in the output
    -   Rank 1 - One dimensional line
    -   Rank 2 - Two dimensional plane
    -   Rank 3 - Three dimensional 3d space
-   Set of all possible outputs of the matrix is called the "column space" of the matrix A
-   Full rank - When this rank is as high as it can be meaning it equals the number of column, we call the matrix full rank
-   Null Space Kernel - All the vectors that squishes into origin when transformation takes place

In Ax = v, when v happens to be the zero vector, null space gives all of the possible solution to the linear equation



8.  **Non Square Matrices as transformations between dimensions**
    -   **A 2x3 matrix i.e. there are 2 rows and 3 columns represent that the transformation starts in 3 dimension and the landing space is represented in 2 dimension**

![3 basis vectors 3 1 1 5 4 9 2 coordinates for each landing spots ](media/3Blue1Brown-image12.png){width="5.0in" height="1.6666666666666667in"}



9.  **Dot products and duality**

Matching coordinates, multiplying pair and adding them together.

![Dot product ](media/3Blue1Brown-image13.png){width="5.0in" height="2.9479166666666665in"}



If we projected vector w onto the line that passes through the origin and the tip of vector v, multiplying the length of this projection, by the length of v, we have the dot product.



![Length of projected of ](media/3Blue1Brown-image14.png){width="5.0in" height="2.0104166666666665in"}



![Length of rojected w) Length of v) Should be negative ](media/3Blue1Brown-image15.png){width="5.0in" height="2.4895833333333335in"}


-   If vectors are pointing in the same direction, then the dot product is positive
-   If vectors are perpendicular to each other, there dot product is 0
-   If vectors are pointing in the opposing direction, then there dot product is negative
-   Order doesn't matter, V.W = W.V
-   Dot product is a very useful geometric tool for understanding projections, and for testing whether or not vectors tend to point in the same direction



10. **Cross Products**

![Area of parallelogram ](media/3Blue1Brown-image16.png){width="5.0in" height="1.8229166666666667in"}



If v is to the right of w, than cross product is positive

![Area of parallelogram ositive ](media/3Blue1Brown-image17.png){width="5.0in" height="3.21875in"}



If v is to the left of w, than cross product is negative

![Area of parallelogra egative ](media/3Blue1Brown-image18.png){width="5.0in" height="1.84375in"}



![](media/3Blue1Brown-image19.png){width="5.0in" height="0.96875in"}



![V det ](media/3Blue1Brown-image20.png){width="5.0in" height="2.9895833333333335in"}


-   Cross product of two perpendicular vectors are greater than the vectors that are pointing in very similar direction
-   If we scale a vector by a factor of a, than area of parallelogram also scales up by a factor of a

![](media/3Blue1Brown-image21.png){width="5.0in" height="3.4166666666666665in"}



Cross product of two vectors is a vector that is the area of the parallelogram and is perpendicular to the parallelogram and in the direction of the thumb of the right hand rule.



![vector With length 2.5 Perpendicular to the parallelogram ](media/3Blue1Brown-image22.png){width="5.0in" height="2.65625in"}



![マ マ ](media/3Blue1Brown-image23.png){width="5.0in" height="2.5104166666666665in"}



![x 102 ΙΙ)3 101 • 122 ](media/3Blue1Brown-image24.png){width="5.0in" height="2.0104166666666665in"}



![02 x 03 --- det 03 V3W1---VIW3 + ](media/3Blue1Brown-image25.png){width="5.0in" height="1.6770833333333333in"}



11. **Cross Product in the light of linear transformations**



![Dual vector Transform t.....-l,.,., Some linear transformation to the number line 2 1 2 1 ](media/3Blue1Brown-image26.png){width="5.0in" height="2.28125in"}



![Pl P2 Y = det Y 02 rujl 02 03 03 • 02 Pl ](media/3Blue1Brown-image27.png){width="5.0in" height="2.8541666666666665in"}



![](media/3Blue1Brown-image28.png){width="5.0in" height="2.9479166666666665in"}



![What vector p has the property that PI Y = det ](media/3Blue1Brown-image29.png){width="5.0in" height="3.3333333333333335in"}



12. **Change of basis**
    -   **Coordinate system**
    -   **Alternate coordinate system**
    -   **How do you translate between coordinate systems**
    -   **Matrix multiplication by "Inverse change of basis matrix"**
    -   **How to translate a matrix**
        -   **Start with any vectors written in Jennifer's language**
        -   **Translate it to our language using change of basis matrix**
        -   **Apply transformation matrix in our language, this tells us where that vector lands but still in our language**
        -   **Apply the inverse change of basis matrix to get the transformed vector but in Jennifer's language**



![Same vector language in our Transformation matrix language m our ](media/3Blue1Brown-image30.png){width="5.0in" height="3.28125in"}



![How to translate a matrix Transformed vector her language in 2 1 1 1 1 O 1 1 O 2 1 1 1 1 2 I livers e change of basis matrix ](media/3Blue1Brown-image31.png){width="5.0in" height="3.46875in"}



![An expression like suggests a mathematical sort of empathy ](media/3Blue1Brown-image32.png){width="5.0in" height="1.625in"}



13. **Eigenvectors and eigenvalues**

Eigenvectors - the vectors that doesn't change its span after a transformation. The factor by which they are changed (either stretched or squished) during the transformation is eigenvalue.



![4 igenvectors with ei envalue 3 ](media/3Blue1Brown-image33.png){width="5.0in" height="2.6666666666666665in"}



![Transformation Eigenvalue matrix Eigenvector ](media/3Blue1Brown-image34.png){width="5.0in" height="3.3020833333333335in"}



![Matrix-vector multiplication Scalar multiplication ](media/3Blue1Brown-image35.png){width="5.0in" height="1.8958333333333333in"}


-   Negative eigenvalue corresponds to flipping during transformation
-   There could be no eigenvectors in a transformation

Ex - Rotation by 90 degrees

![](media/3Blue1Brown-image36.png){width="5.0in" height="2.0833333333333335in"}



Since there are no real numbers, therefore there are no eigenvectors for this transformation


-   A transformation can have a single eigenvalue with a lot of eigenvector

Ex - Scaling by some scalar eg. 2, there is only one eigenvalue of 2, but all the vectors have that value.


-   Diagonal matrix - all values other than diagonal is 0

All the basis vectors are eigenvectors, with the diagonal entries of this matrix being there eigenvalues


-   Eigenbasis

We can change our coordinate system so that our eigenvectors are our basis vectors

![Eigen QSis ](media/3Blue1Brown-image37.png){width="5.0in" height="1.9791666666666667in"}



14. **Abstract Vector Spaces**

![Formal definition of linearity dditivity:L(V + L V) + Scaling:L( L(V) ](media/3Blue1Brown-image38.png){width="5.0in" height="1.875in"}


-   Additivity - If you add two vectors and then perform a transformation, the result is same vector for the transformed addition of vectors and the previous addition vector.
-   Scaling - Is if you scale a vector v by some number, then apply the transformation, you get the same ultimate vector as if you scale the transformed version of v by that same amount.
-   Linear transformations preserve addition and scalar multiplication



![Rules for vectors addition and scaling 3. There is a vector O such that O + v 4. For every vector v there is a vector (bv) 5. v for all v v so that V + ( ---V) Axioms ](media/3Blue1Brown-image39.png){width="5.0in" height="2.6458333333333335in"}







**References**

[Essence of linear algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)



![Vectors vs. ](media/3Blue1Brown-image40.jpg){width="5.0in" height="2.8020833333333335in"}








































