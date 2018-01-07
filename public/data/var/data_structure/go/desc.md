## Data Structures

1. Array
    * Fixed-size sequential collection of elements of the same type.
    * Declaration: `var (name) [(size)](type)`
    * `(size)` must not be omitted for fixed size array. If you set it as `...`, the length of initialized array will be calculated automatically.
    * Format: `[(size)](type){(value1), (value2), (value3)}`
    
2. Slice
    * Resizable sequential collection of elements of the same type.
    * Declaration: `var (name) [](type)`
    * The slice does not have fixed `size` unlike the array.
    * Format: `[](type){(value1), (value2), (value3)}`

3. Map
    * Unordered set of `(key): (value)` pairs.
    * Keys are unique and immutable.
    * Values are mutable.
    * Declaration: `var (name) map[((type of key))](type of value)`
    * Format: `map[(type of key)](type of value){key1: value1, key2: value2, key3: value3}`
     
4. \+ more