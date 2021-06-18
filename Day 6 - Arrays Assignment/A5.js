function mostFrequent(x){
    let count = 0
    let element = ''
    let hashmap={}
    for(i = 0; i<x.length;i++){
        var e = x[i]
        if (hashmap[e]){
            hashmap[e]+=1
        }
        else{
            hashmap[e] = 1
        }
        if (hashmap[e]>count){
            count = hashmap[e]
            element = e
        }
    }
    console.log(`Most Frequent Element '${element}' occured ${count} times`);
}

var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

mostFrequent(arr)