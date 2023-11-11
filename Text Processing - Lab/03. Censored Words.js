function solve(text, censor) {

    while (text.includes(censor)) {
        text = text.replace(censor, "*".repeat(censor.length));
    }

    console.log(text);
};

solve('A small sentence with some words',
    'small'
);

// solve('Find the hidden word', 'hidden');
