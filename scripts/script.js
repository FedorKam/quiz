$( window ).on( "load", function() {
  //Loader
  $('.test-block').hide();
  $('.final-page').hide();
  $('.loader').hide();
  $('.mainwrapper').addClass('soft-appear');

});

let index = 0;
let max_index = $('.test-block').length;

result_header = ['4.3. Идеолог', 
'7.3. Создатель продающего контента.', 
'10.1. Смысловик - распаковщик', 
'13.9. Методолог продуктов', 
'1.1. Технический эксперт по реализации', 
'12.1. Стратегический гигант', 
'8.7. Аналитический сканер', 
'6.2. Системный гений']

result_content = ['У вас сильные ценности, вы можете внедрять в компанию идеологию и доносить ее до конечного потребителя. Заработок от 50 000 до 300 000 р.', 
'Ваша уникальная способность, создавать контент наполнение для тунелей продаж в компании. Заработок от 30 000 - 500 000 р.', 
'Вы можете создавать продающие смыслы для компании и доносить ценности до клиентов. Важно прокачиать навык в данном направлении.', 
'Ваше сильное качество, распаковка смыслов компаний, и простройка маркетинговых стратегий. Доход в данном направлении от 40 000 - 400 000', 
'Ваше сильное качество технически видеть структуру построения тунелей продаж и выстраивания отношений с клиентом.', 
'Вам важно прокачивать навык стратегий. В бизнесе вы можете прописать эффективный путь компании и увеличить обороты.', 
'Прокачивайте навык аналитики. Вы хорошо можете видеть узкие горлышки компаний.И выводить их из кризиса.', 
'У вас есть способности для реализации сложных проектов, Вы способны выстраивать объемные алгоритмы для компаний. Создавать бизнес модели которые становятся легендами.']

counter = [0, 0, 0, 0, 0, 0, 0, 0]

function form_result(){
  for(let i = 1; i <= index; i++){
    let inf = $('input[name="radio-'+i+'"]:checked').val();
    counter[inf-1]++;
  }
  let max_el = Math.max.apply(Math, counter);
  let max_dir = counter.indexOf(max_el);
  $('.description__text_headjs_in').html(result_header[max_dir - 1]);
  $('.description__text_contentjs_in').html(result_content[max_dir - 1]);
}

$('.button-block__button').click(function(e) {e.preventDefault();
  $('.first-page').fadeOut(1000);
  $('.test-block').eq(0).fadeIn(1000);
});

$('.answer__radio-input').click(function() {
  $('.test-block').eq(index).fadeOut(1000);
  index++;
  if(index == max_index){
    form_result();
    $('.final-page').fadeIn(1000);
  }else{
    $('.test-block').eq(index).fadeIn(1000);
  }
});

$('.control-block__previous_js_on').click(function(){
  $('.test-block').eq(index).fadeOut(1000);
  index--;
  $('.test-block').eq(index).fadeIn(1000);
})