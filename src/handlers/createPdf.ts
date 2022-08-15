import {errorResponse} from "../exception/responses";
import base64 from 'base-64';

const createPdf = async (req: any) => {

    const body = await req.formData()
    const access_token = await TOKENS.get('xero_access_token');
    const html = body.get('html')
    const ContactId = body.get('ContactId')


    const data = new FormData();
    data.append('html', html);
    data.append('ContactId', ContactId);
    if (access_token != null) {
        data.append('token', access_token);
    }


    try {
        const response = await fetch('https://api-html-to-pdf.lambda-team.website/', {
            method: 'POST',
            body: data,
            headers: {
                'response-type': 'arraybuffer',
                'Accept': 'application/pdf'
            }
        })
        return new Response(JSON.stringify(response), {
            status: response.status,
            headers: {'Access-Control-Allow-Origin': '*'}
        });
    } catch (e) {
        console.log(e)
        return new Response(e, {status: 400, headers: {'Access-Control-Allow-Origin': '*'}});

    }
}
export default createPdf;
