#### Java的特点

+ 简洁高效
+ 跨平台
+ 面向对象
+ 分布式计算
+ 健壮性
+ 多线程

---

#### Java的运行机制

+ 在后缀为`.java`的文件中编写指令, 此文件就是Java源文件

+ 将Java源文件编译成字节码文件`.class`(16进制) 

  > 跨平台特性的实现原理之一

+ 计算机读取字节码文件运行程序

---

#### Java三大体系

+ Java SE: 定义了Java的核心类库, 包含了各种常用组件, 是Java开发的基础
+ Java ME: 基于Java SE, 针对于移动设备的开发组件
+ Java EE: 基于Java SE, 扩展出的企业级开发组件

---

#### Java环境

+ JRE: Java Runtime Environment  => Java运行环境
+ JDK: Java Development Kit => Java开发包

---
#### 一个简单的Java程序(Hello World)

```java
(1)HelloWorld.java
public class HelloWorld{
	public static void main(String[] args){
        System.out.println("Hello World");
    }
}
(2)javac HelloWorld.java
(3)java HelloWorld
```

+ 注意事项

  > 编译程序的命令是javac, 文件名是Java源文件名称
  >
  > 运行程序的命令是java, Java源文件名称不需要加后缀
  >
  > 编写的时候要注意字母的大小写, Java程序对大小写敏感

---

#### 编码规范

+ 强制性编码规范(必须遵循的规范, 否则程序会报错)

  > Java程序的文件名和类名必须保持一致
  >
  > main方法必须按照格式编写
  >
  > 类是组织Java代码结构的, 类中的方法是执行业务逻辑的, 类和方法都必须使用`{}`组织其结构, 而且必须成对出现, 缺一不可

+ 建议编码规范(建议遵循的规范)

  > 一行只写一条语句
  >
  > 注意代码缩进

---

#### 注释分类

```java
//单行注释

/*
多行注释
多行注释
*/

/**
* 文档注释
* 文档注释
*/
```

---

#### 关键字

> Java关键字是指Java语言预先定义好的, 具有指定意义的标识符, 是程序的核心组成部分, 不是由开发者定义的

---

#### 变量

> 变量是计算机语言中的一个概念, 可以表示某个具体的数值, 并且这个值可以改变
>
> 常量也是用来表示某个数值的, 但是值是固定的, 无法修改

+ 变量命名规则

  > 只能使用数字, 字母, 下划线(_), 美元符号($)组成
  >
  > 不能以纯关键字命名
  >
  > 不能以数字开头, 以字母, 下划线(_), 美元符号($)开头, 但不建议使用美元符号开头
  >
  > 变量名可以大小字母混用, 但首字符应小写
  >
  > 变量名不限制长度, 尽量使用完整的单词进行命名, 不要使用缩写

---

#### 基本数据类型(8种)

| 分类       | 基本数据类型 | 所占空间               | 描述                                  |
| ---------- | ------------ | ---------------------- | ------------------------------------- |
| 数值类型   | byte         | 1个字节(8位二进制数)   | 数据的最小单位, 一个字节为8位二进制数 |
| 数值类型   | short        | 2个字节(16位二进制数)  | 短整型                                |
| 数值类型   | int          | 4个字节(32位二进制数)  | 整型                                  |
| 数值类型   | long         | 8个字节(64位二进制数)  | 长整型                                |
| 数值类型   | float        | 4个字节(32位二进制数)  | 单精度浮点型                          |
| 数值类型   | double       | 8个字节(64位二进制数)  | 双精度浮点型                          |
| 非数值类型 | char         | 2个字节(16位二进制数)  | 单个字符                              |
| 非数值类型 | boolean      | 1/8个字节(1位二进制数) | 判断逻辑条件成立或不成立, true/false  |

---

#### 数据类型转换

+ 自动转换

  > 只能从低字节向高字节进行转换, 反之则不行(由俭入奢易, 由奢入俭难)
  >
  > 整型数据类型都可以自动转为浮点型, 不需要考虑低字节和高字节的问题
  >
  > 小范围 => 大范围
  >
  > 自动类型转换只包括数值类型, char和boolean不能进行自动类型转换

