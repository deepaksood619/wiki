# Data Types

Created: 2018-05-14 10:55:45 +0500

Modified: 2021-04-09 23:36:05 +0500

---

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Sr.No.</strong></th>
<th><strong>Data Types &amp; Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td><p>bool_</p>
<p>Boolean (True or False) stored as a byte</p></td>
</tr>
<tr>
<td>2</td>
<td><p>int_</p>
<p>Default integer type (same as C long; normally either int64 or int32)</p></td>
</tr>
<tr>
<td>3</td>
<td><p>intc</p>
<p>Identical to C int (normally int32 or int64)</p></td>
</tr>
<tr>
<td>4</td>
<td><p>intp</p>
<p>Integer used for indexing (same as C ssize_t; normally either int32 or int64)</p></td>
</tr>
<tr>
<td>5</td>
<td><p>int8</p>
<p>Byte (-128 to 127)</p></td>
</tr>
<tr>
<td>6</td>
<td><p>int16</p>
<p>Integer (-32768 to 32767)</p></td>
</tr>
<tr>
<td>7</td>
<td><p>int32</p>
<p>Integer (-2147483648 to 2147483647)</p></td>
</tr>
<tr>
<td>8</td>
<td><p>int64</p>
<p>Integer (-9223372036854775808 to 9223372036854775807)</p></td>
</tr>
<tr>
<td>9</td>
<td><p>uint8</p>
<p>Unsigned integer (0 to 255)</p></td>
</tr>
<tr>
<td>10</td>
<td><p>uint16</p>
<p>Unsigned integer (0 to 65535)</p></td>
</tr>
<tr>
<td>11</td>
<td><p>uint32</p>
<p>Unsigned integer (0 to 4294967295)</p></td>
</tr>
<tr>
<td>12</td>
<td><p>uint64</p>
<p>Unsigned integer (0 to 18446744073709551615)</p></td>
</tr>
<tr>
<td>13</td>
<td><p>float_</p>
<p>Shorthand for float64</p></td>
</tr>
<tr>
<td>14</td>
<td><p>float16</p>
<p>Half precision float: sign bit, 5 bits exponent, 10 bits mantissa</p></td>
</tr>
<tr>
<td>15</td>
<td><p>float32</p>
<p>Single precision float: sign bit, 8 bits exponent, 23 bits mantissa</p></td>
</tr>
<tr>
<td>16</td>
<td><p>float64</p>
<p>Double precision float: sign bit, 11 bits exponent, 52 bits mantissa</p></td>
</tr>
<tr>
<td>17</td>
<td><p>complex_</p>
<p>Shorthand for complex128</p></td>
</tr>
<tr>
<td>18</td>
<td><p>complex64</p>
<p>Complex number, represented by two 32-bit floats (real and imaginary components)</p></td>
</tr>
<tr>
<td>19</td>
<td><p>complex128</p>
<p>Complex number, represented by two 64-bit floats (real and imaginary components)</p></td>
</tr>
<tr>
<td>20</td>
<td>object # python object type</td>
</tr>
<tr>
<td>21</td>
<td>np.string_# fixed-length string type</td>
</tr>
<tr>
<td>22</td>
<td>np.unicode_ # fixed-length unicode type</td>
</tr>
</tbody>
</table>

NumPy numerical types are instances of dtype (data-type) objects

## Data Type Objects (dtype)

A data type object describes interpretation of fixed block of memory corresponding to an array, depending on the following aspects −

- Type of data (integer, float or Python object)
- Size of data
- Byte order (little-endian or big-endian)
- In case of structured type, the names of fields, data type of each field and part of the memory block taken by each field.
- If data type is a subarray, its shape and data type

The byte order is decided by prefixing '<' or '>' to data type. '<' means that encoding is little-endian (least significant is stored in smallest address). '>' means that encoding is big-endian (most significant byte is stored in smallest address).

A dtype object is constructed using the following syntax

numpy.dtype(object, align, copy)

The parameters are

- Object− To be converted to data type object
- Align− If true, adds padding to the field to make it similar to C-struct
- Copy− Makes a new copy of dtype object. If false, the result is reference to builtin data type object

### Example

```python
>>> import numpy as np

>>> student = np.dtype([('name','S20'), ('age', 'i1'), ('marks', 'f4')])
>>> a = np.array([('abc', 21, 50),('xyz', 18, 75)], dtype = student)
>>> print (a)

[('abc', 21, 50.0), ('xyz', 18, 75.0)]

```

Each built-in data type has a character code that uniquely identifies it.

- 'b'− boolean
- 'i'− (signed) integer
- 'u'− unsigned integer
- 'f'− floating-point
- 'c'− complex-floating point
- 'm'− timedelta
- 'M'− datetime
- 'O'− (Python) objects
- 'S', 'a'− (byte-)string
- 'U'− Unicode
- 'V'− raw data (void)
