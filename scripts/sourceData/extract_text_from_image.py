import pytesseract
from PIL import Image
import json

# 提取图片中的文字
def extract_text_from_image(image_path):
    image = Image.open(image_path)
    text = pytesseract.image_to_string(image, lang='chi_sim')  # 根据图片语言选择 `lang`
    return text

# 将提取的文字转换为指定 JSON 格式
def process_text_to_json(text):
    lines = text.split('\n')
    result = []
    module_data = {"module": "", "words": []}
    word_id = 1

    for line in lines:
        line = line.strip()
        if not line:  # 跳过空行
            continue

        # 检查是否为模块标题
        if line.startswith("Module"):
            if module_data["module"]:  # 保存上一个模块
                result.append(module_data)
                module_data = {"module": "", "words": []}
            module_data["module"] = line
        else:
            # 解析单词及翻译
            parts = line.split(' ')
            if len(parts) >= 2:
                word = parts[0]
                translation = ' '.join(parts[1:])
                module_data["words"].append({
                    "id": word_id,
                    "text": word,
                    "translation": translation
                })
                word_id += 1

    # 添加最后一个模块
    if module_data["module"]:
        result.append(module_data)

    return result

# 主函数
def main(image_paths):
    all_data = []
    for image_path in image_paths:
        text = extract_text_from_image(image_path)
        module_data = process_text_to_json(text)
        all_data.extend(module_data)

    # 转换为 JSON 字符串
    json_output = json.dumps(all_data, ensure_ascii=False, indent=2)
    print(json_output)
    return json_output

# 输入图片路径列表
image_paths = [
    "./imgs/word-list-1.jpeg",
    "./imgs/word-list-2.jpeg",
    "./imgs/word-list-3.jpeg",
    "./imgs/word-list-4.jpeg",
]

# 执行
json_result = main(image_paths)

# 如果需要保存到文件
with open("word-list.json", "w", encoding="utf-8") as f:
    f.write(json_result)