+ 强制转换

  > 大范围 => 小范围

---

#### 运算符

+ 赋值运算符(=)
+ 基本算术运算符(+, -, *, /, %, ++, --)
+ 复合算术运算符(+=, -=, *=, /=, %=)
+ 关系运算符(==, !=, >, <, >=, <=)

+ 逻辑运算符(&, |, !, &&(短路与), ||(短路或))

  > &和&&运算结果完全相同, 但是运算效率不同, &&运算效率**可能**更高
  >
  > 例子: 
  >
  > A运算 & B运算 => A运算和B运算都要进行计算后才能得到最后的结果
  >
  > A运算 && B运算 => 如果**A运算结果为false**, 那么B运算就不需要再进行计算了,可以直接得到最终结果为false, 而如果A运算结果为true, 一样需要进行B运算才能决定最后的结果
  >
  > |和||运算结果完全相同, 但是运算效率不同, ||运算效率**可能**更高
  >
  > 例子:
  >
  > A运算 | B运算 =>  A运算和B运算都要进行计算后才能得到最后的结果
  >
  > A运算 || B运算 => 如果**A运算结果为true**, 那么B运算就不需要再进行计算了,可以直接得到最终结果为true, 而如果A运算结果为false, 一样需要进行B运算才能决定最后的结果

+ 条件运算符(又称三元表达式或三目运算符)

+ 位运算符

  > 对表达式以二进制的形式进行运算

  + &(按位与)  => 每一位的数字一一对应, 若都为1，该位记为1, 否则为0

  + |(按位或)  => 每一位的数字一一对应, 只要有一个为1, 该位记为1, 否则为0

  + ^(按位异或)  => 每一位的数字一一对应, 相同记为0, 否则为1

  + <<(左移)  => A << B(A乘以2的B次方)

  + \>\>(右移)  => A \>> B(A除以2的B次方)

![img](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2998/20220411153115.png)

---

#### 流程控制

+ if-else

+ 多重if

+ if嵌套

+ switch-case

  > switch支持的数据类型包括int, short, byte, char, 枚举, String, 不支持boolean

+ 循环

  + while循环

  + do-while循环

  + for循环

  + 双重循环

  + 终止循环

    > break, continue

---

#### 数组

+ 声明数组

  > 数据类型 数组名[]
  >
  > 数据类型[] 数组名

+ 常见错误
  + 数据类型不匹配
  + 边声明边赋值必须写在同一行
  + 数组下标越界

+ 二维数组

---

#### Java面向对象

> 面向对象是一种编程思想, 将程序中的所有参与角色全部抽象成对象, 通过对象之间的相互调用来实现业务功能
>
> 面向对象的核心思想就是重用性以及扩展性和灵活性

+ 类和对象

  > 每个对象都有各自的特征:
  >
  > 属性 => 对象的静态特征
  >
  > 方法 => 对象的动态特征

  > 对象就是用来描述客观存在的一个实体, 该实体由一组属性和方法组成

  > 类是产生对象的模板, 所有的对象都是通过类来创建的的

  > 类和对象的关系: 类是对象的抽象化描述, 将不同对象共有的特性(属性和方法)抽象出来的一个模板, 对象是类的具体实例
  >
  > 类是抽象概念, 是一种描述, 而对象是具体的

+ 类的定义

+ 构造函数(又称构造方法, 构造器)

  > 一个类默认会有一个隐式无参构造函数, 当定义一个有参构造函数后, 隐式无参构造函数将不存在(覆盖), 若还需要无参构造函数, 需显式定义

+ this关键字

  > this用来指代当前类的实例化对象, 通过this可以调用当前类的属性和方法
  >
  > this除了可以在类中访问属性, 也可以在类中调用方法
  >
  > 调用构造方法 => this(参数列表);
  >
  > 调用普通方法 => this.方法(参数列表);

+ 方法重载

  > 构成重载的条件:
  >
  > 在同一个类中
  >
  > 方法名相同
  >
  > 参数列表不同(个数或者类型不同)
  >
  > **与返回值和访问权限修饰符无关**

