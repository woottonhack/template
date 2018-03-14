// Your website's configurations and customizations 
// Do not edit any other files in this repository other than
// this file if you don't understand what you are doing

// Watch out for the quotation marks when modifying - do not
// delete them! You'll break the entire file structure.

// Written by Mingjie Jiang (@mj66) - MIT License

var config = {
    meta: {
        club: "Wootton Hack Club", //Name of your club
        domain: "hack", //Your club domain, for example, if "site.wootton.club", put "site"
        shortDesc: "The best club on the planet", //Brief description about your club. BRIEF!

        // Your club description. If you need want to break lines, append a forward slash
        // right where the line breaks
        desc: "Wootton Hack Club is a new club starting in 2017 at Wootton High School. \
                Members will explore topics in different computer science fields such as \
                game development, algorithms, open source software or other smaller code \
                snippets. They will learn and communicate in order to freely create their \
                own projects, and conduct researches related to the computer engineering \
                field.",
        
        hasLogo: false, //Show your club logo above the "about" section
        logoUrl: "" //A direct link to your logo. Try uploading your image to imgur.com
    },

    meeting: {
        dow: 3, //Date of week [1,7] - Monday=1, Friday=5
        overrideTime: "", //Overridden meeting time
        
        room: "Room 262", //Your meeting location

        showRemind: true, //Show a link to allow people sign up for Remind.com
        remindLink: "https://www.remind.com/join/whs-hack", //Your Remind.com link
        
        topic:"Work on workshops and learn some more Python", //Topic of your meeting
        hasMaterial: false, //Set to false to hide download material button
        material: {
            link: "", //Link to meeting materials, use Google Drive to host the file
            text: "" //Customized text to meeting materials
        }
    },

    announcement: [
        //Copy and paste this block from { to }, to create a new announcement
        //Don't forget about the comma!
        //Contents are HTML enabled.
        {
            content: "Please bring your laptops and install Python 3.x for the next meeting!",
            date: "3/10"
        },
    ],

    //Display an image banner on top of the page
    banner: {
        show: true, //Set to false to hide banner

        //A direct link to your banner image. 
        //Try uploading your image to imgur.com and get the link.
        imageUrl: "https://mingjie.info/wp-content/uploads/2018/02/upload-1516256672-1024x616.png"
    },

    customize: {
        siteColor: "#e42d42;", //Site primary color in hex

        //Navbar customization
        navbar: {
            colored: true, //Color navbar with primary color
            textWhite: true //Make navbar title white
        },
    },

    //Your social media links!
    social: {
        customHeader: "", //Custom header for the social media box (default value "Follow us on social media!")
        facebook: "https://facebook.com/mdhackclub",
        twitter: "",
        instagram: "",
        email: ""
    },

    master: { //Master Data: Do not change
        version: "0.1.1",
        link: "https://get.wootton.club"
    }
}