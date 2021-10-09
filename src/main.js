const main = () => {
    console.log('ES6の書式だよ。アロー関数使ってるよ。')
}

class Main {
    constructor() {
    }
}

// pollyfillが必要な変数（async await部分）
const unsychronous = async arg => {
    return await arg;
};
console.log(unsychronous("hey"));