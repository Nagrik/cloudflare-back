import { v4 as uuidv4 } from 'uuid';
import react from 'react';
import {errorResponse} from "../exception/responses";



const Test = async (req:Request) => {
    try {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/pdf',
        };
        // const id = uuidv4()
        // const file = await req.json<any>()
        // await MY_KV.put(id, file);
        return new Response(req.body, { headers });
    }
    catch (e:any) {
        return errorResponse(e)
    }
}
export default Test;