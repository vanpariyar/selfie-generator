jQuery(document).ready(function(){
  jQuery('#selfie_form').submit(function(e){
    e.preventDefault();
    var imgInput = $(this).find('input[name="profile_img"]');
    var textInput = $(this).find('input[type="text"]')
    var imgEl = document.createElement('img');
    // if (imgInput.files && imgInput.files[0]) {
    //   const reader = new FileReader();
    //   reader.onload = (e) => {
    //     imgEl.src = e.target.result;
    //   }
    //   reader.readAsDataURL(imgInput.files[0]);
    //   $(this).html(imgEl)
    // }
    imgEl.src = ($(imgInput).val())
    // $(this).append(imgEl)
    mergeSelfie(imgEl.src, textInput.val())
  })
}
    );
// import mergeImages from 'merge-images';

function mergeSelfie(imgURL, textInput){
  var imgEl = document.createElement('img');
  // imgEl.src = ($(imgInput).val())
  $('form').append(imgEl)
  mergeImages([
    { src: 'bg.png', x: 0, y: 0 },
    { src: imgURL, x: 380, y: 450 },
  ], {nameText: textInput}).then(b64 => imgEl.src = b64);
}

