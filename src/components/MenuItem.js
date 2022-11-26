import { Menu, message , Button , Typography} from 'antd'
import React from 'react'
import {DeleteOutlined} from '@ant-design/icons'
import { deleteFavoriteItem } from '../utils'
 
function MenuItem({ items , favoriteOnChange }) {

    const deleteOnClick = (item) => {
        deleteFavoriteItem(item).then(() => {
            favoriteOnChange();
        }).catch(err => {
            message.error(err.message)
        })
    }

    const {Text} = Typography;
    const ellipsis = true;

  return items.map((item) => (
    <Menu.Item key={item.id}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Text ellipsis = {ellipsis} style={{width:500}}> {`${item.broadcaster_name} - ${item.title}`} </Text>
            </a>
            <Button shape='circle' icon={<DeleteOutlined style={{ fontSize: '20px'}} />} onClick={() => deleteOnClick(item)} />
        </div>
        
    </Menu.Item>
    )
  )
}
 
export default MenuItem