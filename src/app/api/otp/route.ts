import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  const { otp, email } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "rozanpoudel@gmail.com",
      pass: "uuzo nrln ucmk emoi",
    },
  });
  let mailOptions = {
    from: "OTP Generator",
    to: email,
    subject: "OTP Code",
    html: `Dear User, Your OTP code is <strong>${otp}</strong>`,
  };

  // Send email
  const res = transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred:", error.message);
      return NextResponse.json({ message: "Couldn't send email !!" });
    }
  });
  return NextResponse.json({ message: "Email sent successfully !!" });
};
