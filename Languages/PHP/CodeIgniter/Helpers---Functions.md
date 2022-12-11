# Helpers / Functions

Created: 2020-02-09 13:11:29 +0500

Modified: 2020-09-04 00:36:07 +0500

---

As the name suggests, it will help you build your system. It is divided into small functions to serve different functionality. A number of helpers are available in CodeIgniter, which are listed in the table below. We can build our own helpers too.



Helpers are typically stored in yoursystem/helpers, orapplication/helpers directory. Custom helpers are stored inapplication/helpersdirectory and systems' helpers are stored insystem/helpersdirectory. CodeIgniter will look first in yourapplication/helpers directory. If the directory does not exist or the specified helper is not located, CodeIgniter will instead, look in your globalsystem/helpers/ directory. Each helper, whether it is custom or system helper, must be loaded before using it.



There are**URL Helpers**, that assist in creating links, there are**Form Helpers**that help you create form elements,**Text Helpers**perform various text formatting routines,**Cookie Helpers**set and read cookies,**File Helpers**help you deal with files, etc.



<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 89%" />
</colgroup>
<thead>
<tr class="header">
<th>S.N.</th>
<th>Helper Name &amp; Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td><p>Array Helper</p>
<p>The Array Helper file contains functions that assist in working with arrays.</p></td>
</tr>
<tr class="even">
<td>2</td>
<td><p>CAPTCHA Helper</p>
<p>The CAPTCHA Helper file contains functions that assist in creating CAPTCHA images.</p></td>
</tr>
<tr class="odd">
<td>3</td>
<td><p>Cookie Helper</p>
<p>The Cookie Helper file contains functions that assist in working with cookies.</p></td>
</tr>
<tr class="even">
<td>4</td>
<td><p>Date Helper</p>
<p>The Date Helper file contains functions that help you work with dates.</p></td>
</tr>
<tr class="odd">
<td>5</td>
<td><p>Directory Helper</p>
<p>The Directory Helper file contains functions that assist in working with directories.</p></td>
</tr>
<tr class="even">
<td>6</td>
<td><p>Download Helper</p>
<p>The Download Helper lets you download data to your desktop.</p></td>
</tr>
<tr class="odd">
<td>7</td>
<td><p>Email Helper</p>
<p>The Email Helper provides some assistive functions for working with Email. For a more robust email solution, see CodeIgniter’s Email Class.</p></td>
</tr>
<tr class="even">
<td>8</td>
<td><p>File Helper</p>
<p>The File Helper file contains functions that assist in working with files.</p></td>
</tr>
<tr class="odd">
<td>9</td>
<td><p>Form Helper</p>
<p>The Form Helper file contains functions that assist in working with forms.</p></td>
</tr>
<tr class="even">
<td>10</td>
<td><p>HTML Helper</p>
<p>The HTML Helper file contains functions that assist in working with HTML.</p></td>
</tr>
<tr class="odd">
<td>11</td>
<td><p>Inflector Helper</p>
<p>The Inflector Helper file contains functions that permits you to change words to plural, singular, camel case, etc.</p></td>
</tr>
<tr class="even">
<td>12</td>
<td><p>Language Helper</p>
<p>The Language Helper file contains functions that assist in working with language files.</p></td>
</tr>
<tr class="odd">
<td>13</td>
<td><p>Number Helper</p>
<p>The Number Helper file contains functions that help you work with numeric data.</p></td>
</tr>
<tr class="even">
<td>14</td>
<td><p>Path Helper</p>
<p>The Path Helper file contains functions that permits you to work with file paths on the server.</p></td>
</tr>
<tr class="odd">
<td>15</td>
<td><p>Security Helper</p>
<p>The Security Helper file contains security related functions.</p></td>
</tr>
<tr class="even">
<td>16</td>
<td><p>Smiley Helper</p>
<p>The Smiley Helper file contains functions that let you manage smileys (emoticons).</p></td>
</tr>
<tr class="odd">
<td>17</td>
<td><p>String Helper</p>
<p>The String Helper file contains functions that assist in working with strings.</p></td>
</tr>
<tr class="even">
<td>18</td>
<td><p>Text Helper</p>
<p>The Text Helper file contains functions that assist in working with text.</p></td>
</tr>
<tr class="odd">
<td>19</td>
<td><p>Typography Helper</p>
<p>The Typography Helper file contains functions that help your format text in semantically relevant ways.</p></td>
</tr>
<tr class="even">
<td>20</td>
<td><p>URL Helper</p>
<p>The URL Helper file contains functions that assist in working with URLs.</p></td>
</tr>
<tr class="odd">
<td>21</td>
<td><p>XML Helper</p>
<p>The XML Helper file contains functions that assist in working with XML data.</p></td>
</tr>
</tbody>
</table>



