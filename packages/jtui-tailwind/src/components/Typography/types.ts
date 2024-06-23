import { ElementType, ReactNode } from "react";
import { TFontSize } from "@/utils";

export type TTypography = {
    as?: ElementType;

    className?: string;
    fontSize?: TFontSize;

    children?: ReactNode;
};

export type TCode = {
    title?: string;
    enableCopy?: boolean;

    language: string;
    content: string;
};
