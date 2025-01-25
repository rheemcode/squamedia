import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from 'classnames';

import { Footer, Header, RouteGuard } from "@/components";
import { baseURL, effects, style } from '@/app/resources'

import { Inter } from 'next/font/google'
import { Source_Code_Pro } from 'next/font/google';

import { person, home } from '@/app/resources/content';
import { Background, Flex } from "@/once-ui/components";

export async function generateMetadata() {
	return {
		metadataBase: new URL(`https://www.squamedia.com`),
		title: "Web Development Agency & Services: Professional Engaging Websites",
		description: home.description,
		twitter: {
			card: "summary_large_image"
		},
		openGraph: {
			title: `Web Development Agency & Services: Professional Engaging Websites`,
			description: 'Choose Squamedia if you want a responsive website that will exceed your expectations, bring joy to users and more importantly gets real results - experts in web design.',
			url: baseURL,
			siteName: `Web Development Agency & Services: Professional Engaging Websites`,
			locale: 'en_US',
			type: 'website',
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
	}
};

const primary = Inter({
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap',
})

type FontConfig = {
	variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
*/

const code = Source_Code_Pro({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

interface RootLayoutProps {
	children: React.ReactNode;
}

export default async function RootLayout({
	children
}: RootLayoutProps) {
	return (
		<Flex
			as="html" lang="en"
			background="page"
			data-theme="light"
			data-brand="violet"
			data-accent="blue"
			data-neutral="slate"
			data-border="conservative"
			data-solid="contrast"
			data-solid-style="flat"
			data-surface="filled"
			data-transition="all"
			className={classNames(
				primary.variable,
				secondary ? secondary.variable : '',
				tertiary ? tertiary.variable : '',
				code.variable)}>
			<Flex style={{ minHeight: '100vh' }}
				as="body"
				fillWidth margin="0" padding="0"
				direction="column">
				<Background
					mask={{
						cursor: effects.mask.cursor,
						x: effects.mask.x,
						y: effects.mask.y,
						radius: effects.mask.radius
					}}
					gradient={{
						display: effects.gradient.display,
						x: effects.gradient.x,
						y: effects.gradient.y,
						width: effects.gradient.width,
						height: effects.gradient.height,
						tilt: effects.gradient.tilt,
						colorStart: effects.gradient.colorStart,
						colorEnd: effects.gradient.colorEnd,
						opacity: effects.gradient.opacity as 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
					}}
					dots={{
						display: effects.dots.display,
						color: effects.dots.color,
						size: effects.dots.size as any,
						opacity: effects.dots.opacity as any
					}}
					grid={{
						display: effects.grid.display,
						color: effects.grid.color,
						width: effects.grid.width as any,
						height: effects.grid.height as any,
						opacity: effects.grid.opacity as any
					}}
					lines={{
						display: effects.lines.display,
						opacity: effects.lines.opacity as any
					}} />
				{/* <Flex
					fillWidth
					minHeight="16">
				</Flex> */}
				<Header />
				<Flex
					position="relative"
					zIndex={0}
					fillWidth paddingY="l" paddingX="l"
					justifyContent="center" flex={1}>
					<Flex
						justifyContent="center"
						fillWidth minHeight="0">
						<RouteGuard>
							{children}
						</RouteGuard>
					</Flex>
				</Flex>
				<Footer />
			</Flex>
		</Flex>
	);
}