function populate(s1,s2){
    var s1 = document.getElementById(s1);
    var d = document.getElementById(s2);
    d.innerHTML = "";
    var start = "<form method='POST' action='/edit'>\
    <input type='hidden', name='_method' value='POST'>\
    <label>Section Header:</label> \
    <input class='input-header' name='section_header'>\
    <br>\
    <input class='input-header' name='section_css' value='review-section' type='hidden'>";
    var end = "<input type='submit'>\
    </form>;"
    if(s1.value == "main_section"){
        d.innerHTML = start+ "\
        <input class='input-header' name='section_css' value='main-section' type='hidden'>\
        <label>Section Image:</label> \
        <input class='input-header' name='section_img'>\
        <br>\
        <label>Section Text:</label> \
        <textarea class='textarea-l' name='section_text'></textarea>\
        <br>\
        <label>Section Button:</label> \
        <input type='checkbox' name='section_button_exists'>\
        <label>Button Type:</label> \
        <input class='input-header' name='section_button_type'>\
        <label>Button Link:</label> \
        <input class='input-header' name='section_button_link'>" + end;
    } else if(s1.value == "side_section"){
        d.innerHTML = start+"\
        <input class='input-header' name='section_css' value='side-section' type='hidden'>\
        <label>Section Image:</label> \
        <input class='input-header' name='section_img'>\
        <br>\
        <label>Section Text:</label> \
        <textarea class='textarea-l' name='section_text'></textarea>\
        <br>\
        <label>Section Button:</label> \
        <input type='checkbox' name='section_button_exists'>\
        <label>Button Type:</label> \
        <input class='input-header' name='section_button_type'>\
        <label>Button Link:</label> \
        <input class='input-header' name='section_button_link'>"+end;
    } else if(s1.value == "review_section"){
        d.innerHTML = start+"\
        <input class='input-header' name='section_css' value='review-section' type='hidden'>\
        <div class='main-page-review-section-body-header'> \
            <label class='input-label'>  Name: </label>\
            <input class='input-header' name='review_header'>\
        </div>\
        <div class='main-page-review-section-body-stars'>\
            <label class='input-label'>  Review:</label>\
            <textarea class='textarea-s' name='review_text'></textarea>\
            <br>\
            <label class='input-label'>  Profile Image:</label>\
            <input class='input-header' name='review_img'>\
            <br>\
            <label class='input-label'>  Stars:</label>\
            <input class='input-header' name='review_stars'>\
        </div>\
        <div class='main-page-review-section-body-header'> \
            <label class='input-label'>  Name: </label>\
            <input class='input-header' name='review_header'>\
        </div>\
        <div class='main-page-review-section-body-stars'>\
            <label class='input-label'>  Review:</label>\
            <textarea class='textarea-s' name='review_text'></textarea>\
            <br>\
            <label class='input-label'>  Profile Image:</label>\
            <input class='input-header' name='review_img'>\
            <br>\
            <label class='input-label'>  Stars:</label>\
            <input class='input-header' name='review_stars'>\
        </div>"+end;
    } else if(s1.value == "tripleItem_section"){
    d.innerHTML = start+"\
    <section class='other-page-triple-item-section'>\
    <section class='other-page-triple-item-section-div'>\
      <header class='other-page-triple-item-section-header'>\
        <h2>Hello</h2>\
        <article class='other-page-triple-item-section-body'>\
            <img src='src' alt='PROFILE PHOTO' class='other-page-triple-item-section-icon'/>\
                <span> </span>\
        </article>\
      </header>\
    </section>\
  "+end;
    } else if(s1.value == "review_section"){
        d.innerHTML = start+"\
        <section class='other-page-triple-item-section'>\
        <section class='other-page-triple-item-section-div'>\
          <header class='other-page-triple-item-section-header'>\
            <h2>Hello</h2>\
            <article class='other-page-triple-item-section-body'>\
                <img src='src' alt='PROFILE PHOTO' class='other-page-triple-item-section-icon'/>\
                    <span> </span>\
            </article>\
          </header>\
        </section>\
      "+end;
}

// function clickedButton(id){
//     var el = document.getElementsByClassName(id);
//     console.log(el.parentNode.firstChild.innerHTML());
// }

// "\
// form(method='POST' action='/edit')\
//   input(type='hidden', name='_method' value='POST')\
//   input(class='input-header' name='section_header')\
//   br\
//   input(class='input-header' name='section_css' value='main-section' type='hidden')\
//   input(class='input-header' name='section_img')\
//   br\
//   textarea(class='textarea-l' name='section_text')\
//   br\
//   input(type='checkbox' name='section_button_exists')\
//   input(class='input-header' name='section_button_type' value=value.content.button.type)\
//   input(class='input-header' name='section_button_link' value=value.content.button.link)"
// "\
// <form method='POST' action='/edit'>\
//   <input type='hidden', name='_method' value='POST'>\
//   <input class='input-header' name='section_header'>\
//   <br>\
//   <input class='input-header' name='section_css' value='main-section' type='hidden'>\
//   <input class='input-header' name='section_img'>\
//   <br>\
//   <textarea class='textarea-l' name='section_text'>\
//   <br>\
//   <input type='checkbox' name='section_button_exists'>\
//   <input class='input-header' name='section_button_type'>\
//   <input(class='input-header' name='section_button_link'>\
// </form>"






// var dragSrcEl = null;

// function handleDragStart(e) {
//   // Target (this) element is the source node.
//   dragSrcEl = this;

//   e.dataTransfer.effectAllowed = 'move';
//   e.dataTransfer.setData('text/html', this.outerHTML);

//   this.classList.add('drag-list-item');
// }
// function handleDragOver(e) {
//   if (e.preventDefault) {
//     e.preventDefault(); // Necessary. Allows us to drop.
//   }
//   this.classList.add('list-over');

//   e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

//   return false;
// }

// function handleDragEnter(e) {
//   // this / e.target is the current hover target.
// }

// function handleDragLeave(e) {
//   this.classList.remove('list-over');  // this / e.target is previous target element.
// }

// function handleDrop(e) {
//   // this/e.target is current target element.

//   if (e.stopPropagation) {
//     e.stopPropagation(); // Stops some browsers from redirecting.
//   }

//   // Don't do anything if dropping the same column we're dragging.
//   if (dragSrcEl != this) {
//     // Set the source column's HTML to the HTML of the column we dropped on.
//     //alert(this.outerHTML);
//     //dragSrcEl.innerHTML = this.innerHTML;
//     //this.innerHTML = e.dataTransfer.getData('text/html');
//     this.parentNode.removeChild(dragSrcEl);
//     var dropHTML = e.dataTransfer.getData('text/html');
//     this.insertAdjacentHTML('beforebegin',dropHTML);
//     var dropElem = this.previousSibling;
//     addDnDHandlers(dropElem);
    
//   }
//   this.classList.remove('list-over');
//   return false;
// }

// function handleDragEnd(e) {
//   // this/e.target is the source node.
//   this.classList.remove('list-over');

//   /*[].forEach.call(cols, function (col) {
//     col.classList.remove('over');
//   });*/
// }

// function addDnDHandlers(elem) {
//   elem.addEventListener('dragstart', handleDragStart, false);
//   elem.addEventListener('dragenter', handleDragEnter, false)
//   elem.addEventListener('dragover', handleDragOver, false);
//   elem.addEventListener('dragleave', handleDragLeave, false);
//   elem.addEventListener('drop', handleDrop, false);
//   elem.addEventListener('dragend', handleDragEnd, false);

// }

// var cols = document.querySelectorAll('.section-list .section-list-item');
// [].forEach.call(cols, addDnDHandlers);

// /*list-over; drag-list-item*/