import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column, Card, Row, Grid, Icon, GlitchFx, TiltFx, LetterFx, Background, Input } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes } from '@/app/resources';
import { home, about, person, newsletter } from '@/app/resources/content';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import styles from './Style.module.scss'
import { error } from 'console';

const fx = {
	effects: {
		mask: {
			cursor: false,
			x: 100,
			y: 0,
			radius: 100
		},
		gradient: {
			display: true,
			x: 100,
			y: 50,
			width: 100,
			height: 100,
			tilt: -45,
			colorStart: 'accent-background-strong',
			colorEnd: 'static-transparent',
			opacity: 100
		},
		dots: {
			display: false,
			size: 24,
			color: 'brand-on-background-weak',
			opacity: 100
		},
		lines: {
			display: false,
			color: 'neutral-alpha-weak',
			opacity: 100
		},
		grid: {
			display: true,
			color: 'neutral-alpha-weak',
			opacity: 100
		}
	}
}

export async function generateMetadata() {
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Home() {
	return (
		<Column
			paddingTop='xl'
			maxWidth="l" gap="xl"
			alignItems="center">
			<Column
				fillWidth
				paddingY="xl" gap="m">
				<Column
					maxWidth="m">
					<RevealFx
						translateY="4" fillWidth justifyContent="center" paddingBottom="m">
						<Heading
							wrap="balance"
							align='center'
							variant="display-strong-l">
							Transform your online presence with high-converting websites.
						</Heading>
					</RevealFx>
					<RevealFx
						translateY="8" delay={0.2} fillWidth justifyContent="flex-start" paddingBottom="m">
						<Text
							wrap="balance"
							onBackground="neutral-weak"
							align='center'
							variant="heading-default-xl">
							Get more than a website get results We create attention-grabbing high-performing websites that work as hard as you do Expect big things
						</Text>
					</RevealFx>
					<RevealFx paddingY='m' translateY="12" delay={0.4} justifyContent="center">
						<Button
							id="about"
							data-border="rounded"
							href="./proposal"

							variant="secondary"
							size="l"
							arrowIcon>
							GET A PROPOSAL

						</Button>
					</RevealFx>
				</Column>
			</Column >
			<RevealFx translateY="16" delay={0.6}>
				<Projects range={[1, 1]} />
			</RevealFx>
			<Column
				fillWidth
				paddingY='l' gap='m'
			>
				<Column maxWidth="m">
					<Heading
						wrap="balance"
						align='center'
						onBackground='accent-strong'
						variant="display-strong-l">
						Not your average website – Expect Big things.
					</Heading>

					<Column paddingY='m'>
						<Text
							align="center"
							wrap="balance"
							onBackground="neutral-weak"
							variant="heading-default-xl"
						>At Squa Media, we create stunning, user-friendly websites designed to perform and drive results. Whether you're a start-up or an established business, our cutting-edge designs and proven strategies help you thrive online.</Text>
					</Column>
				</Column>
			</Column>
			{
				// routes['/blog'] && (
				// 	<Flex
				// 		fillWidth gap="24"
				// 		mobileDirection="column">
				// 		<Flex flex={1} paddingLeft="l">
				// 			<Heading
				// 				as="h2"
				// 				variant="display-strong-xs"
				// 				wrap="balance">
				// 				Latest from the blog
				// 			</Heading>
				// 		</Flex>
				// 		<Flex
				// 			flex={3} paddingX="20">
				// 			<Posts range={[1, 2]} columns="2" />
				// 		</Flex>
				// 	</Flex>
				// )
			}
			<Column
				fillWidth
				paddingY='l' gap='m'
			>
				<Column maxWidth="m">
					<Heading
						wrap="balance"
						align='center'
						// onBackground='accent-weak'
						variant="display-strong-m">
						Our services
					</Heading>

					<Column>
						<Text
							align="center"
							wrap="balance"
							onBackground="neutral-weak"
							variant="heading-default-xl"
						>Don't just get online results</Text>
					</Column>
				</Column>

				<Row gap='m' mobileDirection='column' fillWidth>
					<Card
						maxWidth={24}
						radius="l-4"
						paddingY='l'
						padding='l'
						border='accent-weak'
						direction="column"
					>
						<Column fillWidth>
							<Text
								as="h2"
								variant="heading-strong-m"
								wrap="balance">
								Web Design & Development
							</Text>
							<Column paddingTop='m'>
								<Text
									variant="label-default-m"
									onBackground='neutral-weak'
								>
									Your website is the face of your brand. Our team crafts custom, responsive designs that engage visitors, build trust, and drive action. With a focus on seamless navigation and modern aesthetics, we deliver websites that look great and perform even better.
								</Text>
							</Column>
						</Column>

					</Card>
					<Card
						maxWidth={24}
						radius="l-4"
						paddingY='l'
						padding='l'
						border='accent-weak'
						direction="column"
					>
						<Column fillWidth>
							<Text
								as="h2"
								variant="heading-strong-m"
								wrap="balance">
								E-commerce Solutions
							</Text>
							<Column paddingTop='m'>
								<Text
									variant="label-default-m"
									onBackground='neutral-weak'
								>
									Turn your visitors into customers with a beautifully designed e-commerce website. We create secure, easy-to-navigate online stores that enhance the shopping experience and drive sales, using intuitive product displays, easy checkout processes, and advanced functionality.
								</Text>
							</Column>
						</Column>

					</Card>
					<Card
						maxWidth={24}
						radius="l-4"
						paddingY='l'
						padding='l'
						border='accent-weak'
						direction="column"
					>
						<Column fillWidth>
							<Text
								as="h2"
								variant="heading-strong-m"
								wrap="balance">
								Website Maintenance & Support
							</Text>
							<Column paddingTop='m'>
								<Text
									variant="label-default-m"
									onBackground='neutral-weak'
								>
									Your website is a living entity that requires ongoing care. From updates to security patches, we provide continuous maintenance and support to ensure your website runs smoothly, safely, and remains up-to-date with the latest trends.
								</Text>
							</Column>
						</Column>

					</Card>

				</Row>
			</Column>
			<Column
				fillWidth
			>
				<Flex fillWidth alignItems='flex-start'>
					<Heading
						as="h2"
						align='left'
						variant="display-strong-xs"
					>
						Our process
					</Heading>
				</Flex>

				<Column paddingY='l' fillWidth>
					<RevealFx
						speed="slow"
						delay={0}
						translateY={13}
						trigger
					>
						<Grid gap='l' mobileColumns={2} columns={4}>
							<Column gap="xs" justifyContent='flex-start' alignItems='flex-start'>
								<Flex fillWidth>
									<Icon
										name="strategy"
										onBackground="neutral-strong"
										align='start'
										size="l" />
								</Flex>
								<Heading
									as="h2"
									variant="label-default-m"
									wrap="balance">
									Discovery & Strategy
								</Heading>
								<Text
									wrap="balance"
									onBackground="neutral-weak"
									align='left'
									variant="label-default-s">
									We start by getting to know your business, goals, and audience. This ensures the website we create is aligned with your brand and objectives.
								</Text>
							</Column>
							<Column gap="xs" justifyContent='flex-start' alignItems='flex-start'>
								<Flex fillWidth>
									<Icon
										name="design"
										onBackground="neutral-strong"
										align='start'
										size="l" />
								</Flex>
								<Heading
									as="h2"
									variant="label-default-m"
									wrap="balance">
									Design & Development
								</Heading>
								<Text
									wrap="balance"
									onBackground="neutral-weak"
									align='left'
									variant="label-default-s">
									Our expert designers create custom layouts that are both beautiful and functional. Then, our developers bring them to life with responsive, high-performance code.
								</Text>
							</Column>
							<Column gap="xs" justifyContent='flex-start' alignItems='flex-start'>
								<Flex fillWidth>
									<Icon
										name="speed"
										onBackground="neutral-strong"
										align='start'
										size="l" />
								</Flex>
								<Heading
									as="h2"
									variant="label-default-m"
									wrap="balance">
									Testing & Optimization
								</Heading>
								<Text
									wrap="balance"
									onBackground="neutral-weak"
									align='left'
									variant="label-default-s">
									launch, we rigorously test your site to ensure it’s working perfectly across all devices and browsers. We also fine-tune for speed, SEO, and conversion optimization.
								</Text>
							</Column>
							<Column gap="xs" justifyContent='flex-start' alignItems='flex-start'>
								<Flex fillWidth>
									<Icon
										name="rocket"
										onBackground="neutral-strong"
										align='start'
										size="l" />
								</Flex>
								<Heading
									as="h2"
									variant="label-default-m"
									wrap="balance">
									Launch & Beyond
								</Heading>
								<Text
									wrap="balance"
									onBackground="neutral-weak"
									align='left'
									variant="label-default-s">
									We don’t just stop at launch. Our team provides ongoing support, ensuring your website stays up to date and continues to perform at its best.
								</Text>
							</Column>

						</Grid>
					</RevealFx>
				</Column>
			</Column>
			<Column
				fillWidth
				paddingY='l' gap='m'
			>
				<Column maxWidth="m">
					<Heading
						wrap="balance"
						align='center'
						// onBackground='accent-weak'
						variant="display-strong-m">
						Affordable, High-Quality Web Design Without Compromise
					</Heading>

					<Column marginTop='m'>
						<Text
							align="center"
							wrap="balance"
							onBackground="neutral-weak"
							variant="label-default-m"
						>

							At <LetterFx
								speed="fast"
								trigger="hover"
								charset={[

									'@',
									'$',
									'#',
									'?',
									'*',
									'+'
								]}
							> SQUA MEDIA</LetterFx>, we create high-quality, results-driven websites tailored to your budget, with personalized solutions that focus on functionality, design, and conversion.

						</Text>
					</Column>
				</Column>

				<Row gap='m' mobileDirection='column' fillWidth>
					<TiltFx
						position="relative"
						maxWidth={24}
						// aspectRatio={0.75}
						radius="l"
					>
						<Card
							maxWidth={24}
							radius="l-4"
							paddingY='m'
							padding='s'
							border='accent-weak'
							background='accent-weak'
							direction="column"
						>
							<Column fillWidth>
								<Text
									as="h2"
									variant="heading-strong-xs"
									wrap="balance"
									align='center'
									style={{ lineHeight: 1.5 }}


								>
									Custom Design
								</Text>
								<Column paddingTop='xs'>
									<Text
										variant="label-default-s"
										onBackground='neutral-weak'
										align='center'
										style={{ lineHeight: 1.5 }}


									>
										No templates, just bespoke websites tailored to your needs.
									</Text>
								</Column>
							</Column>

						</Card>
					</TiltFx>
					<TiltFx
						position="relative"
						maxWidth={24}
						// aspectRatio={0.75}
						radius="l"
					>
						<Card
							maxWidth={24}
							radius="l-4"
							paddingY='m'
							padding='s'
							border='accent-weak'
							background='accent-weak'
							direction="column"
						>

							<Column fillWidth>
								<Text
									as="h2"
									variant="heading-strong-xs"
									wrap="balance"
									align='center'
								>
									Responsive Design
								</Text>
								<Column paddingTop='xs'>
									<Text
										variant="label-default-s"
										onBackground='neutral-weak'
										align='center'

									>
										Your site will look stunning on any device—desktop, tablet, or mobile.

									</Text>
								</Column>
							</Column>

						</Card>
					</TiltFx>
					<TiltFx
						position="relative"
						maxWidth={24}
						// aspectRatio={0.75}
						radius="l"
					>
						<Card
							maxWidth={24}
							radius="l-4"
							paddingY='m'
							padding='s'
							border='accent-weak'
							background='accent-weak'
							direction="column"
						>
							<Column fillWidth>
								<Text
									as="h2"
									variant="heading-strong-xs"
									wrap="balance"
									align='center'

								>
									Conversion-Focused
								</Text>
								<Column paddingTop='xs'>
									<Text
										variant="label-default-s"
										onBackground='neutral-weak'
										align='center'
										style={{ lineHeight: 1.5 }}


									>
										Every site we build is optimized for user engagement and conversion, ensuring you get the most out of your online presence.
									</Text>
								</Column>
							</Column>

						</Card>
					</TiltFx>
					<TiltFx
						position="relative"
						maxWidth={24}
						// aspectRatio={0.75}
						radius="l"
					>
						<Card
							maxWidth={24}
							radius="l-4"
							paddingY='m'
							padding='s'
							border='accent-weak'
							background='accent-weak'
							direction="column"
						>
							<Column fillWidth>
								<Text
									as="h2"
									variant="heading-strong-xs"
									wrap="balance"
									align='center'
								>

									Affordable Packages
								</Text>
								<Column paddingTop='xs'>
									<Text
										variant="label-default-s"
										onBackground='neutral-weak'
										align='center'

									>
										Top-quality design that’s accessible for businesses of all sizes.
									</Text>
								</Column>
							</Column>

						</Card>
					</TiltFx>

				</Row>
			</Column>
			<Column
				fillWidth
			>
				<Flex fillWidth alignItems='flex-start'>
					{/* <Heading
						as="h2"
						align='left'
						variant="display-strong-xs"
					>
						Our process
					</Heading> */}
				</Flex>

				<Column paddingY='l' fillWidth>
					<RevealFx
						speed="slow"
						delay={0}
						translateY={13}
						trigger
					>
						<Grid gap='l' mobileColumns={1} columns={2}>
							<Column gap='l'>
								<Column gap="m" justifyContent='flex-start' alignItems='flex-start'>
									<Heading
										as="h2"
										variant="heading-strong-xl"
										wrap="balance">
										Why do I need a new website?
									</Heading>
									<Column

									>
										<Text
											wrap="balance"
											onBackground="neutral-weak"
											align='left'
											style={{ lineHeight: 1.5 }}

											variant="label-default-xl">
											Your website is the digital face of your business, and a modern, well-designed site is essential for various reasons. We all know first impressions count and a professionally built modern site builds trust immediately, whilst also ensuring a seamless experience across devices, enhancing user satisfaction and improving search engine rankings.
										</Text>

										<Text
											wrap="balance"
											onBackground="neutral-weak"
											align='left'
											marginTop='xs'
											style={{ lineHeight: 1.5 }}

											variant="label-default-xl">
											A new website also allows you to realign your online presence with your evolving brand identity and stay competitive by adopting the latest web technologies. Invest in a new website and power your business forward with a modern, high-performing online presence!
										</Text>
									</Column>
								</Column>
								<Column gap="m" justifyContent='flex-start' alignItems='flex-start'>
									<Heading
										as="h2"
										variant="heading-strong-xl"
										wrap="balance">
										Which web platform should I choose?
									</Heading>
									<Column

									>
										<Text
											wrap="balance"
											onBackground="neutral-weak"
											align='left'
											style={{ lineHeight: 1.5 }}
											variant="label-default-xl">
											As experts in web design, we understand the importance of selecting the right website platform tailored to your specific needs. The choice of a website platform depends on various factors, including your business goals, functionality requirements, and scalability. We are well-versed in working with a diverse range of platforms, such as WordPress, Shopify, Magento and more, and our experienced team will be happy to guide you in selecting the one that aligns seamlessly with your business objectives.


										</Text>

										<Text
											wrap="balance"
											onBackground="neutral-weak"
											align='left'
											style={{ lineHeight: 1.5 }}
											marginTop='xs'
											variant="label-default-xl">
											Rest assured, we’ll deliver you a stunning website, that works the way you need it to, regardless of the platform you choose!
										</Text>
									</Column>
								</Column>
								<Column gap="m" justifyContent='flex-start' alignItems='flex-start'>
									<Heading
										as="h2"
										variant="heading-strong-xl"
										wrap="balance">
										How can I trust your agency to deliver a high-quality website?
									</Heading>
									<Column

									>
										<Text
											wrap="balance"
											onBackground="neutral-weak"
											align='left'
											className='l-2'
											style={{ lineHeight: 1.5 }}

											variant="label-default-xl">
											We have a proven track record of successful projects and satisfied clients. We’re happy to share case studies and testimonials to demonstrate our reliability and the quality of our work.
										</Text>
									</Column>
								</Column>
								<Column gap="m" justifyContent='flex-start' alignItems='flex-start'>
									<Heading
										as="h2"
										variant="heading-strong-xl"
										wrap="balance">
										Do you offer ongoing maintenance and support?
									</Heading>
									<Column

									>
										<Text
											wrap="balance"
											onBackground="neutral-weak"
											align='left'
											style={{ lineHeight: 1.5 }}

											variant="label-default-xl">
											We do indeed. We have many hosting and support packages that are designed to meet the requirements of all web project sizes, big and small.
										</Text>
									</Column>
								</Column>
							</Column>

							<Column gap='l' >
								<Column gap="m" justifyContent='flex-start' alignItems='flex-start'>
									<Heading
										as="h2"
										variant="heading-strong-xl"
										wrap="balance">
										Which web platform should I choose?
									</Heading>
									<Column

									>
										<Text
											wrap="balance"
											onBackground="neutral-weak"
											align='left'
											style={{ lineHeight: 1.5 }}

											variant="label-default-xl">
											As experts in web design, we understand the importance of selecting the right website platform tailored to your specific needs. The choice of a website platform depends on various factors, including your business goals, functionality requirements, and scalability. We are well-versed in working with a diverse range of platforms, such as WordPress, Shopify, Magento and more, and our experienced team will be happy to guide you in selecting the one that aligns seamlessly with your business objectives.


										</Text>

										<Text
											wrap="balance"
											onBackground="neutral-weak"
											align='left'
											marginTop='xs'
											style={{ lineHeight: 1.5 }}

											variant="label-default-xl">
											Rest assured, we’ll deliver you a stunning website, that works the way you need it to, regardless of the platform you choose!
										</Text>
									</Column>
								</Column>
								<Column gap="m" justifyContent='flex-start' alignItems='flex-start'>
									<Heading
										as="h2"
										variant="heading-strong-xl"
										wrap="balance">
										Why should we choose professional web design over using a website builder?
									</Heading>
									<Column

									>
										<Text
											wrap="balance"
											onBackground="neutral-weak"
											align='left'
											style={{ lineHeight: 1.5 }}

											variant="label-default-xl">
											Professional web design offers a level of customisation, expertise, and support that website builders can’t match. Our team ensures your website is tailored to your brand, optimised for search engines, and designed to meet your specific business objectives.


										</Text>


									</Column>
								</Column>
								<Column gap="m" justifyContent='flex-start' alignItems='flex-start'>
									<Heading
										as="h2"
										variant="heading-strong-xl"
										wrap="balance">
										Can I have input during the design process?
									</Heading>
									<Column

									>
										<Text
											wrap="balance"
											onBackground="neutral-weak"
											align='left'
											style={{ lineHeight: 1.5 }}

											variant="label-default-xl">
											Definitely. Client collaboration is crucial to our process. We encourage feedback at all stages to ensure the final product meets your expectations and needs.


										</Text>


									</Column>
								</Column>
								<Column gap="m" justifyContent='flex-start' alignItems='flex-start'>
									<Heading
										as="h2"
										variant="heading-strong-xl"
										wrap="balance">
										How long will it take to build my website?
									</Heading>
									<Column

									>
										<Text
											wrap="balance"
											onBackground="neutral-weak"
											align='left'
											style={{ lineHeight: 1.5 }}

											variant="label-default-xl">
											The length of time it takes to build a website depends entirely on the scope and scale of the project, whether you have your content already created, and a few other factors. Providing an exact timescale can therefore be tricky, but it usually takes a couple of months.
										</Text>


									</Column>
								</Column>
							</Column>
						</Grid>
					</RevealFx>
				</Column>
			</Column>
			<Flex
				style={{ overflow: 'hidden' }}
				position="relative"
				maxWidth={"s"}
				fillWidth padding="xl" radius="l" marginBottom="m"
				direction="column" alignItems="center" align="center"
				background="surface" border="neutral-medium" >
				<Flex
					fill
					minHeight={16}
					position="absolute"
					top='0'
					radius="l"
				>
					<Background
						position="absolute"
						mask={{
							cursor: false
						}}
						gradient={{
							colorEnd: 'static-transparent',
							colorStart: 'accent-solid-strong',
							display: true,
							height: 100,
							opacity: 60,
							tilt: 50,
							width: 150,
							x: 0,
							y: 0
						}}
						dots={{
							color: 'accent-on-background-medium',
							display: false,
							opacity: 100,
							size: '64'
						}}
						grid={{
							color: 'neutral-alpha-medium',
							display: true,
							height: 'var(--static-space-32)',
							opacity: 10,
							width: 'var(--static-space-32)'
						}}
						lines={{
							display: false,
							opacity: 100,
							size: '24'
						}}
					/>
				</Flex>
				<Heading style={{ position: 'relative' }}
					marginBottom="s"
					variant="display-strong-xs">
					Whenever you're ready:
					<Flex onBackground='accent-weak'>
						Let's talk about your project.
					</Flex>
				</Heading>
				<Text
					style={{
						position: 'relative',
						maxWidth: 'var(--responsive-width-xs)'
					}}
					wrap="balance"
					marginBottom="l"
					onBackground="neutral-medium">
				</Text>
				<Button
					id="about"
					data-border="rounded"
					href="./proposal"
					variant="secondary"
					size="l"
					arrowIcon>
					GET A PROPOSAL
				</Button>

			</Flex>
		</Column >
	);
}
