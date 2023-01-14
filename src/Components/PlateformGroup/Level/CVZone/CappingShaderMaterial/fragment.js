export default /* glsl */ `

precision mediump float;


varying float vLineDashes;
varying float vIsPointCapped;


uniform float uTime;
uniform float uLineWidth;
uniform float uPercentageCapped;


void main()
{
    vec4 pointColor;
    if(vIsPointCapped == 1.0){
        pointColor = vec4(0.35,0.77,0.63,1.0);
    }else if(vLineDashes == 1.0){
        pointColor = vec4(1.0,0.83,0.6,1.0);
    }else{
        pointColor = vec4(0.29,0.2,0.14,1.0);
    }


    gl_FragColor = vec4(pointColor);
}`