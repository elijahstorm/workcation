import{w as e}from"./index-3eb4e9ad.js";const r=()=>{const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return Array.from(Array(16)).reduce(o=>o+t.charAt(Math.floor(Math.random()*t.length)),"")+new Date().getTime().toString().substring(9)},a=e([{id:r(),name:"Toronto",img:"toronto.jpg",price:120,propertyCount:76},{id:r(),name:"Malibu",img:"malibu.jpg",price:215,propertyCount:43},{id:r(),name:"Chicago",img:"chicago.jpg",price:130,propertyCount:115},{id:r(),name:"Seattle",img:"seattle.jpg",price:135,propertyCount:63},{id:r(),name:"Colorado",img:"colorado.jpg",price:85,propertyCount:47},{id:r(),name:"Miami",img:"miami.jpg",price:115,propertyCount:86}]);export{a as d};