const express = require('express');
const cors = require('cors');
const Razorpay = require('razorpay');
const crypto = require('crypto');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Razorpay
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.error('Razorpay key ID or secret is missing in environment variables.');
  process.exit(1);
}

console.log('Razorpay Key ID:', process.env.RAZORPAY_KEY_ID);
console.log('Razorpay Key Secret:', process.env.RAZORPAY_KEY_SECRET ? '***' : 'MISSING');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create Order API
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency, courseId, courseName, customerName, customerEmail, customerPhone } = req.body;

    const options = {
      amount: 100, // amount in paise
      currency: currency,
      receipt: `receipt_${Date.now()}`,
      notes: {
        courseId: courseId,
        courseName: courseName,
        customerName: customerName,
        customerEmail: customerEmail,
        // Do not include customerPhone, or set it to ""
      }
    };

    const order = await razorpay.orders.create(options);

    res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID
    });

  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: error.message
    });
  }
});

// Verify Payment API
app.post('/api/verify-payment', async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, courseId, customerName, customerEmail, customerPhone } = req.body;

    // Verify the payment signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Payment is verified
      // Here you can save the payment details to your database
      const paymentData = {
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        courseId: courseId,
        customerName: customerName,
        customerEmail: customerEmail,
        customerPhone: customerPhone,
        amount: req.body.amount,
        status: 'completed',
        timestamp: new Date()
      };

      // TODO: Save paymentData to your database
      console.log('Payment verified successfully:', paymentData);

      res.json({
        success: true,
        message: 'Payment verified successfully',
        paymentId: razorpay_payment_id
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Payment verification failed'
      });
    }

  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to verify payment',
      error: error.message
    });
  }
});

// Get Payment Status API
app.get('/api/payment-status/:paymentId', async (req, res) => {
  try {
    const { paymentId } = req.params;
    
    const payment = await razorpay.payments.fetch(paymentId);
    
    res.json({
      success: true,
      payment: payment
    });

  } catch (error) {
    console.error('Error fetching payment status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch payment status',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 