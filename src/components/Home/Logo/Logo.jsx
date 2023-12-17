import './logo.scss';
import LogoS from '../../../assets/images/logo-s.png'
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';

const Logo = () => {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()
  
    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duration:1,
            opacity:1
        })
        .from(outlineLogoRef.current, {
            duration:0,
            duration:20,
        })
        gsap.fromTo(
            solidLogoRef.current,{
                opacity:0,
            },
            {
                opacity:1,
                delay:4,
                duration:4,
            }
        )
    },[])


    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoS} alt="H" />
            <svg viewBox="0 0 2074.000000 2048.000000" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" version="1.0">
 <g class="layer">
  <title>Layer 1</title>
  <g fill="#000000" id="svg_1" transform="matrix(0.0761017 0 0 -0.0777401 -4.82746 -10.6847)">
   <path ref={outlineLogoRef} d="m17935.69,-3173.74c-35,-102 -265,-878 -393,-1328c-631,-2209 -1189,-4513 -1577,-6515l-71,-370l-1297,-3l-1297,-2l0,37c0,21 7,133 15,248c45,656 65,1244 65,1970c0,742 -18,1164 -71,1695c-256,2566 -1196,4004 -2739,4185c-144,17 -461,20 -611,5c-893,-88 -1883,-546 -2715,-1256c-179,-153 -572,-545 -741,-739c-596,-685 -1096,-1433 -1528,-2290c-640,-1270 -997,-2505 -1051,-3644l-6,-144l88,6c49,4 365,10 702,13l612,7l11,41c94,358 184,643 299,946c573,1517 1399,2561 2374,3003c323,146 638,223 1007,247c313,21 457,-22 629,-186c298,-285 462,-865 511,-1804c21,-412 3,-1175 -41,-1775c-181,-2409 -836,-5995 -1885,-10318c-136,-558 -384,-1539 -515,-2040c-62,-235 -111,-429 -109,-431c2,-2 679,-5 1504,-7l1500,-4l100,300c898,2689 1719,5984 2167,8702l63,381l170,6c202,7 2301,16 2307,10c2,-2 -1,-52 -8,-111c-154,-1355 -207,-3511 -118,-4773c132,-1888 611,-3211 1409,-3898c272,-234 588,-400 929,-487c235,-60 328,-70 641,-69c306,0 421,12 707,75c743,162 1572,588 2288,1175c1143,937 2245,2682 2927,4634c270,775 453,1630 453,2123l0,110l-711,-6c-392,-4 -714,-8 -716,-11c-2,-2 -14,-55 -27,-117c-108,-520 -381,-1261 -672,-1829c-626,-1218 -1468,-1994 -2422,-2234c-311,-79 -712,-110 -882,-70c-210,49 -396,222 -525,488c-150,309 -248,792 -285,1416c-21,354 -12,1100 20,1595c163,2519 842,6261 1976,10890c165,675 483,1916 539,2106l13,46l-90,7c-50,3 -727,6 -1505,6c-1122,0 -1415,-3 -1418,-12z" fill="#7f0000" id="svg_2" stroke="#7f0000" stroke-width="99"/>
  </g>
 </g>
</svg>
        </div>
    )
}

export default Logo;