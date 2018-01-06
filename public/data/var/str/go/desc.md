## String Type Variables

1. Single character
    * Type: `rune`
    * Value: `'(character)'`
    * Single character in Go can be expressed as a rune, that is just unicode code point of 4 bytes (int32). Go source code is always UTF-8. The character is as well.


2. String
    * Type: `string`
    * Value: `"(string)"`
    * A string literal, absent byte-level escapes, always holds valid UTF-8 sequences.

### What it looks like?
`var (name) (type) = "(value)"`

#### Shorten version

`(name) := "(value)"`