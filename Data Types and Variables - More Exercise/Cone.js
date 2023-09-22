function solve(radius, height) {

    let lateralArea = Math.PI * radius * Math.sqrt(radius ** 2 + height ** 2);
    let baseArea = Math.PI * (radius ** 2);
    let volume = (1 / 3) * Math.PI * (radius ** 2) * height;
    let totalArea = lateralArea + baseArea;



    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalArea.toFixed(4)}`);
};

solve(3, 5);
solve(3.3, 7.8);