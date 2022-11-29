import dgram from 'node:dgram'
import ip from 'ip'
const server = dgram.createSocket('udp4')

export const senderAdress = ip.address()
export const udpSenderPort =process.env.PORT || 8080


// https://habr.com/ru/post/519982/

// https://ru.stackoverflow.com/questions/441797/%D0%9A%D0%B0%D0%BA-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D1%8C-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%8B-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D0%B0%D0%BB-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D0%BD%D0%B8%D0%BC%D0%B8-%D0%B2-node-js




server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});


server.on ('message', (msg, rinfo) => {
    // let msgN = JSON.parse(msg)
    // msgN = obj.num
    console.log(`I got message ${msg.toString()}`)// SDELAT HSON PARSE 60 & STRING poluchaem
    console.log(msg.toString());
})

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${senderAdress} on port: ${address.port}`);
  });

server.bind(udpSenderPort)
