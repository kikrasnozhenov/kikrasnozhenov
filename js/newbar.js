
/* ONLY FOR a 4th PERSON (as in task) :)..used without getelementsbyclassname*/

var open = document.getElementById('pers_contacts_bar'),
    dropContent = document.getElementById('dropContent');


open.addEventListener('click', function(){
    var open = document.getElementById('pers_contacts_bar')
    dropContent.classList.toggle("show");
});
