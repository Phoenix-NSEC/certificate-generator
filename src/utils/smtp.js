/* eslint-disable */


async function sendEmail(name, email, imgSrc) {
  const config = {
    SecureToken: '91d7d8de-229d-4377-b7c6-a10419677471',
    Server: 'smtp.elasticemail.com',
    To: email,
    From: 'mail.phoenixnsec@gmail.com',
    Subject: 'Important Phoenix Tech Club Update - Your Enclosed Document',
    Body: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Phoneix</title>
      </head>
      <body style="font-family: sans-serif">
        <h5>Dear Tech Enthusiast,</h5>
        <p>
          We hope this message finds you well and thriving in your tech journey. We
          have some exciting news to share with you. The Phoenix Tech Club is
          pleased to inform you that an important document is ready, and we're
          thrilled to have you as part of our tech community. The enclosed document
          holds significance for your involvement with the Phoenix Tech Club,
          whether you're a new member or a valued participant. It serves as a
          testament to your commitment to the world of technology and the progress
          we're making together. We encourage you to open the attached document to
          find out more. It contains information that is important for your
          continued participation and engagement with the Phoenix Tech Club. If you
          have any questions or require further assistance, please don't hesitate to
          reach out to us at mail.phoenixnsec@gmail.com. We're always here to
          support you on your tech journey. Thank you for being a part of the
          Phoenix Tech Club. Here's to a future filled with learning, growth, and
          innovation!
        </p>
        <p>Warm regards,</p>
        <p>Phoenix Tech Club</p>
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
