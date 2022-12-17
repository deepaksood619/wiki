# Others

Created: 2018-05-04 14:08:09 +0500

Modified: 2022-02-23 22:34:20 +0500

---

## Teamviewer

<https://www.teamviewer.com/en/download/mac-os>

Password - PHNlEudGPF6xX1jA

## Google Meet

CMD + D - microphone mute/unmute (MAC)

*6 - Phone Dial-in mute/unmute (Phone)

## Google Sheets / Docs

CMD + / - Shortcuts panel

CMD +  - Clear formatting

Codenvy - cloud workspaces for Dev teams

Eclipse Che

## Google Chrome

- Shift + / = show keyboard shortcuts on youtube
- Momentum (extension)
- CMD + Shift + F - Full Screen
- CMD + Shift + A - Search tabs

doc.new

sheet.new

## Chrome Devtools

## Speed up facebook videos

videos = document.getElementsByTagName("video");

for(var i = 0; i < videos.length; i++){

videos [i].playbackRate = 2;

}

## Other browsers

<https://sigmaos.com>

## Google Search

- Use thesite:search operator, Google will only show you the results from a specific website
- a country-specific search using thesite:search operator plus the TLD for that country. For example, if you want to look for naan recipes and get the information only from sites in India, the search would benaan recipes site:.in
- Following a hyphen-directly with a word is another Google Search operator, and this one tells Google to **exclude** whatever follows that hyphen from the search results.
- If you want to find results that use a very specific phrase, surround your search term in quotation marks to tell Google you only want to see results that use that exact phrase.
- **search for anything after:2020**
- **search for anything before:2020**
- **search for anything 2018..2020**
- **search for anything (A|B)C**
- **related:url**
- **cache:url**

| **Operator**         | **How to Use It**                                                                                                                                                                                                                                                      | **Examples**                                                                                                                                                                  |
|-----------|------------------------------------|--------------------------|
| * (Asterisk)        | Add the asterisk as a placeholder for an unknown word or fact                                                                                                                                                                                                          | Find quotes that start with "Life is like a":Life is like a *                                                                                                             |
| " (Quotation marks) | Look for an exact word or phrase by putting it in quotes                                                                                                                                                                                                               | Find pages that talk about the bookOne Hundred Years of Solitude: "One Hundred Years of Solitude"                                                                          |
| - (Hyphen)          | Use a hyphen before a word or site to exclude it from your search results                                                                                                                                                                                              | Omit Wikipedia pages from search results:-site:wikipedia.org. Narrow results to the band R.E.M., not rapid eye movement:R.E.M. -sleep                                       |
| .. (Two Periods)     | Separate numbers with two periods without spaces to search for numbers within that range                                                                                                                                                                               | Find phones that cost between $200 and $400:Android phone $200..$400. Find computer milestones that took place between 1950 and 2000:"computer milestones" 1950..2000 |
| allintitle:          | Use allintext:[search phrase] to find pages with all of those words in the title of the page                                                                                                                                                                         | Show pages that have both "Apple" and "notebook" in the title:allintitle:Apple notebook                                                                                  |
| allintext:           | Use allintext:[search phrase] to find pages with all of those words in the body of the page                                                                                                                                                                          | Show pages that mention Roth, IRA, and investments in the body:allintext:Roth IRA investments                                                                                |
| allinurl:            | Use allinurl:[search phrase] to find pages with all of those words in the URL                                                                                                                                                                                        | Show pages that have both "Microsoft" and "Surface" in the URL:allinurl:Microsoft Surface                                                                                |
| AROUND(n)            | Add AROUND(n) between two search terms to find pages where those terms are written on the page in close proximity. The number you choose in place ofnsets the maximum distance between the terms. This is useful for finding relationships between two search terms. | Find pages that mention Facebook and Microsoft in the same sentence or paragraph:Facebook AROUND(7) Microsoft                                                                |
| site:                | Use site:[URL] to limit search results to a specific website                                                                                                                                                                                                         | Find pages on Zapier that mention Trello:site:zapier.com trello                                                                                                              |
| related:             | Use related:[URL] to find sites similar to a specific website                                                                                                                                                                                                        | Find websites similar to Zapier:related:zapier.com                                                                                                                           |
| **filetype:**        | Use filetype:[suffix] to limit results to a certain file format, such as PDF or DOC.                                                                                                                                                                                 | Find keyboard shortcuts for Microsoft Office that are shared as PDF:filetype:pdf office keyboard shortcuts                                                                   |
| intitle:             | Use intitle:[search phrase] to search for pages that have at least one of your search words in the title                                                                                                                                                             | Show pages that have "Apple" or "notebook" or both in the title:intitle:Apple notebook                                                                                   |
| intext:              | Use intext:[search phrase] to search for pages that have at least one of your search words in the body of the page                                                                                                                                                   | Show pages that mention Roth, IRA, and/or investments in the body:intext:Roth IRA investments                                                                                |
| inurl:               | Use inurl:[search phrase] to search for pages that have at least one of your search words in the URL                                                                                                                                                                 | Show pages that mention Roth, IRA, and/or investments in the body:intext:Roth IRA investments                                                                                |
| OR                   | Perform two search queries at the same time by separating your search terms with OR. This will find pages that have one of several words.                                                                                                                              | Search for pages that reference "Google Drive," "Dropbox," or "OneDrive":"Google Drive" OR Dropbox OR OneDrive                                                       |

