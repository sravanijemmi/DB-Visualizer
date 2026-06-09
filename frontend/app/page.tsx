import { redirect } from "next/navigation"
import LoginForm from "@/components/login-form"

export default function Home() {
  // For demo purposes, we'll redirect to the chat page if the user is already logged in
  // In a real application, you would check for an authenticated session
  const isLoggedIn = false

  if (isLoggedIn) {
    redirect("/chat")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
          <p className="mt-2 text-slate-600">Sign in to continue to your dashboard</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

