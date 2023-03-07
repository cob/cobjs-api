# @cob/cobjs-recordm

This is the CobJs API Lib to interact with RecordM.

### Examples:

*Note:* By default, the target server is `https://learning.cultofbits.com` but you can switch in server by setting a new
value in the `DEFAULT_CONFIGURATION`

```typescript
import {ActionsApi} from "@cob/cobjs-api-integrationm";

const actionsApi = new ActionsApi();
const data = {name: "Guest"};
const result = await actionsApi.executeConcurrentAction("welcome", data)
console.log(result)
```
