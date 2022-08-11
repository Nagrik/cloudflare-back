import {errorResponse} from "../exception/responses";

const Form = async (req:any, res:any) => {
    try {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
        };

        const body = await MY_KV.get(req.params.id, "json");
        return new Response(JSON.stringify(body), { headers });

    }
    catch (e) {
        return errorResponse(e)
    }
};

export default Form;