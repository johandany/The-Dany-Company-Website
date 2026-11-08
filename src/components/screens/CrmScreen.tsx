import React, { useState } from 'react';
import { CrmProject } from '../../types';
import { INITIAL_CRM_PROJECTS } from '../../data/mockData';
import {
  Search,
  Filter,
  Plus,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Download,
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const CrmScreen: React.FC = () => {
  const [projects, setProjects] = useState<CrmProject[]>(INITIAL_CRM_PROJECTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<CrmProject | null>(null);
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);

  // New Project Form State
  const [newClientName, setNewClientName] = useState('');
  const [newProjectName, setNewProjectName] = useState('');
  const [newCategory, setNewCategory] = useState<CrmProject['category']>('Custom CRM');
  const [newLeadArchitect, setNewLeadArchitect] = useState('CSM Johan K');
  const [newContractValue, setNewContractValue] = useState('350000');
  const [newStatus, setNewStatus] = useState<CrmProject['status']>('In Architecture');
  const [newTechStack, setNewTechStack] = useState('PostgreSQL, React, TypeScript');
  const [newDescription, setNewDescription] = useState('');

  // Filtered projects
  const filteredProjects = projects.filter((prj) => {
    const matchesSearch =
      prj.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prj.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prj.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || prj.status === statusFilter;
    const matchesCategory = categoryFilter === 'All' || prj.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Calculate totals
  const totalValue = projects.reduce((acc, p) => acc + p.contractValue, 0);
  const liveCount = projects.filter((p) => p.status === 'Live in Production').length;

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName || !newProjectName) return;

    const newPrj: CrmProject = {
      id: `PRJ-${Math.floor(1000 + Math.random() * 9000)}`,
      clientName: newClientName,
      projectName: newProjectName,
      category: newCategory,
      leadArchitect: newLeadArchitect,
      contractValue: Number(newContractValue) || 250000,
      status: newStatus,
      progress: newStatus === 'Live in Production' ? 100 : newStatus === 'In Architecture' ? 15 : 50,
      uptimeSla: '99.98%',
      startDate: new Date().toISOString().split('T')[0],
      targetLaunch: '2026-11-30',
      techStack: newTechStack.split(',').map((s) => s.trim()),
      description: newDescription || 'Institutional deployment contracted under The Dany Company engineering guidelines.'
    };

    setProjects([newPrj, ...projects]);
    setIsNewProjectModalOpen(false);
    // Reset form
    setNewClientName('');
    setNewProjectName('');
    setNewDescription('');
  };

  const handleExportData = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      'ID,Client,Project,Category,Lead Architect,Value,Status,Uptime SLA\n' +
      projects
        .map(
          (p) =>
            `"${p.id}","${p.clientName}","${p.projectName}","${p.category}","${p.leadArchitect}",${p.contractValue},"${p.status}","${p.uptimeSla}"`
        )
        .join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'The_Dany_Company_CRM_Portfolio.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 space-y-10">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e2e3e1] dark:border-[rgba(197,168,128,0.25)] pb-6">
        <div>
          <span className="text-xs uppercase tracking-[0.16em] font-sans-editorial font-bold text-[#725b38] dark:text-[#c5a880]">
            The Dany Company · Client Operations
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#0b192c] dark:text-[#fbfbf9] tracking-tight mt-1">
            Executive CRM & Architectural Registry
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportData}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0b192c] dark:text-[#fedeb2] bg-[#ffffff] dark:bg-[#112240] border border-[#c5a880] hover:bg-[#fedeb2]/15 rounded transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#c5a880]" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={() => setIsNewProjectModalOpen(true)}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#fbfbf9] bg-[#0b192c] dark:bg-[#c5a880] dark:text-[#0b192c] border border-[#c5a880]/40 hover:bg-[#112240] rounded transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>New Engagement</span>
          </button>
        </div>
      </div>

      {/* 4 Monolithic Navy Metric Cards (As per Design Specification) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Portfolio Value */}
        <div className="rounded-lg p-6 bg-[#0b192c] text-[#fbfbf9] border border-[rgba(197,168,128,0.35)] shadow-sovereign space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-sans-editorial text-[#dadad8]">
            <span className="uppercase tracking-wider">Active Contract Value</span>
            <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              +18.4% YoY
            </span>
          </div>
          <p className="font-serif-luxury text-3xl font-semibold text-[#fedeb2] tabular-nums">
            ${(totalValue / 1000000).toFixed(2)}M USD
          </p>
          <div className="text-[11px] text-[#c5c6cd] font-sans-editorial flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Across {projects.length} contracted institutional clients</span>
          </div>
        </div>

        {/* Card 2: Production Deployments */}
        <div className="rounded-lg p-6 bg-[#0b192c] text-[#fbfbf9] border border-[rgba(197,168,128,0.35)] shadow-sovereign space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-sans-editorial text-[#dadad8]">
            <span className="uppercase tracking-wider">Live Deployments</span>
            <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              100% Stable
            </span>
          </div>
          <p className="font-serif-luxury text-3xl font-semibold text-white tabular-nums">
            {liveCount} / {projects.length} Active
          </p>
          <div className="text-[11px] text-[#c5c6cd] font-sans-editorial flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
            <span>Zero critical vulnerabilities detected</span>
          </div>
        </div>

        {/* Card 3: SLA Uptime */}
        <div className="rounded-lg p-6 bg-[#0b192c] text-[#fbfbf9] border border-[rgba(197,168,128,0.35)] shadow-sovereign space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-sans-editorial text-[#dadad8]">
            <span className="uppercase tracking-wider">Operational SLA</span>
            <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              99.98% Guarantee
            </span>
          </div>
          <p className="font-serif-luxury text-3xl font-semibold text-white tabular-nums">
            99.984%
          </p>
          <div className="text-[11px] text-[#c5c6cd] font-sans-editorial flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Continuous multi-region telemetry probers</span>
          </div>
        </div>

        {/* Card 4: Executive Satisfaction */}
        <div className="rounded-lg p-6 bg-[#0b192c] text-[#fbfbf9] border border-[rgba(197,168,128,0.35)] shadow-sovereign space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-sans-editorial text-[#dadad8]">
            <span className="uppercase tracking-wider">CSAT Trust Index</span>
            <span className="text-[11px] font-semibold text-[#fedeb2] bg-[#112240] px-2 py-0.5 rounded border border-[#c5a880]/40">
              NPS 88
            </span>
          </div>
          <p className="font-serif-luxury text-3xl font-semibold text-[#fedeb2] tabular-nums">
            99.6%
          </p>
          <div className="text-[11px] text-[#c5c6cd] font-sans-editorial flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fedeb2]" />
            <span>Strict institutional confidentiality compliance</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#ffffff] dark:bg-[#0b192c] p-4 rounded-lg border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.25)] flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#75777d]" />
          <input
            type="text"
            placeholder="Search by client, project, or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs font-sans-editorial rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880]"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-1.5 text-xs text-[#75777d] font-sans-editorial">
            <Filter className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Status:</span>
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="py-1.5 px-3 text-xs font-sans-editorial rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880]"
          >
            <option value="All">All Statuses</option>
            <option value="In Architecture">In Architecture</option>
            <option value="Active Sprint">Active Sprint</option>
            <option value="Security Audit">Security Audit</option>
            <option value="Live in Production">Live in Production</option>
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="py-1.5 px-3 text-xs font-sans-editorial rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880]"
          >
            <option value="All">All Categories</option>
            <option value="Enterprise Cloud">Enterprise Cloud</option>
            <option value="Custom CRM">Custom CRM</option>
            <option value="Mobile Suite">Mobile Suite</option>
            <option value="Media & Brand">Media & Brand</option>
          </select>
        </div>
      </div>

      {/* High-Density Client Engagements Table */}
      <div className="rounded-lg bg-[#ffffff] dark:bg-[#0b192c] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.25)] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans-editorial">
            <thead>
              <tr className="bg-[#f4f4f2] dark:bg-[#07101c] text-[#725b38] dark:text-[#c5a880] uppercase tracking-wider border-b border-[#e2e3e1] dark:border-[rgba(197,168,128,0.2)]">
                <th className="py-3 px-4 font-semibold">ID</th>
                <th className="py-3 px-4 font-semibold">Client & System</th>
                <th className="py-3 px-4 font-semibold">Category</th>
                <th className="py-3 px-4 font-semibold">Lead Architect</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold">SLA Uptime</th>
                <th className="py-3 px-4 font-semibold text-right">Contract Value</th>
                <th className="py-3 px-4 font-semibold text-center">Inspect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eeeeec] dark:divide-[rgba(197,168,128,0.15)] text-[#1a1c1b] dark:text-[#fbfbf9]">
              {filteredProjects.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-10 text-center text-[#75777d] font-sans-editorial">
                    No client engagements found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredProjects.map((prj) => (
                  <tr
                    key={prj.id}
                    onClick={() => setSelectedProject(prj)}
                    className="hover:bg-[#f9f9f7] dark:hover:bg-[#112240]/40 transition-colors cursor-pointer group"
                  >
                    <td className="py-3.5 px-4 font-mono font-medium text-[#725b38] dark:text-[#fedeb2] tabular-nums whitespace-nowrap">
                      {prj.id}
                    </td>

                    <td className="py-3.5 px-4 max-w-xs">
                      <div className="font-semibold text-[#0b192c] dark:text-white truncate">
                        {prj.clientName}
                      </div>
                      <div className="text-[11px] text-[#75777d] dark:text-[#dadad8] truncate">
                        {prj.projectName}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="text-[#44474c] dark:text-[#dadad8]">
                        {prj.category}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 whitespace-nowrap text-[#1a1c1b] dark:text-[#fedeb2] font-medium">
                      {prj.leadArchitect}
                    </td>

                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold border ${
                          prj.status === 'Live in Production'
                            ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
                            : prj.status === 'Security Audit'
                            ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-500/30'
                            : prj.status === 'Active Sprint'
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-500/30'
                            : 'bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-500/30'
                        }`}
                      >
                        {prj.status}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 whitespace-nowrap font-mono tabular-nums text-emerald-700 dark:text-emerald-400 font-medium">
                      {prj.uptimeSla}
                    </td>

                    <td className="py-3.5 px-4 whitespace-nowrap font-mono tabular-nums text-right font-semibold text-[#0b192c] dark:text-[#fedeb2]">
                      ${prj.contractValue.toLocaleString()}
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      <span className="p-1 rounded text-[#75777d] group-hover:text-[#0b192c] dark:group-hover:text-[#fedeb2] transition-colors inline-block">
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Project Inspector Drawer / Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-[#ffffff] dark:bg-[#0b192c] rounded-xl border border-[#c5a880]/60 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-[#eeeeec] dark:border-[rgba(197,168,128,0.2)] pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#725b38] dark:text-[#c5a880]">
                  {selectedProject.id} · {selectedProject.category}
                </span>
                <h3 className="font-serif-luxury text-2xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
                  {selectedProject.clientName}
                </h3>
                <p className="text-xs text-[#75777d] dark:text-[#dadad8] mt-0.5">
                  {selectedProject.projectName}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded text-[#75777d] hover:text-[#0b192c] dark:hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs font-sans-editorial">
              <div>
                <span className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1">
                  System Architecture Description
                </span>
                <p className="text-[#44474c] dark:text-[#dadad8] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.2)]">
                <div>
                  <span className="text-[#75777d] block text-[10px]">LEAD ARCHITECT</span>
                  <strong className="text-[#0b192c] dark:text-white font-medium">
                    {selectedProject.leadArchitect}
                  </strong>
                </div>
                <div>
                  <span className="text-[#75777d] block text-[10px]">CONTRACT VALUE</span>
                  <strong className="text-[#0b192c] dark:text-[#fedeb2] font-semibold tabular-nums">
                    ${selectedProject.contractValue.toLocaleString()} USD
                  </strong>
                </div>
                <div>
                  <span className="text-[#75777d] block text-[10px]">VERIFIED SLA</span>
                  <strong className="text-emerald-700 dark:text-emerald-400 font-semibold tabular-nums">
                    {selectedProject.uptimeSla}
                  </strong>
                </div>
              </div>

              <div>
                <span className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1.5">
                  Deployment Progress ({selectedProject.progress}%)
                </span>
                <div className="w-full bg-[#eeeeec] dark:bg-[#112240] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#c5a880] h-full rounded-full transition-all duration-300"
                    style={{ width: `${selectedProject.progress}%` }}
                  />
                </div>
              </div>

              <div>
                <span className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-2">
                  Engineered Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#f4f4f2] dark:bg-[#112240] text-[#0b192c] dark:text-[#fedeb2] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.25)] text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#eeeeec] dark:border-[rgba(197,168,128,0.2)] flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#44474c] dark:text-[#dadad8] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.2)] rounded hover:bg-[#f4f4f2] dark:hover:bg-[#112240] cursor-pointer"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Engagement Modal */}
      {isNewProjectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#ffffff] dark:bg-[#0b192c] rounded-xl border border-[#c5a880]/60 shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-[#eeeeec] dark:border-[rgba(197,168,128,0.2)] pb-4">
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
                Register Client Engagement
              </h3>
              <button
                onClick={() => setIsNewProjectModalOpen(false)}
                className="p-1 rounded text-[#75777d] hover:text-[#0b192c] dark:hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-4 text-xs font-sans-editorial">
              <div>
                <label className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1">
                  Client Organization Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Imperial Trust & Securities"
                  value={newClientName}
                  onChange={(e) => setNewClientName(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div>
                <label className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1">
                  System / Platform Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sovereign Liquidity Clearing Architecture"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1">
                    System Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as CrmProject['category'])}
                    className="w-full px-3 py-2 rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="Enterprise Cloud">Enterprise Cloud</option>
                    <option value="Custom CRM">Custom CRM</option>
                    <option value="Mobile Suite">Mobile Suite</option>
                    <option value="Media & Brand">Media & Brand</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1">
                    Lead Architect
                  </label>
                  <select
                    value={newLeadArchitect}
                    onChange={(e) => setNewLeadArchitect(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="CSM Johan K">CSM Johan K</option>
                    <option value="Senior Systems Architect">Senior Systems Architect</option>
                    <option value="Lead Distributed Engineer">Lead Distributed Engineer</option>
                    <option value="Creative Director">Creative Director</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1">
                    Contract Value (USD)
                  </label>
                  <input
                    type="number"
                    value={newContractValue}
                    onChange={(e) => setNewContractValue(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div>
                  <label className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1">
                    Initial Status
                  </label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value as CrmProject['status'])}
                    className="w-full px-3 py-2 rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="In Architecture">In Architecture</option>
                    <option value="Active Sprint">Active Sprint</option>
                    <option value="Security Audit">Security Audit</option>
                    <option value="Live in Production">Live in Production</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1">
                  Scope & Deliverables
                </label>
                <textarea
                  rows={2}
                  placeholder="Outline key system invariants and high-throughput requirements..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div className="pt-3 border-t border-[#eeeeec] dark:border-[rgba(197,168,128,0.2)] flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsNewProjectModalOpen(false)}
                  className="px-4 py-2 font-semibold uppercase tracking-wider text-[#75777d] hover:text-[#0b192c] dark:hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 font-semibold uppercase tracking-wider text-[#fbfbf9] bg-[#0b192c] dark:bg-[#c5a880] dark:text-[#0b192c] rounded border border-[#c5a880]/50 hover:bg-[#112240] transition-colors cursor-pointer"
                >
                  Confirm Engagement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
