import { NextResponse } from "next/server";

export function getErrorData(res: Response) {
  return {
    status: res.status,
    statusText: res.statusText,
    url: res.url,
    //date: new Date().toLocaleString('ru-RU'),
    // дата выводится в Winston с помощью printf
  }
}