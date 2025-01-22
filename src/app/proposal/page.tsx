"use client";
import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column, Card, Row, Grid, Icon, GlitchFx, TiltFx, LetterFx, Background, Input, Checkbox, Textarea } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes } from '@/app/resources';
import { home, about, person, newsletter } from '@/app/resources/content';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import styles from './Style.module.scss'
import { error } from 'console';


export default function Proposal() {
    return (
        <Column
            paddingTop='xl'
            maxWidth="l" gap="xl"
            alignItems="center">
            <Column
                maxWidth={"s"}
                fillWidth
                padding='m'>
                <Flex
                    justifyContent='flex-start'

                >
                    <Text
                        as="h2"
                        align='left'
                        variant="heading-strong-m"
                        wrap="balance">
                        Tell us more about your project
                    </Text>
                </Flex>
                <Column marginTop='m'>
                    <Column
                        gap='m'
                        direction='column'
                    >
                        <Input
                            id="example"
                            label="Name"
                            value=""
                        // onChange={onChange}
                        />
                        <Input
                            id="example"
                            label="Company email"
                            value=""
                        // onChange={onChange}
                        />
                        <Input
                            id="example"
                            label="Phone number"
                            value=""
                        // onChange={onChange}
                        />
                        <Column>
                            <Text
                                wrap="balance"

                                align='left'
                                variant="heading-default-l">
                                I want to:
                            </Text>
                            <Column marginTop='s' gap='m'>
                                <Checkbox
                                    label="Scale my development team"
                                    description="Please read and accept the terms and conditions"
                                    // onToggle={onToggle}
                                    iconButtonProps={{
                                        onClick: (e) => { },
                                        tooltip: 'Learn more',
                                        tooltipPosition: 'top'
                                    }}
                                />
                                <Checkbox
                                    label="Build my digital product from scratch"
                                    description="Please read and accept the terms and conditions"
                                    // onToggle={onToggle}
                                    iconButtonProps={{
                                        onClick: (e) => { },
                                        tooltip: 'Learn more',
                                        tooltipPosition: 'top'
                                    }}
                                />
                                <Checkbox
                                    label="Mordernize existing application"
                                    description="Please read and accept the terms and conditions"
                                    // onToggle={onToggle}
                                    iconButtonProps={{
                                        onClick: (e) => { },
                                        tooltip: 'Learn more',
                                        tooltipPosition: 'top'
                                    }}
                                />
                            </Column>
                        </Column>
                        <Textarea
                            id="example-textarea"
                            label="Message"
                            lines={6}
                            description=""
                            resize="vertical"
                        />
                        <Button
                            // onClick={k}
                            fillWidth
                            variant="primary"
                            size="l"
                            label="Submit"
                        />
                    </Column>
                </Column>
            </Column>

        </Column >
    );
}
