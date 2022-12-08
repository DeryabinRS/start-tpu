import ParticlesBg from 'particles-bg'
export default function ParticleAnimate() {
	let config = {
      num: [4, 2],
      rps: 0.1,
      radius: [5, 20],
      life: [1.5, 3],
      v: [1, 3],
      tha: [-40, 40],
      // body: "./img/icon.png", // Whether to render pictures
      // rotate: [0, 20],
      alpha: [0.4, 0],
      scale: [1, 0.1],
      position: "center", // all or center or {x:1,y:1,width:100,height:100}
      color: ["#209740", "#209740"],
      cross: "dead", // cross or bround
      random: 15,  // or null,
      g: 1,    // gravity
      // f: [2, -1], // force
      onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
      }
    };

    return (
      <div>
        <ParticlesBg type="cobweb" color={"#209740"} config={config} bg={true}/>
      </div>
    )
}