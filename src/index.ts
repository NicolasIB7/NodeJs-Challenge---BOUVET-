import sequelize from "./config/db"; 
import app from "./app";

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

