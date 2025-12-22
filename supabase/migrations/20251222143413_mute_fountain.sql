/*
  # Enhance recent work table for dynamic pages

  1. Changes
    - Add multiple image URLs for gallery
    - Add detailed content fields for dynamic pages
    - Add video URL for project videos
    - Add project details and specifications

  2. New Columns
    - `gallery_images` (text array) - Multiple project images
    - `detailed_description` (text) - Full project description
    - `project_overview` (text) - Project overview section
    - `challenges` (text) - Project challenges faced
    - `solutions` (text) - Solutions implemented
    - `results` (text) - Project results and outcomes
    - `video_url` (text) - Project video URL
    - `project_duration` (text) - Project timeline
    - `team_size` (integer) - Team members involved
    - `budget_range` (text) - Budget category
    - `technologies_used` (text array) - Technologies/tools used
    - `client_testimonial` (text) - Specific client feedback
*/

DO $$
BEGIN
  -- Add gallery images array
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'recent_work' AND column_name = 'gallery_images'
  ) THEN
    ALTER TABLE recent_work ADD COLUMN gallery_images text[];
  END IF;

  -- Add detailed description
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'recent_work' AND column_name = 'detailed_description'
  ) THEN
    ALTER TABLE recent_work ADD COLUMN detailed_description text;
  END IF;

  -- Add project overview
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'recent_work' AND column_name = 'project_overview'
  ) THEN
    ALTER TABLE recent_work ADD COLUMN project_overview text;
  END IF;

  -- Add challenges
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'recent_work' AND column_name = 'challenges'
  ) THEN
    ALTER TABLE recent_work ADD COLUMN challenges text;
  END IF;

  -- Add solutions
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'recent_work' AND column_name = 'solutions'
  ) THEN
    ALTER TABLE recent_work ADD COLUMN solutions text;
  END IF;

  -- Add results
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'recent_work' AND column_name = 'results'
  ) THEN
    ALTER TABLE recent_work ADD COLUMN results text;
  END IF;

  -- Add video URL
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'recent_work' AND column_name = 'video_url'
  ) THEN
    ALTER TABLE recent_work ADD COLUMN video_url text;
  END IF;

  -- Add project duration
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'recent_work' AND column_name = 'project_duration'
  ) THEN
    ALTER TABLE recent_work ADD COLUMN project_duration text;
  END IF;

  -- Add team size
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'recent_work' AND column_name = 'team_size'
  ) THEN
    ALTER TABLE recent_work ADD COLUMN team_size integer;
  END IF;

  -- Add budget range
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'recent_work' AND column_name = 'budget_range'
  ) THEN
    ALTER TABLE recent_work ADD COLUMN budget_range text;
  END IF;

  -- Add technologies used
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'recent_work' AND column_name = 'technologies_used'
  ) THEN
    ALTER TABLE recent_work ADD COLUMN technologies_used text[];
  END IF;

  -- Add client testimonial
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'recent_work' AND column_name = 'client_testimonial'
  ) THEN
    ALTER TABLE recent_work ADD COLUMN client_testimonial text;
  END IF;
END $$;