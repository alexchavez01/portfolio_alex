import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, receiverEmail } = req.body; // Extract receiverEmail from the request body

    // Validate the receiverEmail to prevent abuse
    if (!receiverEmail || !/\S+@\S+\.\S+/.test(receiverEmail)) {
      return res.status(400).json({ message: 'Invalid receiver email address' });
    }

    // Create a transporter using nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Use Gmail or other email provider
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email, // Sender's email
        to: receiverEmail, // Dynamic receiver email
        subject: `New Contact Form Submission from ${name}`,
        text: `Message: ${message}\n\nFrom: ${name} (${email})`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
