import React, { useState } from "react";
import {
  CheckCircle,
  Clock,
  Ticket,
  AlertCircle,
 
} from "lucide-react";
import DashboardLayout from '../layouts/DashboardLayout' // import ProductRackLayout from '../components/inventoryComp/ProductRackLayout'

/* ================= TYPES ================= */
type TicketStatus = "Open" | "In Progress" | "Resolved";
type UserType = "Customer" | "Delivery Partner";
type TicketPriority = "High" | "Medium" | "Low";

type Ticket = {
  id: string;
  name: string;
  subject: string;
  type: UserType;
  priority: TicketPriority;
  status: TicketStatus;
  date: string;
};

const stats = [
  {
    title: "Total Tickets",
    value: "145",
    icon: Ticket,
    colour: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    title: "Open Tickets",
    value: "42",
    icon: AlertCircle,
    colour: "text-red-500",
        bg: "bg-red-100",

  },
  {
    title: "In Progress",
    value: 78,
    icon: Clock,
    colour: "text-purple-500",
        bg: "bg-purple-100",

  },
  {
    title: "Resolved",
    value: 56,
    icon: CheckCircle,
    colour: "text-green-500",
        bg: "bg-green-100",

  },
];

/* ================= DATA ================= */
const tickets: Ticket[] = [
  {
    id: "TKT-1245",
    name: "Bawli Buch",
    type: "Customer",
    subject: "Order not delivered",
    priority: "High",
    status: "Open",
    date: "2025-12-03 10:30AM",
  },
  {
    id: "TKT-1246",
    name: "Bawli Buch",
     type: "Delivery Partner",
    subject: "Order not delivered",
    priority: "Medium",
    status: "In Progress",
    date: "2025-12-03 10:30AM",
  },
  {
    id: "TKT-1247",
    name: "Bawli Buch",
     type: "Customer",
    subject: "Order not delivered",
    priority: "High",
    status: "In Progress",
    date: "2025-12-03 10:30AM",
  },
  {
    id: "TKT-1248",
    name: "Bawli Buch",
          type: "Delivery Partner",
    subject: "Order not delivered",
    priority: "Low",
    status: "Resolved",
    date: "2025-12-03 10:30AM",
  },
  {
    id: "TKT-1249",
    name: "Bawli Buch",
     type: "Customer",
    subject: "Order not delivered",
    priority: "High",
    status: "Open",
    date: "2025-12-03 10:30AM",
  },
];

/* ================= HELPERS ================= */
const statusStyle = (status: TicketStatus) => {
  if (status === "Open") return "bg-orange-100 text-orange-600";
  if (status === "In Progress") return "bg-blue-100 text-blue-600";
  return "bg-green-100 text-green-600";
};

const statusStylee = (status: UserType) => {
  if (status === "Customer") return "bg-orange-100 text-orange-600";
  return "bg-purple-100 text-purple-600";
};

const priorityStyle = (p: TicketPriority) => {
  if (p === "High") return "bg-red-100 text-red-600";
  if (p === "Medium") return "bg-yellow-100 text-yellow-600";
  return "bg-gray-100 text-gray-600";
};

