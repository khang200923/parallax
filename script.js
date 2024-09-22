function createObj(src, size, x, y, z) {
    let res = document.createElement("img");
    res.src = src;
    res.style.height = `${size}%`;
    res.style.width = "auto";
    res.style.position = "fixed";
    res.style.left = `${x}px`;
    res.style.top = `${y}px`;
    res.style.zIndex = Math.round(- z * 100);
    hel = window.addEventListener('scroll', function() {
        res.style.transform = `translateY(${- scrollY / z}px)`
    })
    document.body.appendChild(res);
}

window.onload = function() {
    createObj("39608.jpg", 200, 0, 0, 50);
    for (let i = 0; i < 300; i++) {
        let z = (1 + 5 * Math.random());
        createObj("star.png", 20 / z, Math.random() * 1200, Math.random() * 10000, z);
    }
    createObj("earth.png", 100, 100, 5000, 1);
}
