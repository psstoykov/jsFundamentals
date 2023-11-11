function solve(input) {

    let stringArray = input.split("\\");

    let file = stringArray.pop().split(".");

    let fileExtension = file.pop();
    let fileName = file.join(".")

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`)
};

solve('C:\\Internal\\training-internal\\Template.bak.pptx');

// solve('C:\\Projects\\Data-Structures\\LinkedList.cs');