import ip from 'ip'
// import { networkInterfaces } from 'os'

import dgram from 'node:dgram'
import readline from 'readline'

const r1 = readline.createInterface({
   input: process.stdin,
   output: process.stdout
   })
   
   console.log('INPUT PORT:');
   
   r1.on('line', (line) => {
         console.log(`Line from file: ${line}`);
         
       });

export const senderAdress = ip.address()
export const udpSenderPort =  8081 /* process.env.PORT ||  */

const server = dgram.createSocket('udp4')

let clientAdress = ip.address() || '192.168.31.66'
let sendingValue = 67 /* 0-90 */
let stringSending = "Setevie tehnologii kruto"

let timer = 1500



server.send(Buffer.from(`client ip adress:${senderAdress} client port:${udpSenderPort}`), udpSenderPort, clientAdress)
server.send(`Number:${+sendingValue.toString()}`, udpSenderPort, clientAdress)
server.send( `String:${stringSending}`, udpSenderPort, clientAdress)

    setInterval(() => {
       server.send( sendingValue.toString(), udpSenderPort, clientAdress)
       }
    ,timer) /*0-1500 ms*/


