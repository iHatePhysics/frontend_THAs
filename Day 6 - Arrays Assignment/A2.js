function array_Clone(x){
    let a = x
    console.log("cloned array :",a)
    return
}

console.log(array_Clone([1,2,4,0]));

console.log(array_Clone([1,2,[4,0]]));