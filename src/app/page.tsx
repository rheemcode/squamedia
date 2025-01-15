import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column, Card, Row, Grid, Icon, GlitchFx, TiltFx, LetterFx } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes } from '@/app/resources';
import { home, about, person, newsletter } from '@/app/resources/content';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';

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
			maxWidth="m" gap="xl"
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
							href="/about"
							variant="secondary"
							size="m"
							arrowIcon>
							<Flex
								gap="8"
								alignItems="center">
								Learn more
							</Flex>
						</Button>
					</RevealFx>
				</Column>
			</Column>
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
						onBackground='accent-weak'
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
			{routes['/blog'] && (
				<Flex
					fillWidth gap="24"
					mobileDirection="column">
					<Flex flex={1} paddingLeft="l">
						<Heading
							as="h2"
							variant="display-strong-xs"
							wrap="balance">
							Latest from the blog
						</Heading>
					</Flex>
					<Flex
						flex={3} paddingX="20">
						<Posts range={[1, 2]} columns="2" />
					</Flex>
				</Flex>
			)}

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

									>
									Custom Design
								</Text>
								<Column paddingTop='xs'>
									<Text
										variant="label-default-s"
										onBackground='neutral-weak'
										align='center'

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


			{newsletter.display &&
				<Mailchimp newsletter={newsletter} />
			}
		</Column>
	);
}
