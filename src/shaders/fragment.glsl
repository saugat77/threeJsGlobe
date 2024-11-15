uniform sampler2D globalTexture;
varying vec2 vertexUV;  // vec2(0, 0.24);
varying vec3 vertexNormal;

void main() {
  
    float intensity =  1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0 ));
    vec3 atmosphere = vec3(0.1,0.1,0.1) * pow(intensity,1.5);
    gl_FragColor = vec4(atmosphere + texture2D(globalTexture, vertexUV).xyz, 1.0);
}