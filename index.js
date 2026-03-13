export default (content) => {
  const { users } = content;

  const allNames = users.map(user => user.name);
  console.log(`Пользователи: ${allNames.join(', ')}`);

  const under30 = users
    .filter(user => user.age < 30)
    .map(user => user.name);
  console.log(`Пользователи до 30 лет: ${under30.join(', ')}`);

  const sortedByLikes = [...users].sort((a, b) => b.likes - a.likes);
  const likesInfo = sortedByLikes.map(user => `${user.name}: ${user.likes}`);
  console.log(`Лайки и имя пользователя: ${likesInfo.join(', ')}`);

  const gmailUsers = users
    .filter(user => user.email?.endsWith('@gmail.com'))
    .map(user => ({ id: user.id, name: user.name }));
  console.log('Gmail пользователи:', gmailUsers);
  
  console.log(`Gmail пользователи: ${gmailUsers.map(u => `${u.name} (${u.id})`).join(', ')}`);

  const friendsFromBerlin = [];
  
  for (const user of users) {
    if (user.city === 'Berlin' && user.friends) {
      for (const friend of user.friends) {
        const friendName = friend.name || friend;
        if (friendName && typeof friendName === 'string') {
          friendsFromBerlin.push(friendName);
        }
      }
    }
  }

  const uniqueSorted = [...new Set(friendsFromBerlin)].sort();
  console.log(`Уникальные имена друзей из Берлина: ${uniqueSorted.join(', ')}`);
} 