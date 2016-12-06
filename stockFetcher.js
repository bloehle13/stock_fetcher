function getStock(){
  var stock = 'GEVO';
  $.ajax({
    url: 'http://finance.google.com/finance/info?client=ig&q=NASDAQ%3A' + stock,
    type: 'GET',
    dataType: 'jsonp',
    success: function(data){
      console.log(data[0].l);
      $('#info').text('GEVO Price: ' + data[0].l);
    }
  });
}
