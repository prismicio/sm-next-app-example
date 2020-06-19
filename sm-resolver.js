
import dynamic from 'next/dynamic';
export default ({ sliceName }) => {
 const component = (sliceName) => ({
  AlternateGrid: () => dynamic(() => import('essential-slices/src/slices/AlternateGrid/index.js')),
	CallToAction: () => dynamic(() => import('essential-slices/src/slices/CallToAction/index.js')),
	CardsCarousel: () => dynamic(() => import('essential-slices/src/slices/CardsCarousel/index.js')),
	CustomerLogos: () => dynamic(() => import('essential-slices/src/slices/CustomerLogos/index.js')),
	FaqSection: () => dynamic(() => import('essential-slices/src/slices/FaqSection/index.js')),
	ImagesSlider: () => dynamic(() => import('essential-slices/src/slices/ImagesSlider/index.js')),
	PricingTable: () => dynamic(() => import('essential-slices/src/slices/PricingTable/index.js')),
	TestimonialsSlider: () => dynamic(() => import('essential-slices/src/slices/TestimonialsSlider/index.js')),
	VideoHighlights: () => dynamic(() => import('essential-slices/src/slices/VideoHighlights/index.js')),
	CallToActionFive: () => dynamic(() => import('./slices/CallToActionFive.js')),
 })[sliceName]
 return component(sliceName)()
}
