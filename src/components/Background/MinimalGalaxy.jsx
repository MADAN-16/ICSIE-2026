import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';
import './MinimalGalaxy.css';

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform float uSpeed;
uniform float uDensity;
uniform vec3 uColor;

varying vec2 vUv;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
    vec2 st = gl_FragCoord.xy/uResolution.xy;
    st.x *= uResolution.x/uResolution.y;

    vec3 color = vec3(0.0);
    
    float t = uTime * uSpeed;
    
    // Simple starfield
    for(float i=0.0; i<3.0; i++) {
        vec2 uv = st;
        float z = fract(i*0.3 + t*0.1);
        float fade = 1.0 - z;
        
        uv -= 0.5;
        uv *= (1.0 + z); // Zoom effect
        uv += 0.5;
        
        vec2 grid = floor(uv * 20.0 * uDensity);
        vec2 sub = fract(uv * 20.0 * uDensity) - 0.5;
        
        float r = random(grid + i * 100.0);
        float star = smoothstep(0.1, 0.0, length(sub)) * step(0.98, r);
        
        // Twinkle
        float twinkle = sin(uTime * 2.0 + r * 10.0) * 0.5 + 0.5;
        
        color += vec3(star * fade * twinkle * 2.5) * uColor;
    }

    gl_FragColor = vec4(color, 1.0);
}
`;

export default function MinimalGalaxy({
  speed = 0.5,
  density = 2.0,
  color = [0.9, 0.95, 1.0], // Very bright stars
  backgroundColor = [0.976, 0.953, 0.937], // Off-White #F9F3EF
}) {
  const ctnDom = useRef(null);

  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;
    
    let renderer, gl, program, animateId;

    try {
      renderer = new Renderer({
        alpha: true, // Transparent background
        dpr: Math.min(window.devicePixelRatio, 2),
      });
      gl = renderer.gl;
      
      // Set background color to transparent
      gl.clearColor(0, 0, 0, 0);
    } catch (e) {
      console.warn('WebGL not supported or context creation failed:', e);
      return;
    }

    function resize() {
      if (!ctn || !renderer) return;
      renderer.setSize(ctn.offsetWidth, ctn.offsetHeight);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
    }
    window.addEventListener('resize', resize, false);
    resize();

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
        },
        uSpeed: { value: speed },
        uDensity: { value: density },
        uColor: { value: new Color(color[0], color[1], color[2]) },
      }
    });

    const mesh = new Mesh(gl, { geometry, program });

    function update(t) {
      animateId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }
    animateId = requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener('resize', resize);
      if (ctn && gl && gl.canvas && ctn.contains(gl.canvas)) {
        ctn.removeChild(gl.canvas);
      }
      gl?.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [speed, density, color, backgroundColor]);

  return <div ref={ctnDom} className="minimal-galaxy-container" />;
}
