# Initial Setup

## API Generation

We use [OpenAPI Generator](https://openapi-generator.tech/) and the flavor `typescript-axios`. Some changes were made to the templates such that it's use would be simpler to the final developer. 
The original templates can be found here: https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator/src/main/resources/typescript-axios

To override existing behavior, just drop the template in the directory `cob-templates/typescript-axios` and call `npm run generate-api`. This will update the API with the new changes.

More information can be found in [OpenApi Generator / Using Templates](https://openapi-generator.tech/docs/templating). 

## Development:

Start by installing the dependencies:

```shell
$> npm install
```

## To generate the API:

To generate the API you need the JSON file generated from Swagger. Once you have the swagger file for each product, you should place the file in the `openapi` folder and then invoke the following script:

```shell
$> npm run generate-api
```

All new models and APIs will appear in the directory `packages/<swagger_filename>`

**Note:** If a model has been removed the file will continue to exist. The process doesn't remove files. 

## Build:

```shell
# "Build" single package 
$> npm run build --workspace packages/<package_name>

# "Build" all packages 
$> npm run build:all
```

## Testing

You can check the status of the existing tests by running:

```shell
# Run all tests
npm run test

# Run a specific test
npm run test <test filename name without test.ts>
```

## Publishing packages

You can check the status of the existing tests by running:

```shell
# "Publish" a single package 
$> npm run publish --workspace packages/<package_name> 

# "Publish" all packages 
$> npm run publish:all
```
