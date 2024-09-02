const { z } = require("zod");

const sigupSchema = z.object({
    username: z.
    string({ required_error : "Name is required" })
    .trim()
    .min(5, { message: "Name must be at lest of 3 chars."})
    .max(255, { message: "Name must not be more than 255 charcters"}),
    email: z.
    string({ required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, {message: "Email must be at lest of 3 characters."})
    .max(255,{message: "Email must not be more than 255 characters"}),
    phone: z.
    string({ required_error: "Phone number is required"})
    .trim()
    .min(10, {message: "Phone must be at least of 10 characters"})
    .max(20, {message: "Phone must not be more than 20 characters"}),
    password: z.
    string({ required_error: "Password is required"})
    .min(5, {message: "Password must be at least of 5 characters"})
    .max(100, {message: "Password must not be more than 100 charcters"})
});

const siginSchema = z.object({
    email: z.
    string({ required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(5, {message: "Email must be at lest of 3 characters."})
    .max(255,{message: "Email must not be more than 255 characters"}),
    password: z.
    string({ required_error: "Password is required"})
    .min(5, {message: "Password must be at least of 5 characters"})
    .max(100, {message: "Password must not be more than 100 charcters"})
});

module.exports = { sigupSchema, siginSchema };