+ 成员变量和局部变量

  > 成员变量: 如果一个变量在方法外声明, 类中声明, 则其是成员变量
  >
  > 局部变量: 如果一个变量在方法中被声明, 则其是局部变量

  > 当成员变量和局部变量名称冲突的时候, 局部变量的优先级更高
  >
  > 成员变量会有默认值, 局部变量没有默认值

+ 封装

  > 封装就是将类的信息全部隐藏到内部, 外部不能直接进行赋值和访问, 必须通过类中提供的方法来进行访问和赋值, 从而可以在方法中添加逻辑处理来实现过滤, 屏蔽错误数据的赋值

  + static关键字 


  > static表示静态或者全局, 可以用来修饰成员变量, 成员方法, 代码块
  >
  > 用static修饰的成员变量和成员方法不需要再依赖于对象, 可以直接通过类来访问, 也可以通过任意一个对象来访问
  >
  > static修饰的成员方法叫静态方法, 静态方法中不能使用this关键字

+ 继承

  > 一个类只能有一个直接父类

  > 实现了继承关系的父子类, 在创建子类对象的时候, 无论调用有参构造函数还是无参构造函数, 都会默认先创建父类对象, 并且是**默认通过无参构造创建父类对象**, 若父类不存在无参构造或子类想调用父类的有参构造, 则在子类构造函数中需要通过**super关键字**来决定用于创建父类对象的构造函数

  + 访问权限修饰符

  |           | 同一个类 | 同一个包   | 不同包     | 子类       |
  | --------- | -------- | ---------- | ---------- | ---------- |
  | public    | 可以访问 | 可以访问   | 可以访问   | 可以访问   |
  | protected | 可以访问 | 可以访问   | 不可以访问 | 可以访问   |
  | 默认      | 可以访问 | 可以访问   | 不可以访问 | 不可以访问 |
  | private   | 可以访问 | 不可以访问 | 不可以访问 | 不可以访问 |

  + 方法重写

  > 子类在继承父类方法的基础上, 对父类方法进行覆盖
  >
  > 构造方法不能被重写

  > 方法重写规则:
  >
  > 父子类方法名相同
  >
  > 父子类方法参数列表相同
  >
  > 子类方法返回值与父类方法返回值相同或是其子类
  >
  > 子类方法的访问权限不能小于父类(父类中访问权限为private的方法未被子类继承, 因而无法重写)

|          | 所在位置 | 方法名 | 参数列表 | 返回值                     | 访问权限     |
| -------- | -------- | ------ | -------- | -------------------------- | ------------ |
| 方法重写 | 子类     | 相同   | 相同     | 相同或者是父类返回值的子类 | 不能小于父类 |
| 方法重载 | 同一个类 | 相同   | 不同     | 没有要求                   | 没有要求     |

+ 多态

  > 同一个行为具有多个不同表现形式或形态的能力
  
  > 多态的使用:
  >
  > 1.定义方法时形参类型为父类, 调用方法时传入的参数为子类对象
  >
  > 2.定义方法时返回值类型为父类, 调用方法时返回子类对象
  
  + 抽象方法和抽象类
  
    > 抽象方法: 只有方法的声明, 没有方法的定义, 通过给方法添加**abstract**关键字来实现, 一旦某个方法被定义为抽象方法, 则该方法所在的类必须声明为抽象类
  
    > 抽象类与普通类的区别是抽象类不能被实例化, 抽象方法和普通方法的区别是抽象方法没有方法体
    >
    > 抽象类中可以没有抽象方法, 但普通类中不能定义抽象方法
    >
    > 父类中包含抽象方法, 则子类必须要实现该方法, 如果子类也是抽象类, 则可以不实现该方法


---

#### Object类

> Object是JDK提供的一个类, 位于 java.lang 包中, 该类是Java中所有类的直接父类或间接父类, Java中的每一个类都是Object类的派生类

+ 重写Object类的方法

  > toString => 以字符串的形式来返回某个类的实例化对象信息
  >
  > equals => 判断两个对象是否相等
  >
  > hashCode => 返回对象的散列码

---

#### 包装类

> 包装类是Java提供的一组类, 专门用来创建8种基本数据类型对应的对象

