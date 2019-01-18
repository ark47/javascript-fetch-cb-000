const app = "I don't do much.";

const token = '019e4243e9b28e20a7e264f8ec831b58b617b23b'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
