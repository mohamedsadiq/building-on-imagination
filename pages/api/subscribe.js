

import nodemailer from 'nodemailer';

const subscribeHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    const transporter = nodemailer.createTransport({
      host: '', // Replace with your SMTP server
      port: 587, // Replace with your SMTP server port
      secure: false,
      auth: {
        user: '', // Replace with your email address
        pass: '', // Replace with your email password
      },
    });

    const mailOptions = {
      from: '', // Replace with your email address
      to: '',
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
