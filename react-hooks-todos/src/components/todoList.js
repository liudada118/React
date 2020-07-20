import React from 'react';
import { List, Icon } from 'antd'
const { Item } = List
const TodoList = ({ todos, onToggleFinished }) => {
    // 删除
    const onDelete = e = {

    }
    return (
        <div className="List-wrap">
            {todos.length === 0
                ? (<p>暂无</p>)
                : (<List
                    itemLayout='horizontal'
                    dataSource={todes}
                    renderItem={({ id , text , finished }, idx) => {
                        const itemClasses = classNames({
                            "list-item" : true,
                            "list-item__finished" : finished
                        })
                        return (
                            // 两个下划线表示状态
                            // BEM CSS命名
                            // Element
                            // Modifier
                            <Item className='list-item list-item__finished'>
                                img.list-item--avatar
                            </Item>
                    )
                    }}
                />)}
        </div>
    )
}