//GEFINA
import { createServer } from 'node:http';
createServer(function ( request, response) {
    console.log('Knocked on the door.');
}).listen(3000);
