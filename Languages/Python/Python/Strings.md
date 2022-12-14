# Strings

Created: 2017-11-15 11:39:04 +0500

Modified: 2021-06-30 00:10:10 +0500

---

**fstrings**

**# equal operator inside fstrings, from python3.8**

num_value = 2

print(f"{num_value = }")

print(f"{num_value % 2 = }")

>>> num_value = 2

>>> num_value = 0



now = datetime.datetime.utcnow()

print(f'{now=:Y-%m-%d}')



**String Constants**

1.  string.ascii_letters

2.  string.ascii_lowercase

3.  string.ascii_uppercase

4.  string.digits

5.  string.hexdigits

6.  string.octdigits

7.  string.punctuation

8.  string.printable

9.  string.whitespace



**Built-in String Methods**



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
<tr class="odd">
<td>2</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_center.htm"><strong>center(width, fillchar)</strong></a></p>
<p>Returns a space-padded string with the original string centered to a total of width columns.</p>
<p>&gt;&gt;&gt; width = 20<br />
&gt;&gt;&gt; print 'HackerRank'.center(width,'-')<br />
-----HackerRank-----</p></td>
</tr>
<tr class="even">
<td>3</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_count.htm"><strong>count(str, beg= 0,end=len(string))</strong></a></p>
<p>Counts how many times str occurs in string or in a substring of string if starting index beg and ending index end are given.</p></td>
</tr>
<tr class="odd">
<td>4</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_decode.htm"><strong>decode(encoding='UTF-8',errors='strict')</strong></a></p>
<p>Decodes the string using the codec registered for encoding. encoding defaults to the default string encoding.</p></td>
</tr>
<tr class="even">
<td>5</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_encode.htm"><strong>encode(encoding='UTF-8',errors='strict')</strong></a></p>
<p>Returns encoded string version of string; on error, default is to raise a ValueError unless errors is given with 'ignore' or 'replace'.</p></td>
</tr>
<tr class="odd">
<td>6</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_endswith.htm"><strong>endswith(suffix, beg=0, end=len(string))</strong></a></p>
<p>Determines if string or a substring of string (if starting index beg and ending index end are given) ends with suffix; returns true if so and false otherwise.</p></td>
</tr>
<tr class="even">
<td>7</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_expandtabs.htm"><strong>expandtabs(tabsize=8)</strong></a></p>
<p>Expands tabs in string to multiple spaces; defaults to 8 spaces per tab if tabsize not provided.</p></td>
</tr>
<tr class="odd">
<td>8</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_find.htm"><strong>find(str, beg=0 end=len(string))</strong></a></p>
<p>Determine if str occurs in string or in a substring of string if starting index beg and ending index end are given returns index if found and -1 otherwise.</p></td>
</tr>
<tr class="even">
<td>9</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_index.htm"><strong>index(str, beg=0, end=len(string))</strong></a></p>
<p>Same as find(), but raises an exception if str not found.</p></td>
</tr>
<tr class="odd">
<td>10</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_isalnum.htm"><strong>isalnum()</strong></a></p>
<p>Returns true if string has at least 1 character and all characters are alphanumeric and false otherwise.</p></td>
</tr>
<tr class="even">
<td>11</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_isalpha.htm"><strong>isalpha()</strong></a></p>
<p>Returns true if string has at least 1 character and all characters are alphabetic and false otherwise.</p></td>
</tr>
<tr class="odd">
<td>12</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_isdigit.htm"><strong>isdigit()</strong></a></p>
<p>Returns true if string contains only digits and false otherwise. (works only for positive natural numbers)</p>
<p>Ex -</p>
<p>&gt;&gt;&gt;'1234'.isdigit()</p>
<p>True</p>
<p>&gt;&gt;&gt;'-1234'.isdigit()</p>
<p>False</p></td>
</tr>
<tr class="even">
<td>13</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_islower.htm"><strong>islower()</strong></a></p>
<p>Returns true if string has at least 1 cased character and all cased characters are in lowercase and false otherwise.</p></td>
</tr>
<tr class="odd">
<td>14</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_isnumeric.htm"><strong>isnumeric()</strong></a></p>
<p>Returns true if a unicode string contains only numeric characters and false otherwise.</p></td>
</tr>
<tr class="even">
<td>15</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_isspace.htm"><strong>isspace()</strong></a></p>
<p>Returns true if string contains only whitespace characters and false otherwise.</p></td>
</tr>
<tr class="odd">
<td>16</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_istitle.htm"><strong>istitle()</strong></a></p>
<p>Returns true if string is properly "titlecased" and false otherwise.</p></td>
</tr>
<tr class="even">
<td>17</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_isupper.htm"><strong>isupper()</strong></a></p>
<p>Returns true if string has at least one cased character and all cased characters are in uppercase and false otherwise.</p></td>
</tr>
<tr class="odd">
<td>18</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_join.htm"><strong>join(seq)</strong></a></p>
<p>Merges (concatenates) the string representations of elements in sequence seq into a string, with separator string.</p>
<p>s = "-";<br />
seq = ("a", "b", "c"); # This is sequence of strings.<br />
print s.join( seq )</p>
<p></p>
<p>Also lists can also be joined</p>
<p><strong>Most effecient way to join strings</strong></p>
<p><a href="https://waymoot.org/home/python_string/">https://waymoot.org/home/python_string/</a></p></td>
</tr>
<tr class="even">
<td>19</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_len.htm"><strong>len(string)</strong></a></p>
<p>Returns the length of the string</p></td>
</tr>
<tr class="odd">
<td>20</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_ljust.htm"><strong>ljust(width[, fillchar])</strong></a></p>
<p>Returns a space-padded string with the original string left-justified to a total of width columns.</p>
<p>&gt;&gt;&gt; width = 20<br />
&gt;&gt;&gt; print 'HackerRank'.ljust(width,'-')<br />
HackerRank----------</p></td>
</tr>
<tr class="even">
<td>21</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_lower.htm"><strong>lower()</strong></a></p>
<p>Converts all uppercase letters in string to lowercase.</p></td>
</tr>
<tr class="odd">
<td>22</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_lstrip.htm"><strong>lstrip()</strong></a></p>
<p>Removes all leading whitespace in string.</p></td>
</tr>
<tr class="even">
<td>23</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_maketrans.htm"><strong>maketrans()</strong></a></p>
<p>Returns a translation table to be used in translate function.</p>
<p></p>
<p>Ex - document = document.translate(str.maketrans('','',string.punctuation))</p></td>
</tr>
<tr class="odd">
<td>24</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_max.htm"><strong>max(str)</strong></a></p>
<p>Returns the max alphabetical character from the string str.</p></td>
</tr>
<tr class="even">
<td>25</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_min.htm"><strong>min(str)</strong></a></p>
<p>Returns the min alphabetical character from the string str.</p></td>
</tr>
<tr class="odd">
<td>26</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_replace.htm"><strong>replace(old, new [, max])</strong></a></p>
<p>Replaces all occurrences of old in string with new or at most max occurrences if max given.</p></td>
</tr>
<tr class="even">
<td>27</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_rfind.htm"><strong>rfind(str, beg=0,end=len(string))</strong></a></p>
<p>Same as find(), but search backwards in string.</p></td>
</tr>
<tr class="odd">
<td>28</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_rindex.htm"><strong>rindex( str, beg=0, end=len(string))</strong></a></p>
<p>Same as index(), but search backwards in string.</p></td>
</tr>
<tr class="even">
<td>29</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_rjust.htm"><strong>rjust(width,[, fillchar])</strong></a></p>
<p>Returns a space-padded string with the original string right-justified to a total of width columns.</p>
<p>&gt;&gt;&gt; width = 20<br />
&gt;&gt;&gt; print 'HackerRank'.rjust(width,'-')<br />
----------HackerRank</p></td>
</tr>
<tr class="odd">
<td>30</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_rstrip.htm"><strong>rstrip()</strong></a></p>
<p>Removes all trailing whitespace of string.</p></td>
</tr>
<tr class="even">
<td>31</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_split.htm"><strong>split(str="", num=string.count(str))</strong></a></p>
<p>Splits string according to delimiter str (space if not provided) and returns list of substrings; split into at most num substrings if given.</p></td>
</tr>
<tr class="odd">
<td>32</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_splitlines.htm"><strong>splitlines( num=string.count('n'))</strong></a></p>
<p>Splits string at all (or num) NEWLINEs and returns a list of each line with NEWLINEs removed.</p></td>
</tr>
<tr class="even">
<td>33</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_startswith.htm"><strong>startswith(str, beg=0,end=len(string))</strong></a></p>
<p>Determines if string or a substring of string (if starting index beg and ending index end are given) starts with substring str; returns true if so and false otherwise.</p></td>
</tr>
<tr class="odd">
<td>34</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_strip.htm"><strong>strip([chars])</strong></a></p>
<p>Performs both lstrip() and rstrip() on string.</p></td>
</tr>
<tr class="even">
<td>35</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_swapcase.htm"><strong>swapcase()</strong></a></p>
<p>Inverts case for all letters in string. (Numbers ignored)</p></td>
</tr>
<tr class="odd">
<td>36</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_title.htm"><strong>title()</strong></a></p>
<p>Returns "titlecased" version of string, that is, all words begin with uppercase and the rest are lowercase.</p></td>
</tr>
<tr class="even">
<td>37</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_translate.htm"><strong>translate(table, deletechars="")</strong></a></p>
<p>Translates string according to translation table str(256 chars), removing those in the del string.</p>
<p></p>
<p>Ex - document = document.translate(str.maketrans('','',string.punctuation))</p></td>
</tr>
<tr class="odd">
<td>38</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_upper.htm"><strong>upper()</strong></a></p>
<p>Converts lowercase letters in string to uppercase.</p></td>
</tr>
<tr class="even">
<td>39</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_zfill.htm"><strong>zfill (width)</strong></a></p>
<p>Returns original string leftpadded with zeros to a total of width characters; intended for numbers, zfill() retains any sign given (less one zero).</p></td>
</tr>
<tr class="odd">
<td>40</td>
<td><p><a href="https://www.tutorialspoint.com/python/string_isdecimal.htm"><strong>isdecimal()</strong></a></p>
<p>Returns true if a unicode string contains only decimal characters and false otherwise.</p></td>
</tr>
</tbody>
</table>



