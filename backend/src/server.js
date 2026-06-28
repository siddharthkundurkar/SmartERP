import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import prisma from "./config/db.js";

const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        // Connect Database
        await prisma.$connect();

        console.log("✅ PostgreSQL Connected");

        // Start Server
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("❌ Failed to start server");
        console.error(error);

        await prisma.$disconnect();

        process.exit(1);
    }
}

startServer();

// Graceful Shutdown
process.on("SIGINT", async () => {
    console.log("\n🛑 Shutting down server...");
    await prisma.$disconnect();
    process.exit(0);
});

process.on("SIGTERM", async () => {
    console.log("\n🛑 Server terminated.");
    await prisma.$disconnect();
    process.exit(0);
});