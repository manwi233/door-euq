"use client";

import { useEffect, useState } from "react";

type Stats = {
  total: number;
  today: number;
  bySource: Record<string, number>;
  recent: { source: string; at: number }[];
};

export default function AdminPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState("");

  async function load() {
    try {
      const response = await fetch("/api/clicks", { cache: "no-store" });
      if (!response.ok) throw new Error("Could not load clicks");
      setStats((await response.json()) as Stats);
      setError("");
    } catch {
      setError("Count load nahi ho paya. Page refresh karo.");
    }
  }

  useEffect(() => {
    void load();
    const timer = window.setInterval(() => void load(), 4000);
    return () => window.clearInterval(timer);
  }, []);

  const sources = Object.entries(stats?.bySource ?? {}).sort((a, b) => b[1] - a[1]);

  return (
    <main className="admin">
      <div className="wrap admin-card">
        <p className="eyebrow">Reddy Anna Door</p>
        <h1>WhatsApp clicks</h1>
        <p className="sub">
          Kitne log abhi tak WhatsApp par gaye — button, banner, ya image click.
        </p>
        <div className="admin-totals">
          <div>
            <strong>{stats ? stats.total : "—"}</strong>
            <span>total clicks</span>
          </div>
          <div>
            <strong>{stats ? stats.today : "—"}</strong>
            <span>aaj</span>
          </div>
        </div>
        {error ? <p className="admin-error">{error}</p> : null}
        <h2>Kahan se click hua</h2>
        {sources.length === 0 ? (
          <p className="sub">Abhi koi click record nahi hua.</p>
        ) : (
          <ul className="admin-list">
            {sources.map(([source, count]) => (
              <li key={source}>
                <span>{source}</span>
                <strong>{count}</strong>
              </li>
            ))}
          </ul>
        )}
        <h2>Recent</h2>
        <ul className="admin-list">
          {(stats?.recent ?? []).map((event) => (
            <li key={`${event.at}-${event.source}`}>
              <span>
                {event.source} · {new Date(event.at).toLocaleString("en-IN")}
              </span>
            </li>
          ))}
        </ul>
        <a className="btn btn-line" href="/">
          Site par wapas
        </a>
      </div>
    </main>
  );
}
