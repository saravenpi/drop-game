express = require('express')
app = express()
http = require('http')
app.use(express.static("public"));
const dotenv = require('dotenv');
dotenv.config()
var axios = require('axios')

server = http.createServer(app)
port = 3000 || process.env.port



const { Server } = require('socket.io')
const io = new Server(server)

const tmi = require('tmi.js');

io.on('connection', (socket) => {
  console.log('📞 - New websocket client connected !');
});

app.get('/', function(req, res){
  console.log(__dirname)
  res.sendFile(`${__dirname}/public/index.html`);
})

require('./bot')(io, tmi, axios);

server.listen(port, function(){
  console.log(`🌵 - The app is running there: localhost:${port}`);
})
