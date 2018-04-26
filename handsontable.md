### 表格：handsontable


#### 1.[自定义列--Cell types](https://docs.handsontable.com/pro/1.18.1/demo-checkbox.html) 
#### 2.列字段只读

```javascript
{
    // column options for the second column
    type: 'text',
    readOnly: true
  }
{ type: 'date', dateFormat: 'YYYY/MM/DD' },//計上日  
    { type: 'text' },//伝票摘要  
    { editor: 'select', selectOptions: ["借方", "貸方"]},//貸借区分  
   { type: 'text', allowEmpty: true, DefaultValue: false}//勘定科目-補助科目コード  

```
#### 3.单元格样式，合并单元格

```javascript
var container = document.getElementById('lina_main');  
hot = new Handsontable(container, {  
    data: cell_data, //导入数据  
    rowHeaders: true,  
    colHeaders: function(index) {  
        return ++index;  
    },  
    autoColumnSize:false,  
    autoRowSize:false,//禁止行列自动计算距离  
    dropdownMenu: true,  
    manualRowResize: true,  
    manualColumnResize: true,//行列可拉缩  
    manualColumnMove: true,//可整行整列移动  
    manualRowMove: true,  
    mergeCells:true,//合并单元格  
    contextMenu: true,//使用菜单  
    colWidths: cell_width,//定义列宽度  
    rowHeights:cell_height ,//定义行高度  
    //水平：htLeft，htCenter，htRight，htJustify，  
    //垂直：htTop，htMiddle，htBottom。  
    //只读: readOnly htDimmed  
    cell:[ //设置单元格属性  
        {row: 1, col: 1, readOnly: true,className: 'htCenter htMiddle'},  
        {row: 2, col: 0, className: 'htCenter htMiddle'},  
    ],  
    mergeCells: [  
        {row: 1, col: 1, rowspan: 2, colspan: 2}  
    ],//设置单元格合并情况  
    afterRowResize: function(currentRow, newSize) {   
        cell_height[currentRow] =  newSize;   
        hot.updateSettings({ rowHeights: cell_height });   
    },//rowHeights为最小高度，为了设置比初始值更小的高度，编写此钩子  
});  
```
##### 5.获取所有配置
hot.getSettings().columns
#### 6.Handsontable Dropdown with key-value pair
[解决方案](https://github.com/mydea/handsontable-chosen-editor)  
需要注意的地方  
1.记得引入chosen.jquery.js，此插件是基于chosen的jquery插件
2.由于版本的更新部分代码需要修改
customDropdownRenderer 方法中的
>Handsontable.TextCell.renderer需要改成Handsontable.renderers.TextRenderer


