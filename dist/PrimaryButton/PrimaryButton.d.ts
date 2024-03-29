import React, { ButtonHTMLAttributes } from 'react';
type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    disabled?: boolean;
};
export declare const PrimaryButton: React.FC<PrimaryButtonProps>;
export {};
