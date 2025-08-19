"use client";

import { useEffect, useState } from "react";

type JsonValue = any;

function Editor({ title, endpoint }: { title: string; endpoint: string }) {
  const [value, setValue] = useState<string>("[]");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(endpoint, { cache: "no-store" });
        const data = await res.json();
        setValue(JSON.stringify(data, null, 2));
      } catch (e) {
        setStatus("Failed to load");
      }
    })();
  }, [endpoint]);

  const save = async () => {
    setStatus("Saving...");
    try {
      const parsed: JsonValue = JSON.parse(value);
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": process.env.NEXT_PUBLIC_ADMIN_KEY || "",
        },
        body: JSON.stringify(parsed),
      });
      if (!res.ok) {
        const j = await res.json();
        throw new Error(j?.error || `Error ${res.status}`);
      }
      setStatus("Saved ✔");
    } catch (e: any) {
      setStatus(`Error: ${e.message}`);
    }
  };

  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 md:p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button onClick={save} className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-semibold">Save</button>
      </div>
      <textarea
        className="w-full h-64 md:h-80 rounded-lg bg-slate-950 border border-white/10 p-3 font-mono text-sm text-slate-200"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="mt-2 text-sm text-slate-400">{status}</div>
    </div>
  );
}

export default function AdminPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Admin</h1>
      <p className="text-slate-400 mb-8">Edit site content in JSON. Use the Save button to persist changes.</p>
      <div className="grid gap-6">
        <Editor title="Projects" endpoint="/api/projects" />
        <Editor title="Testimonials" endpoint="/api/testimonials" />
        <Editor title="Brands" endpoint="/api/brands" />
      </div>
      <div className="mt-8 text-sm text-slate-500">Tip: set NEXT_PUBLIC_ADMIN_KEY and ADMIN_KEY in your environment for secure edits.</div>
    </main>
  );
}
