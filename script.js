async function loadFonts() {
  const font = new FontFace("baloo", "url(BalooBhai2-Medium.ttf)", {
    style: "normal",
    weight: "400",
    stretch: "condensed",
  });
  // wait for font to be loaded
  await font.load();
  // add font to document
  document.fonts.add(font);
  // enable font with CSS class
  document.body.classList.add("fonts-loaded");
}
loadFonts();

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
    if( ( ($(imgInput).val()).indexOf('nochange') ) < 0 ){
      // $(this).append(imgEl)
      mergeSelfie(imgEl.src, textInput.val())
    } else {
      alert('Please Select Image');
      alert(($(imgInput).val()).indexOf('nochange'));
    }
  })
}
    );
// import mergeImages from 'merge-images';

function mergeSelfie(imgURL, textInput){
  // var imgEl = document.createElement('img');
  // // imgEl.src = ($(imgInput).val())
  // $('form').append(imgEl)
  var imageSrc = '';
  var aTag = document.createElement('a');
  $('form').append(aTag);
  aTag.download = "mobile.png";

  mergeImages([
    { src: 'bg.png', x: 0, y: 0 },
    { src: imgURL, x: 280, y: 450 },
  ], {nameText: textInput}).then(b64 => imageSrc = b64).then( b64 => {
    aTag.href = imageSrc;
    return b64;
  } ).then( b64 => {
    aTag.click();
    aTag.remove();  
  } );

}

