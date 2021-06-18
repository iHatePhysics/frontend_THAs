function getVol(x){
    for(i=0;i<x.length;i++){
        let o = x[i]
        let v = 0
        o.id = i+1
        v = Math.PI*o.radius*o.radius*o.height
        o.volume = v.toFixed(4)
        console.log(`\nCylinder ${o.id}:`)
        console.log(`Radius = ${o.radius} units`)
        console.log(`Height = ${o.height} units`)
        console.log(`Volume = ${o.volume} Cubic Units`)
    }
}
var cylinders = [{height:10,radius:6},{height:12,radius:4},{height:8,radius:8},{height:6,radius:2},{height:24,radius:1}]

getVol(cylinders)