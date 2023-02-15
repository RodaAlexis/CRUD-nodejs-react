import express from "express";
import cors from 'cors'
//importamos db
import db from "./database/db.js";
//importamos enrutador
import blogRoutes from './routes/routes.js'

const app = express()

app.use( cors() )
app.use(express.json())
app.use('/roda', blogRoutes)


try {
    await db.authenticate()
    console.log('Conexion exitosa a la BD')
} catch (error) {
    console.log(`El error de conexión es: $:{error}`)
}


/*
app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
})*/

app.listen(8000, ()=>{
    console.log('Server up running in http://localhost:8000/')
})

