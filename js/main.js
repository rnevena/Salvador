window.onload = function() {
   
    // responsive navigacija

    $(".sakriven").click(function() {
        $("#nav ul").slideToggle();
        $("#nav").css("float", "none");
        $("#nav ul ul").css("display", "none");
    });

    $("#nav ul li").click(function () {
        $("#nav ul ul").slideUp();
        $(this).find('ul').stop().slideToggle();
       });
       
    $(window).resize(function(){
        if($(window).width()>768) {
            $("#nav ul").removeAttr('style');
            $("#nav").css("float", "right");
        }
    });

    // mouseover animacija za nav

    $(function(){
        $("#nav ul").on('mouseover', 'li', function(){
            this.style.backgroundColor = 'indianred';
        }).on('mouseout', 'li', function(){
            this.style.backgroundColor = 'salmon';
        })
    });

    // slajder

    var selektorSlika = document.querySelectorAll("#js-slider img");
    var pauzaIzmedjuSlajdova = 3000;
    var trenutnaSlika = 0;

    selektorSlika[trenutnaSlika].style.opacity = 1;
    setInterval(sledecaSlika, pauzaIzmedjuSlajdova);

    function sledecaSlika() {
    selektorSlika[trenutnaSlika].style.opacity = 0;
    trenutnaSlika = (trenutnaSlika+1) % selektorSlika.length;
    selektorSlika[trenutnaSlika].style.opacity = 1;
    }

    // dinamička galerija

    var poljeSlike = document.getElementById("gallerycontent");
    var slike = [{velika:"images/gallerypic3.jpg", datalightbox:"mygallery", datatitle:"Danielle, age 10", mala:"images/gallerypic3small.jpg", class:"gallery_images camp2017", alt:"Art class - magic bus"},
                {velika:"images/gallerypic5.jpg", datalightbox:"mygallery", datatitle:"Jacob, age 10", mala:"images/gallerypic5small.jpg", class:"gallery_images camp2018", alt:"Art class - picnic"},
                {velika:"images/gallerypic6.jpg", datalightbox:"mygallery", datatitle:"Snowman project", mala:"images/gallerypic6small.jpg", class:"gallery_images christmas2018", alt:"Art class - snowmen"},
                {velika:"images/gallerypic7.jpeg", datalightbox:"mygallery", datatitle:"Carmen, age 9", mala:"images/gallerypic7small.jpeg", class:"gallery_images camp2017", alt:"Art class - giraffe"},
                {velika:"images/gallerypic8.jpg", datalightbox:"mygallery", datatitle:"Summer camp '17", mala:"images/gallerypic8small.jpg", class:"gallery_images camp2018", alt:"Art class - drawing with hands"},
                {velika:"images/gallerypic9.jpg", datalightbox:"mygallery", datatitle:"Gabbie, age 12", mala:"images/gallerypic9small.jpg", class:"gallery_images camp2018", alt:"Art class - tiger and elephant"},
                {velika:"images/gallerypic10.jpg", datalightbox:"mygallery", datatitle:"Anna, age 9", mala:"images/gallerypic10small.jpg", class:"gallery_images camp2018", alt:"Art class - sleepy bird"},
                {velika:"images/gallerypic11.jpg", datalightbox:"mygallery", datatitle:"Kim and Josh, age 7 and 8", mala:"images/gallerypic11small.jpg", class:"gallery_images camp2019", alt:"Art class - kids showing their art"},
                {velika:"images/gallerypic12.jpg", datalightbox:"mygallery", datatitle:"Maria, age 8", mala:"images/gallerypic12small.jpg", class:"gallery_images camp2017", alt:"Art class - whale"},
                {velika:"images/gallerypic13.jpg", datalightbox:"mygallery", datatitle:"Jake and Kate, siblings age 6 and 5", mala:"images/gallerypic13small.jpg", class:"gallery_images christmas2018", alt:"Art class - snowflake cut-outs"},
                {velika:"images/gallerypic14.jpg", datalightbox:"mygallery", datatitle:"Group potato stamp art project", mala:"images/gallerypic14small.jpg", class:"gallery_images camp2019", alt:"Art class - potato stamps glitter"},
                {velika:"images/gallerypic15.jpg", datalightbox:"mygallery", datatitle:"Potatoes used in art project", mala:"images/gallerypic15small.jpg", class:"gallery_images camp2019", alt:"Art class - potato stamps"},
                ];

    for (var i=0; i<slike.length; i++) {
        poljeSlike.innerHTML += "<a href='"+slike[i].velika+"' data-lightbox='"+slike[i].datalightbox+"' data-title='"+slike[i].datatitle+"'><img src='"+slike[i].mala+"' class='"+slike[i].class+"' alt='"+slike[i].alt+"'></a>"
    }

    // filtracija galerije

    $(".category").click(function(){
        var kategorija = $(this).attr('id');

        if(kategorija == 'all') {
            $('.gallery_images').addClass('sakrij');
            setTimeout(function(){
                $('.gallery_images').removeClass('sakrij');
            },100);
        }
        else {
            $('.gallery_images').addClass('sakrij');
            setTimeout(function(){
                $('.' + kategorija).removeClass('sakrij');
            },100);
        }
    });

    // dinamička forma

    var f = document.createElement("form");
    f.setAttribute('action',"obrada.php");
    f.setAttribute('method',"get");

    var item1Label = document.createElement("label");
    item1Label.setAttribute('class', "all-labels");
    item1Label.innerHTML = "Parent's full name";

    var item1 = document.createElement("input");
    item1.setAttribute('type', "text");
    item1.setAttribute('id', "parents-full-name");
    item1.setAttribute('class', "all-items");

    var item1Error = document.createElement("span");
    item1Error.setAttribute('id', "parent-full-name-error");
    item1Error.setAttribute ('class', "all-errors");

    var item2Label = document.createElement("label");
    item2Label.setAttribute('class', "all-labels");
    item2Label.innerHTML = "E-mail";

    var item2 = document.createElement("input");
    item2.setAttribute('type', "text");
    item2.setAttribute('id', "email");
    item2.setAttribute('class', "all-items");

    var item2Error = document.createElement("span");
    item2Error.setAttribute('id', "email-error");
    item2Error.setAttribute ('class', "all-errors");

    var item3Label = document.createElement("label");
    item3Label.setAttribute('class', "all-labels");
    item3Label.innerHTML = "Phone number";

    var item3 = document.createElement("input");
    item3.setAttribute('type', "text");
    item3.setAttribute('id', "phone-number");
    item3.setAttribute('class', "all-items");
    item3.setAttribute('placeholder', "06x-xxx-xxx(x)");

    var item3Error = document.createElement("span");
    item3Error.setAttribute('id', "phone-number-error");
    item3Error.setAttribute('class', "all-errors");

    var item4Label = document.createElement("label");
    item4Label.setAttribute('class', "all-labels");
    item4Label.innerHTML = "Child's name";

    var item4 = document.createElement("input");
    item4.setAttribute('type', "text");
    item4.setAttribute('id', "childs-name"); // moraće class ako dupliramo element zbog dropdown? ili ne?
    item4.setAttribute('class', "all-items");

    var item4Error = document.createElement("span");
    item4Error.setAttribute('id', "child-full-name-error");
    item4Error.setAttribute('class', "all-errors");

    var item5Label = document.createElement("label");
    item5Label.setAttribute('class', "all-labels");
    item5Label.innerHTML = "Child's birth date";

    var item5 = document.createElement("input");
    item5.setAttribute('type', "text");
    item5.setAttribute('id', "childs-birth-date");
    item5.setAttribute('class', "all-items");
    item5.setAttribute('placeholder', "dd-mm-yyyy");

    var item5Error = document.createElement("span");
    item5Error.setAttribute('id', "birth-date-error");
    item5Error.setAttribute('class', "all-errors");

    var item6Label = document.createElement("label");
    item6Label.setAttribute('class', "all-labels");
    item6Label.innerHTML = "I am enrolling my child in a";

    var childrenEnroll = ["Select", "Camp", "Workshop"];
    var childList = document.createElement("select");
    childList.setAttribute('id', "children-enroll");

    for (var i=0; i<childrenEnroll.length; i++) {
        var option = document.createElement("option");
        option.value = childrenEnroll[i];
        option.text = childrenEnroll[i];
        childList.appendChild(option);
    }

    var item6Error = document.createElement("span");
    item6Error.setAttribute('id', "list-error");
    item6Error.setAttribute('class', "all-errors");

    var item7Label = document.createElement("label");
    item7Label.setAttribute('class', "all-labels");
    item7Label.innerHTML= "If there are any medical or behavioural conditions we should know about, please state them below:";

    var item7 = document.createElement("textarea");
    item7.setAttribute('cols', 65);
    item7.setAttribute('rows', 7);
    item7.setAttribute('id', "tekstpolje")

    var item8 = document.createElement("input");
    item8.setAttribute('type', "button");
    item8.setAttribute('id', "btnsubmit");
    item8.setAttribute('value', "SUBMIT");

    this.document.getElementById('contact-container').appendChild(f);
    this.document.getElementById('contact-container').appendChild(item1Label);
    this.document.getElementById('contact-container').appendChild(item1);
    this.document.getElementById('contact-container').appendChild(item1Error);
    this.document.getElementById('contact-container').appendChild(item2Label);
    this.document.getElementById('contact-container').appendChild(item2);
    this.document.getElementById('contact-container').appendChild(item2Error);
    this.document.getElementById('contact-container').appendChild(item3Label);
    this.document.getElementById('contact-container').appendChild(item3);
    this.document.getElementById('contact-container').appendChild(item3Error);
    this.document.getElementById('contact-container').appendChild(item4Label);
    this.document.getElementById('contact-container').appendChild(item4);
    this.document.getElementById('contact-container').appendChild(item4Error);
    this.document.getElementById('contact-container').appendChild(item5Label);
    this.document.getElementById('contact-container').appendChild(item5);
    this.document.getElementById('contact-container').appendChild(item5Error);
    this.document.getElementById('contact-container').appendChild(item6Label);
    this.document.getElementById('contact-container').appendChild(childList);
    this.document.getElementById('contact-container').appendChild(item6Error);
    this.document.getElementById('contact-container').appendChild(item7Label);
    this.document.getElementById('contact-container').appendChild(item7);
    this.document.getElementById('contact').appendChild(item8);
    this.document.getElementById('btnsubmit').addEventListener('click',provera);

    // provera unosa
    
    function provera(){

        var inputParentFullName = document.getElementById("parents-full-name");
        var reName = /^([A-Z][a-z]{2,15})(\s[A-Z][a-z]{2,15})+$/;

        if (!reName.test(inputParentFullName.value) || inputParentFullName.length==0) {
            inputParentFullName.classList.add("error");
            document.getElementById("parent-full-name-error").innerHTML="Please enter a valid first and last name.";
        }
        else {
            inputParentFullName.classList.remove("error");
            document.getElementById("parent-full-name-error").innerHTML=" ";
        }

        var inputEmail = document.getElementById("email");
        var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        if(!reEmail.test(inputEmail.value) || inputEmail.length==0) {
            inputEmail.classList.add("error");
            document.getElementById("email-error").innerHTML="Please enter a valid email address."
        }
        else {
            inputEmail.classList.remove("error");
            document.getElementById("email-error").innerHTML=" ";
        }

        var inputPhone = document.getElementById("phone-number");
        var rePhone = /^06[0-9]\-[0-9]{3}\-[0-9]{3,4}$/;

        if (!rePhone.test(inputPhone.value) || inputPhone.length==0) {
            inputPhone.classList.add("error");
            document.getElementById("phone-number-error").innerHTML="Please enter a valid number format."
        }
        else {
            inputPhone.classList.remove("error");
            document.getElementById("phone-number-error").innerHTML=" ";
        }

        var inputChildFullName = document.getElementById("childs-name");
        var reName = /^([A-Z][a-z]{2,15})(\s[A-Z][a-z]{2,15})+$/;

        if (!reName.test(inputChildFullName.value) || inputChildFullName.length==0) {
            inputChildFullName.classList.add("error");
            document.getElementById("child-full-name-error").innerHTML="Please enter a valid first and last name.";
        }
        else {
            inputChildFullName.classList.remove("error");
            document.getElementById("child-full-name-error").innerHTML=" ";
        }

        var inputBirthDate = document.getElementById("childs-birth-date");
        var reBirthDate = /^(0[1-9]|[12][\d]|3[01])\-(0[1-9]|1[012])\-(19[\d]{2}|20[01][\d])$/

        if (!reBirthDate.test(inputBirthDate.value)) {
            inputBirthDate.classList.add("error");
            document.getElementById("birth-date-error").innerHTML="Please enter a valid date format.";
        }
        else {
            inputBirthDate.classList.remove("error");
            document.getElementById("birth-date-error").innerHTML=" ";
        }

        var inputChildrenEnroll = document.getElementById("children-enroll");
        var selectedOption = inputChildrenEnroll.options[inputChildrenEnroll.selectedIndex].text;

        if (selectedOption=="Select") {
            inputChildrenEnroll.classList.add("error");
            document.getElementById("list-error").innerHTML="Select a valid option.";
        }
        else {
            inputChildrenEnroll.classList.remove("error");
            document.getElementById("list-error").innerHTML=" ";
        }
        
    }

    // skrolovanje i animacija jquery

    $(".btnenroll").click(function() {
        $('html,body').animate({
            scrollTop: $("#contact").offset().top},
            'slow');
    });

    $(".nav-home").click(function() {
        $('html,body').animate({
            scrollTop: $("#slider").offset().top},
            'slow');
    });

    $(".nav-camps").click(function() {
        $('html,body').animate({
            scrollTop: $("#camps").offset().top},
            'slow');
        animacija();
    });

    $(".nav-workshops").click(function() {
        $('html,body').animate({
            scrollTop: $("#workshops").offset().top},
            'slow');
        animacija();
    });

    $(".nav-gallery").click(function() {
        $('html,body').animate({
            scrollTop: $("#gallery").offset().top},
            'slow');
    });

    $(".nav-contact").click(function() {
        $('html,body').animate({
            scrollTop: $("#contact").offset().top},
            'slow');
    });

    $(".nav-author").click(function() {
        $('html,body').animate({
            scrollTop: $("#author").offset().top},
            'slow');
        animacija();
    });

    // fade animacija 

    var vidljivost = 0;
    function animacija(){
        if(vidljivost<1){
            vidljivost = vidljivost + 0.1;
            setTimeout(animacija,100);
            document.getElementsByClassName("container")[0].style.opacity=vidljivost;
            document.getElementsByClassName("container")[1].style.opacity=vidljivost;
            document.getElementsByClassName("container")[2].style.opacity=vidljivost;
        } else {
            vidljivost = 0;
        }
    }

    // dinamičke ikonice u futeru

    var poljeIkonice = document.getElementById("ikonice");

    var ikone = [{link:"https://www.facebook.com/", class:"fab fa-facebook-f"},
    {link:"https://www.instagram.com/", class:"fab fa-instagram"},
    {link:"https://www.youtube.com/", class:"fab fa-youtube"},
    {link:"sitemap.xml", class:"fa fa-sitemap"},
    {link:"dokumentacija.pdf", class:"fa fa-file"}];
    
    for (var i=0; i<ikone.length; i++) {
        poljeIkonice.innerHTML += "<a href='"+ikone[i].link+"'><i class='"+ikone[i].class+"'></i></a>"
    }

    // hover efekat za fa fa ikonice

    $(function(){
        $("#ikonice").on('mouseover', 'i', function(){
            this.style.color = 'indianred';
        }).on('mouseout', 'i', function(){
            this.style.color = 'maroon';
        })
    });

}
