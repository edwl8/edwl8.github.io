let menu_active = undefined;
let menu = {
    'profile':document.getElementById('menu-icon-profile'),
    'study': document.getElementById('menu-icon-study'),
    'game': document.getElementById('menu-icon-game'),
    'to-do':document.getElementById('menu-icon-to-do'),
    'motivation':document.getElementById('menu-icon-motivation'),
    'events':document.getElementById('menu-icon-events'),
    'setting':document.getElementById('menu-icon-setting'),
}
let wrapper = {
    'profile':document.getElementById('wrapper-profile'),
    'study': document.getElementById('wrapper-study'),
    'game': document.getElementById('wrapper-game'),
    'to-do':document.getElementById('wrapper-to-do'),
    'motivation':document.getElementById('wrapper-motivation'),
    'events':document.getElementById('wrapper-events'),
    'setting':document.getElementById('wrapper-setting'),
}
let sections = {
    'study': document.getElementById('study-sections'),
    'to-do':document.getElementById('to-do-sections'),
    'events':document.getElementById('events-sections'),
    'setting':document.getElementById('setting-sections'),
}
for(let k in menu) {
    menu[k].addEventListener('click',() => {
        if(menu_active != undefined){
            menu[menu_active].style.fill = 'grey';
            wrapper[menu_active].style.zIndex = 'auto';
        }
        menu[k].style.fill = 'white';
        wrapper[k].style.zIndex = '1';
        if(sections.hasOwnProperty(k)) {
            document.getElementById('menu-button-sections').style.display = 'block';
        } else {
            document.getElementById('menu-button-sections').style.display = 'none';
        }
        menu_active = k;
    });
}
function set_color_for_wrapper(k,color) {
    wrapper[k].style.background = color;
}
function hide_study_list() {
    if(sections[menu_active].style.display != 'none') {
        sections[menu_active].style.display = 'none';
        document.getElementById(menu_active).style.width = '100%';
        document.getElementById(menu_active).style.left = '0';
    } else if(sections[menu_active].style.display == 'none') {
        sections[menu_active].style.display = 'block';
        document.getElementById(menu_active).style.width = 'calc(100% - 300px)';
        document.getElementById(menu_active).style.left = '300px';
    }
}