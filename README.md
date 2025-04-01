# Книга о тебе — Тестовое задание
Фронтенд-часть интерфейса для выбора формата книги согласно макету Figma.
### 🖼️ Скриншоты

<table>
  <tr>
    <th>Мобильная версия</th>
    <th>Десктоп (EN)</th>
    <th>Десктоп (RU)</th>
  </tr>
  <tr>
    <td>
      <a href="./src/images/screenshots/Mobile.png" target="_blank">
        <img src="./src/images/screenshots/Mobile.png" width="200"/>
      </a>
    </td>
    <td>
      <a href="./src/images/screenshots/Main Screen English.png" target="_blank">
        <img src="./src/images/screenshots/Main Screen English.png" width="200"/>
      </a>
    </td>
    <td>
      <a href="./src/images/screenshots/Main Screen Russian.png" target="_blank">
        <img src="./src/images/screenshots/Main Screen Russian.png" width="200"/>
      </a>
    </td>
  </tr>
  <tr>
    <th colspan="3">Модальные окна</th>
  </tr>
  <tr>
    <td>
      <a href="./src/images/screenshots/Modal English.png" target="_blank">
        <img src="./src/images/screenshots/Modal English.png" width="200"/>
      </a>
    </td>
    <td>
      <a href="./src/images/screenshots/Modal Russian.png" target="_blank">
        <img src="./src/images/screenshots/Modal Russian.png" width="200"/>
      </a>
    </td>
    <td></td>
  </tr>
</table>

## Стек
- React + TypeScript
- Redux Toolkit + Redux-Saga
- Parcel
- Sass (SCSS)
- i18next

### Дополнительные библиотеки
- Classnames для удобной работы со стилями с условиями.
- Prettier
- Stylelint по принципам Recess

## Запуск проекта

Перед запуском посмотрите, чтобы была установлена **Node.js** v20+

**Должно хватить для запуска:**
```bash
git clone https://github.com/yourusername/knigaotebe.ru.git
cd knigaotebe.ru
npm install
npm run dev:mac // для mac/unix
npm run dev:win // для windows
```
**Дополнительные шаги для Windows**

1. Установите пожалуйста [Visual C++ Build Tools](https://visualstudio.microsoft.com/ru/visual-cpp-build-tools/). 
2. **При установке выберите опцию "Desktop development with C++"**
3. Еще раз проверьте, что у вас стоит Node.js 20 
4. Запускайте по скрипту ```bash npm run dev:win```

Если при первом запуске открывается пустой браузер — обновите страницу вручную. 
Но я там поставил delay, так что должно сработать и так.

---

## Функциональность
- Адаптивный хедер (десктоп / малые дисплеи)
- Прогресс-бар (шаги)
- Отображение форматов книг (3 карточки: Эконом, Стандарт, Премиум)
- Выбор одной карточки, хранение в Redux
- Открытие модалки с описанием формата (нажатие на i)
- Закрытие модалки по клику вне ее
- Данные карточек и модальных окон загружаются через Redux-Saga фейковым запросом

## Состояние
Реализация без бекенда.
Все данные симулируются через `redux-saga` (например, через `yield delay(...)`).

##  Связь
[Телеграм](https://t.me/ignatenkodenis) 

---
🧡




