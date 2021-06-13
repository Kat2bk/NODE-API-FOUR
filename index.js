const server = require('./server');

const port = 8080 || process.env.PORT;

server.listen(() => {
    console.log(`\n** server is listening at ${port}** \n`)
})