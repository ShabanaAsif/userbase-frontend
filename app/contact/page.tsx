"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto w-full max-w-5xl px-6 py-16">
        <Card className="border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
          <CardHeader>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Contact
            </p>
            <CardTitle className="text-3xl">Contact Us</CardTitle>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Have a question or need support? We are here to help.
            </p>
          </CardHeader>
        </Card>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card className="border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-lg">Email</CardTitle>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Reach out to our support team anytime.
              </p>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:support@example.com"
                className="text-sm font-medium text-sky-600 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
              >
                support@example.com
              </a>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-lg">Phone</CardTitle>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Monday to Friday, 9am – 6pm.
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                +1 (555) 123-4567
              </p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-lg">Office</CardTitle>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                123 Access Lane, Suite 400
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                San Francisco, CA
              </p>
            </CardContent>
          </Card>
        </section>

        <Card className="mt-10 border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-xl">Send a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2 md:col-span-1">
                <Label className="text-zinc-700 dark:text-zinc-200">Name</Label>
                <Input placeholder="Your name" />
              </div>
              <div className="space-y-2 md:col-span-1">
                <Label className="text-zinc-700 dark:text-zinc-200">Email</Label>
                <Input type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className="text-zinc-700 dark:text-zinc-200">
                  Message
                </Label>
                <Textarea placeholder="How can we help?" rows={4} />
              </div>
              <div className="md:col-span-2">
                <Button className="w-full" type="submit">
                  Send message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
