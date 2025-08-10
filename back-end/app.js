const app = require('./src/config/server');
const porta = 3000;

app.listen(porta, () => console.log("Api rodando na porta " + porta));