import {errorResponse} from "../exception/responses";
import base64 from 'base-64';
const XeroRefreshToken = async () => {

    const XERO_SECRET = '6iz1dDTNEfaKtg4XEsb31YgdzbTnP9LlfvkdA5jMbtaxpnZ8'
    const XERO_CLIENT_ID = '5AEF81477E024181B9DE2A716B20A52E'

    const refreshToken = await TOKENS.get('xero_refresh_token');
    console.log(refreshToken, 'refreshToken')
    const formData = new FormData();
    formData.append('grant_type', 'refresh_token');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
    formData.append('refresh_token', refreshToken);

    try {
        const response = await fetch('https://identity.xero.com/connect/token', {
            method: 'POST',
            body: formData,
            headers:{
                Authorization: `Basic ${base64.encode(`${XERO_CLIENT_ID}:${XERO_SECRET}`)}`,
                'xero-tenant-id': '1b0ae8ca-4b51-4d60-8ae5-af71b691ec1c',
            }
        })
        const res = await response.json()
        console.log(res)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await TOKENS.put('xero_refresh_token', res.refresh_token)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await TOKENS.put('xero_access_token', res.access_token)
        return new Response(JSON.stringify(res),{status: response.status, headers: { 'Access-Control-Allow-Origin': '*'} });
    }catch (e){
        console.log(e)
        return new Response( e,{status: 400, headers: { 'Access-Control-Allow-Origin': '*'}});

    }
}
export default XeroRefreshToken;
