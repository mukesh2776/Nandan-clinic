export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function generateWhatsAppUrl(
  phone: string,
  message: string
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/91${phone}?text=${encodedMessage}`;
}

export function generateAppointmentMessage(data: {
  name: string;
  phone: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  message: string;
}): string {
  return `Hello, I would like to book an appointment.\n\nName: ${data.name}\nPhone: ${data.phone}\nDepartment: ${data.department}\nPreferred Doctor: ${data.doctor}\nPreferred Date: ${data.date}\nPreferred Time: ${data.time}\n${data.message ? `Message: ${data.message}` : ''}`;
}

export function formatPhoneForDisplay(phone: string): string {
  if (phone.length === 10) {
    return `${phone.slice(0, 5)} ${phone.slice(5)}`;
  }
  return phone;
}
