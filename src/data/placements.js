// Helper to format package integer into human-readable string (e.g. 12 -> "₹12 LPA")
export const formatPackage = (pkg) => {
  if (pkg === null || pkg === undefined || pkg === '') return '';
  if (typeof pkg === 'number') return `₹${pkg} LPA`;
  const str = String(pkg).trim();
  if (str.startsWith('₹') || str.endsWith('LPA')) return str;
  const num = parseInt(str.replace(/[^0-9]/g, ''), 10);
  return num ? `₹${num} LPA` : str;
};

export const placementsData = [
  { regNo: "23IT001", student: "A Thrisyanth", department: "IT", status: "Placed", company: "SMBC", package: 12 },
  { regNo: "23IT009", student: "Akshaya C L", department: "IT", status: "Placed", company: "Microsoft", package: 58 },
  { regNo: "23IT011", student: "Akshayya R U", department: "IT", status: "Placed", company: "DTCC", package: 8 },
  { regNo: "23IT022", student: "Ashok Kumar S", department: "IT", status: "Placed", company: "Hyland", package: 10 },
  { regNo: "23IT030", student: "Bala Ganesh K", department: "IT", status: "Placed", company: "Microsoft", package: 58 },
  { regNo: "23IT032", student: "Balaraman M", department: "IT", status: "Placed", company: "Microsoft", package: 58 },
  { regNo: "23IT033", student: "Bharath A V", department: "IT", status: "Placed", company: "Namma Yatrai", package: 12 },
  { regNo: "23IT037", student: "Chaarulatha N", department: "IT", status: "Placed", company: "Hyland", package: 10 },
  { regNo: "23IT040", student: "Deenesh Kumar J", department: "IT", status: "Placed", company: "Raptee", package: 5 },
  { regNo: "23IT045", student: "Dinesh R", department: "IT", status: "Placed", company: "SMBC", package: 12 },
  { regNo: "23IT057", student: "Hariharan C", department: "IT", status: "Placed", company: "Raptee", package: 5 },
  { regNo: "23IT059", student: "Harikrishna K", department: "IT", status: "Placed", company: "ServiceNow", package: 48 },
  { regNo: "23IT079", student: "Karthikeyan E", department: "IT", status: "Placed", company: "Sapphire", package: 5 },
  { regNo: "23IT096", student: "Mohammad Salaudeen I", department: "IT", status: "Placed", company: "SMBC", package: 12 },
  { regNo: "23IT103", student: "Lakshanaa N", department: "IT", status: "Placed", company: "DTCC", package: 8 },
  { regNo: "23IT152", student: "Shalini T", department: "IT", status: "Placed", company: "DTCC", package: 8 },
  { regNo: "23IT154", student: "Sharan Yeswanth", department: "IT", status: "Placed", company: "MF", package: 20 },
  { regNo: "23IT173", student: "V Keerthana", department: "IT", status: "Placed", company: "HLB Global", package: 10 },
  { regNo: "23IT185", student: "Yohalakshmi G", department: "IT", status: "Placed", company: "HLB Global", package: 10 },
  { regNo: "23IT124", student: "R Barath", department: "IT", status: "Placed", company: "Orisenc", package: 6 },
  { regNo: "23IT142", student: "Sahul Hameed N", department: "IT", status: "Placed", company: "Hexaware", package: 5 },
  { regNo: "23IT156", student: "Sharvesh PS", department: "IT", status: "Placed", company: "Hexaware", package: 5 },
  { regNo: "23IT050", student: "Gayathri K", department: "IT", status: "Placed", company: "Hexaware", package: 5 },
  { regNo: "23IT150", student: "Saran R", department: "IT", status: "Placed", company: "Hexaware", package: 5 },
  { regNo: "23IT159", student: "Sonaa Shree V S", department: "IT", status: "Placed", company: "Multicoreware", package: 7 },
  { regNo: "23IT127", student: "Raghul S", department: "IT", status: "Placed", company: "Philips", package: 12 },
  { regNo: "23IT158", student: "Shradha S", department: "IT", status: "Placed", company: "Philips", package: 13 },
  { regNo: "23IT120", student: "Prithika R", department: "IT", status: "Placed", company: "Rocket India", package: 7 },
  { regNo: "23IT104", student: "Nandhini I", department: "IT", status: "Placed", company: "Rocket India", package: 7 },
  { regNo: "23IT171", student: "Thejashree V M", department: "IT", status: "Placed", company: "Rocket India", package: 7 },
  { regNo: "23IT113", student: "Parkavi V", department: "IT", status: "Placed", company: "Sapphire", package: 5 },
  { regNo: "23IT064", student: "Harini Priyadharshini G", department: "IT", status: "Placed", company: "Sapphire", package: 5 },
  { regNo: "23IT107", student: "Naveen Prasath S", department: "IT", status: "Placed", company: "Prodapt", package: 8 },
  { regNo: "23IT099", student: "Monisha M", department: "IT", status: "Placed", company: "Prodapt", package: 8 },
  { regNo: "23IT111", student: "Paidipalli Revanth Kumar Reddy", department: "IT", status: "Placed", company: "Prodapt", package: 8 },
  { regNo: "23IT176", student: "Vigneshwaran S", department: "IT", status: "Placed", company: "Prodapt", package: 8 },
  { regNo: "23IT139", student: "Sadish S", department: "IT", status: "Placed", company: "Prodapt", package: 8 },
  { regNo: "23IT140", student: "Sahana D", department: "IT", status: "Placed", company: "Prodapt", package: 8 },
  { regNo: "23IT085", student: "M. Amrithaa", department: "IT", status: "Placed", company: "Prodapt", package: 8 },
  { regNo: "23IT301", student: "Abimanyu S", department: "IT", status: "Placed", company: "Prodapt", package: 8 },
  { regNo: "23IT165", student: "Sujitha K", department: "IT", status: "Placed", company: "Prodapt", package: 8 },
  { regNo: "23IT166", student: "Sundari A", department: "IT", status: "Placed", company: "Prodapt", package: 8 },
  { regNo: "23IT105", student: "Nanditha S", department: "IT", status: "Placed", company: "Prodapt", package: 9 },
  { regNo: "23IT072", student: "Joshua Ranish T", department: "IT", status: "Placed", company: "Orion", package: 5 },
  { regNo: "23IT074", student: "Kaarthic I.R", department: "IT", status: "Placed", company: "Orion", package: 5 },
  { regNo: "23IT078", student: "Kandiah C", department: "IT", status: "Placed", company: "Orion", package: 5 },
  { regNo: "23IT169", student: "Tania R", department: "IT", status: "Placed", company: "Cisco", package: 20 }
];

