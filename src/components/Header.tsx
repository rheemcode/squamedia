"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Logo, ToggleButton, Text, Button, IconButton, Row, StyleOverlay } from "@/once-ui/components"
import styles from '@/components/Header.module.scss'

import { routes, display } from '@/app/resources'
import { person, home, about, blog, work, gallery } from '@/app/resources/content';

type TimeDisplayProps = {
    timeZone: string;
    locale?: string;  // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = 'en-GB' }) => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            };
            const timeString = new Intl.DateTimeFormat(locale, options).format(now);
            setCurrentTime(timeString);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, [timeZone, locale]);

    return (
        <>
            {currentTime}
        </>
    );
};

export default TimeDisplay;

export const Header = () => {
    const pathname = usePathname() ?? '';

    return (
        <>
            {/* <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9}/>
            <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9}/> */}
            <Fade
                zIndex={3}
                pattern={{
                    display: true,
                    size: "4",
                }}
                position="fixed"
                top="0"
                left="0"
                to="bottom"
                height={5}
                fillWidth
                blur={0.25}
            />
            <Row position="fixed" top="0" fillWidth justifyContent="center" zIndex={3}>
                <Row
                    data-border="rounded"
                    justifyContent="space-between"
                    maxWidth="xl"
                    paddingRight="64"
                    paddingLeft="32"
                    paddingY="20"
                >
                    <Logo iconSrc="./images/logo-icon.png" wordmarkSrc="./images/logo-wordmark.png"  size="l" wordmark={true} href="."></Logo>
                    {/* <Text

                        align="center"
                        wrap="balance"
                        variant="heading-strong-xl"
                    >
                        SquaMedia
                    </Text> */}
                    {/* <Logo size="l" icon={false} href="." /> */}


                </Row>
            </Row>
            {/*  */}
        </>
    )
}

// const s = () => {
//     return (
//         <Flex
//             fitHeight
//             className={styles.position}
//             as="header"
//             zIndex={9}
//             fillWidth padding="8"
//             justifyContent="center">
//             <Flex
//                 paddingLeft="12"
//                 hide="s"
//                 fillWidth
//                 alignItems="center"
//                 textVariant="body-default-s">
//                 <Text
//                     align="center"
//                     wrap="balance"
//                     variant="display-default-xl"
//                 >SquaMedia</Text>
//                 {/* <Logo
//                         size="m"
//                         wordmark
//                         icon
//                         href="/"
//                     /> */}
//             </Flex>
//             <Flex fillWidth justifyContent="center">
//                 <Flex
//                     background="surface" border="neutral-medium" radius="m-4" shadow="l"
//                     padding="4"
//                     justifyContent="center">
//                     <Flex
//                         gap="4"
//                         textVariant="body-default-s">
//                         {routes['/'] && (
//                             <>
//                                 <ToggleButton
//                                     className="s-flex-hide"
//                                     prefixIcon="home"
//                                     href="/"
//                                     label={home.label}
//                                     selected={pathname === "/"} />
//                                 <ToggleButton
//                                     className="s-flex-show"
//                                     prefixIcon="home"
//                                     href="/"
//                                     selected={pathname === "/"} />
//                             </>
//                         )}
//                         {routes['/work'] && (
//                             <>
//                                 <ToggleButton
//                                     className="s-flex-hide"
//                                     prefixIcon="grid"
//                                     href="/work"
//                                     label={work.label}
//                                     selected={pathname.startsWith('/work')} />
//                                 <ToggleButton
//                                     className="s-flex-show"
//                                     prefixIcon="grid"
//                                     href="/work"
//                                     selected={pathname.startsWith('/work')} />
//                             </>
//                         )}
//                         {routes['/blog'] && (
//                             <>
//                                 <ToggleButton
//                                     className="s-flex-hide"
//                                     prefixIcon="book"
//                                     href="/blog"
//                                     label={blog.label}
//                                     selected={pathname.startsWith('/blog')} />
//                                 <ToggleButton
//                                     className="s-flex-show"
//                                     prefixIcon="book"
//                                     href="/blog"
//                                     selected={pathname.startsWith('/blog')} />
//                             </>
//                         )}
//                         {routes['/gallery'] && (
//                             <>
//                                 <ToggleButton
//                                     className="s-flex-hide"
//                                     prefixIcon="gallery"
//                                     href="/gallery"
//                                     label={gallery.label}
//                                     selected={pathname.startsWith('/gallery')} />
//                                 <ToggleButton
//                                     className="s-flex-show"
//                                     prefixIcon="gallery"
//                                     href="/gallery"
//                                     selected={pathname.startsWith('/gallery')} />
//                             </>
//                         )}
//                     </Flex>
//                 </Flex>
//             </Flex>
//             <Flex hide="s" fillWidth justifyContent="flex-end" alignItems="center">
//                 <Flex
//                     paddingRight="12"
//                     justifyContent="flex-end" alignItems="center"
//                     textVariant="body-default-s"
//                     gap="20">
//                     <Flex hide="s">
//                         {display.time && (
//                             <TimeDisplay timeZone={person.location} />
//                         )}
//                     </Flex>
//                 </Flex>
//             </Flex>
//         </Flex>
//     )
// }