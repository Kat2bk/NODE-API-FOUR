const server = require('./server');

const port = 7800 || process.env.PORT;

server.listen(port, () => {
    console.log(`\n** server is listening at ${port}** \n`)
})