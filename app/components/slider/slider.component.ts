import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

	public innerWidth: any
	products: any
	options1: any

	constructor() {
		this.options1 = {
			animation: {
				animationClass: 'transition',
				animationTime: 500,
			},
			swipe: {
				swipeable: true,
				swipeVelocity: .004,
			},
			drag: {
				draggable: true,
				dragMany: true,
			},
      arrows: true,
			infinite: true,
			autoplay: {
				enabled: true,
				direction: 'right',
				delay: 5000,
				stopOnHover: true,
				speed: 6000,
			},
			breakpoints: [
				{
					width: 768,
					number: 1,
				},
				{
					width: 991,
					number: 4,
				},
				{
					width: 9999,
					number: 4,
				},
			],
		}

		this.products = []
		this.products.push({
			title: 'LGBM Classifier Classification Report',
			url: 'https://url',
      caption: 'LGBM Classifier Classification Report',
			image: `./assets/images/chart-image-1.png`,
		})
		this.products.push({
			title: 'ROC Curves for LGBM Classifier',
			url: 'https://url',
      caption: 'ROC Curves for LGBM Classifier',
			image: `./assets/images/chart-image-2.png`,
		})
		this.products.push({
			title: 'Orecision-Recall Curve for LGBM Classifier',
			url: 'https://url',
      caption: 'Orecision-Recall Curve for LGBM Classifier',
			image: `./assets/images/chart-image-3.png`,
		})
		this.products.push({
			title: 'LGBM Classifier Classification Report',
			url: 'https://url',
      caption: 'LGBM Classifier Classification Report',
			image: `./assets/images/chart-image-4.png`,
		})
		this.products.push({
			title: 'LGBM Classifier Classification Report',
			url: 'https://url',
      caption: 'LGBM Classifier Classification Report',
			image: `./assets/images/chart-image-3.png`,
		})

	}

  ngOnInit(): void {
  }

}
