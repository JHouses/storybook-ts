import React, { FC } from 'react';

type ButtonTypes = {
    label: string;
    outlined?: boolean;
    onClick(): void;
    disabled?: boolean;
}

const BASE_BUTTON = 'rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg';
const CONTAINED_BUTTON = `${BASE_BUTTON} bg-purple-400 border border-purple-400 text-white`;
const OUTLINED_BUTTON = `${BASE_BUTTON} border border-purple-400 text-purple-400`;

export const Button: FC<ButtonTypes> = ({label = "some label", outlined, onClick, disabled}) => {
    return (
        <button
            onClick={onClick}
            className={outlined ? OUTLINED_BUTTON : CONTAINED_BUTTON}
            disabled={disabled}
        >
            <span>{label}</span>
        </button>
    );
}
