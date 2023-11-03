/* eslint-disable */
import React, { useState } from 'react';

async function sendEmail(name, email, imgSrc) {
  const config = {
    SecureToken: '91d7d8de-229d-4377-b7c6-a10419677471',
    Server: 'smtp.elasticemail.com',
    To: email,
    From: 'mail.phoenixnsec@gmail.com',
    Subject: 'Subject',
    Body: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>replit</title>
      </head>
    
      <body>
        <h1>HII</h1>    
        
      </body>
    </html>
    `,
    Attachments: [
      {
        name: `${name}.png`,
        data: imgSrc,
      },
    ],
  };
  return new Promise((resolve, reject) => {
    Email.send(config).then(
      (message) => {
        console.log('Email sent:', message);
        resolve(message);
      },
      (error) => {
        console.error('Email sending error:', error);
        reject(error);
      }
    );
  });
}
export { sendEmail };
