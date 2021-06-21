const agent2 = {
    agentName:"Reyna",
}

const agent1 ={
    agentName:"Raze"
}
function getAgent(x,y,z){
    document.getElementById('agentName').innerHTML = `Name: ${this.agentName}`;
    document.getElementById('agentClass').innerHTML = `Class: ${x}`;
    document.getElementById('agentTier').innerHTML = `Tier: ${y}`;
    document.getElementById('agentDifficulty').innerHTML = `Difficulty: ${z}`;
    document.getElementById('agentImage').style.backgroundImage = `url('images/${this.agentName}.png')`

}

document.getElementById('agent1').addEventListener('click',()=>{
    getAgent.apply(agent1,["Duelist","S","Easy"])
});

document.getElementById('agent2').addEventListener('click',()=>{
    getAgent.apply(agent2,["Duelist","A","Average"])
});
// getAgent.call(agent2,6,12,0)

// getAgent.apply(agent2,[23,16,5])

// const stat = getAgent.bind(agent1,30,27,2)

// console.log(stat)
// stat()