| 基本数据类型 | 包装类    |
| ------------ | --------- |
| byte         | Byte      |
| short        | Short     |
| int          | Integer   |
| long         | Long      |
| float        | Float     |
| double       | Double    |
| char         | Character |
| boolean      | Boolean   |

+ 装箱和拆箱

  > 装箱 => 将基本数据类型转为对应的包装类对象
  >
  > 拆箱 => 将包装类对象转为对应的基本数据类型

  + 装箱相关方法

    > public Type(type value)
    >
    > public Type(String value)/public Type(char value)
    >
    > valueOf(type value)
    >
    > valueOf(String value)/valueOf(char value)

  + 拆箱相关方法

    > typeValue()
    >
    > parseType(String value) 
    >
    > toString(type value)

---

#### 接口

> 接口也是多态的一种实际应用, 实现了解耦合

> 接口是一个极度抽象的抽象类, 抽象类中允许存在非抽象方法, 接口中不能存在非抽象方法, 必须全部是抽象方法

> 不能实例化接口对象, 只能实例化其对应的实现类对象, 实现类中全部是接口抽象方法的具体实现

---

#### 异常

> Java中有一组类专门来描述各种不同的运行时错误, 叫做异常类, Java结合异常类提供了处理错误的机制
>
> 一旦发生错误, 会自动创建一个包含错误信息的异常对象, 并将该对象提交给系统, 由系统转交给能够处理异常的代码进行处理

> 异常分为两类: Error 和 Exception

+ 异常类

  + RuntimeException

    > ArithmeticException => 表示数学运算异常
    >
    > ClassNotFoundException => 表示类未定义
    >
    > IllegalArgumentException =>  表示参数格式错误
    >
    > ArrayIndexOutOfBoundsException => 表示数组下标越界异常
    >
    > NullPointerException => 表示空指针异常
    >
    > NoSuchMethodException => 表示方法未定义异常
    >
    > NumberFormatException => 表示将其他数据类型转为数值类型的时候不匹配异常

+ throw和throws

  > throw => 表示主动抛出一个异常
  >
  > throws => 修饰方法, 表示该方法可能会抛出某个异常

---

#### 多线程

+ 线程和进程

  > 一个进程由一个或多个线程组成
  >
  > 进程是独享内存空间, 线程是共享内存空间
  >
  > 单独的线程无法执行, 必须依赖于进程才能执行

+ Java中线程的使用

  + 继承Thread类

    > 1.定义一个A类, 该类继承Thread类, 将任务写入到run方法中
    >
    > 2.创建一个A类的实例对象
    >
    > 3.调用A类的实例对象的start方法开启线程, 执行任务

    > A类相当于线程+任务

  + 实现Runnable接口

    > 1.定义一个B类, 该类实现Runnable接口, 将任务写入run方法中
    >
    > 2.创建一个B类的实例对象
    >
    > 3.创建一个Thread类的实例对象, 并将B类的实例对象作为Thread构造函数的参数传入
    >
    > 4.调用Thread类的实例对象的start方法开启线程, 执行任务

    > B类相当于任务

+ 线程的状态

  + 创建状态
  + 就绪状态
  + 运行状态
  + 阻塞状态
  + 终止状态

+ 线程调度

  + 线程休眠

    > 让当前线程暂停执行, 运行状态 -> 阻塞状态, 让出CPU资源
    >
    > sleep(long millis)   单位毫秒

  + 线程合并

    > 将指定的某个线程加入到当前线程中, 合并为一个线程
    >
    > join()  => 独占CPU资源到任务执行完毕
    >
    > join(long millis)  => 独占CPU资源一段时间, 无论任务是否执行完毕

  + 线程礼让

    > 在某个特定的时间点, 让线程暂停抢占CPU资源的行为, 运行状态 -> 阻塞状态
    >
    > yield()

+ 线程同步

  > 多个线程同时访问某个资源时, 不是同时对资源进行访问修改, 而是顺序执行
  >
  > synchronized关键字
  >
  > synchronized也可以修饰代码块
  >
  > 在判断加上同步锁后实际是否有效时, 应从所上锁的资源以及线程间所争夺的目标资源进行考虑

