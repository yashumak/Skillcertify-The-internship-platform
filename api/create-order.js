import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    const { amount, currency, ...rest } = req.body;

    try {
        const order = await razorpay.orders.create({
            amount,
            currency,
            ...rest,
        });
        // Send the public key to the frontend for Razorpay Checkout
        res.status(200).json({
            success: true,
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            key: process.env.RAZORPAY_KEY_ID,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}