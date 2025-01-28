# Entwicklungscontainer
FROM node:18
WORKDIR /app

# Installiere Abhängigkeiten
COPY package.json package-lock.json ./
RUN npm install

# Kopiere den gesamten Code
COPY . .

# Exponiere den Entwicklungsserver-Port
EXPOSE 4200

# Starte den Entwicklungsserver im Watch-Modus
CMD ["npm", "run", "start"]
