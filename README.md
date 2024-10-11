# Publish
```bash
yarn publish --registry http://verdaccio.mw.local/
```
does not working using npm

# Create client
https://openapi-generator.tech/docs/installation
```bash
docker run --rm --net=host -v ${PWD}:/local openapitools/openapi-generator-cli generate -i http://localhost:8000/openapi.json -g typescript-fetch -o /local/src -c /local/openapi-config.json

```