<template>
<nav>
    <div class="left"><h1>PORTFOLIO.</h1></div>
    <div class="right">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/work">Work</router-link></li>
        </ul>
        <div class="nav-img">

        </div>
    </div>
</nav>
</template>
<style>
nav {
    display: flex;
    width: inherit;
    height: 300px;
}
nav ul {
    display: flex;
}
.nav-img {
    background-image: url(../assets/photo.jpg);
}
.left {
    background-color: black;
    width: 300px;
    height: 100%;
}
.left h1 {
    color: white;
    letter-spacing: 2px;
}
.right {
    width: 960px;
    background-color: orange;
}
.right ul {
    display: flex;
    justify-content: space-around;
}
.right ul li a {
    color: white;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 1.5px;
}
.right ul li a:hover {
    border-bottom: 4px solid white;
}
.right .nav-img {
    height: 254px;
}
a {
    text-decoration: none;
}
</style>
