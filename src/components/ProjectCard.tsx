"use client";

import { AvatarGroup, Carousel, Flex, Heading, SmartLink, Text, TiltFx } from "@/once-ui/components";

interface ProjectCardProps {
    href: string;
    priority?: boolean;
    images: string[];
    title: string;
    content: string;
    description: string;
    avatars: { src: string }[];
    link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    href,
    images = [],
    title,
    content,
    description,
    avatars,
    link,
}) => {
    return (
        <Flex
            fillWidth gap="m"
            direction="column">
            <TiltFx

                position="relative"
            // maxWidth={24}
            // aspectRatio={0.75}

            >
                <Carousel
                    sizes="(max-width: 960px) 100vw, 960px"
                    images={["/images/projects/project-01/azapay.png", "/images/projects/project-01/project3.png"].map(image => ({
                        src: image,
                        alt: title
                    }))} />
            </TiltFx>
            <Flex
                mobileDirection="column"
                fillWidth paddingX="s" paddingTop="12" paddingBottom="24" gap="l">
                {title && (
                    <Flex
                        flex={5}>
                        <Heading
                            as="h2"
                            wrap="balance"
                            variant="heading-strong-xl">
                            Explore our work and see how we bring ideas to life.
                        </Heading>
                    </Flex>
                )}
                {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
                    <Flex
                        flex={7} direction="column"
                        gap="16">
                        {avatars?.length > 0 && (
                            <AvatarGroup
                                avatars={avatars}
                                size="m"
                                reverse />
                        )}
                        {description?.trim() && (
                            <Text
                                wrap="balance"
                                variant="body-default-s"
                                onBackground="neutral-weak">
                                "Working with this team was a game-changer for my business. They built a stunning website that not only looks amazing but also drives real results. Highly recommend their services!"
                            </Text>
                        )}
                        {/* <Flex gap="24" wrap>
                            {content?.trim() && (
                                <SmartLink
                                    suffixIcon="arrowRight"
                                    style={{ margin: '0', width: 'fit-content' }}
                                    href={href}>
                                    <Text
                                        variant="body-default-s">
                                        Read case study
                                    </Text>
                                </SmartLink>
                            )}
                        </Flex> */}
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
};
