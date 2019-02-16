//read the file and then use solc to compile the contract

let solc = require("solc")
let fs = require("fs")
let fn = "./contract.sol"

let fd =  fs.readFileSync(fn)    

let res = solc.compile(fd.toString(), 1)
console.log(res)

module.exports = res.contracts[":Message"]