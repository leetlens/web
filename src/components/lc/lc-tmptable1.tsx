import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import Image from "next/image";

interface Campaign {
  status: "Active" | "Paused";
  platforms: ("Google" | "Microsoft")[];
  budget: string;
  impressions: number;
  clicks: number;
  cpc: number;
  conversions: number;
  cost: number;
}

export default function AdCampaignTable() {
  // Sample data matching the image
  const campaigns: Campaign[] = [
    {
      status: "Active",
      platforms: ["Google"],
      budget: "10€/j",
      impressions: 25594,
      clicks: 349,
      cpc: 349,
      conversions: 349,
      cost: 349,
    },
    {
      status: "Active",
      platforms: ["Google"],
      budget: "10€/j",
      impressions: 25594,
      clicks: 349,
      cpc: 349,
      conversions: 349,
      cost: 349,
    },
    {
      status: "Active",
      platforms: ["Google"],
      budget: "10€/j",
      impressions: 25594,
      clicks: 349,
      cpc: 349,
      conversions: 349,
      cost: 349,
    },
    {
      status: "Paused",
      platforms: ["Google", "Microsoft"],
      budget: "10€/j",
      impressions: 25594,
      clicks: 349,
      cpc: 349,
      conversions: 349,
      cost: 349,
    },
    {
      status: "Paused",
      platforms: ["Google", "Microsoft"],
      budget: "10€/j",
      impressions: 25594,
      clicks: 349,
      cpc: 349,
      conversions: 349,
      cost: 349,
    },
    {
      status: "Active",
      platforms: ["Google"],
      budget: "10€/j",
      impressions: 25594,
      clicks: 349,
      cpc: 349,
      conversions: 349,
      cost: 349,
    },
    {
      status: "Active",
      platforms: ["Google"],
      budget: "10€/j",
      impressions: 25594,
      clicks: 349,
      cpc: 349,
      conversions: 349,
      cost: 349,
    },
  ];

  return (
    <div className="w-full">
      <div className="rounded-xl border border-zinc-200 bg-white">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b border-zinc-200">
                <th className="h-12 px-4 text-left align-middle font-medium text-zinc-500">
                  Status
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-zinc-500">
                  Platforms
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-zinc-500">
                  Budget ↑
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-zinc-500">
                  Impressions ↑
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-zinc-500">
                  Clicks ↑
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-zinc-500">
                  CPC ↑
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-zinc-500">
                  Conversions ↑
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-zinc-500">
                  Cost ↑
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-zinc-500"></th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign, index) => (
                <tr
                  key={index}
                  className="border-b border-zinc-200 transition-colors hover:bg-zinc-50"
                >
                  <td className="p-4">
                    <div
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        campaign.status === "Active"
                          ? "bg-green-50 text-green-700"
                          : "bg-yellow-50 text-yellow-700"
                      }`}
                    >
                      {campaign.status}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      {campaign.platforms.map((platform, i) => (
                        <div key={i} className="flex items-center">
                          {platform === "Google" && (
                            <Image
                              src="/google-icon.png"
                              alt="Google"
                              width={20}
                              height={20}
                              className="rounded-sm"
                            />
                          )}
                          {platform === "Microsoft" && (
                            <Image
                              src="/microsoft-icon.png"
                              alt="Microsoft"
                              width={20}
                              height={20}
                              className="rounded-sm"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-zinc-900">{campaign.budget}</td>
                  <td className="p-4 text-zinc-900">
                    {campaign.impressions.toLocaleString()}
                  </td>
                  <td className="p-4 text-zinc-900">
                    {campaign.clicks.toLocaleString()}
                  </td>
                  <td className="p-4 text-zinc-900">
                    {campaign.cpc.toLocaleString()}
                  </td>
                  <td className="p-4 text-zinc-900">
                    {campaign.conversions.toLocaleString()}
                  </td>
                  <td className="p-4 text-zinc-900">
                    {campaign.cost.toLocaleString()}
                  </td>
                  <td className="p-4">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
