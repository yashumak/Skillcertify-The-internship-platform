import { connectDB } from './lib/mongodb.js';
import mongoose from 'mongoose';

async function testConnection() {
    try {
        console.log('Testing database connection...');
        console.log('MongoDB URI:', process.env.MONGODB_URI || 'Using fallback URI');
        
        await connectDB();
        console.log('✅ Database connection successful!');
        
        // Test if we can perform basic operations
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log('Available collections:', collections.map(c => c.name));
        
        // Close the connection
        await mongoose.connection.close();
        console.log('Connection closed successfully');
        
    } catch (error) {
        console.error('❌ Database connection failed:', {
            name: error.name,
            message: error.message,
            code: error.code
        });
        
        if (error.name === 'MongoNetworkError') {
            console.log('💡 This usually means:');
            console.log('   - Network connectivity issues');
            console.log('   - Firewall blocking the connection');
            console.log('   - MongoDB Atlas IP whitelist restrictions');
        }
        
        if (error.name === 'MongoServerSelectionError') {
            console.log('💡 This usually means:');
            console.log('   - MongoDB Atlas cluster is down');
            console.log('   - Connection string is incorrect');
            console.log('   - Authentication credentials are wrong');
        }
        
        process.exit(1);
    }
}

// Load environment variables if .env file exists
try {
    import('dotenv/config');
} catch (e) {
    console.log('No dotenv found, using fallback configuration');
}

testConnection();
