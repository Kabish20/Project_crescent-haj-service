export const CONTACT_INFO = {
  phone: '+91 8110082222',
  phoneDisplay: '+91 8110082222',
  phoneTel: 'tel:+918110082222',
  phoneRaw: '918110082222',
  email: 'crescenthajservice@gmail.com',
  emailMailto: 'mailto:crescenthajservice@gmail.com',
  whatsappUrl: 'https://wa.me/918110082222?text=Assalamu%20Alaikum%2C%20I%20would%20like%20help%20choosing%20a%20Hajj%20or%20Umrah%20package.',
  youtubeUrl: 'https://www.youtube.com/@CRESCENTHAJSERVICE/shorts',
  googleReviewsUrl: 'https://www.google.com/maps/place/Crescent+Haj+Service/reviews',
  leadZohoFormUrl: 'https://forms.zohopublic.in/GoimomiHolidays/form/WebsiteLead/formperma/EE3MFyvZhURPIlQK32BZ5cwdxx6DvziEjg70HxXJg5k?zf_rszfm=1',
  offices: [
    {
      icon: '📍',
      label: 'Head Office',
      value: '5, Crescent Park Apartment, Hazrath Sulaiman Street, Kaja Nagar, Trichy – 620020',
      city: 'Trichy',
      state: 'Tamil Nadu',
      country: 'India',
      href: null
    },
    {
      icon: '📍',
      label: 'Regional Office',
      value: '#5-3-21/5/3, Plot No: 2, Behind Ali\'s Mart, Z&Z Colony, Raichur Road, Mahabubnagar – 509 001, Telangana',
      city: 'Mahabubnagar',
      state: 'Telangana',
      country: 'India',
      href: null
    },
    {
      icon: '🇸🇦',
      label: 'Operational Office',
      value: '8807, Prince Majid Street, 2104, Al Aziziyah Dist., 23342, Jeddah, Kingdom of Saudi Arabia',
      city: 'Jeddah',
      state: 'Makkah Province',
      country: 'Saudi Arabia',
      href: null
    }
  ],
  workingHours: 'Mon–Sat: 9am – 7pm'
}

/**
 * Safely generate sanitized, encoded WhatsApp message URLs
 * @param {string} message - Message payload to encode
 * @returns {string} Sanitized WhatsApp link
 */
export function createWhatsAppUrl(message = '') {
  const clean = String(message || '').trim()
  return `https://wa.me/${CONTACT_INFO.phoneRaw}${clean ? `?text=${encodeURIComponent(clean)}` : ''}`
}
