import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract form data
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const residence = formData.get("residence");
    const linkedin = formData.get("linkedin");
    const facebook = formData.get("facebook");
    const twitter = formData.get("twitter");
    const website = formData.get("website");
    const message = formData.get("message");
    const jobTitle = formData.get("jobTitle");
    const jobLocation = formData.get("jobLocation");

    // Get files
    const resume = formData.get("resume");
    const cv = formData.get("cv");

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !residence) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Setup email transporter
    // Note: In production, you should use environment variables for these credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com", // Replace with your email for testing
        pass: "your-app-password", // Use an app password, not your regular password
      },
    });

    // Prepare file attachments
    const attachments = [];

    if (resume) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({
        filename: resume.name,
        content: buffer,
      });
    }

    if (cv) {
      const buffer = Buffer.from(await cv.arrayBuffer());
      attachments.push({
        filename: cv.name,
        content: buffer,
      });
    }

    // Prepare email content
    const mailOptions = {
      from: "your-email@gmail.com", // Replace with your email
      to: "mohammadmunna4141@gmail.com", // The company email
      subject: `Job Application: ${jobTitle} - ${firstName} ${lastName}`,
      html: `
        <h1>New Job Application: ${jobTitle}</h1>
        <h2>Applicant Information:</h2>
        <ul>
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Location:</strong> ${residence}</li>
          <li><strong>Position Applied For:</strong> ${jobTitle}</li>
          <li><strong>Job Location:</strong> ${jobLocation}</li>
        </ul>
        
        <h2>Social Profiles:</h2>
        <ul>
          ${linkedin ? `<li><strong>LinkedIn:</strong> ${linkedin}</li>` : ""}
          ${facebook ? `<li><strong>Facebook:</strong> ${facebook}</li>` : ""}
          ${twitter ? `<li><strong>Twitter:</strong> ${twitter}</li>` : ""}
          ${website ? `<li><strong>Website:</strong> ${website}</li>` : ""}
        </ul>
        
        ${message ? `<h2>Message to Hiring Team:</h2><p>${message}</p>` : ""}
        
        <p>Please find the attached resume and any additional documents.</p>
      `,
      attachments: attachments,
    };

    // Send email
    // Note: In a real app, you'd handle this differently to avoid timeouts
    // For a production setup, consider using a queue or dedicated email service
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      { error: "Failed to process application" },
      { status: 500 }
    );
  }
}
