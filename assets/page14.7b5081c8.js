import{S as fe,C,H as me,D as we,G as ge,P as R,W as be,s as ve,a as _e,b as Se,c as xe,d as ye,A as $,e as Y,E as ke,R as Ae,f as Ce,g as He,V as P,h as Le,O as De,i as Pe,j as Ee,k as Me,F as Ve,B as q,l as W,U as ze,m as Ge,M as We,n as Oe,o as Fe,p as Re,q as Be,T as Te,r as Ie,t as Ue,u as K,v as je,w as Ne}from"./SMAAPass.9cd29069.js";Object.defineProperty(String.prototype,"capitalize",{value:function(){return this.charAt(0).toUpperCase()+this.slice(1)},enumerable:!1});const S=function(t,e,a,n,i,o,s,c,r,u){this.path=t,this.animData=null,this.location_x=e,this.location_y=a,this.location_z=n,this.head=null,this.tail=null,this.bones=[],this.showVis=i,this.partialhuman=r,this.showLabelinstant=!1,u&&(this.showLabelinstant=!0),this.fakeMeshGeometry=new Me(5,5,5,5,15,5,30),this.mesh=null,this.meshScale=1,this.skeleton=null,this.boneVisHelper=null,this.verticesVisHelper=null,this.isReConstructed=o,this.color1=new C(0,0,1),this.color2=new C(0,1,0),this.isReConstructed&&(this.color1=new C(1,0,0),this.color2=new C(1,.5,0)),this.transparentBone=!1,s&&(this.transparentBone=!0),this.transparentVertices=!1,c&&(this.transparentVertices=!0),this.Label=null,this.tracks=[],this.clip=null,this.mixer=null,this.clipAction=null};S.prototype={constructor:S,initContent:function(){this._reportProgress({detail:{text:"Loading: "+this.path}});const t=new Ve,e=this,a=function(n){console.log("Loading complete: "+e.path),e._reportProgress({detail:{text:""}}),e.animData=JSON.parse(n);const i=[e.animData.length,e.animData[0].length,e.animData[0][0].length];console.log(i),i[1]===21?(e.head=[0,1,2,3,0,5,6,7,0,9,10,11,0,13,14,15,0,17,18,19],e.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],e.meshScale=1.5):i[1]===38&&e.partialhuman?(e.head=[0,1,2,3,4,5,0,7,8,9,10,11,0,13,14,15,16,17,18,15],e.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],e.meshScale=2):(e.head=[0,1,2,3,4,5,0,7,8,9,10,11,0,13,14,15,16,17,18,15,20,21,22,23,24,25,23,27,15,29,30,31,32,33,34,32,36],e.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],e.meshScale=2),e.createSkeleton(),e.createFakeSkinMesh(),e.createSkinMesh(),e.setUpAnimation()};t.load(e.path,a)},loadDataFromFile:function(t){this.animData=JSON.parse(t);const e=[this.animData.length,this.animData[0].length,this.animData[0][0].length];console.log(e),e[1]===21?(this.head=[0,1,2,3,0,5,6,7,0,9,10,11,0,13,14,15,0,17,18,19],this.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]):(this.head=[0,1,2,3,4,5,0,7,8,9,10,11,0,13,14,15,16,17,18,15,20,21,22,23,24,25,23,27,15,29,30,31,32,33,34,32,36],this.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],this.meshScale=.07),this.createSkeleton(),this.createFakeSkinMesh(),this.createSkinMesh(),this.setUpAnimation()},_reportProgress:function(t){let e="";t.detail!==null&&t.detail!==void 0&&t.detail.text&&(e=t.detail.text),console.log("Progress: "+e)},createSkeleton:function(){let t=new q;t.name="bone_0",this.bones.push(t);let e=[],a=this.animData[0][0][0],n=this.animData[1][0][0],i=this.animData[2][0][0];t.position.set(a,n,i),e.push(t.position);for(let o=1;o!==this.head.length+1;++o){let s=new q;this.bones[this.head[o-1]].add(s),s.name="bone_"+this.tail[o-1],this.bones.push(s);let c=this.head[o-1];a=this.animData[0][o][0]-this.animData[0][c][0],n=this.animData[1][o][0]-this.animData[1][c][0],i=this.animData[2][o][0]-this.animData[2][c][0],s.position.set(a,n,i),e.push(s.position)}},createFakeSkinMesh:function(){const t=this.fakeMeshGeometry.attributes.position,e=new W,a=[],n=[];for(let i=0;i<t.count;i++){e.fromBufferAttribute(t,i);const o=1,s=1;a.push(o,o+1,0,0),n.push(1-s,s,0,0)}this.fakeMeshGeometry.setAttribute("skinIndex",new ze(a,4)),this.fakeMeshGeometry.setAttribute("skinWeight",new Ge(n,4))},createSkinMesh:function(){const t=new We({color:16737095,wireframe:!0});this.mesh=new Oe(this.fakeMeshGeometry,t),this.skeleton=new Fe(this.bones);const e=this.skeleton.bones[0];this.mesh.add(e),this.mesh.visible=!1,this.mesh.bind(this.skeleton),this.mesh.position.set(this.location_x,this.location_y,this.location_z),this.mesh.scale.set(this.meshScale,this.meshScale,this.meshScale),f.add(this.mesh),this.boneVisHelper=new Re(this.mesh,this.color1,this.color2,this.transparentBone,d),this.boneVisHelper.visible=this.showVis,f.add(this.boneVisHelper),console.log(this.boneVisHelper);const a=new Be({color:this.color2,size:10,sizeAttenuation:!1,map:new Te().load("../models/files/disc.png"),alphaTest:.5});this.verticesVisHelper=new Ie(this.boneVisHelper.geometry,a),this.boneVisHelper.add(this.verticesVisHelper),this.transparentVertices&&(this.verticesVisHelper.material.opacity=0);const n=this.path.split("/"),s=n[n.length-1].split(".")[0],c=s.split("_")[3];var r=null;c==="corrupted"?r=s.split("_")[3].capitalize()+" "+s.split("_")[1].capitalize()+" "+s.split("_")[2].capitalize():(r=s.split("_")[1].capitalize()+" "+s.split("_")[2].capitalize(),this.isReConstructed||(r=s.split("_")[2].capitalize()));const u=document.createElement("div");u.className="label",u.textContent=r,u.style.color=this.color2.getStyle(),this.Label=new Ue(u),this.Label.position.copy(this.boneVisHelper.position),this.Label.visible=!1,this.Label.position.y=this.Label.position.y-.15,this.showLabelinstant||(this.Label.position.y=this.Label.position.y+.05),this.tail.length!==20?(this.Label.visible=!0,this.Label.position.y=this.Label.position.y-.4):(this.Label.visible=!0,this.Label.position.x=this.Label.position.x+.2),this.boneVisHelper.add(this.Label)},setUpAnimation:function(){const t=this.animData[0][0].length,e=t===24?24:120,a=t/e,n=[],i=[],o=new W;for(let r=0;r<t;r++){n.push(r/e);let u=this.animData[0][0][r],k=this.animData[1][0][r],V=this.animData[2][0][r];o.set(u,k,V).toArray(i,i.length)}const s=".bones[bone_0].position",c=new K(s,n,i);this.tracks.push(c);for(let r=1;r<this.head.length;r++){const u=[],k=[],V=new W;for(let m=0;m<t;m++){u.push(m/e);let z=this.head[r-1],G=this.tail[r-1],de=this.animData[0][G][m]-this.animData[0][z][m],pe=this.animData[1][G][m]-this.animData[1][z][m],ue=this.animData[2][G][m]-this.animData[2][z][m];V.set(de,pe,ue).toArray(k,k.length)}const he=".bones[bone_"+r+"].position",ce=new K(he,u,k);this.tracks.push(ce)}this.clip=new je("Action",a,this.tracks),this.mixer=new $(this.mesh),this.clipAction=this.mixer.clipAction(this.clip),this.clipAction.play(),y.push(this.clipAction),J.push(this.mixer)}};let f,d,h,B,w,b,x,T="Perspective",A,O,D,ee,Xe=[],v=[];const J=[],y=[],p=[];let g,_;const I=[],L={idle:{weight:1},walk:{weight:0},run:{weight:0}},E={sneak_pose:{weight:0},sad_pose:{weight:0},agree:{weight:0},headShake:{weight:0}};let l,U;Je();let M=!1,j=0;Ye();const te=new S("../models/files/Oursgated_Mix/OursGated_gt_secret_uncorrupted.json",-1,.5,0,!0,!1,!1,!1,!1,!0);te.initContent();p.push(te);const ie=new S("../models/files/Oursgated_Mix/OursGated_reconstructed_secret_uncorrupted.json",0,.5,0,!0,!0,!1,!1,!1,!0);ie.initContent();p.push(ie);const se=new S("../models/files/Oursgated_Mix/OursGated_gt_secret_uncorrupted.json",1,.5,0,!0,!1,!1,!1,!1,!1);se.initContent();p.push(se);const ne=new S("../models/files/Oursgated_Mix/OursGated_reconstructed_secret_uncorrupted.json",1,.5,0,!0,!0,!1,!1,!1,!0);ne.initContent();p.push(ne);function Je(){const t=document.getElementById("container");var e=document.getElementById("header"),a=document.createTextNode("Mix - Our Method");e.appendChild(a),ee=new Ne,f=new fe,f.background=new C(4473924),new me(16777215,4473924).position.set(0,20,0);const i=new we(16777215);i.position.set(3,10,10),i.castShadow=!0,i.shadow.camera.top=2,i.shadow.camera.bottom=-2,i.shadow.camera.left=-2,i.shadow.camera.right=2,i.shadow.camera.near=.1,i.shadow.camera.far=40,x=new ge(20,20,8947848),f.add(x);const o=window.innerWidth,s=window.innerHeight;h=new R(45,o/s,1,100),h.position.set(0,1,3),d=new be({antialias:!0}),d.setPixelRatio(window.devicePixelRatio),d.setSize(window.innerWidth,window.innerHeight),d.outputEncoding=ve,d.shadowMap.enabled=!0,t.appendChild(d.domElement),ae(),oe(),w=new _e,w.setSize(window.innerWidth,window.innerHeight),w.domElement.style.position="absolute",w.domElement.style.top="0px",w.domElement.style.pointerEvents="none",t.appendChild(w.domElement),B=new Se,t.appendChild(B.dom),window.addEventListener("resize",dt)}function Ye(){new xe().load("../models/gltf/Xbot.glb",function(e){A=e.scene,f.add(A),A.traverse(function(n){n.isMesh&&(n.castShadow=!0),n.isMesh&&(n.visible=!1)}),O=new ye(A),O.visible=!1,f.add(O);const a=e.animations;D=new $(A),U=a.length;for(let n=0;n!==U;++n){let i=a[n];const o=i.name;if(L[o]){const s=D.clipAction(i);Z(s),L[o].action=s,I.push(s)}else if(E[o]){Y.makeClipAdditive(i),i.name.endsWith("_pose")&&(i=Y.subclip(i,i.name,2,3,30));const s=D.clipAction(i);Z(s),E[o].action=s,I.push(s)}}qe(),re()})}function ae(){b=new ke(d);const t=new Ae(f,h);b.addPass(t),_=new Ce(He),_.uniforms.sourceTextureSize.value=new P(window.innerWidth,window.innerHeight),_.uniforms.sourceTexelSize.value=new P(1.5/window.innerWidth,1.5/window.innerHeight),b.addPass(_);const e=new Le(window.innerWidth*d.getPixelRatio(),window.innerHeight*d.getPixelRatio());b.addPass(e)}function oe(){g=new De(h,d.domElement),g.enablePan=!0,g.autoRotate=!0,g.target.set(0,1,0),g.update()}function qe(){const t=new Pe({width:310});t.close();const e=t.addFolder("Visibility"),a=t.addFolder("Camera Controls"),n=t.addFolder("Activation/Deactivation"),i=t.addFolder("Pause Stepping"),o=t.addFolder("General Speed"),s=t.addFolder("Scale and Pos");l={"show hand demo":function(){F("hand")},"show human demo":function(){F("human")},"clear all scene object":function(){F("None")},"camera rotate":!0,"set photo mode":!1,"modify time scale":1,"deactivate all":st,"activate all":nt,"pause/continue":at,"make single step":lt,"modify step size":.05,"set Grid scale":1,"set Grid XY":1,"set Obj Rotate Angle":1,"bone opacity (transparent)":1,"vertices opacity (transparent)":1,"show/disable label":!0,"show/disable dilation(post-process)":!0,"perspective camera":N,"orthographic camera":N},a.add(l,"camera rotate").onChange(le),a.add(l,"set photo mode").onChange(Ze),v.push(a.add(l,"perspective camera")),v.push(a.add(l,"orthographic camera")),e.add(l,"bone opacity (transparent)",0,1,1).onChange(Qe),e.add(l,"vertices opacity (transparent)",0,1,1).onChange(Ke),e.add(l,"show/disable label").onChange(H),e.add(l,"show/disable dilation(post-process)"),n.add(l,"deactivate all"),n.add(l,"activate all"),i.add(l,"pause/continue"),i.add(l,"make single step"),i.add(l,"modify step size",.01,.1,.001),o.add(l,"modify time scale",0,1.5,.01).onChange(it),s.add(l,"set Grid scale",.01,3,.01).onChange($e),s.add(l,"set Grid XY",.01,2,.01).onChange(et),s.add(l,"set Obj Rotate Angle",.01,4,.01).onChange(tt),e.open(),n.open(),i.open(),o.open(),s.open(),Xe.forEach(function(c){c.setInactive=function(){c.domElement.classList.add("control-inactive")},c.setActive=function(){c.domElement.classList.remove("control-inactive")};const r=L[c.property];(!r||!r.weight)&&c.setInactive()})}function H(t){p.forEach(function(e){e.boneVisHelper.visible===!0&&(e.Label.visible=t)})}function Ke(t){p.forEach(function(e){e.verticesVisHelper.material.opacity=t})}function Qe(t){p.forEach(function(e){e.boneVisHelper.material.opacity=t})}function le(t){g.autoRotate=t,h.position.set(0,1,3)}function Ze(t){t?(N(),x.rotation.x=Math.PI/2):x.rotation.x=Math.PI}function N(){h instanceof R?(h=new Ee(window.innerWidth/-1e3,window.innerWidth/1e3,window.innerHeight/1e3,window.innerHeight/-1e3,1,10),h.position.x=0,h.position.y=1,h.position.z=3,T="Orthographic"):(h=new R(45,window.innerWidth/window.innerHeight,.1,1e3),h.position.x=0,h.position.y=1,h.position.z=3,T="Perspective"),ae(),oe(),le(!1)}function F(t){t==="hand"?p.forEach(function(e){e.tail.length===20?(e.boneVisHelper.visible=!0,H(l["show/disable label"])):(e.boneVisHelper.visible=!1,e.Label.visible=!1,H(l["show/disable label"]))}):t==="human"?p.forEach(function(e){e.tail.length!==20?(e.boneVisHelper.visible=!0,H(l["show/disable label"])):(e.boneVisHelper.visible=!1,e.Label.visible=!1,H(l["show/disable label"]))}):p.forEach(function(e){e.boneVisHelper.visible=!1,e.Label.visible=!1,e.path==="dummy/path"&&ht(e)})}function $e(t){x.scale.set(t,t,t)}function et(t){x.position.set(t,t,0)}function tt(t){p.forEach(function(e){e.mesh.rotation.set(0,t,0)})}function it(t){for(const e of J)e.timeScale=t}function st(){y.forEach(function(t){t.stop()})}function nt(){y.forEach(function(t){t.play()})}function at(){M?(M=!1,X()):y[0].paused?X():ot()}function ot(){y.forEach(function(t){t.paused=!0})}function X(){y.forEach(function(t){t.paused=!1})}let Q=0;function lt(){X(),M=!0,j=l["modify step size"],Q+=1,console.log(Q)}function Z(t){const e=t.getClip(),a=L[e.name]||E[e.name];rt(t,a.weight),t.play()}function rt(t,e){t.enabled=!0,t.setEffectiveTimeScale(1),t.setEffectiveWeight(e)}function ht(t){t.mesh.removeFromParent(),t.boneVisHelper.removeFromParent(),f.remove(t),console.log(t.path+"has been remove"),console.log(p)}function ct(){T==="Perspective"?(v[0].disable(),v[1].enable()):(v[1].disable(),v[0].enable())}function dt(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight),b.setSize(window.innerWidth,window.innerHeight),_.uniforms.sourceTextureSize.value=new P(window.innerWidth,window.innerHeight),_.uniforms.sourceTexelSize.value=new P(1/window.innerWidth,1/window.innerHeight),w.setSize(window.innerWidth,window.innerHeight)}function pt(){B.update(),w.render(f,h),l["show/disable dilation(post-process)"]?b.render():d.render(f,h)}function re(){requestAnimationFrame(re);for(let e=0;e!==U;++e){const a=I[e],n=a.getClip(),i=L[n.name]||E[n.name];i.weight=a.getEffectiveWeight()}ct(),g.update();let t=ee.getDelta();M&&(t=j,j=0),D.update(t);for(const e of J)e.update(t);pt()}
