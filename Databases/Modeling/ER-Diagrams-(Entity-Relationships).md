# ER Diagrams (Entity Relationships)

Created: 2020-02-04 17:41:30 +0500

Modified: 2021-12-02 23:32:42 +0500

---

An**entity--relationship model**(or**ER model**) describes interrelated things of interest in a specific domain of knowledge. A basic ER model is composed of entity types (which classify the things of interest) and specifies relationships that can exist between[entities](https://en.wiktionary.org/wiki/entity)(instances of those entity types).
![AcctName Password LastSignedOn SbscrbrName SbscrbrAddress SbscrbrEMail SbscrbrPhone AcctCreatedOn CreepName HitPoints Mana Attack LastPlayed CreatedOn GharName Level ExpPoints Type n Has MaxHitPoints MaxMana CurrHitPoints CurrMana n 1 Contains Account m Ranlnto n Creep 1 1 IDNum Modifier n IsType Character 1 Carrying Item Instantiation Can-ying 1 Creep Instantiation IDNum n IsType WhenCreated 1 ReqionName Climate Precipitation Foliage Playersln Region ItemName Item Item Type ItemDamage 1 Contains ](media/ER-Diagrams-(Entity-Relationships)-image1.png)

An entity--relationship diagram for a[MMORPG](https://en.wikipedia.org/wiki/MMORPG)using Chen's notation.
In[software engineering](https://en.wikipedia.org/wiki/Software_engineering), an ER model is commonly formed to represent things a business needs to remember in order to perform business processes. Consequently, the ER model becomes an abstract[data model](https://en.wikipedia.org/wiki/Data_modeling), that defines a data or information structure which can be implemented in a[database](https://en.wikipedia.org/wiki/Database), typically a[relational database](https://en.wikipedia.org/wiki/Relational_database).
Entity--relationship modeling was developed for database and design by[Peter Chen](https://en.wikipedia.org/wiki/Peter_Chen)and published in a 1976 paper.However, variants of the idea existed previously.Some ER models show super and subtype entities connected by generalization-specialization relationships,and an ER model can be used also in the specification of domain-specific[ontologies](https://en.wikipedia.org/wiki/Ontology_(computer_science)).
<https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model>
The ER model defines the conceptual view of a database. It works around real-world entities and the associations among them. At view level, the ER model is considered a good option for designing databases.
**Entity**

An entity can be a real-world object, either animate or inanimate, that can be easily identifiable. For example, in a school database, students, teachers, classes, and courses offered can be considered as entities. All these entities have some attributes or properties that give them their identity.
An entity set is a collection of similar types of entities. An entity set may contain entities with attribute sharing similar values. For example, a Students set may contain all the students of a school; likewise a Teachers set may contain all the teachers of a school from all faculties. Entity sets need not be disjoint.
**Attributes**

Entities are represented by means of their properties, calledattributes. All attributes have values. For example, a student entity may have name, class, and age as attributes.
There exists a domain or range of values that can be assigned to attributes. For example, a student's name cannot be a numeric value. It has to be alphabetic. A student's age cannot be negative, etc.
Types of Attributes
-   Simple attribute− Simple attributes are atomic values, which cannot be divided further. For example, a student's phone number is an atomic value of 10 digits.
-   Composite attribute− Composite attributes are made of more than one simple attribute. For example, a student's complete name may have first_name and last_name.
-   Derived attribute− Derived attributes are the attributes that do not exist in the physical database, but their values are derived from other attributes present in the database. For example, average_salary in a department should not be saved directly in the database, instead it can be derived. For another example, age can be derived from data_of_birth.
-   Single-value attribute− Single-value attributes contain single value. For example − Social_Security_Number.
-   Multi-value attribute− Multi-value attributes may contain more than one values. For example, a person can have more than one phone number, email_address, etc.
These attribute types can come together in a way like −
-   simple single-valued attributes
-   simple multi-valued attributes
-   composite single-valued attributes
-   composite multi-valued attributes
**Entity-Set and Keys**

Key is an attribute or collection of attributes that uniquely identifies an entity among entity set.
For example, the roll_number of a student makes him/her identifiable among students.
-   Super Key− A set of attributes (one or more) that collectively identifies an entity in an entity set.
-   Candidate Key− A minimal super key is called a candidate key. An entity set may have more than one candidate key.
-   Primary Key− A primary key is one of the candidate keys chosen by the database designer to uniquely identify the entity set.
**Relationship**

The association among entities is called a relationship. For example, an employeeworks_ata department, a studentenrollsin a course. Here, Works_at and Enrolls are called relationships.
**Relationship Set**

A set of relationships of similar type is called a relationship set. Like entities, a relationship too can have attributes. These attributes are calleddescriptive attributes.
**Degree of Relationship**

The number of participating entities in a relationship defines the degree of the relationship.
-   Binary = degree 2
-   Ternary = degree 3
-   n-ary = degree
**Mapping Cardinalities**

Cardinalitydefines the number of entities in one entity set, which can be associated with the number of entities of other set via relationship set.
-   One-to-one− One entity from entity set A can be associated with at most one entity of entity set B and vice versa.

![One-to-one relation](media/ER-Diagrams-(Entity-Relationships)-image2.png)
-   One-to-many− One entity from entity set A can be associated with more than one entities of entity set B however an entity from entity set B, can be associated with at most one entity.

![One-to-many relation](media/ER-Diagrams-(Entity-Relationships)-image3.png)
-   Many-to-one− More than one entities from entity set A can be associated with at most one entity of entity set B, however an entity from entity set B can be associated with more than one entity from entity set A.

![Many-to-one relation](media/ER-Diagrams-(Entity-Relationships)-image4.png)
-   Many-to-many− One entity from A can be associated with more than one entity from B and vice versa.

![Many-to-many relation](media/ER-Diagrams-(Entity-Relationships)-image5.png)
![[User should be able to view/edit his profile containing following information: -pic cm • On top left we should show user's Profile Photo • On the right side of Profile pic the name and contact information should be displayed. uses ](media/ER-Diagrams-(Entity-Relationships)-image6.jpeg)<https://www.tutorialspoint.com/dbms/er_model_basic_concepts.htm>

<https://www.geeksforgeeks.org/introduction-of-er-model/>
