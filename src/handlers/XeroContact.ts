import {errorResponse, okResponse} from "../exception/responses";

const XeroContact = async (req:Request) => {

    // const res = await req.json()
    const body = await req.json()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    try {
        const response = await fetch('https://api.xero.com/api.xro/2.0/Contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'xero-tenant-id': '1b0ae8ca-4b51-4d60-8ae5-af71b691ec1c',
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                Authorization: `Bearer ${body.token}`
            },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            body: JSON.stringify(body.bodyXero)
        })
        const res = await response.json()
        return okResponse(res);
    }
    catch (e:any) {
        console.log(e)
        return errorResponse( e);
    }
}
export default XeroContact;