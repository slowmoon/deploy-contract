
let addr = "0x27f4a902afa4068c1500fa8d448cabeb8b091a81"

let interface = [{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_msg","type":"string"}],"name":"setMessage","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getMessage","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_msg","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}]
let user = "0x94C251f9D52741d6c39cDCb859B02c84d4915782"
let Web3 = require("web3")
let location = "http://localhost:8545"
let web3 = new Web3(location)

let contract = new web3.eth.Contract(interface, addr)

let interact = async ()=>{

   let res = await  contract.methods.getMessage().call({
        from : user, 
    })
    console.log("call getmessage :", res)

    //then change the data

    res = await contract.methods.setMessage("ALiPAY").send({
        from: user,
        // gas: 6700000,   //gas limit must no less than 21000 and shoud less than 8000000
        gas: 6710000,
        value: 10*10**18,
    })
    console.log("change the message result is :", res)

    res = await  contract.methods.getMessage().call({
        from : user, 
    })
    console.log("call getmessage :", res)

}

interact()