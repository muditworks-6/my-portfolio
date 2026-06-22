import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '../components/BrandIcons';
import { EMAILJS_CONFIG, CONTACT_EMAIL, SOCIAL_LINKS } from '../data';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const ICON_MAP: Record<string, React.ReactNode> = {
  github: <GithubIcon size={20} />,
  linkedin: <LinkedinIcon size={20} />,
  mail: <Mail size={20} />,
  twitter: <TwitterXIcon size={20} />,
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email.';
  }
  if (!form.message.trim()) errors.message = 'Message is required.';
  else if (form.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.';
  return errors;
}

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: EASE },
  }),
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    try {
      // TODO: Replace EMAILJS_CONFIG values in src/data/index.ts with your real credentials
      // Sign up at https://emailjs.com, create a service, template, and copy your public key
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: CONTACT_EMAIL,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" aria-label="Contact">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">
            Let's <span className="gradient-text-cyan">Connect</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl text-base mb-8">
            Whether you have a project idea, an opportunity, or just want to say hi —
            my inbox is always open.
          </p>
        </motion.div>

        <div className="glow-divider mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ── Contact form ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="flex flex-col gap-5"
            >
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-400 flex items-center gap-1" role="alert">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-400 flex items-center gap-1" role="alert">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me what's on your mind..."
                  className={`form-input resize-none ${errors.message ? 'error' : ''}`}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-400 flex items-center gap-1" role="alert">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                aria-live="polite"
              >
                {status === 'loading' ? (
                  <>
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-cyan border-t-transparent rounded-full" aria-hidden="true" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {/* Error state */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 p-3 rounded-lg text-sm text-red-400 border border-red-500/30"
                  style={{ background: 'rgba(239,68,68,0.08)' }}
                  role="alert"
                >
                  <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                  <span>
                    Oops! Something went wrong. Please check your EmailJS config or email me directly at{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan underline">
                      {CONTACT_EMAIL}
                    </a>
                  </span>
                </motion.div>
              )}

              {/* Success state */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 p-3 rounded-lg text-sm text-emerald-400 border border-emerald-500/30"
                  style={{ background: 'rgba(16,185,129,0.08)' }}
                  role="status"
                >
                  <CheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                  <span>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* ── Direct contact + social ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="flex flex-col gap-8"
          >
            {/* Card */}
            <div className="card-glass p-6">
              <h3 className="font-semibold text-base text-[var(--text-primary)] mb-2">
                Prefer a direct line?
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                You can also reach me directly through any of the platforms below.
                I'm most responsive on LinkedIn and email.
              </p>

              {/* Social links */}
              <div className="space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.icon !== 'mail' ? '_blank' : undefined}
                    rel={link.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 p-3 rounded-xl border border-[var(--bg-border)] text-[var(--text-secondary)] hover:text-cyan hover:border-[rgba(0,240,255,0.3)] transition-all duration-200 group no-underline"
                    style={{ background: 'var(--bg-elevated)' }}
                    whileHover={{ x: 4 }}
                    aria-label={`Contact via ${link.label}`}
                  >
                    <span className="text-[var(--text-muted)] group-hover:text-cyan transition-colors duration-200">
                      {ICON_MAP[link.icon]}
                    </span>
                    <div>
                      <div className="text-sm font-medium text-[var(--text-primary)] group-hover:text-cyan transition-colors duration-200">
                        {link.label}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] font-mono">
                        {link.href.replace('https://', '').replace('mailto:', '')}
                      </div>
                    </div>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-cyan text-sm">→</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div className="flex items-start gap-3 p-4 rounded-xl border border-[rgba(0,240,255,0.15)]" style={{ background: 'rgba(0,240,255,0.04)' }}>
              <span className="text-lg mt-0.5" aria-hidden="true">✅</span>
              <div>
                <div className="text-sm font-semibold text-cyan mb-0.5">Currently Available</div>
                {/* TODO: Update this status as needed */}
                <div className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Open to internships, part-time roles, and interesting freelance projects.
                  Response time: usually within 24 hours.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
