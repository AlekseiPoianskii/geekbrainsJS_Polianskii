// Task 1
console.log('Task 1');
let numb = 1;

while (numb < 100) {
    let divider = 1, sumDivision = 0;
    while (divider <= numb) {
        const result = numb % divider;
        if (result === 0) {
            sumDivision += 1;
        }
        divider += 1;
    }
    if (sumDivision < 3) {
        console.log(numb);
    }
    numb += 1;
}

console.log('-----------------------------------------------------------');


// Task 2-3
const basket = [];
basket.push(['apple', 50000]);
basket.push(['nokia', 15000]);
basket.push(['samsung', 25000]);
basket.push(['honor', 12000]);

function countBasketPrice(array) {
    let sumBasket = 0;
    for (let index = 0; index < array.length; index++) {
        sumBasket += basket[index][1];
    }
    return sumBasket
}


// alert(countBasketPrice(basket))


// Task 4*
console.log('Task 4*')
for (let index = 0; index < 10; console.log(index), index++) { }
console.log('-----------------------------------------------------------')

// Task 5*

function pyramid(hight) {
    let i = 0, j = 0;
    // Желаемое количество строк
    let max = hight;
    let space = "",
        body = "";

    while (i < max) {
        space = "";
        star = "";
        for (j = 0; j < max - i; j++) {
            space += " ";
        }
        for (j = 0; j < 2 * i + 1; j++) {
            star += "x";
        }
        console.log(space + star);
        i++;
    }
}
console.log('Task 5*')
pyramid(20)
console.log('-----------------------------------------------------------')