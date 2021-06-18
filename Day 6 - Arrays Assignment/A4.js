function join(x){
    res = ''
    for(i in x){
        res+=x[i]+","
    }
    return res
}
myColor=["Red","Green","white","Black"]
console.log(join(myColor))