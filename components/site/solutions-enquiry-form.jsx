"use client"

import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const fieldCls =
  "w-full min-h-11 rounded-xl border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
const labelCls = "mb-2 block text-sm font-medium text-foreground"

export default function SolutionsEnquiryForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k) => data.get(k) || ""
    const subject = `New enquiry from ${get("name") || "PayNext solutions page"}`
    const body = [
      `Name: ${get("name")}`,
      `Work Email: ${get("email")}`,
      `Organisation: ${get("company") || "-"}`,
      `Phone: ${get("phone") || "-"}`,
      `Interested in: ${get("interest") || "-"}`,
      "",
      "Message:",
      get("message"),
    ].join("\n")
    window.location.href = `mailto:info@paynext.co.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="sol-name" className={labelCls}>
              Full Name
            </label>
            <input id="sol-name" type="text" name="name" className={fieldCls} placeholder="John Doe" required />
          </div>
          <div>
            <label htmlFor="sol-email" className={labelCls}>
              Work Email
            </label>
            <input
              id="sol-email"
              type="email"
              name="email"
              className={fieldCls}
              placeholder="john@yourbank.com"
              required
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="sol-company" className={labelCls}>
              Organisation Name
            </label>
            <input id="sol-company" type="text" name="company" className={fieldCls} placeholder="Your Bank / Fintech" />
          </div>
          <div>
            <label htmlFor="sol-phone" className={labelCls}>
              Phone Number
            </label>
            <input id="sol-phone" type="tel" name="phone" className={fieldCls} placeholder="+91 98765 43210" />
          </div>
        </div>
        <div>
          <label htmlFor="sol-interest" className={labelCls}>
            I'm interested in
          </label>
          <select id="sol-interest" name="interest" className={fieldCls}>
            <option value="">Select a solution</option>
            <option value="pos">POS / MPOS Solutions</option>
            <option value="ecommerce">E-Commerce Gateway</option>
            <option value="bharatqr">Bharat QR & UPI</option>
            <option value="fraud">Advanced Fraud Management</option>
            <option value="analytics">Analytics / Business Intelligence</option>
            <option value="demo">Request a Demo</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="sol-message" className={labelCls}>
            Message
          </label>
          <textarea
            id="sol-message"
            name="message"
            rows={5}
            className={fieldCls}
            placeholder="Tell us about your payment requirements..."
            required
          ></textarea>
        </div>
        <Button type="submit" size="lg" className="min-h-11 w-full">
          Send Message
          <Send aria-hidden="true" />
        </Button>
      </div>
    </form>
  )
}
