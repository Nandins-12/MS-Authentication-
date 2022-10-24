import express, {Request, Response, urlencoded} from 'express';
import userRoute from './routes/users.route';
import statusRoute from './routes/status.route';

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Configurações de rota
app.use(userRoute);
app.use(statusRoute);

// Configuração da porta
app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333!');
});

