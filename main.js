// Milestone 1
// Partendo dalla seguente struttura dati, mostriamo in pagina tutte le icone disponibili come da layout.

// Milestone 2
// Coloriamo le icone per tipo

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone


function getIcondsDb() {
    return [
        {
            name: "cat",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "crow",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "dog",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "dove",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "dragon",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "horse",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "hippo",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "fish",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "carrot",
            prefix: "fa-",
            type: "vegetable",
            family: "fas",
        },
        {
            name: "apple-alt",
            prefix: "fa-",
            type: "vegetable",
            family: "fas",
        },
        {
            name: "lemon",
            prefix: "fa-",
            type: "vegetable",
            family: "fas",
        },
        {
            name: "pepper-hot",
            prefix: "fa-",
            type: "vegetable",
            family: "fas",
        },
        {
            name: "user-astronaut",
            prefix: "fa-",
            type: "user",
            family: "fas",
        },
        {
            name: "user-graduate",
            prefix: "fa-",
            type: "user",
            family: "fas",
        },
        {
            name: "user-ninja",
            prefix: "fa-",
            type: "user",
            family: "fas",
        },
        {
            name: "user-secret",
            prefix: "fa-",
            type: "user",
            family: "fas",
        },
    ];

};

function printIcons(array, colors) {

    const selectType = getSelect()
    const container = $('.container')
    const icon = container.find('.icons')
    icon.html('')


    array.forEach(element => {

        const name = element.name;
        const type = element.type

        if (type == selectType && selectType != ''){

            icon.append(`
            <div>
                <i class="fas fa-${name}" style="color:${colors[type]}"></i>
                <div class="title">${name.toUpperCase()}</div>
            </div>
            `)
        }
        else if (selectType == ''){

            icon.append(`
            <div>
                <i class="fas fa-${name}" style="color:${colors[type]}"></i>
                <div class="title">${name.toUpperCase()}</div>
            </div>
            `)
        }
    });
};

function getTypes(array) {

    const typesArr = [];
    array.forEach(obj => {

        const type = obj.type
        if (!typesArr.includes(type)) {

            typesArr.push(type)
        }
    });
    return typesArr
};

function getColors() {

    return ['blue', 'orange', 'green', 'red', 'black', 'yellow', 'pink', 'brown', 'purple', 'gray']
};

function colorIcons(colors, typeArray) {

    const res = {}
    typeArray.forEach((key, i) => res[key] = colors[i]);
    return res
};

function getSelect() {

    return $('#type').val()
};

function init() {

    // '"import" all the icons
    const allIcons = getIcondsDb()

    //create obj for color assignment
    const arrOfTypes = getTypes(allIcons)
    const arrOfColors = getColors();
    const assignColors = colorIcons(arrOfColors, arrOfTypes)

    printIcons(allIcons, assignColors)

    $('#type').change(function() {

        // print icons on page
        printIcons(allIcons, assignColors)
    });
};

$(init)
