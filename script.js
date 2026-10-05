const data = {
  adventure:{
    kicker:"Professional experience / 01",
    title:"Adventure Go Kenya",
    role:"Co-Founder & Director · Communications / Field Storytelling / Digital",
    body:`<p>Adventure Go Kenya is a nature and tourism organisation co-founded by Brian. His work extends beyond tourism operations into communications, storytelling and digital content.</p>
    <h3>Contribution</h3><ul><li>Communications and digital content</li><li>Website and social media content</li><li>Photography and video</li><li>Field storytelling and documentation</li><li>Campaign and promotional materials</li><li>Proposals and partnership materials</li><li>Client communication</li><li>Project coordination and field logistics</li></ul>
    <h3>What it demonstrates</h3><p>The ability to communicate and produce in real-world field environments, where plans, people, landscapes and logistics meet.</p>`
  },
  integral:{
    kicker:"Professional experience / 02",
    title:"Integral Media",
    role:"Multimedia Producer · Research / Scriptwriting / Multimedia Production · March 2024 – May 2025",
    body:`<p>Brian worked as a Multimedia Producer at Integral Media Limited, producing educational, technical and advocacy content for clients including Britam, East Africa Training Institute, COSMOS and Medisel.</p>
    <h3>Contribution</h3><ul><li>Research and script development</li><li>Story structure</li><li>Recording and voice-over coordination</li><li>Audio and video production</li><li>Cinematography support</li><li>Editing and sound clean-up</li><li>Production coordination</li><li>Client feedback and revisions</li><li>Digital asset organisation</li></ul>
    <h3>What it demonstrates</h3><p>Research-led communication and the ability to carry an idea through scripting, production and post-production.</p>`
  },
  roadwise:{
    kicker:"Independent personal project / 01",
    title:"RoadWise Kenya",
    role:"Research / Advocacy / Campaign Development",
    body:`<p>RoadWise Kenya is a research-driven road-safety communication initiative.</p>
    <p>The project explores how technical automotive and road-safety information can be translated into accessible, practical communication for ordinary audiences.</p>
    <h3>Brian's work includes</h3><ul><li>Research</li><li>Scripting</li><li>Communication concepts</li><li>Technical information translation</li><li>Production frameworks</li><li>Video concepts</li><li>Short-form content</li><li>Graphics and social content</li><li>Partnership proposals</li></ul>
    <h3>The communication problem</h3><p>How can technical motoring and road-safety information be made understandable and useful to ordinary audiences?</p>`
  },
  social:{
    kicker:"Independent creative project / 02",
    title:"Social Impact & Advocacy Storytelling",
    role:"Storytelling / Inclusion / Visual Communication",
    body:`<p>A first-person Disability Sunday storytelling concept designed to challenge assumptions around disability and explore more inclusive communication.</p>
    <h3>Contribution</h3><ul><li>Narrative development</li><li>Scriptwriting</li><li>Voice-over</li><li>Visual treatment</li><li>Storytelling approach</li></ul>
    <h3>Purpose</h3><p>The concept uses personal narrative and visual communication to create empathy and question established perceptions.</p>`
  }
};

const modal=document.getElementById("projectModal");
document.querySelectorAll(".case-link").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const d=data[btn.dataset.project];
    document.getElementById("modalKicker").textContent=d.kicker;
    document.getElementById("modalTitle").textContent=d.title;
    document.getElementById("modalRole").textContent=d.role;
    document.getElementById("modalBody").innerHTML=d.body;
    modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
  });
});
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
document.querySelector(".modal-close").addEventListener("click",closeModal);
document.querySelector(".modal-backdrop").addEventListener("click",closeModal);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
const toggle=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
