let catalogue = [{ name: "Godfather" }, { name: "Fast and Furious" }]

for (let i = 0; i < catalogue.length; i++) {
    let film = Object.values(catalogue[i]);
    console.log(film)
}