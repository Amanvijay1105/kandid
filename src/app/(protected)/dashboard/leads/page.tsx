"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { authClient } from "@/app/lib/auth-client";
import { redirect } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  status: "Pending" | "Contacted" | "Responded" | "Converted";
  campaign: string;
  role?: string;
  profilePic?: string;
  connectionStatus?: string;
  reply?: string;
};

async function fetchLeads(): Promise<Lead[]> {
  const session = await authClient.getSession();
  if (!session) redirect("/authflow");

  const res = await fetch("/api/leads");
  if (!res.ok) throw new Error("Failed to fetch leads");
  return res.json();
}

export default function LeadsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["leads"],
    queryFn: fetchLeads,
  });

  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  if (isLoading) return <div className="p-6">Loading leads...</div>;
  if (error) return <div className="p-6 text-red-500">Error loading leads</div>;

  return (
    <>
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Leads</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-xs uppercase text-slate-400 border-b">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Campaign</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((lead) => (
                <tr
                  key={lead.id}
                  className="hover:bg-slate-50 cursor-pointer border-b"
                  onClick={() => setSelectedLead(lead)}
                >
                  <td className="px-6 py-4 flex items-center gap-3">
                    <Avatar>
                      <span>{lead.name.charAt(0)}</span>
                    </Avatar>
                    <div>
                      <div className="font-medium text-slate-900">{lead.name}</div>
                      <div className="text-sm text-slate-500">{lead.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">{lead.email}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{lead.company}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{lead.campaign}</td>
                  <td className="px-6 py-4">
                    <Badge
                      variant="outline"
                      className={
                        lead.status === "Pending"
                          ? "bg-violet-100 text-violet-700"
                          : lead.status === "Contacted"
                          ? "bg-amber-100 text-amber-700"
                          : lead.status === "Responded"
                          ? "bg-sky-100 text-sky-700"
                          : "bg-green-100 text-green-700"
                      }
                    >
                      {lead.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Lead Detail Panel */}
      <Dialog open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{selectedLead?.name}</DialogTitle>
          </DialogHeader>
          {selectedLead && (
            <div className="space-y-4 right-0">
              <div className="flex items-center gap-3">
                <Avatar>
                  <span>{selectedLead.name.charAt(0)}</span>
                </Avatar>
                <div>
                  <div className="font-medium">{selectedLead.name}</div>
                  <div className="text-sm text-slate-500">{selectedLead.role || "No role"}</div>
                </div>
              </div>
              <div className="text-sm">
                <p>
                  <strong>Email:</strong> {selectedLead.email}
                </p>
                <p>
                  <strong>Company:</strong> {selectedLead.company}
                </p>
                <p>
                  <strong>Campaign:</strong> {selectedLead.campaign}
                </p>
                <p>
                  <strong>Status:</strong> {selectedLead.status}
                </p>
              </div>
              <div className="border-t pt-3 text-sm">
                <p>
                  <strong>Connection Status:</strong>{" "}
                  {selectedLead.connectionStatus || "Not Available"}
                </p>
                <p>
                  <strong>Reply:</strong>{" "}
                  {selectedLead.reply ? selectedLead.reply : "No reply yet"}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
