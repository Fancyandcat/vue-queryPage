## vue框架下基于模块的查询参数保存方案

### 情景还原
+ 有平行路由A-list,B-list。下面分别有A-active,B-active。
+ 当在路由A-list上携带参数进入A-active，后返回吐出路由，希望在A-list页保留参数
+ 当在路由B-list上携带参数进入B-list, 后返回路由，希望A-list清空参数状态

### 技术栈
+ vuex + vue-route

### 基本思路
+ 把需要保存参数状态的部分看成一个模块，比如A-list,A-active 看作A模块。找到一个可以区分不同模块的点
+ 在同一路由下的操作时，使用router.name作为key,参数对象作为value的对象存入vuex
+ 在created中读取对应的参数对象
+ （假如以router-name为不同点）在路由页监听$route，当路由进行不属于同一模块使用mapMutations清空参数对象
