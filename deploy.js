//use compiled output to deploy the contract 
//we use web3 api to connect the ethereum net

let {bytecode, interface} = require("./compile")

let Web3 = require("web3")
let location = "http://localhost:8545"
let web3 = new Web3(location)

//deploy is a async way...
let owner = '0x94C251f9D52741d6c39cDCb859B02c84d4915782'
let deploy = async ()=>{
    //new a contract...
  let contract =  new web3.eth.Contract(JSON.parse(interface))
  let res = await contract.deploy({
      data:bytecode,  
      arguments:["hello world"], 
   }).send({
       from : owner,
       gas : 1000000,
   })
    console.log("the deploy result is :", res.options.address)
}

deploy()

