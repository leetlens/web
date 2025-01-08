"use client";

import LandingHeader from "@/components/landing/landing-header";
import ProfilePage from "@/components/profile/profile-page";

export default function Page() {
  return (
    <div>
      <LandingHeader />
      <div className="max-w-[90rem] mx-auto p-6">
        <h1 className="text-2xl font-bold">Profile</h1>
        <ProfilePage />
      </div>
    </div>
  );
}
