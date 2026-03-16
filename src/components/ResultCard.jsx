import { useState } from "react";

export default function ResultCard({ link }) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(link.shortUrl);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch {
            setCopied(false);
        }
    }
    return ( 
        <li className="result-item">
            <div className="result-original">{link.orginalUrl}</div>
            <div className="result-right"> 
                <a className="result-short" href={link.shortUrl} target="_blank" rel="noreferrer">
                {link.shortUrl}
                </a>
                <button type="button" className={`copy-btn ${copied ? "copied" : ""}`} onclick={handleCopy}>
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
        </li>
    );
}