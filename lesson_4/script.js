// Task 1
function splitNumber(number) {
    const objectNumber = {};
    let iteration = 0;
    if (number >= 1000) {
        console.log('Error: Not a valid number')
    } else {
        while (iteration < 3) {
            temp = number % 10;
            number = Math.floor(number / 10);
            switch (iteration) {
                case 0:
                    objectNumber.units = temp;
                    break;
                case 1:
                    objectNumber.dozens = temp;
                    break;
                case 2:
                    objectNumber.hundreds = temp;
                    break;
            };
            iteration++
        }
    }
}

splitNumber(345);

// Task 2

const basket = {};
basket.item1 = { nameItem: 'apple', price: 100000 };
basket.item2 = { nameItem: 'nokia', price: 15000 };
basket.item3 = { nameItem: 'samsung', price: 50000 };
basket.item4 = { nameItem: 'honor', price: 12000 };

function countBasketPrice(whatSum) {
    let sumBasket = 0;
    for (const item in whatSum) {
        if (Object.hasOwnProperty.call(whatSum, item)) {
            const element = whatSum[item];
            sumBasket += element.price;
        }
    }
    return sumBasket;
}

console.log(countBasketPrice(basket));

// Task 3

const product = {
    id: 12345567,
    nameProduct: '',
    pricee: 0,
    weight: 0,
    sale: 0,
    isRejected: false,
    type: ''
}; // это по 3 заданию решил сразу вэтой части сделать