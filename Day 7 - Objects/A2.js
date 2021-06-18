function delRoll(x){
    console.log("before deleting property:\n",x)
    delete x.rollno
    console.log("\nAfter deleting property:")
    return x
}

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

console.log(delRoll(student))