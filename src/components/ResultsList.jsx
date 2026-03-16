import ResultCard from "./ResultCard";

export default function ResultCard({ links }) {
    return (
        <section className="results" aria-label="Shortened links results">
            <ul id="resultsList">
                {links.map((link) => (
                    <ResultCard key={link.id} link={link} />
                ))}
            </ul>
        </section>
    );
}