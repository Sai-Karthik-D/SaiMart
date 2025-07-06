import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config';
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/cloudinary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();
const port = process.env.PORT || 4000;

// Connect to DB and Cloudinary
await connectDB();
await connectCloudinary();

// ✅ Safe list of allowed frontend origins (no regex)
const allowedOrigins = [
  'http://localhost:5173',
  'https://saimart-app.vercel.app',
  'https://saimart-frontend.vercel.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (
      !origin || 
      allowedOrigins.includes(origin) || 
      origin.endsWith('.vercel.app') // ✅ Allow Vercel preview URLs too
    ) {
      callback(null, true);
    } else {
      console.log('🚫 Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

// ✅ Middleware
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // For preflight requests
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.get('/', (req, res) => res.send("API is Working"));
app.use('/api/user', userRouter);
app.use('/api/seller', sellerRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/address', addressRouter);
app.use('/api/order', orderRouter);

// ✅ Start Server
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