**Loading a Helper**

$this->load->helper('name');



Where name is the name of the helper. For example, if you want to load the URL Helper, then it can be loaded as −

$this->load->helper('url');



<https://www.tutorialspoint.com/codeigniter/codeigniter_basic_concepts.htm>



**Global Functions and Constants**
-   [**Global Functions**](https://codeigniter.com/user_guide/general/common_functions.html#global-functions)
    -   [**Service Accessors**](https://codeigniter.com/user_guide/general/common_functions.html#service-accessors)
        -   cache([$key])
        -   env($key[,$default=null])
        -   esc($data,$context='html'[,$encoding])
        -   helper($filename)
        -   lang($line[,$args[,$locale]])
        -   model($name[,$getShared = true[,&$conn = null]])
        -   old($key[,$default = null[,$escape = 'html']])
        -   session([$key])
        -   timer([$name])
        -   view($name[,$data[,$options]])
        -   view_cell($library[,$params = null[,$ttl = 0[,$cacheName = null]]])


-   [**Miscellaneous Functions**](https://codeigniter.com/user_guide/general/common_functions.html#miscellaneous-functions)
    -   app_timezone()
    -   csrf_token()
    -   csrf_header()
    -   csrf_hash()
    -   csrf_field()
    -   csrf_meta()
    -   force_https($duration = 31536000[,$request = null[,$response = null]])
    -   function_usable($function_name)
    -   is_cli()
    -   is_really_writable($file)
    -   log_message($level,$message[,$context])
    -   **redirect(string $uri)**

// Go back to the previous page
return redirect()->back();

// Go to specific UI
**return redirect()->to('/admin');**

// Go to a named/reverse-routed URI
return redirect()->route('named_route');

// Keep the old input values upon redirect so they can be used by the `old()` function
return redirect()->back()->withInput();

// Set a flash message
return redirect()->back()->with('foo', 'message');

// Copies all cookies from global response instance
return redirect()->back()->withCookies();

// Copies all headers from the global response instance
return redirect()->back()->withHeaders();


-   remove_invisible_characters($str[,$urlEncoded = TRUE])
-   route_to($method[,...$params])
-   service($name[,...$params])
-   single_service($name[,...$params])
-   slash_item($item)
-   stringify_attributes($attributes[,$js])


-   [**Global Constants**](https://codeigniter.com/user_guide/general/common_functions.html#global-constants)
    -   [**Core Constants**](https://codeigniter.com/user_guide/general/common_functions.html#core-constants)
        -   constant APPPATH
        -   constant ROOTPATH
        -   constant SYSTEMPATH
        -   constant FCPATH
        -   constant WRITEPATH


-   [**Time Constants**](https://codeigniter.com/user_guide/general/common_functions.html#time-constants)
    -   constant SECOND
    -   constant MINUTE
    -   constant HOUR
    -   constant DAY
    -   constant WEEK
    -   constant MONTH
    -   constant YEAR
    -   constant DECADE



<https://codeigniter.com/user_guide/general/common_functions.html>
