type classNameParameters = (string | number | null | undefined | boolean)[];

export const cn = (...classNames: classNameParameters): string => {
    const cls = classNames.filter(Boolean);
    return cls.join(" ");
};
