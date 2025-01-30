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
import Script from 'next/script';


export default function Proposal() {
    return (
        <Column
            paddingTop='xl'
            marginTop='s'
            fillWidth gap="xl"
            alignItems="center">
            <Column
                alignItems='center'
                fillWidth
                padding='m'>


                <Column fillWidth paddingTop='m'>


                    <div className="calendly-inline-widget" data-url="https://calendly.com/hello-squamedia/30min" style={{ height: "796px", width: "100%" }} ></div>

                    <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
                </Column>

            </Column>

        </Column >
    );
}

