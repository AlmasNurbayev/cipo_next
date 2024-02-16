import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import './Pagination.css';

export default function Pagination({
  take = 10,
  count,
}: {
  take?: number;
  count: number;
}) {
  const searchParams = new URLSearchParams(useSearchParams());
  const current: number = Number(searchParams.get('page')) || 1;
  const router = useRouter();
  const pathname = usePathname();

  const pagesCount = Math.ceil(count / take);
  const pagesNumbers = Array.from({ length: pagesCount }, (_, i) => i + 1);

  const handleClick = (pageNumber: number) => {
    searchParams.set('page', String(pageNumber));
    searchParams.set('skip', String((pageNumber - 1) * take));

    router.push(`${pathname}?${searchParams}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
      }}
    >
      <button
        disabled={current === 1 ? true : false}
        onClick={() => (current > 1 ? handleClick(current - 1) : '')}
        className='button-page'
      >
        {'<'}
      </button>

      <div>
        {pagesNumbers.map((page) =>
          page <= 2 ||
          Math.abs(current - page) < 2 ||
          Math.abs(pagesNumbers.length - page) < 2 ? (
            <button className={current === page ? 'button-page button-page-active' : 'button-page'}
              key={page.toString()}
              onClick={() => handleClick(page)}
            >
              {page}
            </button>
          ) : Math.abs(current - page) === 3 ? (
            <button key={page} disabled className='button-page'>
              ...
            </button>
          ) : (
            ''
          ),
        )}
      </div>

      <button
        disabled={current === pagesCount ? true : false}
        onClick={() => (current < 1 ? handleClick(current + 1) : '')}
        className='button-page'
      >
        {'>'}
      </button>
    </div>
  );
}
