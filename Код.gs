function onInstall() {
  onOpen();
}
 
/* ��� ������ ������ add-on ����� �������� �����������*/
function onOpen() {
  DocumentApp.getUi()
  .createAddonMenu() // �������� ����� ����� � Google Docs Add-ons Menu
  .addItem("Course project parser", "showSidebar")
  .addToUi();  // ��������� showSidebar function ����� ���-�� ������� � Menu
}
 
/* �������� 300px sidebar � HTML ��������� parser.html */
function showSidebar() {
  var html = HtmlService.createTemplateFromFile("parser")
    .evaluate()
    .setTitle("�������� ��������������"); // ��������� sidebar
  DocumentApp.getUi().showSidebar(html);
}

/* �������� ���������� ����������� */
function getAmountOfImages()
{
  return DocumentApp.getActiveDocument().getBody().getImages().length;
}

/* �������� ���������� ������ */
function getAmountOfTables()
{
   return DocumentApp.getActiveDocument().getBody().getTables().length;
}

/* �������� ���������� ������� */
function getNumPages() 
{
  var blob = DocumentApp.getActiveDocument().getAs("application/pdf");
  var data = blob.getDataAsString();
  var pages = parseInt(data.match(/ \/N (\d+) /)[1], 10);
  return pages; 
}

/* �������� ���� ����� */
function getPlainText()
{
  return DocumentApp.getActiveDocument().getBody().getText();
}

/* �������� 300px sidebar � HTML ��������� parser.html */
function getFontFamily()
{
  //return DocumentApp.getActiveDocument().getBody().getParagraphs().
}

function testTom()
{
  //alert("tom");
  //DocumentApp.getUi().alert(DocumentApp.getActiveDocument().getBody().findText("\���������� ������������ ���������� g��������������").getElement().asText().getText());
  //DocumentApp.getUi().alert(DocumentApp.getActiveDocument().getBody().getTables().length);
  //DocumentApp.getUi().alert(DocumentApp.getActiveDocument().getBody().getImages().length);
  //DocumentApp.getUi().alert(DocumentApp.getActiveDocument().getBody().getParagraphs()[401].getText());
  //DocumentApp.getActiveDocument().getBody().editAsText().copy()
  //DocumentApp.getActiveDocument().getBody().getText()
}
