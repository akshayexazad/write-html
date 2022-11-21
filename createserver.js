const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers)
res.write('<html>')
res.write('<body>hello from my node js server</body>')
    
res.end()
})
server.listen(4000,'localhost',()=>{
    console.log("akshay is rinning")
})