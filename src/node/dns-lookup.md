## DNS lookup

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
