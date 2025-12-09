import requests
from bs4 import BeautifulSoup
import sys, json

brand = sys.argv[1]
tipe = sys.argv[2]

url = f"https://www.olx.co.id/motor/motor-bekas?filter={brand} {tipe}"

page = requests.get(url)
soup = BeautifulSoup(page.text, "html.parser")

prices = []
for p in soup.select(".price"):
    price = p.text.replace("Rp", "").replace(".", "").strip()
    if price.isdigit():
        prices.append(int(price))

print(json.dumps(prices[:10]))  # Return 10 harga teratas
