import nodemailer from "nodemailer"; // Import nodemailer for email sending

export async function POST(req) {
  // Handles POST requests
  try {
    const { email, subject, message } = await req.json(); // Extract form data

    if (!email || !subject || !message) {
      // Validate input
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // Gmail SMTP
      port: process.env.EMAIL_PORT, // Usually 465 for secure
      secure: process.env.EMAIL_SECURE === "true", // Secure connection
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "areejfatimasheikh25@gmail.com", // Your email
      subject: subject,
      text: `From: ${email}\n\n${message}`, // Plain text message
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
    });
  }
}
