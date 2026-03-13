export default (content) => {
  const users = content.users

  const allNames = [];
  for (const user of users) {
    allNames.push(user.name)
  }

  console.log(Пользователи: ${allNames.join(', ')})

  const under30 = [];
  for (const user of users) {
    if (user.age < 30) {
      under30.push(user.name)
    }
  }

  console.log(Пользователи до 30 лет: ${under30.join(', ')})

  const Likes = [...users].sort((a, b) => b.likes - a.likes)
  const likesInfo = []
  for (const user of Likes) {
    likesInfo.push(${user.name}: ${user.likes})
  }

  console.log(Лайки и имя пользователя: ${likesInfo.join(', ')})

  const gmailUsers = []

  const usersgmail = users.slice()
  for (const user of usersgmail) {
    if (user.email.endsWith('@gmail.com')) {
      gmailUsers.push({ id: ${user.id}, name: ${user.name} })
    }
  }
  
  console.log(Gmail пользователи: ${gmailUsers.join(', ')})

         const friendsFromBerlin = []

  for (const user of users) {
    if (user.city === 'Berlin' && user.friends) {
      for (const friend of user.friends) {
        const friendName = friend.name || friend
        if (friendName) {
          friendsFromBerlin.push(friendName)
        }
      }
    }
  }

  const uniqueSorted = [...new Set(friendsFromBerlin)].sort()
  
  console.log(Уникальные имена друзей из Берлина: ${uniqueSorted.join(', ')})

}
