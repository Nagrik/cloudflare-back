import { v4 as uuidv4 } from 'uuid';
import {errorResponse} from "../exception/responses";

const FormPostId = async (req:any) => {
    try {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
        };
        const { form } = await req.json()
        await MY_KV.put(req.params.id, JSON.stringify(form));
        const body = {
            form,
        }
        return new Response(JSON.stringify(body), { headers });
    }
    catch (e) {
        return errorResponse(e)
    }
}
export default FormPostId;