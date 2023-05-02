// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User // 해당 자료형에 아래와 같은 프로퍼티들이 있다라는걸 알려준다.
 * @property {string} username
 * @property {string} email
 * @property {Address} address
 */

/** 
 * @returns {Promise<User>} //리턴을 어떤것을 하는지 jsdoc으로 알려준다.
 */
const fetchUser = () => {
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      resolve(res.data)
    })
  })
}
// const fetchUser = () => {
//   return axios.get(url)
// }
// 그냥 axios.get(url) 만 리턴해주면 res.data안에 데이터가 있기에 위에서 설정한 프로퍼티를 바로
// 적용할수없었다. 그렇기에 promise를 사용하여 res.data를 직접 리턴해주어 바로 프로퍼티를 사용할수있게 했다.

fetchUser().then(res => {
  console.log(1)
  console.log(res.email)
})

function startApp() {
  fetchUser()
    .then(function (res) {
      username.innerText = res.username
      email.innerText = res.email
      address.innerHTML = res.address.city
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
