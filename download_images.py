import os
import re
import requests
from urllib.parse import unquote

# 目录设置
chapters_dir = 'src/data/chapters'
images_dir = 'public/images'

# 确保图片目录存在
os.makedirs(images_dir, exist_ok=True)

# 正则表达式匹配Markdown图片语法
image_pattern = r'!\[(.*?)\]\((https://trae-api-cn\.mchost\.guru/api/ide/v1/text_to_image\?prompt=.*?&image_size=.*?)\)'

# 处理每个章节文件
for chapter_file in os.listdir(chapters_dir):
    if chapter_file.endswith('.ts'):
        file_path = os.path.join(chapters_dir, chapter_file)
        print(f'处理文件: {file_path}')
        
        # 读取文件内容
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 查找所有图片链接
        matches = re.findall(image_pattern, content)
        
        # 收集所有需要替换的内容
        replacements = []
        
        for i, (alt_text, url) in enumerate(matches):
            # 从URL中提取提示词并生成文件名
            prompt_match = re.search(r'prompt=(.*?)&image_size', url)
            if prompt_match:
                prompt = unquote(prompt_match.group(1))
                # 生成简洁的文件名
                filename = f"{chapter_file.replace('.ts', '')}_img{i+1}.png"
                image_path = os.path.join(images_dir, filename)
                
                # 下载图片
                print(f'下载图片: {url}')
                print(f'保存为: {image_path}')
                
                try:
                    response = requests.get(url, stream=True)
                    response.raise_for_status()
                    with open(image_path, 'wb') as img_file:
                        for chunk in response.iter_content(chunk_size=8192):
                            img_file.write(chunk)
                    print(f'图片下载成功: {filename}')
                    
                    # 收集替换内容
                    local_url = f"/images/{filename}"
                    old_link = f"![{alt_text}]({url})"
                    new_link = f"![{alt_text}]({local_url})"
                    replacements.append((old_link, new_link))
                    print(f'准备更新链接: {local_url}')
                    
                except Exception as e:
                    print(f'下载图片失败: {e}')
        
        # 执行替换
        for old_link, new_link in replacements:
            content = content.replace(old_link, new_link)
        
        # 写回更新后的内容
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f'文件更新完成: {file_path}')
        print('-' * 50)

print('所有图片下载和链接更新完成!')
