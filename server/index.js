import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

/* ROUTES */
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import userRoutes from "./routes/userRoutes.js";
import dashboardRoutes from "./routes/dashboard.js";

/* MODELS */
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";

/* DATA */
import { kpis, products, transactions } from "./data/data.js";

/* CONFIG */
dotenv.config();
const app = express();

/* DEBUG (REMOVE LATER IF YOU WANT) */
console.log("🔍 MONGO_URL:", process.env.MONGO_URL);
console.log("🔍 PORT:", process.env.PORT);

/* MIDDLEWARE */
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);
app.use("/api/users", userRoutes);
app.use("/dashboard", dashboardRoutes);


/* PORT */
const PORT = process.env.PORT || 9000;

/* MONGOOSE CONNECTION */
mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("✅ MongoDB connected");

    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );

    /* SAFE SEEDING */
    const kpiCount = await KPI.countDocuments();

    if (kpiCount === 0) {
      console.log("📦 Seeding database...");

      await KPI.insertMany(kpis);
      await Product.insertMany(products);
      await Transaction.insertMany(transactions);

      console.log("✅ Database seeded successfully");
    } else {
      console.log("✅ Database already contains data");
    }
  })
  .catch((error) => {
    console.log("❌ MongoDB connection error:", error.message);
  });