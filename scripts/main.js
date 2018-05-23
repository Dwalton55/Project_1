console.log("connected")


console.log('Inside connected')


let counter = 0

let game = {
    level: 0,
    playerArry: [],
    cpuArray: [],
    score: 0, // increase by level times 100
    RandomGen: () => {
        cpuArray.push(Math.floor(Math.random() * 5))

    },
    newgame: () => {
        
        game.level = 1
        game.playerArry = []
        game.cpuArray = []
        game.score = 0
        difficulty = 1
        game.musicmode.musicPlay = false
        domHande.welcomeMessage()
        console.log("message passes")
        turnTracker.cpu = true,
        Turns.cpuTurn()

        //messages cleared and reset to welcome
    },
    musicmode: { // begin object
        playerMusicarray: [],
        musicPlay: false,
        musicMode: ()=>{
            console.log("calling musicmode")
            console.log("music mode on")
            musicPlay = true
            turnTracker.cpuTurn = false
            playerTurn = false
        },
        playsong: ()=>{
            if(game.musicmode.musicPlay){
            domHande.flash(game.musicmode.playerMusicarray,.2)
            }
        },
        clear: ()=>{
            game.musicmode.playerMusicarray =[]
        },
    } // end object


}

console.log("test")
let cpuArray = game.cpuArray
let playerArry = game.playerArry

turnTracker = { // push into game?
    cpuTurn: true,
    playerTurn: false,
}

let playerTurn = turnTracker.playerTurn



let Turns = {
    cpuTurn: () => { // function start
        if (turnTracker.cpuTurn) {
            setTimeout(() => {
                if (game.level === endGame.winning) { // change to a win condition variable

                    console.log("you win, try endless mode") // change to an alert or message
                    domHande.win()
                } else {

                    domHande.updateDisplay()
                    domHande.simeon()
                    game.RandomGen()
                    console.log(cpuArray) //update the display
                    domHande.flash(cpuArray,game.difficulty)
                    console.log('end turn')
                    console.log('making changes in turns.computerturn ')
                    playerArry = []
                    counter = 0
                    cpuTurn = false
                    playerTurn = true
                }
            }, 3000)
        }
    }, // function end

    playerTurn: () => {
        // input large function. will check player array against cpu array after every click
        // click > check array > increase click counter > turn checker > countinue or end turn
        if (playerArry[counter] === cpuArray[counter]) {
            counter++
            if (playerArry.length === cpuArray.length) {
                endGame.hscalc()
                game.level++
                domHande.inround()
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
    winning: 8,
    highscore: 3,
    hscalc: () => {
        console.log('testing')
        if (game.level > endGame.highscore) {
            console.log("NEW HIGH SCORE!!!!!!!!!!!!!!!!!!!!!!!!!")
            endGame.highscore = game.level
        }
    },
}

let domHande = {
    updateDisplay: () => {
        $('.level').html(game.level)
        $('.score').html(game.score)
        $('.highscore').html(endGame.highscore)
    },
    flash: (colors,speed) => {

        colors.forEach((number, index) => {
            console.log(index + "time through")
            if (number === 0) {
                setTimeout(() => {
                    $(".red").toggleClass("redlight");
                    audio.red()
                }, ((index * 2) + 1) * (500*speed));
                setTimeout(() => {
                    $(".red").toggleClass("redlight");
                }, (index * 2) * (500*speed));
                console.log('flashing red')

            } else if (number === 1) {
                setTimeout(() => {
                    $(".blue").toggleClass("bluelight");
                    audio.blue()
                }, ((index * 2) + 1) * (500*speed));

                setTimeout(() => {
                    $(".blue").toggleClass("bluelight");
                }, (index * 2) * (500*speed));
                console.log('flashing blue')

            } else if (number === 2) {
                setTimeout(() => {
                    $(".green").toggleClass("greenlight");
                    audio.green()
                }, ((index * 2) + 1) * (500*speed));

                setTimeout(() => {
                    $(".green").toggleClass("greenlight");
                }, (index * 2) * (500*speed));
                console.log('flashing green')

            } else if (number === 3) {
                setTimeout(() => {
                    $(".yellow").toggleClass("yellowlight");
                    audio.yellow()
                }, ((index * 2) + 1) * (500*speed));

                setTimeout(() => {
                    $(".yellow").toggleClass("yellowlight");
                }, (index * 2) * (500*speed));
                console.log('flashing yellow')
            } else if (number === 4) {
                setTimeout(() => {
                    $(".orange").toggleClass("orangelight");
                    audio.orange()
                }, ((index * 2) + 1) * (500*speed));

                setTimeout(() => {
                    $(".orange").toggleClass("orangelight");
                }, (index * 2) * (500*speed));
                console.log('flashing orange')
            }
        });
    },
    welcomeMessage: () => {
        $('.textarea').html('welcome to the game!')
    },
    lose: () => {
        $('.textarea').html('Nice try Try again')
    },
    inround: () => {
        $('.textarea').html("You Leveled Up! try to keep up")
    },
    simeon: () => {
        $('.textarea').html("Now its my turn!!")
    },
    win: () => {
        $('.textarea').html("You won!! you are the best!!")
    }

}

let audio = {
    red: () => {
        document.getElementById('red').play()
    },
    blue: () => {
        document.getElementById('blue').play()
    },
    green: () => {
        document.getElementById('green').play()
    },
    yellow: () => {
        document.getElementById('yellow').play()
    },
    orange: () => {
        document.getElementById('orange').play()
    },
}


$('.red').on('click', (e) => {
    audio.red()
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(0)
        console.log(playerArry)
        Turns.playerTurn()

    } else if(game.musicmode.musicPlay){
        console.log("music mode red")
        game.musicmode.playerMusicarray.push(0)
    } else {
        console.log(" not your turn!!!")
    }
})
$('.blue').on('click', () => {
    audio.blue()
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(1)
        console.log(playerArry)
        Turns.playerTurn()
    }else if(game.musicmode.musicPlay){
        game.musicmode.playerMusicarray.push(1)
    }else {
        console.log(" not your turn!!!")
    }
})
$('.green').on('click', () => {
    audio.green()
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(2)
        console.log(playerArry)
        Turns.playerTurn()
    }else if(game.musicmode.musicPlay){
        game.musicmode.playerMusicarray.push(2)
    }else {
        console.log(" not your turn!!!")
    }
})
$('.yellow').on('click', () => {
    audio.yellow()
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(3)
        console.log(playerArry)
        Turns.playerTurn()
    }else if(game.musicmode.musicPlay){
        game.musicmode.playerMusicarray.push(3)
    }else {
        console.log(" not your turn!!!")
    }
})
$('.orange').on('click', () => {
    audio.orange()
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(4)
        console.log(playerArry)
        Turns.playerTurn()
    }else if(game.musicmode.musicPlay){
        game.musicmode.playerMusicarray.push(4)
    } else {
        console.log(" not your turn!!!")
    }
})

$('.newgame').on('click', () => {
    console.log('clicked')
    cpuArray = []
    game.newgame()
})
$('.hardmode').on('click',()=>{
    // toggle css to show the button as compressed. add to other buttons
    game.difficulty *=1.75
})

$('.musicmode').on('click',()=>{
    game.musicmode.musicMode()
    console.log("music init")
    game.musicmode.musicPlay = true
    console.log(game.musicmode.musicPlay)
    
})
$('.play').on('click', ()=>{
    console.log('click recived')
    game.musicmode.playsong()
})
$('.clear').on('click',()=>{
    game.musicmode.clear()
})
