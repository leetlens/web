import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("flex min-h-[600px] flex-col justify-center", className)}
      {...props}
    >
      <Card className="w-full overflow-hidden border-none bg-gradient-to-b from-background/80 to-background shadow-xl transition-shadow duration-300 hover:shadow-lg sm:max-w-md">
        <CardHeader className="space-y-3 pb-8 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Welcome back
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="h-11 transition-colors duration-200 focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Password
                  </Label>
                  <a
                    href="#"
                    className="text-sm text-primary hover:text-primary/90 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  className="h-11 transition-colors duration-200 focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <Button
                type="submit"
                className="h-11 w-full text-base font-semibold shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
              >
                Sign in
              </Button>

              <div className="relative flex items-center justify-center gap-4">
                <div className="h-px flex-1 bg-border"></div>
                <span className="text-xs uppercase text-muted-foreground">
                  Or continue with
                </span>
                <div className="h-px flex-1 bg-border"></div>
              </div>

              <Button
                variant="outline"
                className="h-11 w-full gap-3 text-base font-semibold shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-accent/80"
              >
                <svg className="size-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>
            </div>

            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="text-primary hover:text-primary/90 hover:underline"
              >
                Create an account
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
