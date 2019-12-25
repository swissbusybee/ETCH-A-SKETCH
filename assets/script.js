window.onload = function() {

  const gridDiv = document.getElementById('gridContainer');
  const clearButton = document.getElementById('clearGrid');
  const sizeButton = document.getElementById('changeSize');
  const randCoButton = document.getElementById('randomColor');
  clearButton.addEventListener('click', clearGrid);
  sizeButton.addEventListener('click', updateGrid);
  randCoButton.addEventListener('click', randomColor);

  //<!--Creates the grid & event listener changing grid color-->

  function createGrid(e) {
    for (let i = 0; i < 20; i++) {
    const cellDiv = document.createElement('div');
    cellDiv.classList.add('cell');
    cellDiv.addEventListener('mouseover', changeColor);
    gridDiv.appendChild(cellDiv);
    }
  }
    createGrid();

  function changeColor(e) {
    e.target.style.background = 'black';
  }

  function randomColor(e) {
    document.querySelectorAll('.cell').forEach(function(cell) {
    event.target.style.backgroundColor = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
    cell.addEventListener('mouseover', randomColor);
    });
  }


  //<!--Clears grid-->

  function clearGrid(e) {
    document.querySelectorAll('.cell').forEach(function(element) {
    element.style.background = 'grey';
  });
  }

  //<!--Prompts & Updates size of grid-->

  function updateGrid(e) {
    clearGrid();
    const gridSize = prompt('How many squares per side should the new grid have? Please choose a value between 1 and 64.');
    for (let i = 0, n = Math.pow(gridSize, 2); i < n; i++) {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.addEventListener('mouseover', changeColor);
      gridDiv.appendChild(cellDiv);
     }
      gridDiv.style.gridTemplateColumns = `repeat(${gridSize}, ${gridSize}fr)`;
  }

}
