import React, { FC } from 'react';

type TextTypes = {
    label: string;
    bold: boolean;
}

const BASE_TEXT = 'font-normal text-lg text-white';
const BOLD_TEXT = `${BASE_TEXT} font-bold`;
//const OUTLINED_BUTTON = `${BASE_BUTTON} border border-teal-400 text-teal-400`;

export const Text: FC<TextTypes> = ({label, bold}) => {
    return (
        <p
            className={bold ? BOLD_TEXT : BASE_TEXT}
        >
            <span>{label}</span>
        </p>
    );
}
