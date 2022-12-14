# List of Hash Functions

Created: 2020-01-07 12:53:09 +0500

Modified: 2020-01-07 22:37:19 +0500

---

## Cyclic redundancy checks

Main article:[Cyclic redundancy check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check)

| Name                                                                                            | Length  | Type                                                                              |
|------------------------|--------------|-----------------------------------|
| [cksum (Unix)](https://en.wikipedia.org/wiki/Cksum)                                             | 32 bits | [CRC](https://en.wikipedia.org/wiki/Cyclic_redundancy_check)with length appended |
| [CRC-16](https://en.wikipedia.org/wiki/CRC-16)                                                  | 16 bits | [CRC](https://en.wikipedia.org/wiki/Cyclic_redundancy_check)                      |
| [CRC-32](https://en.wikipedia.org/wiki/CRC-32)                                                  | 32 bits | [CRC](https://en.wikipedia.org/wiki/Cyclic_redundancy_check)                      |
| [CRC-32 MPEG-2](https://en.wikipedia.org/w/index.php?title=CRC-32_MPEG-2&action=edit&redlink=1) | 32 bits | [CRC](https://en.wikipedia.org/wiki/Cyclic_redundancy_check)                      |
| [CRC-64](https://en.wikipedia.org/wiki/CRC-64)                                                  | 64 bits | [CRC](https://en.wikipedia.org/wiki/Cyclic_redundancy_check)                      |

[Adler-32](https://en.wikipedia.org/wiki/Adler-32)is often mistaken for a CRC, but it is not, it is a[checksum](https://en.wikipedia.org/wiki/List_of_hash_functions#Checksums).

## Checksums

Main article:[Checksum](https://en.wikipedia.org/wiki/Checksum)

| Name                                                                            | Length          | Type                                                                                                               |
|--------------------------|-------------------|----------------------------|
| [BSD checksum (Unix)](https://en.wikipedia.org/wiki/BSD_checksum)               | 16 bits         | sum with circular rotation                                                                                         |
| [SYSV checksum (Unix)](https://en.wikipedia.org/wiki/SYSV_checksum)             | 16 bits         | sum with circular rotation                                                                                         |
| sum8                                                                            | 8 bits          | sum                                                                                                                |
| [sum16](https://en.wikipedia.org/w/index.php?title=Sum16&action=edit&redlink=1) | 16 bits         | sum                                                                                                                |
| sum24                                                                           | 24 bits         | sum                                                                                                                |
| sum32                                                                           | 32 bits         | sum                                                                                                                |
| [fletcher-4](https://en.wikipedia.org/wiki/Fletcher%27s_checksum)               | 4 bits          | sum                                                                                                                |
| [fletcher-8](https://en.wikipedia.org/wiki/Fletcher%27s_checksum)               | 8 bits          | sum                                                                                                                |
| [fletcher-16](https://en.wikipedia.org/wiki/Fletcher%27s_checksum)              | 16 bits         | sum                                                                                                                |
| [fletcher-32](https://en.wikipedia.org/wiki/Fletcher%27s_checksum)              | 32 bits         | sum                                                                                                                |
| [Adler-32](https://en.wikipedia.org/wiki/Adler-32)                              | 32 bits         | sum                                                                                                                |
| [xor8](https://en.wikipedia.org/wiki/Longitudinal_redundancy_check)             | 8 bits          | sum                                                                                                                |
| [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)                  | 1 decimal digit | sum                                                                                                                |
| [Verhoeff algorithm](https://en.wikipedia.org/wiki/Verhoeff_algorithm)          | 1 decimal digit | sum                                                                                                                |
| [Damm algorithm](https://en.wikipedia.org/wiki/Damm_algorithm)                  | 1 decimal digit | [Quasigroup](https://en.wikipedia.org/wiki/Quasigroup)[operation](https://en.wikipedia.org/wiki/Binary_operation) |

## Universal hash function families

Main article:[Universal hashing](https://en.wikipedia.org/wiki/Universal_hashing)

| Name                                                                                             | Length   | Type     |
|--------------------------------------------|---------------|--------------|
| [Rabin fingerprint](https://en.wikipedia.org/wiki/Rabin_fingerprint)                             | variable | multiply |
| [tabulation hashing](https://en.wikipedia.org/wiki/Tabulation_hashing)                           | variable | XOR      |
| [universal one-way hash function](https://en.wikipedia.org/wiki/Universal_one-way_hash_function) |         |         |
| [Zobrist hashing](https://en.wikipedia.org/wiki/Zobrist_hashing)                                 | variable | XOR      |

## Non-cryptographic hash functions

<table>
<colgroup>
<col style="width: 37%" />
<col style="width: 29%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr class="header">
<th>Name</th>
<th>Length</th>
<th>hideType</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><a href="https://en.wikipedia.org/wiki/Pearson_hashing">Pearson hashing</a></td>
<td>8 bits (or more)</td>
<td>XOR/table</td>
</tr>
<tr class="even">
<td>Paul Hsieh's SuperFastHash<a href="https://en.wikipedia.org/wiki/List_of_hash_functions#cite_note-1">[1]</a></td>
<td>32 bits</td>
<td></td>
</tr>
<tr class="odd">
<td><a href="https://en.wikipedia.org/wiki/Rolling_hash#Cyclic_polynomial">Buzhash</a></td>
<td>variable</td>
<td>XOR/table</td>
</tr>
<tr class="even">
<td><p><a href="https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function">Fowler–Noll–Vo hash function</a></p>
<p>(FNV Hash)</p></td>
<td><p>32, 64, 128, 256,</p>
<p>512, or 1024 bits</p></td>
<td><p>xor/product or</p>
<p>product/XOR</p></td>
</tr>
<tr class="odd">
<td><a href="https://en.wikipedia.org/wiki/Jenkins_hash_function">Jenkins hash function</a></td>
<td>32 or 64 bits</td>
<td>XOR/addition</td>
</tr>
<tr class="even">
<td>Bernstein hashdjb2</td>
<td>32 bits</td>
<td></td>
</tr>
<tr class="odd">
<td><a href="https://en.wikipedia.org/wiki/PJW_hash_function">PJW hash / Elf Hash</a></td>
<td>32 or 64 bits</td>
<td>add,shift,xor</td>
</tr>
<tr class="even">
<td><a href="https://en.wikipedia.org/wiki/MurmurHash">MurmurHash</a></td>
<td>32, 64, or 128 bits</td>
<td>product/rotation</td>
</tr>
<tr class="odd">
<td>Fast-Hash</td>
<td>32, 64 bits</td>
<td><a href="https://en.wikipedia.org/wiki/Xorshift">xorshift</a>operations</td>
</tr>
<tr class="even">
<td>SpookyHash</td>
<td>32, 64, or 128 bits</td>
<td>see<a href="https://en.wikipedia.org/wiki/Jenkins_hash_function">Jenkins hash function</a></td>
</tr>
<tr class="odd">
<td>CityHash</td>
<td>32, 64, 128, or 256 bits</td>
<td></td>
</tr>
<tr class="even">
<td>FarmHash</td>
<td>32, 64 or 128 bits</td>
<td></td>
</tr>
<tr class="odd">
<td>MetroHash</td>
<td>64 or 128 bits</td>
<td></td>
</tr>
<tr class="even">
<td>numeric hash (nhash)</td>
<td>variable</td>
<td>division/modulo</td>
</tr>
<tr class="odd">
<td>xxHash</td>
<td>32, 64 bits</td>
<td>product/rotation</td>
</tr>
<tr class="even">
<td><a href="https://en.wikipedia.org/w/index.php?title=T1ha_(Fast_Positive_Hash)&amp;action=edit&amp;redlink=1">t1ha (Fast Positive Hash)</a><a href="https://en.wikipedia.org/wiki/List_of_hash_functions#cite_note-t1ha_github-9">[9]</a></td>
<td>64 and 128 bits</td>
<td>product/rotation/XOR/add</td>
</tr>
</tbody>
</table>

## Keyed cryptographic hash functions**

Main article:[Message authentication code](https://en.wikipedia.org/wiki/Message_authentication_code)

| Name                                                                     | Tag Length | hideType                                                                                              |
|-----------------------------|-------------|-------------------------------|
| [BLAKE2](https://en.wikipedia.org/wiki/BLAKE_(hash_function)#BLAKE2)     | arbitrary  | keyed hash function (prefix-MAC)                                                                      |
| [HMAC](https://en.wikipedia.org/wiki/HMAC)                               |           |                                                                                                      |
| [KMAC](https://en.wikipedia.org/wiki/SHA-3#Additional_instances)         | arbitrary  | based on Keccak                                                                                       |
| [MD6](https://en.wikipedia.org/wiki/MD6)                                 | 512 bits   | [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree)[NLFSR](https://en.wikipedia.org/wiki/NLFSR) |
| [One-key MAC](https://en.wikipedia.org/wiki/One-key_MAC)(OMAC; CMAC)    |           |                                                                                                      |
| [PMAC (cryptography)](https://en.wikipedia.org/wiki/PMAC_(cryptography)) |           |                                                                                                      |
| [Poly1305-AES](https://en.wikipedia.org/wiki/Poly1305-AES)               | 128 bits   | nonce-based                                                                                           |
| [SipHash](https://en.wikipedia.org/wiki/SipHash)                         | 64 bits    | non-collision-resistant PRF                                                                           |
| [UMAC](https://en.wikipedia.org/wiki/UMAC)                               |           |                                                                                                      |
| [VMAC](https://en.wikipedia.org/wiki/VMAC)                               |           |                                                                                                      |

## Unkeyed cryptographic hash functions

Main article:[Cryptographic hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function)

See also:[Comparison of cryptographic hash functions](https://en.wikipedia.org/wiki/Comparison_of_cryptographic_hash_functions)

| Name                                                                               | Length          | hideType                                                                                                                                 |
|-------------------|-------------|----------------------------------------|
| [BLAKE-256](https://en.wikipedia.org/wiki/BLAKE_(hash_function))                   | 256 bits        | HAIFA structure                                                                                                                          |
| [BLAKE-512](https://en.wikipedia.org/wiki/BLAKE_(hash_function))                   | 512 bits        | HAIFA structure                                                                                                                          |
| [BLAKE2s](https://en.wikipedia.org/wiki/BLAKE_(hash_function)#BLAKE2)              | up to 256 bits  | HAIFA structure                                                                                                                          |
| [BLAKE2b](https://en.wikipedia.org/wiki/BLAKE_(hash_function)#BLAKE2)              | up to 512 bits  | HAIFA structure                                                                                                                          |
| [BLAKE2X](https://en.wikipedia.org/wiki/BLAKE_(hash_function)#BLAKE2)              | arbitrary       | HAIFA structure,extensible-output functions (XOFs) design                                                                               |
| [ECOH](https://en.wikipedia.org/wiki/Elliptic_curve_only_hash)                     | 224 to 512 bits | hash                                                                                                                                     |
| [FSB](https://en.wikipedia.org/wiki/Fast_Syndrome_Based_Hash)                      | 160 to 512 bits | hash                                                                                                                                     |
| [GOST](https://en.wikipedia.org/wiki/GOST_(hash_function))                         | 256 bits        | hash                                                                                                                                     |
| [Grøstl](https://en.wikipedia.org/wiki/Gr%C3%B8stl)                                | up to 512 bits  | hash                                                                                                                                     |
| [HAS-160](https://en.wikipedia.org/wiki/HAS-160)                                   | 160 bits        | hash                                                                                                                                     |
| [HAVAL](https://en.wikipedia.org/wiki/HAVAL)                                       | 128 to 256 bits | hash                                                                                                                                     |
| [JH](https://en.wikipedia.org/wiki/JH_(hash_function))                             | 224 to 512 bits | hash                                                                                                                                     |
| LSH[[12]](https://en.wikipedia.org/wiki/List_of_hash_functions#cite_note-lsw-12) | 256 to 512 bits | wide-pipe[Merkle--Damgård construction](https://en.wikipedia.org/wiki/Merkle%E2%80%93Damg%C3%A5rd_construction)                         |
| [MD2](https://en.wikipedia.org/wiki/MD2_(cryptography))                            | 128 bits        | hash                                                                                                                                     |
| [MD4](https://en.wikipedia.org/wiki/MD4)                                           | 128 bits        | hash                                                                                                                                     |
| [MD5](https://en.wikipedia.org/wiki/MD5)                                           | 128 bits        | [Merkle--Damgård construction](https://en.wikipedia.org/wiki/Merkle%E2%80%93Damg%C3%A5rd_construction)                                   |
| [MD6](https://en.wikipedia.org/wiki/MD6)                                           | up to 512 bits  | [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree)[NLFSR](https://en.wikipedia.org/wiki/NLFSR)(it is also a keyed hash function) |
| [RadioGatún](https://en.wikipedia.org/wiki/RadioGat%C3%BAn)                        | arbitrary       | ideal mangling function                                                                                                                  |
| [RIPEMD](https://en.wikipedia.org/wiki/RIPEMD)                                     | 128 bits        | hash                                                                                                                                     |
| [RIPEMD-128](https://en.wikipedia.org/wiki/RIPEMD)                                 | 128 bits        | hash                                                                                                                                     |
| [RIPEMD-160](https://en.wikipedia.org/wiki/RIPEMD)                                 | 160 bits        | hash                                                                                                                                     |
| [RIPEMD-320](https://en.wikipedia.org/wiki/RIPEMD)                                 | 320 bits        | hash                                                                                                                                     |
| [SHA-1](https://en.wikipedia.org/wiki/SHA-1)                                       | 160 bits        | [Merkle--Damgård construction](https://en.wikipedia.org/wiki/Merkle%E2%80%93Damg%C3%A5rd_construction)                                   |
| [SHA-224](https://en.wikipedia.org/wiki/SHA-2)                                     | 224 bits        | [Merkle--Damgård construction](https://en.wikipedia.org/wiki/Merkle%E2%80%93Damg%C3%A5rd_construction)                                   |
| [SHA-256](https://en.wikipedia.org/wiki/SHA-2)                                     | 256 bits        | [Merkle--Damgård construction](https://en.wikipedia.org/wiki/Merkle%E2%80%93Damg%C3%A5rd_construction)                                   |
| [SHA-384](https://en.wikipedia.org/wiki/SHA-2)                                     | 384 bits        | [Merkle--Damgård construction](https://en.wikipedia.org/wiki/Merkle%E2%80%93Damg%C3%A5rd_construction)                                   |
| [SHA-512](https://en.wikipedia.org/wiki/SHA-2)                                     | 512 bits        | [Merkle--Damgård construction](https://en.wikipedia.org/wiki/Merkle%E2%80%93Damg%C3%A5rd_construction)                                   |
| [SHA-3](https://en.wikipedia.org/wiki/SHA-3)(subset of Keccak)                    | arbitrary       | [sponge function](https://en.wikipedia.org/wiki/Sponge_function)                                                                         |
| [Skein](https://en.wikipedia.org/wiki/Skein_(hash_function))                       | arbitrary       | [Unique Block Iteration](https://en.wikipedia.org/w/index.php?title=Unique_Block_Iteration&action=edit&redlink=1)                        |
| [Snefru](https://en.wikipedia.org/wiki/Snefru)                                     | 128 or 256 bits | hash                                                                                                                                     |
| [Spectral Hash](https://en.wikipedia.org/wiki/Spectral_Hash)                       | 512 bits        | wide-pipe Merkle--Damgård construction                                                                                                   |
| [Streebog](https://en.wikipedia.org/wiki/Streebog)                                 | 256 or 512 bits | [Merkle--Damgård construction](https://en.wikipedia.org/wiki/Merkle%E2%80%93Damg%C3%A5rd_construction)                                   |
| [SWIFFT](https://en.wikipedia.org/wiki/SWIFFT)                                     | 512 bits        | hash                                                                                                                                     |
| [Tiger](https://en.wikipedia.org/wiki/Tiger_(cryptography))                        | 192 bits        | [Merkle--Damgård construction](https://en.wikipedia.org/wiki/Merkle%E2%80%93Damg%C3%A5rd_construction)                                   |
| [Whirlpool](https://en.wikipedia.org/wiki/Whirlpool_(cryptography))                | 512 bits        | hash                                                                                                                                     |
