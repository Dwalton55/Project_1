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
welcome : ()=>{
    //display welcom message on message html
},
RandomGen: ()=> {
   cpuArray.push( Math.floor(Math.random() * level))

},
}



turnTracker = {
    cpuTurn : true,
    playerTurn : false,
    switcher : ()=> {
        if(this.cpuTurn === true){
            this.playerTurn = false
            Turns.cpuTurn
        } else{
            if(this.cpuTurn === false){
                playerTurn = true
            }
        }
    }
}
let switcher = turnTracker.switcher

let Turns = {
    cpuTurn : ()=> {
        startgame.RandomGen()
        //update the display

    },

}



 // end of ready doc