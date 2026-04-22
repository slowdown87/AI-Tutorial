import os
import re

# 目录设置
chapters_dir = 'src/data/chapters'

# 正则表达式匹配Markdown图片语法
image_pattern = r'!\[(.*?)\]\((/images/.*?)\)'

# 处理每个章节文件
for chapter_file in os.listdir(chapters_dir):
    if chapter_file.endswith('.ts'):
        file_path = os.path.join(chapters_dir, chapter_file)
        print(f'处理文件: {file_path}')
        
        # 读取文件内容
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 查找所有图片链接并添加基础路径
        content = re.sub(image_pattern, r'![\1](/AI-Tutorial\2)', content)
        
        # 写回更新后的内容
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f'文件更新完成: {file_path}')
        print('-' * 50)

print('所有图片路径更新完成!')
