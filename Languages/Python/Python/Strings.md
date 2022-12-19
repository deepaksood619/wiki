# Strings

Created: 2017-11-15 11:39:04 +0500

Modified: 2021-06-30 00:10:10 +0500

---

## fstrings

```python
# equal operator inside fstrings, from python3.8
num_value = 2
print(f"{num_value = }")
print(f"{num_value % 2 = }")
>>> num_value = 2
>>> num_value = 0

now = datetime.datetime.utcnow()
print(f'{now=:Y-%m-%d}')
```

## String Constants

#### string.ascii_letters

#### string.ascii_lowercase

#### string.ascii_uppercase

#### string.digits

#### string.hexdigits

#### string.octdigits

#### string.punctuation

#### string.printable

#### string.whitespace

## Built-in String Methods

<table>
<colgroup>
<col style="width: 7%" />
<col style="width: 92%" />
</colgroup>
<thead>
<tr class="header">
<th>1</th>
<th><p><a href="https://www.tutorialspoint.com/python/string_capitalize.htm"><strong>capitalize()</strong></a></p>
<p>Capitalizes first letter of string</p></th>
</tr>
</thead>
<tbody>
<tr>
<td>2</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_center.htm"><strong>center(width, fillchar)</strong></a></p>
<p>Returns a space-padded string with the original string centered to a total of width columns.</p>
<p>`>``>``>` width = 20<br
`>``>``>` print 'HackerRank'.center(width,'-')<br
-----HackerRank-----</p></td>
</tr>
<tr>
<td>3</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_count.htm"><strong>count(str, beg= 0,end=len(string))</strong></a></p>
<p>Counts how many times str occurs in string or in a substring of string if starting index beg and ending index end are given.</p></td>
</tr>
<tr>
<td>4</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_decode.htm"><strong>decode(encoding='UTF-8',errors='strict')</strong></a></p>
<p>Decodes the string using the codec registered for encoding. encoding defaults to the default string encoding.</p></td>
</tr>
<tr>
<td>5</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_encode.htm"><strong>encode(encoding='UTF-8',errors='strict')</strong></a></p>
<p>Returns encoded string version of string; on error, default is to raise a ValueError unless errors is given with 'ignore' or 'replace'.</p></td>
</tr>
<tr>
<td>6</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_endswith.htm"><strong>endswith(suffix, beg=0, end=len(string))</strong></a></p>
<p>Determines if string or a substring of string (if starting index beg and ending index end are given) ends with suffix; returns true if so and false otherwise.</p></td>
</tr>
<tr>
<td>7</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_expandtabs.htm"><strong>expandtabs(tabsize=8)</strong></a></p>
<p>Expands tabs in string to multiple spaces; defaults to 8 spaces per tab if tabsize not provided.</p></td>
</tr>
<tr>
<td>8</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_find.htm"><strong>find(str, beg=0 end=len(string))</strong></a></p>
<p>Determine if str occurs in string or in a substring of string if starting index beg and ending index end are given returns index if found and -1 otherwise.</p></td>
</tr>
<tr>
<td>9</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_index.htm"><strong>index(str, beg=0, end=len(string))</strong></a></p>
<p>Same as find(), but raises an exception if str not found.</p></td>
</tr>
<tr>
<td>10</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_isalnum.htm"><strong>isalnum()</strong></a></p>
<p>Returns true if string has at least 1 character and all characters are alphanumeric and false otherwise.</p></td>
</tr>
<tr>
<td>11</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_isalpha.htm"><strong>isalpha()</strong></a></p>
<p>Returns true if string has at least 1 character and all characters are alphabetic and false otherwise.</p></td>
</tr>
<tr>
<td>12</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_isdigit.htm"><strong>isdigit()</strong></a></p>
<p>Returns true if string contains only digits and false otherwise. (works only for positive natural numbers)</p>
<p>Ex -</p>
<p>`>``>``>`'1234'.isdigit()</p>
<p>True</p>
<p>`>``>``>`'-1234'.isdigit()</p>
<p>False</p></td>
</tr>
<tr>
<td>13</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_islower.htm"><strong>islower()</strong></a></p>
<p>Returns true if string has at least 1 cased character and all cased characters are in lowercase and false otherwise.</p></td>
</tr>
<tr>
<td>14</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_isnumeric.htm"><strong>isnumeric()</strong></a></p>
<p>Returns true if a unicode string contains only numeric characters and false otherwise.</p></td>
</tr>
<tr>
<td>15</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_isspace.htm"><strong>isspace()</strong></a></p>
<p>Returns true if string contains only whitespace characters and false otherwise.</p></td>
</tr>
<tr>
<td>16</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_istitle.htm"><strong>istitle()</strong></a></p>
<p>Returns true if string is properly "titlecased" and false otherwise.</p></td>
</tr>
<tr>
<td>17</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_isupper.htm"><strong>isupper()</strong></a></p>
<p>Returns true if string has at least one cased character and all cased characters are in uppercase and false otherwise.</p></td>
</tr>
<tr>
<td>18</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_join.htm"><strong>join(seq)</strong></a></p>
<p>Merges (concatenates) the string representations of elements in sequence seq into a string, with separator string.</p>
<p>s = "-";<br
seq = ("a", "b", "c"); # This is sequence of strings.<br
print s.join( seq )</p>
<p></p>
<p>Also lists can also be joined</p>
<p><strong>Most effecient way to join strings</strong></p>
<p><a href="https://waymoot.org/home/python_string/">https://waymoot.org/home/python_string/</a></p></td>
</tr>
<tr>
<td>19</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_len.htm"><strong>len(string)</strong></a></p>
<p>Returns the length of the string</p></td>
</tr>
<tr>
<td>20</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_ljust.htm"><strong>ljust(width[, fillchar])</strong></a></p>
<p>Returns a space-padded string with the original string left-justified to a total of width columns.</p>
<p>`>``>``>` width = 20<br
`>``>``>` print 'HackerRank'.ljust(width,'-')<br
HackerRank----------</p></td>
</tr>
<tr>
<td>21</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_lower.htm"><strong>lower()</strong></a></p>
<p>Converts all uppercase letters in string to lowercase.</p></td>
</tr>
<tr>
<td>22</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_lstrip.htm"><strong>lstrip()</strong></a></p>
<p>Removes all leading whitespace in string.</p></td>
</tr>
<tr>
<td>23</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_maketrans.htm"><strong>maketrans()</strong></a></p>
<p>Returns a translation table to be used in translate function.</p>
<p></p>
<p>Ex - document = document.translate(str.maketrans('','',string.punctuation))</p></td>
</tr>
<tr>
<td>24</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_max.htm"><strong>max(str)</strong></a></p>
<p>Returns the max alphabetical character from the string str.</p></td>
</tr>
<tr>
<td>25</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_min.htm"><strong>min(str)</strong></a></p>
<p>Returns the min alphabetical character from the string str.</p></td>
</tr>
<tr>
<td>26</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_replace.htm"><strong>replace(old, new [, max])</strong></a></p>
<p>Replaces all occurrences of old in string with new or at most max occurrences if max given.</p></td>
</tr>
<tr>
<td>27</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_rfind.htm"><strong>rfind(str, beg=0,end=len(string))</strong></a></p>
<p>Same as find(), but search backwards in string.</p></td>
</tr>
<tr>
<td>28</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_rindex.htm"><strong>rindex( str, beg=0, end=len(string))</strong></a></p>
<p>Same as index(), but search backwards in string.</p></td>
</tr>
<tr>
<td>29</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_rjust.htm"><strong>rjust(width, [, fillchar])</strong></a></p>
<p>Returns a space-padded string with the original string right-justified to a total of width columns.</p>
<p>`>``>``>` width = 20<br
`>``>``>` print 'HackerRank'.rjust(width,'-')<br
----------HackerRank</p></td>
</tr>
<tr>
<td>30</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_rstrip.htm"><strong>rstrip()</strong></a></p>
<p>Removes all trailing whitespace of string.</p></td>
</tr>
<tr>
<td>31</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_split.htm"><strong>split(str="", num=string.count(str))</strong></a></p>
<p>Splits string according to delimiter str (space if not provided) and returns list of substrings; split into at most num substrings if given.</p></td>
</tr>
<tr>
<td>32</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_splitlines.htm"><strong>splitlines( num=string.count('n'))</strong></a></p>
<p>Splits string at all (or num) NEWLINEs and returns a list of each line with NEWLINEs removed.</p></td>
</tr>
<tr>
<td>33</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_startswith.htm"><strong>startswith(str, beg=0,end=len(string))</strong></a></p>
<p>Determines if string or a substring of string (if starting index beg and ending index end are given) starts with substring str; returns true if so and false otherwise.</p></td>
</tr>
<tr>
<td>34</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_strip.htm"><strong>strip([chars])</strong></a></p>
<p>Performs both lstrip() and rstrip() on string.</p></td>
</tr>
<tr>
<td>35</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_swapcase.htm"><strong>swapcase()</strong></a></p>
<p>Inverts case for all letters in string. (Numbers ignored)</p></td>
</tr>
<tr>
<td>36</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_title.htm"><strong>title()</strong></a></p>
<p>Returns "titlecased" version of string, that is, all words begin with uppercase and the rest are lowercase.</p></td>
</tr>
<tr>
<td>37</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_translate.htm"><strong>translate(table, deletechars="")</strong></a></p>
<p>Translates string according to translation table str(256 chars), removing those in the del string.</p>
<p></p>
<p>Ex - document = document.translate(str.maketrans('','',string.punctuation))</p></td>
</tr>
<tr>
<td>38</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_upper.htm"><strong>upper()</strong></a></p>
<p>Converts lowercase letters in string to uppercase.</p></td>
</tr>
<tr>
<td>39</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_zfill.htm"><strong>zfill (width)</strong></a></p>
<p>Returns original string leftpadded with zeros to a total of width characters; intended for numbers, zfill() retains any sign given (less one zero).</p></td>
</tr>
<tr>
<td>40</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_isdecimal.htm"><strong>isdecimal()</strong></a></p>
<p>Returns true if a unicode string contains only decimal characters and false otherwise.</p></td>
</tr>
</tbody>
</table>

