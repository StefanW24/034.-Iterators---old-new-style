// old style

const colors = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// new style

const myColors = {
    colorWall: "blue",
    colorFruit: "orange",
    colorCar: "red",
    colorHair: "white",
    colorGras: "green",
};

for (x in myColors) {
    console.log(myColors[x]);
}