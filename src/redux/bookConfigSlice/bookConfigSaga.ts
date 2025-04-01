import { delay, put, takeLatest } from "redux-saga/effects";
import { BookFormat } from "./types";
import { fetchFormatsFailure, fetchFormatsRequest, fetchFormatsSuccess } from "./bookConfigSlice";

function* fetchFormatWorker() {
  try {
    yield delay(1000);
    const fakeResponse: BookFormat[] = [
      {
        id: "economy",
        title: "formats.economy.title",
        shortDescription: "formats.economy.shortDescription",
        image: new URL("../../images/books/economy.png", import.meta.url).href,
        details: {
          description: "formats.economy.description",
          cover: {
            type: "formats.economy.cover.type",
            material: "formats.economy.cover.material",
            print: "formats.economy.cover.print",
            binding: "formats.economy.cover.binding"
          },
          pages: {
            material: "formats.economy.pages.material",
            print: "formats.economy.pages.print"
          }
        },
        size: "20✕20 см",
        price: 3884,
        isBestSeller: false
      },
      {
        id: "standard",
        title: "formats.standard.title",
        shortDescription: "formats.standard.shortDescription",
        image: new URL("../../images/books/standard.png", import.meta.url).href,
        details: {
          description: "formats.standard.description",
          cover: {
            type: "formats.standard.cover.type",
            material: "formats.standard.cover.material",
            print: "formats.standard.cover.print",
            binding: "formats.standard.cover.binding"
          },
          pages: {
            material: "formats.standard.pages.material",
            print: "formats.standard.pages.print"
          }
        },
        size: "20✕20 см",
        price: 3884,
        isBestSeller: true
      },
      {
        id: "premium",
        title: "formats.premium.title",
        shortDescription: "formats.premium.shortDescription",
        image: new URL("../../images/books/economy.png", import.meta.url).href,
        details: {
          description: "formats.premium.description",
          cover: {
            type: "formats.premium.cover.type",
            material: "formats.premium.cover.material",
            print: "formats.premium.cover.print",
            binding: "formats.premium.cover.binding"
          },
          pages: {
            material: "formats.premium.pages.material",
            print: "formats.premium.pages.print"
          }
        },
        size: "20✕20 см",
        price: 3884,
        isBestSeller: false
      }
    ];
    yield put(fetchFormatsSuccess(fakeResponse));
  } catch (error) {
    yield put(fetchFormatsFailure("Ошибка загрузки форматов книг"));
  }
}

export function* watchBookFormats() {
  yield takeLatest(fetchFormatsRequest.type, fetchFormatWorker);
}
