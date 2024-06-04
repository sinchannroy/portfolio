window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

window.addEventListener('scroll', function() {
  const header = document.getElementsByClassName('navbar');
  if (window.scrollY > 1) {
    header.classList.add('sticky');
  }
  
  else {
    header.classList.remove('sticky');
  }
});


let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }

  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tabs");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tabs");
}

function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "bottest903@gmail.com",
    Password : "1E6D3854EB128D13CD3E2F6CAE66F801FD30", 
    To : 'sinchan1509@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "Name: " + document.getElementById("name").value 
            + "<br>Email: " + document.getElementById("email").value 
            + "<br>Subject: " + document.getElementById("subject").value
            + "<br>Message: " + document.getElementById("message").value,
  }).then(
    message => alert("Message sent successfully")
  );
}

const moveToTopBtn = document.getElementById('moveToTopBtn');
// Function to show or hide the button based on scroll position
function handleScroll() {
  if (document.documentElement.scrollTop > 300) {
    moveToTopBtn.classList.add('show');
  } 
  
  else {
    moveToTopBtn.classList.remove('show');
  }
}

// Function to scroll to the top of the page
function scrollToTop() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Event listener for scroll
document.addEventListener('scroll', handleScroll);

