### Ajax的应用场景

---

+ 页面上拉加载更多数据
+ 列表数据无刷新分页
+ 表单项离开焦点数据验证
+ 搜索框提示文字下拉列表
+ ......

### Ajax的使用及运行原理

---

```javascript
// 创建Ajax对象
var xhr = new XMLHttpRequest();
// 告诉Ajax请求地址以及请求方式
xhr.open('get','http://localhost:8888/first');
// 发送请求
xhr.send();
// 获取服务端响应给客户端的数据
xhr.onload = function(){
    console.log(xhr.responseText);
}

/*
//获取服务端响应的数据的方式二
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4){
		console.log(xhr.responseText);
	}
}
*/
```

+ 两者获取服务器端响应方式的区别

  + onload事件不兼容IE低版本, onreadystatechange事件兼容IE低版本
  + onload事件被调用次数为1, onreadystatechange事件被调用次数为多次

+ 请求参数传递

  + GET请求方式

  ```javascript
  xhr.open('get','http://localhost:8888/params?username=123&password=11111');
  ```

  + POST请求方式

  ```javascript
  xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xhr.send('username=123&password=11111');
  ```

+ 请求参数的格式

  + application/x-www-form-urlencoded
  + application/json
    + **get请求是不能提交json对象数据格式, 传统网站的表单提交也不支持json对象数据格式**

+ Ajax状态码

  + 0 => 请求未初始化(还没有调用open())
  + 1 => 请求已经建立, 但是还没有发送(还没有调用send())
  + 2 => 请求已经发送
  + 3 => 请求正在处理中, 通常响应中已经有部分数据可以用了
  + 4 => 请求已经完成, 可以获取并使用服务器的响应了

  ```javascript
  xhr.readyState //获取Ajax状态码
  ```

  + Ajax状态码发生变化时将自动触发**onreadystatechange**事件
  + **Ajax状态码和Http状态码的区别**
    + Ajax状态码表示Ajax请求的过程状态, 是ajax对象返回的
    + Http状态码表示请求的处理结果, 是服务端返回的

+ 低版本IE浏览器的缓存问题

  + 解决方案: 在请求地址的后面加请求参数, 保证每一次请求中的请求参数值不相同

  ```javascript
  xhr.open('get','http://localhost:8888/json?t=' + Math.random());
  ```

+ ajax函数封装

```javascript
function ajax(options){
    //默认选项
    var defaults = {
        type: 'get',
        url: '',
        data: {},
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function(){},
        error: function(){}
    }

    //对象合并,options中的属性覆盖defaults中的属性
    Object.assign(defaults,options);

    //创建xhr对象
    var xhr = new XMLHttpRequest();

    //请求参数
    var params = '';
    //拼接请求参数,如key1=value1&key2=value2
    for(var key in defaults.data){
        params += key + '=' + defaults.data[key] + "&"; 
    }
    //去除拼接请求参数尾部的&
    params = params.substring(0,params.length - 1);

    //如果请求方式为get,在url后追加请求参数
    if(defaults.type.toLowerCase() === 'get'){
        defaults.url += "?" + params;
    }

    //设置请求方式及请求地址
    xhr.open(defaults.type,defaults.url);

    //根据请求方式,确定send使用方式
    if(defaults.type.toLowerCase() === 'post'){
        //获取请求参数的传递格式
        var contentType = defaults.header['Content-Type'];
        //设置请求传递格式
        xhr.setRequestHeader('Content-Type', contentType);
        //如果传递格式为json格式
        if(contentType === 'application/json'){
            xhr.send(JSON.stringify(defaults.data));
        }else{
            xhr.send(params);
        }
    }else{
        xhr.send();
    }

    //当服务器响应数据给客户端完成后
    xhr.onload = function(){
        //获取响应的数据类型
        var contentType = xhr.getResponseHeader('Content-type');
        //响应的数据
        var responseText = xhr.responseText;

        //响应类型字段中包含application/json
        if(contentType.includes('application/json')){
            responseText = JSON.parse(responseText);
        }

        //当http状态码为200时
        if(xhr.status === 200){
            defaults.success(responseText,xhr);
        }else{
            defaults.error(responseText,xhr);
        }
    }
}   
```

### art-template模板引擎的使用

---

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="./js/template-web.js"></script>
    </head>
    <body>
        <div id="container"></div>
        <script id="myTemplate" type="text/html">
            <div>{{name}}-{{age}}</div>
        </script>
        <script>
            var content = template('myTemplate',{name: 'zhangsan',age: 20});
            document.getElementById('container').innerHTML = content;
        </script>
    </body>
