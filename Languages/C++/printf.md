# printf

Created: 2018-07-30 21:16:12 +0500

Modified: 2018-07-30 21:23:28 +0500

---

A *format specifier* follows this prototype:

`%[flags][width][.precision][length]specifier`

Where the *specifier character* at the end is the most significant component, since it defines the type and the interpretation of its corresponding argument:

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 72%" />
<col style="width: 15%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>specifier</strong></th>
<th><strong>Output</strong></th>
<th><strong>Example</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>d or i</td>
<td>Signed decimal integer</td>
<td>392</td>
</tr>
<tr>
<td>u</td>
<td>Unsigned decimal integer</td>
<td>7235</td>
</tr>
<tr>
<td>o</td>
<td>Unsigned octal</td>
<td>610</td>
</tr>
<tr>
<td>x</td>
<td>Unsigned hexadecimal integer</td>
<td>7fa</td>
</tr>
<tr>
<td>X</td>
<td>Unsigned hexadecimal integer (uppercase)</td>
<td>7FA</td>
</tr>
<tr>
<td>f</td>
<td>Decimal floating point, lowercase</td>
<td>392.65</td>
</tr>
<tr>
<td>F</td>
<td>Decimal floating point, uppercase</td>
<td>392.65</td>
</tr>
<tr>
<td>e</td>
<td>Scientific notation (mantissa/exponent), lowercase</td>
<td>3.9265e+2</td>
</tr>
<tr>
<td>E</td>
<td>Scientific notation (mantissa/exponent), uppercase</td>
<td>3.9265E+2</td>
</tr>
<tr>
<td>g</td>
<td>Use the shortest representation:%eor%f</td>
<td>392.65</td>
</tr>
<tr>
<td>G</td>
<td>Use the shortest representation:%Eor%F</td>
<td>392.65</td>
</tr>
<tr>
<td>a</td>
<td>Hexadecimal floating point, lowercase</td>
<td>-0xc.90fep-2</td>
</tr>
<tr>
<td>A</td>
<td>Hexadecimal floating point, uppercase</td>
<td>-0XC.90FEP-2</td>
</tr>
<tr>
<td>c</td>
<td>Character</td>
<td>a</td>
</tr>
<tr>
<td>s</td>
<td>String of characters</td>
<td>sample</td>
</tr>
<tr>
<td>p</td>
<td>Pointer address</td>
<td>b8000000</td>
</tr>
<tr>
<td>n</td>
<td><p>Nothing printed.</p>
<p>The corresponding argument must be a pointer to asigned int.</p>
<p>The number of characters written so far is stored in the pointed location.</p></td>
<td></td>
</tr>
<tr>
<td>%</td>
<td>A%followed by another%character will write a single%to the stream.</td>
<td>%</td>
</tr>
</tbody>
</table>

The*format specifier*can also contain sub-specifiers:*flags*,*width*,*.precision*and*modifiers*(in that order), which are optional and follow these specifications:

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>flags</strong></th>
<th><strong>description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>Left-justify within the given field width; Right justification is the default (seewidthsub-specifier).</td>
</tr>
<tr>
<td>+</td>
<td>Forces to preceed the result with a plus or minus sign (+or-) even for positive numbers. By default, only negative numbers are preceded with a-sign.</td>
</tr>
<tr>
<td>(space)</td>
<td>If no sign is going to be written, a blank space is inserted before the value.</td>
</tr>
<tr>
<td>#</td>
<td><p>Used witho,xorXspecifiers the value is preceeded with0,0xor0Xrespectively for values different than zero.</p>
<p>Used witha,A,e,E,f,F,gorGit forces the written output to contain a decimal point even if no more digits follow. By default, if no digits follow, no decimal point is written.</p></td>
</tr>
<tr>
<td>0</td>
<td>Left-pads the number with zeroes (0) instead of spaces when padding is specified (seewidthsub-specifier).</td>
</tr>
</tbody>
</table>

