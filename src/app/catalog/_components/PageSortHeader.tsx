'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import './PageSortHeader.css'
import Pagination from './Pagination';

export default function PageSortHeader({count} : {count: number})  {
  const searchParams = new URLSearchParams(useSearchParams());
  const [take, setTake] = useState(searchParams.get('take') || '20');
  const [skip, setSkip] = useState(searchParams.get('skip') || '0');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (take) searchParams.set('take', take);
    else searchParams.delete('take');
    if (skip) searchParams.set('skip', skip);
    else searchParams.delete('skip');
    router.push(`${pathname}?${searchParams}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [take, skip]);


  return (
    <div className='PageSortHeader'>

          <Pagination take={Number(take)} count={count}/>
          {/* <div className='count'>
            <div className='count_title'>На странице</div>
            <select
              className='select'
              value={take}
              onChange={(e) => setTake(e.target.value)}
            >
              <option className='option' value="1">1</option>
              <option className='option' value="3">3</option>
              <option className='option' value="5">5</option>
              <option className='option' value="10">10</option>
              <option className='option' value="20">20</option>
              <option value="50"><div><input type='checkbox'>50</input></div></option>
            </select>
          </div> */}

    </div>
  )
}