</html>
```

```
//循环
{{each result}}
	{{$value}}
{{/each}}
```

### FormData

---

+ FormData对象的作用

  + 模拟HTML表单, 相当于将HTML表单映射成表单对象, 自动将表单对象中的数据拼接成请求参数的格式

  ```html
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <form id="form">
              <input type="text" name="username">
              <input type="password" name="password">
              <input type="button" value="提交" id="btn">
          </form>
          <script>
              var btn = document.getElementById('btn');
              var form = document.getElementById('form');
  
              btn.onclick = function(){
                  var formData = new FormData(form);
  
                  var xhr = new XMLHttpRequest();
                  xhr.open('post','http://localhost:8888/formData');
                  xhr.send(formData);
                  xhr.onload = function(){
                      if(xhr.status == 200){
                          console.log(xhr.responseText);
                      }
                  }
              }
          </script>
      </body>
  </html>
  ```

  ```javascript
  app.post('/formData',(request,response) => {
  	//创建formidable表单解析对象
  	const form = new formidable.IncomingForm();
  	//解析客户端传递过来的FormData对象
  	form.parse(request, (error,fields,files) => {
  		response.send(fields);
  	});
  });
  ```

  + 异步上传二进制文件

  ```html
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>
              #imgBox{ width: 400px; }
              #imgBox img{ width: 100%; }
          </style>
      </head>
      <body>
          <div>
              <input type="file" id="file">
              <div id="imgBox"></div>
          </div>
          <script>
              var fileInput = document.getElementById('file');
  
              //文件域内容改变时
              fileInput.onchange = function(){
                  //创建FormData对象实例
                  var formData = new FormData();
                  //将文件域的数据追加到formData中
                  formData.append('uploadData',this.files[0]);
  
                  var xhr = new XMLHttpRequest();
                  xhr.open('post','http://localhost:8888/upload');
                  //文件上传的过程中持续触发
                  xhr.upload.onprogress = function(ev){
                      console.log((ev.loaded / ev.total) * 100 + "%");
                  }
  
                  xhr.send(formData);
                  xhr.onload = function(){
                      if(xhr.status == 200){
                          //将响应数据转为js对象
                          var result = JSON.parse(xhr.responseText);
                          var img = document.createElement('img');
                          img.src = result.path;
                          //当图片加载完毕后
                          img.onload = function(){
                              document.getElementById('imgBox').appendChild(img);
                          }
                      }
                  }
              }
          </script>
      </body>
  </html>
  ```

  ```javascript
  app.post('/upload',(request,response) => {
  	//创建formidable表单解析对象
  	const form = new formidable.IncomingForm();
  	//设置文件存储的位置
  	form.uploadDir = path.join(__dirname,'public','uploads');
  	//保留文件扩展名
  	form.options.keepExtensions = true;
  	//解析客户端传递过来的FormData对象
  	form.parse(request, (error,fields,files) => {
  		response.send({
  			path: files.uploadData.filepath.split('public')[1]
  		});
  	});
  });
  ```

+ FormData对象的实例方法

  ```javascript
  //获取表单对象中属性的值
  formData.get('key');
  
  //设置表单对象中属性的值
  formData.set('key','value');
  
  //删除表单对象中属性的值
  formData.delete('key');
  
  //向表单对象中追加属性值
  formData.append('key','value');
  ```

  + **set方法与append方法的区别**
    + 在属性名存在的情况下, set会覆盖已有键名的值, append会保留两个值

### 同源限制(跨域)问题

---

+ JSONP解决方案(需服务器提供jsonp支持)

  + jsonp不属于Ajax请求, 但其可以模拟Ajax请求
  + 实现步骤
    + 将不同源的服务器端请求地址写在script标签的src属性中
    + 服务器端响应数据必须是一个函数的调用, 真正要发送给客户端的数据需要作为函数调用的参数
    + 在客户端全局作用域下定义函数
    + 在函数内部对服务器返回的数据进行处理
  + 简单理解: 在客户端定义全局函数, 服务器端返回调用函数的字符串, 客户端在需要数据的时候通过script标签的src引入请求地址, 以实参作为需要获取的数据
  + 代码优化
    + 客户端需要将函数名称传递到服务器端
    + 动态加入script标签
    + script标签加载完毕后移除

  + jsonp函数封装

  ```javascript
  function jsonp(options){
      //创建script标签
      var script = document.createElement('script');
  
      var params = '';
      //拼接请求参数
      for(var key in options.data){
          params += '&' + key + '=' + options.data[key];
      }
  
      //随机生成函数名
      var fnName = 'myFun' + Math.random().toString().replace('.','');
  
      //将匿名函数作为全局函数
      window[fnName] = options.success;
  
      //设置script的src属性
      script.src = options.url + '?callback=' + fnName + params;
      //将script标签添加到页面中
      document.body.appendChild(script);
      //当script标签加载完毕后进行移除
      script.onload = function(){
          document.body.removeChild(script);
      }
  }
  ```

+ CORS跨域资源共享

  + 在服务器端的响应头中设置相关字段

  ```
  //允许所有的客户端访问
  Access-Control-Allow-Origin: '*'
  //允许客户端使用get,post请求方式进行访问
  Access-Control-Allow-Methods: 'get,post'
  ```

+ 服务器端解决方案(反向代理)
  + 客户端向同源服务器端发起请求
  + 同源服务器端向非同源服务器请求数据
  + 同源服务器将请求结果发送给客户端

### JQuery中的Ajax全局事件

---

```
ajaxStart()   //当第一个请求发送之前触发
ajaxStop()   //当最后一个请求完成之后触发

ajaxSend()   //当每一个请求发送之前触发
ajaxSuccess()  //当每一个请求成功之后触发
ajaxError()  //当每一个请求失败之后触发
ajaxComplete()  //当每一个请求完成之后触发
```

