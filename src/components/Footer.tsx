import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components"
import { person, social } from '@/app/resources/content';
import styles from './Footer.module.scss'

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Flex
            as="footer"
            position="relative"
            fillWidth padding="8"
            justifyContent="center" mobileDirection="column">
            <Flex
                className={styles.mobile}
                fillWidth maxWidth="m" paddingY="8" paddingX="16" gap="16"
                justifyContent="space-between" alignItems="center">
                <Text
                    variant="body-default-s"
                    onBackground="neutral-strong">
                    <Text
                        onBackground="neutral-weak">
                        © {currentYear} /
                    </Text>
                    <Text paddingX="4">
                        squamedia
                    </Text>
                    <Text onBackground="neutral-weak">
                        {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
                        {/* /Made with <SmartLink style={{ marginLeft: '-0.125rem' }} href="https://once-ui.com/templates/magic-portfolio">Once UI</SmartLink> */}
                    </Text>
                </Text>
               
            </Flex>
            <Flex height="80" show="s"></Flex>
        </Flex>
    )
}