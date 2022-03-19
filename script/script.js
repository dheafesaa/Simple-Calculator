function insrt(num){
  if( $('.calculator__display input').val()==0)
   $('.calculator__display input').val('');
  $('.calculator__display input').val($('.calculator__display input').val()+num);
}

function equal(){
  $('.calculator__display input').val(eval($('.calculator__display input').val()));
}

function cl(){
  $('.calculator__display input').val(0);
}
