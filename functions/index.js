const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")("sk_test_51Is02RSJ8ogBIzBE7BfTgJRXyN4i1hXgEN4xtzuuATePQiFxkQwyLX8G4vbLP54ebXo7NWbBACtVd1jfYgSP2Dss00nDOwu2Kl");

//API

//App config
const app =express();

//middleware
app.use(cors({origin: true}));
app.use(express.json());

//API route
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request,response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved For The Amount", total);

    const paymentIntent= await stripe.paymentIntents.create({
        amount:total, //submits the currncy
        currency: "usd",

    });
    //OK created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret

    }); 
});

exports.api= functions.https.onRequest(app);

// example endpoint 
// http://localhost:5001/challenge-c76cd/us-central1/api