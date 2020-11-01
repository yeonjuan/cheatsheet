# Cheatsheet

## Table of Contents
  1. [node](./docs/node/README.md)
  1. [mysql](./docs/mysql/README.md)
  1. [kubernetes](./docs/kubernetes/README.md)
  1. [docker](./docs/docker/README.md)

## node
## mysql
<!--
{
  "section" : "mysql"
}
-->
### Mount secret file

```bash
$ kubectl create secret generic {secret name} --from-file={file path}
```

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
## kubernetes
<!--
{
  "section" : "kubernetes"
}
-->
### Mount SSL

```bash
$ kubectl create secret tls {secret name} --key {key file path} --cert {cert file path}
```
## docker
