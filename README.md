# Cheatsheet

## Table of Contents
  1. [node](#node)
  1. [git](#git)
  1. [mysql](#mysql)
  1. [kubernetes](#kubernetes)
  1. [docker](#docker)
  1. [argo](#argo)

# node
- [DNS lookup](#dns-lookup)
- [Remove directory](#remove-directory)
<!--
{
  "section" : "node"
}
-->
### DNS lookup

Simple dns lookup.

```js
const dns = require('dns');

dns.lookup('google.com', (err, address, family) => {
  // DNS server IP
  console.log(address); // 172.217.25.110

  // IPv4 or IPv6
  console.log(address, family); // 4
});
```

<!--
{
  "section" : "node"
}
-->
### Remove directory

Removes the entire directory recursively.

```js
const fs = require('fs');
fs.rmdirSync('directory/path', { recursive: true })
```
# git
- [Delete remote tag](#delete-remote-tag)
- [Sync forked repo](#sync-forked-repo)
<!--
{
  "section" : "git"
}
-->
### Delete remote tag

Delete remote tag.

```bash
$ git push --delete origin {tagname}
```

<!--
{
  "section" : "git"
}
-->
### Sync forked repo

Sync forked repo.

```bash
$ git remote add upstream {upstream github.git}
$ git fetch upstream
$ git checkout master
$ git merge upstream/master
$ git push origin master
```
# mysql
- [Add column](#add-column)
- [Connecting to the MySQL](#connecting-to-the-mysql)
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
- [Mount secret file](#mount-secret-file)
- [Mount SSL](#mount-ssl)
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
- [Build image](#build-image)
- [Push image](#push-image)
<!--
{
  "section" : "docker"
}
-->
### Build image

Build a docker image with a specified docker file.

```bash
$ docker build -t {image name} -f {docker file path} {path}
```

<!--
{
  "section" : "docker"
}
-->
### Push image

Push docker image.

```bash
$ docker push {docker image name}
```
# argo
- [Create cron workflow](#create-cron-workflow)
- [Submit workflow](#submit-workflow)
<!--
{
  "section" : "argo"
}
-->
### Create cron workflow

Create cron workflow with argo cli.

```bash
$ argo cron create {cron-workflow.yaml}
```

<!--
{
  "section" : "argo"
}
-->
### Submit workflow

Submit workflow with argo cli.

```bash
$ argo submit {workflow.yaml}
```

### Access the argo workflow ui

```bash
$ kubectl -n argo port-forward svc/argo-server 2746:2746
```
