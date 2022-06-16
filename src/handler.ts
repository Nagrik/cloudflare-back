import { Request, Router} from 'itty-router';

import Form from "./handlers/form";
import Test from "./handlers/test";

const router = Router();
const cors = async (req: any): Promise<Response> => {
    const headers = req.headers
    if (headers.get('Origin') !== null) {
        const respHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,OPTIONS',
            'Access-Control-Max-Age': '86400',
            Vary: 'Origin',
            'Access-Control-Allow-Headers': '*',
        }

        return new Response(null, {
            headers: respHeaders,
        })
    } else {
        return new Response(null, {
            headers: {
                Allow: 'GET, PUT, POST, OPTIONS',
            },
        })
    }
}

router.post('/api/form', Form)
router.get('/api/test', Test)
router.all('/*', cors)

router.all('*', () => new Response('Not found', {status: 404}));


export const handleRequest = (request: Request) => router.handle(request);