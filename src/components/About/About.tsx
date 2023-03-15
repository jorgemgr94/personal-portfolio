import { about } from '@/data';
import SectionTemplate from '@/components/SectionTemplate';
import SocialNetworks from './SocialNetworks';

export default function About() {
	return (
		<SectionTemplate id="about">
			<section className="mb-4 md:mr-2 md:mb-0">
				<h1 className="font-bold">{`I'M JORGE GARCÍA 👨‍💻`}</h1>
				<p className="mb-4">{about.firstParagraph}</p>
				<p className="mb-4">{about.secondParagraph}</p>
				<p className="mb-4">{about.thirdParagraph}</p>
				<SocialNetworks />
			</section>
		</SectionTemplate>
	);
}
