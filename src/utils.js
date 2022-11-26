const SERVER_ORIGIN = '';

const loginUrl = `${SERVER_ORIGIN}/login` // '/login' <- 这个 URL 并不合法，应该是：  http:// xxx /xxx/xx 之类的

export const login = (credential) => { // 发送 API 请求，请求成功再执行 then()
    return fetch(loginUrl, { // 把下面这一系列的 Promise 返回, 
        // fetch 规定了以下的配置： method, headers, credentials, body. 
        // Promise 就是 一个 object, {pending} 默认初始值就是 pending
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credential) // 把 object 拍扁 成 string
    }).then((response) => {     // 请求成功的时候，
        if (response.status !== 200) { // 请求失败，throw exception
            throw Error('Fail to log in')
        }

        return response.json(); // 请求成功，解析response
    })
}
// ui layer: login().then().catch()    
// const obj = fecth();  obj is a promis
// obj.then(() => {})


const registerUrl = `${SERVER_ORIGIN}/register`;
 
export const register = (data) => { 
  return fetch(registerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to register');
    }
  })
}


const logoutUrl = `${SERVER_ORIGIN}/logout`;
 
// fetch 只是 网络请求成功
export const logout = () => {
  return fetch(logoutUrl, {
    method: 'POST',
    credentials: 'include',
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to log out');
    }
  })
}

const topGamesUrl = `${SERVER_ORIGIN}/game`;
 
export const getTopGames = () => {
  return fetch(topGamesUrl).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to get top games');
    }
 
    return response.json();
  })
}


const getGameDetailsUrl = `${SERVER_ORIGIN}/game?game_name=`;
 
const getGameDetails = (gameName) => {
  return fetch(`${getGameDetailsUrl}${gameName}`).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to find the game');
    }
 
    return response.json();
  });
}
 
const searchGameByIdUrl = `${SERVER_ORIGIN}/search?game_id=`;
 
export const searchGameById = (gameId) => {
  return fetch(`${searchGameByIdUrl}${gameId}`).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to find the game');
    }
    return response.json();
  })
}
 
export const searchGameByName = (gameName) => {
  return getGameDetails(gameName).then((data) => {
    if (data && data.id) {
      return searchGameById(data.id);
    }
 
    throw Error('Fail to find the game')
  })
}
 
const favoriteItemUrl = `${SERVER_ORIGIN}/favorite`;
 
export const addFavoriteItem = (favItem) => {
  return fetch(favoriteItemUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ favorite: favItem })
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to add favorite item');
    }
  })
}
 
export const deleteFavoriteItem = (favItem) => {
  return fetch(favoriteItemUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ favorite: favItem })
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to delete favorite item');
    }
  })
}
 
export const getFavoriteItem = () => {
  return fetch(favoriteItemUrl, {
    credentials: 'include',
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to get favorite item');
    }
 
    return response.json();
  })
}
 
const getRecommendedItemsUrl = `${SERVER_ORIGIN}/recommendation`;
 
export const getRecommendations = () => {
  return fetch(getRecommendedItemsUrl, {
    credentials: 'include',
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to get recommended item');
    }
 
    return response.json();
  })
}
