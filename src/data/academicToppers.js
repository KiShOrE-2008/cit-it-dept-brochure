// Academic Toppers — extracted from "II - III - IV - IT-SEM RESULT_ANALYSIS (1).xlsx"
// Ranked by semester GPA among students who earned the FULL credit load for the semester.
// Students with incomplete results are excluded: without this filter the IV IT sheet
// ranks students who completed only 5 of 16 credits (GPA 10.00) above everyone else.
// Regenerate this file if the source workbook is updated; the app never reads .xlsx at runtime.

export const academicToppers = [
  {
    year: "II",
    label: "II YEAR",
    tagline: "RISING SCHOLARS",
    semester: "III",
    eligibleCount: 171,
    toppers: [
      { rank: 1, regNo: "24IT0149", name: "Seril Evanjaline S", gpa: 9.72 },
      { rank: 2, regNo: "24IT0173", name: "T R Samiksha", gpa: 9.56 },
      { rank: 3, regNo: "24IT0137", name: "S Saisree", gpa: 9.44 },
      { rank: 4, regNo: "24IT0062", name: "Jessy Kiruba G", gpa: 9.40 },
      { rank: 5, regNo: "24IT0178", name: "Varsha B", gpa: 9.40 }
    ]
  },
  {
    year: "III",
    label: "III YEAR",
    tagline: "CONSISTENT ACHIEVERS",
    semester: "V",
    eligibleCount: 186,
    toppers: [
      { rank: 1, regNo: "23IT152", name: "Shalini T", gpa: 9.35 },
      { rank: 2, regNo: "23IT009", name: "Akshaya C L", gpa: 9.26 },
      { rank: 3, regNo: "23IT136", name: "Rukshana Safrin A", gpa: 9.13 },
      { rank: 4, regNo: "23IT306", name: "Sonal Patel", gpa: 9.13 },
      { rank: 5, regNo: "23IT081", name: "Kaviya R", gpa: 9.09 }
    ]
  },
  {
    year: "IV",
    label: "IV YEAR",
    tagline: "FINAL YEAR TOPPERS",
    semester: "VII",
    eligibleCount: 60,
    toppers: [
      { rank: 1, regNo: "22IT034", name: "Harshitha K", gpa: 8.58 },
      { rank: 2, regNo: "22IT005", name: "Adhithya S", gpa: 8.53 },
      { rank: 3, regNo: "22IT017", name: "Deepak Kumar L", gpa: 8.37 },
      { rank: 4, regNo: "22IT023", name: "Dhoni R", gpa: 8.37 },
      { rank: 5, regNo: "22IT046", name: "Karthikeyan V", gpa: 8.37 }
    ]
  }
];

// Highest GPA across all three years — used for the scene headline
export const computeTopperStats = () => {
  const all = academicToppers.flatMap(y => y.toppers);
  const best = all.reduce((a, b) => (b.gpa > a.gpa ? b : a), all[0]);
  return {
    highestGpa: best.gpa,
    highestGpaName: best.name,
    totalRecognised: all.length,
    totalEligible: academicToppers.reduce((sum, y) => sum + y.eligibleCount, 0)
  };
};
