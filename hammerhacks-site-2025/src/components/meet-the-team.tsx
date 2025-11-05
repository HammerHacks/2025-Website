import {useEffect} from "react";

export default function MeetTheTeamComponent() {

  //TODO: refactor to follow standard practices + strong typing
  let teamMembers;
  let nameEl;
  let roleEl;
  let schoolEl;
  let bioEl;

  useEffect(() => {
    teamMembers = document.querySelectorAll('.team-member');
    nameEl = document.getElementById('team-desc-name');
    roleEl = document.getElementById('team-desc-role');
    schoolEl = document.getElementById('team-desc-school');
    bioEl = document.getElementById('team-desc-bio');

    teamMembers.forEach(function(member) {
      member.addEventListener('mouseenter', function () {
        var desc = member.getAttribute('data-desc');
        if (desc) {
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = desc;
          var strong = tempDiv.querySelector('strong');
          var rest = tempDiv.innerHTML.replace(/<strong>.*?<\/strong><br>/, '').split('<br>');
          var roleAndDesc = rest[0] || '';
          var school = rest[1] || '';
          var role = '';
          var bio = '';
          // Split at 'Likes →' if present
          var likesIdx = roleAndDesc.indexOf('Likes →');
          if (likesIdx !== -1) {
            role = roleAndDesc.substring(0, likesIdx).trim();
            bio = roleAndDesc.substring(likesIdx).trim();
          } else {
            role = roleAndDesc;
            bio = '';
          }
          setTeamDesc(strong ? strong.textContent : '', role, school, bio);
        }
      });
      member.addEventListener('mouseleave', function() {
        setTeamDesc('Hover over a team member', 'to see their role.', 'School info will appear here.', 'Their description will appear here.');
      });
    });
  }, []);


  function decodeAllText(elements, newTexts, duration) {
    const chars = '#$%^&*+-=<>?';
    const oldTexts = elements.map(el => el.textContent);
    const maxLens = newTexts.map((txt, i) => Math.max(txt.length, oldTexts[i].length));
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);

      elements.forEach((el, idx) => {
        const newText = newTexts[idx];
        const oldText = oldTexts[idx];
        const len = maxLens[idx];
        let display = '';

        for (let i = 0; i < len; i++) {
          if (progress < 1) {
            // All characters scramble simultaneously until final reveal
            // Once near the end, smoothly fade into final text
            const settleChance = Math.pow(progress, 3); // smooth easing
            if (Math.random() < settleChance) {
              display += newText[i] || '';
            } else {
              display += chars[Math.floor(Math.random() * chars.length)];
            }
          } else {
            display += newText[i] || '';
          }
        }

        el.textContent = display;
      });

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        elements.forEach((el, idx) => (el.textContent = newTexts[idx]));
      }
    }

    requestAnimationFrame(update);
  }

  function setTeamDesc(name, role, school, bio) {
    decodeAllText([nameEl, roleEl, schoolEl, bioEl], [name, role, school, bio], 500);
  }


  return (
      <div>
        <section className="flex flex-col w-full bg-gray-100 mt-12 slide-in items-center" id="team-section">
          <div className="w-full flex flex-col items-center justify-center mb-8 pt-[32px]">
            <h2 className="text-3xl font-bold mb-4 text-center">Made with 💖 by the HammerHacks team </h2>
            <div id="team-desc" className="text-lg text-gray-700 min-h-[120px] flex items-center justify-center">
              <div id="team-desc-content" className="w-full">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-2xl" id="team-desc-name">Hover over a team member</span>
                  <span className="text-xl text-gray-600 mt-1" id="team-desc-role">to see their role.</span>
                  <span className="text-lg text-blue-700 mt-1"
                        id="team-desc-school">School info will appear here.</span>
                </div>
                <div className="slide-in mt-6 text-base text-gray-700 text-center" id="team-desc-bio">Their description
                  will appear here.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center caps">
            <div
                className="flex flex-row flex-wrap gap-6 justify-center items-center w-full border-t-[2px] border-[#e5e7eb] py-[32px]">
              <a href="https://www.linkedin.com/in/selena-nguyen-0b7287321/" target="_blank" rel="noopener noreferrer">
                <img src="headshots/SelenaNguyen.png" alt="Member 1" className="team-member-img team-member"
                     data-desc="<strong>Selena Nguyen</strong><br>Lead Organizer Likes → Celeste and Hollow Knight<br>Grade 12 @ Orchard Park SS"/>
              </a>
              <a href="https://www.linkedin.com/in/maisy-thomas-940a07387/" target="_blank" rel="noopener noreferrer">
                <img src="headshots/MaisyThomas.jpg" alt="Member 2" className="team-member-img team-member"
                     data-desc="<strong>Maisy Thomas</strong><br>Lead Organizer Likes → Swimming and Climbing<br>Grade 12 @ St. Mary SS"/>
              </a>
              <div>
                <img src="headshots/DavidCosma(temporary).jpeg" alt="Member 3"
                     className="team-member-img team-member"
                     data-desc="<strong>David Cosma</strong><br>Lead Web Developer Likes → Board Games and Raspberries <br>Grade 12 @ Westmount SS"/>
              </div>
              <a href="https://www.linkedin.com/in/aaron-dam-a798512a5/" target="_blank" rel="noopener noreferrer">
                <img src="headshots/AaronDam.jpeg" alt="Member 4" className="team-member-img team-member"
                     data-desc="<strong>Aaron Dam</strong><br>Web Developer Likes → Basketball and Peanut Butter <br>Grade 12 @ Westmount SS"/>
              </a>
              <a href="https://www.linkedin.com/in/unimashi-ugor-6409a5352/" target="_blank" rel="noopener noreferrer">
                <img src="headshots/Unimashi.jpg" alt="Member 5" className="team-member-img team-member"
                     data-desc="<strong>Unimashi Ugor</strong><br>Web Developer Likes → Roller Coasters, Computer Systems and Retro Gaming <br>Grade 11 @ Bishop Ryan CSS"/>
              </a>
              <a href="https://www.linkedin.com/in/jasminemontrichard/" target="_blank" rel="noopener noreferrer">
                <img src="headshots/JasmineMontrichard.jpeg" alt="Member 6"
                     className="team-member-img team-member"
                     data-desc="<strong>Jasmine Montrichard</strong><br>Logistics Lead Likes → Philosophy and Economics, Technology, Event Organizing, Drawing<br>Prev. @ St. Jean Brebeuf CSS"/>
              </a>
              <a href="https://www.linkedin.com/in/gabriel-tsui/" target="_blank" rel="noopener noreferrer">
                <img src="headshots/GabrielTsui.jpg" alt="Member 7" className="team-member-img team-member"
                     data-desc="<strong>Gabriel Tsui</strong><br>Logistics Coordinator Likes → Philosophy, Art, Rhythm Games, Calisthenics<br>Grade 11 @ St. Mary CSS"/>
              </a>
              <a href="https://www.linkedin.com/in/jacob-canlas-152a592b3/" target="_blank" rel="noopener noreferrer">
                <img src="headshots/JacobCanlas.PNG" alt="Member 16" className="team-member-img team-member"
                     data-desc="<strong>Jacob Canlas</strong><br>Logistics Coordinator Likes → Pokémon, Dinosaurs, Cats, Manga/Manhwa, Laufey, W2E <br>Grade 12 @ Bishop Ryan CSS"/>
              </a>
              <a href="https://www.linkedin.com/in/joel-mathews-4009a5311/" target="_blank" rel="noopener noreferrer">
                <img src="headshots/JoelMathews.jpg" alt="Member 8" className="team-member-img team-member"
                     data-desc="<strong>Joel Mathews</strong><br>Operations Lead Likes → Hotpot and Iced Tea<br>Grade 12 @ Westmount SS"/>
              </a>
              <a href="https://www.linkedin.com/in/rosan-syal-1b2a82339/" target="_blank" rel="noopener noreferrer">
                <img src="headshots/RosanSyal.png" alt="Member 10" className="team-member-img team-member"
                     data-desc="<strong>Rosan Syal</strong><br>Operations Coordinator Likes → The Legend of Zelda and Gaming<br>Grade 11 @ Rosan Syal"/>
              </a>
              <div>
                <img src="headshots/SukhsimranChana.JPG" alt="Member 11" className="team-member-img team-member"
                     data-desc="<strong>Sukhsimran Chana</strong><br>Marketing Lead Likes → Poutine and Tyler the Creator <br>Grade 12 @ Orchard Park SS"/>
              </div>
              <div>
                <img src="headshots/CameronJ.png" alt="Member 12" className="team-member-img team-member"
                     data-desc="<strong>Cameron Jacka</strong><br>Marketing Coordinator Likes → Robotics and Camping <br>Grade 12 @ St. Mary CSS"/>
              </div>
              <div>
                <img src="headshots/MerinelGomez.jpg" alt="Member 13" className="team-member-img team-member"
                     data-desc="<strong>Merinel Gomez</strong><br>Marketing Coordinator Likes → Cats, Art, Writing, Drama <br>Grade 10 @ St. Thomas More CSS"/>
              </div>
              <a href="https://www.linkedin.com/in/alexandra-lima-66aa8a365/" target="_blank" rel="noopener noreferrer">
                <img src="headshots/AlexandraLima.png" alt="Member 14" className="team-member-img team-member"
                     data-desc="<strong>Alexandra Lima</strong><br>Finance Lead Likes → Music, Tennis, Nintendo Games<br>Grade 12 @ St. Thomas More CSS"/>
              </a>
              <a href="https://www.linkedin.com/in/nand-shah-4884b5295/" target="_blank" rel="noopener noreferrer">
                <img src="headshots/NandShah.png" alt="Member 15" className="team-member-img team-member"
                     data-desc="<strong>Nand Shah</strong><br>Finance Coordinator Likes → Basketball and Hockey<br>Grade 11 @ Westmount SS"/>
              </a>
            </div>
          </div>
        </section>
      </div>
  )
}