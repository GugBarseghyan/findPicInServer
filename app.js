const fs = require("fs");
const express = require("express");
const server = express();
let testFolder = `${__dirname}/images`;

server.get("", function(req, res){
    //Էս հատվածում ուզում էի որ HTML-ը բացեի ու իրա մեջ ցույց տար թե ինչ անունով ֆայլեր կան, բայց չաշխատեց, դրա համար էս քոմենթ եմ թողել


    // res.writeHead(200, {"Content-Type": "text/html"}); 
    // let myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
    // myReadStream.pipe(res);
    
    // ֆունկցիան ցույց է տալիս թե ինչ անունով ֆայլեր կան բազայում և որոնք են դրանք
    res.write(`In my database I have this files:
`)
    fs.readdirSync(testFolder).forEach(file => {
        res.write(`_-   ${file}   -_
`)
      });
    res.end()
})

// ֆունկցիան կարդում է եթե որոնված է լինքում           /images/ֆայլի․անունը             ինքը բացի տվյալ ֆայլը
server.use("/images", express.static("images")); //https://www.youtube.com/watch?v=gu3qwI46_sw

server.listen(2222)