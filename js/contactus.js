function formSubmit(){
  var url = "http://ec2-54-145-157-219.compute-1.amazonaws.com:9000/mail";
  var formData = $('form').serializeArray();
  // var template = "<html><head></head><body>" +
  //       "<div> GreenEarth 문의 내용 </div>" +
  //       "<div> ================== </div>" +
  //       "<div> 보낸 사람 이름 : " + formData[0].value  + "</div>" +
  //       "<div> 보낸 사람 이메일 : " + formData[2].value  + "</div>" +
  //       "<div> 보낸 사람 핸드폰 번호 : " + formData[1].value  + "</div>" +
  //       "<div> 제목 : " + formData[3].value  + "</div>" +
  //       "<div> 내용 : " + formData[4].value  + "</div>" +
  //       "</body></html>";
var template = "<html><head>" +
               "<script src='https://code.jquery.com/jquery-2.2.4.js'integrity='sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI='crossorigin='anonymous'></script>" +
               "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css'>" +
               "<script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js'></script>" +
               "</head><body>" +
               "  <div class='container'>" +
               "    <h5> GreenEarth 문의 내용 </h5>" +
               "    <table class='bordered'>" +
               "      <tbody>" +
               "        <tr><th style='width:30%'>보낸 사람 이름</th><td>" + formData[0].value + "</td></tr>" +
               "        <tr><th style='width:30%'>보낸 사람 이메일</th><td>" + formData[2].value + "</td></tr>" +
               "        <tr><th style='width:30%'>보낸 사람 핸드폰 번호</th><td>" + formData[1].value + "</td></tr>" +
               "        <tr><th style='width:30%'>제목</th><td>" + formData[3].value + "</td></tr>" +
               "        <tr><th style='width:30%'>내용</th><td>" + formData[4].value + "</td></tr>" +
               "      </tbody>" +
               "    </table>" +
               "  </div>" +
               "</body></html>";
  var ajaxData = {
    "name": formData[0].value,
    "email": formData[2].value,
    "title": formData[3].value,
    "content":template
  }
  $.post(url, ajaxData,
    function(data, textStatus, jqXHR)
    {
        alert('이메일 전송 성공');
        $('#contactus').modal('hide');
    }).fail(function(jqXHR, textStatus, errorThrown)
    {
        alert(textStatus);
    });
}
