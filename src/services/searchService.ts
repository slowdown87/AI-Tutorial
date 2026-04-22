import { chapters } from '../data/chapters';

interface SearchResult {
  chapterId: number;
  chapterTitle: string;
  sectionId: string;
  sectionTitle: string;
  content: string;
  snippet: string;
  score: number;
}

class SearchService {
  private index: Map<string, SearchResult[]> = new Map();

  constructor() {
    this.buildIndex();
  }

  private buildIndex() {
    chapters.forEach((chapter) => {
      chapter.sections.forEach((section) => {
        const content = section.content.toLowerCase();
        const words = this.extractWords(content);

        words.forEach((word) => {
          if (!this.index.has(word)) {
            this.index.set(word, []);
          }

          this.index.get(word)?.push({
            chapterId: chapter.id,
            chapterTitle: chapter.title,
            sectionId: section.id,
            sectionTitle: section.title,
            content: section.content,
            snippet: this.generateSnippet(section.content, word),
            score: 0
          });
        });
      });
    });
  }

  private extractWords(text: string): Set<string> {
    // 移除标点符号，提取单词
    const cleanedText = text.replace(/[.,?!;:()\[\]{}]/g, ' ');
    const words = cleanedText.split(/\s+/).filter(word => word.length > 1);
    return new Set(words);
  }

  private generateSnippet(content: string, query: string): string {
    const lowerContent = content.toLowerCase();
    const queryLower = query.toLowerCase();
    const index = lowerContent.indexOf(queryLower);

    if (index === -1) {
      return content.substring(0, 150) + '...';
    }

    const start = Math.max(0, index - 50);
    const end = Math.min(content.length, index + query.length + 100);
    let snippet = content.substring(start, end);

    if (start > 0) {
      snippet = '...' + snippet;
    }
    if (end < content.length) {
      snippet = snippet + '...';
    }

    return snippet;
  }

  search(query: string): SearchResult[] {
    if (!query || query.trim().length < 2) {
      return [];
    }

    const queryLower = query.toLowerCase();
    const queryWords = this.extractWords(queryLower);
    const results = new Map<string, SearchResult>();

    queryWords.forEach((word) => {
      const wordResults = this.index.get(word);
      if (wordResults) {
        wordResults.forEach((result) => {
          const key = `${result.chapterId}-${result.sectionId}`;
          if (results.has(key)) {
            const existingResult = results.get(key)!;
            existingResult.score += 1;
            // 更新摘要以包含当前查询词
            if (!existingResult.snippet.toLowerCase().includes(queryLower)) {
              existingResult.snippet = this.generateSnippet(existingResult.content, query);
            }
          } else {
            const newResult = { ...result, score: 1 };
            newResult.snippet = this.generateSnippet(newResult.content, query);
            results.set(key, newResult);
          }
        });
      }
    });

    // 转换为数组并按分数排序
    return Array.from(results.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, 10); // 限制返回10个结果
  }
}

// 导出单例
export const searchService = new SearchService();