## String Formating

```python
'{} {}'.format('one', 'two')

'{} {}'.format(1, 2)

'Hello {}'.format('Deepak')
```

<https://pyformat.info>

### Positional Formating (Positional Arguments)

Also optional positional indexing (positional arguments) can be passed to strings' format

`'{1} {0}'.format('one', 'two')`

### Keyword Formating (Keyword Arguments)

`print("Sammy the {0} {1} a {pr}.".format("shark", "made", pr = "pull request"))`

here pr is a named keyword argument

#### Padding and aligning strings (default is left alignment)

```python
Align Left - '{:>10}'.format('test')
            test
Align Right - '{:10}'.format('test')
    test
Alight left with custom padding character - '{:_<10}'.format('test')
    test______
Center align - '{:^10}'.format('test')
        test
'{:^6}'.format('zip')  #When using center alignment where the length of the string leads to an uneven split of the padding characters the extra character will be placed on the right side
        zip
```

#### Truncating long strings

```python
'{:.5}'.format('xylophone')
xylop
```

#### Combining truncating and padding

```python
'{:10.5}'.format('xylophone')
xylop
```

#### Numbers

```python
'{:d}'.format(42)
42
'{:f}'.format(3.141592653589793)
3.141593
```

#### Padding numbers

```python
'{:4d}'.format(42)
42
'{:06.2f}'.format(3.141592653589793)
003.14
print('{:.0f}'.format(x))
```

