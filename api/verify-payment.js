import crypto from "crypto";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
    } = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    // Create expected signature
    const generated_signature = crypto
        .createHmac("sha256", key_secret)
        .update(razorpay_order_id + "|" + razorpay_payment_id)
        .digest("hex");

    if (generated_signature === razorpay_signature) {
        res.status(200).json({ success: true });
    } else {
        res.status(400).json({ success: false, message: "Payment verification failed" });
    }
}  