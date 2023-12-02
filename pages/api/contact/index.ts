import { ContactInfo } from "../../../models/contact.model";
import { NextApiRequest, NextApiResponse } from "next";
import nodeMailer from 'nodemailer'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const sendMailContact = async () => {
        try {
            const contactBody = req.body as ContactInfo
            const transporter = nodeMailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.MAIL_HOST_PASSWORD
                }
            })
            const emailOptions = {
                from: process.env.EMAIL,
                to: process.env.EMAIL,
                subject: contactBody.subject,
                text: `Name: ${contactBody.name} \nEmail from: ${contactBody.email} \nPhone number: ${contactBody.phoneNumber} \nMessage: ${contactBody.message}`,
            }
            transporter.sendMail(emailOptions, (error, info) => {
                if (error) return res.status(500).json(error)
                return res.status(200).json('Send contact info success')
            })
        } catch (ex) {
            console.log('ex-----', ex)
            return res.status(500).json(ex)
        }
    }

    switch (req.method) {
        case 'POST':
            sendMailContact()
            break;
        default:
            return res.status(405).json('Method is not allow')
    }
}

export default handler