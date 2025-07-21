"use client";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-900 via-indigo-900 to-purple-900 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4">Opportuna</h1>
        <p className="text-xl">Your AI-powered career companion, built for real results.</p>
      </motion.div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
        <div className="bg-white/10 rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">🔍 Smart Job Matching</h2>
          <p>Upload or paste a job description and get resume tailoring, match score, and keyword optimization.</p>
        </div>
        <div className="bg-white/10 rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">📝 AI Cover Letters</h2>
          <p>Craft beautifully written, tone-customized letters in seconds—based on your resume and the job posting.</p>
        </div>
        <div className="bg-white/10 rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">📊 Application Tracker</h2>
          <p>Stay organized with a jewel-toned dashboard to monitor your applications and follow-ups.</p>
        </div>
      </section>
    </main>
  );
}
