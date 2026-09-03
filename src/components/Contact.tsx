import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquareCode,
  MapPin,
} from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubject, setFormSubject] = useState('Opportunity / Collaboration Inquiry');
  const [formName, setFormName] = useState('');
  const [formNote, setFormNote] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const bodyText = `Hi Madhumitha,\n\nMy name is ${formName || '[Your Name]'}.\n\n${formNote || 'I came across your portfolio and would like to discuss an opportunity / project.'}\n\nBest regards,\n${formName || ''}`;
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formSubject
    )}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" aria-label="Contact Section" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="INITIATE DIALOGUE"
          title="Let's Build Something Intelligent."
          subtitle="Interested in collaborating, discussing an opportunity, or exploring ideas in AI, data and software development? I'd love to connect."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="rounded-2xl bg-slate-900/80 light:bg-white p-5 sm:p-6 border border-slate-800/90 light:border-slate-200 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 light:bg-cyan-50 flex items-center justify-center text-cyan-400 light:text-cyan-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 light:text-slate-500">
                      Email Address
                    </span>
                    <p className="text-sm font-semibold text-white light:text-slate-900">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>
                <button
                  id="copy-email-btn"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg bg-slate-800 light:bg-slate-100 hover:bg-slate-700 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <a
                id="contact-mailto-btn"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-white shadow-md shadow-cyan-500/20 transition-all"
              >
                <span>Send Direct Email</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl bg-slate-900/80 light:bg-white p-5 sm:p-6 border border-slate-800/90 light:border-slate-200 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 light:bg-sky-50 flex items-center justify-center text-sky-400 light:text-sky-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 light:text-slate-500">
                      Phone Number
                    </span>
                    <p className="text-sm font-semibold text-white light:text-slate-900">
                      {PERSONAL_INFO.phone}
                    </p>
                  </div>
                </div>
                <button
                  id="copy-phone-btn"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  title="Copy phone number"
                  className="p-2 rounded-lg bg-slate-800 light:bg-slate-100 hover:bg-slate-700 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 transition-colors"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="grid grid-cols-2 gap-4">
              <a
                id="contact-github-btn"
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-900/80 light:bg-white border border-slate-800/90 light:border-slate-200 hover:border-slate-600 text-slate-300 light:text-slate-700 hover:text-white transition-all group"
              >
                <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                <span className="text-xs font-mono font-semibold">GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                id="contact-linkedin-btn"
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-900/80 light:bg-white border border-slate-800/90 light:border-slate-200 hover:border-cyan-500/40 text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-all group"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-semibold">LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

            {/* Location Note */}
            <div className="flex items-center gap-2 p-4 rounded-xl bg-slate-950/40 light:bg-slate-50 border border-slate-800/80 light:border-slate-200 text-xs font-mono text-slate-400 light:text-slate-600">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Based in {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Right Column: Direct Mail Composer */}
          <div className="lg:col-span-7">
            <form
              id="contact-composer-form"
              onSubmit={handleSendMail}
              className="rounded-2xl bg-slate-900/80 light:bg-white p-6 sm:p-8 border border-slate-800/90 light:border-slate-200 shadow-2xl space-y-4"
            >
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800/80 light:border-slate-200">
                <MessageSquareCode className="w-4 h-4 text-cyan-400" />
                <h3 className="font-display font-bold text-base text-white light:text-slate-900">
                  Compose Email Draft
                </h3>
                <span className="ml-auto text-[11px] font-mono text-slate-500">
                  Direct Mailto Dispatch
                </span>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-600 mb-1.5">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  id="contact-form-name"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Recruiters, Tech Lead, Collaborator"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/60 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-sm text-slate-200 light:text-slate-800 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-600 mb-1.5">
                  Subject Line
                </label>
                <input
                  type="text"
                  id="contact-form-subject"
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/60 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-sm text-slate-200 light:text-slate-800 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-600 mb-1.5">
                  Message / Inquiry Details
                </label>
                <textarea
                  id="contact-form-note"
                  rows={4}
                  value={formNote}
                  onChange={(e) => setFormNote(e.target.value)}
                  placeholder="Hi Madhumitha, I'm reaching out regarding a software development / AI engineering opportunity..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/60 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-sm text-slate-200 light:text-slate-800 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="contact-form-submit-btn"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 cursor-pointer transition-all"
                >
                  <span>Launch Mail Client</span>
                  <Send className="w-4 h-4" />
                </button>
                <p className="text-[11px] font-mono text-center text-slate-500 mt-2">
                  Opens default email application directly with pre-populated parameters.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
