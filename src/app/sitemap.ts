import { cipoListGoods, cipoListNews } from '@/api/cipo.api';
import { config } from '@/config/constants';
import { MetadataRoute } from 'next';

type SitemapT = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority?: number;
}>;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let arrayUrl: SitemapT = [];
  arrayUrl.push(generateUrl('', 1));
  arrayUrl.push(generateUrl('/catalog', 0.8));
  arrayUrl.push(generateUrl('/faq', 0.4));

  const resCatalog = (await cipoListGoods()).data;
  if (resCatalog) {
    const items = resCatalog.data;
    items.map((item) =>
      arrayUrl.push(generateUrl('/catalog/' + item.product_id, 0.5)),
    );
  }

  const resNews = (await cipoListNews()).data;
  if (resNews) {
    resNews.map((item) =>
      arrayUrl.push(generateUrl('/news/' + item.id, 0.5)),
    );
  }

  function generateUrl(url: string, priority: number) {
    return {
      url: config.frontUrl + url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as SitemapT[0]['changeFrequency'],
      priority,
    };
  }

  return arrayUrl;
}
