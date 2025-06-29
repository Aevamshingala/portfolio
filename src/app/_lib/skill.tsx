import React from "react";
import Masonry from "../../../com/Masonry/Masonry";
import Particles from "../../../Back/Particles/Particles";

function Skill() {
  const items = [
    {
      id: "1",
      img: "https://imgs.search.brave.com/ZEU0D5YJjOgU_tL6I_5AN7K_16-9GvG-YBfhP56LEsY/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9sb2dv/bG9vay5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMTEv/SmF2YS1Mb2dvLTIy/NXgxMjcucG5n",
      height: 400,
    },
    {
      id: "2",
      img: "https://imgs.search.brave.com/Ti_oIWgHqBFJjRLpeicKcIrntEIiy_4nH0edbZRu7kg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2phdmFzY3JpcHQt/cG5nL2phdmFzY3Jp/cHQtbG9nby1ocS1w/bmctMS5wbmc",
      height: 400,
    },
    {
      id: "3",
      img: "https://imgs.search.brave.com/Uv1bWPuMHi0-ZIhtd-XP7tg2j5-206lQNwplPc6uaUk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzIvcHl0aG9u/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTMzMjc4/OS5wbmc",
      height: 600,
    },
    {
      id: "4",
      img: "https://imgs.search.brave.com/Ph7-366GT3M-Fd9W_XBHntemxQzotjc5wnzgQ0W4VAE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/bW9uZ29kYi5zdmc",
      height: 400,
    },
    {
      id: "5",
      img: "https://imgs.search.brave.com/5PEx4V5vJL2k2mJPgyXnSEH4ivEyTEvjL73GeqHRmN8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQxLzIvcmVhY3Qt/bmF0aXZlLWxvZ28t/cG5nX3NlZWtsb2dv/LTQxMDY0NC5wbmc",
      height: 500,
    },
    {
      id: "6",
      img: "https://imgs.search.brave.com/v36LL1RxojgKKC3ay_OUCSdN_oC7JIR2f_XJvbBlsug/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zZWVr/dmVjdG9ycy5jb20v/c3RvcmFnZS9pbWFn/ZXMvbm9kZSUyMGpz/JTIwbG9nby5zdmc",
      height: 600,
    },
    {
      id: "7",
      img: "https://imgs.search.brave.com/Pomc08loq2F5fFjWUVP0sl5B_7oyZwVBYPWCN9nVsLc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzE2MjU3OTgucG5n",
      height: 400,
    },
    {
      id: "8",
      img: "https://imgs.search.brave.com/hH86XKJsbjmpMyrwGJVJWNFpL9n7BQXeRZpiLZ1514Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/dHlwZXNjcmlwdC5z/dmc",
      height: 400,
    },
    {
      id: "9",
      img: "https://imgs.search.brave.com/g9FkfDa6w1XTrEau7RVQdcu0OIEXaPl8aBTA50vRxjM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy8zNzQxMTgv/dGFpbHdpbmQuc3Zn",
      height: 400,
    },
    {
      id: "10",
      img: "https://imgs.search.brave.com/gLtUuF9fkSyZMSsl8qQPMgOAYK5LskYmz5RxWDA3XQk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmE3NGRkMTIyMzM0/M2ZiYzIyMDdkMDAu/cG5n",
      height: 600,
    },
    {
      id: "11",
      img: "https://imgs.search.brave.com/kGJg762SMLApMqupEqaysEw4dOAmY41K2a-C8Xo4DYg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2V4cHJl/c3MtanMxNzIwODk1/NDkzLmxvZ293aWsu/Y29tLndlYnA",
      height: 400,
    },
    {
      id: "12",
      img: "https://imgs.search.brave.com/GMgoO5aDAiY6qzgo8bv_S8-CnL18uEW07FkwmvnYf94/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/MHhraXNoYW4uY29t/L19uZXh0L2ltYWdl/P3VybD0vYmxvZ3Mv/bmV4dGpzL2hlcm8u/cG5nJnc9Mzg0MCZx/PTc1",
      height: 400,
    },
  ];
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
        width: "100%",
        overflow: "hidden",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem 0",
        minHeight: "130vh",
      }}
    >
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      <div className="flex justify-center items-center mt-20">
        <h1 className="text-5xl text-gray-700">Skills</h1>
      </div>
      <div className="w-full h-full pointer-events-none">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </div>
  );
}

export default Skill;
