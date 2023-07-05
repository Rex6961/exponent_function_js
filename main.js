//This is Iteration exponent function
function exponentByIteration(number, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= number;
    }
    return result;
}

//This is iteration exponent function how recursive function
function exponentWithPowerRule(a, e) {
    let opStack = [];
    while (e > 1) {
        if (e % 2 === 0) {
            opStack.push('square');
            e = e / 2;
        } else if (e % 2 === 1) {
            opStack.push('multiply');
            e -= 1;
        }
    }
    let result = a;
    while (opStack.length) {
        let op = opStack.pop();
        if (op === 'multiply') {
            result *= a;
        } else if (op === 'square') {
            result *= result;
        }
    }
    return result;
}

//This is recursive exponent function
function exponentByRecursion(number, n) {
    if (n === 1) {
        return number;
    }
    if (n%2===0) {
        result = exponentByRecursion(number,n / 2);
        return result * result;
    } else if (n%2===1){
        result = exponentByRecursion(number, Math.floor(n / 2));
        return result * result * number;
    }
}

document.write(exponentByIteration(3, 6) + "<br/>");
document.write(exponentWithPowerRule(3, 6) + "<br/>");
document.write(exponentByRecursion(3, 6) + "<br/>");