+ 重入锁

  > ReentrantLock是对synchronized的升级, 可以给同一个资源添加多个锁
  >
  > synchronized是通过JVM实现的, ReentrantLock是通过JDK实现的
  >
  > synchronized自动解锁, ReentrantLock必须手动释放锁

  > 上锁 => lock()
  >
  > 解锁 => unlock()

  > ReentrantLock具备限时性的特点 => 判断某个线程在特定的时间内能否获取到锁(某个线程能否在特定时间内访问某个共享资源)
  >
  > tryLock(long timeout, TimeUnit unit)  => 返回值为boolean类型

+ 生成者消费者者模式

  > 生成者和消费者共用一块缓冲区, 生成者负责添加数据, 消费者负责取出数据

  ```java
  public class Product {
      private final Integer id;
      private final String producerName;
  
      public Product(Integer id,String producerName){
          this.id = id;
          this.producerName = producerName;
      }
  
      @Override
      public String toString() {
          return this.id + "-" + this.producerName;
      }
  }
  ```

  ```java
  import java.util.Arrays;
  
  public class Container {
      // 容器存放的产品
      private final Product[] products = new Product[6];
      private Integer index = 0;
  
      // 生产产品
      public synchronized void push(Product product){
          while (index == products.length){
              try {
                  this.wait();
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
          }
          this.notify();
          products[index] = product;
          index++;
          System.out.println(Thread.currentThread().getName() +
                  "生产了一件产品(" + product + ") => " + Arrays.toString(products));
      }
  
      // 消费产品
      public synchronized void pop(){
          while (index == 0){
              try {
                  this.wait();
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
          }
          this.notify();
          Product product = products[index - 1];
          products[index - 1] = null;
          index--;
          System.out.println(Thread.currentThread().getName() +
                  "消费了一件产品(" + product + ") => " + Arrays.toString(products));
      }
  }
  ```

  ```java
  public class Producer implements Runnable{
      private Container container = null;
  
      public Producer(Container container){
          this.container = container;
      }
  
      @Override
      public void run() {
          for (int i = 0; i < 10; i++){
              Product product = new Product(i,Thread.currentThread().getName());
              this.container.push(product);
              try {
                  Thread.currentThread().sleep(1500);
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
          }
      }
  }
  ```

  ```java
  public class Consumer implements Runnable{
      private Container container = null;
  
      public Consumer(Container container){
          this.container = container;
      }
  
      @Override
      public void run() {
          for (int i = 0; i < 10; i++){
              this.container.pop();
              try {
                  Thread.currentThread().sleep(1000);
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
          }
      }
  }
  ```

  ```java
  public class Test {
      public static void main(String[] args) {
          Container container = new Container();
          new Thread(new Producer(container),"生产者1").start();
          new Thread(new Producer(container),"生产者2").start();
          new Thread(new Producer(container),"生产者3").start();
          new Thread(new Producer(container),"生产者4").start();
          new Thread(new Consumer(container),"消费者1").start();
          new Thread(new Consumer(container),"消费者2").start();
          new Thread(new Consumer(container),"消费者3").start();
          new Thread(new Consumer(container),"消费者4").start();
      }
  }
  ```

---

#### 集合框架

> 集合 => 长度可变, 可以保存任意数据类型的动态数组
>
> 集合框架 => 不是一个类, 而是由一组类和接口构成的一个框架体系

> 集合接口
>
> Collection, List, Set, Map, Iterator, ListIterator, Enumeration, SortedSet, SortedMap, Queue, Map.Entry

+ Collection接口

  > 存储一组无序, 不唯一的对象

  + 常用方法

    > size, isEmpty, contains, iterator, toArray, add, remove, containsAll, addAll, removeAll, clear, equals, hashCode

  + 常用子接口

    > List, Set

+ List接口实现类

  > ArrayList => 底层是基于数组的数据结构, 查询快, 添加/删除慢
  >
  > LinkedList => 先进先出的队列, 采用链表的形式来实现, 元素之间通过存储彼此的位置信息实现连接, 查找慢, 添加/删除快

