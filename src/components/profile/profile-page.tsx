import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PlatformStats {
  username: string;
  totalSolved: number;
  ranking: number;
  contestRating?: number;
}

export default function ProfilePage() {
  const [leetcodeUsername, setLeetcodeUsername] = useState("");
  const [codeforcesUsername, setCodeforcesUsername] = useState("");
  const [leetcodeStats, setLeetcodeStats] = useState<PlatformStats | null>(
    null
  );
  const [codeforcesStats, setCodeforcesStats] = useState<PlatformStats | null>(
    null
  );

  const fetchLeetCodeStats = async () => {
    // TODO: Implement LeetCode API integration
    // This will fetch actual stats from LeetCode
    console.log("Fetching LeetCode stats for:", leetcodeUsername);
  };

  const fetchCodeforcesStats = async () => {
    // TODO: Implement CodeForces API integration
    // This will fetch actual stats from CodeForces
    console.log("Fetching CodeForces stats for:", codeforcesUsername);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>

      <div className="grid gap-8">
        {/* User Details Section */}
        <Card>
          <CardHeader>
            <CardTitle>User Details</CardTitle>
            <CardDescription>Your personal information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input placeholder="Your email" type="email" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* LeetCode Section */}
        <Card>
          <CardHeader>
            <CardTitle>LeetCode Integration</CardTitle>
            <CardDescription>Connect your LeetCode account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Input
                  placeholder="LeetCode username"
                  value={leetcodeUsername}
                  onChange={(e) => setLeetcodeUsername(e.target.value)}
                />
                <Button onClick={fetchLeetCodeStats}>Connect</Button>
              </div>

              {leetcodeStats && (
                <div className="grid grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Problems Solved</CardTitle>
                      <CardDescription>
                        {leetcodeStats.totalSolved}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Ranking</CardTitle>
                      <CardDescription>{leetcodeStats.ranking}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* CodeForces Section */}
        <Card>
          <CardHeader>
            <CardTitle>CodeForces Integration</CardTitle>
            <CardDescription>Connect your CodeForces account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Input
                  placeholder="CodeForces username"
                  value={codeforcesUsername}
                  onChange={(e) => setCodeforcesUsername(e.target.value)}
                />
                <Button onClick={fetchCodeforcesStats}>Connect</Button>
              </div>

              {codeforcesStats && (
                <div className="grid grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Problems Solved</CardTitle>
                      <CardDescription>
                        {codeforcesStats.totalSolved}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Contest Rating</CardTitle>
                      <CardDescription>
                        {codeforcesStats.contestRating}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Ranking</CardTitle>
                      <CardDescription>
                        {codeforcesStats.ranking}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
