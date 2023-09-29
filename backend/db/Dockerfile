# Image
FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root

# Nom de la DB
ENV MYSQL_DATABASE=mydatabase

# Dump
COPY data.sql /docker-entrypoint-initdb.d

# Expose le port
EXPOSE 3306

CMD ["mysqld"]
