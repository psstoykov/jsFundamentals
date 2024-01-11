function solve(object, array) {


    for (let token of array) {
        token = token.split(" ")
        let operation = token[0];
        if (operation == "Clear") {
            object["Open Tabs"] = [];
            object["Recently Closed"] = [];
            object["Browser Logs"] = [];
        } else if (operation == "Open") {
            let tab = token[1];
            object["Open Tabs"].push(tab);
            object["Browser Logs"].push(token.join(" "))
        } else if (operation == "Close") {
            let tab = token[1];
            if (object["Open Tabs"].includes(tab)) {
                object["Open Tabs"] = object["Open Tabs"].filter(i => i != tab);
                object["Recently Closed"].push(tab)
                object["Browser Logs"].push(token.join(" "))
            }
        }
    }
    console.log(object["Browser Name"]);
    console.log(`Open Tabs: ${object["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${object["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${object["Browser Logs"].join(", ")}`)
};

// solve({
//     "Browser Name": "Google Chrome",
//     "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
// },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]
// );

solve({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);                       