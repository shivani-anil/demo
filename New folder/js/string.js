let s="123"
let i=100
let j=i.toString()
console.log(j,typeof j)
let data=String("hello")
console.log(data,typeof data)
let num=Number(1224)
console.log(typeof num)
let s1="hello"
console.log(s1)
console.log(typeof s1)
let s2=new String("hello")
console.log(s2)
console.log(typeof s2)
s2.toUpperCase
console.log(s2)
console.log(s1.startsWith("h"))
console.log(s1.endsWith("e"))
console.log(s1.indexOf("o"))
console.log(s1.lastIndexOf("o"))
let s3="hey all"
console.log(s3)
console.log(s3.trim())
console.log(s3.concat("stay happy"))
console.log(s3.substring(1,3))
console.log(s3.substr(2,5))
console.log(s3.charAt(4))
for(letter of s3){
    console.log(letter)
}