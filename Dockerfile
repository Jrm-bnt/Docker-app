# Image + version
FROM node:19

# Image + version
WORKDIR /app

# Copie des dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

COPY . .

# Build de l'application
RUN npm run build

# Port d'ecoute
EXPOSE 3000

# Démarre le service
CMD ["npm", "start"]
