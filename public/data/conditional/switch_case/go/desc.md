## Switch / Case Statement

```
switch expression {
    case constant1:
        statement
    case constant2:
        statement
    case constant3:
        statement
        fallthrough
        .
        .
        .
    default:
        statement
}
```

1. If the `expression` matches a `case`, all the statements below the `case` are executed.


2. `switch` does not have `break` statement in Go. Breaking is default behavior in Go.

3. If you want to execute all the statements below, you can use `fallthrough` at end of each `case`.

4. When the `expression` does not match any `case`, all the statements below `default` statement are executed if exists.