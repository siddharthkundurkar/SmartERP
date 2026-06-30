import { z } from "zod";

export const registerSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(3, "Full name must be at least 3 characters")
        .max(100),

    email: z
        .string()
        .trim()
        .email("Invalid email"),

    mobile: z
        .string()
        .trim()
        .regex(/^[6-9]\d{9}$/, "Invalid mobile number")
        .optional(),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(100),

    companyName: z
        .string()
        .trim()
        .min(2)
        .max(150)
});
export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Invalid email"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters"),
});
export const selectCompanySchema = z.object({
    companyId: z.string().uuid("Invalid company id")
});