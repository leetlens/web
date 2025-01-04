import { Button } from "@/components/ui/button";
import { MoreVertical, Check, X, MessageSquare } from "lucide-react";
import Image from "next/image";
interface LeaveRequest {
  employee: {
    name: string;
    avatar: string;
  };
  leaveType: string;
  datesRequested: string;
  duration: string;
  status: "Pending" | "Approved" | "Declined";
}

export default function LeaveRequestsTable() {
  // Sample data matching the image
  const leaveRequests: LeaveRequest[] = [
    {
      employee: {
        name: "Robert Fox",
        avatar: "/assets/avatar1.png",
      },
      leaveType: "Annual Leave",
      datesRequested: "Sep 12 - Sep 16, 2024",
      duration: "5 days",
      status: "Pending",
    },
    {
      employee: {
        name: "Arlene McCoy",
        avatar: "/assets/avatar2.png",
      },
      leaveType: "Sick Leave",
      datesRequested: "Aug 2 - Aug 9, 2024",
      duration: "8 days",
      status: "Pending",
    },
    {
      employee: {
        name: "Brooklyn Simmons",
        avatar: "/assets/avatar3.png",
      },
      leaveType: "Annual Leave",
      datesRequested: "Apr 18 - April 21, 2024",
      duration: "4 days",
      status: "Pending",
    },
    {
      employee: {
        name: "Darlene Robertson",
        avatar: "/assets/avatar4.png",
      },
      leaveType: "Annual Leave",
      datesRequested: "Apr 1 - April 4, 2024",
      duration: "4 days",
      status: "Approved",
    },
    {
      employee: {
        name: "Jacob Jones",
        avatar: "/assets/avatar5.png",
      },
      leaveType: "Annual Leave",
      datesRequested: "Mar 6 - Mar 7, 2024",
      duration: "2 days",
      status: "Approved",
    },
    {
      employee: {
        name: "Devon Lane",
        avatar: "/assets/avatar6.png",
      },
      leaveType: "Annual Leave",
      datesRequested: "Feb 16 - Feb 18, 2024",
      duration: "3 days",
      status: "Declined",
    },
    {
      employee: {
        name: "Kathryn Murphy",
        avatar: "/assets/avatar7.png",
      },
      leaveType: "Sick Leave",
      datesRequested: "Feb 1 - Feb 4, 2024",
      duration: "4 days",
      status: "Pending",
    },
    {
      employee: {
        name: "Ralph Edwards",
        avatar: "/assets/avatar8.png",
      },
      leaveType: "Paternity Leave",
      datesRequested: "Dec 22, 2023 - Jan 24, 2024",
      duration: "31 days",
      status: "Approved",
    },
  ];

  return (
    <div className="w-full">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="h-12 w-[40px] px-4 text-left align-middle">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-zinc-700 bg-zinc-900"
                />
              </th>
              <th className="h-12 px-4 text-left align-middle text-zinc-400">
                Employee
              </th>
              <th className="h-12 px-4 text-left align-middle text-zinc-400">
                Leave Type
              </th>
              <th className="h-12 px-4 text-left align-middle text-zinc-400">
                Dates Requested
              </th>
              <th className="h-12 px-4 text-left align-middle text-zinc-400">
                Duration
              </th>
              <th className="h-12 px-4 text-left align-middle text-zinc-400">
                Status
              </th>
              <th className="h-12 w-[40px] px-4 text-left align-middle"></th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request, index) => (
              <tr
                key={index}
                className="group border-b border-zinc-800 transition-colors hover:bg-zinc-800/50"
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-zinc-700 bg-zinc-900"
                  />
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={request.employee.avatar}
                      alt={request.employee.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="font-medium text-zinc-100">
                      {request.employee.name}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-zinc-300">{request.leaveType}</td>
                <td className="p-4 text-zinc-300">{request.datesRequested}</td>
                <td className="p-4 text-zinc-300">{request.duration}</td>
                <td className="p-4">
                  <div className="flex items-center">
                    {request.status === "Approved" && (
                      <span className="flex items-center text-emerald-500">
                        <Check className="mr-1.5 h-4 w-4" />
                        Approved
                      </span>
                    )}
                    {request.status === "Pending" && (
                      <span className="flex items-center text-orange-500">
                        <div className="mr-1.5 h-2 w-2 rounded-full bg-orange-500" />
                        Pending
                      </span>
                    )}
                    {request.status === "Declined" && (
                      <span className="flex items-center text-red-500">
                        <X className="mr-1.5 h-4 w-4" />
                        Declined
                      </span>
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <div className="invisible flex items-center gap-2 group-hover:visible">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-zinc-400 hover:text-zinc-100"
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-zinc-400 hover:text-zinc-100"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-zinc-400 hover:text-zinc-100"
                    >
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-zinc-400 hover:text-zinc-100"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
