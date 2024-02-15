'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { config } from '@/config/constants';
import { IimageRegistry } from '@/types/image_registry';
import './ImageSlider.css';

export default function ImageSlider({
  data,
  thumbsWidth,
  thumbsHeight,
  mainWidth,
  mainHeight,
}: {
  data: IimageRegistry[];
  thumbsWidth: number;
  thumbsHeight: number;
  mainWidth: number;
  mainHeight: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (data.length === 0) return;

  function nextPicture() {
    let newIndex;
    if (currentIndex + 1 > data.length - 1) {
      newIndex = 0;
    } else {
      newIndex = currentIndex + 1;
    }
    setCurrentIndex(newIndex);
  }

  function previousPicture() {
    let newIndex;
    if (currentIndex - 1 < 0) {
      newIndex = data.length - 1;
    } else {
      newIndex = currentIndex - 1;
    }
    setCurrentIndex(newIndex);
  }

  // if (!mainFullName) {
  //   mainFullName = data[0].full_name;
  // }

  return (
    <div
      className="wrapper"
      // style={{
      //   width: mainWidth + thumbsWidth + 20,
      //   height: mainHeight + thumbsHeight + 20,
      // }}
    >
      <div className="main_view" >
        {/* <div
          className="left_button"
          style={currentIndex === 0 ? { display: 'none' } : {}}
          onClick={previousPicture}
        />
        <div
          className="right_button"
          style={currentIndex === data.length - 1 ? { display: 'none' } : {}}
          onClick={nextPicture}
        /> */}
        <Image
          src={config.NEXT_PUBLIC_backendUrl + '/' + data[currentIndex].full_name}
          alt={'item.name'}
          fill
          className='image'
        />
      </div>

      <div className="thumbs_wrapper">
        {data.map((item, index) => (
          <Image
            key={item.full_name}
            src={config.NEXT_PUBLIC_backendUrl + '/' + item.full_name}
            alt={'item.name'}
            width={thumbsWidth}
            height={thumbsHeight}
            className="thumbs_item"
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
