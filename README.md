# svgvgkbr
Союз ветеранов группы войск в Германии.

## Локальный запуск
```bash
npm install
npm run dev
```

## Сборка
```bash
npm run build
```

## Публикация
В репозиторий добавлен GitHub Actions workflow `.github/workflows/deploy.yml`, который публикует `dist/` на GitHub Pages при пуше в `main` или `master`.

После подключения Pages в настройках репозитория сайт будет доступен по адресу:
`https://<github-username>.github.io/<repository-name>/`
