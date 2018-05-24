console.log("connected")
let counter = 0
let game = {
    level: 0,
    playerArry: [],
    cpuArray: [],
    score: 0,
    hardmode: false,
    difficulty: 1, // increase by level times 
    RandomGen: () => {
        cpuArray.push(Math.floor(Math.random() * 5))

    },
    newgame: () => {

        game.level = 1
        game.playerArry = []
        game.cpuArray = []
        game.score = 0
        game.musicmode.musicPlay = false
        console.log(game.musicmode.musicPlay)
        $('.rotateMessage').html('Lets do this!')
        domHande.welcomeMessage()
        console.log("message passes")
        console.log(turnTracker.cpu)
        Turns.cpuTurn()

        //messages cleared and reset to welcome
    },
    musicmode: { // begin object
        playerMusicarray: [],
        musicPlay: false,
        musicMode: () => {
            console.log("calling musicmode")
            console.log("music mode on")
            $('.rotateMessage').html('I guess relaxing is good too. <br> Let me know when you are ready to play')
            $('.text').html('Lets relax and hear you play')
            musicPlay = true
            turnTracker.cpuTurn = false
            playerTurn = false
        },
        playsong: () => {
            if (game.musicmode.musicPlay) {
                domHande.flash(game.musicmode.playerMusicarray)
            }
        },
        clear: () => {
            game.musicmode.playerMusicarray = []
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
        turnTracker.cpuTurn = true
        console.log("CPU Turn?", turnTracker.cpuTurn)
        if (turnTracker.cpuTurn) {
            setTimeout(() => {
                if (game.level === endGame.winning) { // change to a win condition variable

                    console.log("you win, try endless mode") // change to an alert or message
                    domHande.win()
                } else {
                    game.score = game.level *100
                    console.log("Updating the display")
                    domHande.updateDisplay()
                    $('.rotateMessage').html('Try to keep up!')
                    domHande.simeon()
                    game.RandomGen()
                    console.log(cpuArray) //update the display
                    domHande.flash(cpuArray)
                    console.log('end turn')
                    console.log('making changes in turns.computerturn ')
                    playerArry = []
                    counter = 0
                    cpuTurn = false
                    playerTurn = true
                }
            }, 3000)
        }//if begin
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
                $('.rotateMessage').html('Good job!')
                Turns.cpuTurn()
            }
        } else {

            $('.text').html('Wrong Button. <br> Click new game to try again')
            $('.rotateMessage').html('Womp womp womp')
            cpuArray = []
            turnTracker.playerTurn = false
            // game.newgame()
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
            $('.text').html("New HighScore!!!!")
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
    flash: (colors) => {

        colors.forEach((number, index) => {
            console.log(index + "time through")
            if (number === 0) {
                setTimeout(() => {
                    $(".red").toggleClass("redlight");
                    audio.red()
                }, ((index * 2) + 1) * (1000 * game.difficulty));
                setTimeout(() => {
                    $(".red").toggleClass("redlight");
                }, (index * 2) * (1000 * game.difficulty));
                console.log('flashing red')

            } else if (number === 1) {
                setTimeout(() => {
                    $(".blue").toggleClass("bluelight");
                    audio.blue()
                }, ((index * 2) + 1) * (1000 * game.difficulty));

                setTimeout(() => {
                    $(".blue").toggleClass("bluelight");
                }, (index * 2) * (1000 * game.difficulty));
                console.log('flashing blue')

            } else if (number === 2) {
                setTimeout(() => {
                    $(".green").toggleClass("greenlight");
                    audio.green()
                }, ((index * 2) + 1) * (1000 * game.difficulty));

                setTimeout(() => {
                    $(".green").toggleClass("greenlight");
                }, (index * 2) * (1000 * game.difficulty));
                console.log('flashing green')

            } else if (number === 3) {
                setTimeout(() => {
                    $(".yellow").toggleClass("yellowlight");
                    audio.yellow()
                }, ((index * 2) + 1) * (1000 * game.difficulty));

                setTimeout(() => {
                    $(".yellow").toggleClass("yellowlight");
                }, (index * 2) * (1000 * game.difficulty));
                console.log('flashing yellow')
            } else if (number === 4) {
                setTimeout(() => {
                    $(".orange").toggleClass("orangelight");
                    audio.orange()
                }, ((index * 2) + 1) * (1000 * game.difficulty));

                setTimeout(() => {
                    $(".orange").toggleClass("orangelight");
                }, (index * 2) * (1000 * game.difficulty));
                console.log('flashing orange')
            }
        });
    },
    welcomeMessage: () => {
        $('.text').html('welcome to the game!')
    },
    lose: () => {
        $('.text').html('Nice try Try again')
    },
    inround: () => {
        $('.text').html("You Leveled Up! try to keep up")
    },
    simeon: () => {
        $('.text').html("Now its my turn!!")
    },
    win: () => {
        $('.text').html("You won!! you are the best!!")
        $('.rotateMessage').html('Noooo YOU BEAT ME!!!!<br>Lets go again!')
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

    } else if (game.musicmode.musicPlay) {
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
    } else if (game.musicmode.musicPlay) {
        game.musicmode.playerMusicarray.push(1)
    } else {
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
    } else if (game.musicmode.musicPlay) {
        game.musicmode.playerMusicarray.push(2)
    } else {
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
    } else if (game.musicmode.musicPlay) {
        game.musicmode.playerMusicarray.push(3)
    } else {
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
    } else if (game.musicmode.musicPlay) {
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
$('.hardmode').on('click', () => {
    if (!game.hardmode) {
        game.hardmode = true
        game.difficulty = .5
        $('.text').html('welcome to the game! you have selected hard mode')
        $('.rotateMessage').html('You must be confident!')

    } else {
        game.hardmode = false
        game.difficulty = 1
        $('.text').html('welcome to the game! you are on easy mode')
        $('.rotateMessage').html("Guess I'll go easy on you")
    }

})

$('.musicmode').on('click', () => {
    game.musicmode.musicMode()
    game.difficulty = .25
    console.log(game.difficulty)
    console.log("music init")
    game.musicmode.musicPlay = true
    console.log(game.musicmode.musicPlay)

})
$('.play').on('click', () => {
    console.log('click recived')
    game.musicmode.playsong()
})
$('.clear').on('click', () => {
    game.musicmode.clear()
})
