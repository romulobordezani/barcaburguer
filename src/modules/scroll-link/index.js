export default function scrollLink(elementSelector, behavior = null, wait = 300) {

    let target = null;

    if (!elementSelector) {
        return;
    }

    // In case an HTMLElement was sent, we can use it directly
    if (elementSelector instanceof HTMLElement) {
        target = elementSelector;
    }

    // In case an ID was sent, we need to get the element by ID
    if (typeof elementSelector === 'string' && elementSelector.startsWith('#')) {
        target = document.getElementById(elementSelector.substring(1));
    }

    // In case a selector was sent, we need to get the element by selector
    if (typeof elementSelector === 'string' && !elementSelector.startsWith('#')) {
        target = document.querySelector(elementSelector);
    }

    if (!target) {
        console.error(`Element not found: ${elementSelector}`);
        return;
    }

    // We need to use a resolution based behavior for mobile
    const resolutionBasedBehavior = screen.width > 768 ? { behavior: 'smooth' } : { behavior: 'instant' };

    const behaviorConfig = !!behavior ? behavior : resolutionBasedBehavior;

    setTimeout(() => {
        if (target) {
            target.scrollIntoView(behaviorConfig);
        }
    }, wait);
}