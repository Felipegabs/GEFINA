//GEFINA

import send from './send.ts';


import express from 'express';

const app = express();

app.use(function(request, response, next){
    console.log(request.method + " " + request.url);next();

});
app.get('/api/health', function (request, response) {
    // send(response, 200, {status: 'ok'});
    response.status(200).json({ status: "ok" })
});

app.use(function (request, response) {
   response.status(404).json({ message:'recurso não encontrado.'});
});



app.listen(3000);