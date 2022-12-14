# Architecture

Created: 2017-11-06 16:20:39 +0500

Modified: 2020-07-06 12:50:51 +0500

---

Follows **Model-View-Template (MVT)** architectural pattern.



**Primary Goal**

1.  Ease of creation of complex, database-driven websites

2.  Reusability, and pluggability of components

3.  Rapid development

4.  Don't repeat yourself

5.  Provide create, read, update and delete interface that is generated dynamically through introspection and configured via admin-roles



**Difference between MVC and MVT**

Django itself takes care of the controller part only leaving Templates.

Template is a HTML file mixed with Django Template Language (DTL).





Django web applications typicallygroup the code that handles each of these steps into separate files:

![( ョ & 。 邑 data Request 3 物 を opri 当 e を ぐ 「 0 き 日 d 帚 ョ 宿 5 ニ 0 ( を ま . py) ( u オ 邑 工 TIP Response ( エ ミ L ) ](media/Architecture-image1.png)
-   **URLs:**While it is possible to process requests from every single URL via a single function, it is much more maintainable to write a separate view function to handle each resource. A URL mapper is used to redirect HTTP requests to the appropriate viewbased on the request URL. The URL mapper can also match particular patterns of strings or digits that appear in an URL, and pass these to a view function as data.
-   **View:**A view is arequest handler function, which receives HTTP requests and returns HTTP responses. Views access the data needed to satisfy requests via*models*, and delegate the formatting ofthe response to*templates*.
-   **Models:**Models are Python objects thatdefinethe structure of anapplication's data, and providemechanisms to manage (add, modify, delete) and query records in the database.
-   **Templates:**Atemplate is a text file defining the structure or layout of a file (such as an HTML page), with placeholders used to represent actual content. A*view*can dynamically create an HTML page using an HTML template, populating it with data from a*model*. A template can be used to define the structure of any type of file; it doesn't have to be HTML!

