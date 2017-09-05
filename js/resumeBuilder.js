var bio = {
    "name": "Margie DeArmon",
    "role": "Child Care Facility Owner/Operator",
    "contacts": {
        "mobile": "405-474-8542",
        "email": "msdearmon@sbcglobal.net",
        "github": "dearmonpro",
        "location": "Moore, Oklahoma",
    },
    "welcomeMessage": "Welcome to my online resume!  Feel free to look around and contact me if you have any questions.",
    "skills": ["Excellent Leadership and Organizational Skills", "Certified Child Development Professional", "Sharp Record/Book Keeping Abilities", "Time Management Expert"],
    "biopic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAApoAAAAJDhjODNmY2RlLTcxNzQtNDgzYy1iMTU2LTczYjI5ZGNlNjdhYQ.jpg",
};

var education = {
    "schools": [{
            "name": '<a href="https://www.redlandscc.edu/"> Redlands Community College</a>',
            "location": "El Reno, Oklahoma",
            "degree": "Child Development Certificate of Mastery",
            "majors": ["Early Child Development", " Happy"],
            "dates": "2013-2015",
        },
        {
            "name": "Scholar for Excellence in Child Care Program",
            "location": "Norman, Oklahoma",
            "degree": "Scholar for Excellence in Child Care Program",
            "majors": ["Scholar for Excellence in Child Care Program"],
            "dates": "2015-2016",
        }
    ],
    "onlineCourses": [{
            "title": '<a href="https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"> Intro to Programming</a>',
            "school": "Udacity",
            "dates": "2016-2107",
            "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000",
        },
        {
            "title": '<a href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"> Front-End Web Developer</a>',
            "school": "Udacity",
            "dates": "2017-Present",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
        }
    ]
};

var work = {
    "jobs": [{
            "employer": "Self Employed",
            "title": "President of JD's Candle Company",
            "location": "Moore, Oklahoma",
            "dates": "January 2003 to December 2007",
            "description": "Our candle company was mainly a fundraising company working with schools, churches, and sports teams.  Although fundraising was the bulk of our business, we also had a website and sold direct to consumer through the site and at trade shows.  We sourced all our own materials and mastered the art of crafting wonderful colors and smells.  Our work during this time centered around raising money for separate groups as well as providing a living for our growing family.  This was a very demanding type of work requiring a lot of courage to cold call potential customers and even walk into their businesses unannounced to introduce myself.  I enjoyed every challenge and reward I experienced running the candle company."

        },
        {
            "employer": "Self Employed",
            "title": "Child Care Facility Owner/Operator",
            "location": "Moore, Oklahoma",
            "dates": "January 2007 to Present",
            "description": "The previous 4 years spent running the candle company was a crucial piece in the development of me becoming a child care professional.  I have always loved kids.  That's why once I understood how to run my own business the obvious choice was to open a daycare.  I have successfully run the home daycare for the past 10 years. Keeping the facility numbers under 12 always allows for daily interaction with all the children between the ages of infancy to 6 years old. Supporting them along the way to a successful future, as well as, care for their physical and emotion needs. Daily communication with guardians regarding individual child’s needs, skill sets, problems, and achievements. Develop and administer curriculum and activities. Encourage children to actively play and explore. Manage a small business, which includes finances, book/record keeping, child care regulations, interviewing, training, background checks, deadlines, goals, cooking, cleaning, etc."
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Small Family Facility - 7 Children",
            "dates": "2007-2012",
            "description": "Managing a child care facility is a demanding yet rewarding line of work.  A 7-child facility only requires one teacher; that would be me.  I worked with kids ranging from new-born to 6 years old by myself out of the living room of my home.  WE continually worked to make the daycare into something more than watching kids out of our home.  We eventually built a daycare room and moved the kids and myself to the new area.  Working with kids this closely taught me a lot even though I was already a mom to 3 children.  But like any small business owner I was ready to grow after 5 years in business.  In late 2012, I began working on a Large Family concept.  This would require hiring an employee and building additional daycare space.",
            "images": ["https://github.com/dearmonpro/m-resume/blob/m-resume/images/images/IMG_6317.JPG?raw=true", "https://github.com/dearmonpro/m-resume/blob/m-resume/images/images/2016-03-21_08-56-47_866.jpeg?raw=true"]
        },
        {
            "title": "Large Family Facility - 12 Children",
            "dates": "2012-Present",
            "description": "This is where the real work began.  I was no longer just watching kids and doing some occasional paperwork.  I was now an owner, manager, and employee all at once.  I had to manage my employee and work through all the tax issues that come with an employee and more clients.  This required me to master time management and learn how to keep accurate books.  Our schedule has been the key to our success with the Large Family Facility.  We are on a very strict time frame and even the parents know proper times to drop off or pick up their children.  We enforce this to ensure all the children in the facility are properly taught, rested, and fed.  A strict routine helps accomplish this.  The facility runs like a well-oiled machine and new children adapt very quickly to the daily schedule.  I am looking forward to many more years in the child care field.",
            "images": ["https://github.com/dearmonpro/m-resume/blob/m-resume/images/images/2016-03-19_15-42-30_393.jpeg?raw=true", "https://github.com/dearmonpro/m-resume/blob/m-resume/images/images/2016-03-19_15-42-37_321.jpeg?raw=true"]
        }
    ]
};

