banners.forEach((banner, bannerIndex) => {
	banner.addEventListener('click', () => {
		printModal(bannerIndex);
	});
});

function printModal(bannerIndex) {
	let images = '';
	let indicators = '';

	imagesArr.map((image, imgIndex) => {
		let active = imgIndex === bannerIndex ? 'active' : '';

		images += `<div class="carousel-item ${active}">
      <img class="works__banner" src=${image} alt="" />
      </div> `;

		indicators += `<li id="indicator" data-target="#carouselExampleCaptions" data-slide-to=${imgIndex} class=${active}></li>`;
	});

	carouselInner.innerHTML = images;
	carouselIndicators.innerHTML = indicators;
}
