function calculation(a,b,op)
{
    if(op=="n"){
        console.log(a+b)
    }
    if (op=="o"){
     console.log(a-b)
    }
    if(op=="j"){
        let k=a*b;
        console.log(a*b)
    }
}
    calculation(2,3,"n")
    calculation(2,3,"o")
    calculation(2,3,"j")