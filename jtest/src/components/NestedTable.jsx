import { Table, Badge, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);

function NestedTable () {
    return (<Table
    className="components-table-demo-nested"
    columns={columns}
    expandable={{ expandedRowRender }}
    dataSource={data}
  />)
}