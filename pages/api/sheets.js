import { google } from 'googleapis';

const sheets = google.sheets({ version: 'v4', auth: process.env.NEXT_PUBLIC_GOOGLE_API_KEY});

const SPREADSHEET_ID = '1qYSyL5ptbmk3IQXngxpRjBKVWejRT1BLF2Z6ITe2CTQ';

export default async function handler(req, res) {
  //  console.log('API Key:', process.env.NEXT_PUBLIC_GOOGLE_API_KEY);
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Sheet1!A:A',
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values: [[email]],
        },
      });

      res.status(200).json({ message: 'Email added to Google Sheet successfully' });
    } catch (error) {
        console.error('Error adding email to Google Sheet:', error);
      
        res.status(500).json({ error: 'Error adding email to Google Sheet' });
      }
      
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
