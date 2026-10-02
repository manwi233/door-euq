import fs from "fs";
import path from "path";

type ClickEvent = { source: string; at: number };

type Store = {
  total: number;
  events: ClickEvent[];
};

const FILE = path.join(process.cwd(), "data", "clicks.json");

function emptyStore(): Store {
  return { total: 0, events: [] };
}

function readFile(): Store | null {
  try {
    const parsed = JSON.parse(fs.readFileSync(FILE, "utf8")) as Store;
    if (typeof parsed.total !== "number" || !Array.isArray(parsed.events)) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function memory(): Store {
  const bag = globalThis as typeof globalThis & { __waClicks?: Store };
  if (!bag.__waClicks) {
    bag.__waClicks = readFile() ?? emptyStore();
  }
  return bag.__waClicks;
}

function save(store: Store) {
  try {
    fs.mkdirSync(path.dirname(FILE), { recursive: true });
    fs.writeFileSync(FILE, JSON.stringify(store));
  } catch {
    // Vercel’s filesystem is read-only. The in-memory total still updates.
  }
}

export function getClickStats() {
  const store = memory();
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const today = store.events.filter((event) => event.at >= start.getTime()).length;
  const bySource: Record<string, number> = {};
  for (const event of store.events) {
    bySource[event.source] = (bySource[event.source] || 0) + 1;
  }
  return {
    total: store.total,
    today,
    bySource,
    recent: [...store.events].slice(-15).reverse(),
  };
}

export function addClick(source: string) {
  const store = memory();
  const safeSource = source.replace(/[^\w\- ]/g, "").slice(0, 40) || "whatsapp";
  store.total += 1;
  store.events.push({ source: safeSource, at: Date.now() });
  if (store.events.length > 300) {
    store.events = store.events.slice(-300);
  }
  save(store);
  return getClickStats();
}
