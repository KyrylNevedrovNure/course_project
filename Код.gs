function onInstall() {
  onOpen();
}
 
/* Что должен делать add-on когда документ открывается*/
function onOpen() {
  DocumentApp.getUi()
  .createAddonMenu() // Добавить новый пункт в Google Docs Add-ons Menu
  .addItem("Course project parser", "showSidebar")
  .addToUi();  // Запустить showSidebar function когда кто-то кликнет в Menu
}
 
/* Показать 300px sidebar с HTML страницей parser.html */
function showSidebar() {
  var html = HtmlService.createTemplateFromFile("parser")
    .evaluate()
    .setTitle("Курсовое проектирование"); // Заголовок sidebar
  DocumentApp.getUi().showSidebar(html);
}

/* Получить количество изображений */
function getAmountOfImages()
{
  return DocumentApp.getActiveDocument().getBody().getImages().length;
}

/* Получить количество таблиц */
function getAmountOfTables()
{
   return DocumentApp.getActiveDocument().getBody().getTables().length;
}

/* Получить количество страниц */
function getNumPages() 
{
  var blob = DocumentApp.getActiveDocument().getAs("application/pdf");
  var data = blob.getDataAsString();
  var pages = parseInt(data.match(/ \/N (\d+) /)[1], 10);
  return pages; 
}

/* Получить весь текст */
function getPlainText()
{
  return DocumentApp.getActiveDocument().getBody().getText();
}

/* Показать 300px sidebar с HTML страницей parser.html */
function getFontFamily()
{
  //return DocumentApp.getActiveDocument().getBody().getParagraphs().
}

function testTom()
{
  //alert("tom");
  //DocumentApp.getUi().alert(DocumentApp.getActiveDocument().getBody().findText("\Харківський національний університет gрадіоелектроніки").getElement().asText().getText());
  //DocumentApp.getUi().alert(DocumentApp.getActiveDocument().getBody().getTables().length);
  //DocumentApp.getUi().alert(DocumentApp.getActiveDocument().getBody().getImages().length);
  //DocumentApp.getUi().alert(DocumentApp.getActiveDocument().getBody().getParagraphs()[401].getText());
  //DocumentApp.getActiveDocument().getBody().editAsText().copy()
  //DocumentApp.getActiveDocument().getBody().getText()
}
