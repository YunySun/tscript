// 混合

// 所有的mixins都需要
type Constructor<T = {}> = new (...args: any[]) => T;

// 添加属性的混合例子
function TimeStamped<TClass extends Constructor>(Base: TClass) {
  return class extends Base {
    timestamp = Date.now()
  }
}

// 添加属性和方法的混合例子
function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActivated = false;

    activate() {
      this.isActivated = true;
    }

    deactivate() {
      this.isActivated = false;
    }
  }
}

class User {
  name: string = ''
}

// 添加TimeStamped的User
const TimeStampedUser = TimeStamped(User)

// TimeStamped 和 Activatable的类
const TimeStampedActivatableUser = TimeStamped(Activatable(User))

const timestampUserExample = new TimeStampedUser();
console.log(timestampUserExample.timestamp)

const timestampActivatableUserExample = new TimeStampedActivatableUser();
console.log(timestampActivatableUserExample.timestamp)
console.log(timestampActivatableUserExample.isActivated)