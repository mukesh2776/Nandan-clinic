'use client';

import React, { useState } from 'react';
import Button from '@/components/shared/Button';
import { generateWhatsAppUrl, generateAppointmentMessage } from '@/lib/utils';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: 'Physical Medicine & Rehabilitation',
    doctor: 'Dr. D. Balamurali',
    date: '',
    time: '3:00 PM',
    message: ''
  });

  const timeSlots = [
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'
  ];

  const handleDeptChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dept = e.target.value;
    setFormData({
      ...formData,
      department: dept,
      doctor: dept === 'Dental Care' ? 'Dr. G. Yasothai' : 'Dr. D. Balamurali'
    });
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
    
    // Clinic primary WhatsApp number
    const clinicPhone = '7395811646';
    const url = generateWhatsAppUrl(clinicPhone, message);
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
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
          <label htmlFor="department" className="text-sm font-medium text-text-primary mb-1.5 block">
            Department *
          </label>
          <select
            id="department"
            name="department"
            required
            value={formData.department}
            onChange={handleDeptChange}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text-primary focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 outline-none transition"
          >
            <option value="Physical Medicine & Rehabilitation">Physical Medicine & Rehabilitation</option>
            <option value="Dental Care">Dental Care</option>
          </select>
        </div>

        <div className="mb-5">
          <label htmlFor="doctor" className="text-sm font-medium text-text-primary mb-1.5 block">
            Preferred Doctor
          </label>
          <select
            id="doctor"
            name="doctor"
            required
            value={formData.doctor}
            onChange={handleChange}
            disabled // Auto-selected based on department for now
            className="w-full rounded-xl border border-border bg-gray-50 px-4 py-3 text-text-secondary outline-none"
          >
            <option value="Dr. D. Balamurali">Dr. D. Balamurali (Rehab)</option>
            <option value="Dr. G. Yasothai">Dr. G. Yasothai (Dental)</option>
          </select>
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
              Preferred Time *
            </label>
            <select
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text-primary focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 outline-none transition"
            >
              {timeSlots.map(slot => (
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
          Submit Appointment Request
        </Button>

        <p className="text-xs text-text-secondary text-center mt-4 leading-relaxed">
          Appointment requests are subject to clinic confirmation. Our team will respond via WhatsApp to confirm your booking.
        </p>
      </form>
    </div>
  );
}
