

import nodemailer from 'nodemailer';

const subscribeHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', // Replace with your SMTP server
      port: 587, // Replace with your SMTP server port
      secure: false,
      auth: {
        user: 'mohamed.sadiq@outlook.sa', // Replace with your email address
        pass: 'Vba8VX%ja^YyY*h7IYIQUjEI3d6qMv#hZD6fqMg&%pEsGUV*iJcc$^CUfDTT7ErhOu', // Replace with your email password
      },
    });

    const mailOptions = {
      from: 'mohamed.sadiq@outlook.sa', // Replace with your email address
      to: 'mohamed.sadiq@outlook.sa',
      subject: 'New Newsletter Subscription',
      text: `A new user has subscribed to the newsletter: ${email}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default subscribeHandler;
