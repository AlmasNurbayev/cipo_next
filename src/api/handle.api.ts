import { getErrorData } from "@/shared/helpers";
import { Logger } from "@/shared/logger";

export async function handleResponse<T>(res: Response, url: string) {
  if (res.status === 200) {
    const data: T = await res.json();
    return { status: res.status, statusText: res.statusText, data, url };
  } else {
    Logger.error(getErrorData(res));
    throw new Error('не удалось получить данные ' + url);
  }
}