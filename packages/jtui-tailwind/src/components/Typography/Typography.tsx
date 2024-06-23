import { TTypography } from "./types";

const Typography = ({
    as: Component = "div",
    className,
    fontSize,
    children,
}: TTypography) => {
    return (
        <Component className={className} data-font-size={fontSize}>
            {children}
        </Component>
    );
};

export default Typography;
