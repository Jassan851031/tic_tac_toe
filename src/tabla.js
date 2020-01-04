import React, { useState, Component } from 'react';

class TablaTicTacToe extends Component {
    constructor(props) {
      super(props);

      this.state = {
        playerX: this.props.playerX,
        playerO: this.props.playerO,
        coin: this.props.coin
      }

      this.winner = false;
      this.matrix = [["", "", ""], ["", "", ""], ["", "", ""]];
      
     // this.reset();
    }

    mark(e, f, c){

      if(this.winner === false && this.matrix[f][c] !== "X" && this.matrix[f][c] !== "O") {
        
        
        e.target.innerHTML = this.state.coin;
        
        this.matrix[f][c] = this.state.coin;


        this.winner = this.validator();

        if(this.winner){
          alert(this.state.coin + " WINNER!!!!!");
        }
        else{
          this.state.coin = (this.state.coin === "X")? "O" : "X";
        }
          
      }      
    }

    validator(){
      if(this.isEquals(this.matrix[0][0], this.matrix[0][1], this.matrix[0][2]))
        return true;
      else if(this.isEquals(this.matrix[1][0], this.matrix[1][1], this.matrix[1][2]))
        return true;
      else if(this.isEquals(this.matrix[2][0], this.matrix[2][1], this.matrix[2][2]))
        return true;
      else if(this.isEquals(this.matrix[0][0], this.matrix[1][0], this.matrix[2][0]))
        return true;
      else if(this.isEquals(this.matrix[0][1], this.matrix[1][1], this.matrix[2][1]))
        return true;
      else if(this.isEquals(this.matrix[0][2], this.matrix[1][2], this.matrix[2][2]))
        return true;   
      else if(this.isEquals(this.matrix[0][0], this.matrix[1][1], this.matrix[2][2]))
        return true;
      else if(this.isEquals(this.matrix[0][2], this.matrix[1][1], this.matrix[2][0]))
        return true;
      else
        return false;
    }

    isEquals(v1, v2, v3){
      return (v1 !== "" && v2 !== "" && v3 !== "" && v1 === v2 && v2 === v3);
    }




    reset(){

      for(let i = 0; i < 9; i++){
        document.querySelector("#campo" + i).innerHTML = "";
      }


      this.matrix = [["", "", ""], ["", "", ""], ["", "", ""]];
      this.winner = false;
    }
  
    render() {
      return (
        <div className="container">
          <div className="menu">
            <h1 className="pink">TIC-TAC-TOE</h1>
            <div className="hidden">
              <h2>Game over</h2>
            </div>
            <button onClick={() => this.reset()} >start over</button>
          </div>
          <div id="campo0" className="tile 0" onClick={(e) => this.mark(e, 0, 0)}>
            <p></p>
          </div>
          <div id="campo1" className="tile 1" onClick={(e) => this.mark(e, 0, 1)}>
            <p></p>
          </div>
          <div id="campo2" className="tile 2" onClick={(e) => this.mark(e, 0, 2)}>
            <p></p>
          </div>
          <div id="campo3" className="tile 3" onClick={(e) => this.mark(e, 1, 0)}>
            <p></p>
          </div>
          <div id="campo4" className="tile 4" onClick={(e) => this.mark(e, 1, 1)}>
            <p></p>
          </div>
          <div id="campo5" className="tile 5" onClick={(e) => this.mark(e, 1, 2)}>
            <p></p>
          </div>
          <div id="campo6" className="tile 6" onClick={(e) => this.mark(e, 2, 0)}>
            <p></p>
          </div>
          <div id="campo7" className="tile 7" onClick={(e) => this.mark(e, 2, 1)}>
            <p></p>
          </div>
          <div id="campo8" className="tile 8" onClick={(e) => this.mark(e, 2, 2)}>
            <p></p>
          </div>
        </div>
      )
    }
  }

  export default TablaTicTacToe;