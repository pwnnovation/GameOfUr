var GamePiece = function(pathIndex,player) {
    this.pathIndex = pathIndex
    this.ownedBy = player
}

var GameSpace = function(coordinate) {
    this.coordinate = coordinate
    this.currentPiece;
    this.isSafe = false
    this.isReRoll = false
}

var Player = function(gameSpace) {
    this.pieces = {}
    this.score = 0
    this.path = []
}

var Game = function() {
    this.player1;
    this.player2;
    this.gameBoard = []
    this.playerTurn;
    this.diceRoll = 0

    Game.prototype.setGameBoard = function() {
        gameBoard = []
        for (var i=0;i<8;i++) {
            gameBoardRow = []
            for(var j=0;j<3;j++) {
                gameBoardRow.push(new GameSpace(i+"x"+j))
            }
            gameBoard.push(gameBoardRow)
        }
        this.gameBoard = gameBoard
        return this
    }

    Game.prototype.createPlayers = function() {
        this.player1 = new Player(this.gameBoard[4][0])
        this.player2 = new Player(this.gameBoard[4][2])
        var x=4, separate=true
        for(var i=1;i<=16;i++) {
            if (separate) {
                this.player1.path.push(this.gameBoard[x][0])
                this.player2.path.push(this.gameBoard[x][2])
                if (x<=0) {
                    separate = false
                }
                else {
                    x--
                }
            }
            else {
                this.player1.path.push(this.gameBoard[x][1])
                this.player2.path.push(this.gameBoard[x][1])
                if(x>=7) {
                    separate = true
                }
                else {
                    x++
                }
            }
        }
        for (var count=1;count<=5;count++) {
            this.player1.pieces["piece"+count] = new GamePiece(0,this.player1)
            this.player2.pieces["piece"+count] = new GamePiece(0,this.player2)
        }
        return this
    }

    Game.prototype.rollDice = function() {
        console.log("roll")
        roll = 2
        //dicelogic goes here
         //player selects piece to move
        selectedPiece = this.playerTurn.pieces.piece1;
        if (selectedPiece && selectedPiece.ownedBy == this.playerTurn) {
            if (this.playerTurn.path[selectedPiece.pathIndex+roll].currentPiece) {
              console.log("Player on space")
            }
            else {
              console.log('No Player Present')
              this.playerTurn.path[selectedPiece.pathIndex].currentPiece = null
              selectedPiece.pathIndex+=roll
              this.playerTurn.path[selectedPiece.pathIndex].currentPiece = selectedPiece
            }
        }
        else {
            //no piece on space or not your piece
        }
    }



}

var myGame = new Game();

myGame.setGameBoard().createPlayers()

myGame.playerTurn = myGame.player1
console.log(myGame.gameBoard)
console.log(myGame.player1.path)
console.log(myGame.playerTurn.pieces)
myGame.rollDice()
console.log(myGame.gameBoard)




