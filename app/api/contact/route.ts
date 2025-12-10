import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// zfwj cxtw ibxd pabe

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: 'reyankhan01999@gmail.com',
    pass: process.env.SMTP_PASS,
  },
})
console.log("process",process.env.SMTP_PASS)
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
    } = body
    const userEmail="reyankhan01999@gmail.com"
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const mailOptions = {
      from: `Portfolio Contact <${email}>`,
      to: userEmail,
      subject: `New contact from ${firstName} ${lastName || ''}`,
      text: `
New contact message from your portfolio:

Name: ${firstName} ${lastName || ''}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${service || 'Not selected'}

Message:
${message}
      `,
      html: `
        <h2>New contact message from your portfolio</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'Not selected'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