/* ================= MAIN ================= */
const CustomerSupportTickets = () => {
  const [selected, setSelected] = useState<Ticket | null>(null);

  return (
    <DashboardLayout>
    <div className="bg-[#f7faff] min-h-screen ">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          Customer Support & Tickets management
        </h1>
        <p className="text-sm text-gray-500">
          Resolve & Manage customer queries tickets
        </p>
      </div>

      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-xl shadow-sm p-4 flex justify-between items-start"
          >
            {/* Left content */}
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-700">
                {s.title}
              </p>
              {/* <p className="text-xs text-gray-400">
                {s.subtitle}
              </p> */}
              <p className="text-xl font-semibold pt-5 text-gray-900">
                {s.value}
              </p>
            </div>
      
            {/* Top-right image */}
            <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${s.bg}`}>
              {/* <img
                src="/icons/rider.png"
                alt={s.title}
                className="w-5 h-5 object-contain"
              /> */}
              {React.createElement(s.icon, { size: 20, className: s.colour })}
            </div>
          </div>
        ))}
      </div>
      

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-sm p-5">
        <h2 className="text-lg font-semibold mb-4">All Tickets</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-3 text-left">Ticket ID</th>
                <th className="py-3 text-left">User Info</th>
                <th className="py-3 text-left">User Type</th>
                <th className="py-3 text-left">Subject</th>
                <th className="py-3 text-left">Priority</th>
                <th className="py-3 text-left">Status</th>
                <th className="py-3 text-left">Date</th>
                <th className="py-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((t) => (
                <tr key={t.id} className="border-b hover:bg-gray-50">
                  <td className="py-3">{t.id}</td>
                  <td className="py-3">
                    <p className="font-medium">{t.name}</p>
                    {/* <p className="text-xs text-gray-400">{t.email}</p> */}
                  </td>
                  <td className="py-3 ">
                    <span
                      className={`px-3 py-1 rounded text-xs ${statusStylee(
                        t.type
                      )}`}
                    >
                      {t.type}
                    </span>
                  </td>
                  <td className="py-3">{t.subject}</td>
                  <td className="py-3">
                    <span
                      className={`px-3 py-1 rounded text-xs ${priorityStyle(
                        t.priority
                      )}`}
                    >
                      {t.priority}
                    </span>
                  </td>
                  <td className="py-3 ">
                    <span
                      className={`px-3 py-1 rounded text-xs ${statusStyle(
                        t.status
                      )}`}
                    >
                      {t.status}
                    </span>
                  </td>
                  <td className="py-3 text-xs">{t.date}</td>
                  <td className="py-3">
                    <button
                      onClick={() => setSelected(t)}
                      className="border px-4 py-3 rounded text-xs hover:bg-gray-100"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 flex justify-center items-end sm:items-center">
          <div className="bg-white w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl p-6">
            <h3 className="font-semibold mb-4">
              Ticket Details – {selected.id}
            </h3>

            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <Info label="Customer" value={selected.name} />
              <Info label="Email" value={selected.email} />
              <Info
                label="Priority"
                value={
                  <span
                    className={`px-2 py-1 rounded text-xs ${priorityStyle(
                      selected.priority
                    )}`}
                  >
                    {selected.priority}
                  </span>
                }
              />
              <Info
                label="Status"
                value={
                  <span
                    className={`px-2 py-1 rounded text-xs ${statusStyle(
                      selected.status
                    )}`}
                  >
                    {selected.status}
                  </span>
                }
              />
              <Info label="Subject" value={selected.subject} />
            </div>

            <div className="mb-4">
              <label className="text-xs text-gray-500">Update Status</label>
              <select className="w-full border rounded-lg px-3 py-2 text-sm">
                <option>Open</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="text-xs text-gray-500">Response</label>
              <textarea
                className="w-full border rounded-lg px-3 py-2 text-sm"
                placeholder="Type your response..."
                rows={3}
              />
            </div>

            <div className="flex gap-3">
              <button className="bg-green-500 text-white px-4 py-2 rounded text-sm">
                Send Response
              </button>
              <button
                onClick={() => setSelected(null)}
                className="border px-4 py-2 rounded text-sm"
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </DashboardLayout>
  );
};

/* ================= SMALL COMPONENTS ================= */
const Stat = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) => (
  <div className="bg-white rounded-xl p-5 shadow-sm flex justify-between items-center">
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
    <div className="w-9 h-9 bg-gray-100 rounded flex items-center justify-center text-gray-600">
      {icon}
    </div>
  </div>
);

const Info = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div>
    <p className="text-xs text-gray-400">{label}</p>
    <div className="text-sm font-medium">{value}</div>
  </div>
);

export default CustomerSupportTickets;
