-- ============================================================================
-- SUPABASE SCHEMA & SEED DATA SCRIPT FOR CIT DEPARTMENT OF INFORMATION TECHNOLOGY
-- Project: cit-it-dept-brochure (https://wxnsxchekujedcnmfnin.supabase.co)
-- ============================================================================

-- Drop existing tables to recreate with exact quoted casing if needed
DROP TABLE IF EXISTS public.placements CASCADE;
DROP TABLE IF EXISTS public.achievements CASCADE;

-- 1. PLACEMENTS TABLE
CREATE TABLE public.placements (
    "regNo" VARCHAR(50) PRIMARY KEY,
    "student" VARCHAR(255) NOT NULL,
    "department" VARCHAR(50) DEFAULT 'IT',
    "status" VARCHAR(50) DEFAULT 'Placed',
    "company" VARCHAR(255) NOT NULL,
    "package" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS & Public Read Access for Placements
ALTER TABLE public.placements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Placements" ON public.placements FOR SELECT USING (true);

-- 2. ACHIEVEMENTS TABLE
CREATE TABLE public.achievements (
    "id" VARCHAR(50) PRIMARY KEY,
    "year" VARCHAR(10) NOT NULL,
    "yearTagline" VARCHAR(255),
    "students" TEXT[] NOT NULL,
    "registerNumbers" TEXT[],
    "competition" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255),
    "achievement" VARCHAR(255) NOT NULL,
    "badge" VARCHAR(255),
    "level" VARCHAR(50),
    "organizer" VARCHAR(255),
    "date" VARCHAR(100),
    "location" VARCHAR(255),
    "recognition" VARCHAR(255),
    "teamName" VARCHAR(255),
    "prizeINR" NUMERIC DEFAULT 0,
    "prizeUSD" NUMERIC DEFAULT 0,
    "prizeDisplay" VARCHAR(255),
    "shortDesc" TEXT,
    "problemStatement" TEXT,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS & Public Read Access for Achievements
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Achievements" ON public.achievements FOR SELECT USING (true);


-- ----------------------------------------------------------------------------
-- SEED DATA — 47 VERIFIED PLACEMENT RECORDS
-- ----------------------------------------------------------------------------
INSERT INTO public.placements ("regNo", "student", "department", "status", "company", "package") VALUES
('23IT001', 'A Thrisyanth', 'IT', 'Placed', 'SMBC', '₹12 LPA'),
('23IT009', 'Akshaya C L', 'IT', 'Placed', 'Microsoft', '₹58 LPA'),
('23IT011', 'Akshayya R U', 'IT', 'Placed', 'DTCC', '₹8 LPA'),
('23IT022', 'Ashok Kumar S', 'IT', 'Placed', 'Hyland', '₹10 LPA'),
('23IT030', 'Bala Ganesh K', 'IT', 'Placed', 'Microsoft', '₹58 LPA'),
('23IT032', 'Balaraman M', 'IT', 'Placed', 'Microsoft', '₹58 LPA'),
('23IT033', 'Bharath A V', 'IT', 'Placed', 'Namma Yatrai', '₹12 LPA'),
('23IT037', 'Chaarulatha N', 'IT', 'Placed', 'Hyland', '₹10 LPA'),
('23IT040', 'Deenesh Kumar J', 'IT', 'Placed', 'Raptee', '₹5 LPA'),
('23IT045', 'Dinesh R', 'IT', 'Placed', 'SMBC', '₹12 LPA'),
('23IT057', 'Hariharan C', 'IT', 'Placed', 'Raptee', '₹5 LPA'),
('23IT059', 'Harikrishna K', 'IT', 'Placed', 'ServiceNow', '₹48 LPA'),
('23IT079', 'Karthikeyan E', 'IT', 'Placed', 'Sapphire', '₹4–6 LPA'),
('23IT096', 'Mohammad Salaudeen I', 'IT', 'Placed', 'SMBC', '₹12 LPA'),
('23IT103', 'Lakshanaa N', 'IT', 'Placed', 'DTCC', '₹8 LPA'),
('23IT152', 'Shalini T', 'IT', 'Placed', 'DTCC', '₹8 LPA'),
('23IT154', 'Sharan Yeswanth', 'IT', 'Placed', 'MF', '₹20 LPA'),
('23IT173', 'V Keerthana', 'IT', 'Placed', 'HLB Global', '₹10 LPA'),
('23IT185', 'Yohalakshmi G', 'IT', 'Placed', 'HLB Global', '₹10 LPA'),
('23IT124', 'R Barath', 'IT', 'Placed', 'Orisenc', '₹6 LPA'),
('23IT142', 'Sahul Hameed N', 'IT', 'Placed', 'Hexaware', '₹4–6 LPA'),
('23IT156', 'Sharvesh PS', 'IT', 'Placed', 'Hexaware', '₹4–6 LPA'),
('23IT050', 'Gayathri K', 'IT', 'Placed', 'Hexaware', '₹4–6 LPA'),
('23IT150', 'Saran R', 'IT', 'Placed', 'Hexaware', '₹4–6 LPA'),
('23IT159', 'Sonaa Shree V S', 'IT', 'Placed', 'Multicoreware', '₹7 LPA'),
('23IT127', 'Raghul S', 'IT', 'Placed', 'Philips', '₹12 LPA'),
('23IT158', 'Shradha S', 'IT', 'Placed', 'Philips', '₹13 LPA'),
('23IT120', 'Prithika R', 'IT', 'Placed', 'Rocket India', '₹7 LPA'),
('23IT104', 'Nandhini I', 'IT', 'Placed', 'Rocket India', '₹7 LPA'),
('23IT171', 'Thejashree V M', 'IT', 'Placed', 'Rocket India', '₹7 LPA'),
('23IT113', 'Parkavi V', 'IT', 'Placed', 'Sapphire', '₹4–6 LPA'),
('23IT064', 'Harini Priyadharshini G', 'IT', 'Placed', 'Sapphire', '₹4–6 LPA'),
('23IT107', 'Naveen Prasath S', 'IT', 'Placed', 'Prodapt', '₹8 LPA'),
('23IT099', 'Monisha M', 'IT', 'Placed', 'Prodapt', '₹8 LPA'),
('23IT111', 'Paidipalli Revanth Kumar Reddy', 'IT', 'Placed', 'Prodapt', '₹8 LPA'),
('23IT176', 'Vigneshwaran S', 'IT', 'Placed', 'Prodapt', '₹8 LPA'),
('23IT139', 'Sadish S', 'IT', 'Placed', 'Prodapt', '₹8 LPA'),
('23IT140', 'Sahana D', 'IT', 'Placed', 'Prodapt', '₹8 LPA'),
('23IT085', 'M. Amrithaa', 'IT', 'Placed', 'Prodapt', '₹8 LPA'),
('23IT301', 'Abimanyu S', 'IT', 'Placed', 'Prodapt', '₹8 LPA'),
('23IT165', 'Sujitha K', 'IT', 'Placed', 'Prodapt', '₹8 LPA'),
('23IT166', 'Sundari A', 'IT', 'Placed', 'Prodapt', '₹8 LPA'),
('23IT105', 'Nanditha S', 'IT', 'Placed', 'Prodapt', '₹9 LPA'),
('23IT072', 'Joshua Ranish T', 'IT', 'Placed', 'Orion', '₹4–5 LPA'),
('23IT074', 'Kaarthic I.R', 'IT', 'Placed', 'Orion', '₹4–5 LPA'),
('23IT078', 'Kandiah C', 'IT', 'Placed', 'Orion', '₹4–5 LPA'),
('23IT169', 'Tania R', 'IT', 'Placed', 'Cisco', '₹20 LPA')
ON CONFLICT ("regNo") DO UPDATE SET
    "student" = EXCLUDED."student",
    "company" = EXCLUDED."company",
    "package" = EXCLUDED."package";


-- ----------------------------------------------------------------------------
-- SEED DATA — 18 VERIFIED STUDENT ACHIEVEMENT LAURELS
-- ----------------------------------------------------------------------------
INSERT INTO public.achievements ("id", "year", "yearTagline", "students", "registerNumbers", "competition", "category", "achievement", "badge", "level", "organizer", "date", "location", "recognition", "teamName", "prizeINR", "prizeUSD", "prizeDisplay", "shortDesc", "problemStatement") VALUES
('ii-1', 'II', 'RISING INNOVATORS', ARRAY['Vasunthra S Ra'], ARRAY['210425205186'], 'MathXplore 2.0', 'AI & Smart Campus', '3rd Prize', '🥉 3rd Prize', 'State', 'SIMATS Engineering College', '29 June 2026', 'SIMATS Engineering College, Chennai', 'Certificate', '', 0, 0, 'Certificate of Merit', 'AI-powered Smart Campus Intelligence System for resource optimization and predictive analytics.', 'AI-powered Smart Campus Intelligence System for resource optimization.'),
('ii-2', 'II', 'RISING INNOVATORS', ARRAY['Vasunthra S Ra'], ARRAY['210425205186'], 'BuildFest ''26', 'AI & Multimodal NLP', '1st Prize', '🥇 1st Prize', 'Regional', 'Hakelize / Omega Consortium', '08 August 2026', 'Grootan Technologies, Perungudi, Chennai', '1st Prize Trophy + Goodies', 'Team Naadi', 30000, 0, '₹30,000 + Goodies', 'AI-Driven Multimodal Framework for Detection & Classification of Deceptive Reviews.', 'AI-Driven Multimodal Framework for Detection of Deceptive Reviews.'),
('ii-3', 'II', 'RISING INNOVATORS', ARRAY['Monissha L'], ARRAY['210425205103'], 'Moonshot Hackathon 2026', 'Generative AI & LLMs', 'Finalist', '🚀 Finalist', 'International', 'AETHRA', '12 March 2026', 'Remote / Online Global', 'International Finalist & Credits', '', 0, 1300, '$1,300 USD', 'Transformative zero-to-one tech innovation creating new category future.', 'Transformative zero-to-one tech innovation.'),
('ii-4', 'II', 'RISING INNOVATORS', ARRAY['Monissha L'], ARRAY['210425205103'], 'Handloom Hackathon 2026', 'Digital Traceability', 'Silver Medalist', '🥈 Silver Medalist', 'National', 'Ministry of Textiles, Govt of India', '24 February 2026', 'IIT Delhi / Ministry of Textiles, New Delhi', 'Silver Medal & Recognition', '', 0, 0, 'Silver Medal & National Recognition', 'Technology-driven solutions to strengthen India''s handloom sector through digital access.', 'Technology-driven solutions to strengthen India''s handloom sector.'),
('ii-5', 'II', 'RISING INNOVATORS', ARRAY['Vishnu Priyan P'], ARRAY['210425205191'], 'Handloom Hackathon 2026', 'Digital Traceability', 'Silver Medalist', '🥈 Silver Medalist', 'National', 'Ministry of Textiles, Govt of India', '24 February 2026', 'IIT Delhi / Ministry of Textiles, New Delhi', 'Silver Medal & Recognition', '', 0, 0, 'Silver Medal & National Recognition', 'AI-powered handloom authentication and digital traceability to ensure product authenticity.', 'AI-powered handloom authentication.'),
('ii-6', 'II', 'RISING INNOVATORS', ARRAY['Deekshah R'], ARRAY['210425205029'], 'BuildFest ''26 Hackathon', 'Automated Code Audit', '3rd Prize', '🥉 3rd Prize', 'Regional', 'Omega Consortium × Hakelize', '08 August 2026', 'Grootan Technologies, Perungudi, Chennai', 'Cash Prize + Certificate', '', 10000, 0, '₹10,000 + Goodies', 'AI-based automated code review system for detecting security vulnerabilities.', 'AI-based automated code review system.')
ON CONFLICT ("id") DO NOTHING;
