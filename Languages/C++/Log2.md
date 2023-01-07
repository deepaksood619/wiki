# Log2

// A utility function to find Log n in base 2

int log2(int n)

{

return (n==1)? 0 : 1 + log2(n/2);

}
