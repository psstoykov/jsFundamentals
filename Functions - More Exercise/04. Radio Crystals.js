function solve(array) {

    //array[0] => target thickness
    let target = array[0];
    //function cut in 4 pieces
    let cutIn4 = (num) => num / 4;
    //function removes 20% thickness
    let lap = (num) => num * 0.8;
    //function removes 20 microns
    let grind = (num) => num - 20;
    //function removes 2 microns
    let etch = (num) => num - 2;
    //function increases crystal by 1 micron
    let xRay = (num) => num + 1;
    //function washing rounds down the number
    let washing = (num) => Math.floor(num);

    let index = 1;

    //while loop for the given pieces to be processed
    while (index < array.length) {

        let crystal = array[index]
        index++
        console.log(`Processing chunk ${crystal} microns`)
        //while crystal > target value
        let cuts = 0;
        let laps = 0
        let grinds = 0;
        let etchs = 0;
        let xrays = 0
        while (target <= cutIn4(crystal)) {
            cuts++
            crystal = cutIn4(crystal)
        }
        if (cuts > 0) {
            console.log(`Cut x${cuts}`)
            console.log(`Transporting and washing`);
        }
        washing(crystal);
        while (target <= lap(crystal)) {
            laps++;
            crystal = lap(crystal);
        }
        if (laps > 0) {
            console.log(`Lap x${laps}`)
            console.log(`Transporting and washing`);
        }
        washing(crystal);
        while (target <= grind(crystal)) {
            grinds++
            crystal = grind(crystal);
        }
        if (grinds > 0) {
            console.log(`Grind x${grinds}`)
            console.log(`Transporting and washing`);
        }
        washing(crystal);
        while (target - 1 <= etch(crystal)) {
            etchs++
            crystal = etch(crystal);
        }

        if (etchs > 0) {
            console.log(`Etch x${etchs}`)
            console.log(`Transporting and washing`);
        }
        washing(crystal);
        if (crystal < target) {
            xrays++
            crystal = xRay(crystal)
            console.log(`X-ray x${xrays}`)
        }
        console.log(`Finished crystal ${(Math.floor(crystal))} microns`)
    }
};
// solve([1375, 50000]);
solve([1000, 4000, 8100]);