// Helper calculations for Placement Stats
export const computePlacementMetrics = () => {
  const totalStudentsPlaced = placementsData.length;
  
  // Extract unique companies
  const companySet = new Set();
  placementsData.forEach(p => companySet.add(p.company));
  const totalRecruiters = companySet.size;

  // Company distribution map
  const companyCounts = {};
  placementsData.forEach(p => {
    companyCounts[p.company] = (companyCounts[p.company] || 0) + 1;
  });

  // Top Package Highlights
  const highestPackageVal = "₹58 LPA";
  const highestPackageCompany = "Microsoft";
  const highestPackageStudents = placementsData.filter(p => p.company === "Microsoft").map(p => p.student);

  return {
    totalStudentsPlaced,
    totalRecruiters,
    highestPackageVal,
    highestPackageCompany,
    highestPackageStudents,
    companyCounts
  };
};

// Dynamic helper to extract top package spotlight details
export const getHighestPackageData = () => {
  let maxVal = 0;
  let topCompany = "";

  placementsData.forEach(p => {
    const numeric = typeof p.package === 'number' ? p.package : (parseInt(String(p.package).replace(/[^0-9]/g, ''), 10) || 0);
    if (numeric > maxVal) {
      maxVal = numeric;
      topCompany = p.company;
    }
  });

  const matchingStudents = placementsData
    .filter(p => {
      const numeric = typeof p.package === 'number' ? p.package : (parseInt(String(p.package).replace(/[^0-9]/g, ''), 10) || 0);
      return p.company === topCompany && numeric === maxVal;
    })
    .map(p => {
      const parts = p.student.trim().split(' ');
      const initials = parts.length > 1 
        ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
        : p.student.substring(0, 2).toUpperCase();

      return {
        name: p.student,
        regNo: p.regNo,
        initials: initials,
        company: p.company,
        package: p.package
      };
    });

  return {
    packageValue: formatPackage(maxVal),
    numericVal: maxVal,
    company: topCompany,
    studentCount: matchingStudents.length,
    students: matchingStudents
  };
};

