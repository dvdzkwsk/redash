declare namespace Redash {
  type Key = string | number
  type List<T> = Array<T>
  type Functor<T> = List<T>
  type Filterable<T> = List<T> | object

  interface API {
    add (a: number, b: number): number
    add (a: number): (b: number) => number

    all<T> (predicate: (x: T) => boolean, xs: Array<T>): boolean
    all<T> (predicate: (x: T) => boolean): (xs: Array<T>) => boolean

    always<T> (x: T): (...args: Array<any>) => T

    any<T> (predicate: (x: T) => boolean, xs: Array<T>): boolean
    any<T> (predicate: (x: T) => boolean): (xs: Array<T>) => boolean

    append<T> (value: T, xs: Array<T>): Array<T>
    append<T> (value: T): (xs: Array<T>) => Array<T>

    assoc<T> (key: Key, value: any, target: T): T
    assoc<T> (key: Key, value: any): (target: T) => T
    assoc<T> (key: Key): (value: any) => (target: T) => T

    assocIn<T> (path: Array<Key>, value: any, target: T): T
    assocIn<T> (path: Array<Key>, value: any): (target: T) => T
    assocIn<T> (path: Array<Key>): (value: any) => (target: T) => T

    chain<A, B> (fn: (a: A) => B | Array<B>, as: Array<A>): Array<B>
    chain<A, B> (fn: (a: A) => B | Array<B>): (as: Array<A>) => Array<B>
    flatMap<A, B> (fn: (a: A) => B | Array<B>): (as: Array<A>) => Array<B>
    flatMap<A, B> (fn: (a: A) => B | Array<B>): (as: Array<A>) => Array<B>

    clamp (lower: number, upper: number, value: number): number
    clamp (lower: number, upper: number): (value: number) => number
    clamp (lower: number): (upper: number) => (value: number) => number

    compact<T> (xs: Array<T>): Array<T>
    compact (xs: object): object

    compose (...args: Array<any>): any

    concat<T> (as: Array<T>, bs: Array<T>): Array<T>
    concat<T> (as: Array<T>): (bs: Array<T>) => Array<T>
    concat (as: string, bs: string): string
    concat (as: string): (bs: string) => string

    cond (...args: Array<any>): any

    contains<T> (x: T, xs: Array<T>): boolean
    contains<T> (x: T): (xs: Array<T>) => boolean

    curry (...args: Array<any>): any

    curryN (...args: Array<any>): any

    dec (a: number): number

    difference<T> (as: List<T>, bs: List<T>): List<T>
    difference<T> (as: List<T>): (bs: List<T>) => List<T>

    dissoc<T> (key: Key, target: T): T
    dissoc<T> (key: Key): (target: T) => T

    divide (a: number, b: number): number
    divide (a: number): (b: number) => number

    drop<T> (n: number, xs: Array<T>): Array<T>
    drop<T> (n: number): (xs: Array<T>) => Array<T>

    dropUntil<T> (predicate: (x: T) => boolean, xs: List<T>): List<T>
    dropUntil<T> (predicate: (x: T) => boolean): (xs: List<T>) => List<T>

    dropWhile<T> (predicate: (x: T) => boolean, xs: List<T>): List<T>
    dropWhile<T> (predicate: (x: T) => boolean): (xs: List<T>) => List<T>

    empty<T> (x: T): T

    equals (a: any, b: any): boolean
    equals (a: any): (b: any) => boolean

    everyPred<T> (predicates: Array<(x: T) => boolean>, target: T): boolean
    everyPred<T> (predicates: Array<(x: T) => boolean>): (target: T) => boolean

    F (): boolean

    filter<T> (predicate: (x: T) => boolean, xs: Filterable<T>): Filterable<T>
    filter<T> (predicate: (x: T) => boolean): (xs: Filterable<T>) => Filterable<T>

    find<T> (predicate: (x: T) => boolean, xs: List<T>): T | undefined
    find<T> (predicate: (x: T) => boolean): (xs: List<T>) => T | undefined

    findIndex<T> (predicate: (x: T) => boolean, xs: List<T>): number
    findIndex<T> (predicate: (x: T) => boolean): (xs: List<T>) => number

    findLast<T> (predicate: (x: T) => boolean, xs: List<T>): T | undefined
    findLast<T> (predicate: (x: T) => boolean): (xs: List<T>) => T | undefined

    flatten<T> (xs: Array<any>): Array<any>

    flattenDeep (xs: Array<any>): Array<any>

    forEach<T> (fn: (x: T) => any, xs: Array<T>): undefined
    forEach<T> (fn: (x: T) => any): (xs: Array<T>) => undefined

    fromPairs<T> (pairs: Array<[string, T]>): { [key: string]: T }

    get<T> (key: string, target: { [key: string]: T }): T | undefined
    get<T> (key: string): (target: { [key: string]: T }) => T | undefined
    get<T> (key: number, target: List<T>): T | undefined
    get<T> (key: number): (target: List<T>) => T | undefined

    getIn (path: Array<Key>, target: object): any | undefined
    getIn (path: Array<Key>): (target: object) => any | undefined

    groupBy<T> (fn: (x: T) => string, xs: Array<T>): { [key: string]: T }
    groupBy<T> (fn: (x: T) => string): (xs: Array<T>) => { [key: string]: T }

    has (key: string, target: object): boolean
    has (key: string): (target: object) => boolean

    head<T> (xs: Array<T>): T

    identical (a: any, b: any): boolean
    identical (a: any): (b: any) => boolean

    identity<T> (x: T): T

    inc (x: number): number

    init<T> (xs: Array<T>): Array<T>

    insert<T> (index: number, value: T, xs: List<T>): Array<T>
    insert<T> (index: number, value: T): (xs: List<T>) => Array<T>
    insert<T> (index: number): (value: T) => (xs: List<T>) => Array<T>

    intersection<T> (as: List<T>, bs: List<T>): List<T>
    intersection<T> (as: List<T>): (bs: List<T>) => List<T>

    invert (obj: object): object

    isEmpty (x: any): boolean

    isEven (x: number): boolean

    isNil (x: any): boolean

    isOdd (x: number): boolean

    isType (type: string | object, value: any): boolean
    isType (type: string | object): (value: any) => boolean

    join (joiner: string, xs: Array<string>): string
    join (joiner: string): (xs: Array<string>) => string

    juxt (fns: Array<Function>): Array<any>

    keys (obj: object): Array<string>

    last<T> (xs: Array<T>): T

    length (xs: Array<any>): boolean

    map<A, B> (fn: (a: A) => B, as: Functor<A>): Functor<B>
    map<A, B> (fn: (a: A) => B): (as: Functor<A>) => Functor<B>

    mapi<A, B> (fn: ((a: A, idx: number) => B), as: Functor<A>): Functor<B>
    mapi<A, B> (fn: ((a: A, idx: number) => B)): (as: Functor<A>) => Functor<B>

    mapKeys (fn: (key: string) => Key, target: object): object
    mapKeys (fn: (key: string) => Key): (target: object) => object

    match (regex: RegExp, target: string): Array<string>
    match (regex: RegExp): (target: string) => Array<string>

    matches (spec: { [key: string]: any }, target: any): boolean
    matches (spec: { [key: string]: any }): (target: any) => boolean

    max (xs: Array<number>): number

    mean (xs: Array<number>): number

    merge (base: object, overrides: object): object
    merge (base: object): (overrides: object) => object

    min (xs: Array<number>): number

    multiply (a: number, b: number): number
    multiply (a: number): (b: number) => number

    omit (keys: Array<Key>, target: object): object
    omit (keys: Array<Key>): (target: object) => object

    pad (length: number, char: string, string: string): string
    pad (length: number, char: string): (string: string) => string
    pad (length: number): (char: string) => (string: string) => string

    padLeft (length: number, char: string, string: string): string
    padLeft (length: number, char: string): (string: string) => string
    padLeft (length: number): (char: string) => (string: string) => string

    padRight (length: number, char: string, string: string): string
    padRight (length: number, char: string): (string: string) => string
    padRight (length: number): (char: string) => (string: string) => string

    partition<T> (fn: (x: T) => boolean, xs: List<T>): [T[], T[]]
    partition<T> (fn: (x: T) => boolean): (xs: List<T>) => [T[], T[]]

    pick (keys: Array<string>, object: object): object
    pick (keys: Array<string>): (object: object) => object

    pipe (fns: Array<Function>): (...args: Array<any>) => any

    prepend<T> (x: T, xs: Array<T>): Array<T>
    prepend<T> (x: T): (xs: Array<T>) => Array<T>

    range (start: number, end: number): Array<number>
    range (start: number): (end: number) => Array<number>

    rangeBy (step: number, start: number, end: number): Array<number>
    rangeBy (step: number, start: number): (end: number) => Array<number>
    rangeBy (step: number): (start: number) => (end: number) => Array<number>

    reduce<T, ACC> (reducer: (acc: ACC, x: T) => ACC, acc: ACC, xs: List<T>): ACC
    reduce<T, ACC> (reducer: (acc: ACC, x: T) => ACC, acc: ACC): (xs: List<T>) => ACC
    reduce<T, ACC> (reducer: (acc: ACC, x: T) => ACC): (acc: ACC) => (xs: List<T>) => ACC

    reduceRight<T, ACC> (reducer: (acc: ACC, x: T) => ACC, acc: ACC, xs: List<T>): ACC
    reduceRight<T, ACC> (reducer: (acc: ACC, x: T) => ACC, acc: ACC): (xs: List<T>) => ACC
    reduceRight<T, ACC> (reducer: (acc: ACC, x: T) => ACC): (acc: ACC) => (xs: List<T>) => ACC

    reject<T> (predicate: (x: T) => boolean, xs: Filterable<T>): Filterable<T>
    reject<T> (predicate: (x: T) => boolean): (xs: Filterable<T>) => Filterable<T>

    replace (match: string | RegExp, replacement: string, target: string): string
    replace (match: string | RegExp, replacement: string): (target: string) => string
    replace (match: string | RegExp): (replacement: string) => (target: string) => string

    reverse<T> (xs: List<T>): Array<T>

    scan<T, ACC> (reducer: (acc: ACC, x: T) => ACC, acc: ACC, xs: List<T>): Array<ACC>
    scan<T, ACC> (reducer: (acc: ACC, x: T) => ACC, acc: ACC): (xs: List<T>) => Array<ACC>
    scan<T, ACC> (reducer: (acc: ACC, x: T) => ACC): (acc: ACC) => (xs: List<T>) => Array<ACC>

    split (char: string, str: string): Array<string>
    split (char: string): (str: string) => Array<string>

    subtract (a: number, b: number): number
    subtract (a: number): (b: number) => number

    sum (xs: Array<number>): number

    T (): boolean

    tail<T> (xs: Array<T>): Array<T>

    take<T> (n: number, xs: Array<T>): Array<T>
    take<T> (n: number): (xs: Array<T>) => Array<T>

    takeUntil<T> (predicate: (x: T) => boolean, xs: List<T>): Array<T>
    takeUntil<T> (predicate: (x: T) => boolean): (xs: List<T>) => Array<T>

    takeWhile<T> (predicate: (x: T) => boolean, xs: List<T>): Array<T>
    takeWhile<T> (predicate: (x: T) => boolean): (xs: List<T>) => Array<T>

    tap<T> (fn: (...args: Array<any>) => T): (...args: Array<any>) => T

    test (pattern: RegExp, target: string): boolean
    test (pattern: RegExp): (target: string) => boolean

    times<T> (fn: (n: number) => T, n: number): Array<T>
    times<T> (fn: (n: number) => T): (n: number) => Array<T>

    toLower (str: string): string

    toPairs<T> (obj: { [key: string]: T }): Array<[string, T]>

    toUpper (str: string): string

    trace<T> (message: string): (x: T, ...rest: Array<any>) => T

    transform (...args: Array<any>): any

    trim (str: string): string

    type (x: any): string

    unique<T> (xs: Array<T>): Array<T>

    unless<T, Y> (predicate: (x: T) => boolean, fn: (x: T) => Y): (x: T) => T | Y
    unless<T, Y> (predicate: (x: T) => boolean): (fn: (x: T) => Y) => (x: T) => T | Y

    update<T> (key: Key, xform: (value: T) => any, target: Array<T>): Array<T>
    update<T> (key: Key, xform: (value: T) => any): (target: Array<T>) => Array<T>
    update<T> (key: Key): (xform: (value: T) => any) => (target: Array<T>) => Array<T>
    update<T> (key: Key, xform: (value: T) => any, target: { [key: string]: T }): { [key: string]: T }

    updateIn (...args: Array<any>): any

    values<T> (obj: { [key: string]: T }): Array<T>

    when<T, Y> (predicate: (x: T) => boolean, fn: (x: T) => Y): (x: T) => T | Y
    when<T, Y> (predicate: (x: T) => boolean): (fn: (x: T) => Y) => (x: T) => T | Y

    where<T> (spec: { [key: string]: (predicate: T) => boolean }, target: { [key: string]: T }): boolean
    where<T> (spec: { [key: string]: (predicate: T) => boolean }): (target: { [key: string]: T }) => boolean

    without<T> (x: T, xs: List<T>): List<T>
    without<T> (x: T): (xs: List<T>) => List<T>

    zip<A, B> (as: Array<A>, bs: Array<B>): Array<[A, B]>
    zip<A, B> (as: Array<A>): (bs: Array<B>) => Array<[A, B]>

    zipObj (keys: Array<Key>, bs: Array<any>): { [key: string]: any }
    zipObj (keys: Array<Key>): (bs: Array<any>) => { [key: string]: any }
  }
}

declare var R: Redash.API
export = R
