import { v4 as uuidv4 } from 'uuid';
import {errorResponse} from "../exception/responses";

const Form = async (req:Request) => {
    try {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
        };
        const id = uuidv4()
        const { form } = await req.json<any>()
        await MY_KV.put(id, JSON.stringify(form));
        const body = {
            form,
            id
        }
        return new Response(JSON.stringify(body), { headers });
    }
    catch (e:any) {
        return errorResponse(e)
    }
}
export default Form;