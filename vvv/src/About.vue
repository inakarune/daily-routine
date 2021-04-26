<template>
<div class="about-container">
    <div class="left-profile">
        <div class="photo-zone">
            <div class="text">
                <h2>PROFILE</h2>
                <hr>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At fuga ipsa repellendus, corporis vero, pariatur temporibus possimus aspernatur dicta laborum odit totam, ducimus hic quod voluptates fugit ipsam quasi optio?
            </div>
        </div>
        <div class="text-zone">
            <div class="cate">
                <div class="icon"><i class="fas fa-map-marker-alt fa-2x"></i></div>
                <div class="text">
                    <p class="title">Address</p>
                    <hr>
                    <p>Bucheon-si, Gyeonggi-do</p>
                </div>
            </div>
            <div class="cate">
                <div class="icon"><i class="fas fa-envelope-open-text fa-2x"></i></div>
                <div class="text">
                    <p class="title">Email</p>
                    <hr>
                    <p>inakarune@naver.com</p>
                </div>
            </div>
            <div class="cate">
                <div class="icon"><i class="fas fa-edit fa-2x"></i></div>
                <div class="text">
                    <p class="title">Blog</p>
                    <hr>
                    <p>inakarune.github.io</p>
                </div>
            </div>
            <div class="cate">
                <div class="icon"><i class="fab fa-github-square fa-2x"></i></div>
                <div class="text">
                    <p class="title">Github</p>
                    <hr>
                    <p>github.com/inakarune</p>
                </div>
            </div>
            <div class="cate">
                <div class="icon"><i class="fas fa-file-code fa-2x"></i></div>
                <div class="text">
                    <p class="title">Codewars</p>
                    <hr>
                    <p>www.codewars.com/users/sey</p>
                </div>
            </div>
            <div class="cate">
                <div class="icon"><i class="far fa-file-code fa-2x"></i></div>
                <div class="text">
                    <p class="title">Leetcode</p>
                    <hr>
                    <p>https://github.com/inakarune</p>
                </div>
            </div>                           
        </div>
    </div>
    <div class="right-profile">
        <h1>Song-ei, YOON</h1>
        <p class="job">Front-end Developer</p>
        <hr class="line">
        <div class="category">
            <h2>PROFILE</h2>            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et qui enim doloremque repellendus. Temporibus beatae, officia magni architecto velit dolores illo officiis. Reiciendis incidunt omnis cupiditate aliquam animi repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. A non culpa magnam est aliquid labore voluptate beatae ad quam modi quasi sit illo nam ipsum quis cupiditate, ex sint atque.</p>
        </div>
        <div class="category">
            <h2>EXPERIENCE</h2>            
            <div id="content">
            <ul class="timeline">
                <li class="event" data-date="2021 - NOW">
                    <h3>IJB INC.</h3>
                    <p>Get here on time, it's first come first serve. Be late, get turned away.</p>
                </li>
                <li class="event" data-date="2018 - 2019">
                    <h3>IWSYS INC.</h3>
                    <p>Get ready for an exciting event, this will kick off in amazing fashion with MOP & Busta Rhymes as an opening show.</p>    
                </li>
                <li class="event" data-date="2017 - 2018">
                    <h3>RJ ENT</h3>
                    <p>This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!</p>    
                </li>
                <li class="event" data-date="2011 - 2016">
                    <h3>BPK INC.</h3>
                    <p>This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!</p>    
                </li>
            </ul>
            </div>            
        </div>
        <div class="category">
            <h2>EDUCATION</h2>            
            <div id="content">
            <ul class="timeline">
                <li class="event" data-date="2018.04 - 2018.08">
                    <h3>GOOGLE CLOUD PLATFORM STUDY JAM</h3>
                    <p>Get here on time, it's first come first serve. Be late, get turned away.</p>
                </li>
                <li class="event" data-date="2016.12 - 2017.02">
                    <h3>SILICON VALLEY CODING JAVASCRIPT CODING BOOT CAMP</h3>
                    <p>Get ready for an exciting event, this will kick off in amazing fashion with MOP & Busta Rhymes as an opening show.</p>    
                </li>
                <li class="event" data-date="2010.12 - 2011.03">
                    <h3>JAPAN LANGUAGE TRAINING</h3>
                </li>
                <li class="event" data-date="2007 - 2012">
                    <h3>PYEONGTACK UNIVERSITY, BACHELOR OF SOCIAL WELFARE</h3>
                </li>
                <li class="event" data-date="2004 - 2006">
                    <h3>BUCHEON GIRL'S HIGH SCHOOL</h3>
                </li>                
            </ul>
            </div>

        </div>
    </div>
</div>
</template>
<script>
import photo from './assets/photo.jpg';

export default {
    name: 'About',
    data: function() {
        return {
            photo: photo
        };
    }
}
</script>
<style>
.about-container {
    display: flex;
}
.left-profile {
    width: 300px;
    position: sticky;
    top: 0px;
    left: 0px;
}
.photo-zone {
    background-image: url(~@/assets/photo.jpg);
    height: 500px;
    position: relative;
    background-repeat: no-repeat;
    background-size: 100%;
}
.photo-zone .text {
    background-color: rgba(255, 165, 0, 0.6);
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding: 20px;
}
.photo-zone .text hr {
    border: none;
    border-bottom: 1px solid white;
}
.text-zone {
    background-color: #1b0a0a;
    color: white;
    padding: 30px;
}
.text-zone .cate {
    display: flex;
}
.text-zone .icon {
    padding: 15px;
    padding-left: 0px;
    width: 47px;
    box-sizing: border-box;
}
.text-zone .text {
    width: 100%;
    text-align: left;
}
.text-zone .text hr {
    border: none;
    border-bottom: 1px solid white;
}
.text-zone .cate .title {
    font-weight: bolder;
    letter-spacing: 1px;
}
.right-profile {
    width: 900px;
    padding: 30px;
}
.right-profile h1 {
    color: orange;
    letter-spacing: 4px;
    text-transform: uppercase;
}
.right-profile .category {
    margin-top: 100px;
}
.right-profile .category h2 {
    font-size: 16px;
    border-bottom: 4px solid orange;
    padding: 15px;
    font-weight: bold;
    text-align: left;
    padding-left: 0px;
    letter-spacing: 2px;
}
.right-profile .category p {
    padding-top: 10px;
    text-align: left;
}
.right-profile .job {
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
}
.right-profile .line {
    width: 350px;
}

#content {
  margin-top: 50px;
  text-align: center;
}
/* Timeline */
.timeline {
  border-left: 2px solid orange;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  color: black;
  margin: 50px auto;
  letter-spacing: 0.5px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  padding: 50px;
  list-style: none;
  text-align: left;
  font-weight: 100;
  max-width: 40%;
}
.timeline h1,
.timeline h2,
.timeline h3 {
  letter-spacing: 1.5px;
  font-weight: 900;
  font-size: 1.4em;
  line-height: 30px;
}
.timeline .event {
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
  padding-bottom: 25px;
  margin-bottom: 50px;
  position: relative;
}
.timeline .event:last-of-type {
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}
.timeline .event:before,
.timeline .event:after {
  position: absolute;
  display: block;
  top: 0;
}
.timeline .event:before {
  left: -217.5px;
  color: black;
  content: attr(data-date);
  text-align: right;
  font-weight: 900;
  font-size: 0.9em;
  min-width: 120px;
}
.timeline .event:after {
  box-shadow: 0 0 0 4px orange;
  left: -57.2px;
  background: white;
  border-radius: 50%;
  height: 11px;
  width: 11px;
  content: "";
  top: 5px;
}

</style>
