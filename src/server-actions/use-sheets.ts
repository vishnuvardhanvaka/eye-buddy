"use server"

import { google } from "googleapis";

export const SheetsAPI = async (email: string) => {
    
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.CLIENT_EMAIL,
            client_id: process.env.CLIENT_ID,
            private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
          },
      scopes:[
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ]
    })

    const sheets= google.sheets({
      auth,
      version:'v4'
    })
    // console.log(email,process.env.CLIENT_EMAIL)

    const response=await sheets.spreadsheets.values.append({
      spreadsheetId:'1hxgQkGz_HJD_oSP9cXn7UX-jnmGQEy1FPKZwGc3XNP8',
      range:'Sheet1!A2:C',
      valueInputOption:'USER_ENTERED',
      requestBody:{
        values:[[email]]
      }
    })
    console.log(response)

}