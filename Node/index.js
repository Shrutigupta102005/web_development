let path = process.argv.pop();
console.log(path);
// task print number till 10
for(let i =0 ; i<path ; i++){
    console.log(i);
}

// process.cwd()
let s = process.cwd();
console.log(s);

// __dirname
console.log(__dirname);
