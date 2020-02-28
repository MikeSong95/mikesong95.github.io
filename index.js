/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    $("#projects-section").hide();
    $("#experience-section").hide();
    $("#nav-icon").toggleClass('flip');
    $("#nav-icon").attr('onclick', 'closeNav()');
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    $("#nav-icon").show();
    $("#nav-icon").toggleClass('flip');
    $("#nav-icon").attr('onclick', 'openNav()');
    $("#nav-links").children().removeClass("selected");;
    $("#home-section").fadeIn();
    $("#experience-section").fadeOut();
    $("#projects-section").fadeOut();
    $(".footer").fadeIn();
  }


function openSection(e) {
    const navs = $("#nav-links").children();
    $("#nav-icon").hide();
    $(".footer").fadeOut();
    $("#home-section").fadeOut();

    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginRight = "0";
    if (!$("#"+e.currentTarget.id).hasClass("selected")) {
        navs.removeClass("selected");
        $("#"+e.currentTarget.id).addClass("selected");
    } 

    if (e.currentTarget.id === "experience-link") {
        $("#projects-section").hide();
        $("#experience-section").show();
        $("#experience-section .card").hide().fadeIn(1000)

    } else if (e.currentTarget.id === "projects-link") {
        $("#experience-section").hide();
        $("#projects-section").show();
        $("#projects-section .card-deck").hide().fadeIn(1000)    
    }

    $("#nav-icon").toggleClass('flip');
    $("#nav-icon").attr('onclick', 'closeNav()');
}