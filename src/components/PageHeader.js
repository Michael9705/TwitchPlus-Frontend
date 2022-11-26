import { Layout, Row, Col, Button } from 'antd'
import Favorites from './Favorites'
import Register from './Register'
import Login from './Login'
import React from 'react'
 
const { Header } = Layout
 
function PageHeader({ loggedIn, signoutOnClick, signinOnSuccess, favoriteItems , favoriteOnChange}) {
  return (
    <Header>
      <Row justify='space-between'>
        <Col>
          {loggedIn && <Favorites favoriteItems={favoriteItems} favoriteOnChange={favoriteOnChange}/>}
        </Col>
        <Col>
          {loggedIn && <Button shape="round" onClick={signoutOnClick}>Logout</Button>}
          {!loggedIn && (
            <>
              <Login onSuccess={signinOnSuccess} />
              <Register />
            </>
          )}
        </Col>
      </Row>
    </Header>
  )
}
 
export default PageHeader