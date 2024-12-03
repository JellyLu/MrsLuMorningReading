import json
import requests
from bs4 import BeautifulSoup

def fetch_word_details(word):
    url = f"https://dictionary.cambridge.org/dictionary/english/{word}"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')

        # 获取字典的唯一 id
        id = soup.find('div', {'class': 'pr dictionary'})["data-id"] if soup.find('div', {'class': 'pr dictionary'}) else None

        # 获取两个发音
        ipa_elements = soup.find_all('span', {'class': 'ipa'})
        uk_pronunciation = ipa_elements[0].text if len(ipa_elements) > 0 else None
        us_pronunciation = ipa_elements[1].text if len(ipa_elements) > 1 else None

        # 获取音频源
        audio_elements = soup.find_all('source', {'type': 'audio/mpeg'})
        uk_audio = audio_elements[0]['src'] if len(audio_elements) > 0 else None
        us_audio = audio_elements[1]['src'] if len(audio_elements) > 1 else None

        # 获取图片（通常是第一张图片，如果有多张图片可以调整）
        image_element = soup.find('img', {'class': 'img_2x'})
        image_url = image_element['src'] if image_element else None

        # 拼接完整的图片 URL
        if image_url:
            image_url = "https://dictionary.cambridge.org" + image_url if not image_url.startswith("http") else image_url

        return {
            'id': id,
            'text': word,
            'pronunciations': {
                'uk': uk_pronunciation,
                'us': us_pronunciation
            },
            "audios": {
                'uk': "https://dictionary.cambridge.org" + uk_audio if uk_audio else None,
                'us': "https://dictionary.cambridge.org" + us_audio if us_audio else None
            },
            "imgUrl": image_url  # 添加图片的 URL
        }
    else:
        return f"Failed to retrieve data: {response.status_code}"

# Words to fetch details for
words = ["ground", "ice cream", "ago"]

# Fetch details for each word using list comprehension
results = [fetch_word_details(word) for word in words]

# Print and save the results to output.json
print(words, results)

with open('output.json', 'w') as f:
    json.dump(results, f, indent=4)
