# Log2

Created: 2017-10-25 20:19:01 +0500

Modified: 2017-10-25 20:19:23 +0500

---

// A utility function to find Log n in base 2

int log2(int n)

{

return (n==1)? 0 : 1 + log2(n/2);

}
