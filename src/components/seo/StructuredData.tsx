export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MedicalClinic', 'MedicalOrganization', 'LocalBusiness'],
        '@id': 'https://www.nandanrehab.in/#clinic',
        name: 'NandaN Robotic Rehabilitation Centre & Dr. Bala Dental Clinic',
        alternateName: 'NandaN Robotic Rehabilitation Centre',
        description: 'Specialist care for pain management, physical rehabilitation, and dental health in Thanjavur. Robotic gait training, artificial limb centre, physiotherapy, dental implants, and more.',
        url: 'https://www.nandanrehab.in',
        telephone: '+917395811646',
        image: 'https://www.nandanrehab.in/images/logo.jpg',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '27, Vallalar Nagar 3rd Street Corner, Manojipatti Road',
          addressLocality: 'Thanjavur',
          addressRegion: 'Tamil Nadu',
          postalCode: '613004',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 10.7867,
          longitude: 79.1378,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '15:00',
          closes: '21:00',
        },
        department: [
          {
            '@type': 'MedicalClinic',
            name: 'Department of Physical Medicine & Rehabilitation',
            description: 'Advanced rehabilitation services including robotic gait training, artificial limb centre, pain management, and comprehensive physiotherapy.',
            medicalSpecialty: 'PhysicalMedicine',
          },
          {
            '@type': 'Dentist',
            name: 'Dr. Bala Dental Clinic',
            description: 'Comprehensive dental care including orthodontics, dental implants, teeth whitening, and general dental procedures.',
            medicalSpecialty: 'Dentistry',
            telephone: '+919787818833',
          },
        ],
        sameAs: ['https://www.facebook.com/share/19CBxXCYto/'],
        hasMap: 'https://maps.app.goo.gl/cBXrAcy7vLk93ms97?g_st=aw',
      },
      {
        '@type': 'Physician',
        '@id': 'https://www.nandanrehab.in/#dr-balamurali',
        name: 'Dr. D. Balamurali',
        jobTitle: 'Consultant Physiatrist & Rehabilitation Specialist',
        medicalSpecialty: 'PhysicalMedicine',
        description: 'First Physiatrist in and from Thanjavur. MBBS, D.PMR, FIPM. Specialist in comprehensive rehabilitation.',
        image: 'https://www.nandanrehab.in/images/doctors/dr-balamurali.jpeg',
        worksFor: { '@id': 'https://www.nandanrehab.in/#clinic' },
      },
      {
        '@type': 'Dentist',
        '@id': 'https://www.nandanrehab.in/#dr-yasothai',
        name: 'Dr. G. Yasothai',
        jobTitle: 'Dental Surgeon',
        medicalSpecialty: 'Dentistry',
        description: 'Experienced Dental Surgeon providing comprehensive dental care.',
        image: 'https://www.nandanrehab.in/images/doctors/dr-yasothai.jpeg',
        worksFor: { '@id': 'https://www.nandanrehab.in/#clinic' },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
