var maListe =List;

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

result = findGetParameter("ID");
console.log(result);
maListe.forEach(function(item) {
	if(item.ID==result){
		console.log(item);
		document.getElementById("name").innerHTML = item.Nom.toUpperCase() + "\u0020" + item.Prenom;
		var contentDesc = document.getElementById("container"); 
	   	contentDesc.innerHTML = null;
		for(key in item){
			if(key !== 'Nom' && key !== "Prenom" && key !="ID"){
				console.log(key);
				// console.log(item.key);
				console.log(item[key]);
				var contentLi = document.createElement('li');
				contentLi.innerHTML = key +":"+item[key];
				contentDesc.appendChild(contentLi);
			}
		}
	}
});