1.  **String Formating**

'{} {}'.format('one', 'two')

'{} {}'.format(1, 2)

'Hello {}'.format('Deepak')

<https://pyformat.info/>


-   Positional Formating (Positional Arguments)

Also optional positional indexing (positional arguments) can be passed to strings' format

'{1} {0}'.format('one', 'two')


-   Keyword Formating (Keyword Arguments)

print("Sammy the {0} {1} a {pr}.".format("shark", "made", pr = "pull request"))



here pr is a named keyword argument



1.  Padding and aligning strings (default is left alignment)

Align Left - '{:>10}'.format('test')

test

Align Right - '{:10}'.format('test')

test

Alight left with custom padding character - '{:_<10}'.format('test')

test______

Center align - '{:^10}'.format('test')

test

'{:^6}'.format('zip') #When using center alignment where the length of the string leads to an uneven split of the padding characters the extra character will be placed on the right side

zip



2.  Truncating long strings

'{:.5}'.format('xylophone')

xylop



3.  Combining truncating and padding

'{:10.5}'.format('xylophone')

xylop



4.  Numbers

'{:d}'.format(42)

42

'{:f}'.format(3.141592653589793)

3.141593



5.  Padding numbers

'{:4d}'.format(42)

42

'{:06.2f}'.format(3.141592653589793)

