const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51MvcWrSDgT7bpXx66jRgwnUXM1xc1O479SjUQ1DwFeAhVcZqDDxiksgeZBYBY9Up7Jd2hy1CIO9fE94PiRiSpZZ700FT8qipvi')

// API


// App config
const app = express();

// Middlewares
app.use(cors({ origin:true }));
app.use(express.json());


// API routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received of ******* ', total);

    const paymentIntent = await stripe.paymentIntents.create({
       amount: total,
       currency: 'usd',
       payment_method_types: ['card'],
      });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app);


// Example endpoint
//   http://127.0.0.1:5001/fir-mart-5971d/us-central1/api