export const recruiterList = [
  { name: "Microsoft", tier: "Super Dream (₹58 LPA)", count: 3 },
  { name: "ServiceNow", tier: "Super Dream (₹48 LPA)", count: 1 },
  { name: "Cisco", tier: "Dream Product (₹20 LPA)", count: 1 },
  { name: "MF", tier: "Dream Product (₹20 LPA)", count: 1 },
  { name: "Philips", tier: "High CTC (₹12–13 LPA)", count: 2 },
  { name: "SMBC", tier: "Banking MNC (₹12 LPA)", count: 3 },
  { name: "Namma Yatrai", tier: "Tech Startup (₹12 LPA)", count: 1 },
  { name: "HLB Global", tier: "Global Consulting (₹10 LPA)", count: 2 },
  { name: "Hyland", tier: "Enterprise Software (₹10 LPA)", count: 2 },
  { name: "Prodapt", tier: "Telecom IT Leader (₹8–9 LPA)", count: 11 },
  { name: "DTCC", tier: "FinTech Giant (₹8 LPA)", count: 3 },
  { name: "Rocket India", tier: "Product Engineering (₹7 LPA)", count: 3 },
  { name: "Multicoreware", tier: "Systems Tech (₹7 LPA)", count: 1 },
  { name: "Orisenc", tier: "IT Solutions (₹6 LPA)", count: 1 },
  { name: "Raptee", tier: "EV Tech (₹5 LPA)", count: 2 },
  { name: "Hexaware", tier: "IT MNC (₹4–6 LPA)", count: 4 },
  { name: "Sapphire", tier: "Tech Services (₹4–6 LPA)", count: 3 },
  { name: "Orion", tier: "Global Services (₹4–5 LPA)", count: 3 }
];

/**
 * Aggregate placements into per-company cards: how many were placed and the
 * highest package that company offered. Deliberately returns NO student names.
 *
 * Selection score = highestPackage + (studentsPlaced * 3), so the list shows both
 * peak offers and the department's largest-volume recruiters instead of skewing
 * entirely to single-student super-dream offers. Ties break on package, then name.
 */
export const getTopCompanies = (limit = 5, records = placementsData) => {
  const toNum = (pkg) =>
    typeof pkg === 'number' ? pkg : (parseInt(String(pkg || '').replace(/[^0-9]/g, ''), 10) || 0);

  const byCompany = new Map();
  records.forEach((p) => {
    if (!p.company) return;
    const pkg = toNum(p.package);
    const entry = byCompany.get(p.company) || { company: p.company, count: 0, highest: 0 };
    entry.count += 1;
    if (pkg > entry.highest) entry.highest = pkg;
    byCompany.set(p.company, entry);
  });

  return [...byCompany.values()]
    .sort(
      (a, b) =>
        (b.highest + b.count * 3) - (a.highest + a.count * 3) ||
        b.highest - a.highest ||
        a.company.localeCompare(b.company)
    )
    .slice(0, limit)
    .map((c) => ({ ...c, highestLabel: formatPackage(c.highest) }));
};
