import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

import LogoReact from './react';


export const DefaultComponent = () => (
    <>
        <LogoReact width={number('width', 100)} />
    </>
);
export default {
    title: 'Logo React',
    component: DefaultComponent,
    decorators: [withKnobs],
};
