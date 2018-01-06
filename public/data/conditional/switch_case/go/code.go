a := 1
#0{[switch a {]}
    #1{[case 0:]}
        // when a is 0 #2{[]}
    #3{[case 1:]}
		// when a is 1
		#5{[fallthrough]}
    #4{[case 2:]}
        // when a is 1 or 2
    #6{[default:]}
        // when a is neither 0, 1, nor 2
#0{[}]}