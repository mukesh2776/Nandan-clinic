import { Doctor } from '@/types';

export const doctors: Doctor[] = [
  {
    id: 'dr-balamurali',
    name: 'Dr. D. Balamurali',
    qualifications: 'MBBS, D.PMR, FIPM',
    designation: 'Consultant Physiatrist & Rehabilitation Specialist',
    department: 'Physical Medicine & Rehabilitation',
    specializations: [
      'Rehabilitation of CP Child',
      'CTEV Management',
      'Stroke Rehabilitation (Hemiplegia)',
      'Traumatic Brain Injury Rehabilitation',
      'Spinal Cord Injury (Paraplegia / Quadriplegia)',
      'Amputee Rehabilitation',
      'Prosthetic & Orthotic Management',
      'Diabetic Foot Care',
      'Pain Management',
      'Robotic Gait Training',
    ],
    bio: 'First Physiatrist in and from Thanjavur. Completed MBBS at Thanjavur Medical College and post-graduate D.PMR at Madras Medical College. Holds a Fellowship in Pain Management (FIPM) from Delhi Pain Management Centre. Specialist in comprehensive rehabilitation including stroke, spinal cord injury, traumatic brain injury, cerebral palsy, and amputee care. Also serves as a General Physician, Pain Physician, Family Physician, LIC Medical Examiner, and Government Senior Civil Surgeon at the Department of Physical Medicine and Rehabilitation, Thanjavur Medical College & Hospital.',
    image: '/images/doctors/dr-balamurali.jpeg',
    roles: [
      'District Secretary – Service Doctors & Post Graduates Association, Thanjavur',
      'Joint Secretary – Thanjavur Medical College Alumni Association',
      'Joint Secretary – TN Chapter, IAPMR',
      'South Zone EC Member – Indian Association of Physical Medicine & Rehabilitation',
    ],
  },
  {
    id: 'dr-yasothai',
    name: 'Dr. G. Yasothai',
    qualifications: 'BDS, MBA',
    designation: 'Dental Surgeon',
    department: 'Dr. Bala Dental Clinic',
    specializations: [
      'Orthodontics (Braces)',
      'Dental Implants',
      'Teeth Whitening',
      'General Dental Procedures',
    ],
    bio: 'Dr. G. Yasothai is an experienced Dental Surgeon at Dr. Bala Dental Clinic, providing comprehensive dental care including orthodontic treatments, dental implants, teeth whitening, and general dental procedures. With a BDS degree and an MBA, she combines clinical expertise with a patient-centred approach to dental health.',
    image: '/images/doctors/dr-yasothai.jpeg',
  },
];
