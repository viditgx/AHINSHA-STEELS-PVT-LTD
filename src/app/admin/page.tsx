"use client";
import { useState, useEffect, useCallback } from "react";
import {
  Phone, Mail, MessageSquare, Package, Clock, CheckCircle2,
  RefreshCw, Trash2, LogOut, Eye, Filter, TrendingUp, Users, BarChart3, Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Inquiry {
  _id: string;
  name: string;
  email?: string;
  phone: string;
  subject?: string;
  product?: string;
  message?: string;
  type: "contact" | "quote" | "product";
  status: "new" | "read" | "replied";
  createdAt: string;
}

const TYPE_LABELS: Record<string, string> = {
  contact: "Contact Form",
  quote: "Quote Request",
  product: "Product Inquiry",
};

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",
  read: "bg-yellow-100 text-yellow-700",
  replied: "bg-green-100 text-green-700",
};

const TYPE_COLORS: Record<string, string> = {
  contact: "bg-purple-100 text-purple-700",
  quote: "bg-orange-100 text-orange-700",
  product: "bg-cyan-100 text-cyan-700",
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState("");
  const [filterType, setFilterType] = useState("");
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const [total, setTotal] = useState(0);

  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (filterStatus) params.set("status", filterStatus);
    if (filterType) params.set("type", filterType);

    const res = await fetch(`/api/admin/inquiries?${params}`, {
      headers: { "x-admin-password": password },
    });

    if (res.status === 401) { setAuthed(false); return; }

    const data = await res.json();
    setInquiries(data.inquiries || []);
    setTotal(data.total || 0);
    setLoading(false);
  }, [password, filterStatus, filterType]);

  useEffect(() => {
    if (authed) fetchInquiries();
  }, [authed, fetchInquiries]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    // We'll verify by making an API call
    setAuthed(true);
    setAuthError("");
  };

  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/admin/inquiries", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-password": password },
      body: JSON.stringify({ id, status }),
    });
    setInquiries((prev) => prev.map((i) => i._id === id ? { ...i, status: status as Inquiry["status"] } : i));
    if (selected?._id === id) setSelected((s) => s ? { ...s, status: status as Inquiry["status"] } : null);
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm("Delete this inquiry?")) return;
    await fetch("/api/admin/inquiries", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "x-admin-password": password },
      body: JSON.stringify({ id }),
    });
    setInquiries((prev) => prev.filter((i) => i._id !== id));
    if (selected?._id === id) setSelected(null);
  };

  const openDetail = (inq: Inquiry) => {
    setSelected(inq);
    if (inq.status === "new") updateStatus(inq._id, "read");
  };

  const stats = {
    total: inquiries.length,
    new: inquiries.filter((i) => i.status === "new").length,
    replied: inquiries.filter((i) => i.status === "replied").length,
    quotes: inquiries.filter((i) => i.type === "quote").length,
  };

  // LOGIN SCREEN
  if (!authed) {
    return (
      <div className="min-h-screen bg-primary-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-xl">AS</div>
            <div>
              <div className="font-bold font-heading text-primary">Admin Panel</div>
              <div className="text-xs text-steel">Ahinsha Steels Pvt. Ltd.</div>
            </div>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1.5">Admin Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            {authError && <p className="text-red-500 text-sm">{authError}</p>}
            <button type="submit" className="btn-primary w-full">Login</button>
          </form>
        </div>
      </div>
    );
  }

  // ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Top Bar */}
      <div className="bg-primary-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center font-bold text-sm">AS</div>
          <div>
            <div className="font-heading font-bold">Admin Dashboard</div>
            <div className="text-xs text-slate-400">Ahinsha Steels Pvt. Ltd.</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={fetchInquiries} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg text-sm transition-colors">
            <RefreshCw size={14} /> Refresh
          </button>
          <button onClick={() => { setAuthed(false); setPassword(""); }} className="flex items-center gap-2 bg-red-500/20 hover:bg-red-500/30 px-3 py-2 rounded-lg text-sm transition-colors">
            <LogOut size={14} /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Inquiries", value: total, icon: BarChart3, color: "text-primary" },
            { label: "New / Unread", value: stats.new, icon: TrendingUp, color: "text-blue-600" },
            { label: "Replied", value: stats.replied, icon: CheckCircle2, color: "text-green-600" },
            { label: "Quote Requests", value: stats.quotes, icon: Users, color: "text-orange-500" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                <s.icon size={22} className={s.color} />
              </div>
              <div>
                <div className={`text-2xl font-bold font-heading ${s.color}`}>{s.value}</div>
                <div className="text-xs text-steel">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 flex flex-wrap gap-3 items-center">
          <Filter size={16} className="text-steel" />
          <span className="text-sm font-medium text-slate-700">Filter:</span>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
            <option value="">All Status</option>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="replied">Replied</option>
          </select>
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}
            className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
            <option value="">All Types</option>
            <option value="contact">Contact Form</option>
            <option value="quote">Quote Request</option>
            <option value="product">Product Inquiry</option>
          </select>
          <button onClick={fetchInquiries} className="ml-auto text-sm bg-accent text-white px-4 py-1.5 rounded-lg hover:bg-accent-hover transition-colors">
            Apply
          </button>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* List */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-heading font-semibold text-primary">Inquiries ({inquiries.length})</h2>
              {loading && <Loader2 size={16} className="animate-spin text-accent" />}
            </div>
            <div className="overflow-y-auto max-h-[600px]">
              {inquiries.length === 0 && !loading && (
                <div className="text-center py-12 text-steel text-sm">No inquiries found.</div>
              )}
              {inquiries.map((inq) => (
                <div
                  key={inq._id}
                  onClick={() => openDetail(inq)}
                  className={cn(
                    "p-4 border-b border-slate-50 cursor-pointer hover:bg-slate-50 transition-colors",
                    selected?._id === inq._id ? "bg-accent/5 border-l-4 border-l-accent" : "",
                    inq.status === "new" ? "bg-blue-50/50" : ""
                  )}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-semibold text-sm text-primary truncate">{inq.name}</span>
                    {inq.status === "new" && (
                      <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full shrink-0">NEW</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", TYPE_COLORS[inq.type])}>
                      {TYPE_LABELS[inq.type]}
                    </span>
                  </div>
                  <div className="text-xs text-steel">{inq.phone}</div>
                  <div className="text-xs text-slate-400 mt-1">
                    {new Date(inq.createdAt).toLocaleString("en-IN")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detail */}
          <div className="lg:col-span-2">
            {selected ? (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h2 className="font-heading font-bold text-xl text-primary">{selected.name}</h2>
                    <div className="flex gap-2 mt-1">
                      <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", TYPE_COLORS[selected.type])}>
                        {TYPE_LABELS[selected.type]}
                      </span>
                      <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", STATUS_COLORS[selected.status])}>
                        {selected.status.charAt(0).toUpperCase() + selected.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <button onClick={() => deleteInquiry(selected._id)} className="text-red-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-steel text-xs mb-1"><Phone size={12} /> Phone</div>
                      <a href={`tel:${selected.phone}`} className="font-semibold text-primary hover:text-accent transition-colors">
                        {selected.phone}
                      </a>
                    </div>
                    {selected.email && (
                      <div className="bg-slate-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-steel text-xs mb-1"><Mail size={12} /> Email</div>
                        <a href={`mailto:${selected.email}`} className="font-semibold text-primary hover:text-accent transition-colors text-sm break-all">
                          {selected.email}
                        </a>
                      </div>
                    )}
                    {selected.product && (
                      <div className="bg-slate-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-steel text-xs mb-1"><Package size={12} /> Product</div>
                        <div className="font-semibold text-primary text-sm">{selected.product}</div>
                      </div>
                    )}
                    {selected.subject && (
                      <div className="bg-slate-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-steel text-xs mb-1"><MessageSquare size={12} /> Subject</div>
                        <div className="font-semibold text-primary text-sm">{selected.subject}</div>
                      </div>
                    )}
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-steel text-xs mb-1"><Clock size={12} /> Received</div>
                      <div className="font-semibold text-primary text-sm">
                        {new Date(selected.createdAt).toLocaleString("en-IN")}
                      </div>
                    </div>
                  </div>

                  {selected.message && (
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-steel text-xs mb-2"><MessageSquare size={12} /> Message</div>
                      <p className="text-slate-700 text-sm leading-relaxed">{selected.message}</p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href={`https://wa.me/${selected.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                      <MessageSquare size={14} /> WhatsApp
                    </a>
                    <a href={`tel:${selected.phone}`}
                      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                      <Phone size={14} /> Call
                    </a>
                    {selected.email && (
                      <a href={`mailto:${selected.email}`}
                        className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                        <Mail size={14} /> Email
                      </a>
                    )}
                    <div className="ml-auto flex gap-2">
                      {["new", "read", "replied"].map((s) => (
                        <button key={s} onClick={() => updateStatus(selected._id, s)}
                          className={cn(
                            "px-3 py-2 rounded-lg text-xs font-semibold transition-colors",
                            selected.status === s
                              ? "bg-accent text-white"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          )}>
                          {s.charAt(0).toUpperCase() + s.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm h-64 flex flex-col items-center justify-center text-steel gap-3">
                <Eye size={40} className="text-slate-200" />
                <p>Select an inquiry to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
