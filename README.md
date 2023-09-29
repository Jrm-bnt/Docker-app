# Customlink app

## Configuration

Avant d'exécuter `docker-compose up`, assurez-vous que le fichier `docker-compose.yml` approprié est présent.

## Exécution

Pour démarrer tous les conteneurs définis dans votre fichier `docker-compose.yml`, utilisez la commande suivante dans le répertoire de votre projet :

```bash
docker-compose up
```

## Services:
### Front-end:
ports: 3000:3000

### Back-end:
ports:
3050:3050

### Database:
ports:
3306:3306
