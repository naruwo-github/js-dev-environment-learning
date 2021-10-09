const main = () => {
    console.log('ES6の書式だよ。アロー関数使ってるよ。')
}
main();

class Main {
    constructor() {
    }
}
const classMain = Main()
console.log(classMain)

const unsychronous = async arg => {
    // pollyfillが必要な変数（async await部分）
    return await arg;
};
console.log(unsychronous("hey"));