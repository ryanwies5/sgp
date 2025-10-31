import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { validateContactForm } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const data = await request.json();

    // --- Data Validation with Zod ---
    const validation = validateContactForm(data);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.data;

    // --- Save to Supabase ---
    const { data: submission, error } = await supabase
      .from("contact_submissions")
      .insert([{ name, email, message }])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save submission to database." },
        { status: 500 }
      );
    }

    console.log("Successfully saved to Supabase:", submission);

    // --- TODO: Add email sending logic here (e.g., with Resend) ---

    return NextResponse.json({
      success: true,
      message: "Your message has been submitted successfully!",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
