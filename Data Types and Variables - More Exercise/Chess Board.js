function solve(n) {

    let result = '';
    result = '<div class="chessboard">';
    result += '\n'

    for (let i = 0; i < n; i++) {
        let row = '';
        row += '  <div>\n'
        for (let j = 0; j < n; j++) {
            let color = (i + j) % 2 ? 'white' : 'black';
            row += `    <span class="${color}"></span>\n`
        }
        row += '  </div>\n'
        result += row
    }
    result += '</div>'
    console.log(result);
};

solve(8);
// solve(6);