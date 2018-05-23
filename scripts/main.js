console.log("connected")


console.log('Inside connected')


let counter = 0

let game = {
    level: 0,
    playerArry: [],
    cpuArray: [],
    score: 0, // increase by level times 100
    RandomGen: () => {
        cpuArray.push(Math.floor(Math.random() * 4))

    },
    newgame: () => {

        game.level = 1
        game.playerArry = []
        game.cpuArray = []
        game.score = 0
        Turns.cpuTurn()
        //messages cleared and reset to welcome
    },
    // activate start game here gameon: true,
}

console.log("test")
let cpuArray = game.cpuArray
let playerArry = game.playerArry

turnTracker = { // push into game?
    cpuTurn: true,
    playerTurn: false,
}

let playerTurn = turnTracker.playerTurn
let switcher = turnTracker.switcher


let Turns = {
    cpuTurn: () => {
        if (game.level === endGame.winning) { // change to a win condition variable
            console.log("you win, try endless mode") // change to an alert or message
        }

        domHande.updateDisplay()
        console.log('change the screen')
        game.RandomGen()
        console.log(cpuArray) //update the display
        setTimeout(()=>{
            domHande.flash(cpuArray)
        })
        
        console.log('end turn')
        console.log('making changes in turns.computerturn ')
        playerArry = []
        counter = 0
        cpuTurn = false
        playerTurn = true
    },

    playerTurn: () => {
        // input large function. will check player array against cpu array after every click
        // click > check array > increase click counter > turn checker > countinue or end turn
        if (playerArry[counter] === cpuArray[counter]) {
            counter++
            if (playerArry.length === cpuArray.length) {

                game.level++
                console.log("level up!!! " + game.level)
                console.log('making changes in turns.playerturn ')
                cpuTurn = true
                playerTurn = false
                Turns.cpuTurn()
            }
        } else {
            console.log("try again")
            cpuArray = []
            game.newgame()
            // call a new game
        }
    }
}

let endGame = {
    winning: 5,

}

let domHande = {
    updateDisplay: () => {
        $('.level').html(game.level)
        $('.score').html(game.score)
    },
    flash: (colors) => {
        colors.forEach((number, index) => {
            console.log(index + "time through")
            if (number === 0) {
                setTimeout(() => {
                    $(".red").toggleClass("redlight");
                }, ((index * 2) + 1) * 1000);

                setTimeout(() => {
                    $(".red").toggleClass("redlight");
                }, (index * 2) * 1000);
                console.log('flashing red')

            } else if (number === 1) {
                setTimeout(() => {
                    $(".blue").toggleClass("bluelight");
                }, ((index * 2) + 1) * 1000);

                setTimeout(() => {
                    $(".blue").toggleClass("bluelight");
                }, (index * 2) * 1000);
                console.log('flashing blue')

            } else if (number === 2) {
                setTimeout(() => {
                    $(".green").toggleClass("greenlight");
                }, ((index * 2) + 1) * 1000);

                setTimeout(() => {
                    $(".green").toggleClass("greenlight");
                }, (index * 2) * 1000);
                console.log('flashing green')

            } else if (number === 3) {
                setTimeout(() => {
                    $(".yellow").toggleClass("yellowlight");
                }, ((index * 2) + 1) * 1000);

                setTimeout(() => {
                    $(".yellow").toggleClass("yellowlight");
                }, (index * 2) * 1000);
                console.log('flashing yellow')
            }
        });
    }
}


$('.red').on('click', (e) => {
    console.log(e.target.id)
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(0)
        console.log(playerArry)
        Turns.playerTurn()

    } else {
        console.log(" not your turn!!!")
    }
})
$('.blue').on('click', () => {
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(1)
        console.log(playerArry)
        Turns.playerTurn()
    } else {
        console.log(" not your turn!!!")
    }
})
$('.green').on('click', () => {
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(2)
        console.log(playerArry)
        Turns.playerTurn()
    } else {
        console.log(" not your turn!!!")
    }
})
$('.yellow').on('click', () => {
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(3)
        console.log(playerArry)
        Turns.playerTurn()
    } else {
        console.log(" not your turn!!!")
    }
})

$('.newgame').on('click', () => {
    console.log('clicked')
    cpuArray = []
    game.newgame()
})
