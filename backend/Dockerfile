# Image + version
FROM node:14

# Image + version
WORKDIR /app

# Copie des dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

COPY . .

# Port d'ecoute
EXPOSE 3050

# Commande start
CMD ["node", "app.js"]
