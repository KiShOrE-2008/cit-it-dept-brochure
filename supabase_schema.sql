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
    "package" INT NOT NULL,
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
('23IT001', 'A Thrisyanth', 'IT', 'Placed', 'SMBC', 12),
('23IT009', 'Akshaya C L', 'IT', 'Placed', 'Microsoft', 58),
('23IT011', 'Akshayya R U', 'IT', 'Placed', 'DTCC', 8),
('23IT022', 'Ashok Kumar S', 'IT', 'Placed', 'Hyland', 10),
('23IT030', 'Bala Ganesh K', 'IT', 'Placed', 'Microsoft', 58),
('23IT032', 'Balaraman M', 'IT', 'Placed', 'Microsoft', 58),
('23IT033', 'Bharath A V', 'IT', 'Placed', 'Namma Yatrai', 12),
('23IT037', 'Chaarulatha N', 'IT', 'Placed', 'Hyland', 10),
('23IT040', 'Deenesh Kumar J', 'IT', 'Placed', 'Raptee', 5),
('23IT045', 'Dinesh R', 'IT', 'Placed', 'SMBC', 12),
('23IT057', 'Hariharan C', 'IT', 'Placed', 'Raptee', 5),
('23IT059', 'Harikrishna K', 'IT', 'Placed', 'ServiceNow', 48),
('23IT079', 'Karthikeyan E', 'IT', 'Placed', 'Sapphire', 5),
('23IT096', 'Mohammad Salaudeen I', 'IT', 'Placed', 'SMBC', 12),
('23IT103', 'Lakshanaa N', 'IT', 'Placed', 'DTCC', 8),
('23IT152', 'Shalini T', 'IT', 'Placed', 'DTCC', 8),
('23IT154', 'Sharan Yeswanth', 'IT', 'Placed', 'MF', 20),
('23IT173', 'V Keerthana', 'IT', 'Placed', 'HLB Global', 10),
('23IT185', 'Yohalakshmi G', 'IT', 'Placed', 'HLB Global', 10),
('23IT124', 'R Barath', 'IT', 'Placed', 'Orisenc', 6),
('23IT142', 'Sahul Hameed N', 'IT', 'Placed', 'Hexaware', 5),
('23IT156', 'Sharvesh PS', 'IT', 'Placed', 'Hexaware', 5),
('23IT050', 'Gayathri K', 'IT', 'Placed', 'Hexaware', 5),
('23IT150', 'Saran R', 'IT', 'Placed', 'Hexaware', 5),
('23IT159', 'Sonaa Shree V S', 'IT', 'Placed', 'Multicoreware', 7),
('23IT127', 'Raghul S', 'IT', 'Placed', 'Philips', 12),
('23IT158', 'Shradha S', 'IT', 'Placed', 'Philips', 13),
('23IT120', 'Prithika R', 'IT', 'Placed', 'Rocket India', 7),
('23IT104', 'Nandhini I', 'IT', 'Placed', 'Rocket India', 7),
('23IT171', 'Thejashree V M', 'IT', 'Placed', 'Rocket India', 7),
('23IT113', 'Parkavi V', 'IT', 'Placed', 'Sapphire', 5),
('23IT064', 'Harini Priyadharshini G', 'IT', 'Placed', 'Sapphire', 5),
('23IT107', 'Naveen Prasath S', 'IT', 'Placed', 'Prodapt', 8),
('23IT099', 'Monisha M', 'IT', 'Placed', 'Prodapt', 8),
('23IT111', 'Paidipalli Revanth Kumar Reddy', 'IT', 'Placed', 'Prodapt', 8),
('23IT176', 'Vigneshwaran S', 'IT', 'Placed', 'Prodapt', 8),
('23IT139', 'Sadish S', 'IT', 'Placed', 'Prodapt', 8),
('23IT140', 'Sahana D', 'IT', 'Placed', 'Prodapt', 8),
('23IT085', 'M. Amrithaa', 'IT', 'Placed', 'Prodapt', 8),
('23IT301', 'Abimanyu S', 'IT', 'Placed', 'Prodapt', 8),
('23IT165', 'Sujitha K', 'IT', 'Placed', 'Prodapt', 8),
('23IT166', 'Sundari A', 'IT', 'Placed', 'Prodapt', 8),
('23IT105', 'Nanditha S', 'IT', 'Placed', 'Prodapt', 9),
('23IT072', 'Joshua Ranish T', 'IT', 'Placed', 'Orion', 5),
('23IT074', 'Kaarthic I.R', 'IT', 'Placed', 'Orion', 5),
('23IT078', 'Kandiah C', 'IT', 'Placed', 'Orion', 5),
('23IT169', 'Tania R', 'IT', 'Placed', 'Cisco', 20)
ON CONFLICT ("regNo") DO UPDATE SET
    "student" = EXCLUDED."student",
    "company" = EXCLUDED."company",
    "package" = EXCLUDED."package";


