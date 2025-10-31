-- Working solution for contact_submissions table with RLS

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Grant explicit permissions to anon role
GRANT ALL ON contact_submissions TO anon;
GRANT ALL ON SEQUENCE contact_submissions_id_seq TO anon;

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create permissive policy for anonymous users (contact form submissions)
CREATE POLICY "anon_all_access" ON contact_submissions
    FOR ALL 
    TO anon
    USING (true)
    WITH CHECK (true);

-- Create policy for authenticated users (admin access)
CREATE POLICY "authenticated_all_access" ON contact_submissions
    FOR ALL 
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Create an index on created_at for better performance when ordering by date
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Add a trigger to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_contact_submissions_updated_at 
    BEFORE UPDATE ON contact_submissions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
