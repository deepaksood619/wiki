# Public-key cryptography

Created: 2018-04-24 10:56:15 +0500

Modified: 2020-06-20 21:27:47 +0500

---

**Public key cryptography, orasymmetrical cryptography**, is any cryptographic system that uses pairs of[keys](https://en.wikipedia.org/wiki/Cryptographic_key):public keyswhich may be disseminated widely, andprivate keyswhich are known only to the owner. This accomplishes two functions:[authentication](https://en.wikipedia.org/wiki/Authentication_protocol), where the public key verifies that a holder of the paired private key sent the message, and[encryption](https://en.wikipedia.org/wiki/Encryption), where only the paired private key holder can decrypt the message encrypted with the public key.



In a public key encryption system, any person can encrypt a message using the receiver's public key. That encrypted message can only be decrypted with the receiver's private key. To be practical, the generation of a public and private key-pair must be computationally economical. The strength of a public key cryptography system relies on the computational effort (work factorin cryptography) required to find the private key from its paired public key. Effective security only requires keeping the private key private; the public key can be openly distributed without compromising security



**Public Key Infrastructure (PKI) -**
-   Relies on a centralized authority, aka Certificate Authority (CA)
-   Users generally have their own identities - public-private key pair which is attested by the CA and stored in the form of certificates
-   X.509 certificate format



![Submitted To Certificate Signing Request (CSR) Key Pair Public Key Protected Private Key Store Created By Private Key Public Subject Identifier Client To Client Certificate Authority (CA) Issues Certificate ](media/Cryptography-Intro_Public-key-cryptography-image1.png){width="5.0in" height="3.4479166666666665in"}



![Computer "Alice" Yo can I have your public key? Neat! Hey let's use this to encrypt stuff: spspspspspsps pspspspspsspp pspsppspspsps pp 3 Sure! It's BEGIN Oh nice! Let's do that. Now I can tell you secrets! pspspspsp Computer "Bob" ](media/Cryptography-Intro_Public-key-cryptography-image2.png){width="5.0in" height="2.1875in"}



![my certificate: By the way, can you send yours? Certificate Authoritie Hmm. Hey what do you think? Yep that's bob Yo Bob is that you? Computer "Alice" certificate: By the way let's talk secrets: pspspspsps Computer "Bob" Yo is this Alice? Certificate Authorities Yep Nice! spspsps ](media/Cryptography-Intro_Public-key-cryptography-image3.png){width="5.0in" height="2.8125in"}



<https://medium.com/sitewards/the-magic-of-tls-x509-and-mutual-authentication-explained-b2162dec4401>



![](media/Cryptography-Intro_Public-key-cryptography-image4.png){width="5.625in" height="2.9583333333333335in"}