+ Set接口实现类

  > Set中存储的数据没有顺序, 并且唯一

  > HashSet => 唯一且无序(元素的存储顺序和遍历顺序不一致)
  >
  > LinkedHashSet => 唯一且有序(元素的存储顺序和遍历顺序一致)
  >
  > TreeSet => 唯一且有序(集合内部自动对所有元素进行升序排序)  

  + 如果添加的元素是自定义的类, 要确保唯一性, 需要自主提供元素比较方法(即重写equals或hashCode方法)

  + 对于TreeSet而言, 若要加入的对象是自定义的类, 需要实现Comparable接口(即需要提供排序的方法)

    > A.compareTo(B)
    >
    > 1 => 表示A>B
    >
    > 0 => 表示A=B
    >
    > -1 => 表示A<B

+ Map接口

  > Map操作的是一对元素, 元素以key-value的形式进行存储

  + 常用方法

    > size, isEmpty, containsKey, containsValue, get, put, remove, clear, keySet, values

  + 常用实现类

    > HashMap => 无序, key不可重复, value可重复的元素
    >
    > TreeMap => 有序(通过key对集合中的元素进行排序)

    + 对于TreeMap 而言, 若key是自定义的类, 则需要实现Comparable接口(即需要提供排序的方法)

+ Collections工具类

  > Collections是JDK专门针对集合操作提供的一个工具类

  + 常用方法

    > addAll  => 一次性添加多个元素
    >
    > reverse  => 颠倒元素顺序
    >
    > swap  => 交换元素
    >
    > sort => 排序
    >
    > binarySearch => 折半查找元素下标
    >
    > replaceAll =>  元素替换
    >
    > max => 找最大值
    >
    > min => 找最小值

+ 泛型

  > 定义类的时候不指定类中信息的具体数据类型, 而是用一个标识符来代替, 当外部实例化对象时再来指定具体的数据类型

  + 泛型通配符 => `?`

  + 泛型上限和下限

    + 泛型上限 => 类名<泛型标识符 extends 上限类名>

      > 实例化的具体数据类可以是上限类型本身以及其子类

    + 泛型下限 => 类名<泛型标识符 super 下限类名>

      > 实例化的具体数据类可以是下限类型本身以及其父类

  + 泛型接口

    > 实现泛型接口的方式:
    >
    > 1.实现类在定义时继续使用泛型标识
    >
    > 2.实现类在定义时直接给出具体的数据类型

---

#### 实用类

+ 枚举

  > 由一组常量组成的类型, 只能在指定的取值区间定义

+ Math类

  > 提供一系列的数学方法, 静态方法, 静态方法

+ String类

+ StringBuffer类

  > 底层也是用数组来存储字符串内容, 默认长度为16

+ 日期类

  + Date

    > 创建对象来表示当前的系统时间

  + Calendar

    > 把日期数据赋给Calendar, 再调用Calendar的相关方法完成运算

    | 常量         | 描述               |
    | ------------ | ------------------ |
    | YEAR         | 年                 |
    | MONTH        | 月                 |
    | DAY_OF_MONTH | 天(当月中的第几天) |
    | DAY_OF_YEAR  | 天(当年中的第几天) |
    | WEEK_OF_YEAR | 周(当年中的第几周) |
    | HOUR_OF_DAY  | 小时               |
    | MINUTE       | 分钟               |
    | SECOND       | 秒                 |
    | MILLISECOND  | 毫秒               |

    | 方法                     | 描述                       |
    | ------------------------ | -------------------------- |
    | getInstance              | 获取Calendar实例化对象     |
    | set(int field,int value) | 给静态常量赋值             |
    | get(int field)           | 取出静态常量的值           |
    | Date getTime()           | 获取Calendar对应的Date对象 |

---

#### IO流

> 使用Java程序完成输入和输出的功能

> 输入 => 将文件以数据流的形式读取到Java程序中
>
> 输出 => 将Java程序中的数据写入到文件中

+ File类

  > File类专门用来创建文件对象

+ Java中的数据流

  > 按照方向分, 可以分为输入流和输出流
  >
  > 按照单位分, 可以分为字节流和字符流
  >
  > 按照功能分, 可以分为节点流和处理流

+ 字节流
  + 输入字节流 InputStream
  + 输出字节流 OutputStream

