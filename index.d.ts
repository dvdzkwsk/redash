declare namespace Redash {
  type Key = string | number | boolean
  type List<T> = Array<T>
  type Functor<T> = List<T>
  type Filterable<T> = List<T> | Object

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

    chain (...args: Array<any>): any

    clamp (lower: number, upper: number, value: number): number
    clamp (lower: number, upper: number): (value: number) => number
    clamp (lower: number): (upper: number) => (value: number) => number

    compact<T> (xs: Array<T>): Array<T>

    complement (fn: (...args: Array<any>) => boolean): (...args: Array<any>) => boolean

    compose (...args: Array<any>): any

    concat<T> (as: Array<T>, bs: Array<T>): Array<T>
    concat<T> (as: Array<T>): (bs: Array<T>) => Array<T>

    cond (...args: Array<any>): any

    contains<T> (x: T, xs: Array<T>): boolean
    contains<T> (x: T): (xs: Array<T>) => boolean

    curry (...args: Array<any>): any

    curryN (...args: Array<any>): any

    dec (a: number): number

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

    flip (...args: Array<any>): any

    fmap (...args: Array<any>): any

    forEach<T> (fn: (x: T) => any, xs: Array<T>): void
    forEach<T> (fn: (x: T) => any): (xs: Array<T>) => void

    fromPairs (pairs: Array<[string, any]>): { [key: string]: any }

    get (key: string, target: Object): any
    get (key: string): (target: Object) => any
    get<T> (key: number, target: List<T>): T
    get<T> (key: number): (target: List<T>) => T

    getEq (...args: Array<any>): any

    getIn (...args: Array<any>): any

    groupBy (...args: Array<any>): any

    gt (a: number, b: number): boolean
    gt (a: number): (b: number) => boolean

    gte (a: number, b: number): boolean
    gte (a: number): (b: number) => boolean

    has (...args: Array<any>): any

    head<T> (xs: Array<T>): T

    identical (a: any, b: any): boolean
    identical (a: any): (b: any) => boolean

    identity<T> (x: T): T

    ifElse (...args: Array<any>): any

    inc (x: number): number

    init<T> (xs: Array<T>): Array<T>

    insert (...args: Array<any>): any

    intersection<T> (as: List<T>, bs: List<T>): List<T>
    intersection<T> (as: List<T>): (bs: List<T>) => List<T>

    isEmpty (x: any): boolean

    isEven (x: number): boolean

    isNil (x: any): boolean

    isOdd (x: number): boolean

    isType (type: string | Object, value: any): boolean
    isType (type: string | Object): (value: any) => boolean

    join (...args: Array<any>): any

    juxt (...args: Array<any>): any

    keys (obj: Object): Array<string>

    last<T> (xs: Array<T>): T

    length (xs: Array<any>): boolean

    lens (...args: Array<any>): any

    lensProp (...args: Array<any>): any

    lt (a: number, b: number): boolean
    lt (a: number): (b: number) => boolean

    lte (a: number, b: number): boolean
    lte (a: number): (b: number) => boolean

    map<A, B> (fn: (a: A) => B, as: Functor<A>): Functor<B>
    map<A, B> (fn: (a: A) => B): (as: Functor<A>) => Functor<B>

    mapi (...args: Array<any>): any

    mapKeys (fn: (key: string) => Key, target: Object): Object
    mapKeys (fn: (key: string) => Key): (target: Object) => Object

    match (...args: Array<any>): any

    max (xs: Array<number>): number

    mean (xs: Array<number>): number

    merge (...args: Array<any>): any

    min (xs: Array<number>): number

    multiply (...args: Array<any>): any

    of (...args: Array<any>): any

    omit (...args: Array<any>): any

    over (...args: Array<any>): any

    pad (...args: Array<any>): any

    padLeft (...args: Array<any>): any

    padRight (...args: Array<any>): any

    pair (...args: Array<any>): any

    partition<T> (fn: (x: T) => boolean, xs: List<T>): [T[], T[]]

    pick (...args: Array<any>): any

    pipe (...args: Array<any>): any

    prepend (...args: Array<any>): any

    range (start: number, end: number): Array<number>
    range (start: number): (end: number) => Array<number>

    rangeBy (...args: Array<any>): any

    reduce<T, ACC> (reducer: (acc: ACC, x: T) => ACC, acc: ACC, xs: List<T>): ACC
    reduce<T, ACC> (reducer: (acc: ACC, x: T) => ACC, acc: ACC): (xs: List<T>) => ACC
    reduce<T, ACC> (reducer: (acc: ACC, x: T) => ACC): (acc: ACC) => (xs: List<T>) => ACC

    reduceRight (...args: Array<any>): any

    reject<T> (predicate: (x: T) => boolean, xs: Filterable<T>): Filterable<T>
    reject<T> (predicate: (x: T) => boolean): (xs: Filterable<T>) => Filterable<T>

    replace (match: string | RegExp, replacement: string, target: string): string
    replace (match: string | RegExp, replacement: string): (target: string) => string
    replace (match: string | RegExp): (replacement: string) => (target: string) => string

    reverse<T> (xs: List<T>): Array<T>

    scan<T, ACC> (reducer: (acc: ACC, x: T) => ACC, acc: ACC, xs: List<T>): Array<ACC>
    scan<T, ACC> (reducer: (acc: ACC, x: T) => ACC, acc: ACC): (xs: List<T>) => Array<ACC>
    scan<T, ACC> (reducer: (acc: ACC, x: T) => ACC): (acc: ACC) => (xs: List<T>) => Array<ACC>

    set (...args: Array<any>): any

    split (char: string, str: string): Array<string>
    split (char: string): (str: string) => Array<string>

    subtract (a: number, b: number): number
    subtract (a: number): (b: number) => number

    sum (xs: Array<number>): number

    T (): boolean

    tail<T> (xs: Array<T>): Array<T>

    take<T> (n: number, xs: Array<T>): Array<T>
    take<T> (n: number): (xs: Array<T>) => Array<T>

    takeUntil (...args: Array<any>): any

    takeWhile (...args: Array<any>): any

    tap<T> (fn: (...args: any[]) => T): (...args: any[]) => T

    test (pattern: RegExp, target: string): boolean
    test (pattern: RegExp): (target: string) => boolean

    times<T> (fn: (n: number) => T, n: number): Array<T>
    times<T> (fn: (n: number) => T): (n: number) => Array<T>

    toLower (str: string): string

    toPairs (obj: Object): Array<[string, any]>

    toUpper (str: string): string

    trace (...args: Array<any>): any

    transform (...args: Array<any>): any

    trim (str: string): string

    type (x: any): string

    unique<T> (xs: Array<T>): Array<T>

    unless (...args: Array<any>): any

    update (...args: Array<any>): any

    updateIn (...args: Array<any>): any

    values (obj: Object): Array<string>

    view (...args: Array<any>): any

    when (...args: Array<any>): any

    where (...args: Array<any>): any

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
