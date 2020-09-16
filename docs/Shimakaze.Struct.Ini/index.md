# Shimakaze.Struct.Ini

[Shimakaze.Struct.Ini](//github.com/ShimakazeProj/Shimakaze.Struct.Ini)
是一个专为处理 命令与征服 系列的游戏配置文件用的工具库  

## 示例

### 从文件中读取

使用`Shimakaze.Struct.Ini.Utils.IniDocumentUtils`类中的`ParseAsync()`方法

```csharp
public static Task<IIniDocument> ParseAsync(Stream stream);
public static Task<IIniDocument> ParseAsync(TextReader reader);
```

### 保存到文件

使用`Shimakaze.Struct.Ini.Utils.IniDocumentUtils`类中的`DeparseAsync()`扩展方法

```csharp
public static Task DeparseAsync(this IIniDocument @this, Stream stream);
public static async Task DeparseAsync(this IIniDocument @this, TextWriter writer);
```

### 创建一个空对象

使用`Shimakaze.Struct.Ini.Utils.IniDocumentUtils`类中的`Create()`方法

```csharp
public static IIniDocument Create()
```

### 修改内容

#### 节(Section)

##### 添加一个节(Section)

使用`IIniDocument`的索引器(推荐)  
索引器会尝试在`IIniDocument`对象内部查找名称匹配的`IIniSection`对象, 若找不到匹配的对象则根据`option`参数的配置执行默认操作

```csharp
IIniSection this[string section, IniGetOption option = default] { get; };
```

使用`IIniDocument`的`New`方法  
这个方法将会在`IIniDocument`对象的内部添加一个新的`IIniSection`对象, 并返回该对象

```csharp
IIniSection New(string section);
```

使用`IIniDocument`的`Put`方法  
这个方法适用于需要自行添加`IIniSection`对象到文件中的情况, 通常不需要使用它

```csharp
void Put(IIniSection section);
```

##### 删除一个节(Section)

使用`IIniDocument`的`Remove`方法

```csharp
bool Remove(string section);
void RemoveAll();
```

##### 修改一个节(Section)中的键值对(KeyValuePair)

使用`IIniDocument`的索引器

```csharp
IniValue? this[string section, string key] { get; set; };
IniValue? this[string section, string key, IniValue @default = default, IniGetOption option = default] { get; };
IniValue? this[string section, string key, string summary = default, IniSetOption option = default] { set; };
```

使用`IIniSection`的索引器

```csharp
IniValue? this[string key] { get; set; }
IniValue? this[string key, IniValue @default = default, IniGetOption option = default] { get; }
IniValue? this[string key, string summary = default, IniSetOption option = default] { set; }
```

使用`IIniSection`的`Put`方法  
这个方法适用于需要自行添加`IIniKeyValuePair`对象到`IIniSection`中的情况, 通常不需要使用它

```csharp
void Put(IIniKeyValuePair keyValuePair);
```
