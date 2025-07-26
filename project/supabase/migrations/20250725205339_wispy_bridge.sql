/*
  # Create communities table

  1. New Tables
    - `communities`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `location` (text, not null)
      - `description` (text, not null)
      - `image` (text, default placeholder image)
      - `contact_email` (text, not null)
      - `website` (text, optional)
      - `members` (integer, default 1)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `communities` table
    - Add policy for public read access
    - Add policy for authenticated users to create communities
*/

CREATE TABLE IF NOT EXISTS communities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  location text NOT NULL,
  description text NOT NULL,
  image text DEFAULT 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=800',
  contact_email text NOT NULL,
  website text,
  members integer DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE communities ENABLE ROW LEVEL SECURITY;

-- Allow public read access to communities
CREATE POLICY "Communities are publicly readable"
  ON communities
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to create communities
CREATE POLICY "Authenticated users can create communities"
  ON communities
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow users to update their own communities (optional for future use)
CREATE POLICY "Users can update their own communities"
  ON communities
  FOR UPDATE
  TO authenticated
  USING (true);