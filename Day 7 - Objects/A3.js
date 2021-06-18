function getLength(x){
    let len = 0
    for (i in x){
        len+=1
    }
    return len
}

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

console.log(getLength(student))