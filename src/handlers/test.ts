import { v4 as uuidv4 } from 'uuid';
const Form = async (req:any, res:any) => {
    try {
        // const {data} = req.body
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
        };
        const data = {
            name: 'Roma'
        }
        // await MY_KV.put(uuidv4(), data);
        return new Response(JSON.stringify(data), { headers });


    }
    catch (e) {
        console.log(e)
    }
};

export default Form;