003.14



print('{:.0f}'.format(x))



For integer values providing a precision doesn't make much sense and is actually forbidden in the new style (it will result in a ValueError)

'{:04d}'.format(42)

0042



6.  Signed numbers

'{:+d}'.format(42)

+42



Use a space character to indicate that negative numbers should be prefixed with a minus symbol and a leading space should be used for positive ones.

'{: d}'.format((- 23))

-23

'{: d}'.format(42)

42

'{:=5d}'.format((- 23))

- 23

'{:=+5d}'.format(23)

+ 23



7.  Named placeholders

data = {'first': 'Hodor', 'last': 'Hodor!'}

'{first} {last}'.format(**data)

Hodor Hodor!

'{first} {last}'.format(first='Hodor', last='Hodor!')

Hodor Hodor!



8.  Getitem & getattr

person = {'first': 'Jean-Luc', 'last': 'Picard'}

'{p[first]} {p[last]}'.format(p=person)

Jean-Luc Picard



data = [4, 8, 15, 16, 23, 42]

'{d[4]} {d[5]}'.format(d=data)

23 42



9.  Datetime

**from datetime import** datetime

'{:%Y-%m-**%d** %H:%M}'.format(datetime(2001, 2, 3, 4, 5))

2001-02-03 04:05



10. Parametrized formats

