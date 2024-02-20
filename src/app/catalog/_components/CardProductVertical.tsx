import { IproductOnce } from '@/types/product_list';
import React from 'react';
import Image from 'next/image';
import { config } from '@/config/constants';
import './CardProductVertical.css';

export default function CardProductVertical({ item }: { item: IproductOnce }) {
  return (
    <div className="CardProductVertical">
      <div className="top">
        <Image
          src={config.backendUrl + '/' + item.image_active_path}
          alt={item.name}
          fill
        />
      </div>
      <div className="card-down">
        {item.name}
        <div className="card-size">
          {item.qnt_price.map((qnt) => (
            <div className="card-sizes" key={item.product_id + qnt.size}>
              {qnt.size}
            </div>
          ))}
        </div>
        <div className="price">
        {item.sum.toLocaleString('ru-RU') + ' ₸'}
        </div>
      </div>
    </div>
  );
}