var data = "%data%";

bio.display = function() {

    var name = bio.name;
    var formattedName = HTMLheaderName.replace(data, name);
    $("#header").prepend(formattedName);

    var role = bio.role;
    var formattedRole = HTMLheaderRole.replace(data, role);
    $("#header").prepend(formattedRole);

    var mobile = bio.contacts.mobile;
    var formattedMobile = HTMLmobile.replace(data, mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(HTMLmobile.replace(data, mobile));

    var email = bio.contacts.email;
    var formattedEmail = HTMLemail.replace(data, email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(HTMLemail.replace(data, email));

    var github = bio.contacts.github;
    var formattedGithub = HTMLgithub.replace(data, github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(HTMLgithub.replace(data, github));

    var location = bio.contacts.location;
    var formattedLocation = HTMLlocation.replace(data, location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(HTMLlocation.replace(data, location));

    var biopic = bio.biopic;
    var formattedBioPic = HTMLbioPic.replace(data, biopic);
    $("#header").prepend(formattedBioPic);

    var welcomeMessage = bio.welcomeMessage;
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data, welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (i = 0; i < bio.skills.length; i++) {
            var skills = bio.skills;
            var formattedSkill = HTMLskills.replace(data, skills[i]);
            $('#skills').append(formattedSkill);
        }
    }
};

bio.display();

work.display = function() {

    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
        var formattedTitle = HTMLworkTitle.replace(data, job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace(data, job.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates = HTMLworkDates.replace(data, job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace(data, job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();

education.display = function() {

    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace(data, school.name);
        $(".education-entry:last").append(formattedName);

        var formattedLocation = HTMLschoolLocation.replace(data, school.location);
        $(".education-entry:last").append(formattedLocation);

        var formattedDegree = HTMLschoolDegree.replace(data, school.degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedMajor = HTMLschoolMajor.replace(data, school.majors);
        $(".education-entry:last").append(formattedMajor);

        var formattedDates = HTMLschoolDates.replace(data, school.dates);
        $(".education-entry:last").append(formattedDates);
    });

    if (education.onlineCourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineClass) {
            var formattedOnlineTitle = HTMLonlineTitle.replace(data, onlineClass.title);
            $(".education-entry:last").append(formattedOnlineTitle);

            var formattedOnlineSchool = HTMLonlineSchool.replace(data, onlineClass.school);
            $(".education-entry:last").append(formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace(data, onlineClass.dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace(data, onlineClass.url);
            $(".education-entry:last").append(formattedOnlineURL);
        });
    }
};

education.display();

projects.display = function() {

    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace(data, project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace(data, project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace(data, project.description);
        $(".project-entry:last").append(formattedDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace(data, image);
                $('.project-entry:last').append(formattedImage);
            });
        }
    });
};

projects.display();

$("#mapDiv").append(googleMap);
