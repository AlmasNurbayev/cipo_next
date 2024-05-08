export const config = {
  backendUrl: process.env.backendUrl,
  NEXT_PUBLIC_backendUrl: process.env.NEXT_PUBLIC_backendUrl,
  frontUrl: process.env.frontUrl,
  NEXT_PUBLIC_frontUrl: process.env.NEXT_PUBLIC_frontUrl,
  staticPath: process.env.frontUrl + '/static',
  staticPathPublic: process.env.NEXT_PUBLIC_frontUrl + '/static',
  
  seo: {
    no_index_page: { robots: { index: false, follow: false} },
    site_name: 'CIPO.kz - правильная детская обувь',
  },
  defaultStyle: {
    borderColor: '#B7B7B7',
  }

}