import { Request, Router} from 'itty-router';

import Form from "./handlers/form";
import Test from "./handlers/test";

const router = Router();

router.post('/api/form', Form)
router.get('/api/test', Test)
router.all('*', () => new Response('Not found', {status: 404}));


export const handleRequest = (request: Request) => router.handle(request);