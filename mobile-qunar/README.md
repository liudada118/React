1. css reset
    normalize.css
    index.css  css 移动业务的设置

2. 无状态组件的创建流程刻意练习
 - 组件插入父级组件中思考好props
 - 组件类型到底是什么，如果是无状态组件
    props-types css propTypes
    形参props
    return (<div></div>)
 - props 结构出来要的prop
 - 功能函数建议由父组件来打理
      纯粹的负责render
      函数复用

 3. 年轻的 react hooks 全新开发方式
    class Component -> function
    函数式编程
    class + constructor + 生命周期 + render -> function + react hooks 魔法函数
    - useCallback  缓存一个函数
    - useMemo 

4. 状态组件编写顺序
   - 数据 Provide store

5. redux
   - 简单的redux 项目结构
      store.js createStore reducers
         中间件 axios redux-thunk 让redux支持异步
      reducers.js combineReducers
      actions.js 数据请求，状态改变的触发 都由action来负责
         ActionType 可读性
   - redux API ->状态设计(reducers + action)
      初始值 from to 两个reducers函数
      函数  初始值 action return 初始值
      状态怎么变化 动作的声明 SET_FROM
      - switch case
      - {type , payload} action
      - actionType 可读性
      - actions 写出来

   - 数据组件化
      1. connect 高阶组件
         connect({
            mapState,
            mapDispatch
         })(component)
      2. 创建组件
      3. 状态组件  无状态组件重用方法

   - reducer 
      1. action 标准做法
      - 返回 {type : payload} 更新reducer状态
      - 组件里的事件，生命周期等功能 主要是和数据状态打交道 ， 归为action来做
      - 所有的action export function  在组件里引入需要的actions
      - bindActionCreators 
         action 变成本地调用的函数
            dispatch
      - useMemo 缓存函数
      - connect 中去第二个参数返回 action

      
   1. action 
      from  北京
      to    南昌
      两个action   思想的切换
      盯修改的本质 redux

   - from to 复盘
      1. redux 哲学 ，编程思想
      - reducers 纯函数  负责返回状态 及状态返回的修改更新  那一刻只有一个状态 与之相对应 switch case
      - action actionType 
         是更新reducer的使者  dispatch action 
         from to都有独立的reducer函数和action