 // Cria um botão "fechar" e anexa-o a cada item da lista
 var myNodelist = document.getElementsByTagName("LI");
 var i;
 for (i = 0; i < myNodelist.length; i++) {
   var span = document.createElement("span");
   var txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   myNodelist[i].appendChild(span);
 }

 // Clique em um botão fechar para ocultar o item da lista atual
 var close = document.getElementsByClassName("close");
 var i;
 for (i = 0; i < close.length; i++) {
   close[i].onclick = function () {
     var div = this.parentElement;
     div.style.display = "none";
   }
 }

 // Adiciona um símbolo "marcado" ao clicar em um item da lista
 var list = document.querySelector('ul');
 list.addEventListener('click', function (ev) {
   if (ev.target.tagName === 'LI') {
     ev.target.classList.toggle('checked');
   }
 }, false);

 // Cria um novo item de lista ao clicar no botão "Adicionar"
 function newElement() {
   console.log("Entreaqui")
   var li = document.createElement("li");
   var inputValue = document.getElementById("myInput").value;
   var t = document.createTextNode(inputValue);
   li.appendChild(t);
   if (inputValue === '') {
     alert("Você deve escrever alguma coisa!");
   } else {
     document.getElementById("myUL").appendChild(li);
   }
   document.getElementById("myInput").value = "";

   var span = document.createElement("span");
   var txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   li.appendChild(span);

   for (i = 0; i < close.length; i++) {
     close[i].onclick = function () {
       var div = this.parentElement;
       div.style.display = "none";
     }
   }
 }