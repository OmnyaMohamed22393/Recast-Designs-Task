document.addEventListener('DOMContentLoaded', () => {
	const qs = s => document.querySelector(s);
	const products = [
		{ name: 'First Product Name', price: '$1,500', img: './assets/images/ring1.png', alt: 'First Product' },
		{ name: 'Second Product Name', price: '$1,500', img: './assets/images/ring2.png', alt: 'Second Product' },
		{ name: 'Third Product Name', price: '$1,500', img: './assets/images/ring3.png', alt: 'Third Product' },
		{ name: 'Fourth Product Name', price: '$1,500', img: './assets/images/ring4.png', alt: 'Fourth Product' }
	];

	const grid = qs('.products-grid');
	if (grid) grid.innerHTML = products.map(p => `
		<div class="product-card">
			<div class="product-image-wrapper"><img src="${p.img}" alt="${p.alt||p.name}" loading="lazy"></div>
			<h3 class="product-name">${p.name}</h3>
			<p class="product-price">${p.price}</p>
		</div>`).join('');

	const KEY = 'recast_cart_v1';
	const getCart = () => JSON.parse(localStorage.getItem(KEY) ?? '{"items":[]}');
	const setCart = c => (localStorage.setItem(KEY, JSON.stringify(c)), update());

	const cartSection = qs('.cart-section');
	const ensureUI = () => {
		if (!cartSection) return;
		const cartText = qs('.cart-text');
		const cartIcon = qs('.cart-icon');
		if (!qs('.cart-count-badge')) {
			const span = document.createElement('span');
			span.className = 'cart-count-badge';
			span.setAttribute('aria-live', 'polite');
			
			if (cartIcon) cartIcon.appendChild(span);
			else (cartText?.parentNode||cartSection).insertBefore(span, cartText ? cartText.nextSibling : null);
		}
		if (!qs('.cart-preview')) {
			const pr = document.createElement('div'); pr.className = 'cart-preview'; cartSection.style.position = getComputedStyle(cartSection).position === 'static' ? 'relative' : cartSection.style.position; cartSection.appendChild(pr);
			cartSection.addEventListener('click', () => { pr.classList.toggle('open'); renderPreview(); });
		}
	};

	const update = () => { const b = qs('.cart-count-badge'); if (!b) return; const cart = getCart(); b.textContent = String(cart.items.reduce((s,i)=>s+(i.qty||1),0)); };

	const renderPreview = () => {
		const pr = qs('.cart-preview'); if (!pr) return; const cart = getCart();
		if (!cart.items.length) { pr.innerHTML = '<div class="preview-empty">Cart is empty</div>'; return; }
		pr.innerHTML = cart.items.map((it, idx) => idx < 5 ? `<div class="preview-row"><span>${it.name}</span><span>${it.qty||1}</span><button class="preview-remove" data-index="${idx}" aria-label="remove">×</button></div>` : '').join('') + (cart.items.length>5?`<div class="preview-more">+${cart.items.length-5} more</div>`:'');
	};

	const add = item => {
		const c = getCart(); const ex = c.items.find(i => i.name===item.name && i.price===item.price);
		ex ? ex.qty = (ex.qty||1)+1 : c.items.push({...item, qty:1}); setCart(c); qs('.cart-count-badge')?.animate([{transform:'scale(1.15)'},{transform:'scale(1)'}], {duration:160});
	};

	document.addEventListener('click', e => {
		const rem = e.target.closest('.preview-remove');
		if (rem) {
			const idx = Number(rem.dataset.index);
			if (!Number.isNaN(idx)) { const c = getCart(); c.items.splice(idx,1); setCart(c); renderPreview(); }
			return;
		}

		const btn = e.target.closest('.add-to-cart'); if (!btn) return;
		const card = btn.closest('.product-card');
		const item = card ? { name: card.querySelector('.product-name')?.textContent.trim()||'Product', price: card.querySelector('.product-price')?.textContent.trim()||'', img: card.querySelector('img')?.src||'' } : { name: qs('.hero__title')?.textContent.trim()||'Product', price: qs('.hero__price')?.textContent.trim()||'', img: qs('.hero__image img')?.src||'' };
		add(item);
	});

	window.RECAST_CART = { get: getCart, add: item => add(item), clear: () => setCart({items:[]}) };

	ensureUI(); update();
});
