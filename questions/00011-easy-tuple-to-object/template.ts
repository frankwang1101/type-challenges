type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K
}

const tuple1 = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple1>
