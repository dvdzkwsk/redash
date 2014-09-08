Functional JavaScript
===

There are quite a few awesome functional JavaScript libraries out there (ramda and lodash to name a couple), but as an aspiring functional programmer I wanted to make sure I understood the inner workings of the methods those libraries provide. As a result, this library will be significantly smaller in size and scope, but will hopefully be useful in creating a clean API for common functional concepts.

Setup
===

The library currently isn't componentized (and probably will never be due to its size), so the build process is only really used to compile a minified version and run lint/test tasks.

If you'd like to regenerate the files, just run the default task with:

```
gulp
```

If you're actively developing, use the watch task to help with automatic linting. Lint errors will not fail the build while the watch task is running.

```
gulp watch
```

Usage
===


TODO
===
* optimize compose()
* implement partial application/recurrying
* improve code organization
* improve test organization