//$("#main").append("Jesse DeArmon");
//var awesomeThoughts = "My name is Jesse and I am AWESOME!"

//console.log(awesomeThoughts);

//var email = "jessedearmon@outlook.com"

//var newEmail =
  //email.replace("jessedearmon@outlook", "jessedearmonsoa@gmail")

//console.log(email);
//console.log(newEmail);

//var funThoughts =
  //awesomeThoughts.replace("AWESOME","FUN");

//$("#main").append(funThoughts);

//console.log(awesomeThoughts);
//console.log(funThoughts);

//var name = "Margie DeArmon";
//var formattedName = HTMLheaderName.replace("%data%", name);

//var role = "Child Care Facility Owner/Operator";
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

//var skills = ["Certified Child Development Professional"];
//var formattedSkills = HTMLskills.replace("%data%", skills);

//$("#header").append(formattedSkills);

//$("#main").append(skills.length);

var bio = {
  "name": "Margie DeArmon",
  "role": "Child Care Facility Owner/Operator",
  "contacts": {
    "mobile": "405-474-8542",
    "email": "msdearmon@sbcglobal.net",
    "linkedin": "Margie DeArmon",
    "location": "Moore, Oklahoma",
  },
  "welcomeMessage": "Welcome to my online resume!  Feel free to look around and contact me if you have any questions.",
  "skills": ["Excellent Leadership and Organizational Skills", "Certified Child Development Professional", "Sharp Record/Book Keeping Abilities", "Time Management Expert"],
  "bioPic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAApoAAAAJDhjODNmY2RlLTcxNzQtNDgzYy1iMTU2LTczYjI5ZGNlNjdhYQ.jpg",
}

var contacts = {
  "mobile": "405-474-8542",
  "email": "msdearmon@sbcglobal.net",
  "twitter": "twitter",
  "linkedin": "linkedin",
  "blog": "blog",
  "location": "Moore, Oklahoma"
}

var education = {
  "schools": [
    {
      "name": '<a href="https://www.redlandscc.edu/"> Redlands Community College</a>',
      "location": "El Reno, Oklahoma",
      "degree": "Child Development Certificate of Mastery",
      "dates": 2013,
      "major": "Early Child Development"
    },
    {
      "name": "Scholar for Excellence in Child Care Program",
      "location": "Norman, Oklahoma",
      "degree": "Scholar for Excellence in Child Care Program",
      "dates": 2015,
      "major": "N/A"
    }
  ]
}

function displayContacts() {
  for (contact in contacts.contacts) {
    $("#header").append(HTMLcontactGeneric);
    var formattedMobile = HTMLmobile.replace("%data%", contacts.contacts[contact].mobile);
    $(".contacts-entry:last").append(formattedMobile);

    //var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    //$(".work-entry:last").append(formattedDegree);

    //var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    //$(".work-entry:last").append(formattedDates);

    //var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    //$(".work-entry:last").append(formattedLocation);

    //var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    //$(".work-entry:last").append(formattedMajor);
  }
}

displayContacts();

function locationizer(education_obj) {
  var locationArray = [];

  for (school in education_obj.schools) {
    var newLocation = education_obj.schools[school].location;
    locationArray.push(newLocation);
  }

  return locationArray;
}

var work = {
  "jobs": [
    {
      "employer": "Self Employed",
      "title": "President of JD's Candles Company",
      "location": "Moore, Oklahoma",
      "dates": "January 2003 to December 2007",
      "description": "Our candle company was mainly a fundraising company working with schools, churches, and sports teams.  Although fundraising was the bulk of our business, we also had a website and sold direct to consumer through the site and at trade shows.  We sourced all of our own materials and mastered the art of crafting wonderful colors and smells.  Our work during this time centered around raising money for different groups as well as providing a living for our growing family.  This was a very demanding type of work requiring a lot of courage to cold call potential customers and even walk into their businesses unannounced to introduce myself.  I enjoyed every challenge and reward I experienced running the candle company."

    },
    {
      "employer": "Self Employed",
      "title": "Child Care Facility Owner/Operator",
      "location": "Moore, Oklahoma",
      "dates": "January 2007 to Present",
      "description": "The previous 4 years spent running the candle compnay was a crucial piece in the development of me becoming a child care professional.  I have always loved kids.  That's why once I understood how to run my own business the obvious choice was to open a daycare.  I have successfully ran the home daycare for the past 10 years. Keeping the facility numbers under 12 at all times allows for daily interaction with all of the children between the ages of infancy to 6 years old. Supporting them along the way to a successful future, as well as, care for their physical and emotion needs. Daily communication with guardians regarding individual child’s needs, skill sets, problems, and achievements. Develop and administer curriculum and activities. Encourage children to actively play and explore. Manage a small business, which includes finances, book/record keeping, child care regulations, interviewing, training, background checks, deadlines, goals, cooking, cleaning, etc."
    }
  ]
}



