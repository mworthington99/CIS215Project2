/* author Elliott Beeley */

document.querySelectorAll('[hover-tooltip]').forEach(function(element) {

    const tooltipText = element.getAttribute('[hover-tooltip]');
    const tooltip = element.querySelector('[role = tooltip]');
    
    if (tooltip) {

        tooltip.textContent = tooltipText;

    }

});