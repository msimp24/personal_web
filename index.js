const express = require('express')
const app = express();

const nodemailer = require('nodemailer');

app.listen(3000, ()=>{
    console.log('listening at port 3000');
})

app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

app.post('/email', (request, response) =>{
    console.log('I got a request'); 

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:'mark.simpson4@gmail.com',
            pass:'noilnodmlnovqees'
        }
    })

    const mailOptions = {
        from: request.body.email,
        to: 'mark.simpson4@gmail.com',
        subject: `Message from ${request.body.firstName} ${request.body.lastName} (${request.body.email}): ${request.body.subject} `,
        text: request.body.message
    }

    transporter.sendMail(mailOptions, (error, info) =>{
        if(error){
            console.log(error);
            response.send('Error')
        }
        else{
            console.log('Email sent successfully')
            response.send("success");
        }
    })


    const data = request.body;
    response.json(data);
    
})