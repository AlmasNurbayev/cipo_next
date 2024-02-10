Задачи: 
- попробовать разные методы рендеринга
- изучить интерактивные компоненты (например фильтры и пагинация) внутри серверных страниц
- добиться максимального переноса рендеринга на сервер
- изучить нагрузку серверного рендеринга, размеры бандлов и трафик
- изучить спиннеры и loading-page при разном кешировании

Выполнено:
- полностью серверная страница с фильтрами - posts_server. Причем форма фильтров каким-то образом обновляет searhParams при submit, хотя такого действия нет.
- серверная страница, но внутри нее фильтры в клиентском компоненте - posts_mix. Передача данных от клиента на сервер происходит через SearchParams и router.push
- серверная страница, но внутри нее фильтры в клиентском компоненте - goods. Разница с предыдущим варианте, что используется реальный API и более сложные фильтры с массивами

Стандарты:
- дата - new Date().toLocaleString('ru-RU'),




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
