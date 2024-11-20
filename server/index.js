import express from "express";
import cors from "cors";
import "dotenv/config.js";
import connectDB from "./config/db.js";
import { errorMiddleware, notFound } from "./middleware/errorMiddleware.js";
import userRouter from "./routes/user.js";
import productRouter from "./routes/product.js";
import sellerRouter from "./routes/seller.js";
import userAuthRouter from "./routes/authRoutes/userAuth.js";
import sellerAuthRouter from "./routes/authRoutes/sellerAuth.js";
import { fetchProduct } from "./controllers/product.js";
import { ethers } from "ethers";

const PORT = process.env.PORT;

const app = express();

// DB connection
connectDB();

// Update Cookie
fetchProduct()

// middlewares
app.use(cors());
app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);
// app.use(notFound);

// Routers
app.use(sellerAuthRouter);
app.use(userAuthRouter);
app.use(userRouter);
app.use(sellerRouter);
app.use(productRouter);

app.get('/api/MollyBeach/ApiTest', async (req, res) => {
  try {
    if (!process.env.ETH_RPC) {
      throw new Error('ETH_RPC environment variable is not set');
    }
    
    const provider = new ethers.JsonRpcProvider(process.env.ETH_RPC);
    
    // Get network info without enforcing mainnet
    const network = await provider.getNetwork().catch(error => {
      throw new Error(`Failed to connect to network: ${error.message}`);
    });

    const contractAddress = process.env.CONTRACT_ADDRESS;
    
    if (!ethers.isAddress(contractAddress)) {
      throw new Error('Invalid contract address format');
    }

    // Get contract info
    const balance = await provider.getBalance(contractAddress);
    const blockNumber = await provider.getBlockNumber();
    
    // Get gas price
    const feeData = await provider.getFeeData();

    res.json({
      success: true,
      data: {
        network: {
          name: network.name || 'unknown',
          chainId: network.chainId.toString(),
          blockNumber: blockNumber
        },
        contract: {
          address: contractAddress,
          balanceInWei: balance.toString(),
          balanceInEth: ethers.formatEther(balance)
        },
        gasPrice: {
          wei: feeData.gasPrice?.toString(),
          gwei: feeData.gasPrice ? ethers.formatUnits(feeData.gasPrice, 'gwei') : null
        },
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({
      success: false,
      error: {
        type: 'INTERNAL_ERROR',
        message: error.message,
        code: 500,
        timestamp: new Date().toISOString()
      }
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`);
});
