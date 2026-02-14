import './App.css';
import { Slide } from 'react-slideshow-image';

function App() {

	interface Slide {
		id: number;
		url: string;
		caption: string;
		date: string;
	};

	const imagesMay24: Slide[] = [
		{ id: 1, url: '/images/2024/05/25/IMG_8331.JPG', caption: 'Our First Photo Kiss', date: '2024-05-25' },
		{ id: 2, url: '/images/2024/05/26/IMG_8332.JPG', caption: 'Our First Couple\'s Photo ', date: '2024-05-26' },
		{ id: 3, url: '/images/2024/05/27/IMG_0472.JPG', caption: 'Our First Time at Shogun', date: '2024-05-27' },
		{ id: 4, url: '/images/2024/05/30/IMG_0545.JPG', caption: 'Our First Time at Glenwood Park', date: '2024-05-30' },
		{ id: 5, url: '/images/2024/05/30/IMG_0546.JPG', caption: 'Our First Photo Kiss at Glenwood Park', date: '2024-05-30' },
	];

	const imagesJune24: Slide[] = [
		{ id: 1, url: '/images/2024/06/03/IMG_0587.JPG', caption: 'Our First Time Cooking Breakfast Together', date: '2024-06-03' },
		{ id: 2, url: '/images/2024/06/04/IMG_0666.JPG', caption: 'A Kiss in the Glenwood Park Gazebo', date: '2024-06-04' },
		{ id: 3, url: '/images/2024/06/04/IMG_0667.JPG', caption: 'Happiness in the Gazebo Together', date: '2024-06-04' },
		{ id: 4, url: '/images/2024/06/15/IMG_0779.JPG', caption: 'Our First Time at The Beaver Dam Park', date: '2024-06-15' },
		{ id: 5, url: '/images/2024/06/15/IMG_0781.JPG', caption: 'Our Shadows Are Together', date: '2024-06-15' },
		{ id: 6, url: '/images/2024/06/15/IMG_0782.JPG', caption: 'Our Shadows Are Kissing', date: '2024-06-15' },
		{ id: 7, url: '/images/2024/06/22/IMG_0842.JPG', caption: 'Our First Time at Camp Creek', date: '2024-06-22' },
		{ id: 8, url: '/images/2024/06/22/IMG_0843.JPG', caption: 'A Wonderful Kiss Amidst the Trees', date: '2024-06-22' },
		{ id: 9, url: '/images/2024/06/22/IMG_0845.JPG', caption: 'Leaving the Walkway', date: '2024-06-22' },
		{ id: 10, url: '/images/2024/06/22/IMG_0846.JPG', caption: 'A Kiss Witnessed by the Sun', date: '2024-06-22' },
		{ id: 11, url: '/images/2024/06/22/IMG_0848.JPG', caption: 'Unfortunate Timing', date: '2024-06-22' },
		{ id: 12, url: '/images/2024/06/22/IMG_0850.JPG', caption: 'A Fortunate Connection', date: '2024-06-22' },
		{ id: 13, url: '/images/2024/06/22/IMG_0851.JPG', caption: 'Our First Time at The Scenic Overlook', date: '2024-06-22' },
		{ id: 14, url: '/images/2024/06/22/IMG_0852.JPG', caption: 'The Scenery Was Even More Beautiful Together', date: '2024-06-22' },
		{ id: 15, url: '/images/2024/06/22/IMG_0853.JPG', caption: 'Our Enormous Love in Our Smiles Together', date: '2024-06-22' },
		{ id: 16, url: '/images/2024/06/22/IMG_0855.JPG', caption: 'A New River Scenic Kiss', date: '2024-06-22' },
		{ id: 17, url: '/images/2024/06/22/IMG_0856.JPG', caption: 'A Promise of Forever Etched in Our Hearts', date: '2024-06-22' },
		{ id: 18, url: '/images/2024/06/22/IMG_0859.JPG', caption: 'A Bridge From Heart to Heart', date: '2024-06-22' },
		{ id: 19, url: '/images/2024/06/23/IMG_0861.JPG', caption: 'Our First Time at Bluestone Lake', date: '2024-06-23' },
		{ id: 20, url: '/images/2024/06/23/IMG_0862.JPG', caption: 'A Heavenly Moment in Each Other', date: '2024-06-23' },
		{ id: 21, url: '/images/2024/06/23/IMG_0863.JPG', caption: 'A Heavenly Sight With One Another', date: '2024-06-23' },
		{ id: 22, url: '/images/2024/06/29/IMG_9354.JPG', caption: 'Our First Time at Pinnacle Rock', date: '2024-06-29' },
	];

	const imagesJuly24: Slide[] = [
		{ id: 1, url: '/images/2024/07/16/IMG_1073.JPG', caption: 'One of Our Favorite Foods to Make Together', date: '2024-07-16' },
		{ id: 2, url: '/images/2024/07/19/IMG_0017.JPG', caption: 'Our Life Living Together Begins at The Double Wide', date: '2024-07-19' },
		{ id: 3, url: '/images/2024/07/27/IMG_0279.JPG', caption: 'Our Walks Together', date: '2024-07-27' },
	];

	const imagesAugust24: Slide[] = [
		{ id: 1, url: '/images/2024/08/01/IMG_0458.JPG', caption: 'Getting McDonald\'s Together', date: '2024-08-01' },
		{ id: 2, url: '/images/2024/08/01/IMG_0461.JPG', caption: 'Our Love and Comfort Grows Deeper', date: '2024-08-01' },
	];

	const imagesNovember24: Slide = {
		id: 1,
		url: '/images/2024/11/17/RAOT5015.JPG',
		caption: 'Our First Thanksgiving At Your Mom\'s Together',
		date: '2024-11-17',
	};

	const imagesDecember24: Slide[] = [
		{ id: 1, url: '/images/2024/12/01/IMG_1415.JPG', caption: 'Our First Christmas Together', date: '2024-12-01' },
		{ id: 2, url: '/images/2024/12/18/IMG_1433.JPG', caption: 'Our First Time at Macado\'s', date: '2024-12-18' },
		{ id: 3, url: '/images/2024/12/18/IMG_1434.JPG', caption: 'Our Kiss, Our Way', date: '2024-12-18' },
		{ id: 4, url: '/images/2024/12/28/IMG_1438.JPG', caption: 'Our Family Grows Larger', date: '2024-12-28' },
		{ id: 5, url: '/images/2024/12/31/IMG_1440.JPG', caption: 'Our First Flu Together', date: '2024-12-31' },
	];

	const videosJune24: Slide[] = [
		{ id: 1, url: '../assets/videos/2024/06/03/IMG_0587.MOV', caption: 'Our First Time Cooking Breakfast Together', date: '2024-06-03' },
		{ id: 2, url: '../assets/videos/2024/06/22/IMG_0859.MOV', caption: 'Our First Time At The Scenic Overlook', date: '2024-06-22' },
		{ id: 3, url: '../assets/videos/2024/06/23/IMG_0863.MOV', caption: 'Our First Time At Bluestone Lake', date: '2024-06-23' },
		{ id: 4, url: '../assets/videos/2024/06/29/IMG_0929.MOV', caption: 'Our First Time At Pinnacle Rock', date: '2024-06-29' },
	];

	const videosAugust24: Slide = { 
		id: 1, 
		url: '../assets/videos/2024/08/25/IMG_1253.MOV', 
		caption: 'A Beautiful Voice is Heard',
		date: '2024-08-25'
	};

	const videosOctober24: Slide[] = [
		{ id: 1, url: '../assets/videos/2024/10/27/IMG_3761.MOV', caption: 'Our Family Gains a New Member', date: '2024-10-27' },
		{ id: 2, url: '../assets/videos/2024/10/30/IMG_1385.MOV', caption: 'The New Siblings Adjust', date: '2024-10-30' },
	];

	const imagesApril25: Slide[] = [
		{
			id: 1,
			url: "/images/2025/04/08/IMG_1542.JPG",
			caption: "A Capybara Stuffed Full of Love",
			date: "April 8, 2025"
		},
		{
			id: 2,
			url: "/images/2025/04/19/IMG_1561.JPG",
			caption: "Our First Pot of Vegetable Soup",
			date: "April 19, 2025"
		},
		{
			id: 3,
			url: "/images/2025/04/21/IMG_1564.JPG",
			caption: "A Smile so Warm and Bright, It Melts My Heart and Gives Me Sight",
			date: "April 21, 2025"
		},
		{
			id: 4,
			url: "/images/2025/04/21/IMG_1565.JPG",
			caption: "How Can I Not Love You When You're This Happy?",
			date: "April 21, 2025"
		},
		{
			id: 5,
			url: "/images/2025/04/21/IMG_1566.JPG",
			caption: "Everyone Deserves to be Squeezed Tight",
			date: "April 21, 2025"
		},
		{
			id: 6,
			url: "/images/2025/04/25/IMG_E0814.JPG",
			caption: "So Many Eyes to See the Achievement, But Only One Pair Mattered to Me",
			date: "April 25, 2025"
		},
		{
			id: 7,
			url: "/images/2025/04/27/IMG_1586.JPG",
			caption: "Our First Time Walking Piney Creek Preserve Together",
			date: "April 27, 2025"
		},
		{
			id: 8,
			url: "/images/2025/04/27/IMG_1593.JPG",
			caption: "So Many Beautiful Things to See, But Only One Caught My Eye",
			date: "April 27, 2025"
		},
	];

const imagesJune25: Slide[] = [
  {
    id: 1,
    url: "/images/2025/06/04/IMG_1660.JPG",
    caption: "The Ring is Acquired",
    date: "June 4, 2025",
  },
  {
    id: 2,
    url: "/images/2025/06/04/IMG_1669.JPG",
    caption: "Returning to Where We First Met, But This Time, With a Ring in Hand",
    date: "June 4, 2025",
  },
  {
    id: 3,
    url: "/images/2025/06/04/IMG_1672.JPG",
    caption: "Getting Lost in One Another's Kiss",
    date: "June 4, 2025",
  }
];

const videosMarch25: Slide = {
  id: 1,
  url: "/videos/2025/03/12/IMG_1480.MOV",
  caption: "Our Kitty's First Trip to the Vet",
  date: "March 12, 2025"
};

const videosJune25: Slide = {
  id: 1,
  url: "/videos/2025/06/04/IMG_1667.MOV",
  caption: "Our Promise is Sealed in Stone",
  date: "June 4, 2025"
};
  
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
