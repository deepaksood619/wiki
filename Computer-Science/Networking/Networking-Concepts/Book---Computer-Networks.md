# Book - Computer Networks

Created: 2020-01-01 21:59:23 +0500

Modified: 2020-01-01 22:24:49 +0500

---

## Andrew S Tanenbaum and DAVID J. WETHERALL - 5th Edition

## Acronyms - 28/119

## 1INTRODUCTION

1.1USES OF COMPUTER NETWORKS, 3

1.1.1Business Applications, 3

1.1.2Home Applications, 6

1.1.3Mobile Users, 10

1.1.4Social Issues, 14
1.2NETWORK HARDWARE, 17

1.2.1Personal Area Networks, 18

1.2.2Local Area Networks, 19

1.2.3Metropolitan Area Networks, 23

1.2.4Wide Area Networks, 23

1.2.5Internetworks, 28
1.3NETWORK SOFTWARE, 29

1.3.1Protocol Hierarchies, 29

1.3.2Design Issues for the Layers, 33

1.3.3Connection-Oriented Versus Connectionless Service, 35

1.3.4Service Primitives, 38

1.3.5The Relationship of Services to Protocols, 40
1.4REFERENCE MODELS, 41

1.4.1The OSI Reference Model, 41

1.4.2The TCP/IP Reference Model, 45

1.4.3The Model Used in This Book, 48

1.4.4A Comparison of the OSI and TCP/IP Reference Models*, 49

1.4.5A Critique of the OSI Model and Protocols*, 51

1.4.6A Critique of the TCP/IP Reference Model*, 53
1.5EXAMPLE NETWORKS

1.5.1The Internet, 54

1.5.2Third-Generation Mobile Phone Networks*, 65

1.5.3Wireless LANs: 802.11*, 70

1.5.4RFID and Sensor Networks*, 73
1.6NETWORK STANDARDIZATION*, 75

1.6.1Who's Who in the Telecommunications World, 77

1.6.2Who's Who in the International Standards World, 78

1.6.3Who's Who in the Internet Standards World, 80
1.7METRIC UNITS, 82
1.8OUTLINE OF THE REST OF THE BOOK, 83
1.9SUMMARY, 84

## 2THE PHYSICAL LAYER

2.1THE THEORETICAL BASIS FOR DATA COMMUNICATION, 90

2.1.1Fourier Analysis, 90

2.1.2Bandwidth-Limited Signals, 90

2.1.3The Maximum Data Rate of a Channel, 94
2.2GUIDED TRANSMISSION MEDIA, 95

2.2.1Magnetic Media, 95

2.2.2Twisted Pairs, 96

2.2.3Coaxial Cable, 97

2.2.4Power Lines, 98

2.2.5Fiber Optics, 99
2.3WIRELESS TRANSMISSION, 105

2.3.1The Electromagnetic Spectrum, 105

2.3.2Radio Transmission, 109

2.3.3Microwave Transmission, 110

2.3.4Infrared Transmission, 114

2.3.5Light Transmission, 114

2.4COMMUNICATION SATELLITES*, 116

2.4.1Geostationary Satellites, 117

2.4.2Medium-Earth Orbit Satellites, 121

2.4.3Low-Earth Orbit Satellites, 121

2.4.4Satellites Versus Fiber, 123
2.5DIGITAL MODULATION AND MULTIPLEXING, 125

2.5.1Baseband Transmission, 125

2.5.2Passband Transmission, 130

2.5.3Frequency Division Multiplexing, 132

2.5.4Time Division Multiplexing, 135

2.5.5Code Division Multiplexing, 135
2.6THE PUBLIC SWITCHED TELEPHONE NETWORK, 138

2.6.1Structure of the Telephone System, 139

2.6.2The Politics of Telephones, 142

2.6.3The Local Loop: Modems, ADSL, and Fiber, 144

2.6.4Trunks and Multiplexing, 152

2.6.5Switching, 161
2.7THE MOBILE TELEPHONE SYSTEM*, 164

2.7.1First-Generation (coco1G) Mobile Phones: Analog Voice, 166

2.7.2Second-Generation (2G) Mobile Phones: Digital Voice, 170

