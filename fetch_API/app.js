// ! fetch

fetch('users.json')
      .then(res => res.json())
      .then(json => console.log(json))