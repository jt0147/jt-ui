import { useCallback, useState } from "react";
import SynTaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { TCode } from "./types";

const Code = ({
    content,
    enableCopy = true,
    language,
    title = "Example code",
}: TCode) => {
    const [copying, setCopying] = useState<boolean>(false);

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(content);
        setCopying(true);
        setTimeout(() => {
            setCopying(false);
        }, 3000);
    }, [content]);

    return (
        <div className="rounded-md overflow-hidden bg-[#3a404d] text-white">
            <div className="flex justify-between items-center px-4 h-9">
                <div className="text-sm font-semibold first-letter:uppercase">
                    {title}
                </div>
                {enableCopy && (
                    <button
                        className="inline-flex items-center gap-1"
                        onClick={handleCopy}
                    >
                        {copying ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                viewBox="0 0 512 512"
                                fill="currentColor"
                            >
                                <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                viewBox="0 0 512 512"
                                fill="currentColor"
                            >
                                <path d="M368 48h-11.41a8 8 0 01-7.44-5.08A42.18 42.18 0 00309.87 16H202.13a42.18 42.18 0 00-39.28 26.92 8 8 0 01-7.44 5.08H144a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V112a64 64 0 00-64-64zm-48.13 64H192.13a16 16 0 010-32h127.74a16 16 0 010 32z" />
                            </svg>
                        )}
                        <span className="first-letter:uppercase">
                            {copying ? "copied!" : "copy"}
                        </span>
                    </button>
                )}
            </div>
            <SynTaxHighlighter
                language={language}
                style={atomOneDark}
                customStyle={{
                    padding: "1rem",
                }}
                wrapLongLines={true}
            >
                {content}
            </SynTaxHighlighter>
        </div>
    );
};

export default Code;
