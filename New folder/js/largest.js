let i = 25; j = 15; k = 20
if (i > j && i > k) {
    console.log(i, "is the largest element")
} else if (j > i && j > k) {
    console.log(j, "is the largest element")
}
else {
    console.log(k, "is the largest element")
}
console.log("after if-else block")
let choice = "+"
switch (choice) {
    case "+": {
        console.log(i + j)
        break
    }
    case "-": {
        console.log(i - j)
        break
    }
    default:
        console.log("invalid operation.....")
}
