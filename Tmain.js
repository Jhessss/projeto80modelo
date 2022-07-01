
var namesOfPeople = [];
    
function submit()
{
    //abaixo adicione um nome à lista de convidados, utilizando push()

	console.log(GuestName);
        
    console.log(namesOfPeople);
    var lenghtOfName = namesOfPeople.length;
    console.log(lenghtOfName);
	document.getElementById("displayName").innerHTML=namesOfPeople.toString();
	
   }

function sorting()
{
	namesOfPeople.sort();
	var i= namesOfPeople.join("<br>");
    console.log(namesOfPeople);		
	document.getElementById("sorted").innerHTML=i.toString();
	}

function show()
{
	var i= namesOfPeople.join("<br>");
	console.log(namesOfPeople);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sortButton").style.display="block";
	}

 // adicionar a função para search(pesquisar) um nome na lista