# Operators / Wildcards

Created: 2019-12-01 13:14:48 +0500

Modified: 2021-12-01 16:15:07 +0500

---

**SQL Arithmetic Operators**

| **Operator** | **Description** |
|--------------|-----------------|
| +           | Add             |
| -           | Subtract        |
| *           | Multiply        |
| /            | Divide          |
| %           | Modulo          |



**SQL Bitwise Operators**

| **Operator** | **Description**      |
|--------------|----------------------|
| &            | Bitwise AND          |
| |           | Bitwise OR           |
| ^           | Bitwise exclusive OR |



**SQL Comparison Operators**

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 86%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Operator</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>=</td>
<td>Equal to</td>
</tr>
<tr class="even">
<td>&gt;</td>
<td>Greater than</td>
</tr>
<tr class="odd">
<td>&lt;</td>
<td>Less than</td>
</tr>
<tr class="even">
<td>&gt;=</td>
<td>Greater than or equal to</td>
</tr>
<tr class="odd">
<td>&lt;=</td>
<td>Less than or equal to</td>
</tr>
<tr class="even">
<td>&lt;&gt;, !=</td>
<td>Not equal to</td>
</tr>
<tr class="odd">
<td>&lt;=&gt;</td>
<td>Null safe equal<br />
This operator performs an equality comparison like the<a href="https://dev.mysql.com/doc/refman/8.0/en/comparison-operators.html#operator_equal">=</a>operator, but returns1rather thanNULLif both operands areNULL, and0rather thanNULLif one operand isNULL.</td>
</tr>
</tbody>
</table>



**SQL Compound Operators**

| **Operator** | **Description**          |
|--------------|--------------------------|
| +=           | Add equals               |
| -=           | Subtract equals          |
| *=          | Multiply equals          |
| /=           | Divide equals            |
| %=           | Modulo equals            |
| &=           | Bitwise AND equals       |
| ^-=         | Bitwise exclusive equals |
| |*=        | Bitwise OR equals        |



**SQL Logical Operators**

| **Operator** | **Description**                                              |
|--------------|----------------------------------------------------------|
| ALL          | TRUE if all of the subquery values meet the condition        |
| AND          | TRUE if all the conditions separated by AND is TRUE          |
| ANY          | TRUE if any of the subquery values meet the condition        |
| BETWEEN      | TRUE if the operand is within the range of comparisons       |
| EXISTS       | TRUE if the subquery returns one or more records             |
| IN           | TRUE if the operand is equal to one of a list of expressions |
| LIKE         | TRUE if the operand matches a pattern                        |
| NOT          | Displays a record if the condition(s) is NOT TRUE            |
| OR           | TRUE if any of the conditions separated by OR is TRUE        |
| SOME         | TRUE if any of the subquery values meet the condition        |



<https://www.w3schools.com/sql/sql_operators.asp>



**Wildcard Characters in MS Access**

| **Symbol** | **Description**                                     | **Example**                                                    |
|---------|------------------------------|---------------------------------|
| *         | Represents zero or more characters                  | bl* finds bl, black, blue, and blob                           |
| ?          | Represents a single character                       | h?t finds hot, hat, and hit                                    |
| []       | Represents any single character within the brackets | h[oa]t finds hot and hat, but not hit                        |
| !          | Represents any character not in the brackets        | h[!oa]t finds hit, but not hot and hat                       |
| -         | Represents a range of characters                    | c[a-b]t finds cat and cbt                                    |
| #         | Represents any single numeric character             | 2#5 finds 205, 215, 225, 235, 245, 255, 265, 275, 285, and 295 |



**Wildcard Characters in SQL Server**

| **Symbol** | **Description**                                     | **Example**                               |
|---------|-------------------------------------|--------------------------|
| %         | Represents zero or more characters                  | bl% finds bl, black, blue, and blob       |
| _         | Represents a single character                       | h_t finds hot, hat, and hit               |
| []       | Represents any single character within the brackets | h[oa]t finds hot and hat, but not hit   |
| ^         | Represents any character not in the brackets        | h[^oa]t finds hit, but not hot and hat |
| -         | Represents a range of characters                    | c[a-b]t finds cat and cbt               |



<https://www.w3schools.com/sql/sql_wildcards.asp>
