const templates = document.querySelectorAll('template');

templates.forEach((template) => {
    // Clone the content of the template
    const clonedContent = template.content.cloneNode(true);

    // Find the container where you want to append the cloned content
    const componentContent = template.closest('.section').querySelector('.content');

    // Append the cloned content to the container
    componentContent.appendChild(clonedContent);
});
