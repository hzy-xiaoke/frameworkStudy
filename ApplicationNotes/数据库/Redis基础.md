#### NoSQL

> 泛指非关系性数据库
>
> 不遵循SQL标准
>
> 不支持ACID(但不代表其不支持事务)
>
> 远超于SQL的性能

+ 适用场景

  > 对数据高并发的读写
  >
  > 海量数据的读写
  >
  > 数据要求高可扩展性

+ 不适用场景

  > 需要事务支持
  >
  > 基于sql的结构化查询存储, 处理复杂的关系

#### Redis下载及安装(Linux下)

+ redis下载地址: https://download.redis.io/releases/

+ 安装C语言的编译环境 => yum install gcc

  + Centos8下执行`yum install gcc`后, 出现提示: `Error : Failed to download metadata for repo 'appStream': Camot prepare internal mirrorlist: No URLsin mirrorlist`

    > 解决方案: https://blog.csdn.net/bubbleyang/article/details/123580252?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_default&utm_relevant_index=1

    ```
    cd /etc/yum.repos.d/
    
    sed -i 's/mirrorlist/#mirrorlist' /etc/yum.repos.d/CentOS-*
    
    sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
    ```

    + sed命令(来源: https://baijiahao.baidu.com/s?id=1588552298343207312&wfr=spider&for=pc)

      + 基本替换

        > sed 's/原字符串/新字符串/' 文件   => 只会替换第一个满足条件的字符串
        >
        > sed 's/原字符串/新字符串/g' 文件  => 会替换全部满足条件的字符串

      + 替换某行或多行内容

        > sed '行号c 新字符串' 文件   =>  将某行替换成新字符串
        >
        > sed '起始行号,终止行号c 新字符串' 文件   =>  将起始行到终止行作为整体换成新字符串

      + 一次执行多条命令

        > sed -e 命令1 -e 命令2 -e 命令3

      + 保存替换结果到文件中

        > sed -i 命令 文件

+ 解压命令  => tar -zxvf xxxx.tar.gz
+ 解压完成进入相应目录

+ 在相应目录下执行`make`命令进行编译

  + `-bash: make: command not found`

    > 解决方案:  yum -y install gcc automake autoconf libtool make

+ 安装 => make install

+ 查看默认安装目录(/usr/local/bin)

  > redis-benchmark  => 性能测试工具
  >
  > redis-check-aof  => 修复有问题的AOF文件
  >
  > redis-check-rdb  => 修复有问题的RDB文件
  >
  > redis-cli  => 客户端, 操作入口
  >
  > redis-sentinel => Redis集群使用
  >
  > redis-server  => Redis服务器启动命令

#### 后台启动及关闭

+ 启动

  + 进入redis解压后的包里找到`redis.conf`, 将其复制一份到其他目录 => cp xxx.redis.conf /xxx/redis.conf

  + 切换到复制文件的目录中, 将`redis.conf`中的`daemonize no`中的`no`改成`yes`

  + 切换到redis安装目录下, 后台启动redis服务 =>  redis-server /xxx/redis.conf

+ 关闭

  > 方式1:  在客户端内中, 使用`shutdown`命令
  >
  > 方式2: 找到redis对应的进程好, 再用`kill`命令结束进行 => ps -ef | grep redis  => kill -9 进程号

#### Redis基础知识点

> Redis是单线程+多路IO复用技术

> 默认16个数据库
>
>  select 数据库ID(从0开始)  => 切换数据库
>
>  dbsize  => 查看当前数据库的key的数量
>
> flushdb  => 清空当前库
>
>  flushall  => 清除全部库

+ Redis键(key)操作

  > keys *   =>  查看当前库所有key
  >
  > exists key => 判断某个key是否存在  
  >
  > type key => 查看指定key对应value的类型
  >
  > del key  => 删除指定的key数据
  >
  > unlink key  => 异步删除指定key的数据
  >
  > expire key 时间  => 给指定key设置过期时间(默认单位为秒)
  >
  >  ttl key  =>查看key还有多长时间过期(-1表示用不过期,-2表示已过期)

#### 常用五大数据类型(key-value中的value类型)

+ 字符串String

  > String类型是二进制安全的
  >
  > String类型是Redis最基本的数据类型
  >
  > 一个Redis中字符串value最多可以是512M

  + 常用命令

    > set key value  => 设置键-值
    >
    > get key  =>  查询对应键值
    >
    > append key value => 将value追加到原值的末尾
    >
    > strlen key  =>  获取值的长度
    >
    > setnx key value => 只有在key不存在时, 才设置对应的value

    > incr key  =>  将key中存储的数字值增1(只能对数字值操作, 如果为空, 新增值为1)
    >
    > decr key => 将key中存储的数字值减1(只能对数字值操作, 如果未空, 新增值为-1) 
    >
    > incrby/decrby key 步长 => 将key中存储的数字值增减, 自定义步长

    > mset key1 value1 key2 value2 ... => 同时设置一个或多个key-value对
    >
    > mget key1 key2 ...  => 同时获取一个或多个value
    >
    > msetnx key1 value1 key2 value2...  => 同时设置一个或多个key-value, **当且仅当所有给定key不存在**(key都要不存在)

    > getrange key 起始位置 结束位置 => 获取值的范围(类似substring,但包括结束位置)
    >
    > setrange key 起始位置 value => 用value复写key所存储的字符串值

    > setex key 过期时间 value => 设置键值的同时, 设置过期时间, 单位为秒
    >
    > getset key value => 设置新值同时获得旧值

+ 列表List

  > 其底层是个双向链表, 对两端的操作性能很高, 通过索引下标操作中间的节点性能会较差
  >
  > 当value中没有值后, key也算不存在了

  + 常用命令
  
    > lpush/rpush key1 value1 values2 ... => 从左边/右边插入一个或多个值
    >
    > lpop/rpop key [count] => 从左边/右边吐出一个或多个值
    >
    > rpoplpush key1 key2 => 从key1列表右边吐出一个值, 插到key2列表左边
  
    > lrange key start stop => 按照索引下标获取元素(从左往右)
    >
    > lindex key index => 按照索引下标获取元素(从左往右)
    >
    > llen key  => 获取列表长度
  
    > linsert key before/after value newvalue => 在value的左边/右边插入newvalue 
    >
    > lrem key n value => 从左边删除n个value
    >
    > lset key index value => 将列表key下标为index的值替换为value

+ 集合Set

  > 与List类型, 但其会自动排重
  >
  > 底层是一个value为null的hash表

  + 常用命令

    > sadd key value1 value2 ... => 将一个或多个member元素加入到集合key中
    >
    > smembers key => 取出集合的所有值
    >
    > sismember key value => 判断集合key是否含有value值, 有返回1, 没有返回0
    >
    > scard key => 返回集合的元素个数

    > srem key value1 value2 ... => 删除集合中的某些元素
    >
    > spop key [count] => 随机从集合中吐出一个或多个值
    >
    > srandmember key n => 随机从集合中取出n个值, 不会从集合中删除
    >
    > smove key1 key2 value => 把集合key1中的value移动到集合key2

    > sinter key1 key2 => 返回两个集合的交集元素
    >
    > sunion key1 key2 => 返回两个集合的并集元素
    >
    > sdiff key1 key2 => 返回两个集合的差集元素(key1中有, key2中没有)

+ 哈希Hash

  > 键值对集合
  >
  > field和value的映射表
  >
  > 特别适合用于存储对象
  >
  > 类型Java中的Map<String,Object>

  + 常用命令

    > hset key field value =>给key集合中的field键赋值value 
    >
    > hget key field => 从key集合中的field取出value
    >
    > hmset key field1 value1 field2 value2 ... => 批量设置hash值(貌似之后某版本移除了)
    >
    > hexists key field => 查看哈希表key中, 给定field是否存在
    >
    > hkeys key => 列出hash集合的所有field
    >
    > hvals key => 列出hash集合的所有value
    >
    > hincrby key field increment => 为哈希表key中的域field的值加上增量increment
    >
    > hsetnx key field value => 将哈希表key中的域field的值设置为value, 当且仅当域field不存在

+ 有序集合Zset(sorted set)

  > 与普通集合set类型, 也是一个没有重复元素的字符串集合
  >
  > 有序集合的每个成员都关联一个评分, 按照从最低分到最高分的方式排序集合中的成员
  >
  > Zset底层使用了两个数据结构: hash和跳跃表

  + 常用命令

    > zadd key score1 value1 socre2 value2 ... => 将一个或多个member元素及其score值加入到有序集合key中
    >
    > zrange key start stop [withscores] => 返回有序集合key中, 下标在start~stop之间的元素
    >
    > zrangebyscore key min max [withscores] [limit offset count] => 返回有序集和中key, 所有score值介于min和max之间(包括等于min或max)的成员(有序集合成员按score值从小到大的进行排序)
    >
    > zrevrangebyscore key max min [withscores] [limit offset count] => 返回有序集和中key, 所有score值介于min和max之间(包括等于min或max)的成员(有序集合成员按score值从大到小的进行排序)
    >
    > zincrby key increment value  => 为元素的score加上增量
    >
    > zrem key value  => 删除集合下, 指定值的元素
    >
    > zcount key min max => 统计集合中score在min~max范围内的元素个数
    >
    > zrank key value => 返回value在集合中的排名

#### Redis配置文件(redis.conf)部分说明

> 配置大小单位, 只支持bytes, 不支持bit, 大小写不敏感

> redis默认是只能本地进行访问, 若要远程能访问需要将配置文件中的`bind 127.0.0.1 -::1`注释掉, 同时将`protected-mode yes`中的`yes`改为`no`

> redis的占用的端口号默认为6379, 若需修改端口号, 在配置文件中将`port 6379`中的`6379`改为目标端口号

> `timeout` => 设置客户端在连接后一段时间内未操作会自动关闭连接的超时时间, 0表示不会自动关闭

> `tcp-keepalive` => 设置检测客户端状态的时间间隔

> `daemonize` => 设置redis是否作为守护进程运行(放在后台运行), 取值有yes/no

> `loglevel`  => 日志级别

> 开启密码认证 
>
> 关闭服务后仍要存在 => 在配置文件中找到`#requirepass foobared`, 打开注释, 退出保存, 重启服务, 其中`foobared`为密码
>
> config set requirepass 密码 => 仅在本次redis服务开启内有效(即设置密码后退出重进需要密码才能命令的操作) 
>
> 密码认证 => auth 密码

> `maxclients` => 设置redis同时可以与多少个客户端进行连接

#### 发布和订阅

> 一种消息通信模式

#### Redis新数据类型

+ Bitmaps

  > 适用场景: 存在大量用户, 用于统计用户活跃度

  > setbit key offset value 
  >
  > bitcount key
  >
  > bitop operation destkey key1 key2 (operation可以为and, or, not , xor)

+ HyperLogLog

  > 用来做基数统计

  > pfadd key value
  >
  > pfcount key
  >
  > pfmerge destkey key1 key2

+ Geospatial

  > geoadd key longitude latitude member
  >
  > geopos key member
  >
  > geodist key member1 member1 [unit]
  >
  > georadius key longitude latitude raduis [unit]

#### Redis远程连接开启

+ 在`redis.conf`中找到`bind 127.0.0.1 -::1`注释掉
+ 在`redis.conf`中找到`protected-mode yes`将`yes`改成`no`
+ 重启redis
+ 查看防火墙状态`systemctl status firewalld`, 如果查看到`Active:active(running)`, 则需关闭防火墙`systemctl stop firewalld`

#### Redis事务操作

> Redis事务是一个单独的隔离操作, 事务中的所有命令都会序列化, 按顺序执行
>
> 事务在执行的过程中, 不会被其他客户端发送来的命令请求所打断
>
> Redis事务的主要作用是串联多个命令防止别的命令插队

> 从输入multi命令开始, 输入的命令都会依次进入命令队列中, 但不会执行, 直到输入exec后, Redis会将之前的命令队列中的命令依次执行
>
> **组队的过程中可以通过discard来放弃组队**

> **组队中某个命令出现了报告错误, 执行时整个队列都会被取消**
>
> **如果执行阶段某个命令报出错误, 则只有报错的命令不执行, 而其他的命令会执行, 不会回滚**

> 在执行multi之前, 先执行watch key1 [key2]...可以监视一个(或多个)key, 如果在事务执行之前这个(或这些)key被其他命令所改动, 那么事务将被打断
>
> 如果在执行watch命令之前, exec命令或discard命令先被执行了, 那么就不需要再执行unwatch

+ Redis事务三特性

  > 单独的隔离操作
  >
  > 没有隔离级别的概念
  >
  > 不保证原子性

#### 使用ab工具模拟测试

+ 安装

  > yum install httpd-tools

+ 使用

  > ab -n 请求次数 -c 并发数 -p 包含数据的文件 -T Content-Type(默认为text/plain) 请求地址
  >
  > 使用例子:  ab -n 1000 -c 100 -p ~/postfile -T application/x-www-form-urlencoded http://192.168.1.105:8080/doSecKill

#### 秒杀简易案例

+ 基本逻辑

	```
  1.用户ID及商品ID非空判断
  2.连接Redis
  3.拼接key
      3.1 拼接库存key
      3.2 拼接秒杀成功用户key
  4.获取库存,如果库存为null,秒杀还没开始
  5.判断用户是否重复秒杀操作
  6.判断如果商品数量(库存数量)小于1,秒杀结束
  7.秒杀过程
      7.1 库存减一
      7.2 把秒杀成功用户添加到清单中
  8.关闭连接
	```

+ 一些问题

  + 连接超时问题

    > 可通过连接池解决

  + 超卖问题

    > 可通过加乐观锁解决

    ```
    1.用户ID及商品ID非空判断
    2.连接Redis
    3.拼接key
        3.1 拼接库存key
        3.2 拼接秒杀成功用户key
    + 监视库存
    4.获取库存,如果库存为null,秒杀还没开始
    5.判断用户是否重复秒杀操作
    6.判断如果商品数量(库存数量)小于1,秒杀结束
    7.秒杀过程
    + 使用事务
    	+ 组队操作
    		库存减一
    		把秒杀成功用户添加到清单中
    	+ 执行
    8.关闭连接
    ```
  

#### Redis持久化

+ RDB(Redis DataBase)

+ AOF(Append Only File)

  + 修复AOF文件

    > /usr/local/bin/redis-check-aof --fix xxx.aof

> 同时开启RDB和AOF, 默认会使用AOF

#### Redis主从复制

> 主机数据更新后根据配置和策略, 自动同步到备机的master/slaver机制, Master以写为主, Slave以读为主

+ 好处

  + 读写分离

  + 容灾快速恢复

+ 大致配置过程(单机实现)

  + 为每个服务各准备一个配置文件, 每个服务各占一个端口

    > pidfile
    > port
    > dbfilename

  + 启动各redis服务

    > redis-server xxx.conf

    > 查看当前主机运行状态 => info replication

  + 在从机上执行相应命令

    > slaveof 主机IP 端口号

+ 原理

  > 当从服务器连接上主服务器之后, 从服务器会向主服务器发送进行数据同步的消息

  > 主服务器接到从服务器发送过来的同步信息, 主服务器数据进行持久化到rdb文件中, 之后将rdb文件发送给从服务器, 从服务器拿到rdb文件进行读取(全量复制)

  > 每次主服务器进行写操作之后, 会将相应修改命令发送给从服务器进行数据同步(增量复制)

+ 常用3招

  + 一主二仆

    > 一个主服务器, 多个从服务器, 主服务器挂掉后, 从服务器默认依旧是从服务器

  + 薪火相传

    > 从服务器还可以有从服务器, 主服务器进行写操作后, 从服务器会同步数据, 从服务器的从服务器也会同步数据

  +  反客为主

    > 主服务器挂掉后从服务器变为主服务器(默认不会)
    >
    > 手动更改 => slaveof no one

+ 哨兵模式

  > 能够后台监控主机是否故障, 如果故障了根据投票数自动将从库转换为主库

  > sentinel monitor 为监控对象起的服务器名称 主机IP 端口 至少有多少个哨兵同意才迁移

  + 故障恢复

    + 从下线的主服务的所有从服务里面挑选一个从服务器, 将其转成主服务

      > 选择条件依次为:
      >
      > 选择优先级靠前的(优先级在配置文件里进行设置, 不同版本的redis对应的名称存在一定差异)
      >
      > 选择偏移量最大的(偏移量是指获得原主机数据最全的)
      >
      > 选择runid最小的从服务(每个redis实例启动后都会随机生成一个40位的runid)

    + 挑选出新的主服务之后, sentinel向原主服务的从服务发送slaveof新主服务的命令(其他从服务依旧是从服务, 只是他们所对应的master变为了新的主服务)

    + 当已下线的原主服务重新上线时, sentinel会向其发送slaveof命令, 让其成为新主服务的从服务(原主服务变为从服务)

#### Redis集群

> Redis集群实现了对Redis的水平扩容, 即启动N个redis节点, 将整个数据库分布存储在这N个节点中, 每个节点存储总数据的1/N
>
> Redis集群通过分区来提供一定程度的可用性: 即使集群中有一部分节点失效或者无法进行通信, 集群也可以继续处理命令请求

+ 好处

  > 实现扩容
  >
  > 分摊压力
  >
  > 无中心配置相对简单

+ 不足

  > 多键操作是不被支持的
  >
  > 多键的Redis事务是不被支持的

#### Redis应用问题

+ 缓存穿透

  > **查询一个一定不存在的数据**, 由于缓存是不命中时需要从数据库查询, 查不到数据则不写入缓存, 这将导致这个不存在的数据每次请求都要到数据库去查询, 进而给数据库带来压力

  + 解决方案
    + 对空值缓存
    + 设置可访问的名单(白名单)
    + 采用布隆过滤器
    + 进行实时监控

+ 缓存击穿

  > **热点key**在某个时间点过期的时候, 而恰好在这个时间点对这个key有大量的并发请求过来, 从而大量的请求打到db

  + 解决方案
    + 预先设置热门数据
    + 实时调整
    + 使用锁

+ 缓存雪崩

  > **缓存中数据大批量到过期时间**, 而查询数据量巨大, 引起数据库压力过大甚至宕机

  + 解决方案
    + 构建多级缓存架构
    + 使用锁或队列
    + 设置过期标志更新缓存
    + 将缓存失效时间分散开

+ 分布式锁

  > 控制分布式系统之间同步访问共享资源的一种方式

  > 上锁 => setnx key value
  >
  > 释放锁 => del key
  >
  > 上锁同时加过期时间 => set key value nx ex 时长

  + 为确保分布式锁可用, 至少要确保锁的实现同时满足以下条件

    + 互斥性

      > 在任意时刻, 只有一个客户端能持有锁

    + 不会发生死锁

      > 即使有一个客户端在持有锁的期间崩溃而没有主动解锁, 也能保证后续其他客户端能加锁

    + 解铃人还须系铃人

      > 加锁和解锁必须是同一个客户端, 客户端自己不能把别人的锁给解了

    + 加锁和解锁必须具有原子性

#### Redis6.0新功能

+ ACL

  > Access Control List(访问控制列表), 该功能允许根据可以执行的命令和可以访问的键来限制某些连接

  > acl list  => 展现用户权限列表
  >
  > acl cat => 查看添加权限指令类别
  >
  > acl cat 类型 => 查看类型下具体的命令
  >
  > acl whoami  => 查看当前用户

+ IO多线程

  > IO多线程其实指客户端交互部分的网络IO交互处理模块多线程, 而非执行命令多线程
  >
  > Redis6执行命令依然是单线程

+ 工具支持Cluster

+ ...
