# Cheatsheet

## Table of Contents
  1. [node](#node)
  1. [mysql](#mysql)
  1. [kubernetes](#kubernetes)
  1. [docker](#docker)

# node

# mysql
- [Add column](#Add-column)
- [Connecting to the MySQL](#Connecting-to-the-MySQL)
<!--
{
  "section" : "mysql"
}
-->
### Add column

Adding a new column in the existing table.

```sql
ALTER TABLE table_name ADD COLUMN column_name VARCHAR(200) NOT NULL;
```

<!--
{
  "section" : "mysql"
}
-->
### Connecting to the MySQL

Connecting to the MySQL using command.

```console
$ mysql -h 123.456.7.89 -P 3306 -u root -p
```
# kubernetes
- [Mount secret file](#Mount-secret-file)
- [Mount SSL](#Mount-SSL)
<!--
{
  "section" : "kubernetes"
}
-->
### Mount secret file

```bash
$ kubectl create secret generic {secret name} --from-file={file path}
```

<!--
{
  "section" : "kubernetes"
}
-->
### Mount SSL

```bash
$ kubectl create secret tls {secret name} --key {key file path} --cert {cert file path}
```
# docker

