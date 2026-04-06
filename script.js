const students = [
  {
    no: "01",
    name: "Md. Fahim",
    district: "Mymensingh",
    phone: "01956776929",
    blood: "B+",
    image: "images/fahim_2.jpg",
    facebook: "https://www.facebook.com/fahim.cse.iu",
    instagram: "https://www.instagram.com/f.a.h._i.m/",
    linkedin: "https://www.linkedin.com/in/md-fahim-3a6255395/"
  },
  {
    no: "02",
    name: "Nure Alam Sihad",
    district: "Chapai Nawabganj ",
    phone: "018162728942",
    blood: "A+",
    image: "images/Nure Alam.jpg",
    facebook: "https://www.facebook.com/nurealam.sihad",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "03",
    name: "Kazi faiza fatiha ",
    district: "Mymensingh ",
    phone: "01959957769",
    blood: "B-",
    image: "images/Faiza001.jpg",
    facebook: "https://www.facebook.com/share/1Qd8sm8kRr/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "04",
    name: "Simthiya Pervin ",
    district: "Jhenaidah ",
    phone: "01790600760",
    blood: "B+",
    image: "images/simthiya pervin.jpg",
    facebook: "https://www.facebook.com/share/1BE8gpE6vH/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "05",
    name: "Zarin Tasnim",
    district: "Chuadanga ",
    phone: "01708897648",
    blood: "B+",
    image: "images/Zarin Tasnim.jpg",
    facebook: "https://www.facebook.com/share/1AvGNRY6eP/",
    instagram: "https://www.instagram.com/tasnimzarin_21?igsh=Y3NiMTdja3kxenZ1",
    linkedin: "https://www.linkedin.com/in/zarin-tasnim-018740394/"
  },
  {
    no: "06",
    name: "Rubaiyat Islam ",
    district: "Gaibandha ",
    phone: "01991397900",
    blood: "B+",
    image: "images/Rubaiyat Rimzhim.jpeg",
    facebook: "https://www.facebook.com/rubaiyat.rimzhim",
    instagram: "https://www.instagram.com/rimzhimrubaiyat?igsh=MTgxNzk2ZWl5Y2Z6ag==",
    linkedin: "https://www.linkedin.com/in/rubaiyat-rimzhim-88995a392/"
  },
  {
    no: "07",
    name: "Md. Almas Fahim Khan",
    district: "Dhaka",
    phone: "01980234765",
    blood: "A+",
    image: "images/fahim khan.jpg",
    facebook: "https://www.facebook.com/almasfahimkhan",
    instagram: "https://www.instagram.com/md_almas_fahim_khan/",
    linkedin: "https://www.linkedin.com/in/fahim-khan-1710aa376/"
  },
  {
    no: "08",
    name: "Jibon Chandra",
    district: "Thakurgaon ",
    phone: "01762196247",
    blood: "O+",
    image: "images/Jibon Roy 36.jpg",
    facebook: "https://www.facebook.com/jibon.roy.opu",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "09",
    name: "Chaity Chakraborty",
    district: "Sherpur",
    phone: "01304818467",
    blood: "B+",
    image: "images/Chaity Chakraborty.jpg",
    facebook: "https://www.facebook.com/share/1JJS7Kt8vB/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "10",
    name: "Aftab kawsar",
    district: "Feni",
    phone: "01889149791",
    blood: "O+",
    image: "images/Aftab Kawsar.jpg",
    facebook: "https://www.facebook.com/aftab.kawsar.2024",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "11",
    name: "Umme Ayesha Binte Fayez",
    district: "Tangail ",
    phone: "01724451253",
    blood: ";",
    image: "images/ummeayeshabintefayez.jpg",
    facebook: "https://www.facebook.com/ummeayesha.bintefayez",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "12",
    name: "Kumari Srabony Debnath",
    district: "Bogura",
    phone: "01327909261",
    blood: "O+",
    image: "images/Sraboni Rani.jpg",
    facebook: "https://www.facebook.com/share/1GWqf9XaHu/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "13",
    name: "Mst. Dina Khatun",
    district: "Kushtia ",
    phone: "01942175060",
    blood: "O+",
    image: "images/Dina Khatun.jpg",
    facebook: "https://www.facebook.com/share/1b1ESbs2AU/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "14",
    name: "Mst.Anjuman Ara Arju",
    district: "Rajshahi",
    phone: "01345834175",
    blood: "AB+",
    image: "images/Arju ara.jpg",
    facebook: "https://www.facebook.com/share/17T6bLeFkZ/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "15",
    name: "Hasan Al Banna ",
    district: "Kushtia",
    phone: "01750005436",
    blood: "O+",
    image: "images/hasan-monirul islam.jpg",
    facebook: "https://www.facebook.com/share/1DRzjqVdMa/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "16",
    name: "Musfiqur Rahman Mahim",
    district: "Faridpur ",
    phone: "01729162077",
    blood: "A+",
    image: "images/Musfiqur Rahman mahim.jpg",
    facebook: "https://www.facebook.com/share/1Qc8KS69YB/",
    instagram: "https://www.instagram.com/musfiqurmahim?igsh=MXBjZDAzankwa3lkeA==",
    linkedin: "https://www.linkedin.com/in/musfiqur-rahman-mahim-916b3a3ab?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  {
    no: "17",
    name: "Fahad hasan",
    district: "Gazipur ",
    phone: "01951364306",
    blood: "O+",
    image: "images/fahad.jpg",
    facebook: "https://www.facebook.com/share/18cqhLerEW/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "18",
    name: "MD. Rifat Hasnat Sadhin ",
    district: "Kushtia",
    phone: "01939252085",
    blood: "A+",
    image: "images/sadhin.jpg",
    facebook: "https://www.facebook.com/share/19xqUDa3iJ/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "19",
    name: "Nazmus Sakib",
    district: "Satkhira ",
    phone: "01321090133",
    blood: "B+",
    image: "images/Md Nazmus Sakib.jpg",
    facebook: "https://www.facebook.com/share/1C8cp8m8HP/",
    instagram: "https://www.instagram.com/ursakib02?igsh=bnFmZWdwamZnMGto",
    linkedin: "#"
  },
  {
    no: "20",
    name: "Siyam Islam ",
    district: "Jamalpur ",
    phone: "01939707648",
    blood: "A+",
    image: "images/Siyam Islam.png",
    facebook: "https://www.facebook.com/share/18etAzFmuV/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "21",
    name: "Arif Miah",
    district: "Brahmanbaria",
    phone: "01605215655",
    blood: "B+",
    image: "images/Md Arif.jpg",
    facebook: "https://www.facebook.com/profile.php?id=100081624844068",
    instagram: "https://www.instagram.com/arif215655/",
    linkedin: "https://www.linkedin.com/in/arif-miah-5b8891238/"
  },
  {
    no: "22",
    name: "Ershadul Islam",
    district: "Sherpur",
    phone: "01765188269",
    blood: "O+ ",
    image: "images/Ershadul Islam.jpg",
    facebook: "https://www.facebook.com/share/187M3f8WR8/",
    instagram: "https://www.instagram.com/ershadul10?igsh=NGNpZnA0aWpieGhk",
    linkedin: "https://www.linkedin.com/in/ershadul-islam-455652377/"
  },
  {
    no: "23",
    name: "Md. Monirul Islam ",
    district: "Pabna",
    phone: "01832584419",
    blood: "O+ ",
    image: "images/Md Monirul Islam.jpg",
    facebook: "https://www.facebook.com/share/14ZJDYsohEV/",
    instagram: "https://www.instagram.com/masu_m5190?igsh=MTl6cHV1a3Nrb2tsZg==",
    linkedin: "#"
  },
  {
    no: "24",
    name: "Md.Atikul Islam Raju ",
    district: "Netrakona ",
    phone: "01846512521",
    blood: "B+",
    image: "images/atikul islamraju.jpg",
    facebook: "https://www.facebook.com/share/1ZtSQ6i9Ev/",
    instagram: "https://www.instagram.com/mdatikulislamraju?igsh=MTU3ZW5jM3c1cDRhZA==",
    linkedin: "#"
  },
  {
    no: "25",
    name: "Tasimur Rahman ",
    district: "Chattogram",
    phone: "01634398245",
    blood: "O+",
    image: "images/Tasimur Rahman.jpg",
    facebook: "https://www.facebook.com/share/1Kxmx5bg9r/",
    instagram: "https://www.instagram.com/tasimur?igsh=MWdkZTllYTBnYm5mNg==",
    linkedin: "#"
  },
  {
    no: "26",
    name: "Shayla Sabrin ",
    district: "Jamalpur ",
    phone: "01771045390",
    blood: "B+",
    image: "images/Shayla Sabrin.jpg",
    facebook: "https://www.facebook.com/share/18LAkex4Lf/",
    instagram: "https://www.instagram.com/shaylasabrin001?igsh=eXRoNHkzd2k0aXh2",
    linkedin: "https://www.linkedin.com/in/shayla-sabrin-66ab643a1"
  },
  {
    no: "27",
    name: "Mahbubur Rahman ",
    district: "Kishoreganj ",
    phone: "01733508478",
    blood: "O+",
    image: "images/mahbub.jpg",
    facebook: "https://www.facebook.com/MahbuburRahman1100",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "28",
    name: "Tasmia Binte Hasan ",
    district: "Kushtia",
    phone: "01537347298",
    blood: "B+",
    image: "images/Tasmia Binte Hasan.jpg",
    facebook: "https://www.facebook.com/share/1HkaHwsrEp/",
    instagram: "#",
    linkedin: "https://www.linkedin.com/in/tasmia-binte-hasan-2643b7388/"
  },
  {
    no: "29",
    name: "Fahmida Haque (farin)",
    district: "Faridpur",
    phone: "01723723068",
    blood: "O+",
    image: "images/Fahmida.jpeg",
    facebook: "https://www.facebook.com/share/1XK5eVBZM4/",
    instagram: "https://www.instagram.com/farin56782?igsh=MTJoczFscm12OW94dw==",
    linkedin: "#"
  },
  {
    no: "30",
    name: "Md Rayhan Sardar ",
    district: "Naogaon ",
    phone: "01300563063",
    blood: "O+",
    image: "images/Rayhan Joy.jpg",
    facebook: "https://www.facebook.com/share/1aZD1s2p9W/",
    instagram: "https://www.instagram.com/rayhanjoy04?igsh=ejE2ZGd5eDF1Nnk1",
    linkedin: "#"
  },
  {
    no: "31",
    name: "Mahmuda Akter",
    district: "Narayanganj ",
    phone: "01571423051",
    blood: "A+",
    image: "images/Mrs Mahmuda.jpg",
    facebook: "https://www.facebook.com/share/18G3HLPVzj/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "32",
    name: "Afia Ibnab Mishory ",
    district: "Gaibandha ",
    phone: "01341524830",
    blood: "AB+",
    image: "images/Afiaibnab Mishory.jpg",
    facebook: "https://www.facebook.com/afia.ibnab.mishory",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "33",
    name: "Pranto Kumar Das ",
    district: "Jashore",
    phone: "01931643683",
    blood: "B+",
    image: "images/Pranto.jpg",
    facebook: "https://www.facebook.com/share/18PpMW1kHc/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "34",
    name: "Logison Chakma",
    district: "Khagrachari ",
    phone: "01935309449",
    blood: "A+",
    image: "images/Logison Chakma.jpg",
    facebook: "https://www.facebook.com/logison.chakma",
    instagram: "https://www.instagram.com/logisonchakma?igsh=MW15bWJqdW1sc2UzMw==",
    linkedin: "#"
  },
  {
    no: "35",
    name: "Jonayed Hasan",
    district: "Gazipur",
    phone: "01934894058",
    blood: "B+",
    image: "images/asjonayed hasan.jpeg",
    facebook: "https://www.facebook.com/jonayed.hasan.10012004",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "36",
    name: "Mahamud Rabi Moon",
    district: "Khulna",
    phone: "01777079488",
    blood: "O+",
    image: "images/Mahmud Moon.jpg",
    facebook: "https://www.facebook.com/mahmud.moon.04",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "37",
    name: "Tohura Jannat Suborna ",
    district: "Tangail ",
    phone: "01743765450",
    blood: "",
    image: "images/Tohura Jannat.jpg",
    facebook: "https://www.facebook.com/share/18X1hQ7MfH/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "38",
    name: "Md. Hasanuzzaman ",
    district: "Bogura",
    phone: "01988162420",
    blood: "AB+",
    image: "images/Md. Hasanuzzaman.jpeg",
    facebook: "https://www.facebook.com/share/18gHREPUeh/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "39",
    name: "Sumaia Akter Bithi",
    district: "Jamalpur ",
    phone: "01731317277",
    blood: "B +",
    image: "images/Sumaia Akter.jpg",
    facebook: "https://www.facebook.com/safia.sifa.1",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "40",
    name: "MD.Shafinuzzaman",
    district: "Chuadanga",
    phone: "01752948558",
    blood: "B+",
    image: "images/MD Shafinuzzaman.jpeg",
    facebook: "https://www.facebook.com/share/1AzTAGNhj4/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "41",
    name: "Chandro Shikhor Ray",
    district: "Nilphamari",
    phone: "01832849859",
    blood: "O+",
    image: "images/chondro shikhor.jpg",
    facebook: "https://www.facebook.com/ChandroShikhor.RayGopal",
    instagram: "#",
    linkedin: "https://www.linkedin.com/in/chandro-shikhor-ray-b4ab7b24b"
  },
  {
    no: "42",
    name: "Maruf Ahmed ",
    district: "Thakurgaon ",
    phone: "01980309731",
    blood: "A+",
    image: "images/Maruf24.jpg",
    facebook: "https://www.facebook.com/share/1CNbLtEtik/",
    instagram: "https://www.instagram.com/d_a_r_k__paradise_?igsh=dG9rbDJwbzhnZ212",
    linkedin: "#"
  },
  {
    no: "43",
    name: "Md Abdul Hakim ",
    district: "Chapai nawabganj ",
    phone: "01315287567",
    blood: "B+",
    image: "images/MDAbdulHakimAli.jpg",
    facebook: "https://www.facebook.com/share/17XXjUc5Js/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "44",
    name: "Tahsin Jaman",
    district: "Satkhira",
    phone: "01302364660",
    blood: "O+",
    image: "images/Tahsin Jaman.jpg",
    facebook: "https://www.facebook.com/share/14cAbdpijFb/",
    instagram: "#",
    linkedin: "#"
  },
  {
    no: "46",
    name: "Piyal Hasan",
    district: "Jhenaidah ",
    phone: "01775259016",
    blood: "O+",
    image: "images/piyal_hasan.jpg",
    facebook: "https://www.facebook.com/share/1E34AEtKuY/",
    instagram: "#",
    linkedin: "#"
  }
  
];

