let roadMines = [true, false, false, false, false, false, false, true, false, false];
let step = 2;

for (let i = 0; i < roadMines.length; i++){
    if (roadMines[i] == true) {
        step -= 1;
        if (step == 1) {
            console.log(`Танк переехал на позицию ${i + 1}, танк наехал на мину`);
        } else if (step == 0) {
            console.log(`Танк переехал на позицию ${i + 1}, танк взорвался`);
            break;
        } else {
            console.log(`Танк переехал на позицию ${i + 1}`);
        }
    } else {
        console.log(`Танк переехал на позицию ${i + 1}`);
    }
}