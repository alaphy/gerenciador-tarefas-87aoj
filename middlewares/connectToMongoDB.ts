import type {NextApiRequest, NextApiResponse, NextApiHandler} from 'next';
import { DefaultMsgResponse } from '../types/DefaultMsgResponse';
import mongoose from 'mongoose';
export const connect =  (handler: NextApiHandler) => 
async (req : NextApiRequest, res : NextApiResponse<DefaultMsgResponse>) => {
        console.log('MongoDb readyState', mongoose.connections[0].readyState);
        if(mongoose.connections[0].readyState){
            return handler(req, res);
        }

        const DB_CONNECTION_STRING = 'mongodb://localhost:27017/87aoj-gerenciador-tarefas';

        mongoose.connection.on('connected', () => console.log('Connectado no banco de dados'));
        mongoose.connection.on('error', err => console.log('Erro aoConnectado no banco de dados:', err));

        await mongoose.connect(DB_CONNECTION_STRING);

    }