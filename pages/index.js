import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <div style={{ padding: "30px", background: "#f3f4f6", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>
        End-to-End Outreach Automation Demo
      </h1>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        {[1, 2, 3, 4, 5].map((s) => (
          <button
            key={s}
            onClick={() => setStep(s)}
            style={{
              padding: "10px 15px",
              marginRight: "8px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              background: step === s ? "#2563eb" : "#fff",
              color: step === s ? "#fff" : "#000",
              cursor: "pointer",
            }}
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
        style={{
          background: "#fff",
          padding: "25px",
          maxWidth: "650px",
          margin: "auto",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        {step === 1 && (
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
              Step 1: LinkedIn Profile Input
            </h2>
            <input
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                marginBottom: "15px",
              }}
              placeholder="Paste LinkedIn Profile URL"
            />
            <button
              style={{
                width: "100%",
                padding: "12px",
                background: "#2563eb",
                color: "white",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Extract Details
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
              Step 2: Extracted Details
            </h2>
            <div style={{ background: "#f3f4f6", padding: "20px", borderRadius: "10px" }}>
              <p>Name: John Carter</p>
              <p>Designation: Marketing Lead</p>
              <p>Company: BlueWave Tech</p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
              Step 3: Enriched Data
            </h2>
            <div style={{ background: "#f3f4f6", padding: "20px", borderRadius: "10px" }}>
              <p>Phone: +1 202 555 0148</p>
              <p>Email: john.carter@bluewave.co</p>
              <p>Industry: SaaS / AI</p>
              <p>Company Size: 50–200 employees</p>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
              Step 4: Pushed to CRM
            </h2>
            <div style={{ background: "#f3f4f6", padding: "20px", borderRadius: "10px" }}>
              <p>Lead Added → Stage: New Lead</p>
              <p>Auto-tagged: “Marketing Lead - SaaS”</p>
              <p>Status: Enriched + Ready for Outreach</p>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
              Step 5: CRM Pipeline Tracking
            </h2>
            {["New Lead", "Enriched", "WhatsApp Sent", "Interested"].map((stage, i) => (
              <div
                key={stage}
                style={{
                  background: "#f9fafb",
                  padding: "15px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  border: "1px solid #e5e7eb",
                }}
              >
                <p style={{ fontWeight: "bold" }}>{stage}</p>
                <p>
                  {i === 0 && "Lead extracted from LinkedIn"}
                  {i === 1 && "Data enriched via API"}
                  {i === 2 && "Automated WhatsApp message sent"}
                  {i === 3 && "Lead replied on WhatsApp"}
                </p>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
