"use client";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column, Card, Row, Grid, Icon, GlitchFx, TiltFx, LetterFx, Background, Input, Checkbox, Textarea } from '@/once-ui/components';

import { useActionState } from "react";
import { sendContactForm } from "@/app/actions";


const initialState = {
    success: false,
    message: "",
};

export default function Proposal() {
    const [state, formAction, pending] = useActionState(sendContactForm, initialState);

    return (
        <Column
            paddingTop='xl'
            maxWidth="l" gap="xl"
            alignItems="center">
            <Column
                maxWidth={"s"}
                fillWidth
                padding='m'>
                <form
                    action={formAction}

                >
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
                                // value=""
                                required
                                name='name'
                            // onChange={onChange}
                            />
                            <Input
                                id="example"
                                label="email"
                                // value=""
                                required

                                name='email'
                            // onChange={onChange}
                            />
                            <Input
                                id="example"
                                label="Phone number"
                                // value=""
                                name='phone'
                            // onChange={onChange}
                            />
                            <Column>
                                <Text
                                    wrap="balance"

                                    align='left'
                                    variant="heading-default-l">
                                    What kind of service are you looking for?
                                </Text>
                                <Column marginTop='s' gap='m'>
                                    <Checkbox
                                        label="E-commerce website"
                                        // description="Please read and accept the terms and conditions"
                                        // onToggle={onToggle}
                                        name='ecommerce'
                                    />
                                    <Checkbox
                                        label="Business website"
                                        // description="Please read and accept the terms and conditions"
                                        // onToggle={onToggle}
                                        name="business"
                                    />
                                    <Checkbox
                                        label="Web Re-design"
                                        // description="Please read and accept the terms and conditions"
                                        // onToggle={onToggle}
                                        name='redesign'
                                    />
                                    <Checkbox
                                        label="Other"
                                        // description="Please read and accept the terms and conditions"
                                        // onToggle={onToggle}
                                        name='other'
                                    />
                                </Column>
                            </Column>
                            <Textarea
                                id="example-textarea"
                                label="Message"
                                lines={6}
                                description=""
                                name='message'
                                resize="vertical"
                            />

                            <Button
                                // onClick={k}
                                type='submit'
                                fillWidth
                                variant="primary"
                                size="l"
                                label="Submit"
                                loading={pending}
                            />
                        </Column>
                    </Column>
                    {state.message && (
                        <p
                            aria-live="polite"
                            className={`mt-4 ${state.success ? "text-green-600" : "text-red-600"}`}
                        >
                            {state.message}
                        </p>
                    )}
                </form>

            </Column>

        </Column >
    );
}
