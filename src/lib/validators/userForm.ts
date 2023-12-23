import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg"];

export const UserFormValidator = z.object({
    name: z
        .string({
            required_error: "required",
        })
        .min(2, "Name should be at least 2 characters")
        .max(60, "Name should not exceed 60 characters"),
    email: z
        .string({
            required_error: "required",
        })
        .email("Invalid email address")
        .max(100, "Email should not exceed 100 characters"),
    phone: z
        .string({
            required_error: "required",
        })
        .refine((value) => /^[\+]{0,1}380([0-9]{9})$/.test(value), {
            message: "Invalid phone number format",
        })
        .refine(
            (phone) => phone.startsWith("+380"),
            "Phone must start with +380"
        ),
    position: z.string({
        required_error: "required",
    }),
    photo: z
        .any({
            required_error: "required",
        })
        .refine(
            (file) =>
                file &&
                file[0] &&
                file[0].type &&
                ACCEPTED_IMAGE_TYPES.includes(file[0].type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
});

export type UserFormSchema = z.infer<typeof UserFormValidator>;
