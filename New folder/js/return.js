function calculation(num1,num2,opr)
{
 let result;
 if(opr=="+"){
     result=num1+num2
 }else if(opr=="-"){
     result=num1-num2
 }if (opr=="*")
    result=num1*num2
 return result
}
let data=calculation(10,9,"+")
console.log(data)
let p=calculation(10,9,"-")
console.log(p)
let j=calculation(10,9,"*")
console.log(j)