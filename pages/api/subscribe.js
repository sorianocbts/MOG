import nodemailer from 'nodemailer'

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.EMAIL_PASS}`
    }
});
function ctfSub(event) {
    transporter.sendMail(
        {
            from: process.env.EMAIL,
            to: [`${process.env.SUBS_EMAIL}`],
            subject: `Request to Subscribe from confessingthefaith.com`,
            html: `<p>First Name: ${event.user.first_name}<br/>
                    <p>Last Name: ${event.user.last_name}<br/>
                    <p>Email Address: ${event.user.email}<br/>
                    
                    </p>`
        },
        function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        }
    );
}

export default function handler(req, res) {
    if (req.method === 'POST' && req.body.pass === process.env.TEMP_POST_PASS) {
        let event = {
            user: req.body.user
        }
        ctfSub(event)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ name: `Thanks` }))
        // .catch(err => {
        //     res.statusCode = 400
        //     res.setHeader('Content-Type', 'application/json')
        //     res.end(JSON.stringify({ name: `Error` }))
        // })
    } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ name: `Good try` }))
    }

}
