'use client';

import React, { useState } from 'react';
import Button from '@/components/shared/Button';
import { generateWhatsAppUrl, generateAppointmentMessage } from '@/lib/utils';
import { Clock, Info } from 'lucide-react';

type DepartmentType = 'rehab' | 'dental' | 'artificial_limb';

const DEPARTMENT_CONFIG: Record<DepartmentType, {
  label: string;
  doctor: string;
  timingBadge: string;
  appointmentNote?: string;
  slots: string[];
}> = {
  dental: {
    label: 'Dental Care (Dr. Bala Dental Clinic)',
    doctor: 'Dr. G. Yasothai, BDS, MBA',
    timingBadge: 'Morning: 9:00 AM – 1:30 PM | Evening: 5:00 PM – 8:30 PM',
    slots: [
      '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM',
      '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
    ],
  },
  rehab: {
    label: 'Physical Medicine & Rehabilitation',
    doctor: 'Dr. D. Balamurali, MBBS, D.PMR, FIPM',
    timingBadge: '3:00 PM – 9:00 PM (Strictly on appointment basis)',
    appointmentNote: 'Notice: Dr. Balamurali consultations are strictly on prior appointment basis.',
    slots: [
      '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
      '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
      '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'
    ],
  },
  artificial_limb: {
    label: 'In-House Artificial Limb Centre',
    doctor: 'Artificial Limb & Prosthetics Specialist',
    timingBadge: '10:00 AM – 6:00 PM (Custom Fabrication & Fitting)',
    slots: [
      '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
      '12:00 PM', '12:30 PM', '1:00 PM', '2:00 PM',
      '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
      '4:30 PM', '5:00 PM', '5:30 PM'
    ],
  },
};

export default function AppointmentForm() {
  const [deptKey, setDeptKey] = useState<DepartmentType>('dental');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: DEPARTMENT_CONFIG.dental.label,
    doctor: DEPARTMENT_CONFIG.dental.doctor,
    date: '',
    time: DEPARTMENT_CONFIG.dental.slots[0],
    message: ''
  });

  const handleDeptChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const key = e.target.value as DepartmentType;
    setDeptKey(key);
    const config = DEPARTMENT_CONFIG[key];
    setFormData(prev => ({
      ...prev,
      department: config.label,
      doctor: config.doctor,
      time: config.slots[0],
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = generateAppointmentMessage({
      name: formData.name,
      phone: formData.phone,
      department: formData.department,
      doctor: formData.doctor,
      date: formData.date,
      time: formData.time,
      message: formData.message
    });
    
    // Direct WhatsApp phone depending on department (dental goes to dental phone or main)
    const clinicPhone = deptKey === 'dental' ? '9787818833' : '7395811646';
    const url = generateWhatsAppUrl(clinicPhone, message);
    window.open(url, '_blank');
  };

  const activeConfig = DEPARTMENT_CONFIG[deptKey];

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/60">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="name" className="text-sm font-medium text-text-primary mb-1.5 block">
            Patient Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text-primary focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 outline-none transition"
            placeholder="Enter patient full name"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="phone" className="text-sm font-medium text-text-primary mb-1.5 block">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="[0-9]{10}"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text-primary focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 outline-none transition"
            placeholder="10-digit mobile number"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="departmentSelect" className="text-sm font-medium text-text-primary mb-1.5 block">
            Department / Service *
          </label>
          <select
            id="departmentSelect"
            name="departmentSelect"
            required
            value={deptKey}
            onChange={handleDeptChange}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text-primary focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 outline-none transition font-medium"
          >
            <option value="dental">Dental Care — Dr. G. Yasothai, BDS, MBA</option>
            <option value="rehab">Physical Medicine &amp; Rehabilitation — Dr. D. Balamurali</option>
            <option value="artificial_limb">In-House Artificial Limb Centre (Prosthetics &amp; Orthotics)</option>
          </select>
        </div>

        {/* Dynamic Timing Callout Banner */}
        <div className="mb-5 p-3.5 rounded-xl bg-mint-light/70 border border-teal-primary/20 flex items-start gap-2.5">
          <Clock className="w-4 h-4 text-teal-primary shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold text-teal-primary uppercase tracking-wider block">Timings for Selected Service:</span>
            <span className="text-text-primary font-semibold text-xs mt-0.5 block">{activeConfig.timingBadge}</span>
            {activeConfig.appointmentNote && (
              <span className="text-accent font-semibold text-[11px] mt-1 block flex items-center gap-1">
                <Info className="w-3 h-3 shrink-0" />
                {activeConfig.appointmentNote}
              </span>
            )}
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="doctor" className="text-sm font-medium text-text-primary mb-1.5 block">
            Assigned Specialist / Department
          </label>
          <input
            type="text"
            id="doctor"
            name="doctor"
            readOnly
            value={activeConfig.doctor}
            className="w-full rounded-xl border border-border bg-gray-50 px-4 py-3 text-text-secondary outline-none text-sm font-medium"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="date" className="text-sm font-medium text-text-primary mb-1.5 block">
              Preferred Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              min={new Date().toISOString().split('T')[0]}
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text-primary focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="time" className="text-sm font-medium text-text-primary mb-1.5 block">
              Preferred Time Slot *
            </label>
            <select
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text-primary focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 outline-none transition"
            >
              {activeConfig.slots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="message" className="text-sm font-medium text-text-primary mb-1.5 block">
            Additional Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text-primary focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 outline-none transition min-h-[100px]"
            placeholder="Briefly describe your symptoms or reason for visit..."
          />
        </div>

        <Button
          type="submit"
          variant="accent"
          className="w-full py-4 text-base font-semibold"
        >
          Submit Appointment Request via WhatsApp
        </Button>

        <p className="text-xs text-text-secondary text-center mt-4 leading-relaxed">
          Appointment requests are subject to confirmation. Dr. Balamurali consultations are strictly on prior appointment basis. Our team will verify and confirm your slot promptly.
        </p>
      </form>
    </div>
  );
}
