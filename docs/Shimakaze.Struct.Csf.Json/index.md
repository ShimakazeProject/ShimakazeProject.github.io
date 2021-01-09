# Shimakaze.Struct.Csf.Json

```csharp
using Shimakaze.Struct.Csf;
using Shimakaze.Struct.Csf.Json;

Stream jsonStream;
CsfStruct csfStruct;
var options = CsfJsonConverterUtils.CsfJsonSerializerOptions;
await JsonSerializer.SerializeAsync(jsonStream, csfStruct, options);
csfStruct = await JsonSerializer.DeserializeAsync<CsfStruct>(jsonStream, options);
```
