'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

export default function FilterClient() {
  //const searchParams = useSearchParams();
  const searchParams = new URLSearchParams(useSearchParams()); 
  const [q, setQ] = useState(searchParams.get('q') || '');
  const [limit, setLimit] = useState(searchParams.get('limit') || '10');
  const router = useRouter()  
  const pathname = usePathname()
  


  function handleQ(event: React.ChangeEvent<HTMLInputElement>) {
    //event.preventDefault();
    setQ(event.target.value);
    searchParams.set('q', q)
    router.push(`${pathname}?${searchParams.toString()}`)
  }

  function handleLimitString(
    event: React.MouseEvent<HTMLButtonElement>,
    limit: string
  ) {
    //event.preventDefault();
    setLimit(limit);
    searchParams.set('limit', limit)
    router.push(`${pathname}?${searchParams.toString()}`)
  }

  return (
    <div>
      {/* <form> */}
        <fieldset>
          <input
            className="input"
            type="text"
            name="q"
            value={q}
            onChange={(e) => handleQ(e)}
          />
          <button className="button" onClick={() => setQ('')}>
            X
          </button>
        </fieldset>

        <fieldset>
          <button className="button" onClick={(e) => handleLimitString(e, '1')}>
            1
          </button>
          <button className="button" onClick={(e) => handleLimitString(e, '3')}>
            3
          </button>
          <button className="button" onClick={(e) => handleLimitString(e, '5')}>
            5
          </button>
          <button className="button" onClick={(e) => handleLimitString(e, '10')}>
            10
          </button>

        </fieldset>

        {/* <input
          type="text"
          name="limit"
          value={limit}
          //defaultValue={searchParams.limit}
        /> */}
        <button className="button" type="submit">Применить</button>
      {/* </form> */}
    </div>
  );
}
