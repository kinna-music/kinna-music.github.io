/*
   Document:      kwf.js
   Date started:  06Oct2014
   By:            Roland Whitehead
   Purpose:       Provide basic js functionality to kwf.biz
   Requires:      Nothing just yet
   Copyright:     Katie Walker
   
   Last Changed:  $Date$ $Rev$ by $Author$
   
   Notable modifications:
   Date       By    Details
   =========  ====  ============================================================
   06Oct2014  RW    New
   01Dec2014  RW    Added in hideById and showById
   03Jul2020  RW    Add is_touch_device
 */

/**** Private interface ****/

function is_touch_device() {  
    try {  
        document.createEvent("TouchEvent");  
        return true;  
    } catch (e) {  
        return false;  
    }  
}

function kwfAddEventListener(el, eventName, handler) {
    /* Function to add events post DOM load */
    if (el != null) {
        if (el.addEventListener) {
            el.addEventListener(eventName, handler);
        } else {
            el.attachEvent('on' + eventName, function(){
                handler.call(el);
            });
        }
    }
    return false;
}

function kwfRemoveEventListener(el, eventName, handler) {
/* Function to add events post DOM load */
    if (el != null) {
        if (el.removeEventListener) {
            el.removeEventListener(eventName, handler, false);
        } else {
            el.detachEvent('on' + eventName, handler);
        }
    }
    return false;
}


function selectMenus(theMenus) {
// Function to add class 'selected' to current menu items
    /* var noOfMenus = theMenus.length;
     * for (var i = 0; i < noOfMenus; i++) {
     *     var el=document.getElementById(theMenus[i]);
     *     if (el.classList)
     *         el.classList.add('selected');
     *     else
     *         el.className += ' ' + 'selected';
     * }
     * return false; */
}

function showById(el_id){
    var el = document.getElementById(el_id);
    if (el != null) {
        if (el.classList)
            el.classList.add('show');
        else
            el.className += ' ' + 'show';
    }
    else {
        alert(el_id + 'was not found');
    }
    return false;
}

function hideById(el_id){
    var el = document.getElementById(el_id);
    if (el != null ) {
        if (el.classList)
            el.classList.remove('show');
        else
            el.show = el.show.replace(new RegExp('(^|\\b)' + show.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    else {
        alert(el_id + ' was not found');
    }
    return false;
}

function toggleById(el_id){
    var el = document.getElementById(el_id);
    if (el != null ) {
        el.classList.toggle('show');
    }
    else {
        alert(el_id + ' was not found');
    }
    return false;
}

function show_nav(e){
    e.stopPropagation();
    showById('nav');
    /*var el = document.getElementById('nav');
    if (el != null ) {
        el.classList.add('show');
    }
    else {
        alert(el_id + ' was not found');
    }*/
    var b = document.body; 
    if (b != null) {
        kwfAddEventListener(b, 'click', hide_nav);
    }
    return false;
}

function hide_nav(e){
    e.stopPropagation();
    hideById('menu_work_sub');
    hideById('nav');
    /*var el = document.getElementById('nav');
    if (el != null ) {
        el.classList.remove('show');
    }
    else {
        alert(el_id + ' was not found');
    }*/
    var b = document.body;
    if (b != null) {
        kwfRemoveEventListener(b, 'click', hide_nav);
    }
    return false;
}



function flipCell(e){
   /* e.preventDefault(); */
    var el_list = this.getElementsByClassName('cell_back');
    if (el_list.length > 0 ) {
        if (el_list[0].classList)
            el_list[0].classList.add('show');
        else
            el_list[0].className += ' ' + 'show';
    }
    /* return false; */
}

function unflipCell(e, action){
    if (action != "Go") 
        e.preventDefault();
    var el_list = this.getElementsByClassName('cell_back');
    if (el_list.length > 0 ) {
        if (el_list[0].classList)
            el_list[0].classList.remove('show');
        else
            el_list[0].show = el_list[0].show.replace(new RegExp('(^|\\b)' + show.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    /* return false; */
}

function goToUrl(addr){
    if (addr != null ) {
        window.location=addr;
    }
    return false;
}
