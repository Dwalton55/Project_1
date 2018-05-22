console.log("connected")


console.log('Inside connected')

let newgame = {
    score: 0,
    level: 6,
    playerArry: [],
    cpuArray: [],
    // activate start game here gameon: true,
}

console.log("test")
let cpuArray = newgame.cpuArray
let level = newgame.level

let startgame = {
welcome : function(){
    //display welcom message on message html
},
RandomGen: function() {
   cpuArray.push( Math.floor(Math.random() * level))

},
}

turnTracker =()=> {
    cpuTurn : true,
    playerTurn : false,
    switcher : function {
        if(this.cpuTurn === true){
            this.playerTurn = false
        } else{
            if(this.cpuTurn === false){
                playerTurn = true
            }
        }
    }
}

let cpuTurn = ()=>{
    if()
}




 // end of ready doc