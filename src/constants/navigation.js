export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  {
    label: 'Packages',
    dropdown: [
      { label: 'Umrah Packages', path: '/umrah-packages' },
      { label: 'Customized Umrah & Hajj', path: '/customizedumrah' },
    ]
  },
  { label: 'Visa', path: '/visa' },
  { label: 'Ziyarat', path: '/ziyarat-tours' },
  { label: 'Nikkah Services', path: '/nikkah-masjids' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const FOOTER_LINKS = {
  'Packages': [
    { label: 'Umrah Packages', path: '/umrah-packages' },
    { label: 'Customized Umrah & Hajj', path: '/customizedumrah' },
    { label: 'Ziyarat Tours', path: '/ziyarat-tours' },
  ],
  'Services': [
    { label: 'Nikkah in Holy Masjids', path: '/nikkah-masjids' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]
}
