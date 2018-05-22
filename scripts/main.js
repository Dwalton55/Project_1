console.log("connected")


console.log('Inside connected')


let counter = 0

let game = {
    level: 0,
    playerArry: [],
    cpuArray: [],
    score: 0, // increase by level times 100
    newgame : ()=>{
        this.score = 0
        this.level = 1
        this.playerArry = []
        this.cpuArray = []
        Turns.cpuTurn()
        //messages cleared and reset to welcome
    },
    // activate start game here gameon: true,
}

console.log("test")
let cpuArray = game.cpuArray
let level = game.level
let playerArry = game.playerArry

let startgame = {
    welcome: () => {
        //display welcom message on message html
    },
    RandomGen: () => {
        cpuArray.push(Math.floor(Math.random() * 4))

    },
    // call cputurn somewhere in side. this function may be unneccessary.
}



turnTracker = {
    cpuTurn: true,
    playerTurn: false,
}

let playerTurn = turnTracker.playerTurn
let switcher = turnTracker.switcher


let Turns = {
    cpuTurn: () => {
        if(game.level === endGame.winning){ // change to a win condition variable
            console.log("you win, try endless mode")
        }
        // run messages
        startgame.RandomGen()
        console.log(cpuArray) //update the display
        console.log('end turn')
        console.log('making changes in turns.computerturn ')
        playerArry = []
        counter = 0
        cpuTurn = false
        playerTurn =true
    },

    playerTurn: () => {
        // input large function. will check player array against cpu array after every click
        // click > check array > increase click counter > turn checker > countinue or end turn
        if (playerArry[counter] === cpuArray[counter]) {
            counter++
            if(playerArry.length === cpuArray.length){
                
                game.level++
                console.log("level up!!! " + game.level)
                console.log('making changes in turns.playerturn ')
                cpuTurn = true
                playerTurn = false
                Turns.cpuTurn()
            } 
        } else {
            console.log("try again")
            //reset to level one
            // call a new game
        }
    }
}

let endGame = {
winning : 5,

}

let domHande = {

}

//let red = ()=>{
$('#red').on('click', () => {
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(0)
        console.log(playerArry)
        Turns.playerTurn()

    } else {
        console.log(" not your turn!!!")
    }
})
$('#blue').on('click', () => {
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(1)
        console.log(playerArry)
        Turns.playerTurn()
    } else {
        console.log(" not your turn!!!")
    }
})
$('#green').on('click', () => {
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(2)
        console.log(playerArry)
        Turns.playerTurn()
    } else {
        console.log(" not your turn!!!")
    }
})
$('#yellow').on('click', () => {
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(3)
        console.log(playerArry)
        Turns.playerTurn()
    } else {
        console.log(" not your turn!!!")
    }
})

$('.newgame').on('click',()=>{
    console.log('clicked')
    game.newgame()
})
//}


 // end of ready doc