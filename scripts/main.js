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
let playerArry = newgame.playerArry

let startgame = {
welcome : ()=>{
    //display welcom message on message html
},
RandomGen: ()=> {
   cpuArray.push( Math.floor(Math.random() * 4))

},
}



turnTracker = {
    cpuTurn : true,
    playerTurn : false,
    //not finished in here yet
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

    playerTurn : ()=> {
        // input large function. will check player array against cpu array after every click
        // click > check array > increase click counter > turn checker > countinue or end turn
        
    }
}


let domHande = {

}

//let red = ()=>{
    $('#red').on('click',()=>{
        if()
        console.log('clicked')
       playerArry.push(1) 
    })
    $('#blue').on('click',()=>{
        console.log('clicked')
       playerArry.push(2) 
    })
    $('#green').on('click',()=>{
        console.log('clicked')
       playerArry.push(3) 
    })
    $('#yellow').on('click',()=>{
        console.log('clicked')
       playerArry.push(4) 
    })
//}


 // end of ready doc