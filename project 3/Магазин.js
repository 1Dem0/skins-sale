function render() {
   const productsStore = localStorageUtil.getProducts();
   
   headerPage.render(productsStore.length);
   productsPage.render();
}

let CATALOG = [];


//http://myjson.dit.upm.es/api/bins/6x11
//
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
    	CATALOG = body;
    	render();
    })
    .catch(error => {
    	console.log(error);
    });