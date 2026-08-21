// Academic Toppers — extracted from "II - III - IV - IT-SEM RESULT_ANALYSIS (1).xlsx"
//
// Ranked by semester GPA among students who earned the FULL credit load.
// Students with incomplete results are excluded: without that filter the IV IT
// sheet ranks students who completed only 5 of 16 credits (GPA 10.00) on top.
//
// Entries are grouped by POSITION, not flattened, because ties are common and
// every student sharing a GPA must appear at the same position number.
// Regenerate if the workbook changes; the app never reads .xlsx at runtime.

export const academicToppers = [
  {
    year: "II",
    label: "II YEAR",
    tagline: "Rising Scholars",
    semester: "III",
    eligibleCount: 171,
    positions: [
      { position: 1, gpa: 9.72, students: [{ regNo: "24IT0149", name: "Seril Evanjaline S" }] },
      { position: 2, gpa: 9.56, students: [{ regNo: "24IT0173", name: "T R Samiksha" }] },
      { position: 3, gpa: 9.44, students: [{ regNo: "24IT0137", name: "S Saisree" }] },
      { position: 4, gpa: 9.40, students: [{ regNo: "24IT0062", name: "Jessy Kiruba G" }, { regNo: "24IT0178", name: "Varsha B" }, { regNo: "24IT0180", name: "Varshini R" }] },
      { position: 5, gpa: 9.36, students: [{ regNo: "24IT0108", name: "Neshandra G" }] },
      { position: 6, gpa: 9.28, students: [{ regNo: "24IT0026", name: "Dharaneesh K S" }, { regNo: "24IT0028", name: "Dharshini S" }, { regNo: "24IT0160", name: "Sreya S" }, { regNo: "24IT0172", name: "Swetha K" }] },
      { position: 7, gpa: 9.24, students: [{ regNo: "24IT0011", name: "Angelin Felina A" }, { regNo: "24IT0036", name: "Faleesha Zaeen Zarshad" }] },
      { position: 8, gpa: 9.20, students: [{ regNo: "24IT0065", name: "Kamalika J" }] },
      { position: 9, gpa: 9.12, students: [{ regNo: "24IT0027", name: "Dharshini M" }, { regNo: "24IT0029", name: "Dharunika K T" }, { regNo: "24IT0134", name: "Rudra Prasad M L" }, { regNo: "24IT0166", name: "Subaranjani A" }, { regNo: "24IT0186", name: "Vinotha R" }] },
      { position: 10, gpa: 9.08, students: [{ regNo: "24IT0038", name: "Geethapriya T" }, { regNo: "24IT0042", name: "Hari Hara Sudharsan J" }] }
    ]
  },
  {
    year: "III",
    label: "III YEAR",
    tagline: "Consistent Achievers",
    semester: "V",
    eligibleCount: 186,
    positions: [
      { position: 1, gpa: 9.35, students: [{ regNo: "23IT152", name: "Shalini T" }] },
      { position: 2, gpa: 9.26, students: [{ regNo: "23IT009", name: "Akshaya C L" }] },
      { position: 3, gpa: 9.13, students: [{ regNo: "23IT136", name: "Rukshana Safrin A" }, { regNo: "23IT306", name: "Sonal Patel" }] },
      { position: 4, gpa: 9.09, students: [{ regNo: "23IT081", name: "Kaviya R" }, { regNo: "23IT145", name: "Sandhiya V" }] },
      { position: 5, gpa: 9.04, students: [{ regNo: "23IT055", name: "Greata Jansi Rani . P" }] },
      { position: 6, gpa: 8.96, students: [{ regNo: "23IT001", name: "A Thrisyanth" }, { regNo: "23IT129", name: "Rajashree S" }, { regNo: "23IT171", name: "Thejashree V M" }] },
      { position: 7, gpa: 8.91, students: [{ regNo: "23IT022", name: "Ashok Kumar . S" }] },
      { position: 8, gpa: 8.83, students: [{ regNo: "23IT183", name: "Yashini Priya S" }] },
      { position: 9, gpa: 8.78, students: [{ regNo: "23IT065", name: "Hemalatha S" }, { regNo: "23IT089", name: "Madhumitha. p" }, { regNo: "23IT157", name: "Shipani S" }, { regNo: "23IT159", name: "Sonaa Shree V S" }, { regNo: "23IT175", name: "Vidya B" }] },
      { position: 10, gpa: 8.74, students: [{ regNo: "23IT050", name: "Gayathri. k" }, { regNo: "23IT121", name: "Priya S" }] }
    ]
  },
  {
    year: "IV",
    label: "IV YEAR",
    tagline: "Final Year Toppers",
    semester: "VII",
    eligibleCount: 60,
    positions: [
      { position: 1, gpa: 8.58, students: [{ regNo: "22IT034", name: "Harshitha K" }] },
      { position: 2, gpa: 8.53, students: [{ regNo: "22IT005", name: "Adhithya S" }] },
      { position: 3, gpa: 8.37, students: [{ regNo: "22IT017", name: "Deepak Kumar L" }, { regNo: "22IT023", name: "Dhoni R" }, { regNo: "22IT046", name: "Karthikeyan V" }, { regNo: "22IT060", name: "Madhumitha K" }, { regNo: "22IT065", name: "N E Sitharth" }] },
      { position: 4, gpa: 8.26, students: [{ regNo: "22IT077", name: "Promoth R" }] },
      { position: 5, gpa: 8.21, students: [{ regNo: "22IT020", name: "Dhakshinamoorthy S" }, { regNo: "22IT045", name: "Karthigaiselvan K" }, { regNo: "22IT052", name: "Keerthana L" }, { regNo: "22IT055", name: "Krishna G" }, { regNo: "22IT056", name: "Lakshanyaa Deepan" }, { regNo: "22IT110", name: "Subiksha A" }, { regNo: "22IT121", name: "Tharun Kumar B" }] },
      { position: 6, gpa: 8.11, students: [{ regNo: "22IT006", name: "Akshay R" }, { regNo: "22IT051", name: "Keerthana D" }, { regNo: "22IT302", name: "Sakthi Paramesh N" }] },
      { position: 7, gpa: 8.05, students: [{ regNo: "22IT021", name: "Dhanush P" }, { regNo: "22IT050", name: "Kaviyasri V" }, { regNo: "22IT059", name: "Madhan Raj J" }, { regNo: "22IT078", name: "R Pavithra" }, { regNo: "22IT097", name: "Selvaragavan M" }, { regNo: "22IT109", name: "Subhashini S" }, { regNo: "22IT118", name: "Tejas N" }] },
      { position: 8, gpa: 8.00, students: [{ regNo: "22IT002", name: "A Monisha" }, { regNo: "22IT003", name: "Aarthi E" }, { regNo: "22IT038", name: "Ilakkiya S M" }, { regNo: "22IT048", name: "Kavin Naresh K S" }, { regNo: "22IT064", name: "Mokesh K" }, { regNo: "22IT066", name: "Nallareddy Charan Teja" }, { regNo: "22IT091", name: "Sakthidharan S" }, { regNo: "22IT100", name: "Sharvesh S" }, { regNo: "22IT101", name: "Shobhan Karthish M" }, { regNo: "22IT102", name: "Siddarth A P" }, { regNo: "22IT108", name: "Srivatsan R" }, { regNo: "22IT112", name: "Suhail Ahmed M" }, { regNo: "22IT125", name: "Vijay M" }] },
      { position: 9, gpa: 7.89, students: [{ regNo: "22IT018", name: "Deepak S" }, { regNo: "22IT042", name: "John Kevin Felix X" }, { regNo: "22IT301", name: "Hem Kumar R" }] },
      { position: 10, gpa: 7.84, students: [{ regNo: "22IT037", name: "Hitesh Gugan T A" }, { regNo: "22IT067", name: "Nikhill Kannaah R" }, { regNo: "22IT095", name: "Sarumathi D" }, { regNo: "22IT115", name: "Surya R" }, { regNo: "22IT123", name: "Vaidheesh R" }] }
    ]
  }
];

// How many positions to show so each year lists at least `minStudents` names.
// A position is never split: if the 10th student sits inside a tie, every
// student sharing that GPA is shown too.
export const positionsFor = (yearGroup, minStudents = 10) => {
  const out = [];
  let count = 0;
  for (const pos of yearGroup.positions) {
    out.push(pos);
    count += pos.students.length;
    if (count >= minStudents) break;
  }
  return out;
};

export const computeTopperStats = () => {
  const best = academicToppers
    .map((y) => ({ year: y.year, ...y.positions[0], student: y.positions[0].students[0] }))
    .reduce((a, b) => (b.gpa > a.gpa ? b : a));
  return {
    highestGpa: best.gpa,
    highestGpaName: best.student.name,
    highestGpaYear: best.year,
    totalEligible: academicToppers.reduce((s, y) => s + y.eligibleCount, 0)
  };
};
