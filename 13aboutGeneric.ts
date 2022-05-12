/** 泛型
 *  泛型的关键目的实在成员之间提供有意义的约束
 *  类的实例成员
 *  类的方法
 *  函数参数
 *  函数的返回值
 */

// 动机和示例
// 先进先清除的数据结构
class Queue130<T> {
  private data: T[] = [];
  // private data = [];
  // push = item => this.data.push(item);
  // push = (item: number) => this.data.push(item);
  // pop = (): number => this.data.shift();
  push = (item: T) => this.data.push(item);
  pop = (): T | undefined => this.data.shift();
}

// const queue130 = new Queue130();
// queue130.push(1)
// queue130.push('2')
// console.log(queue130)

const queue131 = new Queue130<number>();
queue131.push(1)
// queue131.push('2') 
