# organic-express-morgan
A simple logger, implemented for express with morgan

# DNA
```
"organic-express-morgan": {
  "source": "organic-express-morgan",
  "reactOn": "ExpressServer",
  "emitReady": "ExpressMorgan"
}
```

## format
**organic-express-morgan** supports all morgan`s formats
```
"organic-express-morgan": {
  ...
  "format": "short" // format string
}
```

## logging to file
by default it is logging in the console
```
"organic-express-morgan": {
  "logFile": "morgan.log" // file path
}
```
