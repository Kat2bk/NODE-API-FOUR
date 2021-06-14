const server = require('./server');

const port = 7800 || process.env.PORT;
// heroku uses whatever port is available, we need that
// option for it

server.listen(port, () => {
    console.log(`\n** server is listening at ${port}** \n`)
})