//global variables


//builds a grid

for (let i = 0; i < 256; i++) {
    const grid = document.createElement('div');
    const canvas = document.querySelector('#canvas');
    grid.classList.add('grid')
    canvas.appendChild(grid)
}
