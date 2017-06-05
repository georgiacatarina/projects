var cats = [
	{
		name:'Branca',
		src: 'img/branquela.jpg',
		clicks: 0

	},
	{
		name: 'Dilma',
		src: 'img/dilma.jpg',
		clicks: 0
	},
	{
		name: 'Bigoda',
		src: 'img/bigoda.jpg',
		clicks: 0
	},
	{
		name: 'Besoura',
		src: 'img/besoura.jpg',
		clicks: 0
	},
	{
		name: 'Tigresa',
		src: 'img/tigresa.jpg',
		clicks: 0
	}
];

CatClicker = { 

	init: function(){
		this.montaLayout();
	},

	montaLayout: function(){
		var catList = document.getElementById('cat-list');
		var catName = document.getElementById('cat-name');
		var catPic = document.getElementById('cat-img');


		for (var i = 0; i <  cats.length; i++) {

			var cat = cats[i];

			elem = document.createElement('li');
			elem.textContent = cat.name;
			
			catList.appendChild(elem);

			/*primeiro gato é o da vez*/
			currentCat = cats[0];
			catName.innerText = currentCat.name;
			catPic.src = currentCat.src;
			
		};
		
		this.setCat();
	},

	setCat: function(){
		elem.addEventListener('click', function(){
			catName.innerText = this.innerText;
			
			console.log(cat)
			catPic.src = cat.src;
			
		})

	},

	increment: function(){
		catPic.addEventListener('click', function(){
				
			document.getElementById('count').innerText = "clicou: "+(count > 1 ? (count + " vezes"): count+" vez");

		}, false);
		console.log(cats)
	}



	
}
CatClicker.init();
