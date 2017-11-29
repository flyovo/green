function formSubmit(){
  var regexText = /^[가-힣a-zA-Z\s]+$/;
  var regexPhone = /^[0-9-]{5,15}$/;
  var regexMail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  var formData = $('form').serializeArray();

  if(!regexText.test(formData[0].value) || formData[0].value==''){
    alert('이름을 입력해주세요.');
    return false;
  }
  if(!regexPhone.test(formData[1].value) || formData[1].value==''){
    alert('핸드폰 번호를 확인해주세요.');
    return false;
  }
  if(!regexMail.test(formData[2].value) || formData[2].value==''){
    alert('이메일 주소를 확인해주세요.');
    return false;
  }
  if(formData[3].value==''){
    alert('제목을 입력해주세요.');
    return false;
  }
  if(formData[4].value==''){
    alert('내용을 입력해주세요.');
    return false;
  }
  sendEmail();
}

function sendEmail(){
  var url = "http://api.greenearthkorea.co.kr:9000/mail";
  var formData = $('form').serializeArray();
  var template = "<html><head></head><body>" +
        "<div> GreenEarth 문의 내용 </div>" +
        "<div> ================== </div>" +
        "<div> 보낸 사람 이름 : " + formData[0].value  + "</div>" +
        "<div> 보낸 사람 이메일 : " + formData[2].value  + "</div>" +
        "<div> 보낸 사람 핸드폰 번호 : " + formData[1].value  + "</div>" +
        "<div> 제목 : " + formData[3].value  + "</div>" +
        "<div> 내용 : " + formData[4].value  + "</div>" +
        "</body></html>";

  var settings = {
    "url": "http://api.greenearthkorea.co.kr:9000/mail",
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "data": "{\n\"name\":\" " + formData[0].value + "\",\n\"eamil\":\"" + formData[2].value + "\",\n\"title\":\"" + formData[3].value + "\",\n\"content\":\"" + template + "\"}"
  };
  console.log(settings);

  $.ajax(settings).done(function (response) {
    console.log(response);
    if (response == "Complete"){
      alert('문의가 접수되었습니다.')
      if($('#landing_m').length > 0){
        location.href='index_m.html';
      }else{
        $('#contactus').modal('hide');
      }
    }
  });
}