For integer values providing a precision doesn't make much sense and is actually forbidden in the new style (it will result in a ValueError)

```python
'{:04d}'.format(42)
0042
```

#### Signed numbers

```python
'{:+d}'.format(42)
+42
```

Use a space character to indicate that negative numbers should be prefixed with a minus symbol and a leading space should be used for positive ones.

```python
'{: d}'.format((- 23))
-23

'{: d}'.format(42)
42

'{:=5d}'.format((- 23))
- 23

'{:=+5d}'.format(23)
- 23
```

#### Named placeholders

```python
data = {'first': 'Hodor', 'last': 'Hodor!'}

'{first} {last}'.format(**data)
Hodor Hodor!

'{first} {last}'.format(first='Hodor', last='Hodor!')
Hodor Hodor!
```

#### Getitem & getattr

```python
person = {'first': 'Jean-Luc', 'last': 'Picard'}

'{p[first]} {p[last]}'.format(p=person)
Jean-Luc Picard

data = [4, 8, 15, 16, 23, 42]

'{d[4]} {d[5]}'.format(d=data)
23 42
```

#### Datetime

```python
from datetime import datetime
'{:%Y-%m-**%d** %H:%M}'.format(datetime(2001, 2, 3, 4, 5))
2001-02-03 04:05
```

