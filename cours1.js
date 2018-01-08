//Helper
function capitalize(s){
    return s[0].toUpperCase() + s.slice(1);
}

function redirect(test){
	console.log(test);
	// div.innerHTML = JSON.stringify(test);
	// div.innerHTML = "Nom :" +test.Nom.toUpperCase()+"<br>Prenom:"+capitalize(test.Prenom)+"<br> Site préféré:"+test.site_pref;
	document.location.href="./details.html?ID="+test.ID; 
}
//step 1 : récuperer la liste
var maListe =List;
var div = window.document.getElementById("container");
console.log(maListe);
// :step 2 : trouver le bon container
var monUl = window.document.getElementById("listeContainer");

console.log(monUl);
// step 3
maListe.forEach(function(item) {
	var monLi = document.createElement('li');
	monLi.onclick = function(){redirect(item)};
	monLi.innerHTML = "<span id='"+item.Nom+"'> "+item.Nom.toUpperCase()+"\u0020"+capitalize(item.Prenom)+"</span>";
	monUl.appendChild(monLi);
	console.log(monLi);
})


