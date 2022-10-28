# d3
## 比例尺
1. 线性比例尺
   ```js
   let scale = d3.scaleLinear()//初始化比例尺
   scale.domain([0, 100]).range([0, 1000]) //domain为定义域，range为值域
   ```
2. 条带比例尺
   ```js
   //条带比例尺是离散的
   let scale = d3.scaleBand()//初始化比例尺
   scale.domain(['a', 'b', 'c']).range([0, 1000]) //domain为定义域，range为值域
   scale.padding(num) //条带间的间隔
   scale.bandWidth() //返回条带的长度
   ```