(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["state"],{"3c20":function(o,t,a){"use strict";a.r(t);var l=function(){var o=this,t=o._self._c;return t("div",{staticClass:"d-flex flex-column align-items-center"},[t("h1",[o._v(o._s(o.name)),o.totalCounties?t("span",[o._v(": "+o._s(o.totalCounties)+" total counties")]):o._e()]),t("BarGraphCompletionTable",{attrs:{totals:o.totalsByPerson}}),o.center?t("Choropleth",{staticClass:"my-5",attrs:{zoom:o.zoom,center:o.center,width:o.widthChoro,geojson:o.geojson}}):o._e()],1)},n=[],e=a("4360"),s=a("edd5"),i={name:"State",components:{BarGraphCompletionTable:()=>a.e("chunk-2d208857").then(a.bind(null,"a4c1")),Choropleth:()=>a.e("chunk-2d0b2348").then(a.bind(null,"22b4"))},computed:{loading(){return e["a"].state.loading},totals(){const o=e["a"].getters.getStateTotal(this.name);return o?o[0]:null},geojson(){return e["a"].getters.getStateGeojson(this.name)},totalCounties(){return this.totals?this.totals["value"]["total"]:null},totalsByPerson(){return this.totals?this.totals["value"]["people"]:null}},data(){return{name:null,zoom:null,center:null,widthChoro:null}},mounted(){this.name=this.$route.params.name;const o=s[this.name];o&&(this.zoom=o.zoom,this.center=[o.lat,o.lon],this.widthChoro=o.aspectRatio?this.height*o.aspectRatio:this.height)},methods:{}},m=i,r=a("2877"),z=Object(r["a"])(m,l,n,!1,null,null,null);t["default"]=z.exports},edd5:function(o){o.exports=JSON.parse('{"Maryland":{"zoom":7,"lat":39.0286,"lon":-76.7425},"Iowa":{"zoom":7,"lat":42.0755,"lon":-93.4948},"Delaware":{"zoom":8,"lat":38.9986,"lon":-75.4999},"Ohio":{"zoom":7,"lat":40.2912,"lon":-82.7956},"Pennsylvania":{"zoom":7,"lat":40.8786,"lon":-77.7993},"Nebraska":{"zoom":7,"lat":41.538,"lon":-99.7944},"Washington":{"zoom":7,"lat":47.392,"lon":-120.4977},"Alabama":{"zoom":7,"lat":32.776,"lon":-86.83,"aspectRatio":0.8},"Arkansas":{"zoom":7,"lat":34.894,"lon":-92.4415},"New Mexico":{"zoom":7,"lat":34.4073,"lon":-106.1126},"Texas":{"zoom":7,"lat":31.4419,"lon":-99.3028},"California":{"zoom":7,"lat":37.1798,"lon":-119.4728},"Kentucky":{"zoom":7,"lat":37.5343,"lon":-85.3003},"Georgia":{"zoom":7,"lat":32.6369,"lon":-83.433},"Wisconsin":{"zoom":7,"lat":44.6259,"lon":-89.9917},"Oregon":{"zoom":7,"lat":43.9351,"lon":-120.5628},"Missouri":{"zoom":7,"lat":38.3574,"lon":-92.4585},"Virginia":{"zoom":7,"lat":37.5186,"lon":-78.7977},"Tennessee":{"zoom":7,"lat":35.8584,"lon":-86.3479},"Louisiana":{"zoom":7,"lat":31.013,"lon":-91.9321},"New York":{"zoom":7,"lat":42.9342,"lon":-75.5022},"Michigan":{"zoom":7,"lat":44.3412,"lon":-85.3812},"Idaho":{"zoom":7,"lat":44.3518,"lon":-114.6121},"Florida":{"zoom":7,"lat":28.5808,"lon":-82.4531},"Alaska":{"zoom":7,"lat":63.8198,"lon":-152.3411},"Illinois":{"zoom":7,"lat":40.0404,"lon":-89.1958},"Montana":{"zoom":7,"lat":47.0532,"lon":-109.631,"aspectRatio":1.7},"Minnesota":{"zoom":7,"lat":46.2822,"lon":-94.3026},"Indiana":{"zoom":7,"lat":39.8938,"lon":-86.2808},"Massachusetts":{"zoom":7,"lat":42.2376,"lon":-71.7552},"Kansas":{"zoom":7,"lat":38.494,"lon":-98.3773,"aspectRatio":1.2},"Nevada":{"zoom":7,"lat":39.3293,"lon":-116.6314},"Vermont":{"zoom":7,"lat":44.0688,"lon":-72.6656},"Connecticut":{"zoom":7,"lat":41.6189,"lon":-72.7278},"New Jersey":{"zoom":7,"lat":40.1802,"lon":-74.6629},"District of Columbia":{"zoom":8,"lat":38.9042,"lon":-77.0165},"North Carolina":{"zoom":7,"lat":35.5527,"lon":-79.1806},"Utah":{"zoom":7,"lat":39.3057,"lon":-111.67},"North Dakota":{"zoom":7,"lat":47.4502,"lon":-100.4654},"South Carolina":{"zoom":7,"lat":33.9063,"lon":-80.8891},"Mississippi":{"zoom":7,"lat":32.7359,"lon":-89.6646},"Colorado":{"zoom":7,"lat":38.9972,"lon":-105.5475},"South Dakota":{"zoom":7,"lat":44.4443,"lon":-100.227},"Oklahoma":{"zoom":7,"lat":35.5892,"lon":-97.4942},"Wyoming":{"zoom":7,"lat":42.9959,"lon":-107.5511},"West Virginia":{"zoom":7,"lat":38.6425,"lon":-80.6216},"Maine":{"zoom":7,"lat":45.3307,"lon":-69.2255},"Hawaii":{"zoom":7,"lat":20.2559,"lon":-156.3425},"New Hampshire":{"zoom":7,"lat":43.6793,"lon":-71.5795},"Arizona":{"zoom":7,"lat":34.2746,"lon":-111.6603},"Rhode Island":{"zoom":8,"lat":41.662,"lon":-71.5317}}')}},0,["chunk-2d208857","chunk-2d0b2348"]]);
//# sourceMappingURL=state.26f2e5b7.js.map