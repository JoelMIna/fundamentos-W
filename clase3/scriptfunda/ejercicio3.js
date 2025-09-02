const categorias = [
	{
		titulo: 'Ropa para Hombre',
		imgAlt: 'Ropa para Hombre',
		link: 'hombres.html',
		linkText: 'Ver más',
        img : './imgs/men.webp',
		imgWidth: '300'
	},
	{
		titulo: 'Ropa para Mujeres',
		imgAlt: 'Ropa para Mujeres',
		link: 'mujeres.html',
		linkText: 'Ver más',
        img : './imgs/woman.jpg',
		imgWidth: '270'
	},
	{
		titulo: 'Accesorios',
		imgAlt: 'Accesorios',
		link: 'accesorios.html',
		linkText: 'Ver más',
        img : './imgs/otros.jpeg',
		imgWidth: '190'

	}
];

const productos = [
	{
		titulo: 'Wallets',
		imgAlt: 'Wallets',
		link: 'Wallets.html',
		linkText: 'Ver detalles',
		img : './imgs/W-1200.jpg',
		precio: '$84.99',
		imgWidth: '190'
	},
	{
		titulo: 'Hoddies',
		imgAlt: 'Hoddies',
		link: 'Hoddies.html',
		linkText: 'Ver detalles',
		img: './imgs/hoddie.jpg',
		precio: '$129.99',
		imgWidth: '190'
	},
	{
		titulo: 'Sneakers',
		imgAlt: 'Sneakers',
		link: 'Sneakers.html',
		linkText: 'Ver detalles',
		img: './imgs/Bl.avif',
		precio: '$1299.99',
		imgWidth: '190'
	},
	{
		titulo: 'shorts',
		imgAlt: 'shorts',
		link: 'Shorts.html',
		linkText: 'Ver detalles',
		img: './imgs/Ct.webp',
		precio: '$200.00',
		imgWidth: '190'
		
	}	
];

function crearArticulo(categoria) {
	return `
		<article class="categoria">
			<h3>${categoria.titulo}</h3>
			<div class="img-categoria">
				<img src="${categoria.img}" alt="${categoria.imgAlt}" width="${categoria.imgWidth || 200}">
			</div>
			<a href="${categoria.link}">${categoria.linkText}</a>
		</article>
	`;
}

function crearArticulo2(producto) {
	return `
		<article class="producto">
			<h3>${producto.titulo}</h3>
			<div class="img-producto">
				<img src="${producto.img}" alt="${producto.imgAlt}" width="${producto.imgWidth || 200}">
			</div>
			<p class="precio">${producto.precio}</p>
			<a href="${producto.link}">${producto.linkText}</a>
			<button>Añadir al carrito</button>
		</article>
	`;
}
