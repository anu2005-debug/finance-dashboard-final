import authorize from "../middleware/auth.js";
import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

// GET transactions (all roles allowed)
router.get(
  "/transactions",
  authorize(["admin", "analyst", "viewer"]),
  async (req, res) => {
    try {
      const transactions = await Transaction.find()
        .limit(50)
        .sort({ createdOn: -1 });

      res.status(200).json(transactions);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
);

// POST transaction (admin only)
router.post(
  "/transactions",
  authorize(["admin"]),
  async (req, res) => {
    try {
      const newTransaction = new Transaction(req.body);
      await newTransaction.save();
      res.status(201).json(newTransaction);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

export default router;