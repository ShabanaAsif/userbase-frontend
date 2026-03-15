"use client"

import { useAuth } from "@/lib/context/AuthContext"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { User, Mail, Shield, CheckCircle, LogOut, Settings, Calendar } from "lucide-react"

export default function ProfilePage() {
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading your profile...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    router.push("/login")
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Welcome Header */}
        <div className="text-center mb-8">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 shadow-lg">
            <User className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">{user.name}</span>! 👋
          </h1>
          <p className="text-slate-400 text-lg">Here's your account overview</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Profile Info Card */}
          <div className="md:col-span-2">
            <Card className="border-white/10 bg-white/5 backdrop-blur-sm text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <User className="h-6 w-6" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-slate-200 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name
                    </Label>
                    <p className="text-lg font-medium text-white bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                      {user.name}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-200 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address
                    </Label>
                    <p className="text-lg font-medium text-white bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                      {user.email}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-200 flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Account Role
                    </Label>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={user.role === 'admin' ? 'destructive' : 'secondary'}
                        className="capitalize text-sm px-3 py-1"
                      >
                        {user.role}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-200 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Account Status
                    </Label>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-green-400 border-green-400 text-sm px-3 py-1">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex gap-3">
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      className="flex-1 border-red-500/20 text-red-400 hover:bg-red-500/10 hover:border-red-500/40 transition-all duration-200"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-purple-500/20 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all duration-200"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats Card */}
          <div className="space-y-6">
            <Card className="border-white/10 bg-white/5 backdrop-blur-sm text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">1</div>
                  <p className="text-sm text-slate-400">Active Sessions</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">0</div>
                  <p className="text-sm text-slate-400">Notifications</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">✓</div>
                  <p className="text-sm text-slate-400">Account Verified</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 backdrop-blur-sm text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Member Since
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Joined recently
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  Welcome to our platform!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}