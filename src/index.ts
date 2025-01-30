import express from "express";
import sequelize from "./config/db"; 

const app = express();
const PORT = process.env.PORT || 3001;

(async () => {
  try {
    await sequelize.sync(); 
    console.log("✅ Database synchronized successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error synchronizing database:", error);
  }
})();