Parametrized alignment and width

'{:{align}{width}}'.format('test', align='^', width='10')

test

Parametrized precision

'{:.{prec}} = {:.{prec}f}'.format('Gibberish', 2.7182, prec=3)

Gib = 2.718

Width and precision

'{:{width}.{prec}f}'.format(2.7182, width=5, prec=2)

2.72

'{:{prec}} = {:{prec}}'.format('Gibberish', 2.7182, prec='.3')

Gib = 2.72

datetime

**from datetime import** datetime
dt = datetime(2001, 2, 3, 4, 5)

'{:{dfmt} {tfmt}}'.format(dt, dfmt='%Y-%m-**%d**', tfmt='%H:%M')

2001-02-03 04:05

Positional arguments

'{:{}{}{}.{}}'.format(2.7182818284, '>', '+', 10, 3)

+2.72

Positional + keyword arguments

'{:{}{sign}{}.{}}'.format(2.7182818284, '>', 10, 3, sign='+')

+2.72



11. Print formats for other numbers

print('{0:d}'.format(5)) #decimal

print('{0:f}'.format(5)) #float

print('{0:b}'.format(5)) #binary

print('{0:x}'.format(15)) #hexadecimal



2.  Passing parameters

**A = deepak**

**B = sood**

**"Hello %s %s!" %(A, B)** [Should be passed as tuple for more than one arguments)



3.  Strings are immutable, but can be altered using following approaches



a.  One solution is to convert the string to a list and then change the value.

>>> string = "abracadabra"
>>> l = list(string)
>>> l[5] = 'k'
>>> string = ''.join(l)
>>> print string
Abrackdabra



b.  Another approach is to slice the string and join it back.

>>> string = string[:5] + "k" + string[6:]
>>> print string
Abrackdabra



4.  Regex for finding sub_string inside string with overlapping

Matches = re.findall('(?='+sub_string+')', string)

len(Matches)



5.  TextWrap

