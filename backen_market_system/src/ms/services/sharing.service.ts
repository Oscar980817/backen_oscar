import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import twilio from 'twilio';
import { BillsEntity } from '../entities/bills.entity';
import { ReportsSalesEntity } from '../entities/reports.entity';


@Injectable()
export class SharingService {
  private transporter;
  private twilioClient;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    this.twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  }

  async shareByEmail(email: string, bill: BillsEntity, attachmentPath: string) {
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Your Bill',
      text: `Here is your bill: ${JSON.stringify(bill)}`,
      attachments: [
        {
          path: attachmentPath,
        },
      ],
    };
  
    await this.transporter.sendMail(mailOptions);
  }

  async shareByWhatsApp(number: string, bill: BillsEntity) {
    await this.twilioClient.messages.create({
      body: `Here is your bill: ${JSON.stringify(bill)}`,
      from: 'whatsapp:' + process.env.TWILIO_PHONE_NUMBER,
      to: 'whatsapp:' + number,
    });
  }

  async shareSalesReportByEmail(email: string, report: ReportsSalesEntity) {
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Your Sales Report',
      text: `Here is your sales report: ${JSON.stringify(report)}`,
    };
  
    await this.transporter.sendMail(mailOptions);
  }
}