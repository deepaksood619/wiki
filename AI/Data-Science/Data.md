# Data

Created: 2019-01-22 10:54:38 +0500

Modified: 2021-12-08 23:23:04 +0500

---
-   What is Data
-   Types of Attributes
    -   Nominal
    -   Ordinal
    -   Interval
    -   Ratio
-   Properties of Attribute Values
    -   Distinctness (=, !=)
    -   Order (<, >)
    -   Addition/Substraction
    -   Multiplication/Division
-   Discrete and Continuous Attributes
-   Types of data set
    -   Record
    -   Graph
    -   Ordered
-   Data Quality
    -   Noise and outliers
    -   Missing values
    -   Duplicate values
-   Data Preprocessing
    -   Aggregation
    -   Attribute Transformation
    -   Dimensionality Reduction
        -   Feature Creation
        -   Feature subset selection
    -   Discretization and Binarization
    -   Sampling
-   Similarity and dissimilarity
    -   Euclidean's distance
    -   Mahalonobis distance
    -   Cosine similarity
-   Correlation



**What is Data**
-   Collection of data objects and their attributes
-   An attribute is a property or characteristic of an object
    -   Examples: eye color of a person, temperature, etc
    -   Attribute is also known as variable, field, characteristic, or feature
-   A collection of attributes describe an object
    -   Object is also known as record, point, case, sample, entity, or instance

![Attributes Objects Tid 1 2 3 4 5 6 7 8 9 10 Refund Yes NO No Yes No No Yes NO No No Marital Status Single Married Single Married Divorced Married Divorced Single Married Single Taxable Income 125K 100K 70K 120K 95K 60K 220K 85K 75K 90K Cheat No NO No No Yes No No Yes No Yes ](media/Data-image1.jpg)



**Types of Attributes**

There are different types of attributes
-   Nominal
    -   Examples: ID numbers, eye color, zip colors
-   Ordinal
    -   Examples: rankings (e.g., taste of potato chips on a scale from 1-10), grades, height in {tall, medium, short}
-   Interval
    -   Examples: calendar dates, temperatures in Celsius or Fahrenheit
-   Ratio
    -   Examples: temperature in Kelvin, length, time, counts



**Properties of Attribute Values**
-   The type of an attribute depends on which of the following properties it posseses:
    -   Distinctness: equal to, not equal to
    -   Order: < >
    -   Addition: + -
    -   Multiplication * /


-   Nomical attribute: distinctness
-   Ordinal attribute: distinctness & order
-   Interval attribute: distinctness, order & addition
-   Ratio attribute: all 4 properties



