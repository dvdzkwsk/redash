const test        = require('ava')
    , { replace } = require('../dist/redash')

test('replaces a string if its found', (t) => {
  t.is(replace('bar', 'BAR', 'foobarbaz'), 'fooBARbaz')
})

test('only replaces the first occurrence for string matches', (t) => {
  t.is(replace('hi', 'hey', 'hi hi hi'), 'hey hi hi')
})

test('returns the string unmodified if nothing is matched', (t) => {
  t.is(replace('boo', 'bop', 'hi hi hi'), 'hi hi hi')
})

test('accepts regular expressions', (t) => {
  t.is(replace(/boo/, 'baz', 'boo'), 'baz')
})

test('respects the global regular expression flag', (t) => {
  t.is(replace(/hi/g, 'hey', 'hi hi hi'), 'hey hey hey')
})

test('respects the case insensitive regular expression flag', (t) => {
  t.is(replace(/hi/i, 'hey', 'HI Hi hI'), 'hey Hi hI')
})

