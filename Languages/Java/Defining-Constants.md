# Defining Constants

Created: 2017-10-24 16:30:38 +0500

Modified: 2018-12-04 13:27:08 +0500

---

## public class Constants{

*/***

*The caller references the constants using Consts.EMPTY_STRING,*

*and so on. Thus, the caller should be prevented from constructing objects of this class, by declaring this private constructor.*

**/*

## private Constants(){

*// this prevents even the native class from*

*// calling this constructor as well:*

## throw new AssertionError()

}

}
