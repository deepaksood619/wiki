# Web Scraping

Created: 2018-05-16 18:57:16 +0500

Modified: 2022-02-05 01:00:58 +0500

---

Web Scraping is a technique in which a computer program extracts data from human-readable output coming from websites.

1.  lxml.etree

    a.  theXPath - language for XML queries

2.  beautifulsoup

    a.  super short learning curve

    b.  two function api

        i.  parse

        ii. search (find_all)

from bs4 import BeautifulSoup

soup = BeautifulSoup(response.text, 'html.parser')

mydivs = soup.find_all("div", {"class": "stylelistrow"})
print(i, soup.body.div.div)

3.  Selenium (for javascript)

4.  Headless browser
    -   [Headless Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md)
    -   [Zombie](https://github.com/assaf/zombie)
    -   [slimerjs](http://slimerjs.org/)
    -   [puppeteer](https://github.com/GoogleChrome/puppeteer)

<https://www.toptal.com/python/web-scraping-with-python>

<https://www.freecodecamp.org/news/how-to-scrape-websites-with-python
