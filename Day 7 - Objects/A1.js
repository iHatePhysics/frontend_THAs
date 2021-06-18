var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
function getProps(x){
    let props=[]
    for(i in x){
        props.push(i)
    }
    return props
}
console.log(getProps(student))