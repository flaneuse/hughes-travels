(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2348"],{"22b4":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[e("Legend",{attrs:{colorPalette:t.colorPalette}}),t._v(" "+t._s(t.width)+" "),e("l-map",{style:t.mapStyle,attrs:{zoom:t.zoom,minZoom:t.minZoom,maxZoom:t.maxZoom,center:t.center}},[e("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),e("l-geo-json",{attrs:{geojson:t.geojson,options:t.options,"options-style":t.styleFunction}}),e("l-tile-layer",{attrs:{url:t.labelUrl,attribution:t.attribution}}),e("l-tile-layer",{attrs:{url:t.labelUrl,attribution:t.attribution}})],1)],1)},o=[],r=a("4360"),n=a("2699"),l=a("a40a"),s=a("044a"),p={name:"Choropleth",props:{geojson:Object,center:Array,zoom:Number,width:Number},components:{LMap:n["a"],LTileLayer:l["a"],LGeoJson:s["a"],Legend:()=>a.e("chunk-2d0aad88").then(a.bind(null,"136f"))},data(){return{height:700,url:"https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png",labelUrl:"https://tiles.stadiamaps.com/tiles/stamen_toner_lines/{z}/{x}/{y}{r}.png",attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',minZoom:3,maxZoom:11,fillOpacity:.8}},mounted(){},computed:{colorPalette(){return r["a"].state.colorPalette},mapStyle(){return`height: ${this.height}px; width: ${this.width}px`},options(){return{onEachFeature:this.onEachFeatureFunction}},styleFunction(){return()=>({weight:2,color:"#fff",opacity:1,fillOpacity:this.fillOpacity})},styleFunctionState(){return()=>({fill:null,weight:1.5,color:"#000000",opacity:1,fillOpacity:0})},onEachFeatureFunction(){return(t,e)=>{e.setStyle({fillColor:this.colorPalette[t.properties.fillColor]["color"]}),e.bindTooltip(`<div class="text-left">\n          <div>\n          <b>${t.properties.NAME} County, ${t.properties.state}</b>\n          </div>\n          <div>\n          population (est. 2019): ${t.properties.population}\n          </div>\n          <div>\n          Rich: ${t.properties.rich?'<i class="fas fa-square"></i>':'<i class="far fa-square"></i>'}\n          </div>\n          <div>\n          Nancy: ${t.properties.nancy?'<i class="fas fa-square"></i>':'<i class="far fa-square"></i>'}\n          </div>\n          <div>\n          Laura: ${t.properties.laura?'<i class="fas fa-square"></i>':'<i class="far fa-square"></i>'}\n          </div>\n          <div>\n          land area: ${t.properties.ALAND.toLocaleString()} sq. m\n          </div>\n          </div>\n          `,{permanent:!1,sticky:!0})}}}},c=p,u=a("2877"),h=Object(u["a"])(c,i,o,!1,null,null,null);e["default"]=h.exports}},0,["chunk-2d0aad88"]]);
//# sourceMappingURL=chunk-2d0b2348.1c9083e4.js.map