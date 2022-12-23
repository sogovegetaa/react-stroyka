const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HoXg1FCVdWTE2NYhYMmMOU9U1mpPl0zN3pgGsRluRl7mVGVwbeAj9XSaAFOZrrqzGdj9TC9hAf3464IWxdTD8hf009gkNys3g')

// API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  
  console.log(`Payment request received, ${total}`);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  })

  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  })
})

// - Listen Command

exports.api = functions.https.onRequest(app)