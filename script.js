import fetch from "node-fetch";
import fs from 'fs'

const Query = async () => {
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjFDQUY4RTY2NzcyRDZEQzAyOEQ2NzI2RkQwMjYxNTgxNTcwRUZDMTkiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJISy1PWm5jdGJjQW8xbkp2MENZVmdWY09fQmsifQ.eyJuYmYiOjE2NTk5NjkxNjAsImV4cCI6MTY1OTk3MDk2MCwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS54ZXJvLmNvbSIsImF1ZCI6Imh0dHBzOi8vaWRlbnRpdHkueGVyby5jb20vcmVzb3VyY2VzIiwiY2xpZW50X2lkIjoiNUFFRjgxNDc3RTAyNDE4MUI5REUyQTcxNkIyMEE1MkUiLCJzdWIiOiI3Yzg3YjdhMjc0MDM1NTNkOTJiMjIxNWQyYmE0ZGE5NiIsImF1dGhfdGltZSI6MTY1OTY4OTgyNywieGVyb191c2VyaWQiOiI3ZDhkNGU0OS00ODE5LTQ5MjgtYjQ2OS02NGViODMzNGIwZjYiLCJnbG9iYWxfc2Vzc2lvbl9pZCI6ImM1OTY1YzY4ZTdmMjQxOTRiYWMwY2ZlZGJiYTliZGM1IiwianRpIjoiNjI1ZjQzYzY3Yjc1MDY4MmRmYmRhYjBhMzNjNzhmMTYiLCJhdXRoZW50aWNhdGlvbl9ldmVudF9pZCI6ImM3ODVhZTIyLTcwODMtNDlhMC1iNDBmLTczOTQ5YTZkN2E0OSIsInNjb3BlIjpbImVtYWlsIiwicHJvZmlsZSIsIm9wZW5pZCIsImFjY291bnRpbmcuc2V0dGluZ3MiLCJhY2NvdW50aW5nLmF0dGFjaG1lbnRzIiwiYWNjb3VudGluZy50cmFuc2FjdGlvbnMiLCJhY2NvdW50aW5nLmNvbnRhY3RzIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.DrVw9GqUSo-GSvSLgYSJ9Tlyw_dZpL6aXvVdTjCZtB0joUr1hnUnD1LIOvswxWXz9loUW4i2o9uvrm25s4KTTIENQNC8T-ZWE3UOEhb-HgFR5gCknNV1rurGYHDNRXBn1LkAISRWGh0MWmFAq-DdfZGAurPQL6PIqpRX61nyCgLRz8w8nIu5zIZu6X2bMUP_n6WYfECM5IRXLMHdonGsjbHUsf2FBEje5sgZeH_PR6hntKfocEzxysxaeCjkChqOTGFcqfjYUUJh_8MykeRPGdTp1YY-cZiVkWp9l2Xm2z-YfQ0VHCjG5qEzsrwSyLlFqvTqXmVg5WTgidqghFe8sg'

    const file = fs.readFileSync('/Users/roman/Downloads/xero.pdf')

    try {
        const response = await fetch(`https://api.xero.com/api.xro/2.0/Contacts/6d246868-d4af-4519-a08e-b5999ede9520/Attachments/attachment.pdf`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/pdf',
                'Accept': 'text/xml',
                'xero-tenant-id': '1b0ae8ca-4b51-4d60-8ae5-af71b691ec1c',
                Authorization: `Bearer ${token}`
            },
            body: file
        })
        console.log(response)
    }catch (e){
        console.log(e)
        // return new Response( e,{status: 400, headers: { 'Access-Control-Allow-Origin': '*'}});

    }
}
const response = Query()
