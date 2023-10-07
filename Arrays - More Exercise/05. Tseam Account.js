function solve(array) {

    //create array with the steam games
    let games = array[0].split(" ");
    for (let i = 1; i < array.length - 1; i++) {
        command = array[i].split(" ");
        let install = true;
        let operation = command[0];
        let game = command[1];

        switch (operation) {
            case "Install":
                for (let i = 0; i < games.length; i++) {
                    if (games[i] == game) {
                        install = false;
                    }
                }
                if (install) {
                    games.push(game);
                }
                break;

            case "Uninstall":
                for (let i = 0; i < games.length; i++) {
                    if (games[i] == game) {
                        games.splice(i, 1);
                    }
                }
                break;

            case "Update":
                for (let i = 0; i < games.length; i++) {
                    if (games[i] == game) {
                        games.push(games[i]);
                        games.splice(i, 1)
                    }
                }
                break;

            case "Expansion":
                let expansion = game.split("-")
                for (let i = 0; i < games.length; i++) {
                    if (games[i] == expansion[0]) {
                        games.splice(i + 1, 0, expansion.join(":"))
                        i++
                    }
                }
                break;
            default: break;
        }
    }
    let account = games.join(" ")
    console.log(account)
};

solve(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);
solve(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
);