2.7.3Third-Generation (3G) Mobile Phones: Digital Voice and Data, 174
2.8CABLE TELEVISION*, 179

2.8.1Community Antenna Television, 179

2.8.2Internet over Cable, 180

2.8.3Spectrum Allocation, 182

2.8.4Cable Modems, 183

2.8.5ADSL Versus Cable, 185
2.9SUMMARY, 186

## 3THE DATA LINK LAYER

3.1DATA LINK LAYER DESIGN ISSUES, 194

3.1.1Services Provided to the Network Layer, 194

3.1.2Framing, 197

3.1.3Error Control, 200

3.1.4Flow Control, 201

3.2ERROR DETECTION AND CORRECTION, 202

3.2.1Error-Correcting Codes, 204

3.2.2Error-Detecting Codes, 209
3.3ELEMENTARY DATA LINK PROTOCOLS, 215

3.3.1A Utopian Simplex Protocol, 220

3.3.2A Simplex Stop-and-Wait Protocol for an Error-Free Channel, 221

3.3.3A Simplex Stop-and-Wait Protocol for a Noisy Channel, 222
3.4SLIDING WINDOW PROTOCOLS, 226

3.4.1A One-Bit Sliding Window Protocol, 229

3.4.2A Protocol Using Go-Back-N, 232

3.4.3A Protocol Using Selective Repeat, 239
3.5EXAMPLE DATA LINK PROTOCOLS, 244

3.5.1Packet over SONET, 245

3.5.2ADSL (Asymmetric Digital Subscriber Loop), 248
3.6SUMMARY, 251

## 4THE MEDIUM ACCESS CONTROL SUBLAYER

4.1THE CHANNEL ALLOCATION PROBLEM, 258

4.1.1Static Channel Allocation, 258

4.1.2Assumptions for Dynamic Channel Allocation, 260
4.2MULTIPLE ACCESS PROTOCOLS, 261

4.2.1ALOHA, 262

4.2.2Carrier Sense Multiple Access Protocols, 266

4.2.3Collision-Free Protocols, 269

4.2.4Limited-Contention Protocols, 274

4.2.5Wireless LAN Protocols, 277
4.3ETHERNET, 280

4.3.1Classic Ethernet Physical Layer, 281

4.3.2Classic Ethernet MAC Sublayer Protocol, 282

4.3.3Ethernet Performance, 286

4.3.4Switched Ethernet, 288

4.3.5Fast Ethernet, 290

4.3.6Gigabit Ethernet, 293

4.3.710-Gigabit Ethernet, 296

4.3.8Retrospective on Ethernet, 298
4.4WIRELESS LANS, 299

4.4.1The 802.11 Architecture and Protocol Stack, 299

4.4.2The 802.11 Physical Layer, 301

4.4.3The 802.11 MAC Sublayer Protocol, 303

4.4.4The 802.11 Frame Structure, 309

4.4.5Services, 311
4.5BROADBAND WIRELESS*, 312

4.5.1Comparison of 802.16 with 802.11 and 3G, 313

4.5.2The 802.16 Architecture and Protocol Stack, 314

4.5.3The 802.16 Physical Layer, 316

4.5.4The 802.16 MAC Sublayer Protocol, 317

4.5.5The 802.16 Frame Structure, 319
4.6BLUETOOTH*, 320

4.6.1Bluetooth Architecture, 320

4.6.2Bluetooth Applications, 321

4.6.3The Bluetooth Protocol Stack, 322

4.6.4The Bluetooth Radio Layer, 324

4.6.5The Bluetooth Link Layers, 324

4.6.6The Bluetooth Frame Structure, 325
4.7 RFID*, 327

4.7.1EPC Gen 2 Architecture, 327

4.7.2EPC Gen 2 Physical Layer, 328

4.7.3EPC Gen 2 Tag Identiﬁcation Layer, 329

4.7.4Tag Identiﬁcation Message Formats, 331
4.8DATA LINK LAYER SWITCHING, 332

4.8.1Uses of Bridges, 332

4.8.2Learning Bridges, 334

4.8.3Spanning Tree Bridges, 337

