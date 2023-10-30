
let spiral = new Array(3);

spiral[0] = [];
spiral[1] = [];
spiral[2] = [];


startY-- startX

spiral[0][0] = 1;
spiral[0][1] = 2;
spiral[0][2] = 3;

spiral[1][2] = 4;
spiral[2][2] = 5;

spiral[2][1] = 6;
spiral[2][0] = 7;

spiral[1][0] = 8;

spiral[1][1] = 9;


let matrix = [];
for (let el of spiral) {
    let buff = "";
    for (let num of el) {
        buff += `${num} `;


    }
    console.log(buff)
}
