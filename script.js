window.onload = () => {
    setTimeout(() => {
        const container = document.querySelector('.logo-container');
        const wrapper = document.querySelector('.logo-wrapper');

        if (window.innerWidth <= 600) {
    container.style.top = "13%"; 
    wrapper.style.width = "150px";
} else {
    container.style.top = "13%";
    wrapper.style.width = "200px";
}

        setTimeout(() => {
            const links = document.querySelector('.links');
            links.style.visibility = "visible";
            links.classList.add('show');

            document.body.style.overflow = "auto";

            

        }, 500); 

    }, 2000); 
};
