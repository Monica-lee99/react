/*
 * @Author: your name
 * @Date: 2021-01-03 14:04:10
 * @LastEditTime: 2021-01-03 14:13:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\utils\request.js
 */
const headers = {
  "Accept": "*/*",
  "Content-Type": "application/json;charset=utf-8",
}
function get(url) { 
  return fetch(url, {
    method:'GET',
    headers:headers
  }).then(response => {
    return handleResponse(url, response)
  }).catch(err => {
    console.error(`Response failed. Url = ${url}. Message = ${err}`)
    return {error:{message:"Request failed"}}
  })
}
function post(url,data) { 
  return fetch(url, {
    method:'POST',
    headers:headers,
    body:JSON.stringify(data)
  }).then(response => {
    return handleResponse(url, response)
  }).catch(err => {
    console.error(`Response failed. Url = ${url}. Message = ${err}`)
    return {error:{message:"Request failed"}}
  })
}
function put(url,data) { 
  return fetch(url, {
    method:'PUT',
    headers:headers,
    body:JSON.stringify(data)
  }).then(response => {
    return handleResponse(url, response)
  }).catch(err => {
    console.error(`Response failed. Url = ${url}. Message = ${err}`)
    return {error:{message:"Request failed"}}
  })
}
function handleResponse(url,response) { 
  if (response.status < 500) {
    return response.json()
  } else {
    console.error(`Response failed. Url = ${url}. Message = ${response.statusText}`)
    return {error: {message: "Request failed due to server error"}}
  }
}
export {get, post, put}