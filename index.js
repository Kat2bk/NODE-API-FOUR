const server = require('./server');

const PORT = 7800 || process.env.PORT;
// heroku uses whatever port is available, we need that
// option for it

server.listen(PORT, () => {
    console.log(`\n** server is listening at ${PORT}** \n`)
})