import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Edit, Trash2, X, LayoutGrid, Users, FolderOpen, Settings, Mail, Bell, TrendingUp, Eye, MessageSquare } from 'lucide-react';
import { postProject, postClient, deleteProject as apiDeleteProject, deleteClient as apiDeleteClient } from '../lib/api';
import SimpleToast from '../components/SimpleToast';

export default function AdminPanel() {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showClientModal, setShowClientModal] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  // Add project form state
  const [projectTitle, setProjectTitle] = useState('');
  const [projectClientField, setProjectClientField] = useState('');
  const [projectCategory, setProjectCategory] = useState('');
  const [projectStatusField, setProjectStatusField] = useState('Planning');
  const [projectDescriptionField, setProjectDescriptionField] = useState('');
  const [projectImageField, setProjectImageField] = useState('');
  const [addingProject, setAddingProject] = useState(false);
  const [toast, setToast] = useState<{ message: string; type?: 'success' | 'error' | 'info' } | null>(null);

  // Add client form state
  const [clientNameField, setClientNameField] = useState('');
  const [clientCompanyField, setClientCompanyField] = useState('');
  const [clientEmailField, setClientEmailField] = useState('');
  const [clientPhoneField, setClientPhoneField] = useState('');
  const [addingClient, setAddingClient] = useState(false);

  const [projects, setProjects] = useState([
    { id: 1, title: 'Modern Workspace Design', category: 'Interior Design', status: 'Completed', date: '2024-11-15', client: 'TechCorp' },
    { id: 2, title: 'Minimal Architecture', category: 'Architecture', status: 'In Progress', date: '2024-12-01', client: 'StartupX' },
    { id: 3, title: 'Natural Elements', category: 'Product Design', status: 'Completed', date: '2024-10-20', client: 'Creative Labs' },
    { id: 4, title: 'Brand Identity System', category: 'Branding', status: 'Planning', date: '2024-12-05', client: 'InnovateCo' },
    { id: 5, title: 'Web Application', category: 'Web Development', status: 'In Progress', date: '2024-11-28', client: 'Wellness Studio' },
  ]);

  const [clients, setClients] = useState([
    { id: 1, name: 'Sarah Johnson', company: 'TechCorp', email: 'sarah@techcorp.com', projects: 3, status: 'Active' },
    { id: 2, name: 'Michael Chen', company: 'StartupX', email: 'michael@startupx.com', projects: 2, status: 'Active' },
    { id: 3, name: 'Emma Davis', company: 'Creative Labs', email: 'emma@creativelabs.com', projects: 5, status: 'Active' },
    { id: 4, name: 'James Martinez', company: 'InnovateCo', email: 'james@innovateco.com', projects: 1, status: 'Inactive' },
  ]);

  const messages = [
    { id: 1, name: 'John Smith', email: 'john@example.com', subject: 'New Project Inquiry', date: '2024-12-09', status: 'Unread' },
    { id: 2, name: 'Lisa Brown', email: 'lisa@company.com', subject: 'Partnership Opportunity', date: '2024-12-08', status: 'Read' },
    { id: 3, name: 'David Wilson', email: 'david@startup.com', subject: 'Website Redesign', date: '2024-12-08', status: 'Read' },
    { id: 4, name: 'Maria Garcia', email: 'maria@business.com', subject: 'Branding Services', date: '2024-12-07', status: 'Read' },
  ];

  const subscribers = [
    { id: 1, email: 'subscriber1@email.com', date: '2024-12-09', status: 'Active' },
    { id: 2, email: 'subscriber2@email.com', date: '2024-12-08', status: 'Active' },
    { id: 3, email: 'subscriber3@email.com', date: '2024-12-07', status: 'Active' },
    { id: 4, email: 'subscriber4@email.com', date: '2024-12-06', status: 'Unsubscribed' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r-2 border-[#E6D5B8] flex-shrink-0">
        <div className="p-8">
          <h2 className="text-[32px] text-[#2C2A28] mb-16">Admin Panel</h2>
          
          <nav className="space-y-3">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-[20px] transition-colors ${
                activeTab === 'dashboard' ? 'bg-[#F7D9C4] text-[#2C2A28]' : 'text-[#6E6560] hover:bg-[#F2E9E4]'
              }`}
            >
              <LayoutGrid className="w-5 h-5" />
              <span className="text-[15px]">Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-[20px] transition-colors ${
                activeTab === 'projects' ? 'bg-[#F7D9C4] text-[#2C2A28]' : 'text-[#6E6560] hover:bg-[#F2E9E4]'
              }`}
            >
              <FolderOpen className="w-5 h-5" />
              <span className="text-[15px]">Projects</span>
            </button>
            <button
              onClick={() => setActiveTab('clients')}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-[20px] transition-colors ${
                activeTab === 'clients' ? 'bg-[#F7D9C4] text-[#2C2A28]' : 'text-[#6E6560] hover:bg-[#F2E9E4]'
              }`}
            >
              <Users className="w-5 h-5" />
              <span className="text-[15px]">Clients</span>
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-[20px] transition-colors ${
                activeTab === 'messages' ? 'bg-[#F7D9C4] text-[#2C2A28]' : 'text-[#6E6560] hover:bg-[#F2E9E4]'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span className="text-[15px]">Messages</span>
              <span className="ml-auto px-2 py-1 bg-[#E7A47C] text-white text-[12px] rounded-full">1</span>
            </button>
            <button
              onClick={() => setActiveTab('newsletter')}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-[20px] transition-colors ${
                activeTab === 'newsletter' ? 'bg-[#F7D9C4] text-[#2C2A28]' : 'text-[#6E6560] hover:bg-[#F2E9E4]'
              }`}
            >
              <Mail className="w-5 h-5" />
              <span className="text-[15px]">Newsletter</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-[20px] transition-colors ${
                activeTab === 'settings' ? 'bg-[#F7D9C4] text-[#2C2A28]' : 'text-[#6E6560] hover:bg-[#F2E9E4]'
              }`}
            >
              <Settings className="w-5 h-5" />
              <span className="text-[15px]">Settings</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-12">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <>
              {/* Header */}
              <div className="mb-12">
                <h1 className="text-[42px] text-[#2C2A28] mb-2">Dashboard Overview</h1>
                <p className="text-[16px] text-[#6E6560]">Welcome back! Here's what's happening with your business today.</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {[
                  { icon: <FolderOpen className="w-6 h-6" />, number: '24', label: 'Total Projects', change: '+3', color: '#E7A47C' },
                  { icon: <Users className="w-6 h-6" />, number: '18', label: 'Active Clients', change: '+2', color: '#DFA58F' },
                  { icon: <TrendingUp className="w-6 h-6" />, number: '7', label: 'In Progress', change: '+1', color: '#F28B66' },
                  { icon: <Eye className="w-6 h-6" />, number: '2.4K', label: 'Page Views', change: '+12%', color: '#E6D5B8' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-[24px] p-8 shadow-md hover:shadow-lg transition-all duration-300"
                    style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                        {stat.icon}
                      </div>
                      <span className="text-[13px] text-[#E7A47C] bg-[#F7D9C4] px-3 py-1 rounded-full">{stat.change}</span>
                    </div>
                    <div className="text-[40px] text-[#2C2A28] mb-1">{stat.number}</div>
                    <div className="text-[14px] text-[#6E6560]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Analytics Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Project Activity Chart */}
                <div className="bg-white rounded-[24px] p-8 shadow-md" style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}>
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-[24px] text-[#2C2A28]">Project Activity</h3>
                    <select className="px-4 py-2 bg-[#F2E9E4] rounded-full text-[14px] text-[#4A3A33] border-0">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 3 months</option>
                    </select>
                  </div>
                  <div className="h-64 flex items-end justify-around gap-4">
                    {[65, 45, 80, 50, 75, 60, 90].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div
                          className="w-full bg-gradient-to-t from-[#E7A47C] to-[#F7D9C4] rounded-t-lg transition-all duration-500 hover:from-[#DFA58F] hover:to-[#E7A47C]"
                          style={{ height: `${height}%` }}
                        />
                        <span className="text-[12px] text-[#6E6560]">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Revenue Chart */}
                <div className="bg-white rounded-[24px] p-8 shadow-md" style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}>
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-[24px] text-[#2C2A28]">Revenue Overview</h3>
                    <select className="px-4 py-2 bg-[#F2E9E4] rounded-full text-[14px] text-[#4A3A33] border-0">
                      <option>This month</option>
                      <option>Last month</option>
                      <option>This year</option>
                    </select>
                  </div>
                  <div className="space-y-6">
                    {[
                      { label: 'Web Design', value: 45, color: '#E7A47C' },
                      { label: 'Branding', value: 30, color: '#DFA58F' },
                      { label: 'Development', value: 65, color: '#F7D9C4' },
                      { label: 'Consulting', value: 25, color: '#F28B66' },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[14px] text-[#6E6560]">{item.label}</span>
                          <span className="text-[14px] text-[#2C2A28]">{item.value}%</span>
                        </div>
                        <div className="h-3 bg-[#F2E9E4] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-[24px] p-8 shadow-md mb-8" style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}>
                <h3 className="text-[24px] text-[#2C2A28] mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    { action: 'New project created', detail: 'Modern Workspace Design', time: '2 hours ago', icon: <FolderOpen className="w-4 h-4" /> },
                    { action: 'Client added', detail: 'Sarah Johnson - TechCorp', time: '5 hours ago', icon: <Users className="w-4 h-4" /> },
                    { action: 'Message received', detail: 'Project inquiry from John Smith', time: '1 day ago', icon: <MessageSquare className="w-4 h-4" /> },
                    { action: 'Newsletter subscriber', detail: 'subscriber@email.com joined', time: '2 days ago', icon: <Mail className="w-4 h-4" /> },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 hover:bg-[#FAF7F2] rounded-[16px] transition-colors">
                      <div className="w-10 h-10 rounded-full bg-[#F7D9C4] flex items-center justify-center text-[#E7A47C] flex-shrink-0">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-[15px] text-[#2C2A28] mb-1">{activity.action}</p>
                        <p className="text-[14px] text-[#6E6560]">{activity.detail}</p>
                      </div>
                      <span className="text-[13px] text-[#6E6560]">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <>
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-[36px] text-[#2C2A28] mb-2">Projects</h2>
                  <p className="text-[15px] text-[#6E6560]">Manage all your projects in one place</p>
                </div>
                <button
                  onClick={() => setShowProjectModal(true)}
                  className="px-8 py-4 bg-[#E7A47C] text-white rounded-full hover:bg-[#DFA58F] transition-all duration-300 shadow-md flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add Project
                </button>
              </div>

              <div className="bg-white rounded-[24px] shadow-md overflow-hidden" style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}>
                <table className="w-full">
                  <thead className="bg-[#F2E9E4]">
                    <tr>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Project Title</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Client</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Category</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Status</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Date</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr key={project.id} className="border-t border-[#F2E9E4] hover:bg-[#FAF7F2] transition-colors">
                        <td className="px-8 py-6 text-[15px] text-[#2C2A28]">{project.title}</td>
                        <td className="px-8 py-6 text-[15px] text-[#6E6560]">{project.client}</td>
                        <td className="px-8 py-6 text-[15px] text-[#6E6560]">{project.category}</td>
                        <td className="px-8 py-6">
                          <span className={`px-4 py-2 rounded-full text-[13px] ${
                            project.status === 'Completed' ? 'bg-[#F7D9C4] text-[#4A3A33]' :
                            project.status === 'In Progress' ? 'bg-[#E7A47C] text-white' :
                            'bg-[#F2E9E4] text-[#6E6560]'
                          }`}>
                            {project.status}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-[15px] text-[#6E6560]">{project.date}</td>
                        <td className="px-8 py-6">
                          <div className="flex gap-3">
                              <button className="p-2 hover:bg-[#F2E9E4] rounded-full transition-colors">
                                <Edit className="w-4 h-4 text-[#E7A47C]" />
                              </button>
                              <button onClick={async () => {
                                if (!confirm('Delete this project? This action cannot be undone.')) return;
                                try {
                                  await apiDeleteProject(project.id);
                                  setProjects(prev => prev.filter(p => p.id !== project.id));
                                  setToast({ message: 'Project deleted', type: 'success' });
                                } catch (err) { console.error(err); setToast({ message: 'Failed to delete', type: 'error' }); }
                              }} className="p-2 hover:bg-[#F2E9E4] rounded-full transition-colors">
                                <Trash2 className="w-4 h-4 text-[#F28B66]" />
                              </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Clients Tab */}
          {activeTab === 'clients' && (
            <>
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-[36px] text-[#2C2A28] mb-2">Clients</h2>
                  <p className="text-[15px] text-[#6E6560]">Manage your client relationships</p>
                </div>
                <button
                  onClick={() => setShowClientModal(true)}
                  className="px-8 py-4 bg-[#E7A47C] text-white rounded-full hover:bg-[#DFA58F] transition-all duration-300 shadow-md flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add Client
                </button>
              </div>

              <div className="bg-white rounded-[24px] shadow-md overflow-hidden" style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}>
                <table className="w-full">
                  <thead className="bg-[#F2E9E4]">
                    <tr>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Name</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Company</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Email</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Projects</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Status</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((client) => (
                      <tr key={client.id} className="border-t border-[#F2E9E4] hover:bg-[#FAF7F2] transition-colors">
                        <td className="px-8 py-6 text-[15px] text-[#2C2A28]">{client.name}</td>
                        <td className="px-8 py-6 text-[15px] text-[#6E6560]">{client.company}</td>
                        <td className="px-8 py-6 text-[15px] text-[#6E6560]">{client.email}</td>
                        <td className="px-8 py-6 text-[15px] text-[#6E6560]">{client.projects}</td>
                        <td className="px-8 py-6">
                          <span className={`px-4 py-2 rounded-full text-[13px] ${
                            client.status === 'Active' ? 'bg-[#F7D9C4] text-[#4A3A33]' : 'bg-[#F2E9E4] text-[#6E6560]'
                          }`}>
                            {client.status}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex gap-3">
                              <button className="p-2 hover:bg-[#F2E9E4] rounded-full transition-colors">
                                <Edit className="w-4 h-4 text-[#E7A47C]" />
                              </button>
                              <button onClick={async () => {
                                if (!confirm('Delete this client and all references?')) return;
                                try {
                                  await apiDeleteClient(client.id);
                                  setClients(prev => prev.filter(c => c.id !== client.id));
                                  setToast({ message: 'Client deleted', type: 'success' });
                                } catch (err) { console.error(err); setToast({ message: 'Failed to delete client', type: 'error' }); }
                              }} className="p-2 hover:bg-[#F2E9E4] rounded-full transition-colors">
                                <Trash2 className="w-4 h-4 text-[#F28B66]" />
                              </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <>
              <div className="mb-10">
                <h2 className="text-[36px] text-[#2C2A28] mb-2">Contact Messages</h2>
                <p className="text-[15px] text-[#6E6560]">View and respond to client inquiries</p>
              </div>

              <div className="bg-white rounded-[24px] shadow-md overflow-hidden" style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}>
                <table className="w-full">
                  <thead className="bg-[#F2E9E4]">
                    <tr>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Name</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Email</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Subject</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Date</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Status</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((message) => (
                      <tr key={message.id} className="border-t border-[#F2E9E4] hover:bg-[#FAF7F2] transition-colors">
                        <td className="px-8 py-6 text-[15px] text-[#2C2A28]">{message.name}</td>
                        <td className="px-8 py-6 text-[15px] text-[#6E6560]">{message.email}</td>
                        <td className="px-8 py-6 text-[15px] text-[#6E6560]">{message.subject}</td>
                        <td className="px-8 py-6 text-[15px] text-[#6E6560]">{message.date}</td>
                        <td className="px-8 py-6">
                          <span className={`px-4 py-2 rounded-full text-[13px] ${
                            message.status === 'Unread' ? 'bg-[#E7A47C] text-white' : 'bg-[#F2E9E4] text-[#6E6560]'
                          }`}>
                            {message.status}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <button className="px-5 py-2 bg-[#F7D9C4] text-[#4A3A33] rounded-full hover:bg-[#E7A47C] hover:text-white transition-all text-[14px]">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Newsletter Tab */}
          {activeTab === 'newsletter' && (
            <>
              <div className="mb-10">
                <h2 className="text-[36px] text-[#2C2A28] mb-2">Newsletter Subscribers</h2>
                <p className="text-[15px] text-[#6E6560]">Manage your email subscribers</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-[24px] p-8 shadow-md" style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}>
                  <div className="text-[40px] text-[#E7A47C] mb-2">1,247</div>
                  <div className="text-[15px] text-[#6E6560]">Total Subscribers</div>
                </div>
                <div className="bg-white rounded-[24px] p-8 shadow-md" style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}>
                  <div className="text-[40px] text-[#DFA58F] mb-2">+23</div>
                  <div className="text-[15px] text-[#6E6560]">This Week</div>
                </div>
                <div className="bg-white rounded-[24px] p-8 shadow-md" style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}>
                  <div className="text-[40px] text-[#F28B66] mb-2">92%</div>
                  <div className="text-[15px] text-[#6E6560]">Open Rate</div>
                </div>
              </div>

              <div className="bg-white rounded-[24px] shadow-md overflow-hidden" style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}>
                <table className="w-full">
                  <thead className="bg-[#F2E9E4]">
                    <tr>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Email Address</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Date Subscribed</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Status</th>
                      <th className="px-8 py-6 text-left text-[14px] text-[#4A3A33]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((subscriber) => (
                      <tr key={subscriber.id} className="border-t border-[#F2E9E4] hover:bg-[#FAF7F2] transition-colors">
                        <td className="px-8 py-6 text-[15px] text-[#2C2A28]">{subscriber.email}</td>
                        <td className="px-8 py-6 text-[15px] text-[#6E6560]">{subscriber.date}</td>
                        <td className="px-8 py-6">
                          <span className={`px-4 py-2 rounded-full text-[13px] ${
                            subscriber.status === 'Active' ? 'bg-[#F7D9C4] text-[#4A3A33]' : 'bg-[#F2E9E4] text-[#6E6560]'
                          }`}>
                            {subscriber.status}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex gap-3">
                            <button className="p-2 hover:bg-[#F2E9E4] rounded-full transition-colors">
                              <Mail className="w-4 h-4 text-[#E7A47C]" />
                            </button>
                            <button className="p-2 hover:bg-[#F2E9E4] rounded-full transition-colors">
                              <Trash2 className="w-4 h-4 text-[#F28B66]" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Add Project Modal */}
      {showProjectModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[28px] p-12 max-w-[600px] w-full shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[28px] text-[#2C2A28]">Add New Project</h3>
              <button
                onClick={() => setShowProjectModal(false)}
                className="p-2 hover:bg-[#F2E9E4] rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-[#6E6560]" />
              </button>
            </div>

              <div className="space-y-6">
              <div>
                <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">Project Title</label>
                <input
                    type="text"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    placeholder="Enter project name"
                    className="w-full px-6 py-4 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">Client</label>
                <select value={projectClientField} onChange={(e) => setProjectClientField(e.target.value)} className="w-full px-6 py-4 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none">
                  <option value="">Select client</option>
                  {clients.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">Category</label>
                <select value={projectCategory} onChange={(e) => setProjectCategory(e.target.value)} className="w-full px-6 py-4 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none">
                  <option value="">Select category</option>
                  <option>Interior Design</option>
                  <option>Architecture</option>
                  <option>Product Design</option>
                  <option>Branding</option>
                  <option>Web Development</option>
                </select>
              </div>

              <div>
                <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">Status</label>
                <select value={projectStatusField} onChange={(e) => setProjectStatusField(e.target.value)} className="w-full px-6 py-4 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none">
                  <option>Planning</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>

              <div>
                <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">Description</label>
                <textarea
                  placeholder="Project details..."
                  rows={4}
                  value={projectDescriptionField}
                  onChange={(e) => setProjectDescriptionField(e.target.value)}
                  className="w-full px-6 py-4 bg-[#FAF7F2] rounded-[20px] border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">Image URL</label>
                <input type="text" value={projectImageField} onChange={(e) => setProjectImageField(e.target.value)} placeholder="http://..." className="w-full px-6 py-4 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none" />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setShowProjectModal(false)}
                  className="flex-1 px-8 py-4 bg-[#F2E9E4] text-[#4A3A33] rounded-full hover:bg-[#E6D5B8] transition-colors"
                >
                  Cancel
                </button>
                <button onClick={async () => {
                  if (addingProject) return;
                  setAddingProject(true);
                  try {
                    const payload = { name: projectTitle, description: projectDescriptionField, image: projectImageField, category: projectCategory, status: projectStatusField, client: projectClientField };
                    const resp = await postProject(payload);
                    const id = (resp && resp.id) || Date.now();
                    setProjects(prev => [{ id, title: projectTitle, client: projectClientField, category: projectCategory, status: projectStatusField, date: new Date().toISOString().slice(0,10) }, ...prev]);
                    setShowProjectModal(false);
                    setProjectTitle(''); setProjectClientField(''); setProjectCategory(''); setProjectStatusField('Planning'); setProjectDescriptionField(''); setProjectImageField('');
                      setToast({ message: 'Project added', type: 'success' });
                  } catch (err) {
                    console.error(err);
                  } finally {
                    setAddingProject(false);
                  }
                }} className="flex-1 px-8 py-4 bg-[#E7A47C] text-white rounded-full hover:bg-[#DFA58F] transition-colors">
                  {addingProject ? 'Adding…' : 'Add Project'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {toast && (
        <SimpleToast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}

      {/* Add Client Modal */}
      {showClientModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[28px] p-12 max-w-[600px] w-full shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[28px] text-[#2C2A28]">Add New Client</h3>
              <button
                onClick={() => setShowClientModal(false)}
                className="p-2 hover:bg-[#F2E9E4] rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-[#6E6560]" />
              </button>
            </div>

              <div className="space-y-6">
              <div>
                <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">Full Name</label>
                <input
                  type="text"
                  value={clientNameField}
                  onChange={(e) => setClientNameField(e.target.value)}
                  placeholder="Enter client name"
                  className="w-full px-6 py-4 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">Company</label>
                <input
                  type="text"
                  value={clientCompanyField}
                  onChange={(e) => setClientCompanyField(e.target.value)}
                  placeholder="Company name"
                  className="w-full px-6 py-4 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">Email</label>
                <input
                  type="email"
                  value={clientEmailField}
                  onChange={(e) => setClientEmailField(e.target.value)}
                  placeholder="client@company.com"
                  className="w-full px-6 py-4 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">Phone</label>
                <input
                  type="tel"
                  value={clientPhoneField}
                  onChange={(e) => setClientPhoneField(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-6 py-4 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setShowClientModal(false)}
                  className="flex-1 px-8 py-4 bg-[#F2E9E4] text-[#4A3A33] rounded-full hover:bg-[#E6D5B8] transition-colors"
                >
                  Cancel
                </button>
                <button onClick={async () => {
                  if (addingClient) return;
                  setAddingClient(true);
                  try {
                    const payload = { name: clientNameField, company: clientCompanyField, email: clientEmailField, phone: clientPhoneField };
                    const resp = await postClient(payload);
                    const id = (resp && resp.id) || Date.now();
                    setClients(prev => [{ id, name: clientNameField, company: clientCompanyField, email: clientEmailField, projects: 0, status: 'Active' }, ...prev]);
                    setShowClientModal(false);
                    setClientNameField(''); setClientCompanyField(''); setClientEmailField(''); setClientPhoneField('');
                      setToast({ message: 'Client added', type: 'success' });
                  } catch (err) {
                    console.error(err);
                  } finally {
                    setAddingClient(false);
                  }
                }} className="flex-1 px-8 py-4 bg-[#E7A47C] text-white rounded-full hover:bg-[#DFA58F] transition-colors">
                  {addingClient ? 'Adding…' : 'Add Client'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
