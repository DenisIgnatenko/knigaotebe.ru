import { delay, put, takeLatest } from "redux-saga/effects";
import { BookFormat } from "./types";
import { fetchFormatsFailure, fetchFormatsRequest, fetchFormatsSuccess } from "./bookConfigSlice";

function* fetchFormatWorker() {
  try {
    yield delay(1000);
    const fakeResponse: BookFormat[] = [
      {
        id: "economy",
        title: "Эконом",
        shortDescription:
          "Базовый вариант исполнения книги \n" + "в качестве уникального подарка. ",
        image: "/images/books/economy.png",
        details: {
          description:
            "Уникальный запоминающийся подарок \n" +
            "на всю жизнь. Самый большой формат печати и премиальное исполнение. \n" +
            "\n" +
            "Странички из плотной матовой фотобумаги приятно перелистывать, а сама " +
            "книга раскрывается на 180 градусов образуя плоскую поверхность на месте корешка.",
          cover: {
            type: "Твердый переплет",
            material: "Мелованная бумага с ламинацией, кашированная на переплетный картон",
            print: "Цифровой офсет",
            binding: "Проклейка термоклеем по корешку",
          },
          pages: {
            material: "Мелованная бумага 170гр/м2",
            print: "–",
          },
        },
        size: "20✕20 см",
        price: 3884,
        isBestSeller: false,
      },
      {
        id: "standard",
        title: "Стандарт",
        shortDescription:
          "Самый популярный формат книги сочетает в себе крупный формат и высокое качество.",
        image: "/images/books/standard.png",
        details: {
          description:
            "Уникальный запоминающийся подарок \n" +
            "на всю жизнь. Самый большой формат печати и премиальное исполнение. \n" +
            "\n" +
            "Странички из плотной матовой фотобумаги приятно перелистывать, а сама " +
            "книга раскрывается на 180 градусов образуя плоскую поверхность на месте корешка.",
          cover: {
            type: "Твердый переплет",
            material: "Мелованная бумага с ламинацией",
            print: "Цифровой офсет",
            binding: "Проклейка термоклеем по корешку",
          },
          pages: {
            material: "Мелованная бумага 180гр/м2",
            print: "–",
          },
        },
        size: "25✕25 см",
        price: 5992,
        isBestSeller: true,
      },
      {
        id: "premium",
        title: "Премиум",
        shortDescription: "Премиальное качество исполнения книги крупного формата.",
        image: "/images/books/premium.png",
        details: {
          description:
            "Уникальный запоминающийся подарок \n" +
            "на всю жизнь. Самый большой формат печати и премиальное исполнение. \n" +
            "\n" +
            "Странички из плотной матовой фотобумаги приятно перелистывать, а сама " +
            "книга раскрывается на 180 градусов образуя плоскую поверхность на месте корешка.",
          cover: {
            type: "Твердый переплет",
            material: "Мелованная бумага с ламинацией",
            print: "Цифровой офсет",
            binding: "Крепление термолистом",
          },
          pages: {
            material: "Мелованная бумага 200гр/м2",
            print: "Фотопечать по процессу RA-4",
          },
        },
        size: "30✕30 см",
        price: 8171,
        isBestSeller: false,
      },
    ];
    yield put(fetchFormatsSuccess);
  } catch (error) {
    yield put(fetchFormatsFailure("Ошибка загрузки форматов книг"));
  }
}

export function* watchBookFormats() {
  yield takeLatest(fetchFormatsRequest.type, fetchFormatWorker);
}
