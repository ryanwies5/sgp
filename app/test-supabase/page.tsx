import { createClient } from "@/utils/supabase/server";

export default async function TestSupabase() {
  const supabase = await createClient();

  // Test the connection by getting some basic info
  const { error } = await supabase
    .from("_realtime_schema")
    .select("*")
    .limit(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Supabase Connection Test</h1>

      <div className="bg-card rounded-xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Connection Status</h2>

        {error ? (
          <div className="bg-red-100 dark:bg-red-900 p-4 rounded-md">
            <p className="text-red-800 dark:text-red-200">
              <strong>Connection Error:</strong> {error.message}
            </p>
            <p className="text-sm text-red-600 dark:text-red-300 mt-2">
              Please check your environment variables in .env.local
            </p>
          </div>
        ) : (
          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-md">
            <p className="text-green-800 dark:text-green-200">
              ✅ Successfully connected to Supabase!
            </p>
            <p className="text-sm text-green-600 dark:text-green-300 mt-2">
              Project ID: apzorioamdbtaaoaonyt
            </p>
          </div>
        )}

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Next Steps:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>
              Update your .env.local file with the correct SUPABASE_ANON_KEY
            </li>
            <li>Create your database tables in the Supabase dashboard</li>
            <li>Set up your contact form to save to Supabase</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
