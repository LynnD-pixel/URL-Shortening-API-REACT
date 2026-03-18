const BITLY_TOKEN = import.meta.env.VITE_BITLY_TOKEN;

export async function shortenWithBitly(longUrl) {
    const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${BITLY_TOKEN}`,
        },
        body: JSON.stringify({
            long_url: longUrl,
        }),
    });
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data?.message || "Bitly request failed");
    }
    return data.link;
}