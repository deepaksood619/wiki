# Intro

Created: 2018-05-29 13:09:13 +0500

Modified: 2022-01-16 15:12:55 +0500

---

<https://quixdb.github.io/squash-benchmark



**Entropy Encoding**

An**entropy encoding**is a[lossless data compression](https://en.wikipedia.org/wiki/Lossless_compression)scheme that is independent of the specific characteristics of the medium.

Types -

1.  Huffman Coding

2.  Arithmetic Coding



**Lossless Compression**

1.  Run Length Encoding (Fixed length codes)

2.  Huffman Compression (Variable length codes)

3.  LZW Compression (Variable length codes)

4.  UTF-8 (Variable width character encoding)
    -   Backward compatible with ASCII
    -   Can encode all 1,112,064 valid code points in Unicode using one to four 8-bit bytes.
    -   Derived from Unicode (Universal Coded Character Set) Transformation - 8-bit.



**Advantages**
-   To save space when storing data
-   To save time when transmitting data
-   Most files have lots of redundancy



**Applications**

1.  Generic file compression
    -   Files: Gzip, Bzip, 7z
    -   Archivers: PKZIP
    -   File systems: NTFS, HFS+, ZFS

2.  Multimedia
    -   Images: GIF, JPEG
    -   Sound: MP3
    -   Video: MPEG, DivX, HDTV

3.  Communication
    -   ITU-T T4 Group 43 Fax
    -   V.42bis modem
    -   Skype



**Lossless compression and expansion**

Message: Binary data B we want to compress

Compress: Generates a compressed representation C(B)

Expand: Reconstructs original bitstream B

![bitstream B 0110110101. Compress compressed version C(B) Basic model for data compression Expand original bitstream B 0110110101. . ](media/Intro-image1.jpeg)

Compression ratio: Bits in C(B) / bits in B

Ex. 50-75% or better compression ratio for natural language



**Data representation: genomic code**

Genome: String over the alphabet { A, C, T, G }

Goal: Encode an N-character genome: A T A G A T G C A T A G . . .

![Standard ASCII encoding. • 8 bits per char. • 8 N bits. Two-bit encoding. • 2 bits per char. • 2 N bits. char binary char A c G hex 41 43 54 47 binary 01000001 01000011 01010100 01000111 c G 01 10 11 ](media/Intro-image2.jpg)



Fixed-length code - k-bit code supports alphabet of size 2^k^

Amazing but true - Initial genomic databases in 1990s used ASCII



**Reading and writing binary data**

Binary standard input and standard output: Libraries to read and write bits from standard input and to standard output



![public class BinaryStdIn bool ean readB001 ean() char readChar() char readChar(i nt r) read I bit of data and return as a boolean value read 8 bits of data and return as a char value read r bits of data and return as a char value [similar methods for byte (8 bits); short (16 bits); int (32 bits); long and double (64 bits)] bool ean isEmpty ( ) void close() public class BinaryStdOut void write (bool ean b) void write(char c) is the bitstream empty? close the bitstream write the specified bit write the specified 8-bit char void write (char c, int r) write the r least significant bits of the specified char [similar methods for byte (8 bits); short (16 bits); int (32 bits); long and double (64 bits)) void close() close the bitstream ](media/Intro-image3.jpg)



**Writing binary data**

Date representation - Three different ways to represent 12/31/1999

![A character stream (StdOut) StdOut.print(month + 'i/" + day + 'i/" + year); 0110001 0111001 1 2 3 1 1 9 0111001 0111001 9 1999 80 bits Three ints (BinaryStdOut) Bi naryStdOut. wri te (month) ; Bi naryStdOut. wri te(day) ; Bi naryStd0ut. wri te (year) ; 12 31 96 bits A 4-bit field, a 5-bit field, and a 12-bit field (BinaryStdOut) Bi naryStdOut.write(month, 4) ; Bi naryStd0ut.write(day, 5) ; Bi naryStdOut.write(year, 12) ; 31 12 21 bits ( + 3 bits for byte alignment at close) ](media/Intro-image4.jpg)



**Binary dumps**

How to examine the contents of a bitstream?

![Standard character stream % more abra. txt ABRACADABRA! Bitstream represented as O and 1 characters % java BinaryDump 16 < abra.txt 0100000101000010 0101001001000001 0100001101000001 0100010001000001 0100001001010010 0100000100100001 96 bits Bitstream represented with hex digits % java HexDump 4 < abra. txt 41 42 52 41 43 41 44 41 42 52 41 21 12 bytes Bitstream represented as pixels in a Picture % java PictureDump 16 6 < abra. txt 16-by-6 pixel window, magnified 96 bits 0123456789 ABCDEF O NUL 1 6 Hexadecimal to ASCII conversion table ](media/Intro-image5.jpg)



**Universal data compression**

Proposition: No algorithm can compress every bitstring



Proof 1 - by contradiction
-   Suppose you have a universal data compression algorithm U that can compress every bitstream
-   Given bitstring B~0~, compress it to get smaller bistring B1.
-   Compress B~1~ to get a smaller bistring B~2~.
-   Continue until reaching bitstring of size 0
-   Implication: all bitstrings can be compressed to 0 bits



Proof 2 - by counting
-   Suppose your algorithm that can compress all 1000-bit strings
-   2^1000^ possible bitstrings with 1000 bits
-   Only 1+2+4+ ... + 2^998^ + 2^999^ can be encoded with <= 999 bits
-   Similarly, only 1 in 2^499^ bitstrings can be encoded with <= 500 bits



**Lossless data compression benchmarks (using Calgary corpus)**

![year 1 967 950 1 977 1 984 987 1 987 1 987 1 987 1 988 1 994 1 994 1 995 1 997 1 999 scheme ASCII Huffman LZ77 LZMW LZH move-to-front LZB gzip PPMC SAKDC PPM Burrows-Wheeler BOA bits / char 7.00 4.70 3.94 3.32 3.30 3.24 3.18 2.71 2.48 2.47 2.34 2.29 I .99 .89 ](media/Intro-image6.jpg)



1.  **Lossless compression**
    -   **Represent fixed-length symbols with variable-length codes [Huffman]**
    -   **Represent variable-length symbols with fixed-length codes [LZW]**

2.  **Lossy compression**
    -   **JPEG, MPEG, MP3**
    -   **FFT, wavelets, fractals**



**Theoretical limits on compression - Shannon entropy**

![](media/Intro-image7.jpg)



**Predicate Pushdown**

Predicate pushdown is actually a simple concept:
-   If you issue a query in one place to run against a lot of data that's in another place, you could spawn a lot of network traffic, which could be slow and costly. However ...
-   ... if you can "push down" parts of the query to where the data is stored, and thus filter out most of the data, then you can greatly reduce network traffic.



"Predicate pushdown" gets its name from the fact that portions of SQL statements, specifically ones that filter data, are properly referred to as predicates. They earn that name because predicates in mathematical logic and clauses in SQL are the same kind of thing --- statements that, upon evaluation, can be TRUE or FALSE for different values of variables or data.



<https://docs.cloudera.com/documentation/enterprise/6/6.3/topics/cdh_ig_predicate_pushdown_parquet.html>



![LZR LZ77 LZSS LZH DEFLATE Brotli GZip LZB LZ78 LZW LZM LZMA Zip 7Zip GIF PNG ](media/Intro-image8.jpg)



**Dictionary Coders**

A**dictionary coder**, also sometimes known as a**substitution coder**, is a class of[lossless data compression](https://en.wikipedia.org/wiki/Lossless_data_compression)algorithms which operate by searching for matches between the text to be compressed and a set of[strings](https://en.wikipedia.org/wiki/String_(computer_science))contained in a[data structure](https://en.wikipedia.org/wiki/Data_structure)(called the 'dictionary') maintained by the encoder. When the encoder finds such a match, it substitutes a reference to the string's position in the data structure.



<https://en.wikipedia.org/wiki/Dictionary_coder>



**Dictionary Encoding**

Elasticsearch and other databases converts big values to a bit representation that signifies that final value



**Image Compression (JPEG)**

[How are Images Compressed? [46MB ↘↘ 4.07MB]](https://www.youtube.com/watch?v=Kv1Hiv3ox8I)








