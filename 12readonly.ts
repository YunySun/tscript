/**
 * @TypeScript readonly
 */

type Foo12 = {
  readonly bar: number,
  readonly bas: number
}

const foo12: Foo12 = { bar: 123, bas: 234 }

console.log(foo12.bar)

// foo12.bar = 123; // error

type Foo120 = {
  bar: number,
  bas: number
}

type Foo120Readonly = Readonly<Foo12>

const foo120: Foo120 = { bar: 123, bas: 234 }
const foo120Readonly: Foo120Readonly = { bar: 123, bas: 234 }

foo120.bar = 123;
// foo120Readonly.bar = 123;  // error