4.8.4Repeaters, Hubs, Bridges, Switches, Routers, and Gateways, 340

4.8.5Virtual LANs, 342
4.9SUMMARY, 349

## 5THE NETWORK LAYER

5.1NETWORK LAYER DESIGN ISSUES, 355

5.1.1Store-and-Forward Packet Switching, 356

5.1.2Services Provided to the Transport Layer, 356

5.1.3Implementation of Connectionless Service, 358

5.1.4Implementation of Connection-Oriented Service, 359

5.1.5Comparison of Virtual-Circuit and Datagram Networks, 361
5.2ROUTING ALGORITHMS, 362

5.2.1The Optimality Principle, 364

5.2.2Shortest Path Algorithm, 366

5.2.3Flooding, 368

5.2.4Distance Vector Routing, 370

5.2.5Link State Routing, 373

5.2.6Hierarchical Routing, 378

5.2.7Broadcast Routing, 380

5.2.8Multicast Routing, 382

5.2.9Anycast Routing, 385

5.2.10Routing for Mobile Hosts, 386

5.2.11Routing in Ad Hoc Networks, 389
5.3CONGESTION CONTROL ALGORITHMS, 392

5.3.1Approaches to Congestion Control, 394

5.3.2Trafﬁc-Aware Routing, 395

5.3.3Admission Control, 397

5.3.4Trafﬁc Throttling, 398

5.3.5Load Shedding, 401
5.4QUALITY OF SERVICE, 404

5.4.1Application Requirements, 405

5.4.2Trafﬁc Shaping, 407

5.4.3Packet Scheduling, 411

5.4.4Admission Control, 415

5.4.5Integrated Services, 418

5.4.6Differentiated Services, 421
5.5INTERNETWORKING, 424

5.5.1How Networks Differ, 425

5.5.2How Networks Can Be Connected, 426

5.5.3Tunneling, 429

5.5.4Internetwork Routing, 431

5.5.5Packet Fragmentation, 432
5.6THE NETWORK LAYER IN THE INTERNET, 436

5.6.1The IP Version 4 Protocol, 439

5.6.2IP Addresses, 442

5.6.3IP Version 6, 455

5.6.4Internet Control Protocols, 465

5.6.5Label Switching and MPLS, 470

5.6.6OSPF---An Interior Gateway Routing Protocol, 474

5.6.7BGP---The Exterior Gateway Routing Protocol, 479

5.6.8Internet Multicasting, 484

5.6.9Mobile IP, 485
5.7SUMMARY, 488

## 6THE TRANSPORT LAYER

6.1THE TRANSPORT SERVICE, 495

6.1.1Services Provided to the Upper Layers, 496

6.1.2Transport Service Primitives, 498

6.1.3Berkeley Sockets, 500

6.1.4An Example of Socket Programming: An Internet File Server, 503
6.2ELEMENTS OF TRANSPORT PROTOCOLS, 507

6.2.1Addressing, 509

6.2.2Connection Establishment, 512

6.2.3Connection Release, 517

6.2.4Error Control and Flow Control, 522

6.2.5Multiplexing, 527

6.2.6Crash Recovery, 527
6.3CONGESTION CONTROL, 530

6.3.1Desirable Bandwidth Allocation, 531

6.3.2Regulating the Sending Rate, 535

6.3.3Wireless Issues, 539
6.4THE INTERNET TRANSPORT PROTOCOLS: UDP, 541

6.4.1Introduction to UDP, 541

6.4.2Remote Procedure Call, 543

6.4.3Real-Time Transport Protocols, 546

6.5THE INTERNET TRANSPORT PROTOCOLS: TCP, 552

6.5.1Introduction to TCP, 552

6.5.2The TCP Service Model, 553

6.5.3The TCP Protocol, 556

6.5.4The TCP Segment Header, 557

6.5.5TCP Connection Establishment, 560

6.5.6TCP Connection Release, 562

6.5.7TCP Connection Management Modeling, 562

6.5.8TCP Sliding Window, 565

6.5.9TCP Timer Management, 568

6.5.10TCP Congestion Control, 571

6.5.11The Future of TCP, 581
6.6PERFORMANCE ISSUES*, 582

