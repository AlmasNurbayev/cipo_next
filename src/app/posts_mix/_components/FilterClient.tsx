'use client';

import Button from '@/app/_components/Button';
import Input from '@/app/_components/Input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

export default function FilterClient() {
  //const searchParams = useSearchParams();
  const searchParams = new URLSearchParams(useSearchParams());
  const [q, setQ] = useState(searchParams.get('q') || '');
  const [limit, setLimit] = useState(searchParams.get('limit') || '10');
  const router = useRouter();
  const pathname = usePathname();

  function handleQ(event: React.ChangeEvent<HTMLInputElement>) {
    //event.preventDefault();
    setQ(event.target.value);
    searchParams.set('q', event.target.value);
    router.push(`${pathname}?${searchParams.toString()}`);
  }

  function handleLimitString(
    event: React.MouseEvent<HTMLButtonElement>,
    newLimit: string
  ) {
    //event.preventDefault();
    setLimit(newLimit);
    searchParams.set('limit', newLimit);
    router.push(`${pathname}?${searchParams.toString()}`);
  }

  return (
    <div>
      {/* <form> */}

      <Input
        onTyped={handleQ}
        name="q"
        value={q}
        type="search"
        width={150}
        height={30}
        padding={5}
        placeholder="Search..."
      ></Input>

      <fieldset>
        <Button
          active={limit === '1'}
          width={40}
          height={20}
          margin={5}
          onPress={(e) => handleLimitString(e, '1')}
        >
          1
        </Button>
        <Button
          active={limit === '3'}
          width={40}
          height={20}
          margin={5}
          onPress={(e) => handleLimitString(e, '3')}
        >
          3
        </Button>
        <Button
          active={limit === '5'}
          width={40}
          height={20}
          margin={5}
          onPress={(e) => handleLimitString(e, '5')}
        >
          5
        </Button>
        <Button
          active={limit === '10'}
          width={40}
          height={20}
          margin={5}
          onPress={(e) => handleLimitString(e, '10')}
        >
          10
        </Button>
      </fieldset>

      {/* <input
          type="text"
          name="limit"
          value={limit}
          //defaultValue={searchParams.limit}
        /> */}
      <button className="button" type="submit">
        Применить
      </button>
      {/* </form> */}
    </div>
  );
}
