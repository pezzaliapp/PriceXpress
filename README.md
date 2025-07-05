# 📊 PriceXpress

![Icona PriceXpress](./pricexpress-192.png)

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-ready-brightgreen)](https://www.alessandropezzali.it/PriceXpress/)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pezzaliapp/PriceXpress)

**PriceXpress** è una **Progressive Web App (PWA)** open source che ti aiuta a calcolare il **prezzo di vendita minimo sostenibile** di un prodotto o servizio.

> 🔧 Basata su un metodo reale, testato in 30 anni di esperienza aziendale.

---

## ✨ Funzionalità

- Calcola il **prezzo unitario minimo** in base a:
  - Costi variabili totali
  - Costi fissi
  - Numero di pezzi prodotti
  - Margine operativo desiderato
- Mostra:
  - Totale costi
  - Ricavo minimo necessario
  - Prezzo unitario minimo
- Salvataggio offline (PWA installabile su mobile e desktop)
- Interfaccia in stile **Commodore 64**, chiara e leggibile

---

## 🧮 Formula usata

### 1. Totale Costi

```
Totale Costi = Costi Variabili + Costi Fissi
```

### 2. Ricavo Desiderato

Applichiamo il margine desiderato al ricavo, NON al costo:

```
Ricavo Desiderato = Totale Costi / (1 - Margine Operativo)
```

Esempio con margine 30%:

```
Ricavo = 500 € / (1 - 0.30) = 714,29 €
```

### 3. Prezzo Unitario Minimo

```
Prezzo Unitario = Ricavo Desiderato / Quantità Prodotta
```

---

## 📲 Come installarla

1. Vai su [https://www.alessandropezzali.it/PriceXpress/](https://www.alessandropezzali.it/PriceXpress/)
2. Clicca su **"Aggiungi alla schermata Home"** (da browser mobile)
3. Usa l’app offline anche senza connessione

---

## 🌿 Struttura dei file

```
PriceXpress/
├── index.html
├── style.css
├── script.js
├── manifest.json
├── service-worker.js
├── pricexpress-192.png
├── pricexpress-512.png
└── pricexpress-1024.png
```

---

## ⚠️ Avvertenze

- I calcoli sono da considerarsi **indicativi** e non sostituiscono una contabilità aziendale completa.
- Non vengono considerati **imposte, IVA, rimanenze o inflazione**.
- Utile per scenari semplificati, didattici o di orientamento strategico.

---

## 👨‍💼 Autore

Realizzata da [Alessandro Pezzali](https://www.pezzaliapp.com)  
📬 Progetto open source per makers, imprenditori e professionisti  
🔁 Personalizzabile per il tuo settore

---

## 📘 Licenza

Questo progetto è distribuito sotto licenza MIT.