#### Parametrized formats

Parametrized alignment and width

```python
'{:{align}{width}}'.format('test', align='^', width='10')
test
```

Parametrized precision

```python
'{:.{prec}} = {:.{prec}f}'.format('Gibberish', 2.7182, prec=3)
Gib = 2.718
```

Width and precision

```python
'{:{width}.{prec}f}'.format(2.7182, width=5, prec=2)
2.72
'{:{prec}} = {:{prec}}'.format('Gibberish', 2.7182, prec='.3')
Gib = 2.72
```

datetime

```python
from datetime import datetime
dt = datetime(2001, 2, 3, 4, 5)
'{:{dfmt} {tfmt}}'.format(dt, dfmt='%Y-%m-**%d**', tfmt='%H:%M')
2001-02-03 04:05
```

Positional arguments

```python
'{:{}{}{}.{}}'.format(2.7182818284, '>', '+', 10, 3)
+2.72
```

Positional + keyword arguments

```python
'{:{}{sign}{}.{}}'.format(2.7182818284, '>', 10, 3, sign='+')
+2.72
```

#### Print formats for other numbers

```python
print('{0:d}'.format(5)) #decimal
print('{0:f}'.format(5)) #float
print('{0:b}'.format(5)) #binary
print('{0:x}'.format(15)) #hexadecimal
```

#### Passing parameters

```python
A = deepak
B = sood
"Hello %s %s!" %(A, B) [Should be passed as tuple for more than one arguments)
```

#### Strings are immutable, but can be altered using following approaches

- One solution is to convert the string to a list and then change the value.

```python
>>> string = "abracadabra"
>>> l = list(string)
>>> l[5] = 'k'
>>> string = ''.join(l)
>>> print string
Abrackdabra
```

- Another approach is to slice the string and join it back.

```python
>>> string = string[:5] + "k" + string[6:]
>>> print string
Abrackdabra
```

#### Regex for finding sub_string inside string with overlapping

```python
Matches = re.findall('(?='+sub_string+')', string)
len(Matches)
```

#### TextWrap

