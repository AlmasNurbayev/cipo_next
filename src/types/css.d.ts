// Next типизирует только *.module.css (node_modules/next/types/global.d.ts),
// а обычные глобальные CSS-импорты вида `import './FilterClient.css'` остаются
// без объявления - TS-сервер ругается на них ts(2307).
declare module '*.css';
