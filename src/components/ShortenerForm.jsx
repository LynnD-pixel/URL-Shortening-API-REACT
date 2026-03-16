import { useState } from "react";

const BITLY_TOKEN = import.meta.env.VITE_BITLY_TOKEN;

export default function ShortenerForm({ addLink }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function isValidUrl(value) {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }

  async function shortenWithBitly(longUrl) {
    const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    const value = inputValue.trim();

    if (!value) {
      setError("Please add a link");
      return;
    }

    if (!isValidUrl(value)) {
      setError("Please enter a valid URL");
      return;
    }

    try {
      setLoading(true);

      const shortUrl = await shortenWithBitly(value);

      const linkObj = {
        id: Date.now(),
        originalUrl: value,
        shortUrl: shortUrl,
      };

      addLink(linkObj);

      setInputValue("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="shorten" id="shorten">
      <form id="shortenForm" onSubmit={handleSubmit} noValidate>
        <div className="input-group">
          <label htmlFor="urlInput" className="sr-only">
            Enter a URL to shorten
          </label>

          <input id="urlInput" type="url" placeholder="Shorten a link here..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}
            className={error ? "input-error" : ""}/>

          {error && (
            <span className="error" aria-live="polite">
              {error}
            </span>
          )}
        </div>

        <button type="submit" className="primary" disabled={loading}>
          {loading ? "Shortening..." : "Shorten It!"}
        </button>
      </form>
    </section>
  );
}