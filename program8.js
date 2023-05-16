// Buffer of NodeJS

const buf = Buffer.from("Hello");
for (let i=0; i<buf.toString().length; i++) {
    console.log(buf[i])
}