![Attribute Nominal Ordinal Interval Ratio Description The values of a nominal attribute are just different names, i.e., nominal attributes provide only enough information to distinguish one object from another. (=, The values of an ordinal attribute provide enough information to order objects For interval attributes, the differences between values are meaningful, i.e., a unit of measurement exists. For ratio variables, both differences and ratios are meaningful. (*, /) Examples zip codes, employee ID numbers, eye color, sex: {male, female} hardness of minerals, {good, better, best}, grades, street numbers calendar dates, temperature in Celsius or Fahrenheit temperature in Kelvin, monetary quantities, counts, age, mass, length, electrical current Operations mode, entropy, contingency correlation, 12 test median, percentiles, rank correlation, run tests, sign tests mean, standard deviation, Pearson's correlation, t and F tests geometric mean, harmonic mean, percent variation ](media/Data-image2.jpg)



**Discrete and Continuous Attributes**
-   **Discrete Attribute**
    -   Has only a finite and countably infinite set of values
    -   Examples: zip code, counts, or the set of words in a collection of documents
    -   Often represented as integer variables
    -   Note: binary attributes are a special case of discrete attributes
-   **Continuous Attribute**
    -   Has real numbers as attributes values
    -   Examples: temperature, height, or weight
    -   Practically, real values can only be measured and represented using a finite number of digits
    -   Continous attributes are typically represented as floating-point variables



**Types of Data**

![Types of data Categorical Categorical data represents groups or categories. Examples: 1. Car brands: Audi, BMW and Mercedes. 2. Answers to yes/no questions: yes and no Numerical Discrete Continuous Numerical data represents numbers. It is divided into two groups: discrete and continuous. Discrete data can be usually counted in a finite matter, while continuous is infinite and impossible to count. Examples: Discrete: # children you want to have, SAT score Continuous: weight, height ](media/Data-image3.jpg)

| Categorical data      | A subset of types of data. Describes categories or groups.                                                                                                                                                          |
|--------------|----------------------------------------------------------|
| Numerical data        | A subset of types of data. Represents numbers. Can be further divided into discrete and continuous.                                                                                                                 |
| Discrete data         | Data that can be counted in a finite matter. Opposite of continuous.                                                                                                                                                |
| Continuous data       | Data that is 'infinite' and impossible to count. Opposite of discrete.                                                                                                                                            |
| Levels of measurement | A way to classify data. There are two levels of measurement - qualitative and quantitative, which are further divided into nominal & ordinal, and ratio & interval, respectively.                                   |
| Qualitative data      | A subset of levels of measurement. There are two types of qualitative data - nominal and ordinal.                                                                                                                   |
| Quantitative data     | A subset of levels of measurement. There are two types of quantitative data - ratio and interval.                                                                                                                   |
| Nominal               | Refers to variables that describe different categories and cannot be put in any order.                                                                                                                              |
| Ordinal               | Refers to variables that describe different categories, but can be ordered.                                                                                                                                         |
| Ratio                 | A number, no matter if whole or a fraction. There exists a unique and unambiguous zero point.                                                                                                                       |
| Interval              | An interval variable represents a number or an interval. There isn't a unique and unambiguous zero point. For example, degrees in Celsius and Fahrenheit are interval variables, while Kelvin is a ratio variable. |



**Types of data sets**
-   **Record**
    -   Data that consists of a collection of records, each of which consists of a fixed set of attributes

![Tid 1 2 3 4 5 6 7 8 9 10 Refund Yes No No Yes No NO Yes NO NO NO Marital Status Single Married Single Married Divorced Married Divorced Single Married Single Taxable Income 125K 100K 70K 120K 95K 60K 220K 85K 75K 90K Cheat No NO NO No Yes No No Yes No Yes ](media/Data-image4.jpg)


-   Data Matrix
    -   If data objects have the same fixed set of numeric attributes, then the data objects can be thought of as points in a multi-dimensional space, where each dimension represents a distinct attribute
    -   Such data set can be represented by an m by n matrix, where there are m rows, one for each object, and n columns, one for each attribute

![Projection of x Load 10.23 15.22 2.7 12.65 16.22 2.2 Projection Of y load 5.27 6.25 Distance Load Thickness 1.2 1.1 ](media/Data-image5.jpg)
-   Document Data
    -   Each document becomes a 'term' vector
        -   Each term is a component (attribute) of the vector
        -   the value of each component is the number of times the corresponding term occurs in the document

![Document 1 Document 2 Document 3 ](media/Data-image6.jpg)
-   Transaction Data
    -   A special type of record data, where
        -   each record (transaction) involves a set of items
        -   For example, consider a grocery store. The set of products purchased by a customer during one shopping trip consitute a transaction, while the individual products that were purchased are the items

![TID 1 2 3 4 5 Items Bread, Coke, Milk Beer, Bread Beer, Coke, Diaper, Milk Beer, Bread, Diaper, Milk Coke, Diaper, Milk ](media/Data-image7.jpg)


-   **Graph**
    -   World Wide Web
    -   Molecular Structures
-   **Ordered**
    -   Spatial Data
    -   Temporal Data
    -   Sequential Data
    -   Genetic Sequence Data



**User Generated Data**

1.  Clickstreams



**Application Generated Data**

1.  Performance Metrics



**Machine Generated Data**

1.  Network flows

2.  Server metrics



**Devops**

1.  Backfilling datasets

2.  Validating data

3.  Scheduling workflows



**Data Wrangling**

Data wrangling, sometimes referred to asdata munging, is the process of transforming and[mapping data](https://en.wikipedia.org/wiki/Data_mapping)from one "[raw](https://en.wikipedia.org/wiki/Raw_data)" data form into another[format](https://en.wikipedia.org/wiki/Content_format)with the intent of making it more appropriate and valuable for a variety of downstream purposes such as analytics. Adata wrangleris a person who performs these transformation operations.



This may include further[munging](https://en.wikipedia.org/wiki/Mung_(computer_term)),[data visualization](https://en.wikipedia.org/wiki/Data_visualization), data aggregation, training a[statistical model](https://en.wikipedia.org/wiki/Statistical_model), as well as many other potential uses. Data munging as a process typically follows a set of general steps which begin with extracting the data in a raw form from the data source, "munging" the raw data using algorithms (e.g. sorting) or parsing the data into predefined data structures, and finally depositing the resulting content into a data sink for storage and future use.



<https://en.wikipedia.org/wiki/Data_wrangling>







