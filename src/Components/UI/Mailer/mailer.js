import emailjs from 'emailjs-com';

export function sendEmail(mailOptions) {
    let templateParams = {
        subject: mailOptions.subject,
        to_name: mailOptions.employeeName,
        message: mailOptions.message,
        to_email: mailOptions.userEmail,
        reply_to: "shabarish.shabbi@gmail.com",
    }

    emailjs.send(
        'service_vc437ph',
        'template_iux67ej',
        templateParams,
        'user_BQa6pp6IQcfB51QbJd6MA'
    )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(`err: `, error.text);
        });
}
