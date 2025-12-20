import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import pool from '@/lib/mysql';
// import ContactEmail from '@/components/ContactEmail'; // optional

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // ✅ Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // ✅ 1. SAVE TO MYSQL
    const query = `
      INSERT INTO contacts (name, email, phone, subject, message)
      VALUES (?, ?, ?, ?, ?)
    `;

    await pool.execute(query, [
      name,
      email,
      phone || '',
      subject || '',
      message,
    ]);

    // ✅ 2. SEND EMAIL
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // must be verified
      to: ['your-email@example.com'], // replace with YOUR email
      subject: `New message from ${name}: ${subject || 'No subject'}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message:${message}
      `,
      // react: ContactEmail({ name, email, phone, subject, message }) // optional
    });

    // ✅ SUCCESS RESPONSE
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('CONTACT ERROR:', error);

    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