+ 字符流
  + 输入字符流 Reader
  + 输出字符流 Writer

+ 缓冲流

  > 缓冲流是处理流, 处理流不能直接关联文件进行操作, 必须要基于节点流(字节流, 字符流)进行操作

  + 字节输入缓冲流 BufferedInputSteam
  + 字节输出缓冲流 BufferedOutputStream
  + 字符输入缓冲流 BufferedReader
  + 字符输出缓冲流 BufferedWriter

> 注意: 一个汉字所占的字节数与编码方式有关
>
> ASCII => 一个汉字占2个字节
>
> UTF-8 => 一个汉字占3个字节(扩展B区后的汉字占4个字节)
>
> Unicode => 一个汉字占2个字节
>
> GB2312 => 一个汉字占2个字节
>
> GBK => 一个汉字占2个字节

+ 序列化和反序列化

  > 序列化 => 将内存中的对象输出到文件中
  >
  > 反序列化 => 从文件中读取数据还原成内存中的对象

---

#### 反射

> 通过一个实例化对象映射到类, 程序运行期间获取到类的信息

+ Class类

  > Class类是反射的基础, 类的结构需要抽象成对象, Class类就是用来描述其他类的结构(Class的每一个对象对应的都是其他类的结构特征)

  + 创建Class实例化对象的方式

    > 静态方法 forName(目标类)
    >
    > 目标类.class   类字面量
    >
    > 对象.getClass()

+ 获取类结构

  + Class常用方法

    > isInterface, isArray, isAnnotation, getName, getClassLoader, getSuperclass, getPackage, getInterfaces, getModifiers, getFields, getMethods, getConstructors

    + 获取构造函数

      > getConstructor(Class<?>... parameterTypes)  => 获取指定的构造函数
      >
      > getConstructors()  => 获取全部构造函数

    + 获取方法

      > getMethod(String name, Class<?>... parameterTypes) => 获取指定的方法
      >
      > getMethods()  => 获取某个类的全部方法
      >
      > **包括父类中的方法, 且访问权限为public的方法**

      > getDeclaredMethod(String name, Class<?>... parameterTypes) => 获取指定的方法
      >
      > getDeclaredMethods() => 获取某个类中独有的方法
      >
      > **不包括父类中的方法, 且访问权限不限制**

    + 获取成员变量

      > getField(String name)  => 获取指定的的成员变量
      >
      > getFields() => 获取某个类的全部成员变量
      >
      > **包括父类中的成员变量, 且访问权限为public的成员变量**

      > getDeclaredField(String name)  => 获取指定的的成员变量
      >
      > getDeclaredFields() => 获取某个类中独有的成员变量
      >
      > **不包括父类中的成员变量, 且访问权限不限制**

---

#### 网络编程

+ IP

  > 互联网中的每台终端设备都有一个唯一标识, 网络中的请求可以根据这个标识找到具体的终端, 这个唯一标识就是IP地址

+ 端口

  > 同一台终端设备上正在运行的每一个应用都有一个唯一的端口, 请求通过端口可以区分不同的应用

