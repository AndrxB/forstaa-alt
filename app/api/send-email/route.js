import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Export the POST method as a named export
export async function POST(req) {
  const { name, email, message } = await req.json(); // Assumes you're sending a JSON payload

  // Ensure the fields are provided
  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  // Create a transporter using your email service credentials
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Or use your chosen SMTP service
    auth: {
      user: process.env.EMAIL_USER, // Your email address from .env.local
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  // Set up email data
  let mailOptions = {
    from: email, // The sender's email
    to: process.env.EMAIL_ADMIN, // Your email address where you want to receive messages
    subject: `${name} har sendt dig en besked fra forstå alt`, // Subject of the email
    text: `
    navn : ${name}
    email : ${email}
    besked :
    ${message}`, // The message content
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error sending email', error: error.message },
      { status: 500 }
    );
  }
}
