# Concurrency

Created: 2017-12-04 22:27:00 +0500

Modified: 2021-09-06 00:56:33 +0500

---

## Concurrent Modification

When one or more thread is iterating over the collection, in between, one thread changes the structure of the collection (either adding the element to the collection or by deleting the element in the collection or by updating the value at particular position in the collection) is known as Concurrent Modification.

## Fail fast Iterator

Fail fast iterator while iterating through the collection , instantly throws Concurrent Modification Exception if there is structural modification of the collection . Thus, in the face of concurrent modification, the iterator fails quickly and cleanly, rather than risking arbitrary, non-deterministic behavior at an undetermined time in the future.

Fail-fast iterator can throw ConcurrentModificationException in two scenarios :

1. **Single Threaded Environment -** After the creation of the iterator , structure is modified at any time by any method other than iterator's own remove method.

2. **Multiple Threaded Environment -** If one thread is modifying the structure of the collection while other thread is iterating over it .

## Fail Safe Iterator

Fail Safe Iterator makes copy of the internal data structure (object array) and iterates over the copied data structure.Any structural modification done to the iterator affects the copied data structure. So , original data structure remains structurally unchanged .Hence , no ConcurrentModificationException throws by the fail safe iterator.

Two issues associated with Fail Safe Iterator are :

1. Overhead of maintaining the copied data structure i.e memory.

2. Fail safe iterator does not guarantee that the data being read is the data currently in the original data structure.

<table>
<colgroup>
<col style="width: 29%" />
<col style="width: 41%" />
<col style="width: 28%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Fail Fast Iterator</strong></th>
<th><strong>Fail Safe Iterator</strong></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Throw ConcurrentModification Exception</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Clone object</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Memory Overhead</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Examples</td>
<td>HashMap,Vector,ArrayList,HashSet</td>
<td><p>CopyOnWriteArrayList,</p>
<p>ConcurrentHashMap</p></td>
</tr>
</tbody>
</table>

## References

<http://javahungry.blogspot.com/2014/04/fail-fast-iterator-vs-fail-safe-iterator-difference-with-example-in-java.html>
