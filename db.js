const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');

function ensureFile() {
  if (!fs.existsSync(DATA_FILE)) {
    const initial = { messages: [], projects: [], clients: [], subscribers: [] };
    fs.writeFileSync(DATA_FILE, JSON.stringify(initial, null, 2));
  }
}

function read() {
  ensureFile();
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(raw);
}

function write(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function addMessage(msg) {
  const db = read();
  const id = Date.now();
  const record = { id, ...msg, created_at: new Date().toISOString() };
  db.messages.unshift(record);
  write(db);
  return id;
}

function getMessages() {
  const db = read();
  return db.messages;
}

function addProject(p) {
  const db = read();
  const id = Date.now();
  const record = { id, ...p, created_at: new Date().toISOString() };
  db.projects.unshift(record);
  write(db);
  return id;
}

function getProjects() {
  const db = read();
  return db.projects;
}

function updateProject(id, data) {
  const db = read();
  const idx = db.projects.findIndex((x) => String(x.id) === String(id));
  if (idx === -1) return false;
  db.projects[idx] = { ...db.projects[idx], ...data };
  write(db);
  return true;
}

function deleteProject(id) {
  const db = read();
  db.projects = db.projects.filter((x) => String(x.id) !== String(id));
  write(db);
}

function addClient(c) {
  const db = read();
  const id = Date.now();
  const record = { id, ...c, created_at: new Date().toISOString() };
  db.clients.unshift(record);
  write(db);
  return id;
}

function getClients() {
  const db = read();
  return db.clients;
}

function updateClient(id, data) {
  const db = read();
  const idx = db.clients.findIndex((x) => String(x.id) === String(id));
  if (idx === -1) return false;
  db.clients[idx] = { ...db.clients[idx], ...data };
  write(db);
  return true;
}

function deleteClient(id) {
  const db = read();
  db.clients = db.clients.filter((x) => String(x.id) !== String(id));
  write(db);
}

function addSubscriber(email) {
  const db = read();
  if (db.subscribers.find((s) => s.email === email)) throw new Error('exists');
  const id = Date.now();
  db.subscribers.unshift({ id, email, created_at: new Date().toISOString() });
  write(db);
  return id;
}

module.exports = {
  addMessage,
  getMessages,
  addProject,
  getProjects,
  updateProject,
  deleteProject,
  addClient,
  getClients,
  updateClient,
  deleteClient,
  addSubscriber,
};
