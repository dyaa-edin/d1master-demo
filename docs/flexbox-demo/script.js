$(document).ready(function(){
  
  // SELECTED CLASS
  
  $('.property').on('click', function() {  
  $(this).addClass('selected').siblings().removeClass('selected');
  });
  
  // FLEX-DIRECTION 
  
  $('.f-d-r').on('click', function() {
    $('.demo-wrap').removeClass('fd-row fd-row-reverse fd-column fd-column-reverse').addClass('fd-row');
  });
  $('.f-d-r-r').on('click', function() {
    $('.demo-wrap').removeClass('fd-row fd-row-reverse fd-column fd-column-reverse').addClass('fd-row-reverse');
  });
  $('.f-d-c').on('click', function() {
    $('.demo-wrap').removeClass('fd-row fd-row-reverse fd-column fd-column-reverse').addClass('fd-column');
  });
  $('.f-d-c-r').on('click', function() {
    $('.demo-wrap').removeClass('fd-row fd-row-reverse fd-column fd-column-reverse').addClass('fd-column-reverse');
  });  
  
  // JUSTIFY-CONTENT 
  
   $('.j-c-f-s').on('click', function() {
    $('.demo-wrap').removeClass('jc-flex-start jc-flex-end jc-center jc-space-between jc-space-around').addClass('jc-flex-start');
  });
  $('.j-c-f-e').on('click', function() {
    $('.demo-wrap').removeClass('jc-flex-start jc-flex-end jc-center jc-space-between jc-space-around').addClass('jc-flex-end');
  });
  $('.j-c-c').on('click', function() {
    $('.demo-wrap').removeClass('jc-flex-start jc-flex-end jc-center jc-space-between jc-space-around').addClass('jc-center');
  });
  $('.j-c-s-b').on('click', function() {
    $('.demo-wrap').removeClass('jc-flex-start jc-flex-end jc-center jc-space-between jc-space-around').addClass('jc-space-between');
  });
  $('.j-c-s-a').on('click', function() {
    $('.demo-wrap').removeClass('jc-flex-start jc-flex-end jc-center jc-space-between jc-space-around').addClass('jc-space-around');
  });

  // ALIGN-ITEMS 
  
  $('.a-i-f-s').on('click', function() {
    $('.demo-wrap').removeClass('ai-flex-start ai-flex-end ai-stretch ai-center ai-baseline').addClass('ai-flex-start');
  });
  $('.a-i-f-e').on('click', function() {
    $('.demo-wrap').removeClass('ai-flex-start ai-flex-end ai-stretch ai-center ai-baseline').addClass('ai-flex-end');
  });
  $('.a-i-s').on('click', function() {
    $('.demo-wrap').removeClass('ai-flex-start ai-flex-end ai-stretch ai-center ai-baseline').addClass('ai-stretch');
  });
  $('.a-i-c').on('click', function() {
    $('.demo-wrap').removeClass('ai-flex-start ai-flex-end ai-stretch ai-center ai-baseline').addClass('ai-center');
  });
});