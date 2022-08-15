import {errorResponse, okResponse} from "../exception/responses";

const Attachment = async (req: any) => {
    const res = await req.formData()
    // const {token, ContactId, pdf} = await req.json()

    const token = res.get('token')
    const ContactId = res.get('ContactId')
    const pdf = res.get('pdf')
    const access_token = await TOKENS.get('xero_access_token');

    try {
        const response = await fetch(`https://api.xero.com/api.xro/2.0/Contacts/${ContactId}/Attachments/attachment.pdf`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/pdf',
                'Accept': 'text/xml',
                'xero-tenant-id': '1b0ae8ca-4b51-4d60-8ae5-af71b691ec1c',
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                Authorization: `Bearer ${access_token}`
            },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            body: pdf
        })
        console.log(pdf, 'pdf')
        return okResponse(response);

    } catch (e: any) {
        console.log(e)
        return errorResponse(e);
    }
}
export default Attachment;
