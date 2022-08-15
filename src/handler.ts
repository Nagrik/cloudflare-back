import { Request, Router} from 'itty-router';

import Form from "./handlers/form";
import Test from "./handlers/test";
import FormId from "./handlers/formId";
import FormPostId from "./handlers/formPostId";
import XeroContact from "./handlers/XeroContact";
import XeroRefreshToken from "./handlers/XeroRefreshToken";
import base64 from "base-64";
import Attachment from "./handlers/Attachment";
import createPdf from "./handlers/createPdf";

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
router.options('/*', cors)
router.post('/api/refresh', XeroRefreshToken);
router.post('/api/contact', XeroContact)
router.post('/api/attachment', Attachment)
router.post('/api/form', Form)
router.post('/api/createPdf', createPdf)
router.post('/api/form/:id', FormPostId)
router.get('/api/form/:id', FormId)
router.get('/api/test', Test)

router.all('*', () => new Response('Not found', {status: 404}));


export const handleRequest = (request: Request) => router.handle(request);
