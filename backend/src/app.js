import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import authRoutes from "./modules/auth/auth.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
const app = express();

// ======================
// Middlewares
// ======================

app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",
        credentials: true,
    })
);

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ======================
// Health Check Route
// ======================

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "🚀 SmartERP Backend Running",
    });
});

// ======================
// API Routes
// ======================

// app.use("/api/auth", authRoutes);
// app.use("/api/company", companyRoutes);
app.use("/api/auth", authRoutes);
// ======================
// 404 Handler
// ======================

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});
app.use(errorHandler);
export default app;