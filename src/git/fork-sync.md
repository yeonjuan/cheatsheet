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
