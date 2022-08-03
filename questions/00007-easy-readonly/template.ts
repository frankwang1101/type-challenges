type MyReadonly<T extends readonly any[]> = {
  readonly [K in keyof T]: T[K]
}
