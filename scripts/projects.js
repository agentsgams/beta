function redoEvents() {
    Array.from(document.getElementsByClassName('project')).forEach(element => {
        element.addEventListener('mouseenter', function() {
            element.childNodes[1].classList.add('hovereffect');
            element.childNodes[3].classList.add('hovereffect-span');
        });
        element.addEventListener('mouseleave', function() {
            element.childNodes[1].classList.remove('hovereffect');
            element.childNodes[3].classList.remove('hovereffect-span');
        });
    });
}

function addItem(name, link, image) {

    var template = `
    <div style="width: 100%; max-width: 1500px;" class="image-container">
        <a href="${link}"><div class="project">
            <img src="${image}">
            <span>${name}</span>
        </div></a>&nbsp;
    </div>
    `;

    document.getElementById('projectlist').innerHTML = document.getElementById('projectlist').innerHTML + template;

};

addItem("1v1.lol", "example.com", "1v1lol.png");
redoEvents();