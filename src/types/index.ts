export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  designation: string;
  department: string;
  specializations: string[];
  bio: string;
  image: string;
  roles?: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  department: 'rehabilitation' | 'dental';
  icon?: string;
  featured?: boolean;
  size?: 'large' | 'medium' | 'small';
}

export interface Department {
  id: string;
  name: string;
  tagline: string;
  description: string;
  doctor: Doctor;
  services: Service[];
}

export interface ClinicInfo {
  name: string;
  fullName: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  phone: string;
  altPhone?: string;
  dentalPhone?: string;
  whatsapp: string;
  email?: string;
  timing: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
  facebook: string;
  website: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  department?: 'rehabilitation' | 'dental';
  date?: string;
}

export interface TreatmentResult {
  id: string;
  title: string;
  category: string;
  department: 'rehabilitation' | 'dental';
  description: string;
  duration?: string;
  beforeImage?: string;
  afterImage?: string;
}