const studentGrid = document.getElementById("studentGrid");
const searchInput = document.getElementById("searchInput");
const studentCount = document.getElementById("studentCount");

function iconSvg(path) {
  return `
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      ${path}
    </svg>
  `;
}

const icons = {
  mapPin: iconSvg('<path d="M12 21s6-5.4 6-11a6 6 0 10-12 0c0 5.6 6 11 6 11z"></path><circle cx="12" cy="10" r="2"></circle>'),
  phone: iconSvg('<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.4 19.4 0 01-6-6 19.8 19.8 0 01-3.1-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006.4 6.4l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0122 16.9z"></path>'),
  droplet: iconSvg('<path d="M12 2s6 6.6 6 11a6 6 0 11-12 0c0-4.4 6-11 6-11z"></path>'),
  facebook: iconSvg('<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>'),
  instagram: iconSvg('<rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle>'),
  linkedin: iconSvg('<path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 10-4 0v6h-4v-6a6 6 0 016-6z"></path><rect x="2" y="9" width="4" height="11"></rect><circle cx="4" cy="4" r="2"></circle>')
};

function studentCard(student) {
  return `
    <article class="student-card">
      <div class="photo-area">
        <img src="${student.image}" alt="${student.name}" loading="lazy" referrerpolicy="no-referrer" />
      </div>

      <div class="student-info">
        <div>
          <h3 class="student-name">${student.name}</h3>

          <div class="info-list">
            <div class="info-row district">
              <div class="info-left">
                ${icons.mapPin}
                <span>District</span>
              </div>
              <span class="info-value">${student.district}</span>
            </div>

            <div class="info-row phone">
              <div class="info-left">
                ${icons.phone}
                <span>Phone</span>
              </div>
              <span class="info-value">${student.phone}</span>
            </div>

            <div class="info-row blood">
              <div class="info-left">
                ${icons.droplet}
                <span>Blood</span>
              </div>
              <span class="info-value">${student.blood}</span>
            </div>
          </div>
        </div>

        <div class="social-bar">
          <a href="${student.facebook}" target="_blank" rel="noopener noreferrer" class="social-btn btn-fb" aria-label="Facebook">
            ${icons.facebook}
          </a>
          <a href="${student.instagram}" target="_blank" rel="noopener noreferrer" class="social-btn btn-insta" aria-label="Instagram">
            ${icons.instagram}
          </a>
          <a href="${student.linkedin}" target="_blank" rel="noopener noreferrer" class="social-btn btn-in" aria-label="LinkedIn">
            ${icons.linkedin}
          </a>
        </div>
      </div>
    </article>
  `;
}

function renderStudents(query = "") {
  const q = query.trim().toLowerCase();

  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(q) ||
      student.district.toLowerCase().includes(q)
    );
  });

  studentCount.textContent = filteredStudents.length;

  if (filteredStudents.length > 0) {
    studentGrid.innerHTML = filteredStudents.map(studentCard).join("");
  } else {
    studentGrid.innerHTML = `
      <div class="empty-state">
        No matching students found in the database.
      </div>
    `;
  }
}

searchInput.addEventListener("input", (e) => {
  renderStudents(e.target.value);
});

renderStudents();
