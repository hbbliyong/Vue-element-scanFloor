# 1. 扫楼

## 1.1 备忘

### 1.1.1 图片服务器

1. [图片服务API](http://192.168.20.225:8080/image-service/doc#101)
2. 关键参数   
 1.secret =123  
 2.systemId=dev  
 3.可以填图片大小  
### 1.1.2 saas服务地址

http://192.168.30.96:8080/doc/saas-manage.html#160101 
### 1.1.3 数据字典

http://47.93.33.207:8889/data-front/viewDict.html

## 1.2 未完成任务

1. 用户删除功能的实现,主要是多选选中,多选取消事件的处理
2. 点位标签的图片未提供
3. 资产图片未提供
4. 全景图图片API未提供
5. 数据不全,无法根据资产获取所有资产参数 
6. 点位标签测试ID：Pe11111111112222222222333333333300

## 1.3疑问

### 1.3.1 saas平台接口

1.是否可以获取通用设备接口
2.参数是否使用equipFamily
```
{
  "user_id":"*****",		//员工id-当前操作人id
  "code":"TD",				//对象code，必须
  "type":"system",			//对象类型，值：system, equip, equipFamily, component
  "app_type":"android",		//客户端类型：android, revit
}
```
#### Saga自定义模版
[模版模块](http://192.168.30.98:9030/)   
用户名密码：sagaadmin/saga123456
## 所用技术备忘

### 表格：handsontable

1.[自定义列--Cell types](https://docs.handsontable.com/pro/1.18.1/demo-checkbox.html) 