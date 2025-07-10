"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "zffu@zffu.dev",
      href: "mailto:zffu@zffu.dev",
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Get In Touch</h2>

          <p className="text-lg text-gray-700 text-center mb-16 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
            to say hi, feel free to reach out!
          </p>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  I'm currently available for freelance work and full-time opportunities. If you have a project in mind
                  or just want to chat about technology, don't hesitate to reach out.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <a
                        href={info.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Response Time</h4>
                <p className="text-gray-600">
                  I typically respond to emails within 24 hours during business days. For urgent matters, feel free to
                  contact me on Discord or Instagram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