-- ----------------------------------------------------------------------------
-- SEED DATA — ALL 19 VERIFIED STUDENT ACHIEVEMENT LAURELS (II, III, IV YEARS)
-- ----------------------------------------------------------------------------
INSERT INTO public.achievements ("id", "year", "yearTagline", "students", "registerNumbers", "competition", "category", "achievement", "badge", "level", "organizer", "date", "location", "recognition", "teamName", "prizeINR", "prizeUSD", "prizeDisplay", "shortDesc", "problemStatement") VALUES
('ii-1', 'II', 'RISING INNOVATORS', ARRAY['Vasunthra S Ra'], ARRAY['210425205186'], 'MathXplore 2.0', 'AI & Smart Campus', '3rd Prize', '🥉 3rd Prize', 'State', 'SIMATS Engineering College', '29 June 2026', 'SIMATS Engineering College, Chennai', 'Certificate', '', 0, 0, 'Certificate of Merit', 'AI-powered Smart Campus Intelligence System for resource optimization and predictive analytics.', 'AI-powered Smart Campus Intelligence System for resource optimization.'),
('ii-2', 'II', 'RISING INNOVATORS', ARRAY['Vasunthra S Ra'], ARRAY['210425205186'], 'BuildFest ''26', 'AI & Multimodal NLP', '1st Prize', '🥇 1st Prize', 'Regional', 'Hakelize / Omega Consortium', '08 August 2026', 'Grootan Technologies, Perungudi, Chennai', '1st Prize Trophy + Goodies', 'Team Naadi', 30000, 0, '₹30,000 + Goodies', 'AI-Driven Multimodal Framework for Detection & Classification of Deceptive Reviews.', 'AI-Driven Multimodal Framework for Detection of Deceptive Reviews.'),
('ii-3', 'II', 'RISING INNOVATORS', ARRAY['Monissha L'], ARRAY['210425205103'], 'Moonshot Hackathon 2026', 'Generative AI & LLMs', 'Finalist', '🚀 Finalist', 'International', 'AETHRA', '12 March 2026', 'Remote / Online Global', 'International Finalist & Credits', '', 0, 1300, '$1,300 USD', 'Transformative zero-to-one tech innovation creating new category future.', 'Transformative zero-to-one tech innovation.'),
('ii-4', 'II', 'RISING INNOVATORS', ARRAY['Monissha L'], ARRAY['210425205103'], 'Handloom Hackathon 2026', 'Digital Traceability', 'Silver Medalist', '🥈 Silver Medalist', 'National', 'Ministry of Textiles, Govt of India', '24 February 2026', 'IIT Delhi / Ministry of Textiles, New Delhi', 'Silver Medal & Recognition', '', 0, 0, 'Silver Medal & National Recognition', 'Technology-driven solutions to strengthen India''s handloom sector through digital access.', 'Technology-driven solutions to strengthen India''s handloom sector.'),
('ii-5', 'II', 'RISING INNOVATORS', ARRAY['Vishnu Priyan P'], ARRAY['210425205191'], 'Handloom Hackathon 2026', 'Digital Traceability', 'Silver Medalist', '🥈 Silver Medalist', 'National', 'Ministry of Textiles, Govt of India', '24 February 2026', 'IIT Delhi / Ministry of Textiles, New Delhi', 'Silver Medal & Recognition', '', 0, 0, 'Silver Medal & National Recognition', 'AI-powered handloom authentication and digital traceability to ensure product authenticity.', 'AI-powered handloom authentication.'),
('ii-6', 'II', 'RISING INNOVATORS', ARRAY['Deekshah R'], ARRAY['210425205029'], 'BuildFest ''26 Hackathon', 'Automated Code Audit', '3rd Prize', '🥉 3rd Prize', 'Regional', 'Omega Consortium × Hakelize', '08 August 2026', 'Grootan Technologies, Perungudi, Chennai', 'Cash Prize + Certificate', '', 10000, 0, '₹10,000 + Goodies', 'AI-based automated code review system for detecting security vulnerabilities.', 'AI-based automated code review system.'),
('iii-1', 'III', 'INNOVATION MEETS EXCELLENCE', ARRAY['Revanth T', 'Rohith T', 'Pavan S', 'Ramprasanna M', 'Adithya AM'], ARRAY[]::text[], 'DSCI 1.0', 'Cybersecurity & Data Privacy', 'Runner Up', '🥈 Runner Up', 'National', 'Ministry of Electronics & Information Technology (MeitY)', '15 January 2026', 'New Delhi', 'National Runner Up Trophy', 'Team DSCI Scholars', 50000, 0, '₹50,000 Team Prize', 'National Level Data Security Council of India Challenge Winner.', 'Advanced cybersecurity protocol and privacy preservation architecture for critical national cloud infrastructure.'),
('iii-2', 'III', 'INNOVATION MEETS EXCELLENCE', ARRAY['Mohammed Noufal V'], ARRAY['24IT0093'], 'Agent.AI Challenge', 'Autonomous AI Agents', 'Winner', '🥇 Winner', 'National', 'HackerEarth', '01 January 2026', 'Bangalore', '1st Place Winner', '', 10000, 100, '₹10,000 + $100 Claude Credits', 'Autonomous LLM multi-agent workflow system built for complex enterprise automation.', 'Engineered scalable autonomous agentic workflows leveraging Anthropic Claude models for enterprise context reasoning.'),
('iii-3', 'III', 'INNOVATION MEETS EXCELLENCE', ARRAY['Mohammed Noufal V'], ARRAY['24IT0093'], 'OPS-FUSION', 'Operations Tech & FinTech', 'Winner', '🥇 Winner', 'National', 'KREA University × Swiggy × SBI', '20 March 2026', 'Andhra Pradesh', '1st Prize', '', 85000, 1000, '₹85,000 / $1,000', 'Real-time logistics supply chain & digital payment optimization engine.', 'High-throughput operational logistics optimization and fraud prevention platform built in partnership with Swiggy & SBI.'),
('iii-4', 'III', 'INNOVATION MEETS EXCELLENCE', ARRAY['Madhesh T'], ARRAY['24IT0083'], 'QIE Blockchain Hackathon', 'Web3 & Tokenization', 'Winner', '🥇 Winner', 'International', 'QIE × HackerEarth', '23 January 2026', 'Online / International', '1st Prize Winner', 'Tokenization for All', 0, 2500, '$2,500 USD', 'Democratized real-world asset (RWA) tokenization platform on QIE Blockchain.', 'Tokenization for All — Deployed fractional ownership smart contracts for real-world asset liquidity.'),
('iii-5', 'III', 'INNOVATION MEETS EXCELLENCE', ARRAY['Naresh Kumar N'], ARRAY['24IT0105'], 'FOSS Hack', 'Free & Open Source Software', 'Winner', '🥇 Winner', 'National', 'FOSS United', '01 March 2026', 'Online / National', '1st Place Grant', '', 100000, 0, '₹1,00,000 Cash Prize', 'Open-source developer tool for high-performance developer workflow acceleration.', 'Built and open-sourced developer tool tooling adopted by global open source developer communities.'),
('iii-6', 'III', 'INNOVATION MEETS EXCELLENCE', ARRAY['Sreya S', 'T R Samiksha'], ARRAY['24IT0160', '24IT0173'], 'HiDevs × Mastra Hackathon', 'AI Productivity & Agents', 'Winner', '🥇 Winner', 'National', 'HiDevs and AI House', '12 July 2026', 'Bangalore', '1st Prize', 'Mastra AI Team', 20000, 0, '₹20,000 Team Prize', 'AI Chief of Staff and Meeting Command Center for executive productivity.', 'AI Chief of Staff and Meeting Command Center capable of real-time action item extraction and calendar orchestration.'),
('iii-7', 'III', 'INNOVATION MEETS EXCELLENCE', ARRAY['Sreya S'], ARRAY['24IT0160'], 'Student Innovation & Product Summit (SIPS)', 'AI & Intelligent Systems', 'Theme Winner + Overall Runner', '🥇 Theme Winner & 🥈 Overall Runner', 'National', 'IIM Bangalore', '30 July 2026', 'IIM Bangalore, Bangalore', 'Summit Trophy & Cash Award', '', 20000, 0, '₹20,000 Award', 'Product innovation summit theme winner and overall national runner-up.', 'Intelligent AI system prototype for sustainable product design presented at IIM Bangalore SIPS summit.'),
('iv-1', 'IV', 'NATIONAL CHAMPIONS', ARRAY['Arjun S V'], ARRAY['23IT021'], 'IndiaSkills National Competition', 'Cloud Computing & IT Solutions', 'GOLD MEDAL', '🥇 GOLD MEDAL', 'National', 'National Skill Development Corporation (NSDC)', '28 March 2026 – 02 April 2026', 'Greater Noida, Delhi NCR', 'National Gold Medal & Trophy', '', 100000, 0, '🥇 ₹1,00,000 + Gold Medal', '1st Rank All-India Gold Medalist at IndiaSkills National Championship.', 'Rigorous 5-day national trade competition designing secure enterprise cloud architectures and multi-region failover protocols.'),
('iv-2', 'IV', 'NATIONAL CHAMPIONS', ARRAY['Arjun S V'], ARRAY['23IT021'], 'IndiaSkills South Regional Competition', 'Cloud Computing & Systems', 'GOLD MEDAL', '🥇 GOLD MEDAL', 'Regional', 'NSDC', '24 February 2026', 'Kanha Shanti Vanam, Hyderabad', 'Regional Gold Medal', '', 75000, 0, '🥇 ₹75,000 + Gold Medal', '1st Place Gold Medal across South Indian state champions.', 'High-speed multi-cloud infrastructure setup and automated DevOps deployment under strict timed constraints.'),
('iv-3', 'IV', 'NATIONAL CHAMPIONS', ARRAY['Eshwar S', 'Arjun S V', 'Deenesh Kumar J'], ARRAY['23IT021'], 'BNY Service Design Jam', 'FinTech & Service Design', '2nd Runner Up', '🥉 2nd Runner Up', 'National', 'Bank of New York (BNY Mellon)', '03 January 2026', 'IIT Madras, Chennai', 'BNY Design Jam Trophy', 'Team BNY Innovators', 10000, 0, '₹10,000 Team Prize', 'Service design innovation for next-generation global banking accessibility.', 'Reimagined digital asset management and corporate banking portal UI/UX for institutional clients.'),
('iv-4', 'IV', 'NATIONAL CHAMPIONS', ARRAY['Arjun S V'], ARRAY['23IT021'], 'TN Skills State Competition', 'IT Infrastructure Solutions', 'Silver Medal', '🥈 Silver Medal', 'State', 'Naan Mudhalvan', '22 December 2025', 'Sri Eshwar Engineering College, Coimbatore', 'State Silver Medal', '', 10000, 0, '🥈 ₹10,000 + Silver Medal', 'State level silver medalist at Tamil Nadu Skill Competition.', 'Statewide competition evaluating complex system administration, Linux hardening, and cloud deployment.'),
('iv-5', 'IV', 'NATIONAL CHAMPIONS', ARRAY['Sharan Yaswant'], ARRAY['23IT154'], 'IndiaSkills National Competition', 'Web Technologies & Systems', 'Bronze Medal', '🥉 Bronze Medal', 'National', 'NSDC', '28 March 2026 – 02 April 2026', 'Greater Noida, Delhi NCR', 'National Bronze Medal', '', 50000, 0, '🥉 ₹50,000 + Bronze Medal', 'National 3rd Rank Bronze Medalist at IndiaSkills National Finals.', 'Full-stack web application development and API microservice engineering under timed national championship rules.'),
('iv-6', 'IV', 'NATIONAL CHAMPIONS', ARRAY['Sharan Yaswant'], ARRAY['23IT154'], 'IndiaSkills South Regional Competition', 'Web Technologies', 'Silver Medal', '🥈 Silver Medal', 'Regional', 'NSDC', '24 February 2026', 'Kanha Shanti Vanam, Hyderabad', 'Regional Silver Medal', '', 50000, 0, '🥈 ₹50,000 + Silver Medal', '2nd Rank Silver Medalist across South Indian state champions.', 'Regional Web Technologies trade competition testing real-time web socket applications and UI component design.')
ON CONFLICT ("id") DO UPDATE SET
    "year" = EXCLUDED."year",
    "yearTagline" = EXCLUDED."yearTagline",
    "students" = EXCLUDED."students",
    "registerNumbers" = EXCLUDED."registerNumbers",
    "competition" = EXCLUDED."competition",
    "category" = EXCLUDED."category",
    "achievement" = EXCLUDED."achievement",
    "badge" = EXCLUDED."badge",
    "level" = EXCLUDED."level",
    "organizer" = EXCLUDED."organizer",
    "date" = EXCLUDED."date",
    "location" = EXCLUDED."location",
    "recognition" = EXCLUDED."recognition",
    "teamName" = EXCLUDED."teamName",
    "prizeINR" = EXCLUDED."prizeINR",
    "prizeUSD" = EXCLUDED."prizeUSD",
    "prizeDisplay" = EXCLUDED."prizeDisplay",
    "shortDesc" = EXCLUDED."shortDesc",
    "problemStatement" = EXCLUDED."problemStatement";