## github

## t - Fuzzy file finder

Presstin any repository to access it and start typing the name of the file you want to find.

<https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly>

## Gmail

<table>
<colgroup>
<col style="width: 43%" />
<col style="width: 56%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>What you can search by</strong></th>
<th><strong>Search operator &amp; example</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Specify the sender</td>
<td><p>from:</p>
<p>Example:from:amy</p></td>
</tr>
<tr>
<td>Specify a recipient</td>
<td><p>to:</p>
<p>Example:to:david</p></td>
</tr>
<tr>
<td>Specify a recipient who received a copy</td>
<td><p>cc:</p>
<p>bcc:</p>
<p>Example:cc:david</p></td>
</tr>
<tr>
<td>Words in the subject line</td>
<td><p>subject:</p>
<p>Example:subject:dinner</p></td>
</tr>
<tr>
<td>Messages that match multiple terms</td>
<td><p>ORor{ }</p>
<p>Example:from:amy OR from:david</p>
<p>Example:{from:amy from:david}</p></td>
</tr>
<tr>
<td>Remove messages from your results</td>
<td><p>-</p>
<p>Example:dinner -movie</p></td>
</tr>
<tr>
<td><p>Find messages with words near each other. Use the number to say how many words apart the words can be</p>
<p>Add quotes to find messages in which the word you put first stays first.</p></td>
<td><p>AROUND</p>
<p>Example:holiday AROUND 10 vacation</p>
<p>Example:"secret AROUND 25 birthday"</p></td>
</tr>
<tr>
<td>Messages that have a certain label</td>
<td><p>label:</p>
<p>Example:label:friends</p></td>
</tr>
<tr>
<td>Messages that have an attachment</td>
<td><p>has:attachment</p>
<p>Example:has:attachment</p></td>
</tr>
<tr>
<td>Messages that have a Google Drive, Docs, Sheets, or Slides attachment or link</td>
<td><p>has:drive</p>
<p>has:document</p>
<p>has:spreadsheet</p>
<p>has:presentation</p>
<p>Example:has:drive</p></td>
</tr>
<tr>
<td>Messages that have a YouTube video</td>
<td><p>has:youtube</p>
<p>Example:has:youtube</p></td>
</tr>
<tr>
<td>Messages from a mailing list</td>
<td><p>list:</p>
<p>Example:list:info@example.com</p></td>
</tr>
<tr>
<td>Attachments with a certain name or file type</td>
<td><p>filename:</p>
<p>Example:filename:pdf</p>
<p>Example:filename:homework.txt</p></td>
</tr>
<tr>
<td>Search for an exact word or phrase</td>
<td><p>" "</p>
<p>Example:"dinner and movie tonight"</p></td>
</tr>
<tr>
<td>Group multiple search terms together</td>
<td><p>( )</p>
<p>Example:subject:(dinner movie)</p></td>
</tr>
<tr>
<td>Messages in any folder, including Spam and Trash</td>
<td><p>in:anywhere</p>
<p>Example:in:anywhere movie</p></td>
</tr>
<tr>
<td>Search for messages that are marked as<a href="https://support.google.com/mail/answer/186543">important</a></td>
<td><p>is:important</p>
<p>label:important</p>
<p>Example:is:important</p>
<p></p></td>
</tr>
<tr>
<td>Starred, snoozed, unread, or read messages</td>
<td><p>is:starred</p>
<p>is:snoozed</p>
<p>is:unread</p>
<p>is:read</p>
<p>Example:is:read is:starred</p></td>
</tr>
<tr>
<td>Messages that include an icon of a certain color</td>
<td><p>has:yellow-star</p>
<p>has:blue-info</p>
<p>Example:has:purple-star</p></td>
</tr>
<tr>
<td>Recipients in the cc or bcc field</td>
<td><p>cc:</p>
<p>bcc:</p>
<p>Example:cc:david</p>
<p>Note:You can't find messages that you received on bcc.</p></td>
</tr>
<tr>
<td>Search for messages sent during a certain time period</td>
<td><p>after:</p>
<p>before:</p>
<p>older:</p>
<p>newer:</p>
<p>Example:after:2004/04/16</p>
<p>Example:after:04/16/2004</p>
<p>Example:before:2004/18/04</p>
<p>Example:before:04/18/2004</p></td>
</tr>
<tr>
<td>Search for messages older or newer than a time period using d (day), m (month), and y (year)</td>
<td><p>older_than:</p>
<p>newer_than:</p>
<p>Example:newer_than:2d</p></td>
</tr>
<tr>
<td>Chat messages</td>
<td><p>is:chat</p>
<p>Example:is:chat movie</p></td>
</tr>
<tr>
<td>Search by email for delivered messages</td>
<td><p>deliveredto:</p>
<p>Example:deliveredto:username@gmail.com</p></td>
</tr>
<tr>
<td>Messages in a certain category</td>
<td><p>category:primary</p>
<p>category:social</p>
<p>category:promotions</p>
<p>category:updates</p>
<p>category:forums</p>
<p>category:reservations</p>
<p>category:purchases</p>
<p>Example:category:updates</p></td>
</tr>
<tr>
<td>Messages larger than a certain size in bytes</td>
<td><p>size:</p>
<p>Example:size:1000000</p></td>
</tr>
<tr>
<td>Messages larger or smaller than a certain size in bytes</td>
<td><p>larger:</p>
<p>smaller:</p>
<p>Example:larger:10M</p></td>
</tr>
<tr>
<td>Results that match a word exactly</td>
<td><p>+</p>
<p>Example:+unicorn</p></td>
</tr>
<tr>
<td>Messages with a certain message-id header</td>
<td><p>Rfc822msgid:</p>
<p>Example:rfc822msgid:200503292@example.com</p></td>
</tr>
<tr>
<td>Messages that have or don't have a label</td>
<td><p>has:userlabels</p>
<p>has:nouserlabels</p>
<p>Example:has:nouserlabels</p>
<p>Note:Labels are only added to a message, and not an entire conversation.</p></td>
</tr>
</tbody>
</table>

Note:When using numbers as part of your query, a space or a dash (-) will separate a number while a dot (.) will be a decimal. For example,01.2047-100is considered 2 numbers: 01.2047 and 100.

<https://support.google.com/mail/answer/7190?hl=en>

## GSuite

- **When user is deleted**

If your school uses GSuite accounts, your IT Administrator will have the option to transfer ownership of ALL of your Google Drive files to somebody else when they delete your account.

You can manually transfer ownership of individual files by using Share, and selecting the share access for the new ownerto be Owner (rather than Edit / View / Comment).

## Windows

<https://www.freecodecamp.org/news/keyboard-shortcuts-improve-productivity>

## Discord

<https://www.notboring.co/p/discord-imagine-a-place>

<https://mee6.xyz>

<https://idlerpg.xyz>
