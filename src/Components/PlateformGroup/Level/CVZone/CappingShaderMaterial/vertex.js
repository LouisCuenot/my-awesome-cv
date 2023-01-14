export default /* glsl */`

varying float vLineDashes;
varying float vIsPointCapped;

uniform float uLineWidth;
uniform float uTime;
uniform float uPercentageCapped;

void main()
{

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    vIsPointCapped = 0.0;
    if((position.x+1.0)*0.5 < uPercentageCapped){
        vIsPointCapped = 1.0;
    }
    vLineDashes = step(0.5,mod(((position.x+1.0)*2.5)+uTime,1.0));

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    
    gl_Position = projectedPosition;

   

}
`  