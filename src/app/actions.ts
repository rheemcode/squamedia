"use server";

import formData from "form-data";
import Mailgun from "mailgun.js";
import Mailjet from "node-mailjet"

export async function sendContactForm(prevState: any, data: FormData) {
    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();
    const phone = data.get("phone")?.toString();
    const message = data.get("message")?.toString();
    const ecommerce = data.get("ecommerce")?.toString();
    const business = data.get("business")?.toString();
    const redesign = data.get("redesign")?.toString();
    const other = data.get("other")?.toString();

    if (!name || !email || !message) {
        return { success: false, message: "All fields are required." };
    }

    // const mailgun = new Mailgun(formData);
    // const mg = mailgun.client({
    //     username: "api",
    //     key: "fa0acafbd810e0d4af1478ebc9dbbfb1-d8df908e-7fd3b95a",
    // });
    // try {
    //     await mg.messages.create("sandbox-123.mailgun.org", {
    //         from: `Excited User <mailgun@squamedia.com>`,
    //         to: [email], // Replace with your email
    //         subject: "Your digital journey stars here | SquaMedia",
    //         text: message,
    //     });

    //     return { success: true, message: "Email sent successfully." };
    // } catch (error) {
    //     console.error("Error sending email:", error);
    //     return { success: false, message: "Failed to send email." };
    // }
    /**
 *
 * This call sends a message to one recipient.
 *
 */
    // const mailjet = require('node-mailjet')
    //     .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)

    const mailjet = Mailjet.apiConnect("d8cfe126deb0d7f82fa89aa46d51fc36", "60275844a5d5eed7f1f08e6964fa595e");


    try {
        await mailjet
            .post("send", { 'version': 'v3.1' })
            .request({
                "Messages": [
                    {
                        "From": {
                            "Email": "hello@squamedia.com",
                            "Name": "Squamedia Team"
                        },
                        "To": [
                            {
                                "Email": "hello@squamedia.com",
                                "Name": "Squamedia"
                            },

                        ],
                        "Subject": "New proposal recieved",
                        "TextPart": `
                        name: ${name},
                        email: ${email},
                        phone: ${phone},
                        message: ${message},
                        ecommerce: ${ecommerce},
                        business: ${business},
                        redesign: ${redesign},
                        other: ${other}
                        `,
                        "HTMLPart": ""
                    }
                ]
            });

        mailjet
            .post("send", { 'version': 'v3.1' })
            .request({
                "Messages": [
                    {
                        "From": {
                            "Email": "hello@squamedia.com",
                            "Name": "Squamedia Team"
                        },
                        "To": [

                            {
                                "Email": email,
                                "Name": name
                            },
                        ],

                        "TemplateID": 6689468,
                        "TemplateLanguage": true,
                        "Subject": "Your Digital Journey Starts Here | Squa media",
                        "Variables": {}
                    }
                ]
            })
        return { success: true, message: "Email sent successfully." };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email." };
    }



}
