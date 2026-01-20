// Vercel-Ready End-to-End Outreach Demo (Next.js + React)
// File: pages/index.js

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">End-to-End Outreach Automation Demo</h1>

      {/* Navigation Steps */}
      <div className="flex space-x-3 mb-6">
        {[1, 2, 3, 4, 5].map((s) => (
          <button
            key={s}
            onClick={() => setStep(s)}
            className={`px-3 py-2 rounded-lg text-sm font-semibold ${step === s ? "bg-blue-600 text-white" : "bg-white"}`}
          >
            Step {s}
          </button>
        ))}
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl bg-white shadow-xl p-6 rounded-2xl"
      >
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-2">Step 1: LinkedIn Profile Input</h2>
            <input
              className="border p-2 rounded w-full mb-3"
              placeholder="Paste LinkedIn Profile URL"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded">Extract Details</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-2">Step 2: Extracted Details</h2>
            <div className="bg-gray-100 p-4 rounded-xl">
              <p>Name: John Carter</p>
              <p>Designation: Marketing Lead</p>
              <p>Company: BlueWave Tech</p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold mb-2">Step 3: Enriched Data</h2>
            <div className="bg-gray-100 p-4 rounded-xl">
              <p>Phone: +1 202 555 0148</p>
              <p>Email: john.carter@bluewave.co</p>
              <p>Industry: SaaS / AI</p>
              <p>Company Size: 50–200 employees</p>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-xl font-bold mb-2">Step 4: Pushed to CRM</h2>
            <div className="bg-gray-100 p-4 rounded-xl space-y-1">
              <p>Lead Added → Stage: New Lead</p>
              <p>Auto-tagged: "Marketing Lead - SaaS"</p>
              <p>Status: Enriched + Ready for Outreach</p>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 className="text-xl font-bold mb-2">Step 5: CRM Pipeline Tracking</h2>
            <div className="space-y-3">
              {["New Lead", "Enriched", "WhatsApp Sent", "Interested"].map((stage, i) => (
                <div key={stage} className="p-3 border rounded-xl bg-gray-50">
                  <p className="font-semibold">{stage}</p>
                  <p>{i === 0 && "Lead extracted from LinkedIn"}
                  {i === 1 && "Data enriched via API"}
                  {i === 2 && "Automated WhatsApp message sent"}
                  {i === 3 && "Lead replied on WhatsApp"}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
