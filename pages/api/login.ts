import type {NextApiRequest, NextApiResponse} from 'next';
import { DefaultMsgResponse } from '../../types/DefaultMsgResponse';

export default (req : NextApiRequest, res: NextApiResponse<DefaultMsgResponse>) => {
    if(req.method === 'POST'){

        const {login, password} = req.body;
        if(login === 'rafael@verzel.com.br' && 
            password === 'Senha@123'){
                return res.status(200).json({msg: 'Login autenticado!'});
        }

        return res.status(400).json({error: 'Usuário não encontrado!'});
    }
    return res.status(405).json({error: 'Metodo informado nao é permitido!'});
}