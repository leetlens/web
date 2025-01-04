"use client";

import Image from "next/image";

interface CompanyCardProps {
  name: string;
  imageUrl: string;
  questionCount: number;
  savedCount: number;
  lastUpdated: string;
}

export default function LcCompanyCard({
  name,
  imageUrl,
  questionCount,
  savedCount,
  lastUpdated,
}: CompanyCardProps) {
  return (
    <div className="bg-sd-card rounded-sd-lg relative flex flex-col items-center gap-2 p-6 shadow">
      <Image
        className="rounded-md"
        src={imageUrl}
        alt={`${name} logo`}
        width={80}
        height={80}
        priority
      />
      <div className="flex w-full flex-col items-center gap-4 overflow-x-hidden">
        <div className="flex w-full flex-col items-center gap-2 overflow-x-hidden">
          <h1 className="text-sd-foreground w-full gap-2 break-all text-center text-[32px] font-medium leading-[48px]">
            {name}
          </h1>
          <div className="text-sd-foreground flex w-full justify-center gap-1 overflow-x-hidden text-sm">
            <div className="flex flex-none items-center gap-1 text-sm">
              <div>{questionCount} questions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
