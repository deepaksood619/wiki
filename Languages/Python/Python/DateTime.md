# DateTime

Created: 2017-11-18 17:34:35 +0500

Modified: 2021-05-07 11:23:41 +0500

---

## Concepts

1. **Tick**
2. **TimeTuple**

## Modules -

1. **Time**
2. **Datetime**
3. **Pytz**
4. **Dateutil**
5. **Calendar**

### **Time -**

```python
Import time

Time.time() - Gives current time (in number of ticks since 12:00am, January 1, 1970)
```

## Time a running process

```python
 import time
 start_time = time.time()
 end_time = time.time()
 print("time taken = %4.4f seconds" % (end_time-start_time))

 start = time.perf_counter()
 elapsed = time.perf_counter()- start
    print(f"finished in {elapsed:.02f}s")
```

## Python Timers (To monitor performance)

- [monotonic()](https://docs.python.org/3/library/time.html#time.monotonic)
- [perf_counter()](https://docs.python.org/3/library/time.html#time.perf_counter)
- [process_time()](https://docs.python.org/3/library/time.html#time.process_time)
- [time()](https://docs.python.org/3/library/time.html#time.time)
- thread_time()

<https://realpython.com/python-timer>

2. **DateTime**

There are two kinds of date and time objects: "naive" and "aware".

a.  An aware object has sufficient knowledge of applicable algorithmic and political time adjustments, such as time zone and daylight saving time information, to locate itself relative to other aware objects. An aware object is used to represent a specific moment in time that is not open to interpretation

b.  A naive object does not contain enough information to unambiguously locate itself relative to other date/time objects. Whether a naive object represents Coordinated Universal Time (UTC), local time, or time in some other timezone is purely up to the program, just like it is up to the program whether a particular number represents metres, miles, or mass. Naive objects are easy to understand and to work with, at the cost of ignoring some aspects of reality.

i.  Class datetime.date

ii. Class datetime.time

iii. Class datetime.datetime

iv. Class datetime.timedelta

v.  Class datetime.tzinfo

vi. Class datetime.timezone

Objects of these types are immutable.

Objects of the date type are always naïve

## 2.1. Date Objects

## Ex -

```python
    Today = date.today()
    Yesterday = date.today() - timedelta(-1)

    Object calling - datetime.datetime.now().date() [Gives today's date]
    datetime.datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
    datetime.strptime('2020-02-01', '%Y-%m-%d')

    cur_date = datetime.today().strftime("%Y-%m-%d %H:%M:%S")
```

## 2.2. Date in ISOFormat

```python
from datetime import datetime

print(datetime.now().isoformat())

'2018-03-07T10:09:40.227229'
```

## strftime format codes

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 62%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Directive</strong></th>
<th><strong>Meaning</strong></th>
<th><strong>Example</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>%a</td>
<td>Weekday as locale’s abbreviated name.</td>
<td><p>Sun, Mon, …, Sat (en_US);</p>
<p>So, Mo, …, Sa (de_DE)</p></td>
</tr>
<tr class="even">
<td>%A</td>
<td>Weekday as locale’s full name.</td>
<td><p>Sunday, Monday, …, Saturday (en_US);</p>
<p>Sonntag, Montag, …, Samstag (de_DE)</p></td>
</tr>
<tr class="odd">
<td>%w</td>
<td>Weekday as a decimal number, where 0 is Sunday and 6 is Saturday.</td>
<td>0, 1, …, 6</td>
</tr>
<tr class="even">
<td>%d</td>
<td>Day of the month as a zero-padded decimal number.</td>
<td>01, 02, …, 31</td>
</tr>
<tr class="odd">
<td>%b</td>
<td>Month as locale’s abbreviated name.</td>
<td><p>Jan, Feb, …, Dec (en_US);</p>
<p>Jan, Feb, …, Dez (de_DE)</p></td>
</tr>
<tr class="even">
<td>%B</td>
<td>Month as locale’s full name.</td>
<td><p>January, February, …, December (en_US);</p>
<p>Januar, Februar, …, Dezember (de_DE)</p></td>
</tr>
<tr class="odd">
<td>%m</td>
<td>Month as a zero-padded decimal number.</td>
<td>01, 02, …, 12</td>
</tr>
<tr class="even">
<td>%y</td>
<td>Year without century as a zero-padded decimal number.</td>
<td>00, 01, …, 99</td>
</tr>
<tr class="odd">
<td>%Y</td>
<td>Year with century as a decimal number.</td>
<td>0001, 0002, …, 2013, 2014, …, 9998, 9999</td>
</tr>
<tr class="even">
<td>%H</td>
<td>Hour (24-hour clock) as a zero-padded decimal number.</td>
<td>00, 01, …, 23</td>
</tr>
<tr class="odd">
<td>%I</td>
<td>Hour (12-hour clock) as a zero-padded decimal number.</td>
<td>01, 02, …, 12</td>
</tr>
<tr class="even">
<td>%p</td>
<td>Locale’s equivalent of either AM or PM.</td>
<td><p>AM, PM (en_US);</p>
<p>am, pm (de_DE)</p></td>
</tr>
<tr class="odd">
<td>%M</td>
<td>Minute as a zero-padded decimal number.</td>
<td>00, 01, …, 59</td>
</tr>
<tr class="even">
<td>%S</td>
<td>Second as a zero-padded decimal number.</td>
<td>00, 01, …, 59</td>
</tr>
<tr class="odd">
<td>%f</td>
<td>Microsecond as a decimal number, zero-padded on the left.</td>
<td>000000, 000001, …, 999999</td>
</tr>
<tr class="even">
<td>%z</td>
<td>UTC offset in the form±HHMM [SS [.ffffff]](empty string if the object is naive).</td>
<td>(empty), +0000, -0400, +1030, +063415, -030712.345216</td>
</tr>
<tr class="odd">
<td>%Z</td>
<td>Time zone name (empty string if the object is naive).</td>
<td>(empty), UTC, EST, CST</td>
</tr>
<tr class="even">
<td>%j</td>
<td>Day of the year as a zero-padded decimal number.</td>
<td>001, 002, …, 366</td>
</tr>
<tr class="odd">
<td>%U</td>
<td>Week number of the year (Sunday as the first day of the week) as a zero padded decimal number. All days in a new year preceding the first Sunday are considered to be in week 0.</td>
<td>00, 01, …, 53</td>
</tr>
<tr class="even">
<td>%W</td>
<td>Week number of the year (Monday as the first day of the week) as a decimal number. All days in a new year preceding the first Monday are considered to be in week 0.</td>
<td>00, 01, …, 53</td>
</tr>
<tr class="odd">
<td>%c</td>
<td>Locale’s appropriate date and time representation.</td>
<td><p>Tue Aug 16 21:30:00 1988 (en_US);</p>
<p>Di 16 Aug 21:30:00 1988 (de_DE)</p></td>
</tr>
<tr class="even">
<td>%x</td>
<td>Locale’s appropriate date representation.</td>
<td><p>08/16/88 (None);</p>
<p>08/16/1988 (en_US);</p>
<p>16.08.1988 (de_DE)</p></td>
</tr>
<tr class="odd">
<td>%X</td>
<td>Locale’s appropriate time representation.</td>
<td><p>21:30:00 (en_US);</p>
<p>21:30:00 (de_DE)</p></td>
</tr>
<tr class="even">
<td>%%</td>
<td>A literal'%'character.</td>
<td>%</td>
</tr>
</tbody>
</table>

Several additional directives not required by the C89 standard are included for convenience. These parameters all correspond to ISO 8601 date values.

| **Directive** | **Meaning**                                                                                                       | **Example**                                  |
|----------|-------------------------------------------|-------------------|
| %G            | ISO 8601 year with century representing the year that contains the greater part of the ISO week (%V).             | 0001, 0002, ..., 2013, 2014, ..., 9998, 9999 |
| %u            | ISO 8601 weekday as a decimal number where 1 is Monday.                                                           | 1, 2, ..., 7                                 |
| %V            | ISO 8601 week as a decimal number with Monday as the first day of the week. Week 01 is the week containing Jan 4. | 01, 02, ..., 53                              |

<https://docs.python.org/3/library/datetime.html>
