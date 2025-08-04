import Razorpay from "razorpay";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    // Parse body if needed (Vercel sends as string sometimes)
    let body = req.body;
    if (typeof body === "string") {
        try {
            body = JSON.parse(body);
        } catch {
            res.status(400).json({ error: "Invalid JSON" });
            return;
        }
    }

    const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
        amount: body.amount * 100, // Convert ₹ to paise
        currency: "INR",
        receipt: "order_rcptid_11",
    };

    try {
        const order = await razorpay.orders.create(options);
        res.status(200).json(order); // This should include order.id
    } catch (err) {
        console.error("Razorpay error:", err);
        res.status(500).json({ error: "Order creation failed", details: err.message || err });
    }
}

