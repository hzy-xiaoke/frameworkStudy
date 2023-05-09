#### Mysql数据库安装包(直装版)下载

https://downloads.mysql.com/archives/installer/

#### my.ini配置文件(5.7.19)

```ini
# 客户端配置
[client]
# 端口
port=3306
# 默认字符集
default-character-set=utf8

# 服务端配置
[mysqld]
# 设置为自己MySQL的安装目录
basedir=D:\XXXX\
# 设置为MySQL的数据目录(会自动创建)
datadir=D:\XXXX\data\
# 端口
port=3306
# 字符集
character_set_server=utf8
# 跳过安全检查(初次安装设置,修改密码后移除)
skip-grant-tables
```

#### 修改用户密码

```sql
use mysql;

update user set authentication_string=password('xxx') where user='root' and Host='localhost';

-- 刷新权限
flush privileges;  
```

#### 连接到Mysql服务

```
mysql -h 主机IP -P 端口 -u 用户名 -p密码
```

#### SQL语句分类

+ DDL => 数据定义语言

  > 建表, 建库, 改库, 改表...

+ DML => 数据操作语句

  > insert, update, delete

+ DQL => 数据查询语句

  > select 

+ DCL => 数据控制语句

  > 管理数据库, 比如用户权限(grant, revoke)

#### 校对规则(collate)

> utf8_bin  => 区分大小写
>
> utf8_general_ci  => 不区分大小写

#### 删除,备份,恢复数据库

```sql
# 显示全部数据库
show databases;

# 显示数据库创建语句
show create database db_name;

# 删除数据库
drop database [if exists] db_name;

# 未使用账号进入数据库,且需确保配置相关的环境变量或进入到Mysql安装目录下的bin目录内进行
# 备份数据库
mysqldump -u 用户名 -p -B 数据库名 > xxxx.sql
# 备份数据库某些表
mysqldump -u 用户名 -p 数据库 表1 表2 > xxxx.sql

# 恢复数据库(需进入数据库后,再进行)
source xxxx.sql
```

#### Mysql常用数据类型(列类型)

| 分类                 | 数据类型  |    大小    | 说明                                                         |
| -------------------- | --------- | :--------: | ------------------------------------------------------------ |
| 数值类型             | tinyint   |  1个字节   |                                                              |
| 数值类型             | smallint  |  2个字节   |                                                              |
| 数值类型             | mediumint |  3个字节   |                                                              |
| 数值类型             | int       |  4个字节   |                                                              |
| 数值类型             | bigint    |  8个字节   |                                                              |
| 数值类型             | float     |  4个字节   | 单精度                                                       |
| 数值类型             | double    |  8个字节   | 双精度                                                       |
| 数值类型             | decimal   | 大小不确定 | [M,D], M指定长度(最大可以为65), D表示小数的位数(最大可以为30) |
| 文本类型(字符串类型) | char      |            | 0~255                                                        |
| 文本类型(字符串类型) | varchar   |            | 0~2^16-1, **最大字符数与使用的编码有关 **(65535 - 3) / 一个字符占的字节数 |
| 文本类型(字符串类型) | text      |            | 0~2^16-1                                                     |
| 文本类型(字符串类型) | longtext  |            | 0~2^32-1                                                     |
| 二进制数据类型       | blob      |            | 0~2^16-1                                                     |
| 二进制数据类型       | longblob  |            | 0~2^32-1                                                     |
| 日期类型             | date      |  3个字节   | 年 月 日                                                     |
| 日期类型             | time      |  3个字节   | 时 分 秒                                                     |
| 日期类型             | datetime  |  8个字节   | 年 月 日 时 分 秒                                            |
| 日期类型             | timestamp |  4个字节   | 时间戳                                                       |

> char(n)和varchar(n)中的n表示的是字符, 而不是字节, 且不区分字符是汉字还是字母
>
> char(n) => 定长, 如果存储的数据小于n个字符, 占用的空间还是n个字符
>
> varchar(n)  => 变长, 如果存储的数据小于n个字符, 占用的空间是实际占用的字符
>
> varchar本身还需要占用1-3个字节来记录存放内容长度
>
> 如果数据长度确定, 建议使用char, 因为使用char查询速度比varchar快, 而如果数据长度不确定, 使用varchar

#### 修改表结构

```sql
# 添加列
alter table 表名 add 列名 datatype 约束,...;

# 修改列(列名不变,改数据类型或约束)
alter table 表名 modify 列名 datatype 约束,...;
# 修改列(修改列名的同时也可以改数据类型或约束)
alter table 表名 change 列名 新列名 datatype 约束,...;

# 删除列
alter table 表名 drop 列名,...;

# 查看表结构
desc tablename;

# 修改表名
rename table 表名 to 新表名;

# 修改表字符集
alter table 表名 character set 字符集;
```

