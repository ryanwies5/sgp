import { z } from "zod";

// Contact form validation schema
export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    ),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),

  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters")
    .refine(
      (val) => val.trim().length > 0,
      "Message cannot be empty or just whitespace"
    ),
});

// Type inference from the schema
export type ContactFormData = z.infer<typeof contactSchema>;

// Validation function that returns formatted errors
export function validateContactForm(
  data: unknown
):
  | { success: true; data: ContactFormData }
  | { success: false; errors: Record<string, string> } {
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    const errors: Record<string, string> = {};
    result.error.issues.forEach((issue) => {
      const path = issue.path.join(".");
      errors[path] = issue.message;
    });
    return { success: false, errors };
  }

  return { success: true, data: result.data };
}