[textwrap.wrap()](https://docs.python.org/2/library/textwrap.html#textwrap.wrap)

The *wrap()* function wraps a single paragraph in text (a string) so that every line is *width*characters long at most.

It returns a list of output lines.

```python
>>> import textwrap
>>> string = "This is a very very very very very long string."
>>> print textwrap.wrap(string,8)
['This is', 'a very', 'very', 'very', 'very', 'very', 'long', 'string.']
```

[textwrap.fill()](https://docs.python.org/2/library/textwrap.html#textwrap.fill)

The *fill()* function wraps a single paragraph in text and returns a single string containing the wrapped paragraph.

```python
>>> import textwrap
>>> string = "This is a very very very very very long string."
>>> print textwrap.fill(string,8)
This is
a very
very
very
very
very
long
string.
```

#### `dec=int(input("Enter a decimal number:"))`

```python
print(bin(dec),"inbinary.")
print(oct(dec),"inoctal.")
print(hex(dec),"inhexadecimal."
```

#### Ascii to number and vice versa

```python
>>> ord('a')
97
>>> chr(97)
'a'
>>> chr(ord('a') + 3)
'd'
```

#### Formatting string

```python
def __repr__(self):
    return f'Pizza({self.ingredients!r})'

>>> Pizza(['cheese', 'tomatoes'])
Pizza(['cheese', 'tomatoes'])
```

This is used to override **repr** that prints the object instance when printed

#### **String slicing**

Python also allows a form of indexing syntax that extracts substrings from a string, known as string slicing. Ifsis a string, an expression of the forms[m:n]returns the portion ofsstarting with positionm, and up to but not including positionn

Omitting both indices returns the original string, in its entirety. Literally. It's not a copy, it's a reference to the original string

```python
>>> s[:] is s
True
```

Negative indices can be used with slicing as well.-1refers to the last character -2 the second-to-last, and so on, just as with simple indexing. The diagram below shows how to slice the substring'oob'from the string'foobar'using both positive and negative indices:

![String index 3](media/Strings-image1.png)

```python
>>> s = 'foobar'

>>> s[-5:-2]
'oob'
>>> s[1:4]
'oob'
>>> s[-5:-2] == s[1:4]
True

string = string[:-3] (removes last 3 digits from string)
```

## Stride

Adding an additional:and a third index designates a stride (also called a step), which indicates how many characters to jump after retrieving each character in the slice.

For example, for the string'foobar', the slice0:6:2starts with the first character and ends with the last character (the whole string), and every second character is skipped. This is shown in the following diagram:

![image](media/Strings-image2.png)

Similarly,1:6:2specifies a slice starting with the second character (index1) and ending with the last character, and again the stride value2causes every other character to be skipped:

![image](media/Strings-image3.png)

You can specify a negative stride value as well, in which case Python steps backward through the string. In that case, the starting/first index should be greater than the ending/second index:

```python
>>> s = 'foobar'
>>> s[5:0:-2]
'rbo'
```

In the above example,5:0:-2means "start at the last character and step backward by2, up to but not including the first character."

When you are stepping backward, if the first and second indices are omitted, the defaults are reversed in an intuitive way: the first index defaults to the end of the string, and the second index defaults to the beginning. Here is an example:

```python
>>> s = '12345' * 5
>>> s
'1234512345123451234512345'
>>> s[::-5]
'55555'
```

This is a common paradigm for reversing a string:

```python
>>> s = 'If Comrade Napoleon says it, it must be right.'
>>> s[::-1]
'.thgir eb tsum ti ,ti syas noelopaN edarmoC fI'
```

Example

What is the slice expression that gives every third character of strings, starting with the last character and proceeding backward to the first?

`s[::-3]`

#### DocString

`r""" """`

r is used to create a raw string if there are special characters inside the docstring

#### Remove all punctuations from a given string

`Ex - document = document.translate(str.maketrans('','',string.punctuation))`

## Sluggify a string

```python
translate_table = {ord(char): u'' **for** char **in** non_url_safe}
non_url_safe_regex = re.compile(
r'[{}]'.format(''.join(re.escape(x) **for** x **in** non_url_safe)))
```

## def _slugify2(self, text)

```python
text = text.translate(self.translate_table)
text = u'_'.join(text.split())
```

## return text

<https://www.peterbe.com/plog/fastest-python-function-to-slugify-a-string>

## References

Python format specification mini language are used to format strings

<https://docs.python.org/3.6/library/string.html#format-specification-mini-language>

Python string formatters

<https://www.digitalocean.com/community/tutorials/how-to-use-string-formatters-in-python-3>

<https://pyformat.info>

<https://realpython.com/python-encodings-guide>
