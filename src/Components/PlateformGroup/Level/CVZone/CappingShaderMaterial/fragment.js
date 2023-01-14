export default /* glsl */ `

precision mediump float;


varying vec3 vPosition;


uniform float uTime;
uniform float uLineWidth;
uniform float uPercentageCapped;


void main()
{
    vec3 pointColor = vec3(0.29,0.2,0.14);
    
    float vIsPointCapped = 0.0;
    if((vPosition.x+1.0)*0.5 < uPercentageCapped){
        vIsPointCapped = 1.0;
    }
    float vLineDashes = step(0.5,mod(((vPosition.x+1.0)*2.5)+uTime,1.0));

    vec3 dashColor = vec3(1.0,0.83,0.6);
    pointColor = mix(pointColor, dashColor, vLineDashes);
    
    vec3 capColor = vec3(0.35,0.77,0.63);
    pointColor = mix(pointColor, capColor, vIsPointCapped);

    gl_FragColor = vec4(pointColor, 1.0);
}`;