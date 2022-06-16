import { v4 as uuidv4 } from 'uuid';
import Test from "./test";
// const Form = async (req:any, res:any) => {
//     try {
        // const headers = {
        //     'Access-Control-Allow-Origin': '*',
        //     'Content-type': 'application/json',
        // };
        // await MY_KV.put(uuidv4(), req);
        // return new Response(req, { headers });
    // }
    // catch (e) {
    //     console.log(e)
    // }
// };

// await MY_KV.put(uuidv4(), data);


const Form = async (req:Request) => {
    try {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
        };
        const { form } = await req.json<any>()
        await MY_KV.put(uuidv4(), form);
        return new Response(JSON.stringify(form), { headers });
    }
    catch (e) {
        console.log(e)
    }
}
export default Form;