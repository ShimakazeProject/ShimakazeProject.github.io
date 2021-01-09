# Shimakaze.Struct.Csf

```csharp
using Shimakaze.Struct.Csf;
using Shimakaze.Struct.Csf.Utils;

Stream inCsf ;
Stream outCsf ;

var csfStruct = CsfStructUtils.Serialize(inCsf);
csfStruct.Deserialize(outCsf);
```
