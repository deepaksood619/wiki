# Bash Metacharacters

Created: 2019-09-06 16:50:11 +0500

Modified: 2019-09-06 16:50:35 +0500

---

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Symbol:</strong></th>
<th><strong>Meaning and Usage examples:</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>&lt;</strong></td>
<td><p>Redirection: Get input for the command to the left from the file listed to the right of this symbol. Example:</p>
<p>sort &lt; filename.txt # This will print out the contents of filename.txt with the lines sorted.</p></td>
</tr>
<tr class="even">
<td><strong>&gt;</strong></td>
<td><p>Redirection: Send the output of the command on the left into the file named on the right of this symbol. If the file does not exist, create it. If it does exist, overwrite it (erase everything in it and put this output as the new content). Example:</p>
<p>cal &gt; filename.txt # This puts a current calendar into filename.txt</p></td>
</tr>
<tr class="odd">
<td><strong>&gt;&gt;</strong></td>
<td><p>Redirection: Send the output of the command on the left to the<em>end</em>of the file named on the right of this symbol. If the file does not exist, it will be created. If it does exist, it will be appended. Example:</p>
<p>date &gt;&gt; filename.txt # This adds the current date and time to the end of filename.txt</p></td>
</tr>
<tr class="even">
<td><strong>|</strong></td>
<td><p>Pipe: This sends the output of the command to the left as the input to the command on the right of the symbol. Example:</p>
<p>cat filename.txt | grep it # This will print the lines in filename.txt that contain the string "it"</p></td>
</tr>
<tr class="odd">
<td><strong>?</strong></td>
<td><p>Matching. This symbol matches any single character. Example:</p>
<p>ls e?.txt # This will list all files that start with e, end with .txt and have any 1 character inbetween (like e2.txt)</p></td>
</tr>
<tr class="even">
<td><strong>*</strong></td>
<td><p>Matching. This symbol matches any number of any characters. Example:</p>
<p>ls e*.txt # This will list all files that start with e, end with .txt and have any characters inbetween (like e24ldf.txt)</p></td>
</tr>
<tr class="odd">
<td><strong>[]</strong></td>
<td><p>Matching, listing. One of the characters within the square brackets must be matched. Example:</p>
<p>ls -l e [abc].txt # This will give a long listing of ea.txt, eb.txt and/or ec.txt</p></td>
</tr>
<tr class="even">
<td><strong>$</strong></td>
<td><p>Denotes that a string is a variable name. Not used when assigning a variable. Example:</p>
<p>prompt: my_variable="this string" # Assigning the variable</p>
<p>prompt: echo $my_variable # Referring to the contents of the variable</p>
<p>Also used in parameter substitution to check if a variable is defined and determine a value. Example:</p>
<p>echo ${my_variable-other} # Print the value of my_variable if defined, otherwise print "other"</p></td>
</tr>
<tr class="odd">
<td><strong></strong></td>
<td><p>Escape. Ignore the shell's special meaning for the character after this symbol. Treat it as though it is just an ordinary character. Example:</p>
<p>echo "I have $300.00" # Print the $ instead of using it to look up a variable name.</p>
<p>Also used to put commands on mulitple lines. Example:</p>
<p>prompt1: cat filename.txt  # Don't run yet...</p>
<p>prompt2: date  # Still don't do anything...</p>
<p>prompt2: cal # No backslash on the last one, so run all the commands</p></td>
</tr>
<tr class="even">
<td><strong>()</strong></td>
<td><p>Grouping commands. If you want to run two commands and send their output to the same place, put them in a group together. Example:</p>
<p>(cal; date) &gt; filename.txt # Put a calendar and the date in filename.txt</p></td>
</tr>
<tr class="odd">
<td><strong>{}</strong></td>
<td><p>Used in special cases for variables with the $. One use is in parameter substitution (see the $ definition, above), the other is in arrays. Example:</p>
<p>numbers=( 1 2 3 4 5 )</p>
<p>echo ${numbers [1]}</p></td>
</tr>
<tr class="even">
<td><strong>"</strong></td>
<td><p>Quoting. Used to group strings that contain spaces and other special characters. Example:</p>
<p>my_variable="This is a test." # Assign a string to the variable</p></td>
</tr>
<tr class="odd">
<td><strong>'</strong></td>
<td><p>Quoting. Used to prevent the shell from interpretting special characters within the quoted string. Example:</p>
<p>my_variable='This is a backslash: ' # Assign the string to the variable</p></td>
</tr>
<tr class="even">
<td><strong>`</strong></td>
<td><p>Unquoting. Used within a quoted string to force the shell to interpret and run the command between the backticks. Example:</p>
<p>my_variable="This is the date: `date`" # Store the string AND the output of the date command</p></td>
</tr>
<tr class="odd">
<td><strong>&amp;&amp;</strong></td>
<td><p>Run the command to the right of the double-ampersand ONLY IF the command on the left succeeded in running. Example:</p>
<p>mkdir stuff &amp;&amp; echo "Made the directory" # Print a message on success of the mkdir command</p></td>
</tr>
<tr class="even">
<td><strong>||</strong></td>
<td><p>Run the command on the right of the double pipe ONLY IF the command on the left failed. Example:</p>
<p>mkdir stuff || echo "mkdir failed!" # Print a message on failure of the mkdir command</p></td>
</tr>
<tr class="odd">
<td><strong>&amp;</strong></td>
<td><p>Run the process in the background, allowing you to continue your work on the command line. Example:</p>
<p>john /etc/passwd &amp; # Try to crack the passwords - this takes a couple hours, so do it in the background.</p>
<p>Also used in redirection when copying one stream into the same location as another stream. Example:</p>
<p>cat filename.txt &gt; file2.txt 2&gt;&amp;1 # Send Standard Error (2) to the file2.txt where Standard Output (1) is going</p></td>
</tr>
<tr class="even">
<td><strong>;</strong></td>
<td><p>Allows you to list multiple commands on a single line, separated by this character. Example:</p>
<p>date;john passwd; date # Print the date, crack the passwords and print the date again afterwards - cheap benchmarking</p></td>
</tr>
<tr class="odd">
<td><strong>=</strong></td>
<td><p>Assignment. Set the variable named on the left to the value presented on the right. Example:</p>
<p>my_variable="Hello World!" # Note that there is NO SPACE between the variable name and the string.</p></td>
</tr>
</tbody>
</table>

<http://www.angelfire.com/mi/genastorhotz/reality/computers/linux/bashmetachars.html>