+ TCP协议

  > 面向连接的传输层协议, 传输数据之前必须先建立稳定的连接
  >
  > 优点 => 稳定可靠, 不会出现数据丢失的情况, 数据是按照先后顺序依次到达
  >
  > 缺点 => 速度慢, 效率低

  > 服务端 => ServerSocket
  >
  > 客户端 => Socket

  ```java
  public class Server {
      public static void main(String[] args) {
          ServerSocket serverSocket = null;
          Socket socket = null;
          InputStream inputStream = null;
          OutputStream outputStream = null;
          DataInputStream dataInputStream = null;
          DataOutputStream dataOutputStream = null;
  
          try {
              serverSocket = new ServerSocket(8080);
              System.out.println("-------服务端-------");
              System.out.println("服务端已启动,等待客户端到来......");
              while (true){
                  // 接收客户端
                  socket = serverSocket.accept();
                  inputStream = socket.getInputStream();
                  dataInputStream = new DataInputStream(inputStream);
                  String request = dataInputStream.readUTF();
                  System.out.println("接收了客户端请求:" + request);
  
                  // 响应客户端
                  outputStream = socket.getOutputStream();
                  dataOutputStream = new DataOutputStream(outputStream);
                  String response = "你拿我测试?";
                  System.out.println("服务器响应客户端:" + response);
                  dataOutputStream.writeUTF(response);
              }
          } catch (IOException e) {
              e.printStackTrace();
          } finally {
              try {
                  dataInputStream.close();
                  dataOutputStream.close();
                  outputStream.close();
                  inputStream.close();
                  socket.close();
                  serverSocket.close();
              }catch (IOException e){
                  e.printStackTrace();
              }
          }
      }
  }
  ```

  ```java
  public class Client {
      public static void main(String[] args) {
          Socket socket = null;
          InputStream inputStream = null;
          OutputStream outputStream = null;
          DataInputStream dataInputStream = null;
          DataOutputStream dataOutputStream = null;
  
          try{
              socket = new Socket("127.0.0.1",8080);
              System.out.println("-------客户端-------");
              // 发送信息给服务端
              outputStream = socket.getOutputStream();
              dataOutputStream = new DataOutputStream(outputStream);
              String request = "测试文本";
              System.out.println("客户端发送:" + request);
              dataOutputStream.writeUTF(request);
  
              // 接收服务端的响应
              inputStream = socket.getInputStream();
              dataInputStream = new DataInputStream(inputStream);
              String response = dataInputStream.readUTF();
              System.out.println("接收到服务端响应:" + response);
          } catch (IOException e){
              e.printStackTrace();
          } finally {
              try{
                  dataOutputStream.close();
                  dataInputStream.close();
                  outputStream.close();
                  inputStream.close();
                  socket.close();
              } catch (IOException e){
                  e.printStackTrace();
              }
          }
      }
  }
  ```

+ UDP协议

  > 连接是不可靠的, 不需要先建立连接, 直接发送数据即可
  >
  > 优点 => 速度快, 效率高
  >
  > 缺点 => 不安全, 可能出现数据丢失

  > DatagramSocket
  >
  > DatagramPacket

  ```java
  public class TerminalA {
      public static void main(String[] args) {
          byte[] bytes = new byte[1024];
          DatagramPacket datagramPacket = null;
          DatagramSocket datagramSocket = null;
          try {
              // 接收数据
              datagramPacket = new DatagramPacket(bytes,bytes.length);
              datagramSocket = new DatagramSocket(8081);
              datagramSocket.receive(datagramPacket);
              String message = new String(datagramPacket.getData(),0,datagramPacket.getLength());
              System.out.println("收到来自终端(" + datagramPacket.getSocketAddress() + ")的消息:" + message);
  
              // 发送数据
              String reply = "好的";
              SocketAddress socketAddress = datagramPacket.getSocketAddress();
              DatagramPacket datagramPacket1 = new DatagramPacket(reply.getBytes(),reply.getBytes().length,socketAddress);
              datagramSocket.send(datagramPacket1);
          } catch (IOException e) {
              e.printStackTrace();
          } finally {
              datagramSocket.close();
          }
      }
  }
  ```

  ```java
  public class TerminalB {
      public static void main(String[] args) {
          DatagramPacket datagramPacket = null;
          DatagramSocket datagramSocket = null;
          try{
              // 发送数据
              String message = "多喝水,多运动";
              InetAddress inetAddress = InetAddress.getByName("localhost");
              datagramSocket = new DatagramSocket(8082);
              datagramPacket = new DatagramPacket(message.getBytes(),message.getBytes().length,inetAddress,8081);
              datagramSocket.send(datagramPacket);
  
              // 接收数据
              byte[] bytes = new byte[1024];
              DatagramPacket datagramPacket1 = new DatagramPacket(bytes,bytes.length);
              datagramSocket.receive(datagramPacket1);
              String receiveMsg = new String(datagramPacket1.getData(),0,datagramPacket1.getLength());
              System.out.println("收到来自终端(" + datagramPacket1.getSocketAddress() + ")的消息:" + receiveMsg);
          } catch (IOException e) {
              e.printStackTrace();
          } finally {
              datagramSocket.close();
          }
      }
  }
  ```

  

