const gridContainer = document.querySelector(".grid")
// console.log(document.querySelector(".grid"))
var drawBox=[];
while(drawBox.length < (Math.floor(Math.random()*10)+1)){
    var r = Math.floor(Math.random() * 43) + 1;
    if (drawBox.indexOf(r) === -1){
        drawBox.push(r);
    }
}
console.log(drawBox)
var totalseats = 42 - drawBox.length;
var selseats = 0;
var availseats = totalseats - selseats;
document.getElementById('avail').innerHTML = `Available Seats : ${availseats}`;
document.getElementById('sel').innerHTML = `Selected Seats : ${selseats}`;


for(i=0;i<42;i++){
    
	let box = document.createElement('div');
	box.setAttribute('class','box')
    box.setAttribute('id',i)
	box.addEventListener('click',() =>{
        if(box.classList.contains('booked')){
            alert("Already Booked!")
        }
        else{
            box.classList.toggle('selected');
            if (box.classList.contains('selected')){
                selseats+=1;
            }
            else{
                selseats-=1;
            }
            var availseats = totalseats - selseats;
            document.getElementById('sel').innerHTML = `Selected Seats : ${selseats}`;
            document.getElementById('avail').innerHTML = `Available Seats : ${availseats}`;
        }
		
	});
	gridContainer.appendChild(box)
}



drawBox.forEach(boxId =>{
    document.getElementById(boxId-1).classList.add('selected','booked');
});


