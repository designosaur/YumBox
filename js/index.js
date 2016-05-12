/*function makeMeal(ingredients, recipe) {
	this.ingredients = [];
	this.recipe = "";
}
*/

function Recipe(name, varName) {
	this.name = name;
	this.varName = varName;
	this.ingredients = [];
	this.servingSize = 1;
	this.instructions = [];
	this.time = 0;
	this.type = "";
	this.cuisine = "";
	this.tags = [];
	this.displayRecipe = function() {
		console.log('hi');
		display_recipe_name.innerHTML = this.name;
		changePage('.displayRecipe');
	};
};

var tomatilloTacos = new Recipe("Tomatillo Chicken Tacos","tomatilloTacos");
tomatilloTacos.ingredients = ["small corn tortillas", "chicken", "tomatillos", "yellow onion", "green pepper", "jalapeno pepper"];
tomatilloTacos.servingSize = 4;
tomatilloTacos.instructions = ["Dice all vegetables.  Cube chicken.  Cook chicken in pan on medium heat for 16 minutes or until chicken is thoroughly cooked.  Cook vegetables in a separate pan on medium heat for 10 minutes.  Serve on top of tortillas and eat with hands."]
tomatilloTacos.time = 30;
tomatilloTacos.type = "dinner";
tomatilloTacos.cuisine = "Mexican";
tomatilloTacos.tags = ["low calorie", "tacos", "quick"];

var fishandchips = new Recipe("Fish & Sweet Potato Fries", "fishandchips");
tomatilloTacos.ingredients = ["White Fish", "Sweet Potato", "Fresh or Frozen Veggies"];
tomatilloTacos.servingSize = 2;
tomatilloTacos.instructions = ["Cut sweet potatos in large spears and boil in water on high for 5 minutes.  Then cut spears into smaller pieces and put into oven preheated tp 350 degrees for 30 minutes. Cook room temperature fish in pan on medium heat for 15 minutes or until thoroughly cooked. Steam or boil for 5 minutes or until soft.  Serve on plate separatly."]
tomatilloTacos.time = 45;
tomatilloTacos.type = "dinner";
tomatilloTacos.cuisine = "American";
tomatilloTacos.tags = ["low calorie", "seafood"];

var allRecipes = [tomatilloTacos,fishandchips];

function populateList() {
	html = "";
	for (i = 0; i < allRecipes.length; i++) {
		where = "'.displayRecipe'";
		what = "'" + allRecipes[i].varName + "'";
		html += '<button class="recipeList" onclick="changePage(' + where + '),loadRecipePage(' + what + ')">' + allRecipes[i].name + '</button>';
	};
	listItems.innerHTML = html;
};

function removeMeal(what, where){
	what.splice(where, 1);
	updateList();
};

/* from lister
function updateList(){
	var newHTML = "";
	for (i = 0; i < listOne.meals.length; i++) {
		newHTML += "<li><button class='button' onclick='removeMeal(listOne.meals," + i + ")'>-</button><span class='item'>" + listOne.meals[i] + "</span></li>";
	};
	listItems.innerHTML = newHTML;
};*/

function changePage(target) {
		var allHide = document.querySelectorAll(".hide");
		for (i = 0; i < allHide.length; i++) {
			allHide[i].style.display = "none";
		}
		document.querySelector(".start").style.display = "none";
		document.querySelector(target).style.display = "block";
};

function setUpList() {
	var listName = document.getElementById("nameInput").value;
	listOne.name = listName;
	document.getElementById('listNameHere').innerHTML = listName;
};

populateList();

//Button Click Listeners
document.querySelector("#startbt").addEventListener("click", function(e) {
	changePage(".myRecipes");
/*	if (e.target.class == "recipeList") {
		display_recipe_name.innerHTML = btTarget.name;
	};*/
});

document.querySelector("#back_to_menu").addEventListener("click", function(e) {
	changePage(".myRecipes");
});

function loadRecipePage(what) {
	for (i=0; i < allRecipes.length; i++) {
		if (allRecipes[i].varName == what) {
			document.getElementById("display_recipe_name").innerHTML = allRecipes[i].name;
			var details = "<em>Total time:</em> " + allRecipes[i].time + "minutes<br><em>Serves:</em> " + allRecipes[i].servingSize + " people";
			document.getElementById("display_details").innerHTML = details;
			ingred = "";
			for (q = 0; q < allRecipes[i].ingredients.length; q++) {
				ingred += allRecipes[i].ingredients[q] + "<br>";
			}
			document.getElementById("display_ingredients").innerHTML = ingred;
			document.getElementById("display_instructions").innerHTML = allRecipes[i].instructions;
		};
	};
};

/*document.querySelector(".content").addEventListener("click", function(e) {
	what = e.target.value
	console.log(what);
	display_recipe_name.innerHTML = what;
	changePage('.displayRecipe');
});*/

/*	$(".start").click(function() {
		changePage(".myRecipes");

});

/*document.getElementById("newListBT").onclick = changePage('.newList');*/
