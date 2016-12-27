## Switch / Case Statement

```
switch ( expression ) {
    case constant1:
        statement
        break;
    case constant2:
        statement
        break;
    case constant3:
        statement
        break;
        .
        .
        .
    default:
        statement
        break;
}
```

1. If the expression matches a case, all the statements below the case are executed.
  
2. _Break_ statement is necessary to get out of _Switch_ statement unless you want to execute all the statements below.

3. When the expression does not match any case, all the statements below _Default_ statement are executed if exists.