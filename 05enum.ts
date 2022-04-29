enum characterIndex {
  A,
  B,
  C,
  D,
}

let aIndex = characterIndex.A;
aIndex = 2;
console.log(aIndex, characterIndex.A);
// aIndex = '0'; // error

enum Color {
  DarkRed = 3,
  DarkGreen,
  DarkBlue
}

let color = Color.DarkGreen;
console.log(color);

enum AnimalFlags {
  None = 0,
  HasClaws = 1 << 0,
  CanFly = 1 << 1,
  EatsFish = 1 << 2,
  Endangered = 1 << 3
}

interface Animal {
  flags: AnimalFlags;
  [key: string]: any;
}

function printAnimalAbilities(animal: Animal): void {
  var animalFlags = animal.flags;
  if (animalFlags & AnimalFlags.HasClaws) {
    console.log("animal has claws");
  }
  if (animalFlags & AnimalFlags.CanFly) {
    console.log("animal can fly")
  }
  if (animalFlags == AnimalFlags.None) {
    console.log('nothing')
  }
}

var animal = { flags: AnimalFlags.None };
printAnimalAbilities(animal);
animal.flags |= AnimalFlags.HasClaws;
console.log(animal);
printAnimalAbilities(animal);
animal.flags &= ~AnimalFlags.HasClaws;
console.log(animal);
printAnimalAbilities(animal);
animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
console.log(animal);
printAnimalAbilities(animal);

// 组合枚举
enum CombinedAnimalFlags {
  None = 0,
  HasClaws = 1 << 0,
  CanFly = 1 << 1,
  EatsFish = 1 << 2,
  Endangered = 1 << 3,

  EndangeredFlyingClawedFishEating = HasClaws | CanFly | EatsFish | Endangered
}

// 字符串枚举
enum StringTypeEnum {
  UNKNOWN = '',
  PASSPORT_VISA = 'passport_visa',
  PASSPORT = 'passport',
  SIGHTED_STUDENT_CARD = 'sighted_tertiary_edu_id',
  SIGHTED_KEYPASS_CARD = 'sighted_keypass_card',
  SIGHTED_PROOF_OF_AGE_CARD = 'sighted_proof_of_age_card',
}

// 常量枚举
const enum Tristate {
  False,
  True,
  Unknown
}

const lie = Tristate.False; // 编译成const lie = 0;

// 有静态方法的枚举
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

namespace Weekday {
  export function isBusinessDay(day: Weekday) {
    switch (day) {
      case Weekday.Saturday:
      case Weekday.Sunday:
        return false;
      default:
        return true;
    }
  }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;

console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun)); // false

// 开放式枚举
enum Color {
  Red,
  Green,
  Blue,
  Pink
}

let color2 = Color.Red;
let color3 = Color.DarkGreen;
console.log(color2, color3, Color.Pink, Color.DarkRed);