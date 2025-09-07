"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Campaign type
type Campaign = {
  id: string;
  name: string;
  status: "Active" | "Inactive";
  totalLeads: number;
  requestStatus: {
    sent: number;
    pending: number;
    failed: number;
  };
  connectionStatus: {
    connected: number;
    messaged: number;
  };
};

async function fetchCampaigns(): Promise<Campaign[]> {
  return [
    {
      id: "1",
      name: "Just Herbs",
      status: "Active",
      totalLeads: 20,
      requestStatus: { sent: 0, pending: 20, failed: 0 },
      connectionStatus: { connected: 0, messaged: 0 },
    },
    {
      id: "2",
      name: "Juicy Chemistry",
      status: "Active",
      totalLeads: 11,
      requestStatus: { sent: 0, pending: 11, failed: 0 },
      connectionStatus: { connected: 0, messaged: 0 },
    },
    {
      id: "3",
      name: "Honeyveda",
      status: "Inactive",
      totalLeads: 3,
      requestStatus: { sent: 0, pending: 3, failed: 0 },
      connectionStatus: { connected: 0, messaged: 0 },
    },
  ];
}

export default function CampaignsPage() {
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");
  const [search, setSearch] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["campaigns"],
    queryFn: fetchCampaigns,
  });

  if (isLoading) return <p>Loading campaigns...</p>;

  const filtered = data?.filter((c) => {
    if (filter === "active" && c.status !== "Active") return false;
    if (filter === "inactive" && c.status !== "Inactive") return false;
    if (search && !c.name.toLowerCase().includes(search.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Campaigns</h1>
        <Button>Create Campaign</Button>
      </div>
      <p className="text-muted-foreground">
        Manage your campaigns and track their performance.
      </p>
      <div className="flex items-center justify-between">
        <Tabs
          value={filter}
          onValueChange={(val: any) => setFilter(val)}
          className="w-auto"
        >
          <TabsList>
            <TabsTrigger value="all">All Campaigns</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>
        </Tabs>

        <Input
          placeholder="Search campaigns..."
          className="w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Card className="p-4">
        <table className="w-full text-left border-collapse">
          <thead className="border-b">
            <tr className="text-sm text-muted-foreground">
              <th className="py-2">Campaign Name</th>
              <th>Status</th>
              <th>Total Leads</th>
              <th>Request Status</th>
              <th>Connection Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered?.map((c) => (
              <tr key={c.id} className="border-b last:border-none">
                <td className="py-3 font-medium">{c.name}</td>
                <td>
                  <Badge
                    variant={c.status === "Active" ? "default" : "secondary"}
                  >
                    {c.status}
                  </Badge>
                </td>
                <td>{c.totalLeads}</td>
                <td>
                  <div className="flex gap-4">
                    <span>✔ {c.requestStatus.sent}</span>
                    <span>⏳ {c.requestStatus.pending}</span>
                    <span>❌ {c.requestStatus.failed}</span>
                  </div>
                </td>
                <td>
                  <div className="flex gap-4">
                    <span>👤 {c.connectionStatus.connected}</span>
                    <span>💬 {c.connectionStatus.messaged}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
