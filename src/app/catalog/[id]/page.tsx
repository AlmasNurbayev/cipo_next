import { cipoGetProduct } from '@/api/cipo.api';
import ImageSlider from '@/app/_components/ImageSlider/ImageSlider';
import { Metadata } from 'next';
import 'server-only';

type Props = {
  params: { id: string };
  // searchParams: { [key: string]: string | string[] | undefined }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = (await cipoGetProduct(params.id)).data;
  return {
    title: product.name,
  };
}

export default async function page({ params }: { params: { id: string } }) {
  const product = (await cipoGetProduct(params.id)).data;

  return (
    <main className="main">
      <div>id : {params.id}</div>
      <h1>name: {product.name}</h1>
      <ImageSlider
        data={product.image_registry}
        thumbsWidth={70}
        thumbsHeight={70}
        mainWidth={500}
        mainHeight={500}
      />
      {/* <Image
        src={config.backendUrl + '/' + news.image_path}
        width={300}
        height={300}
        alt={news.title}
      /> */}
    </main>
  );
}
