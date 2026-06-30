import { ZodError } from "zod";

const errorHandler = (err, req, res, next) => {

    console.error(err);

    if (err instanceof ZodError) {
        return res.status(400).json({
            success: false,
            message: "Validation Error",
            errors: err.errors
        });
    }

    return res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });

};

export default errorHandler;