import { BASE_SCREEN_WIDTH } from "../constants/ComponentConstant";

/**
 * pad竖版自适应方案，根据屏幕宽度缩放root font和icon
 * 目前直接按照屏幕宽度和设计稿（375px）的比值进行缩放，横竖屏会使用不同的max width进行处理
 */
export function getScaleRatioForElement() {
  return window.innerWidth / BASE_SCREEN_WIDTH;
}

export function updateRootFontSize() {
  window.document.documentElement.style.fontSize = `${
    16 * getScaleRatioForElement()
  }px`;
}
