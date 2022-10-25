var link = document.querySelector('.link');
var result = document.querySelector('.result');

function fun() {

  var url = `view-source:${link.value}`;
  document.querySelector('.result').value = url;

}
let clipboardEl = document.querySelector(".clipboard");
clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const resultE = result.value;
  if (!result) { return; }
  textarea.value = resultE;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Text Copied to Clipboard');

});