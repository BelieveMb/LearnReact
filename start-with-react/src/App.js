import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function Square() {
    const [value, setValue] = useState(null);
    //valuestocke la valeur et setValueest une fonction qui peut être utilisée pour modifier la valeur
    function handleClick() {
      setValue("X");
      // En appelant cette setfonction à partir d'un onClickgestionnaire, vous demandez à React de restituer cette fonction Squarechaque fois que vous <button>cliquez dessus.
    }
    return (
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    );
  }
  // En effet, le Boardcomposant n'a pas encore transmis l' valueaccessoire à
  // chaque Squarecomposant qu'il restitue.
  // Pour résoudre ce problème, vous ajouterez le valueprop à chaque Squarecomposant rendu par le Board
  return (
    <div className="game">
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
