import { twMerge } from "tailwind-merge";
import classNames from "classnames";
/**
 * 安全地解析int
 * - 如果能解析, 返回int值, number类型
 * - 如果不能解析, 返回defaultValue
 */
export const safeParseInt = <T>(
  str: string | null | undefined,
  defaultValue: T,
): T | number => {
  if (!str) {
    return defaultValue;
  }
  const val = parseInt(str);
  if (isNaN(val)) {
    return defaultValue;
  }
  return val;
};

/**
 * 兼容safari的时间格式
 * 带 - 的时间字符串 都转成  /
 * 2023-03-04 00:05:55 -> 2023/03/04 00:05:55
 */
export function formatSafeTimeString(time: string) {
  return time.replace(/-/g, "/");
}

/**
 * 递归的比较两个Object
 */
export function structuralEqual(
  left: object | undefined,
  right: object | undefined,
) {
  if ((left === undefined) !== (right === undefined)) {
    return false;
  }
  if (left === undefined) {
    return true;
  }
  for (const [key, lValue] of Object.entries(left)) {
    // @ts-ignore
    const rValue: any = right[key];
    if (typeof lValue !== typeof rValue) {
      return false;
    }
    if (typeof lValue === "object") {
      return structuralEqual(lValue, rValue);
    }
    return lValue === rValue;
  }
}

export function arrayEqual<T>(arr1: T[], arr2: T[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

/**
 * 将目标数字限制在min-max之间
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/**
 * 根据条件把数组拆分为两个
 */
export function partition<T>(arr: T[], predicate: (item: T) => boolean) {
  const [target, rest]: [T[], T[]] = [[], []];
  for (const item of arr) {
    if (predicate(item)) {
      target.push(item);
    } else {
      rest.push(item);
    }
  }
  return [target, rest];
}

/**
 * 原地shuffle一个数组
 */
export function shuffle<T>(arr: T[]) {
  const length = arr.length;
  for (let i = 0, len = length / 2; i < len; i++) {
    const peer = Math.floor(Math.random() * length);
    [arr[i], arr[peer]] = [arr[peer], arr[i]];
  }
  return arr;
}

type IndexKey = string | number | symbol;
type KeyFetcher<Item> = (item: Item) => IndexKey;

/**
 * 根据特定key对数组进行分组
 */
export function groupBy<
  Item extends object,
  Key extends keyof Item | KeyFetcher<Item>,
>(arr: Item[], keyOrFetcher: Key): Item[][] {
  const grouped = new Map<unknown, Item[]>();
  for (const item of arr) {
    const k =
      typeof keyOrFetcher === "function"
        ? keyOrFetcher(item)
        : item[keyOrFetcher as keyof Item];
    if (!grouped.has(k)) {
      grouped.set(k, []);
    }
    grouped.get(k)?.push(item);
  }
  return Array.from(grouped.values());
}

/**
 * 在文本展示的时候，根据设定最大字符长度来判断是否截断文本
 */
export function truncateTextIfNecessary(text: string, maxLen: number) {
  return text.length > maxLen ? text.slice(0, maxLen) : text;
}

/**
 * 合并多个className
 */
export function cn(...classNameList: Array<string | undefined>) {
  return twMerge(classNames(classNameList));
}


export function removeUndefinedValues<T>(
  obj: Record<string, T | undefined>,
): Record<string, T> {
  return Object.entries(obj).reduce((acc: Record<string, T>, [key, value]) => {
    if (value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {});
}

export function stringRepeat(text: string, count: number, delimiter = " ") {
  return new Array(count).fill(text).join(delimiter);
}

export function toFixed(num: number, fractionDigits: number = 0) {
  return parseFloat(num.toFixed(fractionDigits));
}
