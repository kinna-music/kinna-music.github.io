/*
   Document:      kwf.js
   Date started:  06Oct2014
   By:            Roland Whitehead
   Purpose:       Provide basic js functionality to kinna.co.uk
   Requires:      Nothing just yet
   Copyright:     Kinna
   
   Last Changed:  $Date$ $Rev$ by $Author$
   
   Notable modifications:
   Date       By    Details
   =========  ====  ============================================================
   03Jan2024  RW    New
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

function kinnaAddEventListener(el, eventName, handler) {
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

function kinnaRemoveEventListener(el, eventName, handler) {
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
        kinnaAddEventListener(b, 'click', hide_nav);
    }
    return false;
}

function hide_nav(e){
    e.stopPropagation();
    // hideById('menu_work_sub');
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
        kinnaRemoveEventListener(b, 'click', hide_nav);
    }
    return false;
}


function goToUrl(addr){
    if (addr != null ) {
        window.location=addr;
    }
    return false;
}
