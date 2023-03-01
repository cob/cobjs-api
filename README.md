# What is @cob/cobjs-api

This is the CobJs API Lib. Here you should find all the availabls APIS to interact with existing products.

it is organizes by product:

- `@cob/@cobjs-api-recordm`: RecordM API
- `@cob/@cobjs-api-integrationm`: IntegrationM API
- `@cob/@cobjs-api-userm`: UserM API
- `@cob/@cobjs-api-reportm`: ReportM API
- `@cob/@cobjs-api-helpers`: Helper functions

### Examples:

*Note:* By default, the target server is `https://learning.cultofbits.com` but you can switch in server by setting a new value in the `DEFAULT_CONFIGURATION`

*Node:*

```typescript
import { DefinitionsApi } from "@cob/cobjs-recordm"

const definitionsApi = new DefinitionsApi()
const definitions = await definitionsApi.getAllDefinitions()
console.log(definitions)
```

## Migrating from 3.0.0:

Previously, this library was named `@cob/rest-api-wrapper` and it provided a set of libraries of functions to simplify the interaction with a CoB server backend. 
It uses part of the available [REST API](https://learning.cultofbits.com/swagger/swagger-ui/#/)

**The list of available functions and where they were moved to:**

**@cob/cobjs-api-core:**
- `server`

**@cob/cobjs-api-helpers:**
- `auth.js` => `api/userm/helpers/auth`
- `umLoggedin.js` => `api/userm/helpers/umLoggedin`
- `rmDomainSearch` => `api/userm/helpers/rmDomainSearch`
- `rmDefinitionSearch` => `api/userm/helpers/rmDefinitionSearch`
- `rmDefinitionAggregation` => `api/userm/helpers/rmDefinitionAggregation`
- `rmGetInstance` => `api/userm/helpers/rmGetInstance`
- `rmAddInstance` => `api/userm/helpers/rmAddInstance`
- `rmDeleteInstance` => `api/userm/helpers/rmDeleteInstance`
- `dmEquipmentSearch` => `api/devicem/helpers/rmDomainSearch`

## Development

For contributions to the project checkout [README.Development.md](./README.Development.md)