6.6.1Performance Problems in Computer Networks, 583

6.6.2Network Performance Measurement, 584

6.6.3Host Design for Fast Networks, 586

6.6.4Fast Segment Processing, 590

6.6.5Header Compression, 593

6.6.6Protocols for Long Fat Networks, 595
6.7DELAY-TOLERANT NETWORKING*, 599

6.7.1DTN Architecture, 600

6.7.2The Bundle Protocol, 603
6.8SUMMARY, 605

## 7THE APPLICATION LAYER

7.1DNS---THE DOMAIN NAME SYSTEM, 611

7.1.1The DNS Name Space, 612

7.1.2Domain Resource Records, 616

7.1.3Name Servers, 619
7.2ELECTRONIC MAIL*, 623

7.2.1Architecture and Services, 624

7.2.2The User Agent, 626

7.2.3Message Formats, 630

7.2.4Message Transfer, 637

7.2.5Final Delivery, 643
7.3THE WORLD WIDE WEB, 646

7.3.1Architectural Overview, 647

7.3.2Static Web Pages, 662

7.3.3Dynamic Web Pages and Web Applications, 672

7.3.4HTTP---The HyperText Transfer Protocol, 683

7.3.5The Mobile Web, 693

7.3.6Web Search, 695
7.4STREAMING AUDIO AND VIDEO, 697

7.4.1Digital Audio, 699

7.4.2Digital Video, 704

7.4.3Streaming Stored Media, 713

7.4.4Streaming Live Media, 721

7.4.5Real-Time Conferencing, 724
7.5CONTENT DELIVERY, 734

7.5.1Content and Internet Trafﬁc, 736

7.5.2Server Farms and Web Proxies, 738

7.5.3Content Delivery Networks, 743

7.5.4Peer-to-Peer Networks, 748
7.6SUMMARY, 757

## 8NETWORK SECURITY

8.1CRYPTOGRAPHY, 766

8.1.1Introduction to Cryptography, 767

8.1.2Substitution Ciphers, 769

8.1.3Transposition Ciphers, 771

8.1.4One-Time Pads, 772

8.1.5Two Fundamental Cryptographic Principles, 776
8.2SYMMETRIC-KEY ALGORITHMS, 778

8.2.1DES---The Data Encryption Standard, 780

8.2.2AES---The Advanced Encryption Standard, 783

8.2.3Cipher Modes, 787

8.2.4Other Ciphers, 792

8.2.5Cryptanalysis, 792

8.3PUBLIC-KEY ALGORITHMS, 793

8.3.1 RSA, 794

8.3.2 Other Public-Key Algorithms, 796
8.4DIGITAL SIGNATURES, 797

8.4.1Symmetric-Key Signatures, 798

8.4.2Public-Key Signatures, 799

8.4.3Message Digests, 800

8.4.4The Birthday Attack, 804
8.5MANAGEMENT OF PUBLIC KEYS, 806

8.5.1Certiﬁcates, 807 8.5.2 X.509, 809

8.5.3 Public Key Infrastructures, 810
8.6COMMUNICATION SECURITY, 813

8.6.1IPsec, 814

8.6.2Firewalls, 818

8.6.3Virtual Private Networks, 821

8.6.4Wireless Security, 822
8.7AUTHENTICATION PROTOCOLS, 827

8.7.1Authentication Based on a Shared Secret Key, 828

8.7.2Establishing a Shared Key: The Difﬁe-Hellman Key Exchange, 833

8.7.3Authentication Using a Key Distribution Center, 835

8.7.4Authentication Using Kerberos, 838

8.7.5Authentication Using Public-Key Cryptography, 840
8.8EMAIL SECURITY*, 841

8.8.1PGP---Pretty Good Privacy, 842

8.8.2S/MIME, 846
8.9WEB SECURITY, 846

8.9.1Threats, 847

8.9.2Secure Naming, 848

8.9.3SSL---The Secure Sockets Layer, 853

8.9.4Mobile Code Security, 857
8.10SOCIAL ISSUES, 860

8.10.1Privacy, 860

8.10.2Freedom of Speech, 863

8.10.3Copyright, 867
8.11SUMMARY, 869
