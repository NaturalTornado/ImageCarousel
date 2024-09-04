// Revision: loadPage.js - rev-02

function loadPage() {
    const container = document.getElementById('container');
    const header = document.getElementById('header');
    const bigImageBox = document.getElementById('bigImageBox');
    const smallImageArea = document.getElementById('smallImageArea');
    const navButtons = document.getElementById('navButtons');
    const circleSelectors = document.querySelectorAll('.circleSelect');

    // Apply layout styles
    container.style.display = 'grid';
    container.style.gridTemplateRows = '10vh 40vh auto auto';
    container.style.gridTemplateColumns = '1fr';
    container.style.gridTemplateAreas = `
        "header"
        "bigImageBox"
        "smallImageArea"
        "navButtons"
    `;
    container.style.height = '100vh';

    header.style.gridArea = 'header';
    header.style.display = 'flex';
    header.style.justifyContent = 'center';
    header.style.alignItems = 'center';
    header.style.width = '100%';

    bigImageBox.style.gridArea = 'bigImageBox';
    bigImageBox.style.display = 'grid';
    bigImageBox.style.gridTemplate = '1fr';
    bigImageBox.style.width = '100%';

    smallImageArea.style.gridArea = 'smallImageArea';
    smallImageArea.style.display = 'grid';
    smallImageArea.style.gridTemplateColumns = '1fr 1fr 1fr';
    smallImageArea.style.margin = '0 20%';

    navButtons.style.gridArea = 'navButtons';
    navButtons.style.display = 'grid';
    navButtons.style.gridTemplateColumns = 'repeat(5, 1fr)';
    navButtons.style.gridTemplateRows = '1fr';
    navButtons.style.gap = '4px';

    circleSelectors.forEach((circleSelector) => {
        Object.assign(circleSelector.style, {
            border: 'solid 2px',
            borderRadius: '30px',
            padding: '4px',
            textAlign: 'center', // Ensures text is centered
            cursor: 'pointer', // Makes it clear that these are interactive
        });
    });

    createOnDeckDivs(smallImageArea);
}

function createOnDeckDivs(smallImageArea) {
    const onDeckDivIds = ['onDeckOne', 'onDeckTwo', 'onDeckThree'];
    onDeckDivIds.forEach((id) => {
        const div = document.createElement('div');
        div.id = id;
        div.className = 'onDeckImgBox';
        Object.assign(div.style, {
            backgroundColor: 'lightgray',
            border: 'solid 4px black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '150px', // Adjust height for visibility
        });
        smallImageArea.appendChild(div);
    });
}

export { loadPage };
