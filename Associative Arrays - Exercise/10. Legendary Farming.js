function solve(inputString) {

    //initiate the 2 objects
    let farminObj = {};
    let junkObj = {};

    //parse the input string into an array
    let inputArray = inputString.split(" ");


    for (let i = 0; i < inputArray.length; i += 2) {
        let quantity = Number(inputArray[i]);
        let material = inputArray[i + 1].toLowerCase();

        //check if material is key or junk
        if (material == "shards" || material == "fragments" || material == "motes") {
            //check if material excist in object
            if (farminObj.hasOwnProperty(material)) {
                farminObj[material] += quantity;
            } else {
                farminObj[material] = quantity;
            }
            //check if the material has reached value of 250
            if (farminObj[material] >= 250) {
                farminObj[material] -= 250;
                switch (material) {
                    case "shards": console.log(`Shadowmourne obtainted!`); break;
                    case "fragments": console.log(`Valanyr obtained!`); break;
                    case "motes": console.log(`Dragonwrath obtained!`); break;
                }
                break;
            }
        } else {
            //it's junk
            //check if material excist in object
            if (junkObj.hasOwnProperty(material)) {
                junkObj[material] += quantity;
            } else {
                junkObj[material] = quantity;
            }
        }
    }
    console.log(farminObj)
    console.log(junkObj)

};

solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');

// solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');