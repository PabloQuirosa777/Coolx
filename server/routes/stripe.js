var express = require("express");
const Stripe = require('stripe')
var router = express.Router();



const stripe = new Stripe("sk_test_51LnIA1J5n5ohBaXPvqYjgIkobjoWixGhWj9ya8VSu39WKs14JYLhxibZKVd2tM4uoXk9X4NcsTccU3cmBBb2uUHH00IRbJL1nF")


router.post('/api/checkout',async (req, res) => {
    try{

    const { id, amount } = req.body

    const payment = await stripe.paymentIntents.create({
        amount,
        currency: "EUR",
        description: "Proyecto",
        payment_method: id,
        confirm: true
    });

    console.log(payment);
    res.send({message: 'Pago realizado correctamente'});
    }catch (error) {
    console.log(error);
    res.json({ message: error.raw.message })
}

});
  module.exports = router;