[*textwrap.wrap()*](https://docs.python.org/2/library/textwrap.html#textwrap.wrap)

The*wrap()*function wraps a single paragraph in text (a string) so that every line is*width*characters long at most.

It returns a list of output lines.

>>> import textwrap
>>> string = "This is a very very very very very long string."
>>> print textwrap.wrap(string,8)
['This is', 'a very', 'very', 'very', 'very', 'very', 'long', 'string.']

[*textwrap.fill()*](https://docs.python.org/2/library/textwrap.html#textwrap.fill)

The*fill()*function wraps a single paragraph in text and returns a single string containing the wrapped paragraph.

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



6.  dec=int(input("Enteradecimalnumber:"))



**print**(bin(dec),"inbinary.")

**print**(oct(dec),"inoctal.")

**print**(hex(dec),"inhexadecimal."



7.  Ascii to number and vice versa

>>> ord('a')
97
>>> chr(97)
'a'
>>> chr(ord('a') + 3)
'd'



8.  Formatting string

def __repr__(self):

return f'Pizza({self.ingredients!r})'



>>> Pizza(['cheese', 'tomatoes'])

Pizza(['cheese', 'tomatoes'])



This is used to override __repr__ that prints the object instance when printed



9.  **String slicing**

Python also allows a form of indexing syntax that extracts substrings from a string, known as string slicing. Ifsis a string, an expression of the forms[m:n]returns the portion ofsstarting with positionm, and up to but not including positionn



**Omitting both indices returns the original string, in its entirety. Literally. It's not a copy, it's a reference to the original string**

>>> s[:] is s

**True**



Negative indices can be used with slicing as well.-1refers to the last character -2 the second-to-last, and so on, just as with simple indexing. The diagram below shows how to slice the substring'oob'from the string'foobar'using both positive and negative indices:

![String index 3](media/Strings-image1.png){width="4.041666666666667in" height="1.3541666666666667in"}

>>> s = 'foobar'

>>> s[-5:-2]
'oob'
>>> s[1:4]
'oob'
>>> s[-5:-2] == s[1:4]
True



string = string[:-3] (removes last 3 digits from string)



**Stride**

Adding an additional:and a third index designates a stride (also called a step), which indicates how many characters to jump after retrieving each character in the slice.



For example, for the string'foobar', the slice0:6:2starts with the first character and ends with the last character (the whole string), and every second character is skipped. This is shown in the following diagram:

![String stride 1](media/Strings-image2.png){width="4.322916666666667in" height="1.4583333333333333in"}



Similarly,1:6:2specifies a slice starting with the second character (index1) and ending with the last character, and again the stride value2causes every other character to be skipped:

![String stride 2](media/Strings-image3.png){width="4.34375in" height="1.4583333333333333in"}

You can specify a negative stride value as well, in which case Python steps backward through the string. In that case, the starting/first index should be greater than the ending/second index:

>>> s = 'foobar'
>>> s[5:0:-2]
'rbo'

In the above example,5:0:-2means "start at the last character and step backward by2, up to but not including the first character."



When you are stepping backward, if the first and second indices are omitted, the defaults are reversed in an intuitive way: the first index defaults to the end of the string, and the second index defaults to the beginning. Here is an example:

>>> s = '12345' * 5
>>> s
'1234512345123451234512345'
>>> s[::-5]
'55555'



This is a common paradigm for reversing a string:

>>> s = 'If Comrade Napoleon says it, it must be right.'
>>> s[::-1]
'.thgir eb tsum ti ,ti syas noelopaN edarmoC fI'



Example

What is the slice expression that gives every third character of strings, starting with the last character and proceeding backward to the first?

s[::-3]



10. DocString

r""" """

r is used to create a raw string if there are special characters inside the docstring



11. Remove all punctuations from a given string

Ex - document = document.translate(str.maketrans('','',string.punctuation))



**Sluggify a string**

translate_table = {ord(char): u'' **for** char **in** non_url_safe}
non_url_safe_regex = re.compile(
r'[{}]'.format(''.join(re.escape(x) **for** x **in** non_url_safe)))



**def** _slugify2(self, text):
text = text.translate(self.translate_table)
text = u'_'.join(text.split())
**return** text



<https://www.peterbe.com/plog/fastest-python-function-to-slugify-a-string>



**References**

Python format specification mini language are used to format strings

<https://docs.python.org/3.6/library/string.html#format-specification-mini-language>



Python string formatters

<https://www.digitalocean.com/community/tutorials/how-to-use-string-formatters-in-python-3>

<https://pyformat.info/>

<https://realpython.com/python-encodings-guide/>



