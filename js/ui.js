document.addEventListener('DOMContentLoaded', function(){
    // nabvv menu
    const menus = document.querySelectorAll('.side-menu');
    // M is from materilize library then initialize from where to open 
    M.Sidenav.init(menus, {edge: 'right'});
    // add recipe form
     // M is from materilize library then initialize from where to open 
    const forms = document.querySelectorAll('.side-form');
    M.Sidenav.init(forms, {edge: 'left'});
});