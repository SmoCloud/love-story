import './App.css';
import { imagesMay24, imagesJune24, imagesJuly24, imagesAugust24, imagesNovember24, imagesDecember24 } from '../constants/Images24';
import { imagesApril25, imagesJune25 } from '../constants/Images25';
import { videosJune24, videosAugust24, videosOctober24 } from '../constants/Videos24';
import { videosMarch25, videosJune25 } from '../constants/Videos25';
import { Slide } from 'react-slideshow-image';

function App() {
  
  return (
	<>
		<div className="title-container">
			<p className="heart">❤️</p>
			<h1 className="title">Mikel & Audrey</h1>
			<p className="heart">❤️</p>
		</div>
		<div className="haiku">
			<h3 className="haiku-text">
				Roses, they are red.<br />
				Beautiful like you, they are.<br />
				That's why I pick you.<br />
			</h3>
			<div className="portraits">
				<figure className="image-container">
					<figcaption className="label">Mikel</figcaption>
					<img 
						className="image"
						src="/images/portraits/IMG_0979.JPG"
						alt="Mikel standing in front of a white wall in a room, wearing a black shirt and glasses, smiling at the camera."
					/>
				</figure>
				<figure className="image-container">
					<figcaption className="label">Audrey</figcaption>
					<img
						className="image"
						src="/images/portraits/IMG_1078.JPG"
						alt="Audrey sitting in front of a white wall at a desk, wearing a black shirt and glasses, smiling at the camera."
					/>
				</figure>
			</div>
			<h3 className="haiku-text">
				My cherry red Rose.<br />
				Flame ignites my fireworks.<br />
				Blooming in the skies.<br />
			</h3>
		</div>
		<br />
		<div className="slide-container">
			<h2 className="slide-month">We Got Together in May</h2>
			<Slide autoplay={true} pauseOnHover={true} easing="ease-in" duration={5000} transitionDuration={1500} indicators={true} infinite={true} arrows={false}>
				{imagesMay24.map((slideImage) => (
					<div key={slideImage.id} className="each-slide">
						<span className="slide-caption">{slideImage.caption}<br />{slideImage.date}</span>
						<img
							className="slide-image"
							src={slideImage.url}
							alt={slideImage.caption}
						/>
					</div>
				))}
			</Slide>
		</div>
		<div className="slide-container-alt">
			<h2 className="slide-month-alt">Our Story Continues into June</h2>
			<Slide autoplay={true} pauseOnHover={true} easing="ease-in" duration={5000} transitionDuration={1500} indicators={true} infinite={true} arrows={false}>
				{imagesJune24.map((slideImage) => (
					<div key={slideImage.id} className="each-slide">
						<span className="slide-caption-alt">{slideImage.caption}<br />{slideImage.date}</span>
						<img
							className="slide-image-alt"
							src={slideImage.url}
							alt={slideImage.caption}
						/>
					</div>
				))}
			</Slide>
		</div>
		<div className="slide-container">
			<h2 className="slide-month">Memorable Videos from June</h2>
			<Slide autoplay={true} pauseOnHover={true} easing="ease-in" duration={5000} transitionDuration={1500} indicators={true} infinite={true} arrows={false}>
				{videosJune24.map((slideVideo) => (
					<div key={slideVideo.id} className="each-slide">
						<span className="slide-caption">{slideVideo.caption}<br />{slideVideo.date}</span>
						<video 
							className="slide-image"
							src={slideVideo.url}
							controls
						/>
					</div>
				))}
			</Slide>
		</div>
		<div className="slide-container-alt">
			<h2 className="slide-month-alt">We Journey into July</h2>
			<Slide autoplay={true} pauseOnHover={true} easing="ease-in" duration={5000} transitionDuration={1500} indicators={true} infinite={true} arrows={false}>
				{imagesJuly24.map((slideImage) => (
					<div key={slideImage.id} className="each-slide">
						<span className="slide-caption-alt">{slideImage.caption}<br />{slideImage.date}</span>
						<img
							className="slide-image-alt"
							src={slideImage.url}
							alt={slideImage.caption}
						/>
					</div>
				))}
			</Slide>
		</div>
		<div className="slide-container">
			<h2 className="slide-month">Our Love Falls Deeper in August</h2>
			<Slide autoplay={true} pauseOnHover={true} easing="ease-in" duration={5000} transitionDuration={1500} indicators={true} infinite={true} arrows={false}>
				{imagesAugust24.map((slideImage) => (
					<div key={slideImage.id} className="each-slide">
						<span className="slide-caption">{slideImage.caption}<br />{slideImage.date}</span>
						<img
							className="slide-image"
							src={slideImage.url}
							alt={slideImage.caption}
						/>
					</div>
				))}
			</Slide>
		</div>
		<div className="slide-container-alt">
			<h2 className="slide-month-alt">August Brings Beautiful Music</h2>
			<div key={videosAugust24.id} className="each-slide">
				<span className="slide-caption-alt">{videosAugust24.caption}<br />{videosAugust24.date}</span>
				<video 
					className="slide-image-alt"
					src={videosAugust24.url}
					controls
				/>
			</div>
			<br />
		</div>
		<div className="slide-container">
			<h2 className="slide-month">Our Love Grows in October</h2>
			<Slide autoplay={true} pauseOnHover={true} easing="ease-in" duration={5000} transitionDuration={1500} indicators={true} infinite={true} arrows={false}>
				{videosOctober24.map((slideVideo) => (
					<div key={slideVideo.id} className="each-slide">
						<span className="slide-caption">{slideVideo.caption}<br />{slideVideo.date}</span>
						<video 
							className="slide-image"
							src={slideVideo.url}
							controls
						/>
					</div>
				))}
			</Slide>
		</div>
		<div className="slide-container-alt">
			<h2 className="slide-month-alt">An Incredibly Thankful November</h2>
			<div key={imagesNovember24.id} className="each-slide">
				<span className="slide-caption-alt">{imagesNovember24.caption}<br />{imagesNovember24.date}</span>
				<img 
					className="slide-image-alt"
					src={imagesNovember24.url}
					alt={imagesNovember24.caption}
				/>
			</div>
			<br />
		</div>
		<div className="slide-container">
			<h2 className="slide-month">Keeping Each Other Warm in December</h2>
			<Slide autoplay={true} pauseOnHover={true} easing="ease-in" duration={5000} transitionDuration={1500} indicators={true} infinite={true} arrows={false}>
				{imagesDecember24.map((slideImage) => (
					<div key={slideImage.id} className="each-slide">
						<span className="slide-caption">{slideImage.caption}<br />{slideImage.date}</span>
						<img
							className="slide-image"
							src={slideImage.url}
							alt={slideImage.caption}
						/>
					</div>
				))}
			</Slide>
		</div>
		<div className="slide-container-alt">
			<br />
			<h2 className="slide-month-alt">The Year Ends. With It,<br />A New Page Ahead to Read<br />In Each Other's Hearts.</h2>
			<br />
		</div>
		<div className="slide-container">
			<h2 className="slide-month">Marching Into March as Partners</h2>
				<div key={videosMarch25.id} className="each-slide">
					<span className="slide-caption">{videosMarch25.caption}<br />{videosMarch25.date}</span>
					<video 
						className="slide-image"
						src={videosMarch25.url}
						controls
					/>
				</div>
				<br />
		</div>
		<div className="slide-container-alt">
			<h2 className="slide-month-alt">April Spring Brings Neverending Love</h2>
			<Slide autoplay={true} pauseOnHover={true} easing="ease-in" duration={5000} transitionDuration={1500} indicators={true} infinite={true} arrows={false}>
				{imagesApril25.map((slideImage) => (
					<div key={slideImage.id} className="each-slide">
						<span className="slide-caption-alt">{slideImage.caption}<br />{slideImage.date}</span>
						<img
							className="slide-image-alt"
							src={slideImage.url}
							alt={slideImage.caption}
						/>
					</div>
				))}
			</Slide>
		</div>
		<div className="slide-container">
			<h2 className="slide-month">Over The Moon in June</h2>
			<Slide autoplay={true} pauseOnHover={true} easing="ease-in" duration={5000} transitionDuration={1500} indicators={true} infinite={true} arrows={false}>
				{imagesJune25.map((slideImage) => (
					<div key={slideImage.id} className="each-slide">
						<span className="slide-caption">{slideImage.caption}<br />{slideImage.date}</span>
						<img
							className="slide-image"
							src={slideImage.url}
							alt={slideImage.caption}
						/>
					</div>
				))}
			</Slide>
		</div>
		<div className="slide-container-alt">
			<h2 className="slide-month-alt">A June Proposal Where We First Began to Fall In Love</h2>
			<div key={videosJune25.id} className="each-slide">
				<span className="slide-caption-alt">{videosJune25.caption}<br />{videosJune25.date}</span>
				<video 
					className="slide-image-alt"
					src={videosJune25.url}
					controls
				/>
			</div>
		</div>
		<br />
	</>
  )
};

export default App;
