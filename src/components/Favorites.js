import React, { useState } from 'react'
import MenuItem from './MenuItem';
import { Menu, Button, Drawer } from 'antd';
import { EyeOutlined, YoutubeOutlined, VideoCameraOutlined, StarFilled } from '@ant-design/icons';
 
const { SubMenu } = Menu
 
function Favorites({ favoriteItems , favoriteOnChange}) {
  const [displayDrawer, setDisplayDrawer] = useState(false)
  const { VIDEO, STREAM, CLIP } = favoriteItems;
 
  const onDrawerClose = () => {
    setDisplayDrawer(false)
  }
 
  const onFavoriteClick = () => {
    setDisplayDrawer(true)
  }
 
  return (
    <>
      <Button type="primary" shape="round" onClick={onFavoriteClick} icon={<StarFilled />}>
        My Favorites
      </Button>
      <Drawer
        title="My Favorites"
        placement="right"
        width={720}
        visible={displayDrawer}
        onClose={onDrawerClose}
      >
        <Menu
          mode="inline"
          defaultOpenKeys={['streams']}
          style={{ height: '100%', borderRight: 0 }}
          selectable={false}
        >
          <SubMenu key={'streams'} icon={<EyeOutlined />} title="Streams">
            <MenuItem items={STREAM} favoriteOnChange={favoriteOnChange}/>
          </SubMenu>
          <SubMenu key={'videos'} icon={<YoutubeOutlined />} title="Videos">
            <MenuItem items={VIDEO} favoriteOnChange={favoriteOnChange} />
          </SubMenu>
          <SubMenu key={'clips'} icon={<VideoCameraOutlined />} title="Clips">
            <MenuItem items={CLIP} favoriteOnChange={favoriteOnChange} />
          </SubMenu>
        </Menu>
      </Drawer>
    </>
  )
}
 
export default Favorites