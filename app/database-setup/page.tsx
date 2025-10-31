"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

export default function DatabaseSetupPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const setupDatabase = async () => {
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/setup-database", {
        method: "POST",
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Database setup completed successfully!");
      } else {
        setStatus("error");
        setMessage(data.error || "Failed to setup database");
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Database Setup</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Click the button below to set up the required database tables for
              this application. This will create the necessary tables in your
              Supabase database.
            </p>

            <Button
              onClick={setupDatabase}
              disabled={status === "loading"}
              className="w-full"
            >
              {status === "loading" && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {status === "loading" ? "Setting up..." : "Setup Database"}
            </Button>

            {status === "success" && (
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}

            {status === "error" && (
              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">What will be created:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>contact_submissions table</li>
                <li>Required indexes and constraints</li>
                <li>Row Level Security policies</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
