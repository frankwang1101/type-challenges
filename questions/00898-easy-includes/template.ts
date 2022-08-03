import type { Equal } from '@type-challenges/utils'

// eslint-disable-next-line @typescript-eslint/comma-dangle
export type Includes<T extends readonly any[], U> = T extends [
  infer K,
  ...infer P
]
  ? Equal<U, K> extends true
    ? true
    : Includes<P, U>
  : false
