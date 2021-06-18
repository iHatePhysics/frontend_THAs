function first(x,n=0){
    if (n == 0) {
        let firstElement = x[0]
        console.log("First Element :",firstElement)
    }
    else{
        let firstElements = []
        for (let i = 0; i < n;i++){
            if (i >= x.length){
                break
            }
            firstElements.push(x[i])
        }
        console.log("First Elements are :",firstElements)
    }
}

first([7,9,0,-2]);
first([[],3]);
first([7,9,0,-2],3);
first([7,9,0,-2],6);
first([7,9,0,-2],-3);
