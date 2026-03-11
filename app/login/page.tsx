"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 font-sans text-white">
      <main className="mx-auto flex w-full max-w-6xl items-center justify-center px-6 py-16 lg:py-24">
        <div className="grid w-full gap-8 lg:grid-cols-2">
          <Card className="border-white/10 bg-white/5 text-white">
            <CardHeader>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                Welcome back
              </p>
              <CardTitle className="text-4xl">Sign in</CardTitle>
              <p className="text-base text-slate-300">
                Access your dashboard to manage users, roles, and permissions.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-base text-slate-300">
                <li>Secure authentication</li>
                <li>Role-based access</li>
                <li>Activity visibility</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Sign in</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-200">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-11 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-200">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="h-11 text-base"
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <label className="flex items-center gap-2">
                    <Checkbox />
                    Remember me
                  </label>
                  <Link href="/support" className="text-sky-300 hover:text-sky-200">
                    Need help?
                  </Link>
                </div>
                <Button className="h-11 w-full text-base" type="submit">
                  Sign in
                </Button>
                <p className="text-center text-sm text-slate-400">
                  New here?{" "}
                  <Link href="/signup" className="text-sky-300 hover:text-sky-200">
                    Create an account
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
