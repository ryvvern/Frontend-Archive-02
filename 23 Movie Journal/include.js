// include.js
document.addEventListener("DOMContentLoaded", async () => {
    const loadTemplate = async (templatePath) => {
        try {
            const response = await fetch(templatePath);
            return await response.text();
        } catch (error) {
            console.error(`Error loading template ${templatePath}:`, error);
            return '';
        }
    };

    const headerTarget = document.getElementById("site-header");
    const footerTarget = document.getElementById("site-footer");
    const blogsTarget = document.getElementById("site-blogs");

    if (headerTarget) {
        headerTarget.innerHTML = await loadTemplate('./templates/header.html');
    }
    if (footerTarget) {
        footerTarget.innerHTML = await loadTemplate('./templates/footer.html');
    }
    if (blogsTarget) {
        blogsTarget.innerHTML = await loadTemplate('./templates/blogs.html');
    }
});
