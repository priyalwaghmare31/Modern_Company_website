const API_BASE = import.meta.env.VITE_API_URL || '';

function remoteEnabled() {
  return Boolean(API_BASE);
}

function readLocalMessages(): any[] {
  try {
    const raw = localStorage.getItem('mcw_messages');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function writeLocalMessages(arr: any[]) {
  localStorage.setItem('mcw_messages', JSON.stringify(arr));
}

export async function postContact(payload: any) {
  if (remoteEnabled()) {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return res.json();
  }

  // Fallback: save to localStorage (client-only mode)
  const msgs = readLocalMessages();
  const id = Date.now();
  const record = { id, ...payload, created_at: new Date().toISOString() };
  msgs.unshift(record);
  writeLocalMessages(msgs);
  return { success: true, id };
}

export async function getMessages() {
  if (remoteEnabled()) {
    const res = await fetch(`${API_BASE}/api/messages`);
    return res.json();
  }
  return Promise.resolve(readLocalMessages());
}

export async function getProjects() {
  if (remoteEnabled()) {
    const res = await fetch(`${API_BASE}/api/projects`);
    return res.json();
  }
  // fallback: no persistent projects; return empty to let frontend show static sample data
  return Promise.resolve([]);
}

export async function getClients() {
  if (remoteEnabled()) {
    const res = await fetch(`${API_BASE}/api/clients`);
    return res.json();
  }
  return Promise.resolve([]);
}

export async function postSubscribe(payload: { email: string }) {
  if (remoteEnabled()) {
    const res = await fetch(`${API_BASE}/api/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return res.json();
  }
  // local fallback
  try {
    const raw = localStorage.getItem('mcw_subscribers');
    const arr = raw ? JSON.parse(raw) : [];
    if (arr.find((s: any) => s.email === payload.email)) {
      return { error: 'already subscribed' };
    }
    const record = { id: Date.now(), email: payload.email, created_at: new Date().toISOString() };
    arr.unshift(record);
    localStorage.setItem('mcw_subscribers', JSON.stringify(arr));
    return { success: true, id: record.id };
  } catch (e) {
    return { error: 'failed' };
  }
}

export async function postProject(payload: any) {
  if (remoteEnabled()) {
    const res = await fetch(`${API_BASE}/api/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return res.json();
  }
  const raw = localStorage.getItem('mcw_projects');
  const arr = raw ? JSON.parse(raw) : [];
  const record = { id: Date.now(), ...payload, created_at: new Date().toISOString() };
  arr.unshift(record);
  localStorage.setItem('mcw_projects', JSON.stringify(arr));
  return { success: true, id: record.id };
}

export async function postClient(payload: any) {
  if (remoteEnabled()) {
    const res = await fetch(`${API_BASE}/api/clients`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return res.json();
  }
  const raw = localStorage.getItem('mcw_clients');
  const arr = raw ? JSON.parse(raw) : [];
  const record = { id: Date.now(), ...payload, created_at: new Date().toISOString() };
  arr.unshift(record);
  localStorage.setItem('mcw_clients', JSON.stringify(arr));
  return { success: true, id: record.id };
}

export async function deleteProject(id: any) {
  if (remoteEnabled()) {
    const res = await fetch(`${API_BASE}/api/projects/${id}`, { method: 'DELETE' });
    return res.json();
  }
  try {
    const raw = localStorage.getItem('mcw_projects');
    const arr = raw ? JSON.parse(raw) : [];
    const filtered = arr.filter((p: any) => String(p.id) !== String(id));
    localStorage.setItem('mcw_projects', JSON.stringify(filtered));
    return { success: true };
  } catch (e) {
    return { error: 'failed' };
  }
}

export async function deleteClient(id: any) {
  if (remoteEnabled()) {
    const res = await fetch(`${API_BASE}/api/clients/${id}`, { method: 'DELETE' });
    return res.json();
  }
  try {
    const raw = localStorage.getItem('mcw_clients');
    const arr = raw ? JSON.parse(raw) : [];
    const filtered = arr.filter((c: any) => String(c.id) !== String(id));
    localStorage.setItem('mcw_clients', JSON.stringify(filtered));
    return { success: true };
  } catch (e) {
    return { error: 'failed' };
  }
}

export async function getSubscribers() {
  if (remoteEnabled()) {
    const res = await fetch(`${API_BASE}/api/subscribe`);
    return res.json();
  }
  const raw = localStorage.getItem('mcw_subscribers');
  return Promise.resolve(raw ? JSON.parse(raw) : []);
}