#### 数据表CRUD语句

> C => Create
>
> R => Retrieve
>
> U => Update
>
> D => Delete

+ insert语句注意点

  > 插入的数据应与字段的数据类型相同, 但有些情况会自动进行类型转换(前提是数据经过转换是合理的)
  >
  > 数据的长度应在列的规定范围内
  >
  > values中列出的数据位置必须与要插入数据的列相对应
  >
  > 字符和日期类型数据应包含在单引号中
  >
  > 列可以插入NULL, 前提是该字段允许为NULL
  >
  > 如果是给表中的所有字段添加数据, 可以不写字段名称
  >
  > 如果某字段未设置NOT NULL, 那么在插入数据不给该字段添加数据时, 该字段会默认为NULL, 如果有设置默认值, 则会使用默认值

+ update语句注意点

  > where子句应指定应更新哪些记录, 若没有where子句, 会更新全部记录

+ delete语句注意点

  > where子句应指定应删除哪些记录, 若没有where子句, 会删除全部记录

+ select语句注意点

  > distinct => 去除重复数据
  >
  > between...and...是闭区间
  >
  > 排序依据的列名也可以是别名(在查询列中自己指定的)
  >
  > 聚合函数 => sum, avg, count, max, min
  >
  > count(*) => 返回满足条件的记录的行数
  >
  > count(列) => 统计满足条件的某列个数, 但**会排除NULL**
  >
  > 查询列中包含聚合函数且having中还有对该聚合函数结果进行约束, 使用别名可以减少聚合函数执行次数
  >
  > group by,having,order by,limit都存在时, 顺序为group by => having => order by => limit

#### 字符串相关函数

| 函数                                  | 作用                                             |
| ------------------------------------- | ------------------------------------------------ |
| charset(str)                          | 返回字符串字符集                                 |
| concat(string, [,...])                | 连接字符串, 将多个列拼接成一列                   |
| insrt(string, substring)              | 返回substring在string中出现的位置, 没有返回0     |
| ucase(string)                         | 转换成大写                                       |
| lcase(string)                         | 转换成小写                                       |
| left(string, length)                  | 从string中的左边起取length个字符                 |
| length(string)                        | string长度(按照字节)                             |
| replace(str, search_str, replace_str) | 在str中用replace_str替换search_str               |
| strcmp(string1, string2)              | 逐字符比较两字符串大小                           |
| substring(str, position, [,length])   | 从str的position开始(从1开始计算), 取length个字符 |
| ltrim(string)                         | 去string左端空格                                 |
| rtrim(string)                         | 去string右端空格                                 |
| trim(string)                          | 去string两端空格                                 |

#### 数学相关函数

| 函数                            | 作用                                                |
| ------------------------------- | --------------------------------------------------- |
| abs(number)                     | 求绝对值                                            |
| bin(number)                     | 十进制转二进制                                      |
| ceiling(number)                 | 向上取整                                            |
| conv(number, n, m)              | 进制转换, 将n进制的number转为m进制                  |
| floor(number)                   | 向下取整                                            |
| format(number, n)               | number保留n位小数(四舍五入)                         |
| least(number1, number2, [,...]) | 求一些数中的最小值                                  |
| mod(number, denominator)        | 求余, number % denominator                          |
| rand([seed])                    | 返回[0~1.0]内的随机数, seed不变获得的随机数也不变化 |

#### 时间日期相关函数

| 函数                                    | 作用                       |
| --------------------------------------- | -------------------------- |
| current_date()                          | 当前日期                   |
| current_time()                          | 当前时间                   |
| current_timestamp()                     | 当前时间戳                 |
| date(datetime)                          | 返回datetime的日期部分     |
| date_add(date, interval d_value d_type) | 在date中加上时间           |
| date_sub(date, interval d_value d_type) | 在date上减去一个时间       |
| datediff(date1, date2)                  | 两个日期差(天)             |
| timediff(date1, date2)                  | 两个时间差(时 分 秒)       |
| now()                                   | 当前时间                   |
| year(date)                              | 年                         |
| month(date)                             | 月                         |
| day(date)                               | 日                         |
| unix_timestamp()                        | 返回从1970-1-1到现在的秒数 |
| from_unixtime()                         | 把时间戳转为指定格式的日期 |
| last_day(date)                          | 返回所在月份的最后一天     |

> date(), date_add(), date_sub(), datediff()的日期类型可以是date, datetime, timestamp

#### 加密函数和系统函数

