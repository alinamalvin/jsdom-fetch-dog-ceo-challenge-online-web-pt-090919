console.log('%c HI', 'color: firebrick')

fetchImage('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then(json => renderBooks(json));