function locationizer(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }

  return locationArray;
}

var projects = {
  "projects": [
    {
      "title": "Small Family Facility - 7 Children",
      "dates": "2007-2012",
      "description": "Managing a child care facility is a demanding yet rewarding line of work.  A 7 child faciltiy only requires one teacher; that would be me.  I worked with kids ranging from new-born to 6 years old by myself out of the living room of my home.  WE continually worked to make the daycare into something more than watching kids out of our home.  We eventually built a daycare room and moved the kids and myself to the new area.  Working with kids this closely taught me a lot even though I was alread a mom to 3 children.  But like any small business owner I was ready to grow after 5 years in business.  In late 2012 I began working on a Large Family concept.  This would require hiring an employee and building additional daycare space.",
      "image": "",
    },
    {
      "title": "Large Family Facility - 12 Children",
      "dates": "2012-Present",
      "description": "This is where the real work began.  I was no longer just watching kids and doing some occasional paperwork.  I was now an owner, manager, and employee all at once.  I had to manage my employee and work through all of the tax issues that come with an employee and more clients.  This required me to master time management and learn how to keep accurate books.  Our schedule has been the key to our success with the Large Family Facility.  We are on a very strict time frame and even the parents know proper times to drop off or pick up their children.  We enforce this to ensure all of the children in the facility are properly taught, rested, and fed.  A strict routine helps accomplish this.  The facility runs like a well oiled machine and new children adapt very quickly to the daily schedule.  I am looking forward to many more years in the child care field.",
      "image": "",
    }
  ]
}

if(bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

}

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

function displayEducation() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedName);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);
  }
}

displayEducation();

function displayProjects() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
    $(".project-entry:last").append(formattedImage);
  }
}

displayProjects();

//projects.display = function() {
  //for (project in projects.projects) {
    //$("#projects").append(HTMLprojectStart);

    //var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    //$(".project-entry:last").append(formattedTitle);

    //var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    //$(".project-entry:last").append(formattedDates);

    //var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    //$(".project-entry:last").append(formattedDescription);

    //if (projects.projects[project].images.length > 0) {
      //for (image in projects.projects[project].images) {
        //var formattedImages = HTMLprojectImage.replace("$data%", projects.projects[project].images[image]);
        //$(".project-entry:last").append(formattedImages);
      //}
    //}
  //}
//}

$("#mapDiv").append(googleMap);

//var charEscape = function(_html) {
    //var newHTML = _html;

    //newHTML = _html.replace(/</g, "&lt;");
    //newHTML = newHTML.replace(/>/g, "&gt;");

    //return newHTML;
//};

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var linkedin = bio.contacts.linkedin;
var formattedLinkedin = HTMLlinkedin.replace("%data%", linkedin);
$("#topContacts").append(formattedLinkedin);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").prepend(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

//var formattedName = HTMLheaderName.replace("%data%", bio.name);
//var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);


//if(bio.skills.length > 0) {

  //$("#header").append(HTMLskillsStart);

  //var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  //$("#skills").append(formattedSkill);
  //formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  //$("#skills").append(formattedSkill);
  //formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  //$("#skills").append(formattedSkill);
//}

//var work = {};
//work.position = "Child Care Facility Owner/Operator";
//work.employer = "Self Employed";
//work.years = 10;

//var education = {};
//education["name"] = "Redlands Community College";
//education["years"] = "2010-2012"
//education["city"] = "El Reno, Oklahoma";
//education["degree"] = "Certificate of Mastery in Child Development"
//education["url"] = "https://www.redlandscc.edu/"


  //"jobs": [
    //{
      //"employer": "Happy",
      //"title": "Happy",
      //"dates": "Happy",
      //"description": "Happy"
    //},
    //{
      //"employer": "Happy",
      //"title": "Happy",
      //"dates": "Happy",
      //"description": "Happy"
    //}
  //]
//}

//$("#header").append(bio.name);
