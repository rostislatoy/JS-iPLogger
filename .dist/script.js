

// // const fetch = require("node-fetch");

// // const ip = `178.155.5.246`
// // const requestURL = `http://ip-api.com/json/${ip}`



// // function sendRequest(method, url) {
// //   const headers = {
// //     'Content-Type': 'application/json'
// //   }

// //   return fetch(url, {
// //     method: method,
// //     headers: headers
// //   }).then(response => {
// //     if (response.ok) {
// //       return response.text()
// //     }

// //     return response.text().then(error => {
// //       const e = new Error('Что-то пошло не так')
// //       e.data = error
// //       throw e
// //     })
// //   })
// // }

// // sendRequest('GET', requestURL)
// //   .then(data => console.log(data))
// //   .catch(err => console.log(err))





// // function sendRequest (method, url){
// //     return new Promise((resolve, reject) =>{
// //         var XMLHttpRequest = require('xhr2');
// //         var xhr = new XMLHttpRequest();
// //         xhr.open(method,url)
// //         xhr.responseType = 'json'
// //         xhr.onload = () => {
// //             if (xhr.status >= 400){
// //                 reject(xhr.response)
// //             }else{
// //                 resolve(xhr.response)
// //             }
// //         }
// //         xhr.onerror = () => {
// //             reject(xhr.response)
// //         }
// //         xhr.send()
// //     })
// // }

// // sendRequest('GET', requestURL)
// //     .then(data => console.log(data))
//     // .catch(err => console.log(err))




// // function sendRequest (method, url){
// //     return fetch(url)
// //         .then(response => response.json())
// //         .catch(error => console.log(error))
// // }
// // sendRequest('GET', requestURL).then(data => console.log(data)).catch(error => console.log(error))

// const arrayOfRu =  ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я']
// const arrayOfEn =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']



   
// function shiftRu (str){
//     let arr = str.split('')
//     let result = []
//     let shiftResult = []
//     for(let i = 0; i <= arr.length; i++){
//        result.push(arrayOfRu.indexOf(arr[i]))
//       }
//     let dev = result.map((el) => el + 3)
//      for(let i = 0; i <= dev.length; i++){
//         shiftResult.push(arrayOfRu.find((el,ind) => ind == dev[i]))
//     }
//     return shiftResult.filter((el) => el).join('')
// }


// function shiftEn(str){
//     let arr = str.split('')
//     let result = []
//     let shiftResult = []
//     for(let i = 0; i <= arr.length; i++){
//        result.push(arrayOfEn.indexOf(arr[i]))
//       }
//     let dev = result.map((el) => el + 3)
//      for(let i = 0; i <= dev.length; i++){
//         shiftResult.push(arrayOfEn.find((el,ind) => ind == dev[i]))
//     }
//     return shiftResult.filter((el) => el).join('')
// }

// function shiftEnUnc(str){
//     let arr = str.split('')
//     let result = []
//     let shiftResult = []
//     for(let i = 0; i <= arr.length; i++){
//        result.push(arrayOfEn.indexOf(arr[i]))
//       }
//     let dev = result.map((el) => el - 3)
//      for(let i = 0; i <= dev.length; i++){
//         shiftResult.push(arrayOfEn.find((el,ind) => ind == dev[i]))
//     }
//     return shiftResult.filter((el) => el).join('')
// }

// function main(str, lang){
//     if(lang === 'ru'){
//         return console.log(shiftRu(str))
//     }
//      if(lang === 'en'){
//         return console.log(shiftEn(str))
//     }
// }
// main('ягода', 'ru')
// // console.log(shiftEnUnc('vwulqjc'))