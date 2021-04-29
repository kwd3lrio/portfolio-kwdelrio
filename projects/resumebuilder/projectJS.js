// WEB 115 Final Project | WEB.115.2019.SP
// Kristian Del-Rio
// April.24.2019



// create h1 and h2 elements for html form page
var body = document.body; //navigated DOM to reach body element
var headingH1 = document.createElement("h1"); // create <h1> html element
var h1Text = document.createTextNode("Instant Resume Builder"); // adds text to h1 heading
var headingH2 = document.createElement("h2");   // create <h1> html element
var h2Text = document.createTextNode("WEB115.0002"); // adds text to h2 heading

// add created elements into <body> of form html page
headingH1.appendChild(h1Text);
headingH2.appendChild(h2Text);
body.appendChild(headingH1);
body.appendChild(headingH2);



// event handling function for generating new html page
function make_Resume() {
    // retrieve user input values from <input> and <textarea> elements
    var fullName = document.getElementById("fullName").value;
    var contactAddress = document.getElementById("contactAddress").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var emailField = document.getElementById("email");
    
    //regular expression used to test email input
    var emailRegExp = /^(([^<>()\[\]\\.,;:@"\x00-\x20\x7F]|\\.)+|("""([^\x0A\x0D"\\]|\\\\)+"""))@(([a-z]|#\d+?)([a-z0-9-]|#\d+?)*([a-z0-9]|#\d+?)\.)+([a-z]{2,4})$/i;
    
    // tests if user input for email matches regular expression
    var emailResult = emailRegExp.test(email);
    
    // if...else conditions alerts user whether input was valid or invalid.
    // If email input valid, JS code generates new html page.
    if (emailResult) {
        alert("Email address correct. Your resume will now be created.");
        
        // retrieve personal data and career objectives input
        var personalData = document.getElementById("personalData").value;
        var careerGoal = document.getElementById("objectives").value;
        var education = document.getElementById("education").value;

        // retrieves recent job experience dates and experience detail input data from form1
        var jobDate1 = document.getElementById("jobDate1").value;
        var jobDate2 = document.getElementById("jobDate2").value;
        var experience1 = document.getElementById("experience1").value;

        var jobDate3 = document.getElementById("jobDate3").value;
        var jobDate4 = document.getElementById("jobDate4").value;
        var experience2 = document.getElementById("experience2").value;

        var jobDate5 = document.getElementById("jobDate5").value;
        var jobDate6 = document.getElementById("jobDate6").value;
        var experience3 = document.getElementById("experience3").value;

        var jobDate7 = document.getElementById("jobDate7").value;
        var jobDate8 = document.getElementById("jobDate8").value;
        var experience4 = document.getElementById("experience4").value;

        // retrieve <textarea> for jobReferences ID
        var jobReferences = document.getElementById("jobReferences").value;

        // CODE ADDS HTML ELEMENTS HARD-CODED
        // AND COMBINES THE HARD-CODED STRINGS WITH USER DATA POPULATED VARIABLES
        // START HTML OUTPUT CREATION
        var htmlOutput = "<html>\n<head>\n<title>WEB 115 Final Project | Resume output </title> \n";
        htmlOutput += "<link rel=\"stylesheet\" type=\"text/css\" href=\"resumeStyles.css\" /> </head> \n <body> \n";


        // CONTACT INFORMATION OUTPUT
        htmlOutput += "<p> FULL NAME: " + fullName + "</p> \n";
        htmlOutput += "<p> CONTACT ADDRESS: " + contactAddress + "</p> \n";
        htmlOutput += "<p> PHONE#: " + phone + " | EMAIL: " + email + "</p> \n";
        htmlOutput += "<hr class=\"alignThis\" /> \n <br /> \n";
        htmlOutput += "<div id = \"titleLeft\"> PERSONAL DATA: </div> \n";
        htmlOutput += "<div id = \"textRight\">" + personalData + "</div> \n";
        htmlOutput += "<div id = \"titleLeft\"> CAREER OBJECTIVES: </div> \n";
        htmlOutput += "<div id = \"textRight\">" + careerGoal + "</div> \n";
        htmlOutput += "<div id = \"titleLeft\"> EDUCATION: </div> \n";
        htmlOutput += "<div id = \"textRight\">" + education + "</div> \n";

        // EMPLOYMENT EXPERIENCE OUTPUT    
        htmlOutput += "<div id = \"titleLeft\" class=\"addTitleStyles\" > EMPLOYMENT EXPERIENCE</div> <br /> \n";
        htmlOutput += "<div id = \"titleLeft\"> Start Date: " + jobDate1 + "<br /><br />" + "End Date: " + jobDate2 + "</div> \n";
        htmlOutput += "<div id = \"textRight\">" + experience1 + "</div> \n";
        htmlOutput += "<div id = \"titleLeft\"> Start Date: " + jobDate3 + "<br /><br />" + "End Date: " + jobDate4 + "</div> \n";
        htmlOutput += "<div id = \"textRight\">" + experience2 + "</div> \n";
        htmlOutput += "<div id = \"titleLeft\"> Start Date: " + jobDate5 + "<br /><br />" + "End Date: " + jobDate6 + "</div> \n";
        htmlOutput += "<div id = \"textRight\">" + experience3 + "</div> \n";
        htmlOutput += "<div id = \"titleLeft\"> Start Date: " + jobDate7 + "<br /><br />" + "End Date: " + jobDate8 + "</div> \n";
        htmlOutput += "<div id = \"textRight\">" + experience4 + "</div> \n";

        // JOB REFERENCES SECTION OUTPUT
        htmlOutput += "<div id = \"titleLeft\"> JOB REFERENCES: </div> \n";
        htmlOutput += "<div id = \"textRight\">" + jobReferences + "</div> \n";

        // END HTML DOCUMENT OUTPUT
        htmlOutput += "</body> \n </html>";

        // DISPLAY/ WRITE htmlOutput
        resumeWindow = window.open('about:blank','resumePage','width=1024,height=768,left=100,top=50');            
        resumeWindow.document.write(htmlOutput);
        
    } else {
        alert("Invalid Email Address. Please correct email address.");        
        emailField.focus();
        emailField.select();
    } // END If....ElSE STATEMENT to validate email.
                
} // END make_Resume FUNCTION