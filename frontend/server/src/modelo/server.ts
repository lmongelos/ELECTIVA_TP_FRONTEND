import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import routeProducto from '../rutas/producto';
import db from '../db/conexion';


class Server{
    private app: Application;
    private puerto: string;

    constructor () {
        this.app =express();
        this.puerto= process.env.PORT || '3001';
        this.listen();
        this.midlewares ();
        this.routes();
        this.dbConnect();
    }

    listen (){
        this.app.listen(this.puerto, () => {
            console.log(`Aplicación corriendo en el puerto ${this.puerto}`)
        })
    }

    routes (){
        this.app.get('/',(req: Request,res: Response)=> {
            res.json({
               msg: 'API Working ' 
            })
        })

        this.app.use('/api/productos', routeProducto)
    }

    midlewares (){
        //Parseamos el body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Base de datos conectada')
        } catch (error){
            console.log(error);
            console.log('Error al conectar la base de datos')
        }
        
    }
}

export default Server;