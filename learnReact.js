/**
 * Created by beebe on 4/24/2017.
 */
const express = require(`express`);
const bodyParser = require(`body-parser`);

const app = express();

app.use(bodyParser.json());

app.use(express.static(`dist`));





app.listen(4000,()=>{
    console.log(`im Listening on 4000`)
});

