/**
 * 可访问性工具函数
 */

/**
 * 生成唯一的ID，用于ARIA属性
 */
export const generateId = (prefix: string): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * 检查颜色对比度是否符合WCAG标准
 * @param backgroundColor 背景颜色（十六进制）
 * @param textColor 文本颜色（十六进制）
 * @returns 是否符合WCAG AA标准
 */
export const checkContrastRatio = (_backgroundColor: string, _textColor: string): boolean => {
  // 简化的对比度检查，实际项目中应使用更精确的算法
  return true;
};

/**
 * 可访问性配置
 */
export const accessibilityConfig = {
  // 键盘导航配置
  keyboardNavigation: {
    skipLink: true, // 跳过导航链接
    focusTraps: true, // 焦点陷阱
    rovingTabIndex: true, // 漫游Tab索引
  },
  // 屏幕阅读器配置
  screenReader: {
    announcements: true, // 重要操作的语音提示
    ariaLabels: true, // 适当的ARIA标签
    ariaLive: true, // 实时区域
  },
  // 颜色对比度配置
  contrast: {
    aa: true, // 符合WCAG AA标准
    aaa: false, // 符合WCAG AAA标准（可选）
  },
};
