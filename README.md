# Rodokmen Novotných ze Škrdlovic

První veřejné vydání začíná u Josefa Novotného (1880–1953). Vychází z webové šablony [rodokmen-skill](https://github.com/sarsonj/rodokmen-skill) Jindřicha Šaršona, verze 0.10.1, revize `7feb9d9`, pod licencí MIT. Výsledkem je statický web Astro s rejstříkem Pagefind.

## Aktualizace

1. V rodinné badatelně doplnit pramen a zachovat vztah mezi faktem a dokladem.
2. Ve složce tohoto webu zaktualizovat veřejné `data/osoby.py`, `data/zaznamy.json`, `data/svazky.json` a dostupný přepis v `data/prepisy.json`. Tyto soubory jsou redakční kopie určené k vydání.
3. U adresy doplnit řádek do `data/adresy.json`. Pole po řadě uvádějí obec, čp., čísla karet osob, klíč pramene a vysvětlení, kdo je s domem kdy spojený. Prázdný seznam karet znamená zmínku pouze u pramene. Odkaz hledá dnešní adresu na Mapy.com.
4. Ověřit sestavení a hledání. K náhledu stačí Node.js 24, npm a Python 3.

```sh
npm ci
npm run nahled
```

Náhled poběží na `http://localhost:4321/rodokmen-novotnych/`. Pokud disk neumožňuje nastavovat přístupová práva souborů (některé připojené datové oddíly), spusťte sestavení v kopii této složky na disku s běžnými linuxovými právy.

GitHub Pages potřebuje v **Settings → Pages → Build and deployment** vybrat **GitHub Actions**. Po aktivaci sestaví změny větve `main` workflow v `.github/workflows/pages.yml`. Pracovní podklady, neveřejná rodinná data a archivní reprodukce zůstávají v badatelně. Prameny na webu mají vlastní textový přepis a odkaz na původní snímek, kde je to možné.
