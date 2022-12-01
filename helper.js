class Matrix {
    static mat = [["a"], ["a"]];
    constructor() {}
    static M(arr) {
        this.mat = arr;
        return arr;
    }
}
var obj ;
function fun(text) {
    let maze = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= "A" && text[i] <= "Z") {
            maze += text[i];
        }
    }
    // console.log(maze.length);
    let r = Math.floor(Math.sqrt(maze.length));
    // console.log(maze.length);
    // console.log(r);

    let arr = new Array(r);
    for (let i = 0; i < r; i++) {
        arr[i] = new Array(r);
    }
    // let x = r * r - maze.length;
    // for (let i = 1; i <= x; i++) {
    //     let c = 'A';
    //     maze += c ;
    // }
    let k = 0;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < r; j++) {
            if(k>=maze.length) {
                arr[i][j] = '_';
            }
            else{
                arr[i][j] = maze[k].toUpperCase();
                k++;
            }
        }
    }
    // console.log(arr);
    obj = Matrix.M(arr);
    return arr;
}

module.exports = {fun,obj :new Matrix()};