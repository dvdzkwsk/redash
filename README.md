Functional JavaScript
===

There are quite a few awesome functional JavaScript libraries out there (ramda and lodash to name a couple), but in wanting to better understand functional programming I made it a goal to more thoroughly understand the utilities those libraries provide.

As a result, this library will be significantly smaller in size and scope, but will hopefully be useful in creating a clean API for common functional concepts. Similarly, this means the library does not aim to support legacy browsers.

Setup
===

The library currently isn't componentized (and probably will never be due to its size), so the build process is only really used to compile a minified version and run lint/test tasks.

Run a complete build (will fail build on errors, as opposed to developlemt tasks)

```
gulp build
```

Watch for script changes and recompile app (also runs lint)

```
gulp watch
```

Run above watch task, and additionally re-run tests on file change

```
gulp tdd
```

Usage
===
... todo ...

TODO
===
* redo gulp file... wtf was i thinking
* deploy process (need to start forcing lints)
* test environments (amd, browser)
* optimize compose()
* implement curry
* improve code organization
* improve test organization
* function documentation