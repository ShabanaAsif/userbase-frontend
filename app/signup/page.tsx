"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 font-sans text-white">
      <main className="mx-auto w-full max-w-4xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-white/10 bg-white/5 text-white">
            <CardHeader>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                Create account
              </p>
              <CardTitle className="text-3xl">Sign up</CardTitle>
              <p className="text-sm text-slate-300">
                Join the User Management System to manage profiles, roles, and
                secure access.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>Role-based access controls</li>
                <li>Secure authentication flows</li>
                <li>Quick onboarding for teams</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 text-white">
            <CardHeader>
              <CardTitle className="text-xl">Create account</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-200">
                    Full name
                  </Label>
                  <Input id="name" type="text" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-200">
                    Email
                  </Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-200">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-slate-200">
                    Role
                  </Label>
                  <select
                    id="role"
                    className="h-8 w-full rounded-lg border border-white/10 bg-slate-950/40 px-2.5 text-sm text-white focus:border-sky-400 focus:outline-none"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <Button className="w-full" type="submit">
                  Create account
                </Button>
                <p className="text-center text-sm text-slate-400">
                  Already have an account?{" "}
                  <Link href="/login" className="text-sky-300 hover:text-sky-200">
                    Sign in
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
