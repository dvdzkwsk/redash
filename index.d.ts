declare namespace Redash {
  type Key = string | number | boolean

  interface API {
    add (a: number, b: number): number
    add (a: number): (b: number) => number

    all<T> (predicate: (x: T) => boolean, xs: Array<T>): boolean
    all<T> (predicate: (x: T) => boolean): (xs: Array<T>) => boolean

    always<T> (x: T): (...args: Array<any>) => T

    any<T> (predicate: (x: T) => boolean, xs: Array<T>): boolean
    any<T> (predicate: (x: T) => boolean): (xs: Array<T>) => boolean

    append (...args: Array<any>): any

    assoc (...args: Array<any>): any

    chain (...args: Array<any>): any

    clamp (...args: Array<any>): any

    compact<T> (xs: Array<T>): Array<T>

    complement (fn: (...args: Array<any>) => boolean): (...args: Array<any>) => boolean

    compose (...args: Array<any>): any

    concat (...args: Array<any>): any

    cond (...args: Array<any>): any

    contains<T> (x: T, xs: Array<T>): boolean
    contains<T> (x: T): (xs: Array<T>) => boolean

    curry (...args: Array<any>): any

    curryN (...args: Array<any>): any

    dec (a: number): number

    dissoc (...args: Array<any>): any

    divide (a: number, b: number): number
    divide (a: number): (b: number) => number

    drop<T> (n: number, xs: Array<T>): Array<T>
    drop<T> (n: number): (xs: Array<T>) => Array<T>

    dropUntil (...args: Array<any>): any

    dropWhile (...args: Array<any>): any

    empty<T> (x: T): T

    equals (a: any, b: any): boolean
    equals (a: any): (b: any) => boolean

    F (): boolean

    filter (...args: Array<any>): any

    find (...args: Array<any>): any

    findIndex (...args: Array<any>): any

    findLast (...args: Array<any>): any

    flatten<T> (xs: Array<any>): Array<any>

    flattenDeep (...args: Array<any>): Array<any>

    flip (...args: Array<any>): any

    fmap (...args: Array<any>): any

    forEach<T> (fn: (x: T) => any, xs: Array<T>): void
    forEach<T> (fn: (x: T) => any): (xs: Array<T>) => void

    fromPairs (pairs: Array<[string, any]>): { [key: string]: any }

    get (...args: Array<any>): any

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

    intersection (...args: Array<any>): any

    isEmpty (x: any): boolean

    isEven (x: number): boolean

    isNil (x: any): boolean

    isOdd (x: number): boolean

    isType (...args: Array<any>): any

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

    map (...args: Array<any>): any

    mapi (...args: Array<any>): any

    mapKeys (...args: Array<any>): any

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

    partition (...args: Array<any>): any

    pick (...args: Array<any>): any

    pipe (...args: Array<any>): any

    prepend (...args: Array<any>): any

    range (start: number, end: number): Array<number>
    range (start: number): (end: number) => Array<number>

    rangeBy (...args: Array<any>): any

    reduce (...args: Array<any>): any

    reduceRight (...args: Array<any>): any

    reject (...args: Array<any>): any

    replace (...args: Array<any>): any

    reverse (...args: Array<any>): any

    scan (...args: Array<any>): any

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

    tap (...args: Array<any>): any

    test (...args: Array<any>): any

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

    values (...args: Array<any>): any

    view (...args: Array<any>): any

    when (...args: Array<any>): any

    where (...args: Array<any>): any

    without (...args: Array<any>): any

    zip<A, B> (as: Array<A>, bs: Array<B>): Array<[A, B]>
    zip<A, B> (as: Array<A>): (bs: Array<B>) => Array<[A, B]>

    zipObj (keys: Array<Key>, bs: Array<any>): { [key: string]: any }
    zipObj (keys: Array<Key>): (bs: Array<any>) => { [key: string]: any }
  }
}

declare var R: Redash.API
export = R

