const hamburgerIcon = document.querySelector('.hamburger_icon');
const navMenu = document.querySelector('.nav_menu2');
const navBranding = document.querySelector('.nav_branding');
const navContainer = document.querySelector('.mobile_nav_container');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBranding.classList.toggle('active');
  navContainer.classList.toggle('active');
});

document.querySelectorAll('.nav_link').forEach((n) => n.addEventListener('click', () => {
  hamburgerIcon.classList.remove('active');
  navMenu.classList.remove('active');
  navBranding.classList.remove('active');
  navContainer.classList.remove('active');
}));


//multistories project

const multiPost = {
  id: '_1',
  heading: 'My Recent Works',
  name: 'Multi-Post Stories',
  desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  featuredImg: 'image folder/works.png',
  technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
  liveLink: '#',
  sourceLink: '#',
};

const stories = document.querySelector('.multi_stories');
stories.innerHTML += `<div class="recent_work_div flex">
			<h2 class="recent_work_header">${multiPost.heading}</h2>
			 <img class="image_line" src="image folder/recent_work_line.png" alt="line">
			</div>

			<div class="recent_work_content">
			 <img class="img_placeholder" src="${multiPost.featuredImg}" alt="multipost image">
			<div class="placeholder_content">
			  <h3 class="multi_story">${multiPost.name}</h3>
			  <p class="recent_work_text">${multiPost.desc}</p>			  
			</div>
			
			 <ul class="recent_work_language">
      <li class="work_language flex">${multiPost.technologies[0]}</li>
      <li class="work_language flex">${multiPost.technologies[1]}</li>
      <li class="work_language flex">${multiPost.technologies[2]}</li>
      <li class="work_language flex">${multiPost.technologies[3]}</li>
    </ul>
			
			<button data-modal-target="#modal" type="submit" class="see_prjt_buttn">See Project</button>
			</div>`;



//recent works project

      

const projectsArr = [
  {
    id: '_1',
    name: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: '',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: '_2',
    name: 'Data Dashboard Healthcare',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: '',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: '_3',
    name: 'Website Portfolio',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: '',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: '_4',
    name: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: '',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: '_5',
    name: 'Data Dashboard Healthcare',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: '',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: '_6',
    name: 'Website Portfolio',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: '',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
];

for (let i = 0; i < projectsArr.length; i += 1) {
  const workCard = projectsArr[i];
  const projects = document.getElementById('project_cards');
  projects.innerHTML += `<div class="project_background">
  <div class="project_foreground">
      <div class="work_content" id="work_content">
          <h3>${workCard.name}</h3>
          <p>${workCard.desc}</p>
      

      <div class="project_tech">
          <ul>

              <li>
                  <a href="#">${workCard.technologies[0]}</a>
              </li>
              <li>
                  <a href="#">${workCard.technologies[1]}</a>
              </li>
              <li>
                  <a href="#">${workCard.technologies[2]}</a>
              </li>
          </ul>
      </div>
      </div>
      <button data-modal-target="#modal" type="submit" class="card_bttn">See Project</button>
  </div>
</div>`;
}

//popup section


const popupArr = {
  id: '_1',
  name: 'Keeping track of hundreds  of components website',
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  featuredImg: 'image folder/popup image.png',
  technologies: ['html', 'Bootstrap', 'Ruby on rails'],
  liveLink: '#',
  sourceLink: '#',
};

const popupWindow = document.querySelector('.modal');
popupWindow.innerHTML += `<div class="modal_content">
   <div class="popup_header">
    <div class="header_cancel">
               <h2>${popupArr.name}</h2>	
	    <button data-close-button class="close_Xbttn">&times;</button>
    </div>
      <div class="popup_languages">
          <ul>
              <li>
                  <a href="#">${popupArr.technologies[0]}</a>
              </li>
              <li>
                  <a href="#">${popupArr.technologies[1]}</a>
              </li>
              <li>
                  <a href="#">${popupArr.technologies[2]}</a>
              </li>
          </ul>
        </div>
          
	   </div>
    <div class="popup_content">
          <img class="popup_image" src="${popupArr.featuredImg}" alt="">
              <div class="popup_description">
                  <p>${popupArr.desc}</p>

                     <div class="popup_bttn" id="popup_bttn">
                      <a href="#">See live <img src="image folder/Icon-see live.png" alt=""></a>
                       <a href="#">See source <img src="image folder/Vector.png" alt=""></a>
                     
                    </div>
		          </div>          
    </div>
    </div>`;

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal === null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove('active');
} 