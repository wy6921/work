<template>
  <el-card>
    <!--    面包屑-->
    <div slot="header" class="clearfix">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>航线展示</el-breadcrumb-item>
        <el-breadcrumb-item>3d</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="main" style="width: 700px;height: 700px;">
    </div>
  </el-card>
</template>

<script>
  var echarts=require("echarts");
  export default {
    name: "Echart5",
    mounted() {
      this.drawChart()
      },
    data(){
      return{
        starfield:require("./starfield.jpg"),
        world:require("./world.jpg"),
      }
    },
    methods: {
      drawChart() {
        let canvas = document.createElement('canvas');
        let mapChart = echarts.init(canvas, null, {
          width: 4096,
          height: 2048
        });
        let pOp = {
          geo: {
            map: 'world',
            label: {
              fontSize: 12
            },
            itemStyle: {
              areaColor: 'transparent',
              borderColor: '#00FDFF'
            },
            emphasis: {
              areaColor: 'transparent'
            },
            regions: [
              {
                name: "南海诸岛",
                value: 0,
                itemStyle: {
                  normal: {
                    opacity: 0,
                    label: {
                      show: false
                    }
                  }
                }
              }
            ],
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            boundingCoords: [
              [-180, 90],
              [180, -90]
            ]
          },
          data: []
        }
        mapChart.setOption(pOp);
        var option = {
          backgroundColor: '#333',
          visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            text: ['scatter3D'],
            textStyle: {
              color: '#fff'
            },
            calculable: true,
            max: 3000,
            inRange: {
              color: ['#87aa66', '#eba438', '#d94d4c'],
              symbolSize: [8, 30]
            }
          }
          ],
          globe: {
            baseTexture:this.world,
            heightTexture:this.world ,
            displacementScale: 0.04,
            shading: 'lambert',
            environment: this.starfield,
            light: { // 光照阴影
              main: {
                color: '#fff', // 光照颜色
                intensity: 1.2, // 光照强度
                shadow: false, // 是否显示阴影
                alpha: 40,
                beta: -30
              },
              ambient: {
                intensity: 0.5
              }
            },
            viewControl: {
              projection: 'perspective',
              alpha: 90,
              beta: 0,
              center: [0, 50, 0], // 视角
              targetCoord: [110.46, 10.92],
              autoRotate: true,
              autoRotateAfterStill: 10,
              distance: 200 // 视距
            },
            postEffectL: {
              enable: true,
              depthOfFieldL: {
                enable: true,
                focalDistance: 1000,
                fstop: 100
              }
            },
            layers: [{
              type: 'blend',
              texture: mapChart
            }]
          },
          series: [{
            type: 'scatter3D',
            coordinateSystem: 'globe',
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: false
              }
            },
            data: []
          },{
            name: 'lines3D',
            coordinateSystem: 'globe',
            effect: {
              show: true,
              period: 2,
              trailWidth: 1,
              trailLength: 0.5,
              trailOpacity: 1,
              trailColor: '#0087f4'
            },
            type: 'lines3D',
            blendMode: 'lighter',
            lineStyle: {
              width: 1,
              color: 'rgb(50, 50, 150)',
              opacity: 0.1
            },
            data: [],
            silent: false,

          }]
        }
        var myChart = echarts.init(document.getElementById('main'));
        for (let i = 0; i < 50; i++) {
          option.series[1].data = option.series[1].data.concat(getRandomData())
        }
        myChart.setOption(option);
        function getRandomData() {
          return {
            coords: [
              [Math.random() * 135.20, Math.random() * 53.33],
              [121.51585, 31.23045]
            ],
            value: (Math.random() * 30).toFixed(2)
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>