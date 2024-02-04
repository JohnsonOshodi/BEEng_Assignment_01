
const {clear} = require ('console');
const http = require ('http');

const sever = http.createServer
((req, res) => {
    res.write(`Hello! My name is Oshodi Johnson Samson`);
    console.log(`Hello! My name is Oshodi Johnson Samson`)
    res.end()


});
sever.listen(8000, null, null, () => {
    console.log ("Server is running on port 8000");
});