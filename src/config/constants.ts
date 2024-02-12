export const config = {
  backendUrl: process.env.backendUrl,
  NEXT_PUBLIC_backendUrl: process.env.NEXT_PUBLIC_backendUrl,
  seo: {
    no_index_page: { robots: { index: false, follow: false} },
    site_name: 'CIPO.kz - правильная детская обувь',
  }
}