| 函数       | 作用                                               |
| ---------- | -------------------------------------------------- |
| md5()      | 加密, 为字符串算出一个MD5 32的字符串               |
| password() | 加密函数(Mysql8取消了password字段和password()函数) |

#### 流程控制语句

> if(条件, a, b)  => 如果条件为真, 则返回a, 否则返回b
>
> ifnull(a, b)  => 如果a不为NULL, 则返回a, 否则返回b
>
> select case when 条件1 then a, when 条件2 then b, else c end(类型switch-case)  => 如果满足条件1, 则返回a, 如果满足条件2, 则返回b, 否则返回c

#### 分页

> 每页记录数 * (页号 - 1)

#### all,any,some操作符

> all  => 某个字段满足全部条件才算符合, 如a字段的值要比一些数中任意一个都大  => a > all(1,2,3)
>
> any => 某个字段满足其中一个条件就算符合, 如a字段的值只要比一些数中其中一个大  => a > any(1,2,3)
>
> some是any的别名，用法相同

#### 表迁移及复制

> 表迁移 => insert into tableB select * from tableA
>
> 表自我复制(蠕虫复制) => insert into tableA select * from tableA
>
> 创建一个表结构相同的新表  => create table tableB like tableA

#### 多表查询

+ 子查询

  > 单列多行子查询 => 子查询结果为单列多行
  >
  > 形如: select * from tableA where xx in (select xx from tableX)
  >
  > 单行多列子查询 => 子查询结果为单行多列
  >
  > 形如: select * from tableA where (xx,yy,zz) = (select xx,yy,zz from tableX where id=xxx)
  >
  > 多行多列子查询 => 子查询结果为多行多列
  >
  > 形如: select * from tableA where (xx,yy,zz) in (select xx,yy,zz from tableX)
  >
  > 子查询临时表 => 子查询结果作为一个临时表
  >
  > 形如: select * from (select xx,yy,zz from tableX) as tableY, tableA

+ 合并查询

  > union all => 将两个查询结果合并, 不会去重
  >
  > union => 将两个查询结果合并, 会去重

+ 外连接

  > 左外连接 => 左侧的表完全显示  left outer join
  >
  > 右外连接 => 右侧的表完全显示  right outer join

#### 约束

+ primary key => 主键

  > 唯一且非NULL
  >
  > 一张表最多只能有一个主键, 但可以是复合主键

+ not null => 非空

+ unique => 唯一

  > 如果字段没有指定not null, 则设置unique的字段可以有多个NULL
  >
  > 一张表可以有多个字段设置unique

+ foreign key => 外键

  > 外键指向的表的字段, 要求是primary key或者是unique
  >
  > 表所使用的引擎是innodb, 才支持外键
  >
  > 外键字段的类型要和主键字段的类型一致, 但长度可以不同
  >
  > 外键字段的值, 必须在主键字段中出现过或者为NULL(前提是外键字段允许为NULL)

+ check => 检查(数据必须指定满足的条件, 如在某区间内, 某些特定值)

  > MySql5.7不支持check, 只做语法校验, 但不会生效
  >
  > MySql8中支持了check

#### 索引

> 索引本身也会占用空间
>
> 给表加索引后, 一般会加快数据的检索速度, 但在对表中数据进行增, 删, 改操作时, 索引也是要动态维护的, 因此, 加索引一定程度上也会影响增, 删, 改操作的速度

+ 索引类型

  > 主键索引 => 主键会自动设置为主索引
  >
  > 唯一索引 => unique
  >
  > 普通索引 => index
  >
  > 全文索引 => fulltext

```sql
# 查看表索引
show indexes from 表名;
show index from 表名;
show keys from 表名;

# 添加唯一索引
create unique index 索引名称 on 表名(字段);

# 添加普通索引(方式1)
create index 索引名称 on 表名(字段);
# 添加普通索引(方式2)
alter table 表名 add index 索引名称(字段);

# 添加主键索引
alter table 表名 add primary key(字段)

# 删除索引
drop index 索引名称 on 表名;

# 删除主键索引
alter table 表名 drop primary key;
```

+ 适合添加索引的字段

  > 频繁作为查询条件的字段
  >
  > 具有唯一性
  >
  > 更新操作不频繁的字段

#### 事务

```sql
# 开启事务
start transaction

# 设置保存点
savepoint xx

# 回退到某个保存点
rollback to xx

# 回退全部事务
rollback

# 提交事务,所有的操作生效,不能回退
commit
```

> 如果不开启事务, 默认情况下, dml操作是自动提交的, 不能回滚
>
> 如果开始一个事务, 但没有创建保存点, 只能执行rollback后, 回退到事务开始的状态
>
> Mysql的事务机制需要innodb的存储引擎, myisam不支持

