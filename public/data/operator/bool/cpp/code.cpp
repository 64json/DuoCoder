bool a = true;
bool b = false;
bool not_a = #0{[!a]};  // false
bool a_and_b = #1{[a && b]};  // false
bool a_or_b = #2{[a || b]};  // true