/**
 * IARE Knowledge Base — Comprehensive static knowledge base for IARE chatbot fallback.
 * Sources: https://www.iare.ac.in/ (scraped Feb 2026)
 *
 * Search uses a weighted scoring system:
 *  - Exact phrase match in query  → +5 points each
 *  - Individual keyword match     → +1 point each
 * The entry with the highest score wins. Returns null if score = 0.
 */

export interface KBEntry {
    topic: string;
    phrases: string[];   // Exact multi-word phrases (high weight)
    keywords: string[];  // Individual words (low weight)
    answer: string;
}

export const iareKnowledge: KBEntry[] = [
    // ── ABOUT ──────────────────────────────────────────────────────────────────
    {
        topic: "About IARE",
        phrases: ["about iare", "what is iare", "tell me about", "history of iare", "who founded", "when was iare", "iare overview"],
        keywords: ["about", "iare", "institute", "history", "established", "founded", "overview", "aeronautical", "autonomous", "overview", "background", "introduction"],
        answer: `✈️ **About IARE — Institute of Aeronautical Engineering**

**Established:** 2000 | Dundigal, Hyderabad, Telangana – 500 043
**Mission:** *"Education for Liberation"*

Originally founded in 1994 as the Institute of Aircraft Maintenance Engineering, IARE has grown into a premier multi-disciplinary technological institute.

📋 **Accreditation & Recognition:**
• ✅ **AICTE** Approved (New Delhi)
• ✅ Affiliated to **JNTUH** (Jawaharlal Nehru Technological University, Hyderabad)
• ⭐ **NAAC A++** Grade
• ✅ **80% of programs** NBA Accredited (Tier-I Washington Accord)
• 🏆 **NIRF** Top 200 Engineering Colleges nationally
• 🚀 **NIRF** Top 100 in Innovation — ranked for **8+ years in a row**

📊 **At a Glance:**
• 6,337+ students | 345 faculty | 138 Ph.D holders (40%) | 1:19 Faculty-Student ratio
• 4 Research Centers | 18 start-ups | 24,918+ citations
• 60:40 Male:Female student ratio | 55:45 Male:Female faculty ratio

🌐 https://www.iare.ac.in/`
    },

    // ── CSE DEPARTMENT ─────────────────────────────────────────────────────────
    {
        topic: "Computer Science and Engineering",
        phrases: ["computer science", "cse department", "cse program", "btech cse", "b.tech cse", "software engineering", "cse labs", "ai ml", "data science", "information technology"],
        keywords: ["cse", "computer", "software", "programming", "it", "artificial intelligence", "machine learning", "data", "cloud", "networking", "security", "java", "python", "algorithms", "database", "web", "ieee", "acm", "csi", "ceta"],
        answer: `💻 **Computer Science & Engineering (CSE) at IARE**

**Established:** 2001 | NBA Accredited for **6 consecutive terms** (valid till June 2028)

**B.Tech Programs:**
• CSE (Computer Science & Engineering)
• CSE – Artificial Intelligence & Machine Learning
• CSE – Data Science

**Also offered:** M.Tech in CSE | Ph.D in Computer Science (since 2019)

🔬 **14 Academic Labs include:**
• AI Lab | Cloud Application Development Lab
• Machine Learning & Neural Computing Lab
• Database Management Systems Lab
• Security Protocols Lab | Web Systems Engineering Lab
• Operating Systems Lab | Data Structures Lab

💡 **Skills Covered:** Software Engineering, AI, Cloud Computing, Big Data, Computer Networks & Security, Web Development, Machine Learning

🎓 **Student Bodies:**
• CETA (Computer Engineers Technical Association)
• Professional chapters: **CSI, ISTE, IEEE, ACM**
• Activities: Seminars, Coding Games, Industrial Visits, Guest Lectures

🌐 https://www.iare.ac.in/?q=pages/computer-science-and-engineering`
    },

    // ── AERONAUTICAL ENGINEERING ───────────────────────────────────────────────
    {
        topic: "Aeronautical Engineering",
        phrases: ["aeronautical engineering", "aerospace engineering", "aero department", "aircraft design", "uav", "flight mechanics", "wind tunnel", "aerodynamics", "aero dept"],
        keywords: ["aeronautical", "aerospace", "aircraft", "aviation", "aero", "flight", "propulsion", "drone", "uav", "catia", "ansys", "cfd", "structures", "aeta", "sae"],
        answer: `✈️ **Aeronautical Engineering at IARE**

The cornerstone department of IARE — **established in 2000**, the first year of the institute.
NBA Accredited for **6 consecutive terms** (valid till June 2028).

**Programs:**
• B.Tech – Aeronautical Engineering
• M.Tech – Aerospace Engineering (valid till June 2026)
• Ph.D – Aeronautical Engineering (since 2024)

🔬 **Specializations & Skills:**
• Aerodynamics | Aerospace Propulsion | Aircraft Structures
• Guidance, Navigation & Control | Flight Mechanics
• Wind Tunnel Testing | UAV Design & Operations
• CAD/CATIA/ANSYS/CFD Software | SolidWorks | Flight Simulation

🏆 **Competitions:**
• **SAE India SUPRA** (Formula-style race car)
• **SAE India EFFI-CYCLE** (Electric 3-wheeler)
• **SAE India BICYCLE**
• **SAE Aero Design** (International & National)

🎓 **Student Body:** AETA (Aeronautical Engineers Technical Association)
**Club:** Aero Design and Simulation Club (Aero-DSC)

🌐 https://www.iare.ac.in/?q=pages/aeronautical-engineering`
    },

    // ── ECE ────────────────────────────────────────────────────────────────────
    {
        topic: "Electronics and Communication Engineering",
        phrases: ["electronics and communication", "ece department", "btech ece", "communication engineering"],
        keywords: ["ece", "electronics", "communication", "vlsi", "embedded", "signal", "circuits", "microprocessor", "antenna", "wireless"],
        answer: `📡 **Electronics & Communication Engineering (ECE) at IARE**

• **B.Tech ECE** — 4-year undergraduate program
• **NBA Accredited** (AICTE approved)

**Key Areas:** VLSI Design, Embedded Systems, Signal Processing, Wireless Communication, Antenna Design, Microprocessors, IoT, Digital Circuits

🌐 https://www.iare.ac.in/?q=pages/electronics-and-communication-engineering`
    },

    // ── EEE ────────────────────────────────────────────────────────────────────
    {
        topic: "Electrical and Electronics Engineering",
        phrases: ["electrical engineering", "eee department", "btech eee", "power systems", "electrical electronics"],
        keywords: ["eee", "electrical", "power", "drives", "control systems", "machines", "transformers", "plc", "scada", "renewable energy"],
        answer: `⚡ **Electrical & Electronics Engineering (EEE) at IARE**

• **B.Tech EEE** — 4-year undergraduate program
• **NBA Accredited**

**Key Areas:** Power Systems, Electrical Machines, Control Systems, Power Electronics, PLC/SCADA, Renewable Energy Systems, Drives

🌐 https://www.iare.ac.in/?q=pages/electrical-and-electronics-engineering`
    },

    // ── MECHANICAL ─────────────────────────────────────────────────────────────
    {
        topic: "Mechanical Engineering",
        phrases: ["mechanical engineering", "me department", "btech mechanical", "manufacturing", "thermal engineering"],
        keywords: ["mechanical", "manufacturing", "thermal", "fluid", "cad", "cam", "solidworks", "autocad", "robotics", "production", "design"],
        answer: `⚙️ **Mechanical Engineering (ME) at IARE**

• **B.Tech ME** — 4-year undergraduate program
• **NBA Accredited**

**Key Areas:** Manufacturing, Thermal Engineering, Fluid Mechanics, CAD/CAM, Robotics, Production Engineering, Materials Science, Machine Design

🌐 https://www.iare.ac.in/?q=pages/mechanical-engineering`
    },

    // ── CIVIL ──────────────────────────────────────────────────────────────────
    {
        topic: "Civil Engineering",
        phrases: ["civil engineering", "civil department", "btech civil", "structural engineering", "construction"],
        keywords: ["civil", "structural", "construction", "geotechnical", "transportation", "environmental", "surveying", "concrete", "building"],
        answer: `🏗️ **Civil Engineering (CE) at IARE**

• **B.Tech Civil Engineering** — 4-year undergraduate program
• **NBA Accredited**

**Key Areas:** Structural Engineering, Geotechnical Engineering, Transportation Engineering, Environmental Engineering, Construction Management, Surveying

🌐 https://www.iare.ac.in/?q=pages/civil-engineering`
    },

    // ── MBA ────────────────────────────────────────────────────────────────────
    {
        topic: "MBA Program",
        phrases: ["mba program", "master of business", "mba at iare", "business administration", "icet", "management course"],
        keywords: ["mba", "management", "business", "marketing", "finance", "hr", "human resource", "icet", "pgcet"],
        answer: `🎓 **MBA — Master of Business Administration at IARE**

• **Duration:** 2 years (PG Program)
• **Admission:** Through **ICET** (Integrated Common Entrance Test)
• Affiliated to **JNTUH** | AICTE Approved

**Specializations typically include:** Marketing, Finance, Human Resources, Operations

📞 Admissions: **+91 9154379624** (8 AM – 8 PM)
📧 info@iare.ac.in

🌐 https://www.iare.ac.in/?q=pages/master-of-business-administration`
    },

    // ── M.TECH ─────────────────────────────────────────────────────────────────
    {
        topic: "M.Tech Programs",
        phrases: ["m.tech", "mtech", "postgraduate", "pg program", "gate admission", "master of technology"],
        keywords: ["mtech", "m.tech", "master", "postgraduate", "pg", "gate", "pgcet", "specialization"],
        answer: `🎓 **M.Tech Programs at IARE**

• **Duration:** 2 years | **Admission:** Through **GATE / PGCET**
• Affiliated to **JNTUH** | AICTE Approved

**M.Tech Specializations offered:**
• Computer Science & Engineering (NBA Accredited till June 2028)
• Aerospace Engineering (NBA Accredited till June 2026)
• And other discipline-specific specializations

📞 Admissions helpline: **+91 9154379624** (8 AM – 8 PM)
📧 info@iare.ac.in

🌐 https://www.iare.ac.in/?q=M.Tech-Programs`
    },

    // ── Ph.D ───────────────────────────────────────────────────────────────────
    {
        topic: "Ph.D Program",
        phrases: ["phd", "doctoral", "ph.d", "research program", "doctorate", "ugc net", "research degree"],
        keywords: ["phd", "doctoral", "doctorate", "research", "supervisor", "thesis", "ugc", "net", "jrf", "scholar"],
        answer: `🔬 **Ph.D (Doctoral Program) at IARE**

IARE has recognized **Research Centers** under JNTUH offering Ph.D programs.

**Departments with Ph.D programs:**
• Computer Science & Engineering (since 2019)
• Aeronautical Engineering (since 2024)
• Other engineering disciplines

**Admission:** UGC NET / GATE / JRF qualified candidates

**Research Stats:**
• 24 Research Scholars under IARE faculty
• 4 Research Centers | 74 h-index | 24,918+ citations
• ₹1,015+ Lakhs in funded research projects

🌐 https://www.iare.ac.in/?q=pages/doctoral-phd`
    },

    // ── ADMISSIONS ─────────────────────────────────────────────────────────────
    {
        topic: "Admissions",
        phrases: ["how to apply", "admission process", "how to join iare", "admission 2025", "admission 2026", "eamcet rank", "eligibility criteria", "apply to iare"],
        keywords: ["admission", "apply", "application", "eligibility", "eamcet", "jee", "entrance", "join", "enroll", "seat", "selection", "cutoff", "cut off", "rank", "open day", "prospectus"],
        answer: `📝 **Admissions at IARE**

**B.Tech (4-year):** Through **TS EAMCET / AP EAMCET**
**M.Tech:** Through **GATE / PGCET**
**MBA:** Through **ICET**
**Ph.D:** Through **UGC NET / GATE**

📋 **Eligibility for B.Tech:**
• 10+2 with Physics, Chemistry & Mathematics
• Valid TS/AP EAMCET score

⚠️ For current year **cut-off ranks, fee structure, and seat availability**, please contact IARE directly — these change each year:

📞 **Admissions Helpline:** +91 9154379624 *(8 AM – 8 PM)*
📧 **Email:** info@iare.ac.in
📅 **Book a Consultation:** https://iare.ac.in/appointmentform.html
🌐 **Website:** https://www.iare.ac.in/`
    },

    // ── PLACEMENTS ─────────────────────────────────────────────────────────────
    {
        topic: "Placements",
        phrases: ["placement record", "campus recruitment", "job offers", "top companies", "highest package", "average package", "salary statistics", "placement statistics"],
        keywords: ["placement", "job", "recruit", "company", "salary", "package", "hire", "career", "offer", "campus", "drive", "lpa", "ctc", "pat", "training", "microsoft", "amazon", "tcs", "infosys"],
        answer: `💼 **Placements at IARE**

• 🏆 **91%** of eligible students placed every year
• 🌍 **17%** of students go abroad for higher studies
• 🏢 **62+ companies** conduct campus drives annually
• 📈 **89%** graduation rate

**Top Recruiters (recent batches):**
Microsoft · Amazon · JPMorgan Chase & Co · Rubrik · Juspay · Zscaler · Amadeus · Deloitte · DeltaX · EPAM · DBS Bank · IBM · Accenture · Cognizant · Capgemini · LTIMindtree · Virtusa · Infosys · Wipro · MPhasis · UST · TCS · TATA Technologies · TATA Advanced Systems · NTT Data · Hexaware · Optum · JBM · Tech Mahindra · Ernst & Young · Wiley Edge · JSW · Byteridge · Accolite Digital · Lumen · and many more!

📞 **Placement & Training Officer (PAT):**
Dr. M Pala Prasad Reddy
📱 9491602701 | 📧 pat@iare.ac.in

📊 **Want stats?** https://www.iare.ac.in/?q=Placement-Statistics
🌐 https://www.iare.ac.in/?q=pages/placements`
    },

    // ── INTERNSHIPS ────────────────────────────────────────────────────────────
    {
        topic: "Internships",
        phrases: ["internship at iare", "how to get internship", "summer internship", "industrial training", "field project", "internship program"],
        keywords: ["internship", "intern", "industrial", "training", "summer", "field", "project", "industry", "stipend", "isro", "barc", "ngo", "startup", "practical"],
        answer: `🏭 **Internships at IARE**

Internship is an integral part of the IARE curriculum and often acts as a **gateway to final placement**.

**Types of Internships Available:**

🏫 **In-house (On-campus):**
• Faculty-supervised (inter/intra-department)
• Science & Technology Start-Up Park (STSP)
• Technology Innovation & Incubation Centre (TIIC)
• Library / Department / Administration

🏢 **External / Industry:**
• Industry internships (with/without stipend)
• Government / PSU: NSIC, CITD, C-DAC, BARC, Railways, **ISRO**, etc.
• NGO / Social internships
• Startups & Incubation Centers
• Family Business / Outside Institute

📄 **Internship Report Format:**
Download: https://www.iare.ac.in/sites/default/files/downloads/Format_for_the_Internship_Report_2023.pdf

🌐 https://www.iare.ac.in/?q=pages/internships`
    },

    // ── LIBRARY ────────────────────────────────────────────────────────────────
    {
        topic: "Library",
        phrases: ["central library", "library timing", "library collection", "online library", "e-journals", "digital library", "library access", "ilms"],
        keywords: ["library", "book", "journal", "e-book", "digital", "nptel", "swayam", "delnet", "ndl", "online catalog", "ilms", "reading", "publication"],
        answer: `📚 **Central Library at IARE**

🌐 **Online Catalog (ILMS):** http://ilms.iare.ac.in:8080/newgenlibctxt/
📖 **Digital Library:** https://iare.knimbus.com/user#/home

**Online Resources Available:**
• 📰 **E-Journals** (https://www.iare.ac.in/?q=pages/e-journals)
• 🎥 **NPTEL / MIT OpenCourseWare** Video Lectures
• 📚 **AICTE MOOC – SWAYAM** courses
• 🏛️ **National Digital Library** (https://ndl.iitkgp.ac.in)
• 📗 **E-Shodh Sindhu** (https://Idp.iare.ac.in)
• 🌐 **World eBook Library**
• 🔗 **N-LIST** (https://nlist.inflibnet.ac.in/)
• 🤝 **DELNET / Inter Library Loan**

⏰ **Library Timings:** https://www.iare.ac.in/?q=pages/library-timings
📬 **Contact:** https://www.iare.ac.in/?q=pages/library-contact-us
🌐 https://www.iare.ac.in/?q=pages/library`
    },

    // ── FACILITIES ─────────────────────────────────────────────────────────────
    {
        topic: "Campus Facilities",
        phrases: ["campus facilities", "college facilities", "infrastructure", "smart classroom", "computing center", "wifi on campus", "day care", "tuck shop", "women helpline"],
        keywords: ["facility", "campus", "lab", "wifi", "internet", "sports", "cafeteria", "food", "accommodation", "canteen", "tuck", "day care", "infrastructure", "classroom", "computing"],
        answer: `🏫 **Campus Facilities at IARE**

• 🖥️ **Smart Classrooms** — Air-conditioned with modern AV equipment
• 🔬 **Academic Labs** — State-of-art labs for every department
• 📚 **Central Library** — Physical + digital resources
• 🌐 **High-Speed Wi-Fi** — Campus-wide coverage
• 💻 **Computing Center** — (https://www.iare.ac.in/?q=pages/computer-center)
• 🚌 **College Bus** — Multiple routes with live GPS tracking
• ⚽ **Sports Facilities** — Indoor & outdoor sports
• 🍽️ **Cafeteria / Tuck Shop** — Good food service on campus
• 👶 **Day Care Center** — For children of faculty/staff
• 🧑‍🎓 **Student Council** — Active student governance body
• 🆘 **Women's 24×7 Helpline** — Safety & support
• 🔑 **User Account & Password Support** — https://www.iare.ac.in/?q=user-account-password

🌐 https://www.iare.ac.in/`
    },

    // ── BUS / TRANSPORT ────────────────────────────────────────────────────────
    {
        topic: "Bus and Transport",
        phrases: ["college bus", "bus facility", "bus routes", "bus timing", "track bus", "how to reach iare", "how to get to iare", "transport facility", "bus pass"],
        keywords: ["bus", "transport", "route", "pick", "drop", "vehicle", "travel", "commute", "track", "gps", "dundigal", "direction"],
        answer: `🚌 **Bus & Transport Facility at IARE**

IARE operates college buses covering routes across Hyderabad for student convenience.

🗺️ **Track Your Bus (Live GPS):** https://www.iare.ac.in/?q=pages/track-your-bus
📋 **Route Details & Transport Info:** https://www.iare.ac.in/?q=Transportation
🗺️ **How to Reach IARE:** https://www.iare.ac.in/?q=How-to-Reach-Us
🗺️ **Campus Map:** https://www.iare.ac.in/images/IARE-CAMPUS-MAP.jpg

📍 **Address:** Dundigal – 500 043, Hyderabad, Telangana

For transport fee and route enquiries:
📞 040-29705852 / 29705853 / 29705854
📧 info@iare.ac.in`
    },

    // ── RESEARCH & INNOVATION ──────────────────────────────────────────────────
    {
        topic: "Research and Innovation",
        phrases: ["research at iare", "research centers", "funded projects", "student research", "research scholar", "startup park", "technology incubation", "institution innovation"],
        keywords: ["research", "innovation", "publication", "journal", "grant", "startup", "incubation", "patent", "project", "sri", "tips", "vip", "pics", "iic", "funding", "consultancy", "h-index"],
        answer: `🔬 **Research & Innovation at IARE**

📊 **Research Stats:**
• 4 dedicated Research Centers
• 74 h-index | 522 i10-index | 24,918+ citations
• ₹1,015+ Lakhs in research grants
• ₹79.6+ Lakhs revenue through consultancy
• 18 start-ups registered | ₹109.7 Lakhs for product development
• 10,455+ video lectures | 5,822 hours recorded

🧪 **Student Research Programs:**
• **SRI** – Summer Research Internship
• **TIPS** – Technology Innovation & Product Support
• **VIPs** – Vertically Integrated Projects
• **PICS** – Projects in Community Services

🏭 **Innovation Ecosystem:**
• Technology Incubation Centre | MSME ASPIRE-TBI
• Science & Technology Start-Up Park (STSP)
• Institution Innovation Council (IIC)
• ATL School Linkage | Yukti Innovation Repository

🏆 **SAE India Competitions:**
SUPRA · BICYCLE · EFFI-CYCLE · AERO DESIGN (National & International)

🌐 https://www.iare.ac.in/?q=Research_and_Development_Center`
    },

    // ── CONTACT ────────────────────────────────────────────────────────────────
    {
        topic: "Contact IARE",
        phrases: ["contact iare", "phone number", "email address", "how to contact", "helpline number", "iare phone", "iare email", "reach iare", "where is iare"],
        keywords: ["contact", "phone", "number", "email", "address", "reach", "location", "map", "helpline", "office", "call", "enquiry", "enquire"],
        answer: `📞 **Contact IARE**

🏛️ **Address:**
Institute of Aeronautical Engineering
Dundigal – 500 043, Hyderabad, Telangana, India

📱 **General Enquiries:**
+91 91546 78975 | +91 91546 78976

☎️ **Landlines:** 040-29705852 / 29705853 / 29705854

🎓 **Admissions Helpline:** +91 9154379624 *(8 AM – 8 PM)*

📖 **Academic Affairs:** +91 91546 78977

💼 **Placement & Training:** 9491602701 | pat@iare.ac.in

📧 **General Email:** info@iare.ac.in

📅 **Book Appointment:** https://iare.ac.in/appointmentform.html

🗺️ **Campus Map:** https://www.iare.ac.in/images/IARE-CAMPUS-MAP.jpg
🗺️ **Directions:** https://www.iare.ac.in/?q=How-to-Reach-Us

📂 **Phone Directory:** https://www.iare.ac.in/?q=Phone-Directory
🌐 **Website:** https://www.iare.ac.in/`
    },

    // ── ACCREDITATION & RANKINGS ───────────────────────────────────────────────
    {
        topic: "Rankings and Accreditation",
        phrases: ["nirf ranking", "naac grade", "nba accreditation", "iare ranking", "college ranking", "accreditation status", "is iare good college"],
        keywords: ["rank", "ranking", "nirf", "naac", "nba", "accreditation", "aicte", "jntuh", "grade", "rating", "award", "recognition", "approved", "autonomous", "affiliated"],
        answer: `🏆 **IARE Rankings & Accreditation**

**Accreditations:**
• ✅ **AICTE** Approved (New Delhi)
• ✅ Affiliated to **JNTUH**
• ⭐ **NAAC A++** Grade (highest)
• ✅ **80% of programs** NBA Accredited (Tier-I — Washington Accord)

**NIRF Rankings (Ministry of Education, Govt. of India):**
• 🇮🇳 Consistently in **Top 200** Engineering Colleges nationally
• 🚀 **Top 100 in Innovation** — ranked for **8+ consecutive years**
• **Top 6–8% in CSE** | Position **11–13 in CSE** nationally

📌 Detailed rankings: https://www.iare.ac.in/?q=pages/top-ratings-iare`
    },

    // ── FEES ───────────────────────────────────────────────────────────────────
    {
        topic: "Fees and Scholarships",
        phrases: ["fee structure", "tuition fees", "how much is fees", "iare fees", "scholarship amount", "merit scholarship", "fee payment", "financial aid"],
        keywords: ["fee", "fees", "tuition", "cost", "payment", "scholarship", "financial", "aid", "merit", "stipend", "expense", "afford", "price", "amount"],
        answer: `💰 **Fees & Scholarships at IARE**

⚠️ Fee structures change annually based on JNTUH/government regulations and category.

For the **most accurate and current fee structure**, please contact IARE directly:

📞 **Admissions Helpline:** +91 9154379624 *(8 AM – 8 PM)*
📧 **Email:** info@iare.ac.in
📅 **Book Consultation:** https://iare.ac.in/appointmentform.html

**Scholarships available for:**
• Government scholarships (SC/ST/BC/EBC/Minority)
• Merit-based institutional scholarships
• Sports scholarships

Ask the admissions office about eligibility and current scholarship offerings.

🌐 https://www.iare.ac.in/`
    },

    // ── EXAMS & STUDENT PORTALS ────────────────────────────────────────────────
    {
        topic: "Exams, Results and Student Portals",
        phrases: ["exam schedule", "exam timetable", "semester results", "internal marks", "external exam", "online exam", "student portal", "samvidha login", "eexam", "akanksha"],
        keywords: ["exam", "result", "timetable", "marks", "grade", "cgpa", "internal", "external", "jntuh", "revaluation", "supply", "supplementary", "eexam", "samvidha", "akanksha", "portal", "login", "attendance"],
        answer: `📅 **Exams, Results & Student Portals at IARE**

**Student Portals:**
• 🎓 **Samvidha** (Academic ERP): https://samvidha.iare.ac.in/
• 📝 **Akanksha** (LMS): https://akanksha.iare.ac.in/
• 💻 **eExam Desk** (Online Exams): https://eexamdesk.iare.ac.in/
• 🔬 **ESLO** (E-Learning): https://eslo.iare.ac.in/
• 🏗️ **BuildIT Go Lab**: https://www.iare.ac.in/?q=basicpage/buildit-go-lab
• 📊 **Aksha** (Analytics): https://aksha.iare.ac.in/
• 🌐 **Bristom**: https://www.bristom.com

JNTUH semester exam schedules are announced on JNTUH's official website.

For academic queries:
📞 **Academic Affairs:** +91 91546 78977
📧 info@iare.ac.in`
    },

    // ── STUDENT LIFE & CLUBS ───────────────────────────────────────────────────
    {
        topic: "Student Life and Clubs",
        phrases: ["student clubs", "extracurricular activities", "cultural fest", "technical events", "student council", "sports at iare", "nss", "college events"],
        keywords: ["club", "activity", "event", "fest", "cultural", "technical", "nss", "sports team", "extracurricular", "society", "chapter", "hackathon", "coding", "quiz", "workshop", "seminar", "guest lecture", "aeta", "ceta"],
        answer: `🎉 **Student Life at IARE**

**Student Bodies:**
• 🏛️ **Student Council** — elected student governance
• 🖥️ **CETA** (Computer Engineers Technical Association)
• ✈️ **AETA** (Aeronautical Engineers Technical Association)

**Professional Society Chapters:**
IEEE · ACM · CSI · ISTE · and more

**Technical Activities:**
• 🏆 SAE India Competitions (SUPRA, EFFI-CYCLE, BICYCLE, AERO DESIGN)
• 💡 Hackathons & Coding Contests
• 🔬 Student Research Programs (SRI, TIPS, VIPs, PICS)
• 🏭 Engineering Clinics & Industrial Visits
• 📊 Paper/Poster Presentations & Guest Lectures

**Clubs:**
• Aero Design & Simulation Club (Aero-DSC)
• Various department-level student clubs

**Sports:** Outdoor & indoor sports facilities available on campus

🌐 https://www.iare.ac.in/?q=content/student-achievements`
    },

    // ── ONLINE PORTALS ─────────────────────────────────────────────────────────
    {
        topic: "Online Portals and e-Learning",
        phrases: ["online learning", "e-learning", "video lectures", "mooc", "swayam", "nptel", "ict services", "online courses", "iare videos"],
        keywords: ["online", "video", "lecture", "mooc", "swayam", "nptel", "elearning", "e-learning", "ict", "digital", "youtube", "course", "recorded", "akanksha", "eslo"],
        answer: `🖥️ **e-Learning & Online Resources at IARE**

IARE has created **10,455+ video lectures** with **5,822+ hours** of recorded content.

**Platforms & Portals:**
• 📚 **Akanksha LMS:** https://akanksha.iare.ac.in/
• 🎥 **ESLO (E-Learning):** https://eslo.iare.ac.in/
• 🏗️ **BuildIT Go Lab:** https://www.iare.ac.in/?q=basicpage/buildit-go-lab
• 🎓 **NPTEL / MIT OpenCourseWare:** Free video courses
• 📖 **AICTE MOOC – SWAYAM:** https://www.iare.ac.in/?q=basicpage/welcome-swayam
• 📺 **IARE YouTube:** https://www.youtube.com/channel/UCrN2YGajq0ITaokeOn2LEpQ/featured

🌐 https://www.iare.ac.in/?q=Information-and-Communications-Technology`
    },

    // ── WOMEN'S HELPLINE ───────────────────────────────────────────────────────
    {
        topic: "Women's Helpline and Safety",
        phrases: ["women helpline", "women safety", "24x7 helpline", "women cell", "harassment complaint", "grievance"],
        keywords: ["women", "helpline", "safety", "harassment", "grievance", "complaint", "female", "gender", "24x7", "support"],
        answer: `🆘 **Women's Safety at IARE**

IARE provides a **24×7 Women's Helpline** for the safety and well-being of all female students and staff.

🔗 https://www.iare.ac.in/?q=pages/24%C3%977-women-helpline

For general safety concerns or grievances:
📧 info@iare.ac.in
📞 +91 91546 78975 / +91 91546 78976

IARE is committed to providing a safe, inclusive, and equitable environment for all students.`
    },

    // ── ALUMNI ─────────────────────────────────────────────────────────────────
    {
        topic: "Alumni",
        phrases: ["iare alumni", "alumni engagement", "alumni network", "degree verification", "old students"],
        keywords: ["alumni", "graduate", "former student", "degree verification", "alumni network", "ex-student"],
        answer: `🎓 **IARE Alumni**

• 🔗 **Alumni Engagement Portal:** https://www.iare.ac.in/?q=node/3088
• 📜 **Online Degree Verification:** https://www.iare.ac.in/?q=pages/online-degree-verifcation
• 📸 **Photo Gallery:** https://www.flickr.com/photos/186282793@N05/albums

**Social Media:**
• 🐦 Twitter: https://twitter.com/IAREHyd
• 💼 LinkedIn: https://www.linkedin.com/school/2712285/
• 📘 Facebook: https://www.facebook.com/IAREOFFICIAL
• 📷 Instagram: https://instagram.com/iare_hyderabad
• 📺 YouTube: https://www.youtube.com/channel/UCrN2YGajq0ITaokeOn2LEpQ/featured`
    },

    // ── FACULTY / JOBS ─────────────────────────────────────────────────────────
    {
        topic: "Faculty and Careers at IARE",
        phrases: ["faculty jobs", "work at iare", "join iare", "teaching jobs", "faculty recruitment", "faculty profile"],
        keywords: ["faculty", "job", "work", "career", "recruit", "teaching", "professor", "lecturer", "phd faculty", "staff", "hire"],
        answer: `👩‍🏫 **Faculty & Careers at IARE**

• **Faculty Strength:** 345 total | 138 Ph.D holders (40%)
• Male:Female Faculty Ratio: 55:45

**Looking to join IARE?**
🔗 **Work with Us:** https://www.iare.ac.in/?q=Join-IARE-Faculty

**Faculty Profiles by Department:**
• CSE: https://www.iare.ac.in/?q=departmentlist/28
• AE: https://www.iare.ac.in/?q=departmentlist/26

📧 For faculty enquiries: info@iare.ac.in`
    },

    // ── HOSTEL ─────────────────────────────────────────────────────────────────
    {
        topic: "Hostel and Accommodation",
        phrases: ["hostel facility", "hostel at iare", "boys hostel", "girls hostel", "accommodation", "room rent", "hostel fee", "stay on campus", "hostel rules"],
        keywords: ["hostel", "accommodation", "room", "dormitory", "stay", "boarding", "mess", "warden", "pg", "lodge"],
        answer: `🏠 **Hostel & Accommodation at IARE**

IARE provides **separate hostel facilities for boys and girls** on campus.

🛏️ **Facilities:**
• Furnished rooms (single/double/triple sharing)
• 24×7 security and CCTV surveillance
• Mess with hygienic vegetarian & non-vegetarian food
• High-speed Wi-Fi in hostel blocks
• Reading rooms and recreation areas
• Laundry and medical support

📞 **+91 9154379624** (8 AM – 8 PM)
📧 info@iare.ac.in
📅 https://iare.ac.in/appointmentform.html`
    },

    // ── SPORTS ─────────────────────────────────────────────────────────────────
    {
        topic: "Sports and Physical Education",
        phrases: ["sports at iare", "sports facilities", "cricket ground", "basketball court", "sports scholarship", "physical education", "gym at iare"],
        keywords: ["sport", "cricket", "football", "basketball", "badminton", "volleyball", "table tennis", "chess", "athletics", "gym", "fitness", "playground", "outdoor", "indoor"],
        answer: `⚽ **Sports & Physical Education at IARE**

🏟️ **Outdoor:** Cricket · Football · Basketball · Volleyball · Athletics · Kabaddi
🏸 **Indoor:** Badminton · Table Tennis · Chess · Carrom · Gym / Fitness Centre

🏆 Students compete in **JNTUH Zonal & University** tournaments.
🎽 **Sports Scholarship** available for outstanding performers.

📞 +91 9154379624 | 📧 info@iare.ac.in`
    },

    // ── ANTI-RAGGING ───────────────────────────────────────────────────────────
    {
        topic: "Anti-Ragging Policy",
        phrases: ["anti ragging", "ragging complaint", "ragging policy", "ragging at iare", "how to report ragging"],
        keywords: ["ragging", "bully", "harassment", "anti-ragging", "ugc", "report", "safety"],
        answer: `🚫 **Anti-Ragging Policy at IARE**

IARE has a **ZERO TOLERANCE** policy towards ragging.

**Report Ragging:**
• 📞 UGC Helpline: **1800-180-5522**
• 📧 helpline@antiragging.in
• 🔗 https://www.antiragging.in/
• 📧 IARE: info@iare.ac.in

**Consequences:** Suspension, expulsion, and/or criminal charges under UGC regulations.
IARE maintains an Anti-Ragging Committee & Squad. New students are briefed during orientation.`
    },

    // ── ACADEMIC CALENDAR ──────────────────────────────────────────────────────
    {
        topic: "Academic Calendar",
        phrases: ["academic calendar", "semester dates", "when does college start", "college reopening", "holiday list", "vacation dates"],
        keywords: ["calendar", "semester", "schedule", "holiday", "vacation", "reopening", "start date", "end date", "academic year"],
        answer: `📅 **Academic Calendar at IARE (JNTUH)**

• **Odd Semester:** July – November
• **Even Semester:** December – April/May
• **Summer:** May – June (internships, supplementary exams)

📋 Download: https://www.iare.ac.in/?q=pages/academic-calender
📞 Academic Affairs: **+91 91546 78977**`
    },

    // ── SCHOLARSHIPS ───────────────────────────────────────────────────────────
    {
        topic: "Scholarships and Financial Aid",
        phrases: ["scholarship details", "government scholarship", "merit scholarship", "minority scholarship", "sc st scholarship", "fee reimbursement"],
        keywords: ["scholarship", "financial aid", "fee reimbursement", "sc", "st", "bc", "minority", "ebc", "merit", "nsp", "epass"],
        answer: `🎓 **Scholarships & Financial Aid at IARE**

**Government Scholarships:**
• **SC/ST:** Full fee reimbursement (Govt of TS/AP)
• **BC/EBC/Minority:** Via TS e-Pass: https://telanganaepass.cgg.gov.in/
• **Post-Matric:** National Scholarship Portal: https://scholarships.gov.in/

**Institutional:**
• Merit-based scholarships for top academic performers
• Sports scholarships for outstanding athletes

📞 **+91 9154379624** | 📧 info@iare.ac.in`
    },

    // ── GRIEVANCE ──────────────────────────────────────────────────────────────
    {
        topic: "Grievance Redressal",
        phrases: ["grievance cell", "student complaint", "how to file complaint iare", "grievance redressal"],
        keywords: ["grievance", "complaint", "redressal", "ombudsman", "feedback", "dispute", "issue"],
        answer: `📋 **Grievance Redressal at IARE**

**Steps:**
1. Approach Class Counselor / HOD
2. If unresolved → Dean, Student Affairs
3. Formal grievance via institution's internal system

**National Portals:**
• AICTE: https://www.aicte-india.org/feedback/grievances.php
• UGC: https://www.ugc.gov.in/page/Grievance.aspx

📧 info@iare.ac.in | 📞 040-29705852 / 29705853`
    },

    // ── NSS ────────────────────────────────────────────────────────────────────
    {
        topic: "NSS and Social Responsibility",
        phrases: ["nss at iare", "national service scheme", "community service", "nss camp", "blood donation"],
        keywords: ["nss", "community", "social", "volunteer", "blood donation", "camp", "swachh bharat", "cleanliness"],
        answer: `🤝 **NSS (National Service Scheme) at IARE**

**Activities:**
• 🩸 Blood Donation Camps
• 🌿 Tree Plantation Drives
• 🧹 Swachh Bharat Campaigns
• 🏕️ Annual Special NSS Camps (village adoption)
• 💉 Health Awareness Camps
• 📚 Literacy Programs in nearby villages

NSS adds value to your resume and develops leadership skills.
📧 info@iare.ac.in`
    },

    // ── INDUSTRY COLLABORATION ────────────────────────────────────────────────
    {
        topic: "Industry Collaboration and MoUs",
        phrases: ["industry collaboration", "mou companies", "industry tie up", "corporate partnerships"],
        keywords: ["mou", "collaboration", "partnership", "industry", "corporate", "agreement", "nasscom"],
        answer: `🤝 **Industry Collaborations & MoUs at IARE**

IARE has MoUs with leading companies for:
• Industry-relevant curriculum design
• Guest lectures & workshops
• Internship & placement pipelines
• Joint R&D projects

**Key Partners:** Microsoft · AWS · IBM · Oracle · Infosys · Wipro · TCS · Nasscom · ISRO

🌐 https://www.iare.ac.in/?q=pages/mous`
    },

    // ── SKILL DEVELOPMENT ─────────────────────────────────────────────────────
    {
        topic: "Skill Development and Certifications",
        phrases: ["skill development", "certification courses", "value added courses", "spoken english", "soft skills", "aws certification"],
        keywords: ["skill", "certification", "certificate", "training", "soft skill", "aptitude", "communication", "aws", "azure", "oracle", "nptel", "hackerrank"],
        answer: `🛠️ **Skill Development & Certifications at IARE**

**Technical:**
• Cloud: AWS, Azure, GCP certifications
• Programming bootcamps: Python, Java, C++
• HackerRank / LeetCode contests
• NPTEL / SWAYAM certifications
• Oracle, Microsoft, IBM certifications

**Soft Skills:**
• Spoken English & Communication training
• Aptitude & Reasoning (placement prep)
• Personality Development & Mock Interviews

📞 PAT: 9491602701 | 📧 pat@iare.ac.in`
    },

    // ── NAAC ──────────────────────────────────────────────────────────────────
    {
        topic: "NAAC Assessment Details",
        phrases: ["naac grade", "naac accreditation", "naac a++", "naac score", "naac report"],
        keywords: ["naac", "grade", "a++", "accreditation", "quality", "assessment", "iqac"],
        answer: `⭐ **NAAC A++ at IARE**

IARE holds the **highest NAAC grade — A++**, reflecting excellence across all 7 criteria:
• Curricular Aspects
• Teaching-Learning & Evaluation
• Research, Innovations & Extension
• Infrastructure & Learning Resources
• Student Support & Progression
• Governance, Leadership & Management
• Institutional Values & Best Practices

**IQAC:** Dedicated Internal Quality Assurance Cell for continuous improvement.
🌐 https://www.iare.ac.in/?q=pages/top-ratings-iare`
    },

    // ── EXAM PATTERN ──────────────────────────────────────────────────────────
    {
        topic: "Exam Pattern and Evaluation",
        phrases: ["exam pattern", "internal assessment", "marks distribution", "mid exam", "end exam", "assignment marks"],
        keywords: ["exam pattern", "mid", "end exam", "internal", "external", "assignment", "marks", "cgpa", "evaluation", "revaluation", "supply", "backlog"],
        answer: `📝 **Exam Pattern at IARE (JNTUH)**

| Component | Marks |
|---|---|
| Internal (Mid 1 + Mid 2) | 30 |
| External Semester End Exam | 70 |
| **Total** | **100** |

• **Grading:** CGPA on 10-point scale
• **Supplementary exams** available after each semester
• **Revaluation** via JNTUH portal after results

🔗 JNTUH: https://jntuh.ac.in/
📞 Academic: **+91 91546 78977**`
    },

    // ── ATTENDANCE ────────────────────────────────────────────────────────────
    {
        topic: "Attendance Policy",
        phrases: ["attendance requirement", "minimum attendance", "attendance shortage", "how much attendance needed", "attendance condonation"],
        keywords: ["attendance", "shortage", "condonation", "percentage", "75%", "minimum", "bunk", "absent", "leave"],
        answer: `📋 **Attendance Policy at IARE (JNTUH)**

• **Minimum required: 75%** per subject to sit for semester exams
• **65–74%:** Condonation possible with valid reason/medical certificate
• **Below 65%:** Detained — not eligible for semester exam

📱 Track attendance on **Samvidha:** https://samvidha.iare.ac.in/
📞 Academic Cell: **+91 91546 78977**`
    },

    // ── HIGHER EDUCATION ABROAD ────────────────────────────────────────────────
    {
        topic: "Higher Education Abroad",
        phrases: ["study abroad", "ms abroad", "higher education abroad", "gre preparation", "us universities", "foreign universities"],
        keywords: ["abroad", "ms", "gre", "gmat", "ielts", "toefl", "usa", "uk", "canada", "germany", "foreign", "visa"],
        answer: `🌍 **Higher Education Abroad from IARE**

• **17%** of students go abroad for higher studies annually

**Destinations:** USA · UK · Canada · Australia · Germany · Singapore
**Programs:** M.S. in CS / AI / Aerospace / ECE | MBA

**Exams:**
• **GRE** — for MS | **GMAT** — for MBA | **IELTS/TOEFL** — English proficiency

**IARE Support:** GRE prep guidance · SOP & LOR support · Alumni mentorship network

📞 PAT: 9491602701 | 📧 pat@iare.ac.in`
    },

    // ── LATERAL ENTRY ─────────────────────────────────────────────────────────
    {
        topic: "Lateral Entry Admissions",
        phrases: ["lateral entry", "direct second year", "diploma to btech", "ecet admission"],
        keywords: ["lateral", "ecet", "diploma", "second year", "direct entry", "polytechnic"],
        answer: `📝 **Lateral Entry (2nd Year) Admissions at IARE**

**Route:** TS ECET / AP ECET

**Eligible:**
• Diploma holders in relevant engineering branch
• BSc Mathematics graduates (for CSE/IT/ECE/EEE)

**Duration:** 3 years (1st year waived)

📞 **+91 9154379624** (8 AM – 8 PM)
📅 https://iare.ac.in/appointmentform.html
📧 info@iare.ac.in`
    },

    // ── SCIENCE & HUMANITIES ──────────────────────────────────────────────────
    {
        topic: "Department of Science and Humanities",
        phrases: ["mathematics department", "physics department", "chemistry department", "science department", "humanities", "basic sciences"],
        keywords: ["mathematics", "physics", "chemistry", "english", "science", "humanities", "maths", "calculus", "applied science"],
        answer: `🔬 **Sciences & Humanities at IARE**

This department handles **foundational subjects for all B.Tech students:**

• **Mathematics I, II, III** — Calculus, Linear Algebra, Statistics, etc.
• **Engineering Physics**
• **Engineering Chemistry**
• **English Communication Skills**
• **Environmental Studies**

All mandatory in **1st and 2nd year** across all engineering programs.

📞 +91 91546 78977 | 📧 info@iare.ac.in`
    },
];

// ── IMPROVED SEARCH ENGINE ──────────────────────────────────────────────────
/**
 * Weighted keyword search:
 * - Multi-word phrase match = +5 points each
 * - Single keyword match    = +1 point each
 * Returns the best matching answer, or null if nothing matched.
 */
export function searchKnowledge(query: string): string | null {
    const q = query.toLowerCase().trim();
    if (!q) return null;

    let bestScore = 0;
    let bestAnswer: string | null = null;

    for (const entry of iareKnowledge) {
        let score = 0;

        // Phrase matching (high weight — catches "what is the admission process")
        for (const phrase of entry.phrases) {
            if (q.includes(phrase)) score += 5;
        }

        // Keyword matching (lower weight)
        for (const kw of entry.keywords) {
            if (q.includes(kw)) score += 1;
        }

        if (score > bestScore) {
            bestScore = score;
            bestAnswer = entry.answer;
        }
    }

    return bestScore > 0 ? bestAnswer : null;
}