| ***width*** | **description**                                                                                                                                                                                      |
|----------|--------------------------------------------------------------|
| *(number)*  | Minimum number of characters to be printed. If the value to be printed is shorter than this number, the result is padded with blank spaces. The value is not truncated even if the result is larger. |
| *          | The *width*is not specified in the*format*string, but as an additional integer value argument preceding the argument that has to be formatted.                                                    |

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 87%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>.precision</strong></th>
<th><strong>description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>.number</td>
<td><p>For integer specifiers (d,i,o,u,x,X):precisionspecifies the minimum number of digits to be written. If the value to be written is shorter than this number, the result is padded with leading zeros. The value is not truncated even if the result is longer. Aprecisionof0means that no character is written for the value0.</p>
<p>Fora,A,e,E,fandFspecifiers: this is the number of digits to be printed<strong>after</strong>the decimal point (by default, this is 6).</p>
<p>ForgandGspecifiers: This is the maximum number of significant digits to be printed.</p>
<p>Fors: this is the maximum number of characters to be printed. By default all characters are printed until the ending null character is encountered.</p>
<p>If the period is specified without an explicit value forprecision,0is assumed.</p></td>
</tr>
<tr>
<td>.*</td>
<td>Theprecisionis not specified in theformatstring, but as an additional integer value argument preceding the argument that has to be formatted.</td>
</tr>
</tbody>
</table>

The *length*sub-specifier modifies the length of the data type. This is a chart showing the types used to interpret the corresponding arguments with and without *length*specifier (if a different type is used, the proper type promotion or conversion is performed, if allowed):

|             | **specifiers**                                  |                                                |                    |                                          |          |       |                                                  |
|--------|----------|-------------|----------|--------|---------|--------|---------|
| ***length*** | **d i**                                         | **u o x X**                                     | **f F e E g G a A** | **c**                                     | **s**     | **p**  | **n**                                             |
| *(none)*     | int                                             | unsigned int                                    | double              | int                                       | char*    | void* | int*                                             |
| hh           | signed char                                     | unsigned char                                   |                    |                                          |          |       | signed char*                                     |
| h            | short int                                       | unsigned short int                              |                    |                                          |          |       | short int*                                       |
| l            | long int                                        | unsigned long int                               |                    | [wint_t](http://www.cplusplus.com/wint_t) | wchar_t* |       | long int*                                        |
| ll           | long long int                                   | unsigned long long int                          |                    |                                          |          |       | long long int*                                   |
| j            | [intmax_t](http://www.cplusplus.com/intmax_t)   | [uintmax_t](http://www.cplusplus.com/uintmax_t) |                    |                                          |          |       | [intmax_t](http://www.cplusplus.com/intmax_t)*   |
| z            | [size_t](http://www.cplusplus.com/size_t)       | [size_t](http://www.cplusplus.com/size_t)       |                    |                                          |          |       | [size_t](http://www.cplusplus.com/size_t)*       |
| t            | [ptrdiff_t](http://www.cplusplus.com/ptrdiff_t) | [ptrdiff_t](http://www.cplusplus.com/ptrdiff_t) |                    |                                          |          |       | [ptrdiff_t](http://www.cplusplus.com/ptrdiff_t)* |
| L            |                                                |                                                | long double         |                                          |          |       |                                                  |

Note regarding thecspecifier: it takes anint(or [wint_t](http://www.cplusplus.com/wint_t)) as argument, but performs the proper conversion to acharvalue (or awchar_t) before formatting it for output.

## Return Value

On success, the total number of characters written is returned.

If a writing error occurs, the*error indicator*([ferror](http://www.cplusplus.com/ferror)) is set and a negative number is returned.

If a multibyte character encoding error occurs while writing wide characters, [errno](http://www.cplusplus.com/errno) is set toEILSEQand a negative number is returned.

## Reference

<http://www.cplusplus.com/reference/cstdio/printf>
