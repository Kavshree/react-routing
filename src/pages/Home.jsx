import { useTransition } from "react";
import { useMemo } from "react";
import { useState } from "react"

export default function Home() {
    const [text,setText] = useState("");
    const [query,setQuery] = useState("");

     const [isPending, startTransition] = useTransition();

    const items = useMemo(() => {
        return Array.from({ length: 20000 }, (_, i) => `Item ${i} - ${Math.random()}`);
    }, []);

    const filtered = useMemo(() => {
        let result = items;
        for (let i = 0; i < 400; i++) {
            result = result.filter((x) => x.includes(query));
        }
        return result;
    }, [items, query])
    
    return (
        <>
        <div style={{ marginTop: 8 }}>
            {isPending ? "Filtering..." : `Results: ${filtered.length}`}
        </div>

        <input type="text"  value={text} 
        onChange={(e) => {
            const next = e.target.value;
             setText(next); //urgent
             startTransition(() => {
                setQuery(next); //non-urgent
             })
            }}
            />
         <ul style={{ marginTop: 12, height: 240, overflow: "auto", border: "1px solid #ccc" }}>
            {filtered.slice(0, 200).map((x) => (
            <li key={x}>{x}</li>
            ))}
        </ul>

        </>
    )
}