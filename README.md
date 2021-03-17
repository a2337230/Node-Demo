01 搭建服务器环境

数据库操作语句
show tables 显示所有的表
增加
INSERT INTO users(username, `password`, realname) values('zs', '123456', '张三');

``为数据库关键字，使用即可让字段不按照关键字查询

查询
select * FROM users; 查询当前表的所有列
select id,username FROM users; 查询指定列
select * FROM users WHERE username='zs'; 条件查询
select * FROM users WHERE username='zs' AND `password`='123456'; 多条件查询（两者都满足）
select * FROM users WHERE username='zs' OR `password`='123456';多条件查询（满足一个即可）
