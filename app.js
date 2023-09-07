import express from 'express';
import cors from 'cors';
//importar base de datos

//importar enrutador
import blogRoutes from './routes/routes.js';
import { json } from 'sequelize';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/blogs',blogRoutes);

//definir conexion

app.get('/', (req, res)=>{
    res.send("hola mundo esto es una prueba")

});

app.listen(8000, ()=>{
    console.log('Server is running in http://localhost:8000/')
})