+ 事务隔离

  > 多个连接开启各自事务操作数据库中的数据时, 数据库系统要负责隔离操作, 以保证各个连接在获取数据时的准确性
  >
  > 如果不考虑隔离性, 可能会引发: 
  >
  > 脏读 => 一个事务读取另一个事务尚未提交的改变
  >
  > 不可重复读 => 同一查询在同一事务中多次进行, 由于其他提交事务所做的**修改或删除**, 每次返回不同的结果集
  >
  > 幻读 => 同一查询在同一事务中多次进行, 由于其他提交事务所做的**插入操作**, 每次返回不同的结果集

  | Mysql隔离级别              | 脏读 | 不可重复读 | 幻读 | 加锁读 |
  | -------------------------- | ---- | ---------- | ---- | ------ |
  | 读未提交(read-uncommitted) | √    | √          | √    | 不加锁 |
  | 读已提交(read-committed)   | ×    | √          | √    | 不加锁 |
  | 可重复读(repeatable-read)  | ×    | ×          | ×    | 不加锁 |
  | 可串行化(serializable)     | ×    | ×          | ×    | 加锁   |

  ```sql
  # 查看隔离级别(Mysql5.7)
  select @@tx_isolation;
  # 修改隔离级别(Mysql5.7)
  set tx_isolation='隔离级别';
  
  # 查看隔离级别(Mysql8)
  select @@transaction_isolation;
  # 修改隔离级别(Mysql8)
  set transaction_isolation='隔离级别';
  ```

+ 事务的ACID特性

  > 原子性(Atomicity)  => 一个事务是一个不可分割的工作单位
  >
  > 一致性(Consistency)  => 事务必须使数据库从一个一致性状态变到另一个一致性状态
  >
  > 隔离性(Isolation) => 一个事务的执行不能被其他事务干扰
  >
  > 持久性(Durability) => 一个事务一旦提交, 其对数据库中数据的改变就应该是永久性的

#### 表类型和存储引擎

```sql
# 查看所有的存储引擎
show engines;

# 修改存储引擎
alter table 表名 engine=存储引擎;
```

> MyISAM => **不支持事务**, **不支持外键**, 但**访问速度快**, **支持表级锁**
>
> InnoDB => 提供了具有提交, 回滚和崩溃恢复能力的**事务安全**, 相比MyISAM, 其写的处理效率差一些且会占用更多的磁盘空间以保存数据和索引, **支持行级锁**, **支持外键**
>
> MEMORY => **数据存储在内存中**, 每个MEMORY表只实际对应一个磁盘文件, **访问速度非常快**, **默认使用HASH索引**, 当MySql服务关闭, 表中的数据就会丢失, 但表的结构还存在

#### 视图

> 视图是一个虚拟表
>
> 视图的数据来自基表

```sql
# 创建视图
create view 视图名 as select语句;

# 查看视图结构
desc 视图名;

# 修改视图
alter view 视图名 as select语句;

# 查看创建视图的指令
show create view 视图名;

# 删除视图
drop view 视图名;
```

> 创建视图后, 对应视图只有一个视图结构文件(视图名.frm)
>
> 视图的数据变化会影响到基表, 基表的数据变化也会影响到视图
>
> 视图中可以再使用视图

#### Mysql管理

```sql
# 创建用户
create user '用户名'@'host' identified by '密码';

# 删除用户
drop user '用户名'@'host';

# 用户修改自己的密码
set password='新密码';

# 修改其他用户的密码(前提是修改者需要有修改目标用户密码的权限)
set password for '用户名'@'host'='新密码';

# 给用户授权
grant 权限列表 on 数据库.对象名 to '用户名'@'host' [identified by '密码'];

# 回收权限
revoke 权限列表 on 数据库.对象名 from '用户名'@'host';

# 刷新用户权限
flush privileges;
```

> 数据库.对象名  => 代表本系统中的指定数据库的指定对象(表, 视图, 存储过程)
>
> 若要代表本系统的所有数据库的所有对象 => \*.\*
>
> 如果添加了`identified by '密码'`, 则当用户存在, 在授权的同时也会修改用户密码, 而当用户不存在, 则会创建该用户再给用户授权
>
> 在创建用户的时候, 如果不指定host, 则为%, 其表示所有IP都有连接权限(允许远程连接), 如果host指定为如192.168.1.%, 则表示192.168.1.*网段下的IP都有连接权限
>
> 在删除用户的时候, 如果host不为%, 则需要明确指定`'用户名'@'host'`

