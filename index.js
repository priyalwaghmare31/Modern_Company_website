require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000; // Use Render's PORT or fallback to 3000

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Backend is running successfully!');
});

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Contact form
app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, phone, city, projectType, budgetRange, message } = req.body;
  if (!email || !message) return res.status(400).json({ error: 'email and message required' });
  try {
    const id = db.addMessage({
      firstName: firstName || '',
      lastName: lastName || '',
      email,
      phone: phone || '',
      city: city || '',
      projectType: projectType || '',
      budgetRange: budgetRange || '',
      message
    });
    res.json({ success: true, id });
  } catch (err) {
    res.status(500).json({ error: 'failed to save message' });
  }
});

// Messages
app.get('/api/messages', (req, res) => {
  const rows = db.getMessages();
  res.json(rows);
});

// Projects CRUD
app.get('/api/projects', (req, res) => {
  const rows = db.getProjects();
  res.json(rows);
});

app.post('/api/projects', (req, res) => {
  const { title, category, description, image, year, status, client } = req.body;
  const id = db.addProject({
    title: title || '',
    category: category || '',
    description: description || '',
    image: image || '',
    year: year || '',
    status: status || 'Planning',
    client: client || ''
  });
  res.json({ success: true, id });
});

app.put('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const ok = db.updateProject(id, req.body);
  res.json({ success: ok });
});

app.delete('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  db.deleteProject(id);
  res.json({ success: true });
});

// Clients CRUD
app.get('/api/clients', (req, res) => {
  const rows = db.getClients();
  res.json(rows);
});

app.post('/api/clients', (req, res) => {
  const { name, company, email, phone, status } = req.body;
  const id = db.addClient({
    name: name || '',
    company: company || '',
    email: email || '',
    phone: phone || '',
    status: status || 'Active'
  });
  res.json({ success: true, id });
});

app.put('/api/clients/:id', (req, res) => {
  const { id } = req.params;
  const ok = db.updateClient(id, req.body);
  res.json({ success: ok });
});

app.delete('/api/clients/:id', (req, res) => {
  const { id } = req.params;
  db.deleteClient(id);
  res.json({ success: true });
});

// Newsletter subscribe
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'email required' });
  try {
    const id = db.addSubscriber(email);
    res.json({ success: true, id });
  } catch (err) {
    res.status(400).json({ error: 'already subscribed' });
  }
});

// Optional: static folder
app.use('/server-static', express.static(path.join(__dirname, 'public')));

// Start server with correct URL for Render
app.listen(PORT, () => {
  const publicURL = process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`;
  console.log(`Backend running at: ${publicURL}`);
});
