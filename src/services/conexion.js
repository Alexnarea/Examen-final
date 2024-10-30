import pg from 'pg';
const { Client }= pg;

const config={
    user: 'cv_db_en4n_user',
    host: 'dpg-csg76glumphs73b0dptg-a.oregon-postgres.render.com',
    database: 'cv_db_en4n',
    password: 'JT4NYDfcY2SQhftwrx8es5mIfc7PDIGj',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

export async function Conectar() {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de Datos")
    }catch(error){
        console.log(error)
    }
}
export async function TraerPerfil() {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        const res= await cliente.query('SELECT * FROM profile')
        return res.rows
    }catch(error){
        console.log(error)
    }
}