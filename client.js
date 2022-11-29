import ip from 'ip'
// import { networkInterfaces } from 'os'
import { senderAdress } from './server.js'
import { udpSenderPort } from './server.js'
import dgram from 'node:dgram'
import readline from 'readline'
const server = dgram.createSocket('udp4')

let clientAdress = ip.address()
const sendingValue = 60 /* 0-90 */
const nextSendingVal = "Setevie tehnologii kruto"

let obj = {
    "num":sendingValue,
    "str":nextSendingVal
}
// let udpPort = 8080

// I got value and string


// const nets = networkInterfaces();
// const results = {}

// for (const name of Object.keys(nets)) {
//     for (const net of nets[name]) {
//         // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
//         // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
//         const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
//         if (net.family === familyV4Value && !net.internal) {
//             if (!results[name]) {
//                 results[name] = [];
//             }
//             results[name].push(net.address);
//         }
//     }
// }

// adress: results["en0"][0]


server.send(Buffer.from(`${senderAdress} port:${udpSenderPort}`), udpSenderPort, clientAdress)



    setInterval(() => {
       server.send( JSON.stringify(obj), udpSenderPort, clientAdress) }
    ,1500) /*0-1500 ms*/


        // sendingValue.toString()
// while() {
//     readline ...
//     setInterval(() => {
//     server send
//     ,time) /*0-1500 ms*/

// }


let numbers
