**面试题**

## 1.页面导入样式时，使用link和@import有什么区别？

区别：
1. 从属关系：link是HTML标签，@import属于css提供的语法规则
2. 加载顺序：页面加载时，link会被同时加载，@import是在页面加载完成后，再加载
3. 兼容性：link是HTML标签，没有兼容性问题，@import不兼容ie5以下
4. DOM可控：link可通过js操作DOM插入标签改变样式