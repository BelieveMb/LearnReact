import { useState } from "react";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    //pour mettre à jour le squarestableau contenant l'état de votre carte :
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  function Square({value, onSquareClick}) {
    return <button className="square" onClick={onSquareClick}>{value}</button>;
    // const [value, setValue] = useState(null);
    // //valuestocke la valeur et setValueest une fonction qui peut être utilisée pour modifier la valeur
    // function handleClick() {
    //   setValue("X");
    //   // En appelant cette setfonction à partir d'un onClickgestionnaire, vous demandez à React de restituer cette fonction Squarechaque fois que vous <button>cliquez dessus.
    // }
    // return (
    //   <button className="square" onClick={handleClick}>
    //     {value}
    //   </button>
    // );
  }
  // En effet, le Boardcomposant n'a pas encore transmis l' valueaccessoire à
  // chaque Squarecomposant qu'il restitue.
  // Pour résoudre ce problème, vous ajouterez le valueprop à chaque Squarecomposant rendu par le Board
  return (
    <div className="game">
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}  />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      {/* Notez la nouvelle () =>syntaxe. Voici () => handleClick(0)une fonction fléchée, qui est un moyen plus court de définir des fonctions. Lorsque le carré est cliqué, le code après la =>« flèche » s’exécutera, appelant handleClick(0). */}
    </div>
  );
}
