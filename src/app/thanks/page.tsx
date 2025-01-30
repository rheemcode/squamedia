"use client";
import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column, Card, Row, Grid, Icon, GlitchFx, TiltFx, LetterFx, Background, Input, Checkbox, Textarea } from '@/once-ui/components';
import { baseURL, routes } from '@/app/resources';
import { home, about, person, newsletter } from '@/app/resources/content';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import styles from './Style.module.scss'
import { error } from 'console';
import Link from 'next/link';


export default function Proposal() {
    return (
        <Column
            paddingTop='xl'
            fillWidth gap="xl"
            style={{ alignSelf: "center" }}
            alignItems="center">
            <Column
                alignItems='center'
                fillWidth
                style={{ alignSelf: "center" }}
                padding='m'>
                <Heading

                    align='center'
                    variant="display-strong-m"
                    wrap="balance">
                    Thanks, We've got your message
                </Heading>

                <Column paddingTop='m'>
                    <Text
                        align='center'
                        as="h1"
                        variant="heading-strong-m"
                    >
                        We've got your message and we'll ain to get back to you within 24 hours
                    </Text>
                </Column>
                <Column paddingTop='l'>
                    <Text
                        align='center'
                        variant="label-default-m"
                        onBackground='neutral-weak'
                    >
                        Alternatively, you can <Link href={"/schedule"} > instantly schedule a call today </Link>
                    </Text>
                </Column>

            </Column>

        </Column >
    );
}
