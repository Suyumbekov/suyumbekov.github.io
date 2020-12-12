
var code = document.getElementById("code").contentWindow.document;
document.getElementById('submit').addEventListener('click',()=>{
	var text1 = editor1.getValue();
	var text2 = editor2.getValue();
	var text3 = editor3.getValue();

	 code.open();
    code.writeln(
      text1 +
        "<style>" +
        text2 +
        "</style>" +
        "<script>" +
        text3 +
        "</script>"
    );
    code.close();
})


