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

// multistories project

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
   <ul class="recent_work_language">
 <li class="work_language flex">${multiPost.technologies[0]}</li>
 <li class="work_language flex">${multiPost.technologies[1]}</li>
 <li class="work_language flex">${multiPost.technologies[2]}</li>
 <li class="work_language flex">${multiPost.technologies[3]}</li>
  </ul>
  <button data-modal-target="#modal" type="submit" class="see_prjt_buttn">See Project</button>
 </div>`;

// recent works project

const projectsArr = [
  {
    id: '_1',
    heading: 'Multi Post Stories',
    name: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard.",
    featuredImg: '',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: 'https://github.com/3nityGitHub/MOBILE_FIRST-PROJECT',
  },
  {
    id: '_2',
    heading: 'Multi Post Stories',
    name: 'Data Dashboard Healthcare',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: '',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: 'https://github.com/3nityGitHub/MOBILE_FIRST-PROJECT',
  },
  {
    id: '_3',
    heading: 'Multi Post Stories',
    name: 'Website Portfolio',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: '',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: 'https://github.com/3nityGitHub/MOBILE_FIRST-PROJECT',
  },
  {
    id: '_4',
    heading: 'Multi Post Stories',
    name: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: '',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: 'https://github.com/3nityGitHub/MOBILE_FIRST-PROJECT',
  },
  {
    id: '_5',
    heading: 'Multi Post Stories',
    name: 'Data Dashboard Healthcare',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard",
    featuredImg: '',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: 'https://github.com/3nityGitHub/MOBILE_FIRST-PROJECT',
  },
  {
    id: '_6',
    heading: 'Multi Post Stories',
    name: 'Website Portfolio',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has beentheindustry's standard ",
    featuredImg: '',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: 'https://github.com/3nityGitHub/MOBILE_FIRST-PROJECT',
  },
  {
    id: '_7',
    heading: 'Multi Post Stories',
    name: 'Keeping track of hundreds  of components website',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featuredImg: 'image folder/popup image.png',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveLink: '#',
    sourceLink: 'https://github.com/3nityGitHub/MOBILE_FIRST-PROJECT',
  },
];

for (let i = 0; i <= 5; i += 1) {
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

// popup section

for (let h = 6; h < projectsArr.length; h += 1) {
  const popupWindow = document.querySelector('.modal');
  popupWindow.innerHTML += ` <div class="modal_content">
            <div class="top_modal_content">

                <div class="popup_header">
                   <h2 class="desktop_heading">${projectsArr[6].name}</h2>
                   <h3 class="mobile_heading">${projectsArr[6].heading}</h3>
                    <button data-close-button class="close_Xbttn">&times;</button>
                </div>

              <div class="header_tags">
                <ul class="popup_languages list_tag" >
                  <li class="popup_tags lang_tag"><a href="#">${projectsArr[6].technologies[0]}</a></li>
                  <li class="popup_tags lang_tag"><a href="#">${projectsArr[6].technologies[1]}</a></li>
                  <li class="popup_tags lang_tag"><a href="#">${projectsArr[6].technologies[2]}</a></li>
                </ul>
              </div>
          </div>
      <div class="bottom_modal_content">
              <div class="popup_image_container">
                <img class="popup_image" src="image folder/popup image.png" alt="">
              </div>
        <div class="popup_description">
              <div class="popup_text">
              <p class="text_support text_details">${projectsArr[6].desc}</p>
               </div>
          <div class="popup_button">
              <section class="button">
                <a href="#" class="btn">See live</a>
                <img src="image folder/Icon-see live.png" alt="">
              </section>
              <section class="button">
                <a href="${projectsArr[6].sourceLink}" class="btn">See source</a>
                <img src="image folder/Git-Vector.png" alt="">
              </section>
        </div>
     </div>

    </div>

  </div>`;
}

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');

function openModal(modal) {
  if (modal === null) return;
  modal.classList.add('active');
}

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('#modal');
    closeModal(modal);
  });
});


//Form Validation

const formValid = document.getElementById('form_contact');
formValid.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailId = document.getElementById('email').value;

  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  const ErrorMsg = document.querySelector('.form_error_msg');
  if (!regex.test(emailId)) {
    ErrorMsg.innerHTML = 'Your email should not be in Uppercase!';
  } else {
    ErrorMsg.innerHTML =
      'Congratulations! Your form was submitted successfully.';
  }
});
