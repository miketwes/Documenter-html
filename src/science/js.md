# js

## node.js


1.下载编译后的打包文件

https://nodejs.org/dist/v8.9.4/node-v8.9.4-linux-x64.tar.xz

2.解压文件到指定的文件目录 /witts/fore_end/

 

tar zxvf node-v8.9.4-linux-x64.tar.xz 

3.配置环境变量

root@witts:/# nano /etc/profile

nodejs环境内容

#set for nodejs
export NODE_HOME=/witts/fore_end/node-v8.9.4-linux-x64
export PATH=$NODE_HOME/bin:$PATH

环境变量立即生效

root@witts:/# source /etc/profile

4.查看版本

root@witts:/etc# node -v
v8.9.4

 5.查看npm环境:

root@witts:/# npm -v
5.6.0

## json

```
var j={"name":"binchen"};
JSON.stringify(j)
JSON.parse() //method to convert JSON String to JSON Object.
```

Adding key value pair to json will append the new attribute to the end of the json string. 

```
var data = {
    "id": "XYZ123",
    "name": "Greg",
    "gender": "Male"
};

data.country = "United States";
console.log(JSON.stringify(data));

delete data.gender;
console.log(JSON.stringify(data));

var data = [
    {
        "name": "John Smith",
        "age": "45"
    },
    {
        "name": "Peter Jason",
        "age": "26"
    }

];

for (var i=0; i<data.length; i++) {
    data[i].department = "Administration";
    data[i].company = "ABC Corp";
}
console.log(JSON.stringify(data));

for (var i=0; i<data.length; i++) {
    delete data[i].age;
}
console.log(JSON.stringify(data));

```


