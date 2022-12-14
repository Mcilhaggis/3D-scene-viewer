import GUI from 'lil-gui';


const createGui = () => {
    const gui = new GUI({
        container: document.getElementById('scene-container')
    });
    console.log(gui)
    const myObject = {
        myBoolean: true,
        myString: 'lil-gui',
        myNumber: 1,
        myFunction: function () { alert('hi') },
        moveLeft: function () { alert('move left') },
        moveRight: function () { alert('move right') },
        moveUp: function () { alert('move up') },
        moveDown: function () { alert('move down') }
    }
    // keyboard Controls
    gui.add(myObject, 'moveLeft'); // ButtonLeft
    gui.add(myObject, 'moveRight'); // ButtonRight
    gui.add(myObject, 'moveUp'); // ButtonUp
    gui.add(myObject, 'moveDown'); // ButtonDown


    // Add sliders to number fields by passing min and max
    gui.add(myObject, 'myNumber', 0, 1);
    gui.add(myObject, 'myNumber', 0, 100, 2); // snap to even numbers

    // Create dropdowns by passing an array or object of named values
    gui.add(myObject, 'myNumber', [0, 1, 2]);
    gui.add(myObject, 'myNumber', { Label1: 0, Label2: 1, Label3: 2 });


    // Chainable methods
    // gui.add(myObject, 'myProperty')
    // .myString('Custom Name')
    // .onChange(value => {
    //     console.log(value);
    // });

    // Create color pickers for multiple color formats
    const colorFormats = {
        string: '#ffffff',
        int: 0xffffff,
        object: { r: 1, g: 1, b: 1 },
        array: [1, 1, 1]
    };

    gui.addColor(colorFormats, 'string');

    let guiMenu = gui
    console.log(guiMenu)

    return { guiMenu }
}

export default createGui();