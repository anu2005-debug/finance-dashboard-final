import express from "express";
import Transaction from "../models/Transaction.js";
import authorize from "../middleware/auth.js";

const router = express.Router();

router.get(
  "/summary",
  authorize(["admin", "analyst"]),
  async (req, res) => {
    try {
      const transactions = await Transaction.find();

      let totalIncome = 0;
      let totalExpense = 0;

      transactions.forEach((t) => {
        if (t.type === "income") totalIncome += t.amount;
        else totalExpense += t.amount;
      });

      const netBalance = totalIncome - totalExpense;

      // category-wise
      const categoryMap = {};

      transactions.forEach((t) => {
        if (!categoryMap[t.category]) {
          categoryMap[t.category] = 0;
        }
        categoryMap[t.category] += t.amount;
      });

      res.json({
        totalIncome,
        totalExpense,
        netBalance,
        categoryWise: categoryMap,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

export default router;