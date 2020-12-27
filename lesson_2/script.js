// Task 1

// let a = 1, b = 1, c, d;

// c = ++a; alert(c); //к а прибавили единицу и присвоили этозначение к с
// d = b++; alert(d); //к b прибавили единицу, но в d присвоили до уведичения значения b
// c = (2 + ++a); alert(c); // к 2 + (а=2 увеличеное на единицу)т.е. уже 3 поэтому 5
// d = (2 + b++); alert(d); //  к 2 + (b=2 увеличеное на единицу, но присвоили опять до увеличения), т.е. 2 поэтому 4
// alert(a) // по итогу дважды увеличили на 1 и получпем 1 + 2 = 3
// alert(b) // по итогу дважды увеличили на 1 и получпем 1 + 2 = 3

// Task 2

// let a = 2;
// let x = 1 + (a *= 2); // а (а = 2) умнажам на 2 и прибавляем 1, 

// alert(x); // х = 5

// Task 3

// let a = -12, b = 22;

// if (a >= 0 && b >= 0) {
//     alert(a - b);
// } else if (a <= 0 && b <= 0) {
//     alert(a * b);
// } else {
//     alert(a + b);
// }

// Task 4

// let a = 5;
// switch (a) {
//     case 0:
//         alert(0);
//     case 1:
//         alert(1);
//     case 2:
//         alert(2);
//     case 3:
//         alert(3);
//     case 4:
//         alert(4);
//     case 5:
//         alert(5);
//     case 6:
//         alert(6);
//     case 7:
//         alert(7);
//     case 8:
//         alert(8);
//     case 9:
//         alert(9);
//     case 10:
//         alert(10);
//     case 11:
//         alert(11);
//     case 12:
//         alert(12);
//     case 13:
//         alert(13);
//     case 14:
//         alert(14);
//     case 15:
//         alert(15);
// }

// Task 5

function addition(a, b) {
    return (a + b);
}

function difference(a, b) {
    return (a - b);
}

function multiplication(a, b) {
    return (a * b);
}

function division(a, b) {
    return (a / b);
}

// let a = 4, b = 2;

// alert(addition(a, b));
// alert(difference(a, b));
// alert(multiplication(a, b));
// alert(division(a, b));

// Task 6

// let a = 6, b = 2;

function mathOperation(a, b, operation) {
    switch (operation) {
        case 'addition':
            return addition(a, b);

        case 'difference':
            return difference(a, b);

        case 'multiplication':
            return multiplication(a, b);

        case 'division':
            return division(a, b);
    }
}

// alert(mathOperation(a, b, 'addition'));
// alert(mathOperation(a, b, 'difference'));
// alert(mathOperation(a, b, 'multiplication'));
// alert(mathOperation(a, b, 'division'));

// Task 7

// alert(0 > null) // когда мы сравниваем 0 и null, то мы сраниваем число 0 и 
// просто пустую ячейку памяти, при любом сравнении логическая функция вернет false

// Task 8

function power(val, pow) {
    if (pow < 0) {
        if (pow == -1) {
            return (1 / val);
        } else {
            return ((1 / val) * power(val, (pow + 1)));
        }
    } else if (pow == 0) {
        return (1);
    } else if (pow >= 1) {
        if (pow == 1) {
            return val;
        } else {
            return val * power(val, (pow - 1));
        }
    }
}

// let a = 3, b = -3;

// alert(power(a, b));
