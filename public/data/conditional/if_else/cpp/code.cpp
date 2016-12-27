bool a = 7;
#0{[if (a < 5) {]}
    // when a < 5
#0{[}]} #1{[else if (a < 10) {]}
    // when 5 <= a < 10
#1{[}]} #2{[else {]}
    // when 10 < a
#2{[}]}