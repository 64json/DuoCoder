sum := 0
i := 1
#0{[for i < 11 {]}
    sum = sum + i
    i++
#0{[}]}
// sum = 1 + 2 + ... + 9 + 10